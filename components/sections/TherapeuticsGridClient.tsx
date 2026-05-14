"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { StaggerFadeUp } from "../animations/StaggerFadeUp";
import { StaggerFadeUpInView } from "../animations/StaggerFadeUpInView";
import { TherapeuticArea } from "@/types/strapi";
import { getStrapiImageUrl } from "@/lib/strapi";

interface TherapeuticsGridProps {
  items: TherapeuticArea[];
}

const ITEMS_PER_PAGE_MOBILE = 2;
const ITEMS_PER_PAGE_DESKTOP = 4;

export default function TherapeuticsGridClient({
  items,
}: TherapeuticsGridProps) {
  const [page, setPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef<number>(0);
  const isDragging = useRef(false);
  const hasMoved = useRef(false);

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

  //Therapuetic area image url resolving
  const getImageUrl = (
    image: string | { url: string } | undefined,
  ): string | undefined => {
    return typeof image === "string" ? image : image?.url;
  };

  const getTherapeuticImage = (url: string | { url: string } | undefined) => {
    const stringUrl = getImageUrl(url);

    if (!stringUrl) return undefined;

    // local image from public folder
    if (stringUrl.startsWith("/images")) {
      return stringUrl;
    }

    // strapi image
    return getStrapiImageUrl(stringUrl);
  };

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
        <StaggerFadeUpInView>
          <div
            className="touch-pan-y select-none cursor-grab active:cursor-grabbing grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
            onPointerDown={(e) => {
              touchStartX.current = e.clientX;
              isDragging.current = true;
              hasMoved.current = false;
            }}
            onPointerMove={(e) => {
              if (!isDragging.current) return;

              const dx = e.clientX - touchStartX.current;

              if (Math.abs(dx) > 10) {
                hasMoved.current = true;
              }
            }}
            onPointerUp={(e) => {
              if (!isDragging.current) return;

              isDragging.current = false;

              const dx = e.clientX - touchStartX.current;

              if (Math.abs(dx) > 40) {
                if (dx < 0) {
                  next();
                } else {
                  prev();
                }
              }

              requestAnimationFrame(() => {
                hasMoved.current = false;
              });
            }}
            onPointerCancel={() => {
              isDragging.current = false;
            }}
          >
            {visibleItems.map((item) => {
              return (
                <Link
                  href={`/products?category=${item.name.toLowerCase()}`}
                  key={item.name}
                  onClick={(e) => {
                    if (hasMoved.current) {
                      e.preventDefault();
                    }
                  }}
                  className="bg-[#3b6a9e] rounded-2xl md:rounded-3xl hover:scale-102 transition-all duration-300 w-full aspect-square flex flex-col p-4 sm:p-4 md:p-6"
                >
                  {/* Bumped mobile floor from 11px → text-sm (14px), rest of scale unchanged */}
                  <h3 className="font-kaisei capitalize text-white text-sm sm:text-sm md:text-base lg:text-xl font-bold text-left leading-tight wrap-break-words hyphens-auto">
                    {item.name}
                  </h3>

                  {/* Image shrinks to give label room */}
                  <div className="flex-1 relative mt-1 min-h-0 min-w-0">
                    {item.image ? (
                      <Image
                        src={getTherapeuticImage(item.image)!}
                        alt={`${item.name} illustration`}
                        fill
                        className="object-contain p-1 sm:p-2"
                      />
                    ) : (
                      <div className="flex justify-center items-center h-full">
                        <h1 className="text-8xl text-white/10">
                          {item.name.charAt(0)}
                        </h1>
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </StaggerFadeUpInView>

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
