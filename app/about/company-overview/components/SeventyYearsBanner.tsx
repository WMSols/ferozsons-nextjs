import { StaggerFadeUpInView } from "@/components/animations/StaggerFadeUpInView";
import Image from "next/image";
import Link from "next/link";

export default function SeventyYearsBanner() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className=" px-4 sm:px-10 ">
        <div className="relative w-full rounded-[3rem]  overflow-hidden min-h-[500px] md:min-h-[800px] flex items-center shadow-lg group px-2">
          
          {/* Background Image Placeholder */}
          <Image
            src="/images/company-overview/70yr-banner.webp"
            alt="70 Years Legacy"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105 grayscale"
            sizes="(max-width: 768px) 100vw, 90vw"
            priority
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60 transition-opacity duration-500"></div>

          <div className="relative z-10 px-2 py-12 md:px-16 lg:px-24 max-w-5xl flex flex-col">
            
            {/* Logo Row */}
           
              <StaggerFadeUpInView className="flex items-center ml-4">
              <div >
                <Image width={100} height={100} src="/ferozsons-f-white.webp" alt="Ferozsons white logo" />
              </div>
              <span className="text-white font-bold text-sm uppercase tracking-widest leading-tight">
                <img src="/people-trust-us.webp" alt="People Trust Us" className=" h-42 sm:h-52 w-auto" />
              </span>
              </StaggerFadeUpInView>
            
    <StaggerFadeUpInView>
            <h2 className="text-white text-3xl md:text-5xl  font-bold leading-tight -mt-8 mb-4 sm:mb-16">
              70 Years of putting patients first
            </h2>
            </StaggerFadeUpInView>
            <StaggerFadeUpInView>
            <p className="text-white text-lg md:text-xl leading-relaxed mb-16 max-w-2xl">
              For over seven decades, our purpose has remained unchanged: to put patients first. 
              Every milestone reflects our commitment to quality healthcare, meaningful innovation, 
              and creating a healthier future for the communities we serve.
            </p>
            </StaggerFadeUpInView>
            <Link
              href="/about/history"
              className="inline-block bg-[#3B73AC] hover:bg-[#294e74] text-white px-8 py-3.5 rounded-full transition-colors w-fit"
            >
              Learn How We Built Our Legacy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}