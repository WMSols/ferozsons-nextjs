import { StaggerFadeUpInView } from "@/components/animations/StaggerFadeUpInView";
import Image from "next/image";
import Counter from "./Counter";

export default function HealthcareScienceSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Top Text & Stats Section */}
        <div className="flex flex-col gap-8 mb-12 md:mb-24">
          <StaggerFadeUpInView>
          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-black leading-[1.1] max-w-4xl">
            Advancing Healthcare<br className="hidden md:block" /> Through Science
          </h2>
          </StaggerFadeUpInView>
          <StaggerFadeUpInView>
          <p className="text-black text-lg md:text-xl leading-relaxed max-w-2xl mt-4">
            A patient-centric healthcare organization focused on addressing critical unmet medical needs in Pakistan and international markets
          </p>
          </StaggerFadeUpInView>

          {/* Stats Row */}
          <StaggerFadeUpInView>
          <div className="grid w-full md:w-[85%] grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 md:gap-6 pt-6 md:pt-10">
            <div className="flex flex-col">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-2"><Counter target="1500" />+</h2>
              <span className="text-black text-sm md:text-base">Employees</span>
            </div>
            <div className="flex flex-col">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-2"><Counter target="140" />+</h2>
              <span className="text-black text-sm md:text-base">Products</span>
            </div>
            <div className="flex flex-col">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-2"><Counter target="25" />+</h2>
              <span className="text-black text-sm md:text-base">Therapeutic Areas</span>
            </div>
            <div className="flex flex-col">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-2"><Counter target="30" />+</h2>
              <span className="text-black text-sm md:text-base">Countries We Export To</span>
            </div>
          </div>
          </StaggerFadeUpInView>
        </div>

        {/* =========================================
            DESKTOP IMAGES SECTION (Hidden on Mobile) 
            ========================================= */}
            <StaggerFadeUpInView>
        <div className="hidden md:grid grid-cols-3 gap-6">
          {/* Left Image */}
          <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden shadow-sm">
            <Image
              src="/images/company-overview/hs-1.webp"
              alt="Healthcare professional running on treadmill"
              fill
              className="object-cover"
              sizes="33vw"
            />
          </div>

          {/* Center Image */}
          <div className="relative w-full aspect-[2/3] rounded-[2rem] overflow-hidden shadow-sm">
            <Image
              src="/images/company-overview/hs-2.webp"
              alt="Patients holding hands in support"
              fill
              className="object-cover"
              sizes="33vw"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            <div className="relative w-full aspect-[5/4] rounded-[2rem] overflow-hidden shadow-sm">
              <Image
                src="/images/company-overview/hs-3.webp"
                alt="Silhouette of woman with phone"
                fill
                className="object-cover"
                sizes="33vw"
              />
            </div>
            <div className="relative w-52 aspect-square rounded-[2rem] overflow-hidden shadow-sm">
              <Image
                src="/images/company-overview/hs-4.webp"
                alt="Man looking at sunrise"
                fill
                className="object-cover"
                sizes="33vw"
              />
            </div>
          </div>
        </div>
</StaggerFadeUpInView>
        {/* =========================================
            MOBILE IMAGES SECTION (Hidden on Desktop) 
            ========================================= */}
            <StaggerFadeUpInView>
        <div className="grid md:hidden grid-cols-2 gap-4 mt-4">
          
          {/* Left Mobile Column */}
          <div className="flex flex-col gap-2">
            <div className="relative w-full aspect-square rounded-[1.5rem] overflow-hidden shadow-sm">
              <Image
                src="/images/company-overview/hs-1.webp"
                alt="Healthcare professional running on treadmill"
                fill
                className="object-cover"
                sizes="40vw"
              />
            </div>
            <div className="relative w-full h-40 aspect-square rounded-[1.5rem] overflow-hidden shadow-sm">
              <Image
                src="/images/company-overview/hs-4.webp"
                alt="Man looking at sunrise"
                fill
                className="object-cover"
                sizes="40vw"
              />
            </div>
          </div>

          {/* Right Mobile Column */}
          <div className="flex flex-col gap-4">
            <div className="relative w-full h-76 aspect-[3/4] rounded-[1.5rem] overflow-hidden shadow-sm">
              <Image
                src="/images/company-overview/hs-2.webp"
                alt="Patients holding hands in support"
                fill
                className="object-cover"
                sizes="60vw"
              />
            </div>
            <div className="relative w-full h-45 aspect-[4/3]  rounded-[1.5rem] overflow-hidden shadow-sm">
              <Image
                src="/images/company-overview/hs-3.webp"
                alt="Silhouette of woman with phone"
                fill
                className="object-cover"
                sizes="60vw"
              />
            </div>
          </div>

        </div>
          </StaggerFadeUpInView>
      </div>
    </section>
  );
}