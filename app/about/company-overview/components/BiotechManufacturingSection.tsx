import { StaggerFadeUpInView } from "@/components/animations/StaggerFadeUpInView";
import Image from "next/image";
import Link from "next/link";

export default function BiotechManufacturingSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div>
        <div className="relative w-full py-10 overflow-hidden min-h-[800px] flex items-center shadow-lg group">
          
          {/* Background Image Placeholder */}
          <Image
            src="/images/company-overview/bio-man.webp"
            alt="Biotech Manufacturing"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 90vw"
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70 transition-opacity duration-500"></div>

          <div className="relative z-10 px-6 py-24 md:px-16 lg:px-24 w-full flex flex-col lg:flex-row gap-12 lg:gap-10 items-center">
            
            {/* Left Column: Text & CTA */}
            <div className="w-full  flex flex-col gap-12">
              <StaggerFadeUpInView>
              <h2 className="text-white text-4xl md:text-6xl  font-bold leading-normal mb-16">
                Advancing Biotech Manufacturing<br/> and Pharmaceutical Capabilities in<br/> Pakistan
              </h2>
              </StaggerFadeUpInView>
              <div className="flex md:flex-row flex-col justify-between">
                <StaggerFadeUpInView>
              <div className="text-white space-y-6 max-w-xl text-lg  leading-relaxed mb-10">
                <p>
                  In partnership with the Bagó Group of Argentina, in 2006 <br/> we established <a href="https://bfbio.com/" className="underline" target="_blank">BF Biosciences Limited</a>, 
                  a cGMP-compliant biotechnology facility dedicated exclusively to the <br/> manufacture of biological products.
                </p>
                <p>
                  In 2024, <a href="https://bfbio.com/" className="underline" target="_blank">BF Biosciences Limited</a> was successfully listed on<br/> the Pakistan Stock Exchange following a 
                  highly successful<br/> IPO. As the first and only company in Pakistan to operate a<br/> biotech manufacturing 
                  facility of this kind, we continue to<br/> strengthen the country's capabilities in advanced 
                  biopharmaceutical production.
                </p>
                 <Link
                href="/bf-biosciences"
                className="inline-flex items-center justify-center mt-12 bg-[#FF00FF40]/50 hover:bg-[#6b2265] text-white font-bold px-8 py-3.5 rounded-full transition-colors w-fit"
              >
                Learn More About BF Biosciences &rarr;
              </Link>
              </div>
              </StaggerFadeUpInView>
             
            

            {/* Right Column: 4 Stat Cards */}
           
              <StaggerFadeUpInView  className="  h-1/2  gap-4  hidden sm:grid grid-cols-2 ">
              {/* Card 1 - Logo Placeholder */}
              <div className="bg-[#FF00FF40]/70 backdrop-blur-xs  rounded-2xl md:rounded-[2rem] p-2 h-36 w-48 flex flex-col items-center justify-center text-center aspect-square">
                <Image
                  src="/images/company-overview/BFBIO-Symbol.webp"
                  alt="BF Biosciences Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              
              {/* Card 2 */}
              <div className="bg-[#3B73AC80]/70 backdrop-blur-xs   rounded-2xl md:rounded-[2rem] h-36 w-48 flex flex-col items-center justify-center text-center aspect-square">
                <h2 className="text-white font-bold text-3xl  ">2006</h2>
                <span className="text-white text-xs  uppercase ">Founded With Bago Group</span>
              </div>
              
              {/* Card 3 */}
              <div className="bg-[#3B73AC80]/70 backdrop-blur-xs   rounded-2xl md:rounded-[2rem]  h-36 w-48 flex flex-col items-center justify-center text-center aspect-square">
                <h2 className="text-white font-bold text-3xl  ">2024</h2>
                <span className="text-white text-xs  uppercase ">Listed On PSX</span>
              </div>
              
              {/* Card 4 */} 
              <div className="bg-[#3B73AC80]/70 backdrop-blur-xs  rounded-2xl md:rounded-[2rem]  h-36 w-48 flex flex-col items-center justify-center text-center aspect-square">
                <h2 className="text-white font-bold text-3xl ">cGMP</h2>
                <span className="text-white text-xs  uppercase ">First In Pakistan</span>
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