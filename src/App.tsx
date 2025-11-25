import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Index from "./pages/Index";
import { Demo } from "./pages/Demo";
import { FinoktKYC } from "./pages/FinoktKYC";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import { CookieConsent } from "./components/CookieConsent";
import { ScrollToTop } from "./components/ScrollToTop";
import { useEffect } from "react";
import { I18nProvider } from "./lib/i18n";

const queryClient = new QueryClient();

const HashRedirector = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.hash && location.pathname !== "/") {
      navigate(`/${location.hash}`, { replace: true });
    }
  }, [location, navigate]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <I18nProvider>
        <BrowserRouter>
          <ScrollToTop />
          <HashRedirector />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/products/finoktkyc" element={<FinoktKYC />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CookieConsent />
        </BrowserRouter>
      </I18nProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
