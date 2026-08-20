"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TherapeuticArea } from "@/types/strapi";
import { useCategories } from "@/app/products/hooks/useCategories";
import { cn } from "@/lib/utils";
import TherapeuticCardBig from "@/components/shared/TherapeuticCardBig";
import { StaggerFadeUpInView } from "../animations/StaggerFadeUpInView";

interface TherapeuticsGridProps {
  items: TherapeuticArea[];
  loading: boolean;
}

export default function TherapeuticsGridClient({
  items,
  loading
}: TherapeuticsGridProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Refs for swipe tracking
  const touchStartX = useRef<number>(0);
  const isDragging = useRef(false);
  const hasMoved = useRef(false);

  const { categories, isLoading: categoriesLoading } = useCategories();

  const getCategorySlug = (title: string) => {
    const categorySlug = !categoriesLoading && categories.find((c) => c.name === title)?.slug;
    // Fallback to a URL-friendly slug if strapi data isn't loaded yet
    return categorySlug || title.toLowerCase().replace(/\s+/g, '-'); 
  };

  const nextSlide = () => {
    if (!items || items.length === 0) return;
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (!items || items.length === 0) return;
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  return (
    <section className="bg-background mt-8 pt-16 md:pt-24 pb-0 text-black overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-16">
        <StaggerFadeUpInView>
        <span className=" font-light   uppercase ">
          Product List
        </span>
        <h3 className="text-3xl md:text-[82px]  font-bold mb-10 mt-8 ">
          A broad portfolio of <br/> pharmaceutical solutions
        </h3>
        <p className=" text-sm md:text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
          Through continuous development and strategic partnerships, we offer medicines<br className="hidden md:block"/> across several therapeutic areas to support modern healthcare.
        </p>
        </StaggerFadeUpInView>
      </div>

      {loading ? (
        <div className="text-muted-foreground py-12 text-center">
          Loading therapeutic areas...
        </div>
      ) : !items || items.length === 0 ? (
        <div className="text-muted-foreground py-12 text-center">
          No therapeutic areas found.
        </div>
      ) : (
        <div className="relative w-full max-w-[1600px] mx-auto flex flex-col items-center">
          
          {/* Carousel Track with Swipe Listeners */}
          <div 
            // Adjusted container height to comfortably fit the large center card
            className="relative w-full mt-16 flex justify-center items-center h-[620px] md:h-[600px] lg:h-[640px] xl:h-[700px] touch-pan-y select-none"
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
            {items.map((item, index) => {
              const length = items.length;
              
              let offset = index - activeIndex;
              if (offset > Math.floor(length / 2)) offset -= length;
              else if (offset < -Math.floor(length / 2)) offset += length;

              const isActive = offset === 0;
              const isPrev = offset === -1 || (offset < 0 && length === 2);
              const isNext = offset === 1 || (offset > 0 && length === 2);

              const linkHref = `/products?category=${getCategorySlug(item.name)}`;

              return (
                <div
                  key={item.name}
                  className={cn(
                    "absolute left-1/2 top-1/2 w-[70%] md:w-[54%] lg:w-[50%] xl:w-[60%] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 ease-out",
                    isActive && "z-10 opacity-100 pointer-events-auto",
                    (isPrev || isNext) && "z-[5] opacity-100 pointer-events-auto",
                    !isActive && !isPrev && !isNext && "z-0 opacity-0 pointer-events-none"
                  )}
                >
                  <div
                    className={cn(
                      "transition-transform duration-700 ease-out",
                      isActive && "translate-x-0 scale-100",
                      isPrev && "-translate-x-[95%] md:-translate-x-[90%] scale-75 sm:scale-[0.68] ",
                      isNext && "translate-x-[95%] md:translate-x-[90%] scale-75 sm:scale-[0.68] ",
                      !isActive && !isPrev && !isNext && "scale-[0.6]"
                    )}
                  >
                    <TherapeuticCardBig
                      item={item}
                      isActive={isActive}
                      linkHref={linkHref}
                      onClick={() => {
                        if (hasMoved.current) return;
                        if (!isActive) setActiveIndex(index);
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-6 mt-12">
            <button 
              onClick={prevSlide} 
              className="p-2 hover:bg-muted rounded-full transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            
            <div className="flex gap-3">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-500 ease-out",
                    activeIndex === idx ? "w-8 bg-primary" : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  )}
                />
              ))}
            </div>

            <button 
              onClick={nextSlide} 
              className="p-2 hover:bg-muted rounded-full transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}