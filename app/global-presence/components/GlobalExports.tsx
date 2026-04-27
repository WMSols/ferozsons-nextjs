"use client";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const REGION_COUNTRIES = {
  Asia: [
    "Afghanistan",
    "Azerbaijan",
    "Cambodia",
    "Indonesia",
    "Iraq",
    "Kyrgyzstan",
    "Myanmar",
    "Nepal",
    "Philippines",
    "Qatar",
    "Sri Lanka",
    "Tajikistan",
    "Turkey",
    "Uzbekistan",
    "Yemen",
  ],
  Africa: [
    "Ethiopia",
    "Ghana",
    "Kenya",
    "Mauritania",
    "Mauritius",
    "Morocco",
    "Senegal",
    "Sudan",
    "Tanzania",
    "Uganda",
  ],
  Europe: ["Moldova"],
  "South America": ["Bolivia", "Chile", "Ecuador"],
  "Central America & Caribbean": [
    "Costa Rica",
    "Dominican Republic",
    "Guatemala",
    "Honduras",
    "Panama",
  ],
};

export default function GlobalExports() {
  const [openRegion, setOpenRegion] = useState<string | null>(null);

  const handleContactClick = () => {
    const ctaSection = document.getElementById("global-presence-cta");
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative -mt-16 rounded-t-[3.3rem] bg-[#e8e8e8] pb-14 pt-12 sm:pt-16 lg:-mt-20 lg:rounded-t-[4.2rem] lg:pb-20">
      <div className="container">
        <h2 className="text-center font-kaisei font-bold text-4xl font-black leading-[1.05] tracking-tight text-black sm:text-5xl">
          Global Exports Excellence
        </h2>

        <div className="mt-10 grid gap-5 lg:grid-cols-[290px_1fr] lg:items-start">
          <div>
            <div className="overflow-hidden rounded-[2rem] border border-[#a8adb3] bg-[#efefef]">
              {Object.entries(REGION_COUNTRIES).map(
                ([region, countries], index, arr) => {
                  const isOpen = openRegion === region;

                  return (
                    <div
                      key={region}
                      className={
                        index < arr.length - 1
                          ? "border-b border-[#a8adb3]"
                          : ""
                      }
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenRegion((prev) =>
                            prev === region ? null : region,
                          )
                        }
                        className="flex w-full items-start justify-between px-6 py-5 text-left text-[1.07rem] font-medium text-[#313131]"
                        aria-expanded={isOpen}
                      >
                        <span>{region}</span>
                        <ChevronDown
                          aria-hidden
                          className={`h-4 w-4 text-[#7f8286] transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          isOpen
                            ? "max-h-[1000px] opacity-100 pb-4"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <ul className="space-y-1 px-6">
                          {countries.map((country) => (
                            <li
                              key={country}
                              className="py-2 text-sm text-gray-600"
                            >
                              {country}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                },
              )}
            </div>

            <button
              type="button"
              onClick={handleContactClick}
              className="mt-5 w-full rounded-full bg-[#2f80c7] px-8 py-4 text-2xl font-semibold text-white shadow-[0_10px_22px_rgba(47,128,199,0.35)] transition hover:bg-[#236db0]"
            >
              Contact Us
            </button>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-[#2f87ce] ">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[1.35rem]">
              <Image
                src="/global-presence/world-map.jpg"
                alt="World map showing Ferozsons export footprint"
                fill
                className=" object-center"
                sizes="(max-width: 1024px) 95vw, 70vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
