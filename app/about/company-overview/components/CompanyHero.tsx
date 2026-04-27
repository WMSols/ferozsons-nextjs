import { ChevronDown } from "lucide-react";
import HeroFullScreen from "@/components/sections/HeroFullScreen";

export default function CompanyHero() {
  return (
    <HeroFullScreen backgroundImage="/legacy-bg.png">
      <div className="flex flex-col items-center justify-center text-center px-4 w-full h-full pt-16">
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-16 md:mb-24">
          <div className="w-16 h-16 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-2 md:border-[3px] border-white flex items-center justify-center shrink-0">
            <span className="text-white font-kaisei italic text-3xl md:text-6xl lg:text-7xl pt-1 pr-1">
              f
            </span>
          </div>
          <div className="flex flex-col text-left">
            <h1 className="text-white font-kaisei text-4xl md:text-6xl lg:text-[5.5rem] font-normal leading-none mb-1 md:mb-2 tracking-wide">
              FEROZSONS
            </h1>
            <h2 className="text-white font-kaisei text-lg md:text-2xl lg:text-[2.1rem] font-light leading-none tracking-widest">
              LABORATORIES LIMITED
            </h2>
          </div>
        </div>
        <p className="font-kaisei text-[#5AB2F7] text-2xl md:text-4xl lg:text-5xl font-bold mb-16 md:mb-24">
          Company Overview
        </p>
        <ChevronDown
          className="w-10 h-10 md:w-12 md:h-12 text-white/60 hover:text-white transition-colors cursor-pointer"
          aria-hidden
        />
      </div>
    </HeroFullScreen>
  );
}
