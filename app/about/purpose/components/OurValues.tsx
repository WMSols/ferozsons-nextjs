import Image from "next/image";

export default function OurValues() {
  return (
    <section className="relative py-20 md:py-42 overflow-hidden bg-[#0A1B35]">
      {/* Background Image Placeholder with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about-purpose/Our-Values.webp"
          alt="Values Background"
          fill
          className="object-cover opacity-30"
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-16 max-w-8xl">
        <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white mb-12 md:mb-14">
          Our Core Values
        </h2>

        <div className="space-y-10 md:space-y-12 max-w-5xl text-white/90">
          
          <div className="flex flex-col gap-8">
            <h3 className="text-2xl md:text-[3rem] font-bold  text-white">
              Putting Patients First
            </h3>
            <p className="text-base md:text-[24px] font-light leading-relaxed">
              Our purpose for existence and ultimate measure of success is our impact on <br className="hidden md:block"/>
              the improvement of human lives.
            </p>
            <h3 className="text-2xl md:text-[3rem] font-bold  text-white">
              Trustworthiness
            </h3>
            <p className="text-base md:text-[24px] font-light leading-relaxed">
              We work hard every day to earn the trust of patients, healthcare providers, <br className="hidden md:block"/> 
              employees, business partners and other stakeholders.
            </p>
        
            <h3 className="text-2xl md:text-[3rem] font-bold  text-white">
              Collaboration
            </h3>
            <p className="text-base md:text-[24px] font-light leading-relaxed">
              None of us is as smart as all of us. We come together, work together and win<br className="hidden md:block"/> together.
            </p>
          

        
            <h3 className="text-2xl md:text-[3rem] font-bold  text-white">
              Excellence
            </h3>
            <p className="text-base md:text-[24px] font-light leading-relaxed">
              We are committed to a culture of excellence and raising the bar every time
            </p>
          </div>

        </div>

        {/* "PEOPLE TRUST US" Bottom Right Image Placeholder */}
        <div className="absolute hidden sm:block  right-4 -bottom-24 md:-right-8 w-40 h-28 md:w-56 md:h-72 opacity-60">
          <Image
            src="/people-trust-us.webp"
            alt="People Trust Us"
            fill
            className="object-contain object-bottom right-0 font-serif"
          />
        </div>
      </div>
    </section>
  );
}