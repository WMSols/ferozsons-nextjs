'use client'

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  {
    name: "Boston Scientific",
    logo: "/medical-technologies/boston-scientific.png",
    url: "https://www.bostonscientific.com",
    bgColor: "bg-emerald-50"
  },
  { name: "NIHON KOHDEN",
    logo: "/medical-technologies/nihon-kohden.png",
  url: "https://www.nihonkohden.com",
bgColor: "bg-violet-50" },
  { name: "Butterfly",
    logo: "/medical-technologies/butterfly.png",
  url: "https://www.butterflynetwork.com",
bgColor: "bg-rose-50" },
];

export function TrustedPartners() {
  return (
    <section className="bg-[#2a2a2a] px-6 pb-16 pt-6 sm:pb-20 md:pb-24">
      <div className="mx-auto max-w-275">
        <h2
          className="reveal-section text-center font-kaisei font-bold tracking-normal text-white
          text-[32px] leading-9
          sm:text-[42px] sm:leading-11.5
          md:text-[52px] md:leading-14
          lg:text-[64px] lg:leading-17"
        >
          Our Trusted Partners
        </h2>

        <div className="stagger-container mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row sm:flex-wrap sm:gap-6">
          {partners.map((partner) => (
            <motion.a
            href={partner.url}
            target="_blank"
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
              key={partner.name}
              className={`flex group shrink-0 items-center justify-center ${partner.bgColor} shadow-[0_8px_40px_rgba(0,0,0,0.5)]
                w-40 h-40 rounded-[20px] p-6
                sm:w-[260px] sm:h-[260px] sm:rounded-[26px] sm:p-8
                md:w-[300px] md:h-[300px] md:rounded-[30px] md:p-10
                lg:w-[320px] lg:h-[320px] lg:rounded-[32px] lg:p-10`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
