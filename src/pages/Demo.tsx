import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Demo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
              Book Your Personalized Demo
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how FinoktAI can transform your KYC and compliance processes. 
              Schedule a personalized demo with our founder, Noah Zaidi.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Demo Info */}
            <div>
              <Card className="border-border shadow-card mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-brand-navy flex items-center gap-3">
                    <Calendar className="h-6 w-6 text-brand-red" />
                    What to Expect
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-fintech-success mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-brand-navy">Live Product Demo</h3>
                      <p className="text-muted-foreground">Interactive walkthrough of our AI-powered compliance platform</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-fintech-success mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-brand-navy">Custom Use Cases</h3>
                      <p className="text-muted-foreground">Discussion tailored to your specific compliance requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-fintech-success mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-brand-navy">ROI Analysis</h3>
                      <p className="text-muted-foreground">Projected savings and efficiency improvements for your organization</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-fintech-success mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-brand-navy">Implementation Roadmap</h3>
                      <p className="text-muted-foreground">Clear next steps and timeline for getting started</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-brand-navy flex items-center gap-3">
                    <Clock className="h-6 w-6 text-brand-red" />
                    Demo Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-brand-navy mb-1">Duration</h4>
                      <p className="text-muted-foreground">30 minutes</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy mb-1">Format</h4>
                      <p className="text-muted-foreground">Video call</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy mb-1">Presenter</h4>
                      <p className="text-muted-foreground">Noah Zaidi, CEO</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy mb-1">Follow-up</h4>
                      <p className="text-muted-foreground">Included</p>
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
                    Select Your Preferred Time
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