"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface TherapeuticItem {
  label: string;
  image: string;
}

interface TherapeuticsGridProps {
  items: TherapeuticItem[];
}

const ITEMS_PER_PAGE_MOBILE = 2;
const ITEMS_PER_PAGE_DESKTOP = 4;

export default function TherapeuticsGrid({ items }: TherapeuticsGridProps) {
  const [page, setPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
      setPage(0);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const itemsPerPage = isMobile
    ? ITEMS_PER_PAGE_MOBILE
    : ITEMS_PER_PAGE_DESKTOP;
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const start = page * itemsPerPage;
  const visibleItems = items.slice(start, start + itemsPerPage);

  const prev = () => setPage((p) => Math.max(0, p - 1));
  const next = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  return (
    <section className="pt-8 pb-16 md:pt-10 md:pb-20">
      <div className="mx-4 lg:mx-6">
        <h2 className="font-kaisei text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-4 leading-snug">
          A broad range of pharmaceutical solutions
        </h2>

        <p className="font-sans text-xs sm:text-sm md:text-base text-gray-600 mb-6 md:mb-10 max-w-xl leading-relaxed">
          Through continuous development and strategic partnerships, we offer
          medicines across several therapeutic areas to support modern
          healthcare.
        </p>

        {/* Card Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 ">
          {visibleItems.map(({ label, image }) => (
            <Link
             href={`/products?category=${encodeURIComponent(label.toLowerCase())}`}
              key={label}
              className="bg-[#3b6a9e] rounded-2xl md:rounded-3xl hover:scale-102 transition-all duration-300 w-full aspect-square flex flex-col p-4 sm:p-4 md:p-6"
            >
              {/* Bumped mobile floor from 11px → text-sm (14px), rest of scale unchanged */}
              <h3 className="font-kaisei text-white text-sm sm:text-sm md:text-base lg:text-xl font-bold text-left leading-tight break-words hyphens-auto">
                {label}
              </h3>

              {/* Image shrinks to give label room */}
              <div className="flex-1 relative mt-1 min-h-0 min-w-0">
                <Image
                  src={image}
                  alt={`${label} illustration`}
                  fill
                  className="object-contain p-1 sm:p-2"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-6 md:mt-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-white shadow-md px-3 py-1.5 md:px-4 md:py-2">
              <button
                type="button"
                onClick={prev}
                disabled={page === 0}
                className="p-1 text-gray-600 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Previous"
              >
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
              </button>

              {Array.from({ length: totalPages }).map((_, i) => (
                <span
                  key={i}
                  className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-colors ${
                    i === page ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  aria-hidden
                />
              ))}

              <button
                type="button"
                onClick={next}
                disabled={page === totalPages - 1}
                className="p-1 text-gray-600 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Next"
              >
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
