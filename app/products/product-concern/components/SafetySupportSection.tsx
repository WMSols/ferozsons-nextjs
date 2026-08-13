import Image from "next/image";
import Link from "next/link";

export default function SafetySupportSection() {
  return (
    <section className="py-16 md:py-24 bg-[#F8F9FA] mt-8 sm:mt-20">
      <div className="container text-black mx-auto px-4 max-w-9xl flex flex-col gap-16 md:gap-24">
        
        {/* Top Part: Intro & Text (from first screenshot) */}
        <div className="text-center max-w-6xl mx-auto flex flex-col items-center">
          <span className="text-xs md:text-base font-light  uppercase mb-6 md:mb-16">
            Safety Support
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-bold  mb-8 md:mb-14 leading-[1.15]">
            Advancing Patient Safety<br className="hidden md:block"/> Through Your Feedback
          </h2>
          
          <div className="space-y-6  text-base md:text-lg leading-relaxed px-2 md:px-0">
            <p>
              Guided by our Patients First commitment, Ferozsons Laboratories Limited encourages healthcare professionals, and<br className="hidden md:block"/>
              patients to report any side effects, adverse events, or product quality concerns associated with our medicines. If you<br className="hidden md:block"/>
              experience a side effect while taking a Ferozsons medicine, please seek medical advice from your doctor or<br className="hidden md:block"/>
              healthcare provider.
            </p>
            <p>
              Your reports help us continually monitor the safety, quality, and effectiveness of our products, supporting our<br className="hidden md:block"/>
              ongoing commitment to patient well-being.
            </p>
          </div>
        </div>

        {/* Bottom Part: Channels Image Card (from second screenshot) */}
        <div className="relative w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden min-h-[500px] md:min-h-[850px] flex items-center shadow-xl group">
          
          {/* Background Image - Placeholder for low-light phone user */}
          <Image
            src="/images/product-concern/subimage.webp"
            alt="Reporting adverse events via phone"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 90vw"
            priority
          />
          
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/45 transition-opacity duration-500"></div>

          {/* Card Content */}
          <div className="relative z-10 px-6 py-12 md:px-16 lg:px-24 max-w-8xl">
            <h3 className="text-white text-3xl md:text-4xl lg:text-[3.3rem] font-bold leading-tight mb-10 md:mb-12">
              Ferozsons Laboratories Limited provides<br className="hidden md:block"/> the following four channels for reporting<br className="hidden md:block"/> adverse events related to our products:
            </h3>

            {/* List of Channels */}
            <div className="text-white/90 text-base md:text-[1.5rem] space-y-5 md:space-y-6">
              <div className="flex gap-3 items-start">
                <span className="shrink-0">1.</span>
                <p>
                  You may contact us during office hours or outside office hours at (+92 42) 36026700
                </p>
              </div>
              
              <div className="flex gap-3 items-start">
                <span className="shrink-0">2.</span>
                <p>
                  You can fax any documentation to (+92 42) 36026701-2
                </p>
              </div>
              
              <div className="flex gap-3 items-start">
                <span className="shrink-0">3.</span>
                <p>
                  Reports can be submitted by email to{" "}
                  <a
                    href="mailto:pharmacovigilance@ferozsons-labs.com"
                    className="underline underline-offset-4 hover:text-white transition-colors"
                  >
                    pharmacovigilance@ferozsons-labs.com
                  </a>
                </p>
              </div>
              
              <div className="flex gap-3 items-start">
                <span className="shrink-0">4.</span>
                <p>
                  You can also complete the form below to report a product concern, adverse event, or<br className="hidden md:block"/>
                  suspected side effect.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}