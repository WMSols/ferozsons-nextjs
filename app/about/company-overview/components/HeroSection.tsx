import Link from "next/link";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  showInvestorInfo?: boolean;
}

const HeroSection = ({
  title,
  subtitle,
  backgroundImage,
  showInvestorInfo = false,
}: PageHeroProps) => {
  return (
    <section
      className={`rounded-b-[2rem] md:rounded-b-[3.5rem] relative py-16 md:py-24 overflow-hidden ${
        backgroundImage
          ? "text-white min-h-screen sm:min-h-[93vh] flex flex-col"
          : "bg-black"
      }`}
    >
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
        </div>
      )}

      {/* Main Content Area */}
      <div className="container relative z-10 w-full flex-1 flex flex-col justify-center">
        
        <div className={showInvestorInfo ? "text-center mb-16" : "text-center"}>
          <h1 
            className={`text-5xl sm:text-6xl lg:text-8xl font-bold ${
              backgroundImage ? "text-white" : "text-white"
            }`}
          >
            {title}
          </h1>
          
          {subtitle && !showInvestorInfo && (
            <p
              className={`mt-6 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${
                backgroundImage ? "text-white" : "text-white"
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* New Stats Section at the Bottom */}
      {!showInvestorInfo && (
        <div className="relative z-10 w-auto  md:w-1/2 mx-auto pb-8 md:pb-12 pt-12">
          <div className="grid grid-cols-3 gap-2 px-2 md:px-0  text-center ">
            <div className="flex flex-col items-center pt-4 md:pt-0">
              <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">1500+</h1>
              <span className="text-white text-sm md:text-base">Employees</span>
            </div>
            <div className="flex flex-col items-center pt-4 md:pt-0">
              <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">70+</h1>
              <span className="text-white text-sm md:text-base">Years of Trusted Service</span>
            </div>
            <div className="flex flex-col items-center pt-4 md:pt-0">
              <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">30+</h1>
              <span className="text-white text-sm md:text-base">Countries We Export To</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;