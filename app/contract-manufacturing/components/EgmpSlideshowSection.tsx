"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { eGMPSlideshow } from "@/data/contract-manufacturing";
import { cn } from "@/lib/utils";

const EgmpSlideshowSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Refs for swipe tracking on mobile
  const touchStartX = useRef<number>(0);
  const isDragging = useRef(false);
  const hasMoved = useRef(false);

  const nextSlide = () => {
    if (!eGMPSlideshow || eGMPSlideshow.length === 0) return;
    setActiveIndex((prev) => (prev === eGMPSlideshow.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (!eGMPSlideshow || eGMPSlideshow.length === 0) return;
    setActiveIndex((prev) => (prev === 0 ? eGMPSlideshow.length - 1 : prev - 1));
  };

  return (
    <section className="py-12 md:py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-10 max-w-[1400px]">
        
        {/* Carousel Area */}
        <div className="relative w-full flex flex-col items-center">
          
          {/* Slides Track */}
          <div 
            // Fluid height that hugs the landscape aspect ratio based on screen width
            className="relative w-full flex justify-center items-center h-[60vw] sm:h-[45vw] md:h-[30vw] lg:h-[500px] xl:h-[600px] touch-pan-y select-none"
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
                if (dx < 0) nextSlide(); 
                else prevSlide(); 
              }
              
              requestAnimationFrame(() => {
                hasMoved.current = false;
              });
            }}
            onPointerCancel={() => {
              isDragging.current = false;
            }}
          >
            {eGMPSlideshow.map((slide, index) => {
              const length = eGMPSlideshow.length;
              
              // Infinite loop offset logic
              let offset = index - activeIndex;
              if (offset > Math.floor(length / 2)) offset -= length;
              else if (offset < -Math.floor(length / 2)) offset += length;

              const isActive = offset === 0;
              const isPrev = offset === -1 || (offset < 0 && length === 2);
              const isNext = offset === 1 || (offset > 0 && length === 2);

              // Base styling for completely hidden cards
              let transform = "translateX(0) scale(0.7)";
              let zIndex = 0;
              let opacity = 0;
              let pointerEvents: "none" | "auto" = "none";

              // 110% translation pushes them out to create the gap
              if (isActive) {
                transform = "translateX(0) scale(1)";
                zIndex = 10;
                opacity = 1;
                pointerEvents = "auto";
              } else if (isPrev) {
                transform = "translateX(-110%) scale(0.85)";
                zIndex = 5;
                opacity = 1;
                pointerEvents = "auto";
              } else if (isNext) {
                transform = "translateX(110%) scale(0.85)";
                zIndex = 5;
                opacity = 1;
                pointerEvents = "auto";
              }

              return (
                <div
                  key={index}
                  // Enforced landscape aspect ratio (3:2) instead of full-height stretching
                  className="absolute w-[85%] sm:w-[70%] md:w-[60%] lg:w-[60%] aspect-[3/2] transition-all duration-700 ease-out rounded-2xl md:rounded-[32px] overflow-hidden shadow-lg"
                  style={{ transform, zIndex, opacity, pointerEvents }}
                  onClick={() => {
                    if (hasMoved.current || isActive) return;
                    setActiveIndex(index);
                  }}
                >
                  <Image
                    src={slide.src}
                    alt={`Manufacturing Facility Image ${index + 1}`}
                    fill
                    quality={90}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 75vw"
                    priority={isActive}
                    unoptimized={true}
                  />
                  {/* Dim non-active slides to draw focus to the center */}
                  <div 
                    className={cn(
                      "absolute inset-0  transition-opacity duration-700 pointer-events-none",
                      isActive ? "opacity-0" : "opacity-100"
                    )}
                  />
                </div>
              );
            })}
          </div>

          {/* Controls - Merged Pill Design */}
          <div className="mt-8 md:mt-12 flex items-center justify-center">
            <div className="flex items-center gap-4 bg-[#F0F0F0] rounded-full px-6 py-3">
              <button 
                onClick={prevSlide} 
                className="p-1 hover:bg-black/10 rounded-full transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 text-foreground" />
              </button>
              
              <button 
                onClick={nextSlide} 
                className="p-1 hover:bg-black/10 rounded-full transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 text-foreground" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EgmpSlideshowSection;