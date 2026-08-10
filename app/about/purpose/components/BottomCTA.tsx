import Link from "next/link";

export default function BottomCTA() {
  return (
    <section className="py-16 md:py-24 bg-[#F8F9FA]">
      <div className="container mx-auto px-4 flex flex-col items-center text-center max-w-4xl">
        <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-serif font-medium text-foreground mb-6">
          Join us in building a better world
        </h2>
        
        <p className="text-foreground/80 text-base md:text-lg leading-relaxed mb-10 max-w-3xl font-light">
          We believe that health, knowledge, conservation and creative expression are equally essential to 
          a sustainable society. Many of these initiatives are supported year on year as part of our 
          enduring commitment to our Planet.
        </p>
        
        <Link
          href="/contact"
          className="inline-flex items-center justify-center bg-[#3B73AC] text-white font-medium text-sm md:text-base px-10 py-3.5 rounded-full hover:bg-[#294e74] transition-all duration-300"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
}