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
        containerClassName=" text-center text-black -mb-12"
      >
        <h2 className="text-2xl md:text-[3.2rem] font-bold">
          We advance health and improve lives by placing <br className="hidden md:block"/> patients at the center of everything we do.
        </h2>
        <p className="mt-8 font-light text-xl md:text-[1.6rem]">
          Responsibility, trust, and ethical decision-making are reflected into our values, shaping our<br className="hidden md:block"/> culture, guiding our actions, and driving sustainable impact.
        </p>
      </SectionWrapper>

      {/* CEO Section */}
      <CeoSection />
      
      {/* Commitment Section */}
      <CommitSection />

      {/* Mission & Vision Sections (Stacked & Reordered) */}
      <SectionWrapper
        className="py-16 md:py-24 ]"
        containerClassName=""
      >
        <div className="flex flex-col gap-16 text-left">
          
          {/* Mission */}
          <div >
            <h2 className="text-3xl md:text-[3rem]  font-bold text-black mb-12">
              Our Mission
            </h2>
            <div className="space-y-6 text-black text-lg md:text-[2rem] sm:max-w-5xl font-normal">
              <p>
                We aim to improve the quality of life by providing <br className="hidden md:block"/>
                innovative healthcare solutions, ensuring patient <br className="hidden md:block"/>
                access to quality treatment and cure.
              </p>
              <p>
                In doing so, we are committed to creating long-term <br className="hidden md:block"/>
                shareholder value, investing in the growth and <br className="hidden md:block"/>
                development of our people, fostering a culture of <br className="hidden md:block"/>
                collaboration and excellence, and upholding the <br className="hidden md:block"/>
                highest standards of ethics and transparency.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div>
            <h2 className="text-3xl md:text-[3rem]  font-bold text-black mb-12">
              Vision
            </h2>
            <div className="text-black text-lg md:text-[2rem] font-normal ">
              <p>
                We will strive to attain market leadership by putting <br className="hidden md:block"/>
                patients first and seeing every day as a new <br className="hidden md:block"/>
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