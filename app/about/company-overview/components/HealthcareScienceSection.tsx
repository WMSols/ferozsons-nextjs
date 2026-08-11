import Image from "next/image";

export default function HealthcareScienceSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Top Text & Stats Section */}
        <div className="flex flex-col gap-8 mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-black leading-[1.1] max-w-4xl">
            Advancing Healthcare<br className="hidden md:block" /> Through Science
          </h2>
          
          <p className="text-black text-lg md:text-xl leading-relaxed max-w-2xl mt-4">
            A patient-centric healthcare organization focused on addressing critical unmet medical needs in Pakistan and international markets
          </p>

          {/* Stats Row */}
          <div className="grid w-[85%]  grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-10">
            <div className="flex flex-col">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-2">1500+</h2>
              <span className="text-black text-sm md:text-base">Employees</span>
            </div>
            <div className="flex flex-col">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-2">140+</h2>
              <span className="text-black text-sm md:text-base">Products</span>
            </div>
            <div className="flex flex-col">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-2">25+</h2>
              <span className="text-black text-sm md:text-base">Therapeutic Areas</span>
            </div>
            <div className="flex flex-col">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-2">30+</h2>
              <span className="text-black text-sm md:text-base">Countries We Export To</span>
            </div>
          </div>
        </div>

        {/* Bottom Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          
          {/* Left Image (Medium Height) */}
          <div className="relative w-full aspect-square rounded-4xl overflow-hidden shadow-sm">
            <Image
              src="/images/company-overview/hs-1.webp"
              alt="Healthcare professional running on treadmill"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          {/* Center Image (Tallest) */}
          <div className="relative w-full aspect-[2/3] rounded-[2rem] overflow-hidden shadow-sm">
            <Image
              src="/images/company-overview/hs-2.webp"
              alt="Patients holding hands in support"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          {/* Right Column (Two Stacked Smaller Images) */}
          <div className="flex flex-col gap-6">
            <div className="relative w-full aspect-square md:aspect-[5/4] rounded-[2rem] overflow-hidden shadow-sm">
              <Image
                src="/images/company-overview/hs-3.webp"
                alt="Silhouette of woman with phone"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative w-52 aspect-square  rounded-[2rem] overflow-hidden shadow-sm">
              <Image
                src="/images/company-overview/hs-4.webp"
                alt="Man looking at sunrise"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}