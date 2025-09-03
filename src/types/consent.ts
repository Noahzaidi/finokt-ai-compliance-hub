export type ConsentCategory = 'strictly-necessary' | 'preferences' | 'analytics' | 'marketing';

export interface ConsentChoices {
  'strictly-necessary': boolean;
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
}

export interface ConsentData {
  choices: ConsentChoices;
  timestamp: string;
  version: string;
  consentId: string;
}

export interface ThirdPartyScript {
  id: string;
  category: ConsentCategory;
  name: string;
  description: string;
  src?: string;
  code?: string;
  enabled: boolean;
}

export type Language = 'en' | 'es';

export interface ConsentTexts {
  banner: {
    title: string;
    description: string;
    acceptAll: string;
    rejectAll: string;
    customize: string;
    privacyPolicy: string;
  };
  modal: {
    title: string;
    description: string;
    categories: {
      [K in ConsentCategory]: {
        title: string;
        description: string;
      };
    };
    save: string;
    cancel: string;
    withdraw: string;
  };
}