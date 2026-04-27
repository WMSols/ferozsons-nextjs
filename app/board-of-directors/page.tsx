"use client";

import { User } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { boardMembers } from "@/data/partnerships";
import { motion } from "framer-motion";

export default function BoardOfDirectorsPage() {
  const easeStandard: [number, number, number, number] = [0.22, 1, 0.36, 1];
  const easeSpringy: [number, number, number, number] = [0.34, 1.56, 0.64, 1];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 32,
      scale: 0.96,
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

  const avatarVariants = {
    hidden: { scale: 0.7, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.15,
        duration: 0.45,
        ease: easeSpringy,
      },
    },
  };

  return (
    <div className="pt-10">
      <PageHero
        title="Board of Directors"
        subtitle="Meet the leadership guiding Ferozsons Laboratories."
      />

      <section className="py-16">
        <div className="container">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {boardMembers.map((member) => (
              <motion.div
                key={member.name}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  boxShadow:
                    "0 16px 40px -8px rgba(0,0,0,0.12), 0 4px 12px -2px rgba(0,0,0,0.07)",
                  transition: { duration: 0.25, ease: easeStandard },
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-secondary rounded-lg p-6 text-center cursor-default relative overflow-hidden group"
              >
                {/* Subtle shimmer overlay on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 60%)",
                    transition: "opacity 0.3s ease",
                  }}
                />

                {/* Top accent line */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-0.5 bg-primary/30 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.35, ease: easeStandard }}
                />

                {/* Avatar */}
                <motion.div
                  variants={avatarVariants}
                  whileHover={{
                    backgroundColor: "hsl(var(--primary) / 0.18)",
                    transition: { duration: 0.2 },
                  }}
                  className="w-28 h-28 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -8, 8, -4, 0] }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <User className="h-12 w-12 text-primary/40" />
                  </motion.div>
                </motion.div>

                {/* Text */}
                <motion.h3
                  className="font-bold text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {member.name}
                </motion.h3>
                <motion.p
                  className="text-sm text-muted-foreground mt-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.28 }}
                >
                  {member.title}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
