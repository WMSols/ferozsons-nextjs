import PageHero from "@/components/layout/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import CeoSection from "./components/CeoSection";
import CommitSection from "./components/CommitSection";
import OurValues from "./components/OurValues";
import BottomCTA from "./components/BottomCTA";

export const metadata = {
  title: "Our Purpose",
  description:
    "Our purpose is to advance health and improve lives by placing patients at the center of everything we do.",
};

export default function PurposePage() {
  return (
    <div className="bg-[#F7F7F7]">
      <PageHero
        title="Our Purpose"
        backgroundImage="/images/about-purpose/Hero.webp"
      />

      {/* Purpose Statement */}
      <SectionWrapper
        className="py-20 md:py-28"
        containerClassName="max-w-5xl text-center"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          We advance health and improve lives by placing patients at the center of everything we do.
        </h2>
        <p className="mt-8 font-light text-lg">
          Responsibility, trust, and ethical decision-making are reflected into our values, shaping our culture, guiding our actions, and driving sustainable impact.
        </p>
      </SectionWrapper>

      {/* CEO Section */}
      <CeoSection />
      
      {/* Commitment Section */}
      <CommitSection />

      {/* Mission & Vision Sections (Stacked & Reordered) */}
      <SectionWrapper
        className="py-16 md:py-24 bg-[#F8F9FA]"
        containerClassName="max-w-4xl"
      >
        <div className="flex flex-col gap-16">
          
          {/* Mission */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-6">
              Our Mission
            </h2>
            <div className="space-y-6 text-foreground/90 text-lg md:text-xl font-light leading-relaxed">
              <p>
                We aim to improve the quality of life by providing
                innovative healthcare solutions, ensuring patient
                access to quality treatment and cure.
              </p>
              <p>
                In doing so, we are committed to creating long-term
                shareholder value, investing in the growth and
                development of our people, fostering a culture of
                collaboration and excellence, and upholding the
                highest standards of ethics and transparency.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-6">
              Vision
            </h2>
            <div className="text-foreground/90 text-lg md:text-xl font-light leading-relaxed">
              <p>
                We will strive to attain market leadership by putting
                patients first and seeing every day as a new
                opportunity to earn trust and credibility
              </p>
            </div>
          </div>

        </div>
      </SectionWrapper>

      {/* New Core Values Section */}
      <OurValues />

      {/* New Bottom CTA Section */}
      <BottomCTA />
    </div>
  );
}