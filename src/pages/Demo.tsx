import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";

export const Demo = () => {
  const { t } = useI18n();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
              {t("demo.title")}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("demo.subtitle")}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Demo Info */}
            <div>
              <Card className="border-border shadow-card mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-brand-navy flex items-center gap-3">
                    <Calendar className="h-6 w-6 text-brand-blue" />
                    {t("demo.expect")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-fintech-success mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-brand-navy">{t("demo.expect.1.title")}</h3>
                      <p className="text-muted-foreground">{t("demo.expect.1.desc")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-fintech-success mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-brand-navy">{t("demo.expect.2.title")}</h3>
                      <p className="text-muted-foreground">{t("demo.expect.2.desc")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-fintech-success mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-brand-navy">{t("demo.expect.3.title")}</h3>
                      <p className="text-muted-foreground">{t("demo.expect.3.desc")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-fintech-success mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-brand-navy">{t("demo.expect.4.title")}</h3>
                      <p className="text-muted-foreground">{t("demo.expect.4.desc")}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-brand-navy flex items-center gap-3">
                    <Clock className="h-6 w-6 text-brand-blue" />
                    {t("demo.details")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-brand-navy mb-1">{t("demo.details.duration")}</h4>
                      <p className="text-muted-foreground">{t("demo.details.duration.value")}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy mb-1">{t("demo.details.format")}</h4>
                      <p className="text-muted-foreground">{t("demo.details.format.value")}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy mb-1">{t("demo.details.presenter")}</h4>
                      <p className="text-muted-foreground">{t("demo.details.presenter.value")}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy mb-1">{t("demo.details.followUp")}</h4>
                      <p className="text-muted-foreground">{t("demo.details.followUp.value")}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Calendly Embed */}
            <div className="lg:sticky lg:top-8">
              <Card className="border-border shadow-fintech">
                <CardHeader>
                  <CardTitle className="text-2xl text-brand-navy text-center">
                    {t("demo.selectTime")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="w-full h-[600px] rounded-b-lg overflow-hidden">
                    <iframe
                      src="https://calendly.com/noahzaidi/30min"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      title="Schedule a demo with FinoktAI"
                      className="rounded-b-lg"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};