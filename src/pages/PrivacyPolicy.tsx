import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Settings, Mail } from 'lucide-react';
import { CookieSettingsModal } from '@/components/CookieSettingsModal';

const PrivacyPolicy = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground">
              How we collect, use, and protect your information
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="space-y-8">
            {/* Cookie Information */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-brand-blue" />
                  Cookie Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar technologies to enhance your browsing experience, 
                  analyze site traffic, and serve personalized content. Below are the categories 
                  of cookies we use:
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Strictly Necessary</h4>
                    <p className="text-sm text-muted-foreground">
                      Essential cookies required for the website to function properly. These cannot be disabled 
                      and include session management, security features, and consent preferences.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Preferences</h4>
                    <p className="text-sm text-muted-foreground">
                      Cookies that remember your choices and settings to provide enhanced features 
                      and personalized experience across visits.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Analytics</h4>
                    <p className="text-sm text-muted-foreground">
                      Cookies that help us understand how visitors interact with our website by 
                      collecting anonymous information about usage patterns and performance metrics.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Marketing</h4>
                    <p className="text-sm text-muted-foreground">
                      Cookies used to deliver relevant advertisements and measure the effectiveness 
                      of our marketing campaigns across different platforms.
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
                    Manage Cookie Settings
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Data Retention */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Data Retention</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    We retain your personal information only for as long as necessary to fulfill 
                    the purposes for which it was collected:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Cookie consent preferences: 6 months</li>
                    <li>Analytics data: Anonymized after 26 months</li>
                    <li>Marketing data: Until consent is withdrawn</li>
                    <li>Essential operational data: As required by law</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Your Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Under GDPR and other privacy laws, you have the following rights:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><strong>Access:</strong> Request a copy of your personal data</li>
                    <li><strong>Rectification:</strong> Correct inaccurate personal data</li>
                    <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                    <li><strong>Portability:</strong> Receive your data in a structured format</li>
                    <li><strong>Objection:</strong> Object to processing of your personal data</li>
                    <li><strong>Withdraw consent:</strong> Withdraw consent at any time</li>
                  </ul>
                  
                  <div className="pt-4">
                    <p className="text-sm text-muted-foreground mb-3">
                      To exercise these rights or ask questions about our privacy practices:
                    </p>
                    <Button 
                      variant="outline" 
                      className="gap-2"
                      onClick={() => window.open('mailto:privacy@finokt.com', '_blank')}
                    >
                      <Mail className="h-4 w-4" />
                      Contact Privacy Team
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    If you have questions about this Privacy Policy or our data practices, 
                    please contact us:
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Email:</strong> privacy@finokt.com</p>
                    <p><strong>Data Protection Officer:</strong> noah.zaidi@finokt.com</p>
                    <p><strong>Response Time:</strong> Within 30 days of receipt</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Separator className="my-12" />

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              This privacy policy is effective as of the date listed above and may be updated 
              from time to time. We will notify you of any significant changes.
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