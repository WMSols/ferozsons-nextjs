"use client";

import React from "react";
import { motion } from "framer-motion";

const ctaLinks = [
  { label: "About Us", href: "/about" },
  { label: "Medical Technologies", href: "/products/medical-technologies" },
  { label: "Creating Impact", href: "/csr" },
  { label: "Newsroom", href: "/newsroom" },
  { label: "Investor Relations", href: "/investors" },
];

const CtaSection: React.FC = () => {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #0d2d6b 0%, #1a4db8 60%, #1e6fa8 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-5xl font-black text-white mb-5"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            More to explore
          </h2>
          <p className="text-blue-200/70 mb-10 text-lg">
            Discover how Ferozsons continues to innovate across every dimension
            of healthcare.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {ctaLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-blue-100/80 hover:text-white border border-white/15 hover:border-white/50 px-5 py-2.5 rounded-full text-sm font-medium transition-all backdrop-blur-sm hover:bg-white/10"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
