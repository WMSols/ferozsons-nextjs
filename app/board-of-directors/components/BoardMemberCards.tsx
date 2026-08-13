"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BoardDirector } from "@/types/strapi";
import { getStrapiImageUrl } from "@/lib/strapi";

interface BoardMemberProps {
  members: BoardDirector[];
}

// Constants for fallbacks when backend data is missing
const PLACEHOLDER_IMAGE = "/ceo-message/ceo.webp";
const PLACEHOLDER_DESC = "Ferozsons Laboratories Limited is dedicated to maintaining the highest standards of corporate governance. Detailed biographical information for this board member will be updated shortly. They bring extensive experience and strategic vision to the leadership team, ensuring our continued commitment to excellence, innovation, and putting patients first.Ferozsons Laboratories Limited is dedicated to maintaining the highest standards of corporate governance. Detailed biographical information for this board member will be updated shortly. They bring extensive experience and strategic vision to the leadership team, ensuring our continued commitment to excellence, innovation, and putting patients firstFerozsons Laboratories Limited is dedicated to maintaining the highest standards of corporate governance. Detailed biographical information for this board member will be updated shortly. They bring extensive experience and strategic vision to the leadership team, ensuring our continued commitment to excellence, innovation, and putting patients first.";

export default function BoardMemberCards({ members }: BoardMemberProps) {
  const [selectedMember, setSelectedMember] = useState<BoardDirector | null>(null);

  // Helper to prevent body scroll when modal is open
  if (typeof window !== "undefined") {
    if (selectedMember) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }

  return (
    <section className="py-16 md:py-28 bg-background pt-24">
      <div className="container mx-auto px-4 max-w-8xl">
        
        {/* Section Heading & Subheading */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl  font-bold text-black mb-6">
            The Leaders Behind Ferozsons
          </h2>
          <p className=" text-base md:text-[22px] text-black  font-light">
            Guided by integrity and driven by purpose, we are committed to putting patients first<br className="hidden md:block"/>
            through innovation, collaboration, excellence, and ethical leadership.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
          {members.map((member) => {
            // Keep fetching logic intact
            const fetchedImageUrl = getStrapiImageUrl(member.image?.url);

            return (
              <div key={member.name} className="flex flex-col group">
                {/* Image Container */}
                <div className="relative w-full aspect-square rounded-[2rem] md:rounded-[2.5rem] overflow-hidden mb-6 bg-gradient-to-br from-[#4A88C9] to-[#2B5B8E]">
                  {/* Conditional Rendering for Image */}
                  {fetchedImageUrl ? (
                    <Image
                      src={fetchedImageUrl}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <Image
                      src={PLACEHOLDER_IMAGE}
                      alt={`${member.name} Placeholder`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105 "
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  )}
                </div>

                {/* Text Content */}
                <h3 className="text-2xl font-medium text-black font-sans mb-2">
                  {member.name}
                </h3>
                <p className=" text-[#565656] mb-4 font-light">
                  {member.role}
                </p>
                <button
                  onClick={() => setSelectedMember(member)}
                  className="text-[#3B73AC] text-left text-sm font-medium underline underline-offset-4 hover:text-[#294e74] transition-colors w-fit"
                >
                  Read More
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail View Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedMember(null)}
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-5xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col z-10 max-h-[90vh] md:max-h-[85vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 text-gray-400 hover:text-black z-20 bg-white/80 backdrop-blur-md rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Scrollable Content Area */}
              <div className="overflow-y-auto w-full p-6 md:p-10 lg:py-18  flex flex-col md:flex-row gap-8 lg:gap-12 custom-scrollbar">
                
                {/* Left Side: Image */}
                <div className="w-full md:w-[40%] shrink-0">
                  <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#4A88C9] to-[#2B5B8E] shadow-sm">
                    {/* Conditional Rendering for Modal Image */}
                    {getStrapiImageUrl(selectedMember.image?.url) ? (
                      <Image
                        src={getStrapiImageUrl(selectedMember.image?.url) as string}
                        alt={selectedMember.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 40vw"
                        priority
                      />
                    ) : (
                      <Image
                        src={PLACEHOLDER_IMAGE}
                        alt={`${selectedMember.name} Placeholder`}
                        fill
                        className="object-cover  "
                        sizes="(max-width: 768px) 100vw, 40vw"
                        priority
                      />
                    )}
                  </div>
                </div>

                {/* Right Side: Details */}
                <div className="w-full md:w-[60%] flex flex-col pt-2 md:pt-4">
                  <h3 className="text-3xl md:text-4xl font-medium font-sans mb-2">
                    {selectedMember.name}
                  </h3>
                  <p className="text-sm md:text-base text-[#565656] mb-8 pb-6 border-b border-gray-100">
                    {selectedMember.role}
                  </p>
                  
                  {/* Bio Content - Conditional Rendering */}
                  <div className=" max-w-none text-black text-sm  leading-relaxed whitespace-pre-wrap">
                    {selectedMember.bio || selectedMember.description || PLACEHOLDER_DESC}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}