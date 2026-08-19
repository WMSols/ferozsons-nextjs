"use client";

import { StaggerGrid } from "@/components/animations/StaggerGrid";
import ArticleCard from "@/components/shared/ArticleCard";
import type { Article } from "@/data/articles";
import { ReactNode, TouchEvent, useRef } from "react";
import { StaggerFadeUpInView } from "../animations/StaggerFadeUpInView";

interface ArticlesGridProps {
  articles: Article[];
  title?: string | ReactNode;
  subtitle?: string;
  columns?: 2 | 3;
  animated?: boolean;
  isLoading?: boolean;
}

export default function ArticlesGrid({
  articles,
  title,
  subtitle,
  columns = 3,
  animated = true,
  isLoading
}: ArticlesGridProps) {
  const gridCols =
    columns === 2
      ? "grid-cols-1 md:grid-cols-2"
      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
      
  const cards = articles.map((article) => (
    <ArticleCard
      key={article.id}
      article={article}
    />
  ));

  const scrollerRef = useRef<HTMLDivElement>(null);
  const touchStart = useRef({ x: 0, y: 0 });

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStart.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    const el = scrollerRef.current;
    if (!el) return;

    const dx = Math.abs(e.touches[0].clientX - touchStart.current.x);
    const dy = Math.abs(e.touches[0].clientY - touchStart.current.y);

    // Vertical swipe: release this row so the page can scroll.
    // Horizontal swipe: keep overflow-x so the cards can pan.
    el.style.overflowX = dy > dx ? "hidden" : "auto";
  };

  const handleTouchEnd = () => {
    if (scrollerRef.current) {
      scrollerRef.current.style.overflowX = "";
    }
  };

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        
        {/* Updated Centered Header */}
        {(title || subtitle) && (
          <div className="flex flex-col items-center text-black justify-center text-center mb-12 gap-16">
            {subtitle && (
              <StaggerFadeUpInView>
              <p className=" font-light  uppercase">
                {subtitle}
              </p>
              </StaggerFadeUpInView>
            )}
            {title && (
              <StaggerFadeUpInView>
              <h2 className="text-4xl md:text-5xl lg:text-[82px]  font-bold leading-normal  max-w-6xl">
                {title}
              </h2>
              </StaggerFadeUpInView>
            )}
          </div>
        )}

        {isLoading ? (
          <div className="text-muted-foreground py-12 text-center">
            Loading latest articles...
          </div>
        ) : (
          <div className="hidden md:block">
            {animated ? (
              <StaggerGrid className={`grid ${gridCols} gap-8 md:gap-10`}>
                {cards}
              </StaggerGrid>
            ) : (
              <div className={`grid ${gridCols} gap-8 md:gap-10`}>{cards}</div>
            )}
          </div>
        )}
      </div>

      {!isLoading && articles.length > 0 && (
        <div
          ref={scrollerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
          className="md:hidden flex gap-4 overflow-x-auto overscroll-x-contain snap-x snap-mandatory pl-4 ml-3 sm:ml-0 pr-4 [touch-action:pan-x_pan-y] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {articles.map((article) => (
            <div
              key={article.id}
              className="w-[78vw]  shrink-0 snap-start"
            >
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}