"use client";

import { StaggerGrid } from "@/components/animations/StaggerGrid";
import ArticleCard from "@/components/shared/ArticleCard";
import type { Article } from "@/data/articles";

interface ArticlesGridProps {
  articles: Article[];
  title?: string;
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

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        
        {/* Updated Centered Header */}
        {(title || subtitle) && (
          <div className="flex flex-col items-center justify-center text-center mb-16 gap-6">
            {subtitle && (
              <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-kaisei font-bold leading-tight  max-w-4xl">
                {title}
              </h2>
            )}
          </div>
        )}

        {isLoading ? (
          <div className="text-muted-foreground py-12 text-center">
            Loading latest articles...
          </div>
        ) : animated ? (
          <StaggerGrid className={`grid ${gridCols} gap-8 md:gap-10`}>
            {cards}
          </StaggerGrid>
        ) : (
          <div className={`grid ${gridCols} gap-8 md:gap-10`}>{cards}</div>
        )}
      </div>
    </section>
  );
}