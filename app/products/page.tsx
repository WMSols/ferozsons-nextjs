import { Suspense } from "react";
import ProductListClient from "./ProductListClient";

export const metadata = {
  title: "Our Products",
  description: "Explore our comprehensive range of pharmaceutical products.",
};

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="container py-12 text-center text-muted-foreground">Loading products...</div>}>
      <ProductListClient />
    </Suspense>
  );
}
