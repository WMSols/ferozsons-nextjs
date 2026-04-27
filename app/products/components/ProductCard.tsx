import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getStrapiImageUrl } from "@/lib/strapi";
import type { StrapiProduct } from "@/types/strapi";

interface ProductCardProps {
  product: StrapiProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const imageUrl = getStrapiImageUrl(product.image?.url);
  const categoryName = product.product_category?.name ?? "";

  return (
    <Card className="hover:shadow-md transition-shadow overflow-hidden">
      <div className="relative w-full h-48 sm:h-56 overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={product.name}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            unoptimized
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-primary/20 bg-secondary">
            {product.name.charAt(0)}
          </span>
        )}
      </div>
      <CardContent className="pt-4">
        {categoryName && (
          <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
            {categoryName}
          </p>
        )}
        <h3 className="font-bold text-lg">{product.name}</h3>
        <p className="text-sm text-muted-foreground">
          {product.dosage ?? product.concentration ?? product.formulation ?? ""}
        </p>
        <Link href={`/products/${product.slug}`}>
          <Button
            variant="outline"
            size="sm"
            className="mt-4 rounded-full w-full"
          >
            View Details
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
