import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Settings, Mail } from 'lucide-react';
import { CookieSettingsModal } from '@/components/CookieSettingsModal';
import { useI18n } from '@/lib/i18n';

const PrivacyPolicy = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t, language } = useI18n();

  const handleCookieSettings = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {t('privacy.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('privacy.subtitle')}
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              {t('privacy.lastUpdated')}: {new Date().toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="space-y-8">
            {/* Cookie Information */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-brand-blue" />
                  {t('privacy.cookieInfo')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {t('privacy.cookie.p1')}
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{t('privacy.cookie.strict')}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t('privacy.cookie.strict.desc')}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{t('privacy.cookie.pref')}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t('privacy.cookie.pref.desc')}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{t('privacy.cookie.analytics')}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t('privacy.cookie.analytics.desc')}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{t('privacy.cookie.marketing')}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t('privacy.cookie.marketing.desc')}
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <Button 
                    onClick={handleCookieSettings}
                    variant="outline"
                    className="gap-2"
                  >
                    <Settings className="h-4 w-4" />
                    {t('privacy.manageCookies')}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Data Retention */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle>{t('privacy.dataRetention')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {t('privacy.dataRetention.p1')}
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>{t('privacy.dataRetention.item1')}</li>
                    <li>{t('privacy.dataRetention.item2')}</li>
                    <li>{t('privacy.dataRetention.item3')}</li>
                    <li>{t('privacy.dataRetention.item4')}</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle>{t('privacy.rights')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {t('privacy.rights.p1')}
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><strong>{t('privacy.rights.access').split(':')[0]}:</strong> {t('privacy.rights.access').split(':').slice(1).join(':').trim()}</li>
                    <li><strong>{t('privacy.rights.rectification').split(':')[0]}:</strong> {t('privacy.rights.rectification').split(':').slice(1).join(':').trim()}</li>
                    <li><strong>{t('privacy.rights.erasure').split(':')[0]}:</strong> {t('privacy.rights.erasure').split(':').slice(1).join(':').trim()}</li>
                    <li><strong>{t('privacy.rights.portability').split(':')[0]}:</strong> {t('privacy.rights.portability').split(':').slice(1).join(':').trim()}</li>
                    <li><strong>{t('privacy.rights.objection').split(':')[0]}:</strong> {t('privacy.rights.objection').split(':').slice(1).join(':').trim()}</li>
                    <li><strong>{t('privacy.rights.withdraw').split(':')[0]}:</strong> {t('privacy.rights.withdraw').split(':').slice(1).join(':').trim()}</li>
                  </ul>
                  
                  <div className="pt-4">
                    <p className="text-sm text-muted-foreground mb-3">
                      {t('privacy.rights.contactPreface')}
                    </p>
                    <Button 
                      variant="outline" 
                      className="gap-2"
                      onClick={() => window.open('mailto:privacy@finokt.com', '_blank')}
                    >
                      <Mail className="h-4 w-4" />
                      {t('privacy.rights.contact')}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle>{t('privacy.contactInfo')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {t('privacy.contactInfo.p1')}
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>{t('privacy.contactInfo.email')}</strong> privacy@finokt.com</p>
                    <p><strong>{t('privacy.contactInfo.dpo')}</strong> noah.zaidi@finokt.com</p>
                    <p><strong>{t('privacy.contactInfo.response')}</strong> {t('privacy.contactInfo.response.value')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Separator className="my-12" />

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              {t('privacy.footer')}
            </p>
          </div>
        </div>
      </main>

      <Footer />
      
      <CookieSettingsModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default PrivacyPolicy;