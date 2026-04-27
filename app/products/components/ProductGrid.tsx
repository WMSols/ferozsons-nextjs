import ProductCard from "./ProductCard";
import type { StrapiProduct } from "@/types/strapi";

interface ProductGridProps {
  products: StrapiProduct[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.documentId ?? product.id}
            product={product}
          />
        ))}
      </div>
      {products.length === 0 && (
        <p className="text-center text-muted-foreground py-12">
          No products found matching your criteria.
        </p>
      )}
    </>
  );
}
