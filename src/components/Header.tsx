import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { FinoktAILogo } from "@/components/FinoktAILogo";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

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
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link to="/#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </Link>
            <Link to="/#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Button variant="accent" onClick={handleDemoClick}>
              Book a Demo
            </Button>
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
                Features
              </Link>
              <Link
                to="/#how-it-works"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                to="/#about"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Button variant="accent" onClick={handleDemoClick} className="w-full">
                Book a Demo
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};