import Link from "next/link";
import { StaggerFadeUpInView } from "@/components/animations/StaggerFadeUpInView";

const medicineItems = [
  {
    title: "Putting Patients First",
    href: "/about/purpose",
    linkText: "Learn more about our purpose",
  },
  {
    title: "Trustworthiness",
    href: "/about/history",
    linkText: "Learn more about our history",
  },
  {
    title: "Collaboration",
    href: "/partnerships",
    linkText: "Learn more about our partnerships",
  },
  {
    title: "Excellence",
    href: "/contract-manufacturing",
    linkText: "Learn more about our manufacturing",
  },
];

export default function Medicine() {
  return (
    <section className="py-20 md:py-26">
      <div className="container px-8 md:px-20 lg:px-28 xl:px-36">
        <StaggerFadeUpInView>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-snug">
            <span className="italic text-[#3B73AC]">Better medicine</span>
            <br />
            <span className="font-medium">begins with patients</span>
          </h2>
        </StaggerFadeUpInView>

        <StaggerFadeUpInView className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-12 gap-y-10 md:gap-y-16">
          {medicineItems.map((item) => (
            <div key={item.title} className="border-t border-black/10 pt-6">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-sans  text-black">
                {item.title}
              </h3>
              <p className="mt-4">
                <Link
                  href={item.href}
                  className="text-[#3B73AC] text-sm md:text-base lg:text-lg underline underline-offset-4 hover:text-[#294e74] transition-colors"
                >
                  {item.linkText}
                </Link>
              </p>
            </div>
          ))}
        </StaggerFadeUpInView>
      </div>
    </section>
  );
}
