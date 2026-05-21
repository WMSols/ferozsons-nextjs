import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { getStrapiImageUrl } from "@/lib/strapi";
import type { Article } from "@/data/articles";
import { StrapiNewsroom } from "@/types/strapi";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

interface ArticleCardProps {
  article: Article;
  linkHref?: string;
  showDate?: boolean;
}

export default function ArticleCard({
  article,
  linkHref = "/newsroom",
  showDate = true,
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
            
          />
        ) : (
          <div className="h-full w-full bg-muted" />
        )}
      </div>
      <CardContent className="flex flex-1 flex-col pt-6">
        <div className="flex items-center gap-3 justify-between mb-2">
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
           <div className="mt-6 prose prose-slate max-w-none line-clamp-3">
              <BlocksRenderer
                content={article.excerpt}
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
