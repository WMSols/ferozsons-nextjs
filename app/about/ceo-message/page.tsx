import { ArrowRight, Linkedin } from "lucide-react";
import CTABanner from "@/components/layout/CTABanner";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { ceoBio, ceoMessageParagraphs } from "@/data/ceo-message";

export const metadata = {
  title: "Message from the CEO",
  description:
    "A message from Osman Khalid Waheed, Chief Executive Officer of Ferozsons Laboratories Limited.",
};

export default function CEOMessagePage() {
  return (
    <>
      <div className="mt-16 md:mt-24">
        {/* 2-Column Layout */}
        <SectionWrapper
          className="py-16 md:py-24"
          containerClassName="max-w-5xl mx-auto px-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] lg:grid-cols-[440px_1fr] gap-12 lg:gap-16">
            
            {/* Portrait - Ordered first on mobile, first on desktop */}
            <div className="order-1">
              <div className="aspect-[3/4] rounded-[3rem] md:rounded-[50px] overflow-hidden bg-secondary">
                <img
                  src={ceoBio.image}
                  alt={`${ceoBio.name} — ${ceoBio.title}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Message Info - Ordered second on mobile, second on desktop */}
            <div className="order-2">
              <div className="flex flex-col h-full pb-6 justify-center md:justify-between items-center text-center md:items-start md:text-left w-full">
                
                {/* Text Block & LinkedIn */}
                <div className="flex flex-col items-center md:items-start gap-4 md:gap-8 border-[#3B73AC] border-t-2 pt-6 mb-8 md:mb-4 w-full">
                  
                  <div className="flex flex-col gap-2">
                    <h1 className="text-2xl md:text-3xl font-bold text-black">
                      Osman Khalid Waheed
                    </h1>
                    <p className="text-sm md:text-xl text-black font-light">
                      Chief Executive Officer
                    </p>
                  </div>

                  <a
                    href={ceoBio.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity mt-2 md:mt-0"
                    aria-label="LinkedIn Profile"
                  >
                    <span className="font-bold text-4xl bg-[#0077B5] text-white py-1 px-2 md:py-2 md:px-3 rounded">
                      in
                    </span>
                  </a>

                </div>

                {/* CTA Button */}
                <a
                  href="#ceo-message"
                  className="bg-[#3B73AC] text-white rounded-full hover:bg-[#294e74] transition-colors text-sm md:text-base font-medium inline-flex items-center justify-center py-3.5 px-8 md:py-6 md:px-12 w-fit shadow-sm"
                >
                  A Message from Our CEO 
                  <ArrowRight className="hidden md:block h-4 w-4 ml-2" />
                </a>

              </div>
            </div>

          </div>
        </SectionWrapper>

        {/* CEO Message Paragraphs */}
        <div 
          id="ceo-message" 
          className="scroll-mt-28 max-w-4xl mx-auto px-8 text-black border-b-[2px] border-[#3B73AC] pb-12 space-y-6 md:space-y-8 lg:space-y-10 mb-16 md:mb-24"
        >
          {ceoMessageParagraphs.map((paragraph, i) => (
            <p
              key={i}
              className="leading-relaxed text-base md:text-2xl"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <CTABanner />
      </div>
    </>
  );
}