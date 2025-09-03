import { useState } from 'react';
import { CookieBanner } from './CookieBanner';
import { CookieSettingsModal } from './CookieSettingsModal';
import { Language } from '@/types/consent';

interface CookieConsentProps {
  language?: Language;
}

export const CookieConsent = ({ language = 'en' }: CookieConsentProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCustomize = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <CookieBanner onCustomize={handleCustomize} language={language} />
      <CookieSettingsModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        language={language} 
      />
    </>
  );
};