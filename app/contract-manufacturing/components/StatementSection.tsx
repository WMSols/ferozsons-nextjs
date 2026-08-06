"use client";

import { FadeInSection } from "./helpers/FadeInSection";

export function StatementSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 ">
        <FadeInSection>
          {/* Section Heading */}
          <h2 className="text-[#3B73AC] text-xl md:text-3xl font-serif mb-8 md:mb-16">
            Contract Manufacturing
          </h2>
          
          {/* Text Content */}
          <div className="space-y-6 text-xl font-sans md:text-3xl leading-relaxed">
            <p>
              Ferozsons Laboratories Limited operates a fully cGMP-compliant manufacturing facility, equipped
              with modern production and analytical technologies and certified under quality standards.
            </p>
            
            <p>
              Our facility integrates advanced manufacturing systems, modern quality control laboratories,
              and internationally aligned operational standards, enabling the production of high-quality
              pharmaceutical formulations for both domestic and international markets.
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}