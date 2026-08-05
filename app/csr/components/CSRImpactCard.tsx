import Image from "next/image";
import { CSRImpactCardData } from "@/data/csrData";

export default function CSRImpactCard() {
  // Accessing the first item in the array
  const data = CSRImpactCardData[0];

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 container mx-auto">
      <div className="relative w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden min-h-[550px] md:min-h-[750px] flex items-center shadow-lg group">
        
        {/* Background Image */}
        <Image
          src={data.image}
          alt={data.heading}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 90vw"
          priority
        />
        
        {/* Dark Overlay - Using a left-to-right gradient so the text side is darker while the right side shows more of the image */}
        <div className="absolute inset-0 bg-black/30 md:bg-gradient-to-r md:from-black/40 md:via-black/30 md:to-transparent transition-opacity duration-500"></div>

        {/* Content */}
        <div className="relative z-10 px-6 py-12 md:px-16 lg:px-24 max-w-3xl md:max-w-4xl lg:max-w-5xl">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-kaisei font-medium leading-tight mb-6 md:mb-8">
            {data.heading}
          </h2>
          
          <p className="text-white/90 text-sm md:text-base lg:text-lg leading-relaxed">
            {data.description}
          </p>
        </div>
        
      </div>
    </section>
  );
}