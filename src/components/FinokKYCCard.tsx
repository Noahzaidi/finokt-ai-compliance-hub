import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const FinokKYCCard = () => {
  const navigate = useNavigate();
  const handleLearnMore = () => {
    navigate("/products/finoktkyc");
  };

  return (
    <Card className="border-border hover:shadow-glow transition-all duration-300 group hover:border-brand-blue/30">
      <CardHeader>
        <CardTitle className="text-brand-navy text-xl">FinoktKYC</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          KYC document intelligence for regulated institutions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground leading-relaxed">
          FinoktKYC is an on premise privacy first KYC automation product.
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" onClick={handleLearnMore} className="group w-full">
          Learn More
          <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};
