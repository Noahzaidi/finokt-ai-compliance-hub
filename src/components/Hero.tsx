import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-fintech.jpg";

export const Hero = () => {
  const navigate = useNavigate();

  const handleDemoClick = () => {
    navigate("/demo");
  };

  return (
    <section className="relative bg-gradient-subtle py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          {/* Content */}
          <div className="mb-12 lg:mb-0">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-brand-navy mb-6 leading-tight">
                AI-Powered KYC &{" "}
                <span className="text-brand-red">Compliance Automation</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
                FinoktAI helps banks and financial institutions streamline onboarding, 
                reduce costs, and stay compliant — with intelligent document processing 
                and automated risk checks.
              </p>

              {/* Key Benefits */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-fintech-gray">
                  <CheckCircle className="h-5 w-5 text-fintech-success" />
                  <span>90% faster onboarding</span>
                </div>
                <div className="flex items-center gap-2 text-fintech-gray">
                  <CheckCircle className="h-5 w-5 text-fintech-success" />
                  <span>99.9% accuracy</span>
                </div>
                <div className="flex items-center gap-2 text-fintech-gray">
                  <CheckCircle className="h-5 w-5 text-fintech-success" />
                  <span>Full compliance</span>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  variant="cta" 
                  size="lg"
                  onClick={handleDemoClick}
                  className="group"
                >
                  Book a Demo
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="AI-powered compliance automation dashboard"
                className="w-full h-auto rounded-2xl shadow-hero"
              />
            </div>
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-accent rounded-2xl opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};