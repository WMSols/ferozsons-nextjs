import Link from "next/link";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Counter from "./Counter";
import { StaggerFadeUp } from "@/components/animations/StaggerFadeUp";

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
      className={`rounded-b-4xl md:rounded-b-[3.1rem] relative pt-16 md:pt-24 overflow-hidden ${
        backgroundImage
          ? "text-white min-h-[93vh] h-[93vh] flex flex-col"
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/30" />
        </div>
      )}

      {/* Main Content Area */}
      <StaggerFadeUp className="flex-1 container relative z-10 w-full flex flex-col justify-center">
        <div className={showInvestorInfo ? "text-center mb-16" : "text-center"}>
          <h1
            className={`text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-[1.2]`}
          >
            {title}
          </h1>
        </div>
      </StaggerFadeUp>

      {/* Stats sit at the bottom of the hero, centered horizontally */}
      {!showInvestorInfo && (
        <StaggerFadeUp className="relative z-10 mb-4 mt-auto w-full">
          <div className="w-full md:w-1/2 mx-auto pb-8 md:pb-12">
            <div className="grid grid-cols-3 gap-2 px-8 md:px-0 text-center">
              <div className="flex flex-col items-center pt-4 md:pt-0">
                <h1 className="text-white text-2xl md:text-5xl font-bold mb-4"><Counter target="1500"/>+</h1>
                <span className="text-white text-xs md:text-base">Employees</span>
              </div>
              <div className="flex flex-col items-center pt-4 md:pt-0">
                <h1 className="text-white text-2xl md:text-5xl font-bold mb-4"><Counter target="70"/>+</h1>
                <span className="text-white text-xs md:text-base">Years of Trusted Service</span>
              </div>
              <div className="flex flex-col items-center pt-4 md:pt-0">
                <h1 className="text-white text-2xl md:text-5xl font-bold mb-4"><Counter target="30"/>+</h1>
                <span className="text-white text-xs md:text-base">Countries We Export To</span>
              </div>
            </div>
          </div>
        </StaggerFadeUp>
      )}
    </section>
  );
};

export default HeroSection;