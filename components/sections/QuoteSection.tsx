"use client";

import { QuoteReveal } from "@/components/animations/QuoteReveal";

interface QuoteSectionProps {
  quote: string;
  attribution?: string;
}

export default function QuoteSection({ quote, attribution }: QuoteSectionProps) {
  return (
    <section className="py-20">
      <div className="container text-center max-w-3xl mx-auto">
        <QuoteReveal className="text-2xl md:text-3xl font-serif italic text-foreground leading-relaxed">
          &quot;{quote}&quot;
        </QuoteReveal>
        {attribution && (
          <p className="mt-6 text-sm text-muted-foreground font-medium">
            &mdash; {attribution}
          </p>
        )}
      </div>
    </section>
  );
}
