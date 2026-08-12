import Image from "next/image";

export default function OurValues() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-[#0A1B35]">
      {/* Background Image Placeholder with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about-purpose/Our-Values.webp"
          alt="Values Background"
          fill
          className="object-cover opacity-50"
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-10 max-w-6xl">
        <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif font-medium text-white mb-12 md:mb-16">
          Our Core Values
        </h2>

        <div className="space-y-10 md:space-y-12 max-w-3xl text-white/90">
          
          <div>
            <h3 className="text-2xl md:text-3xl font-serif font-medium mb-3 text-white">
              Putting Patients First
            </h3>
            <p className="text-base md:text-lg font-light leading-relaxed">
              Our purpose for existence and ultimate measure of success is our impact on 
              the improvement of human lives.
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-serif font-medium mb-3 text-white">
              Trustworthiness
            </h3>
            <p className="text-base md:text-lg font-light leading-relaxed">
              We work hard every day to earn the trust of patients, healthcare providers, 
              employees, business partners and other stakeholders.
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-serif font-medium mb-3 text-white">
              Collaboration
            </h3>
            <p className="text-base md:text-lg font-light leading-relaxed">
              None of us is as smart as all of us. We come together, work together and win together.
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-serif font-medium mb-3 text-white">
              Excellence
            </h3>
            <p className="text-base md:text-lg font-light leading-relaxed">
              We are committed to a culture of excellence and raising the bar every time
            </p>
          </div>

        </div>

        {/* "PEOPLE TRUST US" Bottom Right Image Placeholder */}
        <div className="absolute hidden sm:block  right-4 -bottom-24 md:-right-24 w-40 h-28 md:w-56 md:h-72 opacity-60">
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