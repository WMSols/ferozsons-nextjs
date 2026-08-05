import Link from "next/link";
import Image from "next/image";
import { getStrapiImageUrl } from "@/lib/strapi";
import type { Article } from "@/data/articles";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

interface ArticleCardProps {
  article: Article;
  linkHref?: string;
}

export default function ArticleCard({
  article,
  linkHref = "/newsroom",
}: ArticleCardProps) {
  const imageUrl = getStrapiImageUrl(article.image);

  return (
    <div className="flex flex-col h-full group cursor-pointer">
      {/* Image Container - Deeply rounded corners without outer card borders */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] rounded-[32px] overflow-hidden mb-6 bg-muted">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="h-full w-full bg-muted" />
        )}
      </div>
      
      {/* Content */}
      <div className="flex flex-col flex-1">
        <h3 className="font-medium text-xl lg:text-2xl mb-4 line-clamp-2 text-foreground">
          {article.title}
        </h3>
        
        {/* Adjusted prose for tighter margins and text wrapping */}
        <div className="mb-6 prose prose-sm prose-slate max-w-none line-clamp-2 text-muted-foreground/80">
          <BlocksRenderer
            content={article.excerpt}
            blocks={{
              link: ({ children, url }) => {
                const isExternal = url.startsWith("http");
                if (isExternal) {
                  return (
                    <a className="text-[#3B73AC]" href={url} target="_blank" rel="noopener noreferrer">
                      {children}
                    </a>
                  );
                }
                return <Link href={url}>{children}</Link>;
              },
            }}
          />
        </div>
        
        {/* Simple text link as per the Figma design */}
        <Link
          href={linkHref}
          className="mt-auto  text-sm font-semibold text-[#3B73AC] hover:text-[#294e74] underline underline-offset-4 transition-colors"
        >
          Read full article
        </Link>
      </div>
    </div>
  );
}