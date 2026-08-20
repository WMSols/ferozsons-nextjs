import { StaggerFadeUpInView } from "@/components/animations/StaggerFadeUpInView";

export default function Guide() {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-8 md:px-20 lg:px-28 xl:px-36">
        <StaggerFadeUpInView>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-black">
            What Guides Us
          </h2>
        </StaggerFadeUpInView>

        <StaggerFadeUpInView className="mt-12 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
          <div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#3B73AC] mb-4 md:mb-6">
              Mission
            </h3>
            <p className="text-base md:text-xl lg:text-2xl text-black leading-relaxed">
              We aim to improve the quality of life
              <br className="hidden md:block" />
              by providing innovative healthcare
              <br className="hidden md:block" />
              solutions, ensuring patient access
              <br className="hidden md:block" />
              to quality treatment and cure.
            </p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#3B73AC] mb-4 md:mb-6">
              Vision
            </h3>
            <p className="text-base md:text-xl lg:text-2xl text-black leading-relaxed">
              We will strive to attain market
              <br className="hidden md:block" />
              leadership by putting patients first and
              <br className="hidden md:block" />
              seeing every day as a new opportunity
              <br className="hidden md:block" />
              to earn trust and credibility
            </p>
          </div>
        </StaggerFadeUpInView>
      </div>
    </section>
  );
}
