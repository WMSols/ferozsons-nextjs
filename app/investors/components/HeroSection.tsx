import Link from "next/link";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
// import { Breadcrumb, ... } from "@/components/ui/breadcrumb"; // Uncomment if using breadcrumbs elsewhere

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
  backgroundImage?: string;
  showInvestorInfo?: boolean; // Added flag to render the specific Investor layout
}

const HeroSection = ({
  title,
  subtitle,
  breadcrumbs,
  backgroundImage,
  showInvestorInfo = true, // Default to true for Investor page, can be set to false for other pages
}: PageHeroProps) => {
  return (
    <section
      className={`rounded-b-[3.1rem] md:rounded-b-[3.5rem] relative py-16 md:py-24 overflow-hidden ${
        backgroundImage
          ? "text-white min-h-[93vh] flex items-center"
          : "bg-transparent"
      }`}
    >
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/20" />
        </div>
      )}

      <div className="container relative z-10 w-full flex flex-col h-full justify-center">
        
        {/* Title Section */}
        <div className={showInvestorInfo ? "text-center mt-4 mb-20" : "md:ml-12"}>
          <h1 
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${backgroundImage ? "text-white" : "text-foreground"}`}
          >
            {title}
          </h1>
          
          {/* Standard Subtitle (Hidden on Investor Page) */}
          {subtitle && !showInvestorInfo && (
            <p
              className={`mt-6 text-lg font-normal md:text-xl max-w-3xl leading-relaxed ${
                backgroundImage ? "text-white/90" : "text-muted-foreground"
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Specific Investor Information Block */}
        {showInvestorInfo && (
          <div className="flex flex-col gap-8 md:ml-12 lg:ml-24 max-w-xl">
            
            {/* Feroz Symbol */}
            <a
              href="https://dps.psx.com.pk/company/FEROZ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5"
            >
              <div className="w-20 h-20 rounded-full  backdrop-blur-sm border border-transparent flex items-center justify-center shrink-0">
                <Image
                  src="/images/White-logo.webp"
                  alt="FEROZ Symbol"
                    fill
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-white text-2xl sm:text-[2rem] font-sans font-bold tracking-wide">
                  FEROZ
                </h3>
                <p className="text-white/80 text-sm font-light tracking-wide mt-0.5">
                  Symbol of the Company (PSX)
                </p>
              </div>
            </a>

            {/* PSX Symbol */}
            <div className="flex items-center gap-5">
              <a
                href="https://www.psx.com.pk/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-20 h-20 rounded-full  backdrop-blur-sm border border-transparent flex items-center justify-center shrink-0 p-3"
              >
                <Image
                  src="/images/PSX-Symbol.webp"
                  alt="Pakistan Stock Exchange"
                  fill
                />
              </a>
              <div className="flex flex-col">
                <h3 className="text-white text-2xl sm:text-[2rem] font-sans font-bold tracking-wide">
                  Pakistan Stock Exchange
                </h3>
                <a
                  href="https://www.psx.com.pk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 text-sm font-light hover:text-white transition-colors underline-offset-4 hover:underline mt-0.5"
                >
                  https://www.psx.com.pk/
                </a>
              </div>
            </div>
            
          </div>
        )}
      </div>

    </section>
  );
};

export default HeroSection;