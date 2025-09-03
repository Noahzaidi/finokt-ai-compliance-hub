import { ConsentChoices, ConsentData, ThirdPartyScript, ConsentCategory } from '@/types/consent';

const CONSENT_COOKIE_NAME = 'finokt_consent';
const CONSENT_VERSION = '1.0.0';
const CONSENT_EXPIRY_MONTHS = 6;

// Third-party scripts registry
export const thirdPartyScripts: ThirdPartyScript[] = [
  {
    id: 'google-analytics',
    category: 'analytics',
    name: 'Google Analytics',
    description: 'Web analytics service',
    src: 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID',
    enabled: false
  },
  {
    id: 'google-ads',
    category: 'marketing',
    name: 'Google Ads',
    description: 'Advertising platform',
    src: 'https://googleads.g.doubleclick.net/pagead/viewthroughconversion/CONVERSION_ID',
    enabled: false
  },
  {
    id: 'facebook-pixel',
    category: 'marketing',
    name: 'Facebook Pixel',
    description: 'Social media advertising',
    code: `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', 'FACEBOOK_PIXEL_ID');
      fbq('track', 'PageView');
    `,
    enabled: false
  }
];

class ConsentManager {
  private listeners: Array<(choices: ConsentChoices) => void> = [];
  private queuedScripts: Array<() => void> = [];

  constructor() {
    if (typeof window !== 'undefined') {
      this.loadConsentChoices();
    }
  }

  // Generate unique consent ID
  private generateConsentId(): string {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }

  // Check if user is in EU/EEA (simplified detection)
  isEuUser(): boolean {
    if (typeof window === 'undefined') return false;
    
    // Check Do Not Track first
    if (navigator.doNotTrack === '1') return true;
    
    // Simple timezone-based detection for EU
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const euTimezones = [
      'Europe/', 'Atlantic/Azores', 'Atlantic/Madeira', 'Atlantic/Canary'
    ];
    
    return euTimezones.some(tz => timezone.startsWith(tz));
  }

  // Get current consent choices
  getConsentChoices(): ConsentChoices | null {
    if (typeof window === 'undefined') return null;

    try {
      // Try localStorage first (faster)
      const stored = localStorage.getItem(CONSENT_COOKIE_NAME);
      if (stored) {
        const data: ConsentData = JSON.parse(stored);
        if (this.isConsentValid(data)) {
          return data.choices;
        }
      }

      // Fallback to cookie
      const cookieValue = this.getCookie(CONSENT_COOKIE_NAME);
      if (cookieValue) {
        const data: ConsentData = JSON.parse(cookieValue);
        if (this.isConsentValid(data)) {
          return data.choices;
        }
      }
    } catch (error) {
      console.error('Error reading consent choices:', error);
    }

    return null;
  }

  // Check if consent data is still valid
  private isConsentValid(data: ConsentData): boolean {
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - CONSENT_EXPIRY_MONTHS);
    
    const consentDate = new Date(data.timestamp);
    return consentDate > sixMonthsAgo && data.version === CONSENT_VERSION;
  }

  // Save consent choices
  saveConsentChoices(choices: ConsentChoices): void {
    const consentData: ConsentData = {
      choices,
      timestamp: new Date().toISOString(),
      version: CONSENT_VERSION,
      consentId: this.generateConsentId()
    };

    const serialized = JSON.stringify(consentData);

    // Save to localStorage
    try {
      localStorage.setItem(CONSENT_COOKIE_NAME, serialized);
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }

    // Save to cookie
    this.setCookie(CONSENT_COOKIE_NAME, serialized, CONSENT_EXPIRY_MONTHS * 30);

    // Update script loading
    this.updateScriptLoading(choices);

    // Notify listeners
    this.listeners.forEach(listener => listener(choices));
  }

  // Load scripts based on consent
  private updateScriptLoading(choices: ConsentChoices): void {
    thirdPartyScripts.forEach(script => {
      const categoryAllowed = choices[script.category];
      
      if (categoryAllowed && !script.enabled) {
        this.loadScript(script);
        script.enabled = true;
      } else if (!categoryAllowed && script.enabled) {
        // Remove script if consent withdrawn
        this.removeScript(script);
        script.enabled = false;
      }
    });

    // Process queued scripts
    if (this.queuedScripts.length > 0) {
      this.queuedScripts.forEach(scriptFn => scriptFn());
      this.queuedScripts = [];
    }
  }

  // Load a third-party script
  private loadScript(script: ThirdPartyScript): void {
    if (script.src) {
      const scriptElement = document.createElement('script');
      scriptElement.src = script.src;
      scriptElement.async = true;
      scriptElement.id = `consent-script-${script.id}`;
      document.head.appendChild(scriptElement);
    }

    if (script.code) {
      const scriptElement = document.createElement('script');
      scriptElement.textContent = script.code;
      scriptElement.id = `consent-script-${script.id}`;
      document.head.appendChild(scriptElement);
    }
  }

  // Remove a third-party script
  private removeScript(script: ThirdPartyScript): void {
    const scriptElement = document.getElementById(`consent-script-${script.id}`);
    if (scriptElement) {
      scriptElement.remove();
    }
  }

  // Queue script for later loading
  queueScript(category: ConsentCategory, scriptFn: () => void): void {
    const choices = this.getConsentChoices();
    
    if (choices && choices[category]) {
      scriptFn();
    } else {
      this.queuedScripts.push(scriptFn);
    }
  }

  // Load initial consent and scripts
  private loadConsentChoices(): void {
    const choices = this.getConsentChoices();
    if (choices) {
      this.updateScriptLoading(choices);
    }
  }

  // Withdraw all consent
  withdrawConsent(): void {
    // Clear storage
    localStorage.removeItem(CONSENT_COOKIE_NAME);
    this.deleteCookie(CONSENT_COOKIE_NAME);

    // Remove all non-essential scripts
    thirdPartyScripts.forEach(script => {
      if (script.category !== 'strictly-necessary') {
        this.removeScript(script);
        script.enabled = false;
      }
    });

    // Clear queued scripts
    this.queuedScripts = [];

    // Notify listeners
    const essentialOnly: ConsentChoices = {
      'strictly-necessary': true,
      preferences: false,
      analytics: false,
      marketing: false
    };
    this.listeners.forEach(listener => listener(essentialOnly));
  }

  // Subscribe to consent changes
  onConsentChange(callback: (choices: ConsentChoices) => void): () => void {
    this.listeners.push(callback);
    
    // Return unsubscribe function
    return () => {
      const index = this.listeners.indexOf(callback);
      if (index > -1) {
        this.listeners.splice(index, 1);
      }
    };
  }

  // Check if user needs to see banner
  shouldShowBanner(): boolean {
    if (!this.isEuUser()) return false;
    return this.getConsentChoices() === null;
  }

  // Helper: Set cookie
  private setCookie(name: string, value: string, days: number): void {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/;secure;samesite=lax`;
  }

  // Helper: Get cookie
  private getCookie(name: string): string | null {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) {
        return decodeURIComponent(c.substring(nameEQ.length, c.length));
      }
    }
    return null;
  }

  // Helper: Delete cookie
  private deleteCookie(name: string): void {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;secure;samesite=lax`;
  }
}

export const consentManager = new ConsentManager();