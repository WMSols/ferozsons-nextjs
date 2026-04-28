"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonMotion } from "@/components/animations/ButtonMotion";
import { StaggerGrid } from "@/components/animations/StaggerGrid";
import ArticleCard from "@/components/shared/ArticleCard";
import type { Article } from "@/data/articles";

interface ArticlesGridProps {
  articles: Article[];
  title?: string;
  viewAllLink?: string;
  viewAllText?: string;
  columns?: 2 | 3;
  showDate?: boolean;
  animated?: boolean;
}

export default function ArticlesGrid({
  articles,
  title,
  viewAllLink,
  viewAllText = "View All",
  columns = 3,
  showDate = false,
  animated = true,
}: ArticlesGridProps) {
  const gridCols =
    columns === 2
      ? "grid-cols-1 md:grid-cols-2"
      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  const cards = articles.map((article) => (
    <ArticleCard
      key={article.id}
      article={article}
      showDate={showDate}
      linkHref={viewAllLink ?? "/newsroom"}
    />
  ));

  return (
    <section className="bg-secondary py-20">
      <div className="container">
        {(title || viewAllLink) && (
          <div className="flex items-center justify-between mb-10">
            {title && (
              <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
            )}
            {viewAllLink && (
              <ButtonMotion>
                <Button variant="outline" asChild className="rounded-full">
                  <Link href={viewAllLink}>
                    {viewAllText} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </ButtonMotion>
            )}
          </div>
        )}
        {animated ? (
          <StaggerGrid className={`grid ${gridCols} gap-8`}>
            {cards}
          </StaggerGrid>
        ) : (
          <div className={`grid ${gridCols} gap-8`}>{cards}</div>
        )}
      </div>
    </section>
  );
}
