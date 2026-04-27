"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FadeInSection } from "./helpers/FadeInSection";
import type { CurrentClient, LegacyClient } from "../data/types";

export interface ClientsSectionProps {
  currentClients: CurrentClient[];
  legacyClients: LegacyClient[];
}

export function ClientsSection({
  currentClients,
  legacyClients,
}: ClientsSectionProps) {
  return (
    <section
      className="py-28"
      style={{
        background: "linear-gradient(160deg, #0a1628 0%, #122050 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-16 text-center">
        <FadeInSection>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-[#4a90d9] mb-4">
            Our Clients
          </p>
          <h2
            className="font-display text-white mb-14"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 700,
            }}
          >
            Our Valued <br />
            Contract Manufacturing{" "}
            <em className="not-italic font-bold" style={{ color: "#93c5fd" }}>
              Clients
            </em>
          </h2>
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <div
            className="rounded-3xl p-8 mb-16"
            style={{
              background:
                "linear-gradient(140deg, #163168 0%, #0d2356 50%, #0a1e4a 100%)",
              border: "1px solid rgba(74,144,217,0.25)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
            }}
          >
            <div className="grid grid-cols-3 gap-6 mb-10">
              {currentClients.map((client, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  whileHover={{
                    y: -6,
                    boxShadow: "0 15px 40px rgba(0,0,0,0.12)",
                  }}
                  className="bg-white rounded-2xl p-6 flex items-center justify-center cursor-default"
                  style={{ minHeight: 150 }}
                >
                  <Image
                    src={client.image}
                    alt="client"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </motion.div>
              ))}
            </div>

            <p
              className="font-body text-white text-center mb-8 leading-relaxed"
              style={{ fontSize: "1rem", fontWeight: 300 }}
            >
              Our legacy includes{" "}
              <strong className="font-semibold">
                successful contract manufacturing collaborations
              </strong>{" "}
              with a distinguished portfolio of our past clients.
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              {legacyClients.map((name, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 + 0.2 }}
                  whileHover={{ scale: 1.04 }}
                  className="font-body text-white text-sm px-5 py-2 rounded-full cursor-default"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    fontWeight: 300,
                  }}
                >
                  {name}
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInSection>


      </div>
    </section>
  );
}
