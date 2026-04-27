"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import SectionWrapper from "@/components/shared/SectionWrapper";
import type { Partnership } from "@/data/partnerships";

interface PartnersGridProps {
  partners: Partnership[];
  className?: string;
}

export default function PartnersGrid({
  partners,
  className,
}: PartnersGridProps) {
  const easeStandard: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 24,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: easeStandard,
      },
    },
  };

  const cardBackgrounds = [
    "bg-sky-50",
    "bg-emerald-50",
    "bg-amber-50",
    "bg-rose-50",
    "bg-violet-50",
    "bg-teal-50",
  ];

  return (
    <SectionWrapper className={cn("py-12 md:py-16", className)}>
      <h2 className="font-kaisei text-3xl md:text-5xl font-bold text-center mb-12 md:mb-14 text-foreground">
        Our Trusted Partners
      </h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {partners.map((partner, index) => (
          <motion.a
            key={partner.name}
            href={partner.website}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${partner.name} website in a new tab`}
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              "group flex h-full flex-col overflow-hidden rounded-2xl border border-border/40 shadow-sm",
              "transition-shadow hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              cardBackgrounds[index % cardBackgrounds.length],
            )}
          >
            <div className="relative flex flex-1 min-h-52  items-center justify-center p-6 md:p-8 bg-white/45 backdrop-blur-[2px]">
              {partner.logo ? (
                <div className="relative h-full w-full">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ) : null}
            </div>
            <div className="border-t border-white/60 bg-white/70 px-4 py-3 text-center backdrop-blur-sm">
              <p className="text-sm font-semibold text-foreground">
                {partner.name}
              </p>

            </div>
          </motion.a>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
