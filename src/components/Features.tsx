import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileCheck, 
  Shield, 
  TrendingUp, 
  Monitor, 
  Zap,
  Lock
} from "lucide-react";

const features = [
  {
    icon: FileCheck,
    title: "Automated Document Verification",
    description: "Advanced OCR, ID parsing, and MRZ validation for instant document processing with 99.9% accuracy."
  },
  {
    icon: Shield,
    title: "Dynamic Compliance Checks",
    description: "Real-time PEP, Sanctions, FATCA/CRS screening with country-specific regulatory rules."
  },
  {
    icon: TrendingUp,
    title: "Real-time Risk Scoring",
    description: "Intelligent risk assessment with low, medium, and high risk categorization for informed decisions."
  },
  {
    icon: Monitor,
    title: "Back-Office Dashboard",
    description: "Comprehensive dashboard for compliance officers with case management and detailed reporting."
  },
  {
    icon: Zap,
    title: "Secure API Integration",
    description: "RESTful APIs with enterprise-grade security for seamless integration with existing systems."
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Bank-grade encryption, GDPR compliance, and audit trails for complete data protection."
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4">
            Powerful Features for Modern Compliance
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to automate KYC processes, reduce manual work, 
            and maintain regulatory compliance with cutting-edge AI technology.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-border hover:shadow-card transition-shadow duration-300 group"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-brand-navy text-xl">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};