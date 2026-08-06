import Link from "next/link";
import Image from "next/image";

export default function MessageSection() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 container mx-auto">
      <div className="relative w-full rounded-4xl md:rounded-[3rem] overflow-hidden min-h-[600px] md:min-h-[700px] flex items-center shadow-lg group">
        
        {/* Background Image - Placeholder representing international partners */}
        <Image
          src="/global-presence/GP-3.webp"
          alt="International Partnerships"
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 90vw"
          priority
        />
        
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/30 transition-opacity duration-500"></div>

        {/* Content */}
        <div className="relative z-10 px-6 py-12 md:px-16 lg:px-24 max-w-6xl lg:max-w-7xl">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem]  font-medium leading-tight mb-8 md:mb-12">
            We deliver high-quality pharmaceutical products to partners worldwide through seamless international business operations, strategic partnerships, and an unwavering commitment to quality.
          </h2>
          
          <Link
            href="/partnerships"
            className="inline-block bg-[#3B73AC] hover:bg-[#294e74] text-white font-medium text-sm md:text-base px-6 md:px-8 py-3 md:py-3.5 rounded-full transition-all duration-300 hover:shadow-md"
          >
            Explore Our Partnerships
          </Link>
        </div>
      </div>
    </section>
  );
}