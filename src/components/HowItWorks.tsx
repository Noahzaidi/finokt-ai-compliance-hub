import { Card, CardContent } from "@/components/ui/card";
import { Upload, Brain, UserCheck, Shield, ScanFace } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const steps = [
  {
    step: "01",
    icon: Upload,
    titleKey: "how.1.title",
    descriptionKey: "how.1.desc"
  },
  {
    step: "02", 
    icon: ScanFace,
    titleKey: "how.2.title",
    descriptionKey: "how.2.desc"
  },
  {
    step: "03", 
    icon: Brain,
    titleKey: "how.3.title",
    descriptionKey: "how.3.desc"
  },
  {
    step: "04",
    icon: Shield,
    titleKey: "how.4.title",
    descriptionKey: "how.4.desc"
  },
  {
    step: "05",
    icon: UserCheck,
    titleKey: "how.5.title",
    descriptionKey: "how.5.desc"
  }
];

export const HowItWorks = () => {
  const { t } = useI18n();
  return (
    <section id="how-it-works" className="py-20 bg-gradient-futuristic relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute top-20 right-20 w-24 h-24 bg-brand-blue/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-brand-navy/5 rounded-full blur-2xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4">
            {t("how.header")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("how.description")}
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="border-border hover:shadow-glow transition-all duration-300 group hover:border-brand-blue/30 relative overflow-hidden">
                {/* Futuristic background glow */}
                <div className="absolute inset-0 bg-gradient-futuristic opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-8 text-center relative z-10">
                  {/* Step Number with enhanced styling */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-hero text-white rounded-full text-2xl font-bold mb-6 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                    {step.step}
                  </div>

                  {/* Icon with blue styling */}
                  <div className="w-16 h-16 bg-brand-blue/20 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-blue/30 transition-colors duration-300">
                    <step.icon className="h-8 w-8 text-brand-navy" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-brand-navy mb-4">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(step.descriptionKey)}
                  </p>
                </CardContent>
              </Card>

              {/* Enhanced Connector Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-12 transform -translate-y-1/2 z-10">
                  <div className="w-8 lg:w-16 h-0.5 bg-gradient-to-r from-brand-blue to-brand-navy"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-brand-blue border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};