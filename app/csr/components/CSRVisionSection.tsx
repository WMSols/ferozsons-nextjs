import { StaggerFadeUpInView } from "@/components/animations/StaggerFadeUpInView";

export default function CSRVisionSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-8">
        <div className="max-w-3xl">
          {/* Main Heading */}
          <StaggerFadeUpInView>
          <h2 className="text-5xl md:text-6xl lg:text-[4.5rem]  font-bold text-black mb-8 leading-[1.1]">
            Creating Impact <br />
            Beyond <span className="text-[#3B73AC] italic">Medicine</span>
          </h2>
          
          {/* Subheading Lead */}
          <p className="text-xl md:text-2xl text-black mb-8 leading-relaxed">
            Our commitment to sustainability extends beyond <br/> business to create lasting value for people,<br/> communities, and the planet.
          </p>
          
          {/* Body Paragraph */}
          <p className="text-black text-sm md:text-base leading-relaxed">
            At Ferozsons, giving back is not a programme—it is part of our deep purpose. We are<br className="hidden md:block"/>
            committed to building a legacy that is bigger than our footprint, fueling non-profits and<br className="hidden md:block"/>
            Civil Society Organizations (CSOs) to help Pakistan meet key Sustainable Development<br className="hidden md:block"/>
            Goals. Our approach to sustainability embraces environmental responsibility, social<br className="hidden md:block"/>
            impact, and strong governance, ensuring that the value we create today contributes to<br className="hidden md:block"/>
            a healthier, more resilient future.
          </p>
          </StaggerFadeUpInView>
        </div>
      </div>
    </section>
  );
}