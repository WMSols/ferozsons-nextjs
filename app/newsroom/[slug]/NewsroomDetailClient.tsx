"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getStrapiImageUrl } from "@/lib/strapi";
import type { StrapiNewsroom } from "@/types/strapi";
// 1. Import the BlocksRenderer
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function NewsroomDetailClient({
  article,
}: {
  article: StrapiNewsroom;
}) {
  const imageUrl = getStrapiImageUrl(article.featured_image?.url);

  return (
    <section className="py-8 md:py-12 bg-secondary">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="bg-background rounded-3xl overflow-hidden shadow-sm">
          {imageUrl && (
            <div className="relative w-full h-64 md:h-80 lg:h-96">
              <Image
                src={imageUrl}
                alt={article.title}
                fill
                className="object-cover object-center"
                sizes="100vw"
                unoptimized
              />
            </div>
          )}

          <div className="p-6 md:p-8 lg:p-10">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              {article.title}
            </h1>

            {/* 2. Open the prose div and put the renderer INSIDE it */}
            <div className="mt-6 prose prose-slate max-w-none">
              <BlocksRenderer
                content={article.content}
                // Optional: You can override specific elements.
                // Here we intercept links to use Next.js <Link> for internal routing if desired.
                blocks={{
                  link: ({ children, url }) => {
                    const isExternal = url.startsWith("http");
                    if (isExternal) {
                      return (
                        <a className="text-blue-600" href={url} target="_blank" rel="noopener noreferrer">
                          {children}
                        </a>
                      );
                    }
                    return <Link href={url}>{children}</Link>;
                  },
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/newsroom">
              <ArrowLeft className="mr-2 h-4 w-4" /> Return To Newsroom
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}