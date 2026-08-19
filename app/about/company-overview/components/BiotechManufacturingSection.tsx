import { StaggerFadeUpInView } from "@/components/animations/StaggerFadeUpInView";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BiotechManufacturingSection() {
  return (
    <section className="py-0 md:py-20 bg-white">
      <div>
        <div className="relative w-full overflow-hidden min-h-svh md:min-h-[800px] flex items-start md:items-center shadow-lg group">
          
          {/* Background Image Placeholder */}
          <Image
            src="/images/company-overview/bio-man.webp"
            alt="Biotech Manufacturing"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 90vw"
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50 transition-opacity duration-500"></div>

          <div className="relative z-10 px-5 pt-28 pb-12 md:px-16 md:py-24 lg:px-24 w-full flex flex-col lg:flex-row gap-6 lg:gap-10 items-center">
            
            {/* Left Column: Text & CTA */}
            <div className="w-full flex flex-col gap-4 md:gap-12">
              <StaggerFadeUpInView>
              <h2 className="text-white text-3xl leading-snug md:text-6xl font-bold md:leading-normal mb-3 md:mb-16">
                Advancing Biotech Manufacturing<br className="hidden md:block"/> and Pharmaceutical Capabilities in<br className="hidden md:block"/> Pakistan
              </h2>
              </StaggerFadeUpInView>
              <div className="flex md:flex-row flex-col justify-between">
                <StaggerFadeUpInView>
              <div className="text-white space-y-3 md:space-y-6 max-w-xl text-lg leading-relaxed mb-4 md:mb-10">
                <p>
                  In partnership with the Bagó Group of Argentina, in 2006 <br className="hidden md:block"/> we established <a href="https://bfbio.com/" className="underline" target="_blank">BF Biosciences Limited</a>, 
                  a cGMP-compliant biotechnology facility dedicated exclusively to the <br className="hidden md:block"/> manufacture of biological products.
                </p>
                <p>
                  In 2024, <a href="https://bfbio.com/" className="underline" target="_blank">BF Biosciences Limited</a> was successfully listed on<br className="hidden md:block"/> the Pakistan Stock Exchange following a 
                  highly successful<br className="hidden md:block"/> IPO. As the first and only company in Pakistan to operate a<br className="hidden md:block"/> biotech manufacturing 
                  facility of this kind, we continue to<br className="hidden md:block"/> strengthen the country's capabilities in advanced 
                  biopharmaceutical production.
                </p>
                 <Link
                href="/bf-biosciences"
                className="inline-flex items-center justify-center mt-5 md:mt-12 bg-[#FF00FF40] hover:bg-[#6b2265] text-white font-semibold sm:font-bold text-sm md:text-base px-6 py-3 md:px-8 md:py-3.5 rounded-full transition-colors w-fit gap-2 "
              >
                Learn More About BF Biosciences <ArrowRightIcon className="w-6 h-6" />
              </Link>
              </div>
              </StaggerFadeUpInView>
             
            

            {/* Right Column: 4 Stat Cards */}
           
              <StaggerFadeUpInView  className="  h-1/2  gap-4  hidden sm:grid grid-cols-2 ">
              {/* Card 1 - Logo Placeholder */}
              <div className="bg-[#FF00FF40]/70 backdrop-blur-xs  rounded-2xl md:rounded-[2rem] p-2 xl:h-36 h-32 xl:w-48 w-40 flex flex-col items-center justify-center text-center aspect-square">
                <Image
                  src="/images/company-overview/BFBIO-Symbol.webp"
                  alt="BF Biosciences Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              
              {/* Card 2 */}
              <div className="bg-[#3B73AC80]/70 backdrop-blur-xs   rounded-2xl md:rounded-[2rem] xl:h-36 h-32 xl:w-48 w-40 flex flex-col items-center justify-center text-center aspect-square">
                <h2 className="text-white font-bold text-3xl  ">2006</h2>
                <span className="text-white text-xs  uppercase ">Founded With Bago Group</span>
              </div>
              
              {/* Card 3 */}
              <div className="bg-[#3B73AC80]/70 backdrop-blur-xs   rounded-2xl md:rounded-[2rem]  xl:h-36 h-32 xl:w-48 w-40 flex flex-col items-center justify-center text-center aspect-square">
                <h2 className="text-white font-bold text-3xl  ">2024</h2>
                <span className="text-white text-xs  uppercase ">Listed On PSX</span>
              </div>
              
              {/* Card 4 */} 
              <div className="bg-[#3B73AC80]/70 backdrop-blur-xs  rounded-2xl md:rounded-[2rem]  xl:h-36 h-32 xl:w-48 w-40 flex flex-col items-center justify-center text-center aspect-square">
                <h2 className="text-white font-bold text-3xl ">cGMP</h2>
              </div>
              
            </StaggerFadeUpInView>
            
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
