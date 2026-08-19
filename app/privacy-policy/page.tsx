import Link from "next/link";
import { privacyPolicy } from "@/data/privacy-policy";
import { fetchWebsiteUpdateDate } from "@/lib/website-update-date";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Ferozsons Laboratories Limited collects, uses, and protects personal information submitted through our website.",
};

export default async function PrivacyPolicyPage() {
  const lastUpdated = await fetchWebsiteUpdateDate();

  return (
    <section className="bg-white pt-28 pb-16 md:pt-52 md:pb-24">
      <div className="container max-w-[75rem]">
        <h1 className="text-4xl md:text-6xl lg:text-[5.375rem] font-bold text-black leading-tight mb-8 sm:mb-24">
          {privacyPolicy.title}
        </h1>

        <p className="font-sans font-bold text-black mb-8 ">
          Last Updated: {lastUpdated}
        </p>

        <div className="space-y-6 text-black font-sans text-base md:text-lg leading-relaxed">
          {privacyPolicy.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12 space-y-10">
          {privacyPolicy.sections.map((section) => (
            <div key={section.heading} className="space-y-4">
              <h2 className="font-sans font-bold text-[#3B73AC] text-lg md:text-xl">
                {section.heading}
              </h2>

              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-black font-sans text-base md:text-lg leading-relaxed"
                >
                  {section.contactHref ? (
                    <>
                      {paragraph.replace(/please contact us\.?$/i, "").trim()}{" "}
                      <Link
                        href={section.contactHref}
                        className="text-[#3B73AC] underline underline-offset-4 hover:text-[#294e74]"
                      >
                        contact us
                      </Link>
                      .
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
              ))}

              {section.bullets && (
                <ul className="list-disc pl-6 space-y-1 text-black font-sans text-base md:text-lg leading-relaxed">
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}

              {section.closing?.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-black font-sans text-base md:text-lg leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
