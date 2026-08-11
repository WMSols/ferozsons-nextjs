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
        containerClassName="max-w-5xl mx-auto"
      >
        <div className="grid md:grid-cols-[380px_1fr] lg:grid-cols-[440px_1fr] gap-12 lg:gap-16">
          {/* Portrait */}
          <div className="order-2 md:order-1">
           
              <div className="aspect-[3/4] rounded-[50px] overflow-hidden bg-secondary mb-6">
                <img
                  src={ceoBio.image}
                  alt={`${ceoBio.name} — ${ceoBio.title}`}
                  className="w-full h-full object-cover"
                />
              </div>
      
          </div>

          {/* Message */}
          <div className="order-1 md:order-2 ">
        <div className="flex flex-col h-full pb-6  justify-between">
         <div className="flex flex-col gap-8 border-[#3B73AC] border-t-2 pt-6 mb-4">
           <h1 className="text-3xl font-bold text-black">
            Osman Khalid Waheed
          </h1>
          <p className="text-xl   text-black font-light mb-2">
            Chief Executive Officer & President 
          </p>
           <a
              href={ceoBio.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
            >
              <span className="font-bold text-4xl bg-[#0077B5] text-white py-2 px-3 rounded">in</span>
              
            </a>
         </div>
            <a href="#ceo-message" className=" bg-[#3B73AC] text-white rounded-full hover:bg-[#294e74] transition-colors text-sm font-medium flex justify-between py-6 px-12">
              A Message from the CEO <ArrowRight className="h-4 w-4 ml-1" />
            </a>
        </div>
          </div>
        </div>
      </SectionWrapper>
      <div id="ceo-message" className=" scroll-mt-28 max-w-4xl mx-auto text-black space-y-6 md:space-y-8 lg:space-y-10 mb-16 md:mb-24">
                  {ceoMessageParagraphs.map((paragraph, i) => (
              <p
                key={i}
                className=" leading-relaxed text-2xl"
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
