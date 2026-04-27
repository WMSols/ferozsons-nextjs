import PageHero from "@/components/layout/PageHero";
import CTABanner from "@/components/layout/CTABanner";
import ValuesGrid from "@/components/sections/ValuesGrid";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { values, missionCommitments } from "@/data/purpose";

export const metadata = {
  title: "Our Purpose",
  description:
    "Our purpose is to advance health and improve lives by placing patients at the center of everything we do.",
};

export default function PurposePage() {
  return (
    <div className="pt-10">
      <PageHero
        title="Our Purpose"
      />

      {/* Purpose Statement */}
      <SectionWrapper
        className="py-20 md:py-28"
        containerClassName="max-w-3xl text-center"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold leading-snug text-foreground">
          Our purpose is to advance health and improve lives by placing patients
          at the center of everything we do.
        </h2>
        <p className="mt-8 text-muted-foreground leading-relaxed text-lg">
          We are committed to integrating responsibility, trust, and ethical
          decision-making into our values, culture, and business practices to
          ensure meaningful and sustainable impact.
        </p>
      </SectionWrapper>

      {/* Vision */}
      <SectionWrapper
        className="bg-secondary py-16 md:py-20"
        containerClassName="max-w-4xl"
      >
        <div className="grid md:grid-cols-[1fr_2fr] gap-10 items-start">
          <div>
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-2">
              Our Vision
            </p>
            <div className="w-16 h-1 bg-primary rounded-full" />
          </div>
          <p className="text-foreground text-lg md:text-xl font-serif leading-relaxed">
            To achieve leadership in healthcare by placing patients at the
            center of everything we do, earning trust every day through
            innovation, responsibility, and unwavering commitment to quality.
          </p>
        </div>
      </SectionWrapper>

      {/* Mission */}
      <SectionWrapper containerClassName="max-w-4xl">
        <div className="grid md:grid-cols-[1fr_2fr] gap-10 items-start">
          <div>
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-2">
              Our Mission
            </p>
            <div className="w-16 h-1 bg-primary rounded-full" />
          </div>
          <div>
            <p className="text-foreground text-lg leading-relaxed mb-8">
              Our mission is to improve quality of life by delivering innovative
              healthcare solutions that expand patient access to effective
              treatments and cures. In pursuing this mission, we are committed
              to:
            </p>
            <ul className="space-y-4">
              {missionCommitments.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">
                    {i + 1}
                  </span>
                  <span className="text-muted-foreground leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      {/* Values */}
      <ValuesGrid
        label="Our Values"
        title="What Guides Us Every Day"
        values={values}
      />

      <CTABanner />
    </div>
  );
}
