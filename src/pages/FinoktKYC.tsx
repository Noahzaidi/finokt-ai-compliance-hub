import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileCheck, Scale, Clipboard, Server, CheckCircle, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const capabilities = [
    {
        icon: FileCheck,
        title: "Identity document processing",
        description: "Extract structured data from IDs using OCR and layout intelligence."
    },
    {
        icon: Scale,
        title: "Rules and risk scoring",
        description: "Apply configurable compliance checks such as expiry, MRZ, country risk and list matches."
    },
    {
        icon: Clipboard,
        title: "Audit and traceability",
        description: "Each onboarding event has a full audit trail for internal and external review."
    },
    {
        icon: Server,
        title: "On premise",
        description: "All data stays inside the client environment."
    }
];

const targetOrganizations = [
    "Banks and payment institutions",
    "Funds and asset managers",
    "Fintech and crypto platforms"
];

const benefits = [
    "Reduce manual KYC processing time",
    "Ensure regulatory compliance",
    "Maintain data sovereignty"
];

export const FinoktKYC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleBookDemo = () => {
        navigate("/demo");
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main>
                {/* Section 1: Hero - Enhanced with gradient background */}
                <section className="relative py-20 lg:py-32 bg-gradient-futuristic overflow-hidden">
                    {/* Futuristic background elements */}
                    <div className="absolute inset-0 bg-gradient-subtle opacity-90"></div>
                    <div className="absolute top-10 left-10 w-32 h-32 bg-brand-blue/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-10 right-10 w-48 h-48 bg-brand-navy/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-4xl mx-auto">
                            <div className="mb-6">
                                <Badge variant="secondary" className="text-sm px-4 py-2">
                                    Private Beta
                                </Badge>
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-bold text-brand-navy mb-6">
                                FinoktKYC
                            </h1>
                            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
                                An on premise KYC document intelligence product that automates identity document processing, compliance checks, and risk scoring.
                            </p>

                            {/* Key Benefits */}
                            <div className="flex flex-wrap gap-4 justify-center mb-10">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-center gap-2 text-fintech-gray bg-white/50 px-4 py-2 rounded-full">
                                        <CheckCircle className="h-5 w-5 text-fintech-success flex-shrink-0" />
                                        <span className="text-sm font-medium">{benefit}</span>
                                    </div>
                                ))}
                            </div>

                            <Button variant="cta" size="lg" onClick={handleBookDemo} className="group">
                                Schedule a Demo
                                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>
                </section>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section 2: Core Capabilities - Enhanced */}
                    <section className="py-20">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4">
                                Core Capabilities
                            </h2>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                                Everything you need for automated KYC document processing
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {capabilities.map((capability, index) => (
                                <Card
                                    key={index}
                                    className="border-border hover:shadow-glow transition-all duration-300 group hover:border-brand-blue/30 relative overflow-hidden"
                                >
                                    {/* Futuristic background glow */}
                                    <div className="absolute inset-0 bg-gradient-futuristic opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <CardHeader className="relative z-10">
                                        <div className="w-14 h-14 bg-gradient-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                                            <capability.icon className="h-7 w-7 text-white" />
                                        </div>
                                        <CardTitle className="text-brand-navy text-xl mb-2">
                                            {capability.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="relative z-10">
                                        <CardDescription className="text-muted-foreground leading-relaxed text-base">
                                            {capability.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* Section 3: Who It's For - Enhanced */}
                    <section className="py-20">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-6">
                                    Built for Regulated Institutions
                                </h2>
                                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                    FinoktKYC is specifically designed for organizations that require the highest standards of compliance, security, and data privacy.
                                </p>
                                <ul className="space-y-4">
                                    {targetOrganizations.map((org, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="w-6 h-6 bg-brand-blue/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <CheckCircle className="h-4 w-4 text-brand-blue" />
                                            </div>
                                            <span className="text-lg text-muted-foreground">{org}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Card className="border-border shadow-fintech bg-gradient-futuristic">
                                <CardContent className="p-8">
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-xl font-semibold text-brand-navy mb-2">On-Premise Deployment</h3>
                                            <p className="text-muted-foreground">All data stays within your infrastructure, ensuring complete control and compliance.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-brand-navy mb-2">Privacy First</h3>
                                            <p className="text-muted-foreground">Built with privacy by design principles, meeting the strictest regulatory requirements.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-brand-navy mb-2">Enterprise Ready</h3>
                                            <p className="text-muted-foreground">Scalable architecture designed for high-volume processing and mission-critical operations.</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* Section 4: Private Beta Notice - Enhanced */}
                    <section className="py-20">
                        <Card className="border-brand-blue/30 shadow-glow bg-gradient-to-br from-brand-blue/5 to-brand-navy/5">
                            <CardContent className="p-10 text-center">
                                <h3 className="text-2xl font-bold text-brand-navy mb-4">
                                    Private Beta Program
                                </h3>
                                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                                    FinoktKYC is currently in private beta with a small group of regulated institutions. We're working closely with early adopters to refine the product and ensure it meets the highest standards. If your organization is interested in early access, we'd love to hear from you.
                                </p>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Section 5: Contact / Book Demo - Enhanced */}
                    <section className="py-20 text-center">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-6">
                                Interested in Early Access?
                            </h2>
                            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                                Book a demo to learn more about FinoktKYC and discuss how it can address your organization's specific KYC automation requirements.
                            </p>
                            <Button variant="cta" size="lg" onClick={handleBookDemo} className="group">
                                Schedule a Demo
                                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};
