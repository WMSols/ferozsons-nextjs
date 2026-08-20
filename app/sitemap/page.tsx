import Link from "next/link";
import { sitemapPage } from "@/data/sitemap";

export const metadata = {
  title: "Site Map",
  description:
    "Find your way around the Ferozsons Laboratories Limited website.",
};

export default function SitemapPage() {
  return (
    <section className="bg-[#F7F7F7] pt-28 pb-16 md:pt-52 md:pb-24">
      <div className="container max-w-[75rem]">
        <h1 className="text-4xl md:text-6xl lg:text-[5.375rem] font-bold text-black leading-tight mb-10 sm:mb-24">
          {sitemapPage.title}
        </h1>
        <h2>
        <Link
          href={sitemapPage.home.href}
          className="inline-block text-3xl md:text-6xl font-bold text-[#3B73AC] border-b-2 border-[#3B73AC] pb-2 mb-12 hover:text-[#294e74]"
        >
          {sitemapPage.home.label}
        </Link>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
          {sitemapPage.groups.map((group) => (
            <div key={group.title}>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
                {group.title}
              </h2>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li
                    key={`${group.title}-${link.href}-${link.label}`}
                    className="flex items-start gap-2"
                  >
                    <span
                      className="mt-2.5 h-px w-3 shrink-0 bg-[#3B73AC]"
                      aria-hidden
                    />
                    <Link
                      href={link.href}
                      className="text-[#3B73AC] underline underline-offset-4 hover:text-[#294e74]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
