"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type PartnerBlock = {
  name: string;
  paragraphs: string[];
  bullets?: string[];
  cta: string;
};

const partnerBlocks: PartnerBlock[] = [
  {
    name: "Boston Scientific",
    paragraphs: [
      "Ferozsons is the authorized distributor in Pakistan for Boston Scientific, a global leader in medical technology.",
      "Boston Scientific provides a broad portfolio of innovative medical devices designed to address complex healthcare challenges.",
      "Through this partnership, Ferozsons supports the availability of advanced interventional technologies in Pakistan across multiple clinical areas, including:",
    ],
    bullets: [
      "Cardiology",
      "Gastrointestinal Endoscopy",
      "Oncology",
      "Peripheral Vascular Disease",
      "Urology",
      "Women's Health",
    ],
    cta: "Learn more about Boston Scientific",
  },
  {
    name: "NIHON KOHDEN",
    paragraphs: [
      "Ferozsons serves as a distributor partner in Pakistan for Nihon Kohden, a global medical technology company known for its advanced diagnostic and patient monitoring systems.",
      "Nihon Kohden technologies support healthcare providers with solutions for:",
      "Through this partnership, Ferozsons helps bring reliable and innovative medical technologies to hospitals and healthcare facilities across Pakistan.",
    ],
    bullets: [
      "Patient monitoring systems",
      "Neurology and EEG diagnostics",
      "Cardiology and ECG systems",
      "Critical care monitoring technologies",
    ],
    cta: "Learn more about NIHON KOHDEN",
  },
  {
    name: "Butterfly Network",
    paragraphs: [
      "Ferozsons is the authorized distributor in Pakistan for Butterfly Network, a pioneer in handheld ultrasound technology and digital medical imaging.",
      "Butterfly Network develops innovative portable ultrasound solutions designed to make medical imaging more accessible, efficient, and cost-effective.",
      "Through this partnership, Ferozsons supports the introduction of advanced handheld ultrasound technology to healthcare providers across Pakistan, with applications in multiple clinical settings, including:",
      "This collaboration enables clinicians in Pakistan to access modern, AI-enabled ultrasound technology that supports faster diagnostics and improves access to medical imaging at the point of care.",
    ],
    bullets: [
      "Emergency Medicine",
      "Critical Care",
      "Cardiology",
      "Obstetrics and Gynecology",
      "Primary Care",
      "Point-of-Care Diagnostics",
    ],
    cta: "Learn more about Butterfly Network",
  },
];



function PartnerCard({
  partner,
  fullWidth = false,
}: {
  partner: PartnerBlock;
  fullWidth?: boolean;
}) {
  return (
    <article
      className={`rounded-[20px] bg-[#1f1f1f] p-8 sm:p-10 flex flex-col ${fullWidth ? "md:col-span-2" : ""}`}
    >
      <h3 className="text-[28px] font-bold leading-tight text-white sm:text-[32px] md:text-[36px]">
        {partner.name}
      </h3>

      <div className="mt-5 space-y-4">
        {partner.paragraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="text-[16px] leading-relaxed text-[#999999] sm:text-[17px] md:text-[18px]"
          >
            {paragraph}
          </p>
        ))}
      </div>

      {partner.bullets && (
        <ul className="mt-4 space-y-2 text-[16px] leading-relaxed text-[#999999] sm:text-[17px] md:text-[18px]">
          {partner.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2">
              <span aria-hidden>•</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-10">
        <Link
          href="/partnerships"
          className="inline-flex rounded-[10px] border border-[#444444] bg-[#2a2a2a] px-6 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-[#3a3a3a]"
        >
          {partner.cta}
        </Link>
      </div>
    </article>
  );
}

export function PartnerDetails() {
  return (
    <section className="bg-[#2a2a2a] px-4 py-8 sm:py-10 md:py-12">
      <div className="stagger-container mx-auto grid max-w-300 grid-cols-1 gap-3 md:grid-cols-2">
        <PartnerCard partner={partnerBlocks[0]} />
        <PartnerCard partner={partnerBlocks[1]} />
        <PartnerCard partner={partnerBlocks[2]} fullWidth />
      </div>
    </section>
  );
}
