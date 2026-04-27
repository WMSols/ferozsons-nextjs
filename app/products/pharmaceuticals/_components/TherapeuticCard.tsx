"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type TherapeuticCardProps = {
  title?: string;
  icon?: string;
  description?: string;
  portfolioLink?: string;
  placeholder?: boolean;
};

export default function TherapeuticCard({
  title,
  icon,
  description = "",
  portfolioLink,
  placeholder = false,
}: TherapeuticCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const openModal = () => {
    if (placeholder) return;
    setIsOpen(true);
    requestAnimationFrame(() => setVisible(true));
  };

  const closeModal = () => {
    setVisible(false);
    setTimeout(() => setIsOpen(false), 300);
  };

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => e.key === "Escape" && closeModal();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen]);

  return (
    <>
      {/* Card */}
      <div
        onClick={openModal}
        className={`group relative bg-[#3b6a9e] rounded-3xl aspect-square flex flex-col p-6 md:p-8 transition-transform duration-200 overflow-hidden ${
          !placeholder ? "cursor-pointer hover:scale-[1.02]" : ""
        }`}
      >
        {!placeholder && (
          <>
            <h3 className="font-kaisei text-white text-2xl md:text-3xl font-bold text-left w-full">
              {title}
            </h3>
            <div className="flex-1 w-full flex items-center justify-center mt-2">
              <div className="relative w-[85%] h-[85%] md:w-[90%] md:h-[90%]">
                <Image
                  src={icon!}
                  alt={`${title} illustration`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 rounded-3xl bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
              <span className="text-white text-sm font-medium tracking-wide opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                View Details
              </span>
            </div>
          </>
        )}
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
            visible ? "bg-black/40" : "bg-black/0"
          }`}
          onClick={closeModal}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 transition-all duration-300 ${
              visible
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 translate-y-4"
            }`}
          >
            <h2 className="font-kaisei text-2xl md:text-3xl font-bold text-pharma-text-primary mb-4">
              {title}
            </h2>

            <div className="space-y-4">
              <p className="text-pharma-text-secondary text-[15px] leading-relaxed">
                {description}
              </p>
            </div>

            <a
              href={`/products?category=${title?.toLowerCase()}`}
              className="mt-6 inline-block border border-[#3b6a9e] text-[#3b6a9e] text-sm px-5 py-2.5 rounded-lg hover:bg-[#3b6a9e] hover:text-white transition-colors duration-200"
            >
              View Our {title} Portfolio
            </a>
          </div>
        </div>
      )}
    </>
  );
}
