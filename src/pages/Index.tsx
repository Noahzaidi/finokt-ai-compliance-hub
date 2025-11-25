import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { FinokKYCCard } from "@/components/FinokKYCCard";
import { HowItWorks } from "@/components/HowItWorks";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />

      {/* Products Section */}
      <section id="products" className="py-20 bg-gradient-futuristic">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4">
              Our Products
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Purpose-built solutions for regulated institutions
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <FinokKYCCard />
          </div>
        </div>
      </section>

      <HowItWorks />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
