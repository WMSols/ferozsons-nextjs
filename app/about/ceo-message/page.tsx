import { Linkedin } from "lucide-react";
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
      {/* Navy Hero */}
      <section className="bg-navy text-navy-foreground py-16 pt-30 -mt-24">
        <div className="container">
          <p className="text-xs tracking-[0.2em] uppercase text-primary mb-2">
            CEO Ferozsons Laboratories Limited
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif">
            Osman Khalid Waheed
          </h1>
        </div>
      </section>

      {/* 2-Column Layout */}
      <SectionWrapper
        className="py-16 md:py-24"
        containerClassName="max-w-5xl mx-auto"
      >
        <div className="grid md:grid-cols-[380px_1fr] lg:grid-cols-[440px_1fr] gap-12 lg:gap-16">
          {/* Portrait */}
          <div className="order-2 md:order-1">
            <div className="sticky top-28">
              <div className="aspect-[3/4] rounded-lg overflow-hidden bg-secondary mb-6">
                <img
                  src={ceoBio.image}
                  alt={`${ceoBio.name} — ${ceoBio.title}`}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* <h2 className="text-xl font-bold font-serif">{ceoBio.name}</h2>
              <p className="text-muted-foreground text-sm mb-3">
                {ceoBio.title}
              </p> */}
            </div>
          </div>

          {/* Message */}
          <div className="order-1 md:order-2 space-y-6">
            {ceoMessageParagraphs.map((paragraph, i) => (
              <p
                key={i}
                className="text-muted-foreground leading-relaxed text-lg"
              >
                {paragraph}
              </p>
            ))}
            <a
              href={ceoBio.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
            >
              <Linkedin className="h-5 w-5" />
              Connect on LinkedIn
            </a>

            {/* Signature */}
            {/* <div className="pt-6 border-t border-border mt-8">
              <p className="font-serif font-bold text-lg text-foreground">
                {ceoBio.name}
              </p>
              <p className="text-muted-foreground text-sm">{ceoBio.title}</p>
            </div> */}
          </div>
        </div>
      </SectionWrapper>

      <CTABanner />
    </>
  );
}
