import { FC } from "react";

interface FinoktAILogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const FinoktAILogo: FC<FinoktAILogoProps> = ({ className = "", size = 'md' }) => {
  const sizeClasses = {
    sm: "h-6",
    md: "h-8", 
    lg: "h-12"
  };

  const iconSize = {
    sm: "24",
    md: "32",
    lg: "48"
  };

  const fontSize = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-3xl"
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Octagonal Icon with Checkmark */}
      <div className={`${sizeClasses[size]} flex items-center`}>
        <svg 
          width={iconSize[size]} 
          height={iconSize[size]} 
          viewBox="0 0 32 32" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Octagonal Background */}
          <path 
            d="M9.5 2H22.5L30 9.5V22.5L22.5 30H9.5L2 22.5V9.5L9.5 2Z" 
            fill="currentColor" 
            className="text-brand-navy"
          />
          {/* Checkmark */}
          <path 
            d="M8 16L13 21L24 10" 
            stroke="white" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
      
      {/* Text Logo - Reduced red usage */}
      <span className={`font-bold ${fontSize[size]} text-brand-navy`}>
        Finokt<span className="text-brand-blue">AI</span>
      </span>
    </div>
  );
};