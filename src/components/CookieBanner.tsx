import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { X, Cookie, Settings, ExternalLink } from 'lucide-react';
import { consentManager } from '@/lib/consent-manager';
import { consentTexts } from '@/lib/consent-texts';
import { ConsentChoices, Language } from '@/types/consent';

interface CookieBannerProps {
  onCustomize: () => void;
  language?: Language;
}

export const CookieBanner = ({ onCustomize, language = 'en' }: CookieBannerProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(consentManager.shouldShowBanner());
  }, []);

  const texts = consentTexts[language].banner;

  const handleAcceptAll = () => {
    const choices: ConsentChoices = {
      'strictly-necessary': true,
      preferences: true,
      analytics: true,
      marketing: true
    };
    consentManager.saveConsentChoices(choices);
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const choices: ConsentChoices = {
      'strictly-necessary': true,
      preferences: false,
      analytics: false,
      marketing: false
    };
    consentManager.saveConsentChoices(choices);
    setIsVisible(false);
  };

  const handleCustomize = () => {
    onCustomize();
  };

  const handlePrivacyPolicy = () => {
    window.open('/privacy-policy', '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="bg-card border-border shadow-lg max-w-5xl mx-auto">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <Cookie className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
            
            <div className="flex-1 min-w-0">
              <h2 className="text-lg font-semibold text-foreground mb-2">
                {texts.title}
              </h2>
              
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {texts.description}
              </p>
              
              <div className="flex flex-wrap gap-3">
                <Button 
                  onClick={handleAcceptAll}
                  variant="default"
                  size="sm"
                  className="bg-brand-blue hover:bg-brand-navy text-white"
                >
                  {texts.acceptAll}
                </Button>
                
                <Button 
                  onClick={handleRejectAll}
                  variant="outline"
                  size="sm"
                >
                  {texts.rejectAll}
                </Button>
                
                <Button 
                  onClick={handleCustomize}
                  variant="outline"
                  size="sm"
                  className="gap-2"
                >
                  <Settings className="h-4 w-4" />
                  {texts.customize}
                </Button>
                
                <Button 
                  onClick={handlePrivacyPolicy}
                  variant="ghost"
                  size="sm"
                  className="gap-2 text-brand-blue hover:text-brand-navy"
                >
                  {texts.privacyPolicy}
                  <ExternalLink className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};