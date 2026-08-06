import Link from "next/link";

export default function CSRClosingCTA() {
  return (
    <section className="py-16 md:py-24 bg-[#EBEFF4]">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center text-center max-w-4xl">
        <h2 className="text-3xl md:text-4xl lg:text-[2.5rem]  font-bold  mb-6">
          Join us in building a better world
        </h2>
        
        <p className="text-foreground/80 text-base md:text-lg leading-relaxed mb-10 max-w-3xl">
          We believe that health, knowledge, conservation and creative expression
          are equally essential to a sustainable society. Many of these
          initiatives are supported year on year as part of our enduring
          commitment to our Planet.
        </p>
        
        <Link
          href="/contact"
          className="inline-flex items-center justify-center bg-black text-white font-medium text-sm md:text-base px-10 py-3.5 rounded-full hover:bg-black/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
}
