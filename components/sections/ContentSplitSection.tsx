import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ContentSplitItem {
  title?: string;
  description: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
  ctaVariant?: "filled" | "outline";
}

interface ContentSplitSectionProps {
  items: ContentSplitItem[];
  className?: string;
}

export default function ContentSplitSection({
  items,
  className,
}: ContentSplitSectionProps) {
  return (
    <section className={cn("bg-black text-white py-20", className)}>
      <div className="max-w-6xl mx-auto px-4 space-y-16 md:space-y-24">
        {items.map((item, i) => (
          <div
            key={i}
            className={cn(
              "flex flex-col items-center gap-8 md:gap-12",
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
            )}
          >
            <div className="flex-1">
              {item.title && (
                <h2 className="font-kaisei text-2xl md:text-3xl font-bold mb-4">
                  {item.title}
                </h2>
              )}
              <p className="font-kaisei text-white/90 text-sm leading-relaxed mb-6">
                {item.description}
              </p>
              {item.ctaText && item.ctaLink && (
                <Link
                  href={item.ctaLink}
                  className={cn(
                    "inline-block rounded-full font-kaisei px-6 py-2 font-medium transition-colors",
                    item.ctaVariant === "outline"
                      ? "border border-blue-500 text-blue-500 hover:bg-blue-500/10"
                      : "bg-blue-600 text-white hover:bg-blue-700",
                  )}
                >
                  {item.ctaText}
                </Link>
              )}
            </div>
            <div className="flex-1 w-full relative aspect-video max-w-md rounded-xl overflow-hidden bg-gray-800">
              <Image
                src={item.image}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
