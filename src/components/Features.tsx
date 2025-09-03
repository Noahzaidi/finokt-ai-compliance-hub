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

const features = [
  {
    icon: FileCheck,
    title: "Automated Document Verification",
    description: "Advanced OCR, ID parsing, and MRZ validation for instant document processing with 99.9% accuracy."
  },
  {
    icon: ScanFace,
    title: "Biometric Face Matching",
    description: "Advanced facial recognition technology compares live selfies with document photos for identity verification with 99.8% accuracy."
  },
  {
    icon: User,
    title: "Liveness Detection",
    description: "Sophisticated anti-spoofing technology detects live faces versus photos, masks, or videos for enhanced security."
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
    title: "Comprehensive Audit Trails",
    description: "Complete audit trails and compliance documentation with automated timestamping and user tracking for regulatory requirements."
  },
  {
    icon: Zap,
    title: "Powerful Analytics & Reports",
    description: "Advanced reporting dashboard with custom analytics, compliance metrics, and executive summaries for data-driven decisions."
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
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
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