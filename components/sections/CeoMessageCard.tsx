import Image from "next/image";
import Link from "next/link";
import { ceoMessageData } from "@/data/homepage";

export default function CEOMessageCard() {
  // Accessing the first item in the array as requested
  const data = ceoMessageData[0];

  return (
    <section className="mt-8 pt-16 md:pt-24 pb-16 md:pb-24 px-4 md:px-8 container mx-auto">
      <div className="relative w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden min-h-[600px] md:min-h-[800px] flex items-center shadow-lg group">
        
        {/* Background Image */}
        <Image
          src={data.backgroundImage}
          alt="CEO Message Background"
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 90vw"
          priority
        />
        
        {/* Dark Overlay - Using a gradient for better text readability on the left while keeping the right side slightly brighter */}
        <div className="absolute inset-0 bg-black/20  transition-opacity duration-500"></div>

        {/* Content */}
        <div className="relative z-10 px-6 mt-24 py-12 md:py-28 md:px-16 lg:px-26 max-w-3xl md:max-w-5xl lg:max-w-[75rem]">
          <h2 className="text-white text-3xl sm:mt-8 md:mt-12 md:text-4xl lg:text-[3.25rem] font-serif font-medium leading-tight mb-8 md:mb-12">
            {data.quote}
          </h2>
          
          <div className="mb-6 md:mb-8 space-y-1">
            <p className="text-white font-bold text-base md:text-lg tracking-wide">
              {data.authorName}
            </p>
            <p className="text-white/80 text-xs md:text-sm font-medium tracking-wider ">
              {data.authorTitle}
            </p>
          </div>
          
          <Link
            href={data.buttonLink}
            className="inline-flex items-center justify-center bg-[#3B73AC] font-medium hover:bg-[#294e74] text-white text-base px-8 h-12 rounded-full transition-all duration-300 hover:shadow-md"
          >
            {data.buttonText}
          </Link>
        </div>
        
      </div>
    </section>
  );
}