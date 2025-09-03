# Cookie Consent System Documentation

## Overview

This document explains how to use and maintain the GDPR-compliant cookie consent system implemented for FinoktAI.

## Architecture

The cookie consent system consists of:

- **ConsentManager**: Core logic for managing consent choices and script loading
- **CookieBanner**: Displays initial consent prompt for EU/EEA users
- **CookieSettingsModal**: Allows users to customize consent preferences
- **CookieConsent**: Main component that orchestrates banner and modal
- **Third-party Script Registry**: Centralized configuration for external scripts

## Adding New Third-Party Scripts

To add a new third-party script, edit `src/lib/consent-manager.ts`:

```typescript
export const thirdPartyScripts: ThirdPartyScript[] = [
  // ... existing scripts
  {
    id: 'new-script-id',
    category: 'analytics', // or 'marketing', 'preferences'
    name: 'Script Display Name',
    description: 'Brief description of the script',
    src: 'https://external-script-url.com/script.js', // For external scripts
    // OR
    code: `
      // Inline script code goes here
      console.log('Inline script loaded');
    `,
    enabled: false
  }
];
```

## Script Categories

- **strictly-necessary**: Essential functionality (always enabled)
- **preferences**: User experience enhancements
- **analytics**: Website usage tracking
- **marketing**: Advertising and remarketing

## Loading Scripts Based on Consent

### Method 1: Using the Consent Manager Queue

```typescript
import { consentManager } from '@/lib/consent-manager';

// Queue a script to load only if analytics consent is given
consentManager.queueScript('analytics', () => {
  // Your analytics initialization code
  gtag('config', 'GA_MEASUREMENT_ID');
});
```

### Method 2: Checking Consent Status

```typescript
import { consentManager } from '@/lib/consent-manager';

const choices = consentManager.getConsentChoices();
if (choices?.analytics) {
  // Load analytics script
  loadAnalyticsScript();
}
```

### Method 3: Listening for Consent Changes

```typescript
import { consentManager } from '@/lib/consent-manager';

const unsubscribe = consentManager.onConsentChange((choices) => {
  if (choices.analytics) {
    loadAnalyticsScript();
  } else {
    removeAnalyticsScript();
  }
});

// Don't forget to unsubscribe when component unmounts
return unsubscribe;
```

## Internationalization

### Current Languages

- English (`en`)
- Spanish (`es`)

### Adding New Languages

1. Edit `src/types/consent.ts` to add the language code to the `Language` type:

```typescript
export type Language = 'en' | 'es' | 'fr' | 'ar'; // Add new languages here
```

2. Add translations in `src/lib/consent-texts.ts`:

```typescript
export const consentTexts: Record<Language, ConsentTexts> = {
  // ... existing languages
  fr: {
    banner: {
      title: 'Nous utilisons des cookies',
      // ... other French translations
    },
    modal: {
      // ... French modal translations
    }
  }
};
```

3. Pass the language to the CookieConsent component:

```typescript
<CookieConsent language="fr" />
```

## Configuration

### Consent Expiry

Consent choices expire after 6 months. To modify:

```typescript
// In src/lib/consent-manager.ts
const CONSENT_EXPIRY_MONTHS = 6; // Change this value
```

### Cookie Settings

The consent cookie uses these attributes:
- **Name**: `finokt_consent`
- **Secure**: Yes
- **SameSite**: Lax
- **Path**: /
- **Max-Age**: 6 months

### EU/EEA Detection

The system uses timezone-based detection for EU users. For more sophisticated detection, modify the `isEuUser()` method in `ConsentManager`.

## API Reference

### ConsentManager Methods

```typescript
// Check if user should see banner
consentManager.shouldShowBanner(): boolean

// Get current consent choices
consentManager.getConsentChoices(): ConsentChoices | null

// Save consent choices
consentManager.saveConsentChoices(choices: ConsentChoices): void

// Queue script for conditional loading
consentManager.queueScript(category: ConsentCategory, scriptFn: () => void): void

// Withdraw all consent
consentManager.withdrawConsent(): void

// Listen for consent changes
consentManager.onConsentChange(callback: (choices: ConsentChoices) => void): () => void

// Check if user is in EU/EEA
consentManager.isEuUser(): boolean
```

## Testing

### Manual Testing Checklist

1. **First Visit (EU user)**:
   - [ ] Banner appears on first visit
   - [ ] Non-essential scripts are blocked
   - [ ] "Accept All" loads all scripts
   - [ ] "Reject All" only keeps necessary cookies
   - [ ] "Customize" opens modal with correct toggles

2. **Consent Persistence**:
   - [ ] Choices persist across page reloads
   - [ ] Choices persist across browser sessions
   - [ ] Choices expire after 6 months

3. **Accessibility**:
   - [ ] Banner and modal are keyboard navigable
   - [ ] Focus states are visible
   - [ ] Screen reader compatible
   - [ ] Sufficient color contrast

4. **Responsive Design**:
   - [ ] Banner doesn't block page scroll on mobile
   - [ ] Modal is usable on small screens
   - [ ] Touch interactions work properly

### Simulating EU User

To test EU user behavior during development:

```typescript
// Temporarily modify isEuUser() to return true
isEuUser(): boolean {
  return true; // Force EU behavior for testing
}
```

## Compliance Notes

- The system respects Do Not Track browser settings
- Consent is freely given, specific, informed, and unambiguous
- Users can withdraw consent at any time
- Non-essential cookies are only set after explicit consent
- Consent choices are logged with timestamp and version

## Troubleshooting

### Common Issues

1. **Scripts not loading**: Check that the category is enabled in consent choices
2. **Banner not showing**: Verify EU detection and consent storage
3. **Modal not opening**: Check for console errors and event handlers
4. **Consent not persisting**: Verify cookie and localStorage functionality

### Debug Mode

Add console logging to track consent behavior:

```typescript
// In ConsentManager constructor
console.log('Consent Manager initialized');
console.log('Should show banner:', this.shouldShowBanner());
console.log('Current choices:', this.getConsentChoices());
```

## Security Considerations

- Consent data is stored in first-party cookies only
- No sensitive data is included in consent records
- Script loading is gated by explicit user consent
- External scripts are loaded with appropriate security attributes
