import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, Building2, Target, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useI18n } from "@/lib/i18n";

export const About = () => {
  const navigate = useNavigate();
  const { t } = useI18n();

  const handleDemoClick = () => {
    navigate("/demo");
  };

  const handleLinkedinClick = () => {
    window.open("https://linkedin.com/in/noahzaidi", "_blank");
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4">
            {t("about.header")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("about.subheader")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mission & Company Info */}
          <div>
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Target className="h-6 w-6 text-brand-blue" />
                <h3 className="text-2xl font-bold text-brand-navy">{t("about.mission.title")}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t("about.mission.desc")}
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="h-6 w-6 text-brand-blue" />
                <h3 className="text-2xl font-bold text-brand-navy">{t("about.why.title")}</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-fintech-success rounded-full mt-2 flex-shrink-0"></div>
                  <span>{t("about.why.1")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-fintech-success rounded-full mt-2 flex-shrink-0"></div>
                  <span>{t("about.why.2")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-fintech-success rounded-full mt-2 flex-shrink-0"></div>
                  <span>{t("about.why.3")}</span>
                </li>
              </ul>
            </div>

            <Button variant="cta" size="lg" onClick={handleDemoClick}>
              {t("about.cta")}
            </Button>
          </div>

          {/* Founder Info */}
          <Card className="border-border shadow-card">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-brand-blue">
                  <img 
                    src={`${import.meta.env.BASE_URL}uploads/f38f3be7-e6c5-4814-8bc0-5c353c96d786.png`} 
                    alt="Noah Zaidi - Co-founder & CEO of FinoktAI"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-2">Noah Zaidi</h3>
                <p className="text-brand-blue font-semibold mb-4">{t("about.founder.role")}</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-brand-blue" />
                  <span className="text-muted-foreground">{t("about.founder.pmp")}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">{t("about.badge.pm")}</Badge>
                  <Badge variant="secondary">{t("about.badge.ce")}</Badge>
                  <Badge variant="secondary">{t("about.badge.ai")}</Badge>
                  <Badge variant="secondary">{t("about.badge.fintech")}</Badge>
                  <Badge variant="secondary">{t("about.badge.trade")}</Badge>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {t("about.founder.bio")}
              </p>

              <Button 
                variant="outline" 
                onClick={handleLinkedinClick}
                className="w-full group"
              >
                <Linkedin className="h-4 w-4 mr-2 group-hover:text-accent transition-colors" />
                {t("about.linkedin")}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};