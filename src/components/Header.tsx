import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { FinoktAILogo } from "@/components/FinoktAILogo";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { LanguageToggle } from "@/components/LanguageToggle";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { t, language, setLanguage } = useI18n();

  const handleDemoClick = () => {
    navigate("/demo");
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <FinoktAILogo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link to="/#features" className="text-muted-foreground hover:text-foreground transition-colors">
              {t("nav.features")}
            </Link>
            <Link to="/#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              {t("nav.howItWorks")}
            </Link>
            <Link to="/#about" className="text-muted-foreground hover:text-foreground transition-colors">
              {t("nav.about")}
            </Link>
            <Button variant="accent" onClick={handleDemoClick}>
              {t("nav.bookDemo")}
            </Button>
            <div className="ml-2">
              <LanguageToggle />
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/#features"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.features")}
              </Link>
              <Link
                to="/#how-it-works"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.howItWorks")}
              </Link>
              <Link
                to="/#about"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.about")}
              </Link>
              <Button variant="accent" onClick={handleDemoClick} className="w-full">
                {t("nav.bookDemo")}
              </Button>
              <div className="pt-2">
                <LanguageToggle />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};