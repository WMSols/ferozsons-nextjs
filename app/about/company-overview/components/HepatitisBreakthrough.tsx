import { StaggerFadeUpInView } from "@/components/animations/StaggerFadeUpInView";
import Image from "next/image";
import Counter from "./Counter";

export default function HepatitisBreakthrough() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-10">
        
        {/* Top Heading */}
        <StaggerFadeUpInView>
        <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-bold text-black mb-10 leading-[1.1]">
          A Breakthrough in<br className="hidden md:block" /> Hepatitis Treatment Access
        </h1>
        </StaggerFadeUpInView>
        <div className=" w-auto md:w-[70%]">
        {/* Paragraphs */}
        <div className="text-black text-lg md:text-xl leading-relaxed space-y-6 max-w-4xl mb-16 md:mb-24">
          <StaggerFadeUpInView>
          <p>
            Through our partnership with <strong className="font-bold">Gilead Sciences</strong>, Ferozsons Laboratories Limited 
            introduced <strong className="font-bold">Sovaldi® (sofosbuvir)</strong> in 2014 — the first direct-acting antiviral therapy 
            for hepatitis C in Pakistan — under a dedicated patient access program.
          </p>
          
          <p>
            This collaboration significantly expanded access to breakthrough treatment, helping 
            deliver life-changing care and contributing to the cure of over <strong className="font-bold">250,000</strong> hepatitis C 
            patients nationwide.
          </p>
          </StaggerFadeUpInView>
        </div>

        {/* Bottom Section: Huge Number & Image Card */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 xl:gap-42">
          
          {/* Left Stats */}
          <div className="flex flex-col text-black">
            <h2 className="text-7xl md:text-[6rem] lg:text-[7rem] font-bold leading-normal tracking-tight mb-4">
              <Counter target="250,000"/>+
            </h2>
            <span className="text-2xl md:text-3xl font-semibold leading-normal  mb-3">
              Patients Cured
            </span>
            <span className="text-lg md:text-xl">
              Nationwide - Hepatitis C
            </span>
          </div>
          
          {/* Right Image Card */}
          <div className="relative w-full md:w-[400px] aspect-[16/9] md:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-lg shrink-0 group">
            {/* Placeholder Image */}
            <Image 
              src="/images/company-overview/pills.webp" 
              alt="Medical vials and pills" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105" 
              sizes="(max-width: 768px) 100vw, 400px"
            />
            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center p-6">
               <span className="text-2xl font-light ">In partnership with</span>
               <h3 className="text-3xl md:text-4xl font-bold">Gilead Sciences</h3>
            </div>
          </div>

        </div>
        </div>
      </div>
    </section>
  );
}