import { useState } from 'react';
import { CookieBanner } from './CookieBanner';
import { CookieSettingsModal } from './CookieSettingsModal';
import { Language } from '@/types/consent';
import { useI18n } from '@/lib/i18n';

interface CookieConsentProps {
  language?: Language;
}

export const CookieConsent = ({ language: propLanguage = 'en' }: CookieConsentProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language } = useI18n();

  const handleCustomize = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <CookieBanner onCustomize={handleCustomize} language={language as Language} />
      <CookieSettingsModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        language={language as Language} 
      />
    </>
  );
};