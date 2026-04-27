import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { getStrapiImageUrl } from "@/lib/strapi";
import type { Article } from "@/data/articles";

interface ArticleCardProps {
  article: Article;
  linkHref?: string;
  showDate?: boolean;
}

export default function ArticleCard({
  article,
  linkHref = "/newsroom",
  showDate = false,
}: ArticleCardProps) {
  const imageUrl = getStrapiImageUrl(article.image);

  return (
    <Card className="flex h-full flex-col overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-48 shrink-0 overflow-hidden bg-muted">
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
          <div className="h-full w-full bg-muted" />
        )}
      </div>
      <CardContent className="flex flex-1 flex-col pt-6">
        <div className="flex items-center gap-3 mb-2">
          <p className="text-xs font-semibold text-primary uppercase tracking-wider">
            {article.category}
          </p>
          {showDate && (
            <span className="text-xs text-muted-foreground">
              {new Date(article.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          )}
        </div>
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{article.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {article.excerpt}
        </p>
        <Link
          href={linkHref}
          className="mt-auto inline-flex items-center text-sm text-primary font-medium pt-4 hover:underline"
        >
          Read More <ArrowRight className="ml-1 h-3 w-3" />
        </Link>
      </CardContent>
    </Card>
  );
}
