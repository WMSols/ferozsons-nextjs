"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getStrapiImageUrl } from "@/lib/strapi";
import type { StrapiNewsroom } from "@/types/strapi";

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

            <div
              className="mt-6  prose prose-slate max-w-none"
            />
            {article.content[0]?.children[0]?.text}
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
