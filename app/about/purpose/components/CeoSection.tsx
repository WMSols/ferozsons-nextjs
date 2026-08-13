import Image from "next/image";

export default function CeoSection() {
  return (
    <section className="py-16 md:py-24 bg-[#F8F9FA]">
      <div className="container  px-6 md:px-6 max-w-9xl">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-36">
          
          {/* Left Column: CEO Image */}
          <div className="w-full md:w-2/5 lg:w-1/3 shrink-0 self-start">
            <div className="relative w-full aspect-4/5 max-w-sm mx-auto  md:max-w-none  rounded-4xl overflow-hidden shadow-lg">
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
          <div className="w-full md:w-2/3  flex flex-col relative pt-8 md:pt-0">
            
            {/* Opening Quote */}
            <div 
              className="text-[#3B73AC] text-7xl md:text-[8rem] font-kaisei leading-none absolute -top-4 md:-top-14 -left-4 md:-left-8 select-none"
              aria-hidden="true"
            >
              &ldquo;
            </div>

            {/* Blockquote */}
            <blockquote className="relative z-10 mb-4">
              <h3 className="text-2xl md:text-3xl lg:text-[2.5rem] leading-relaxed font-bold text-black  ">
                As a patient-centric healthcare<br className="hidden md:block"/> company, Ferozsons Laboratories<br className="hidden md:block"/>
                Limited is committed to providing innovative healthcare solutions<br className="hidden md:block"/>
                 and ensuring patient access to<br className="hidden md:block"/>
                 world-class diagnosis, treatment<br className="hidden md:block"/>
                and cure.
              </h3>
            </blockquote>

            {/* Closing Quote */}
            <div 
              className="text-[#3B73AC] text-7xl md:text-[8rem] font-kaisei leading-none self-end select-none -mt-6  md:-mt-8 -mr-2 sm:mr-8"
              aria-hidden="true"
            >
              &rdquo;
            </div>

            {/* CEO Details */}
            <div className="text-black">
              <span className="text-xl md:text-[2rem] font-bold text-black mb-1">
                Osman Khalid Waheed
              </span>
              <p className="text-base md:text-[1.5rem]  font-light">
                Chief Executive Officer & President Ferozsons Laboratories Limited
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}