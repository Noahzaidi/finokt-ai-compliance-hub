import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, Building2, Target, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const About = () => {
  const navigate = useNavigate();

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
            About FinoktAI
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded by compliance experts to revolutionize how financial institutions 
            handle KYC and regulatory requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mission & Company Info */}
          <div>
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Target className="h-6 w-6 text-brand-blue" />
                <h3 className="text-2xl font-bold text-brand-navy">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To make compliance faster, smarter, and more affordable for financial institutions 
                worldwide. We believe AI can eliminate the tedious manual work while improving 
                accuracy and regulatory adherence.
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="h-6 w-6 text-brand-blue" />
                <h3 className="text-2xl font-bold text-brand-navy">Why Choose Us</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-fintech-success rounded-full mt-2 flex-shrink-0"></div>
                  <span>Built by compliance professionals who understand real-world challenges</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-fintech-success rounded-full mt-2 flex-shrink-0"></div>
                  <span>Enterprise-grade security and regulatory compliance built-in</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-fintech-success rounded-full mt-2 flex-shrink-0"></div>
                  <span>Proven track record in AI, Fintech, and Trade Finance</span>
                </li>
              </ul>
            </div>

            <Button variant="cta" size="lg" onClick={handleDemoClick}>
              Schedule a Demo
            </Button>
          </div>

          {/* Founder Info */}
          <Card className="border-border shadow-card">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">NZ</span>
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-2">Noah Zaidi</h3>
                <p className="text-brand-blue font-semibold mb-4">Co-founder & AI Project Manager</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-brand-blue" />
                  <span className="text-muted-foreground">PMP Certified Project Manager</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">AI Project Manager</Badge>
                  <Badge variant="secondary">Compliance Expert</Badge>
                  <Badge variant="secondary">AI Specialist</Badge>
                  <Badge variant="secondary">Fintech</Badge>
                  <Badge variant="secondary">Trade Finance</Badge>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                With extensive experience in compliance consulting, AI project management, 
                and fintech innovation, Noah brings deep industry knowledge to solve 
                real compliance challenges with cutting-edge AI technology.
              </p>

              <Button 
                variant="outline" 
                onClick={handleLinkedinClick}
                className="w-full group"
              >
                <Linkedin className="h-4 w-4 mr-2 group-hover:text-accent transition-colors" />
                Connect on LinkedIn
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};