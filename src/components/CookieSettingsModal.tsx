import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Shield, Eye, Target, Sliders, Trash2 } from 'lucide-react';
import { consentManager } from '@/lib/consent-manager';
import { consentTexts } from '@/lib/consent-texts';
import { ConsentChoices, ConsentCategory, Language } from '@/types/consent';

interface CookieSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  language?: Language;
}

const categoryIcons = {
  'strictly-necessary': Shield,
  preferences: Sliders,
  analytics: Eye,
  marketing: Target
} as const;

export const CookieSettingsModal = ({ isOpen, onClose, language = 'en' }: CookieSettingsModalProps) => {
  const [choices, setChoices] = useState<ConsentChoices>({
    'strictly-necessary': true,
    preferences: false,
    analytics: false,
    marketing: false
  });

  const texts = consentTexts[language].modal;

  useEffect(() => {
    if (isOpen) {
      const currentChoices = consentManager.getConsentChoices();
      if (currentChoices) {
        setChoices(currentChoices);
      }
    }
  }, [isOpen]);

  const handleToggle = (category: ConsentCategory) => {
    if (category === 'strictly-necessary') return; // Cannot be disabled
    
    setChoices(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const handleSave = () => {
    consentManager.saveConsentChoices(choices);
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  const handleWithdraw = () => {
    consentManager.withdrawConsent();
    setChoices({
      'strictly-necessary': true,
      preferences: false,
      analytics: false,
      marketing: false
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="max-w-2xl max-h-[90vh] overflow-y-auto"
        onPointerDownOutside={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            {texts.title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {texts.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {(Object.keys(texts.categories) as ConsentCategory[]).map((category) => {
            const Icon = categoryIcons[category];
            const isRequired = category === 'strictly-necessary';
            
            return (
              <Card key={category} className="border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-brand-blue" />
                      <CardTitle className="text-base">
                        {texts.categories[category].title}
                        {isRequired && (
                          <span className="ml-2 text-xs text-muted-foreground font-normal">
                            (Required)
                          </span>
                        )}
                      </CardTitle>
                    </div>
                    <Switch
                      checked={choices[category]}
                      onCheckedChange={() => handleToggle(category)}
                      disabled={isRequired}
                      className="data-[state=checked]:bg-brand-blue"
                    />
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground">
                    {texts.categories[category].description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Separator className="my-4" />

        <div className="flex flex-col sm:flex-row gap-3 justify-between">
          <Button
            variant="outline"
            onClick={handleWithdraw}
            className="gap-2 text-destructive hover:text-destructive border-destructive/20 hover:border-destructive/40"
          >
            <Trash2 className="h-4 w-4" />
            {texts.withdraw}
          </Button>
          
          <div className="flex gap-3">
            <Button variant="outline" onClick={handleCancel}>
              {texts.cancel}
            </Button>
            <Button 
              onClick={handleSave}
              className="bg-brand-blue hover:bg-brand-navy text-white"
            >
              {texts.save}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};