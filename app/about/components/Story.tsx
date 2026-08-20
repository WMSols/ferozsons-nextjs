import Link from "next/link";
import { StaggerFadeUpInView } from "@/components/animations/StaggerFadeUpInView";

export default function Story() {
  return (
    <section className="py-20 md:py-36">
      <div className="container px-8 md:px-20 lg:px-28 xl:px-36">
        <StaggerFadeUpInView className="max-w-5xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl  font-bold text-black">
            Our Story
          </h2>
          <p className="mt-8 md:mt-10 text-base md:text-xl lg:text-2xl text-black leading-relaxed">
            Ferozsons Laboratories Limited was established in 1954 as one of
            <br className="hidden md:block" />
            the first Pharmaceutical manufacturing companies in Pakistan,
            <br className="hidden md:block" />
            and has now entered its seventh decade of serving the cause of
            <br className="hidden md:block" />
            health and well-being in Pakistan and a growing number of
            <br className="hidden md:block" />
            international markets.
          </p>
          <p className="mt-6 md:mt-8 text-base md:text-xl lg:text-2xl text-black leading-relaxed">
            The company has emerged as one of Pakistan’s fastest-growing
            <br className="hidden md:block" />
            pharmaceutical firms, recognized for delivering high-quality
            <br className="hidden md:block" />
            healthcare solutions and building leading brands across key
            <br className="hidden md:block" />
            therapeutic areas, including gastroenterology, hepatology,
            <br className="hidden md:block" />
            cardiology, and oncology.
          </p>
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <Link
              href="/about/company-overview"
              className="inline-flex items-center justify-center rounded-full border border-[#3B73AC] bg-transparent px-8 py-3 text-sm md:text-base lg:text-lg text-[#3B73AC] transition-colors hover:bg-[#3B73AC] hover:text-white"
            >
              Company Overview
            </Link>
            <Link
              href="/about/history"
              className="inline-flex items-center justify-center rounded-full border border-[#3B73AC] bg-transparent px-8 py-3 text-sm md:text-base lg:text-lg text-[#3B73AC] transition-colors hover:bg-[#3B73AC] hover:text-white"
            >
              Our History
            </Link>
          </div>
        </StaggerFadeUpInView>
      </div>
    </section>
  );
}
