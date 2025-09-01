import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-futuristic.jpg";

export const Hero = () => {
  const navigate = useNavigate();

  const handleDemoClick = () => {
    navigate("/demo");
  };

  return (
    <section className="relative bg-gradient-futuristic py-8 lg:py-16 overflow-hidden min-h-[90vh] flex items-center">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-90"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-brand-blue/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-brand-navy/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-brand-blue rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-brand-blue rounded-full animate-ping delay-500"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
          {/* Content */}
          <div className="mb-8 lg:mb-0 lg:col-span-5">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-navy mb-4 lg:mb-6 leading-tight">
                AI-Powered KYC &{" "}
                <span className="text-brand-blue">Compliance Automation</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-muted-foreground mb-6 lg:mb-8 max-w-xl mx-auto lg:mx-0">
                FinoktAI helps banks and financial institutions streamline onboarding, 
                reduce costs, and stay compliant — with intelligent document processing 
                and automated risk checks.
              </p>

              {/* Key Benefits */}
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mb-6 lg:mb-8 justify-center lg:justify-start">
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
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start">
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

          {/* Hero Image with futuristic styling */}
          <div className="relative lg:col-span-7">
            <div className="relative z-10">
              <div className="relative group">
                <img
                  src={heroImage}
                  alt="AI-powered compliance automation dashboard"
                  className="w-full h-auto max-h-[600px] object-cover rounded-2xl shadow-glow transform group-hover:scale-105 transition-transform duration-500"
                />
                {/* Futuristic overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            {/* Enhanced background decoration */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-accent rounded-2xl opacity-30 -z-10 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-brand-blue/10 rounded-2xl -z-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};