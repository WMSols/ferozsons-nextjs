import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { StrapiProductCategory } from "@/types/strapi";

interface CategoryPillsProps {
  categories: StrapiProductCategory[];
  selectedCategory: string;
  onSelect: (slug: string) => void;
  isLoading: boolean;
}

export default function CategoryPills({
  categories,
  selectedCategory,
  onSelect,
  isLoading,
}: CategoryPillsProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 mb-8">
      {isLoading ? (
        <span className="text-sm text-muted-foreground">
          Loading categories…
        </span>
      ) : (
        <>
          {categories.map((cat) => (
            <Button
              key={cat.documentId ?? cat.id}
              variant={selectedCategory === cat.slug || selectedCategory === cat.name.toLowerCase()  ? "default" : "outline"}
              size="sm"
              className="rounded-full text-xs capitalize"
              onClick={() => onSelect(cat.slug)}
            >
              {cat.name}
            </Button>
          ))}
          <Link
            href="/products/weight-management"
            className="inline-flex h-9 px-3 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(90deg,rgba(59,115,172,0.8)_38.94%,rgba(181,44,149,0.8)_100%)] text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Weight Management
          </Link>
        </>
      )}
    </div>
  );
}
