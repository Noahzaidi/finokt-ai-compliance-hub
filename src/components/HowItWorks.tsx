import { Card, CardContent } from "@/components/ui/card";
import { Upload, Brain, UserCheck } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Upload,
    title: "Upload Documents",
    description: "Customers upload identity documents through your secure portal or mobile app interface."
  },
  {
    step: "02", 
    icon: Brain,
    title: "AI Processing",
    description: "Our AI extracts data fields, validates authenticity, and runs comprehensive compliance checks instantly."
  },
  {
    step: "03",
    icon: UserCheck,
    title: "Review & Approve",
    description: "Compliance officers review flagged cases in the dashboard and approve verified customers."
  }
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple, secure, and efficient KYC automation in three easy steps
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="border-border hover:shadow-fintech transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-hero text-white rounded-full text-2xl font-bold mb-6 group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-brand-blue rounded-lg flex items-center justify-center mx-auto mb-6">
                    <step.icon className="h-8 w-8 text-brand-navy" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-brand-navy mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>

              {/* Connector Arrow (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-12 transform -translate-y-1/2 z-10">
                  <div className="w-8 lg:w-16 h-0.5 bg-gradient-accent"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-brand-navy border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};