"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getStrapiImageUrl } from "@/lib/strapi";
import { useNewsrooms } from "./hooks/useNewsrooms";

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
      { rootMargin: "200px 0px" }
    );

    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [hasNextPage, fetchNextPage]);

  return (
    <div className="pt-10">
      <PageHero
        title="Newsroom"
        subtitle="Stay updated with the latest news and developments from Ferozsons Laboratories."
      />

      <section className="py-12">
        <div className="container">
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((article) => {
                  const imageUrl = getStrapiImageUrl(article.featured_image?.url);

                  return (
                    <Card
                      key={article.documentId ?? article.id}
                      className="hover:shadow-md transition-shadow overflow-hidden"
                    >
                      <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                        {imageUrl ? (
                          <Image
                            src={imageUrl}
                            alt={article.title}
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            unoptimized
                          />
                        ) : (
                          <span className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-primary/20 bg-secondary">
                            {article.title.charAt(0)}
                          </span>
                        )}
                      </div>
                      <CardContent className="pt-4">
                        <h3 className="font-bold text-lg">{article.title}</h3>
                        <Link href={`/newsroom/${article.slug}`}>
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-4 rounded-full w-full"
                          >
                            Read Article
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
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
    </div>
  );
}
