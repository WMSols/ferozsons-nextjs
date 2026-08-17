"use client";

import Link from "next/link";
import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { HeroImageZoom } from "@/components/animations/HeroImageZoom";
import { StaggerFadeUp } from "@/components/animations/StaggerFadeUp";
import { ButtonMotion } from "@/components/animations/ButtonMotion";
import { ArrowDown } from "lucide-react";

export interface HeroSlide {
  id: number;
  image: string;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  ctaText: string;
  ctaLink: string;
  align?: "center" | "left";
  footer?: React.ReactNode;
}

interface HeroCarouselProps {
  slides: HeroSlide[];
  autoPlayInterval?: number;
}

export default function HeroCarousel({
  slides,
  autoPlayInterval = 8000,
}: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((c) => {
        setPrev(c);
        return c === slides.length - 1 ? 0 : c + 1;
      });
    }, autoPlayInterval);
  }, [slides.length, autoPlayInterval]);

  useEffect(() => {
    startTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startTimer]);

  const goToSlide = useCallback(
    (index: number) => {
      setCurrent((c) => {
        setPrev(c);
        return index;
      });
      startTimer(); // resets timer on manual click
    },
    [startTimer],
  );

  return (
  
    <section className=" relative flex min-h-[93vh] flex-col items-center justify-center overflow-hidden rounded-b-[3.1rem]   px-8 xs:pt-32 shadow-sm md:px-12 md:pt-24 lg:px-16 lg:pt-32">
      {slides.map((slide, index) => {
        const isActive = current === index;
        const isPrev = prev === index;

        return (
          <div
            key={slide.id}
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{
              opacity: isActive ? 1 : 0,
              zIndex: isActive ? 10 : isPrev ? 5 : 0,
              transition: "opacity 1200ms ease-in-out",
              pointerEvents: isActive ? "auto" : "none",
            }}
          >
            <div className="absolute inset-0">
              <HeroImageZoom active={isActive}>
                <img
                  src={slide.image}
                  alt="Hero"
                  className="h-full w-full object-cover object-center"
                />
              </HeroImageZoom>
              <div
  className="absolute inset-0 bg-black/50 "
  aria-hidden
/>
            </div>

            {isActive && (
              <StaggerFadeUp
                className={`container relative z-10 sm:px-32 pt-24 -pb-10 flex w-full flex-col ${
                  slide.align === "left"
                    ? "items-start text-left"
                    : ""
                }`}
              >
                <h1 className=" text-5xl  font-bold leading-tight text-hero-heading sm:text-5xl md:text-6xl lg:text-[82px] max-w-4xl">
                  {slide.title}
                </h1>
                <p className=" mt-8 sm:mt-6 max-w-3xl text-base font-normal md:text-xl   leading-relaxed text-white  ">
                  {slide.description}
                </p>
                <ButtonMotion>
                  <Button
                    asChild
                    size="lg"
                    className="mt-10 rounded-full bg-hero-cta h-12 px-8 text-base font-medium text-hero-cta-foreground hover:opacity-90"
                  >
                    <Link href={slide.ctaLink}>{slide.ctaText}</Link>
                  </Button>
                </ButtonMotion>
                {slide.footer && slide.footer}
              </StaggerFadeUp>
            )}
          </div>
        );
      })}
        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-500 ease-out ${
              current === index
                ? "w-8 bg-[#89bdf2]"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
