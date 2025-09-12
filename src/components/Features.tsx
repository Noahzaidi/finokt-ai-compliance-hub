import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileCheck, 
  Shield, 
  TrendingUp, 
  Monitor, 
  Zap,
  Lock,
  ScanFace,
  User
} from "lucide-react";
import { useI18n } from "@/lib/i18n";

const features = [
  {
    icon: FileCheck,
    titleKey: "features.1.title",
    descriptionKey: "features.1.desc"
  },
  {
    icon: ScanFace,
    titleKey: "features.2.title",
    descriptionKey: "features.2.desc"
  },
  {
    icon: User,
    titleKey: "features.3.title",
    descriptionKey: "features.3.desc"
  },
  {
    icon: Shield,
    titleKey: "features.4.title",
    descriptionKey: "features.4.desc"
  },
  {
    icon: TrendingUp,
    titleKey: "features.5.title",
    descriptionKey: "features.5.desc"
  },
  {
    icon: Monitor,
    titleKey: "features.6.title",
    descriptionKey: "features.6.desc"
  },
  {
    icon: Zap,
    titleKey: "features.7.title",
    descriptionKey: "features.7.desc"
  },
  {
    icon: Lock,
    titleKey: "features.8.title",
    descriptionKey: "features.8.desc"
  }
];

export const Features = () => {
  const { t } = useI18n();
  return (
    <section id="features" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4">
            {t("features.header")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("features.description")}
          </p>
        </div>

        {/* Features Grid with enhanced styling */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-border hover:shadow-glow transition-all duration-300 group hover:border-brand-blue/30 relative overflow-hidden"
            >
              {/* Futuristic background glow */}
              <div className="absolute inset-0 bg-gradient-futuristic opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-brand-navy text-xl">
                  {t(feature.titleKey)}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {t(feature.descriptionKey)}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};