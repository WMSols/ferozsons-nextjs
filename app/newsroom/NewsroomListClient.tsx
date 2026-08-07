"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import { getStrapiImageUrl } from "@/lib/strapi";
import { useNewsrooms } from "./hooks/useNewsrooms";

// Helper to safely extract the first paragraph from Strapi Rich Text blocks
const getExcerpt = (content: any): string => {
  if (!Array.isArray(content)) return "Read more about this update by clicking the full article link.";
  
  const paragraph = content.find(
    (block: any) => block.type === "paragraph" && Array.isArray(block.children)
  );
  
  if (paragraph) {
    const text = paragraph.children.map((child: any) => child.text || "").join("");
    if (text.trim()) return text;
  }
  
  return "Read more about this update by clicking the full article link.";
};

export default function NewsroomListClient() {
  const {
    items,
    isLoading,
    isError,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useNewsrooms();
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sentinelRef.current || !hasNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          void fetchNextPage();
        }
      },
      { rootMargin: "200px 0px" },
    );

    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [hasNextPage, fetchNextPage]);

  return (
    <>
      <PageHero
        title="Newsroom"
        backgroundImage="/images/newsroom/Hero.webp"
        subtitle="Explore our latest news, press releases, and company stories."
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* Section Heading & Subheading */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-4">
              What's New at Ferozsons?
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl font-light max-w-2xl mx-auto">
              Stay updated with the latest news and developments from Ferozsons Laboratories Limited
            </p>
          </div>

          {isError && (
            <p className="text-center text-destructive py-8">
              Failed to load news articles. Please try again.
            </p>
          )}

          {!isError && isLoading && (
            <p className="text-center text-muted-foreground py-8">
              Loading news articles...
            </p>
          )}

          {!isError && !isLoading && items.length === 0 && (
            <p className="text-center text-muted-foreground py-12">
              No news articles found.
            </p>
          )}

          {!isError && !isLoading && items.length > 0 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
                {items.map((article) => {
                  const imageUrl = getStrapiImageUrl(
                    article.featured_image?.url,
                  );
                  // Extract the text from the Strapi content blocks
                  const excerpt = getExcerpt(article.content);

                  return (
                    <div
                      key={article.documentId ?? article.id}
                      className="group flex flex-col h-full"
                    >
                      {/* Image Container */}
                      <Link href={`/newsroom/${article.slug}`} className="block relative w-full aspect-[4/3] mb-6 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-muted">
                        {imageUrl ? (
                          <Image
                            src={imageUrl}
                            alt={article.title}
                            fill
                            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            unoptimized
                          />
                        ) : (
                          <span className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-primary/20 bg-secondary">
                            {article.title.charAt(0)}
                          </span>
                        )}
                      </Link>

                      {/* Content Area */}
                      <div className="flex flex-col flex-1 px-2">
                        <Link href={`/newsroom/${article.slug}`} className="hover:text-primary transition-colors">
                          <h3 className="font-medium text-xl md:text-2xl text-foreground leading-snug mb-3">
                            {article.title}
                          </h3>
                        </Link>
                        
                        {/* Excerpt / Description extracted from rich text */}
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-6">
                          {excerpt}
                        </p>
                        
                        {/* Footer (Link & Date) */}
                        <div className="flex items-center justify-between mt-auto pt-2">
                          <Link 
                            href={`/newsroom/${article.slug}`}
                            className="text-[#3B73AC] text-sm font-medium underline underline-offset-4 hover:text-[#294e74] transition-colors"
                          >
                            Read full article
                          </Link>
                          <span className="text-xs md:text-sm text-muted-foreground/70">
                            {new Date(article.date || article.createdAt).toLocaleDateString(
                              "en-GB",
                              {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                              },
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div ref={sentinelRef} className="h-12" />

              {isFetchingNextPage && (
                <p className="text-center text-muted-foreground py-4">
                  Loading more news...
                </p>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}