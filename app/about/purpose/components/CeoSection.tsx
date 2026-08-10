import Image from "next/image";

export default function CeoSection() {
  return (
    <section className="py-16 md:py-24 bg-[#F8F9FA]">
      <div className="container mx-auto px-6 md:px-10 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: CEO Image */}
          <div className="w-full md:w-2/5 lg:w-1/3 shrink-0">
            <div className="relative w-full aspect-[4/5] max-w-sm mx-auto md:max-w-none rounded-[2rem] overflow-hidden shadow-lg">
              <Image
                src="/ceo-message/ceo.webp"
                alt="Osman Khalid Waheed"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
          </div>

          {/* Right Column: Quote & Details */}
          <div className="w-full md:w-3/5 lg:w-2/3 flex flex-col relative pt-8 md:pt-0">
            
            {/* Opening Quote */}
            <div 
              className="text-[#3B73AC] text-7xl md:text-[6rem] font-serif leading-none absolute -top-4 md:-top-8 -left-4 md:-left-8 select-none"
              aria-hidden="true"
            >
              &ldquo;
            </div>

            {/* Blockquote */}
            <blockquote className="relative z-10 mb-4">
              <p className="text-2xl md:text-3xl lg:text-[2.4rem] font-serif font-medium text-foreground leading-snug tracking-tight">
                As a patient-centric healthcare company, Ferozsons Laboratories
                Limited is committed to providing innovative healthcare solutions
                and ensuring patient access to world-class diagnosis, treatment
                and cure.
              </p>
            </blockquote>

            {/* Closing Quote */}
            <div 
              className="text-[#3B73AC] text-7xl md:text-[6rem] font-serif leading-none self-end select-none -mt-4 md:-mt-8 -mr-4 md:-mr-8"
              aria-hidden="true"
            >
              &rdquo;
            </div>

            {/* CEO Details */}
            <div className="mt-4 md:mt-2">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                Osman Khalid Waheed
              </h3>
              <p className="text-sm md:text-base text-muted-foreground font-light">
                Chief Executive Officer & President Ferozsons Laboratories Limited
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}