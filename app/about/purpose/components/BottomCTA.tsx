import Link from "next/link";

export default function BottomCTA() {
  return (
    <section className="py-16 md:py-28 bg-[#F8F9FA]">
      <div className="container mx-auto px-4 flex flex-col text-black items-center text-center max-w-6xl">
        <h2 className="text-3xl md:text-4xl   font-bold  mb-12">
          Join us in building a better world
        </h2>
        
        <p className="text-base md:text-xl  mb-10 max-w-8xl font-normal">
          We believe that health, knowledge, conservation and creative expression are equally essential to<br className="hidden md:block"/>
          a sustainable society. Many of these initiatives are supported year on year as part of our<br className="hidden md:block"/>
          enduring commitment to our Planet.
        </p>
        
        <Link
          href="/contact"
          className="inline-flex items-center justify-center bg-[#3B73AC] text-white font-normal text-sm md:text-base px-10 py-3.5 rounded-full hover:bg-[#294e74] transition-all duration-300"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
}