import Link from "next/link";
import { StaggerFadeUpInView } from "@/components/animations/StaggerFadeUpInView";

export default function CTA() {
  return (
    <section className="py-20 md:py-28 bg-[#E5F2FF]">
      <div className="container px-8 md:px-20 lg:px-28 xl:px-36">
        <StaggerFadeUpInView className="max-w-5xl">
          <h2 className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-black leading-tight">
            Support starts with a   <br className="hidden md:block" />
             conversation
          </h2>
          <p className="mt-6 md:mt-8 text-base md:text-xl lg:text-2xl xl:text-3xl text-black font-normal leading-relaxed">
            Whether you have a question about our medicines, need
            <br className="hidden md:block" />
            more information, or are looking for the right resources,
            <br className="hidden md:block" />
            our team is here to help.
          </p>
          <Link
            href="/contact"
            className="mt-8 md:mt-10 inline-flex items-center justify-center rounded-full bg-[#3B73AC] px-10 py-3.5 text-sm md:text-base lg:text-lg text-white transition-colors hover:bg-[#294e74]"
          >
            Contact Us
          </Link>
        </StaggerFadeUpInView>
      </div>
    </section>
  );
}
