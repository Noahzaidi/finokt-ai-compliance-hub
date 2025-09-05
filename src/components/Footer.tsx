import { Mail, Linkedin, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FinoktAILogo } from "@/components/FinoktAILogo";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { CookieSettingsModal } from "./CookieSettingsModal";

export const Footer = () => {
  const navigate = useNavigate();
  const [isCookieModalOpen, setIsCookieModalOpen] = useState(false);

  const handleDemoClick = () => {
    navigate("/demo");
  };

  const handleEmailClick = () => {
    window.open("mailto:noah.zaidi@finokt.com", "_blank");
  };

  const handleLinkedinClick = () => {
    window.open("https://linkedin.com/in/noahzaidi", "_blank");
  };

  const handleCookieSettings = () => {
    setIsCookieModalOpen(true);
  };

  return (
    <footer className="bg-fintech-gray text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-4 p-3 bg-white rounded-lg inline-block">
              <FinoktAILogo />
            </div>
            <p className="text-lg text-brand-blue mb-6">
              AI for Smarter Compliance
            </p>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Revolutionizing KYC and compliance automation for banks and financial 
              institutions with cutting-edge AI technology.
            </p>
            <Button variant="accent" onClick={handleDemoClick}>
              Book a Demo
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/#features" className="text-gray-300 hover:text-brand-blue transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/#how-it-works" className="text-gray-300 hover:text-brand-blue transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/#about" className="text-gray-300 hover:text-brand-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <button 
                  onClick={handleDemoClick}
                  className="text-gray-300 hover:text-accent transition-colors text-left"
                >
                  Schedule Demo
                </button>
              </li>
              <li>
                <button 
                  onClick={handleCookieSettings}
                  className="text-gray-300 hover:text-accent transition-colors text-left flex items-center gap-2"
                >
                  <Settings className="h-4 w-4" />
                  Cookie Settings
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <button
                onClick={handleEmailClick}
                className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors group"
              >
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>noah.zaidi@finokt.com</span>
              </button>
              <button
                onClick={handleLinkedinClick}
                className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors group"
              >
                <Linkedin className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>LinkedIn Profile</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 FinoktAI. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <p className="text-gray-400 text-center md:text-right">
                Built for the future of financial compliance
              </p>
              <div className="flex items-center gap-4 text-sm">
                <Link 
                  to="/privacy-policy" 
                  target="_blank"
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  Privacy Policy
                </Link>
                <button 
                  onClick={handleCookieSettings}
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  Cookie Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CookieSettingsModal 
        isOpen={isCookieModalOpen} 
        onClose={() => setIsCookieModalOpen(false)} 
      />
    </footer>
  );
};