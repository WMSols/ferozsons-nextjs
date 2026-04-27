import { ShoppingCart } from "lucide-react";
import type { StrapiProductDetail } from "@/types/strapi";

interface ProductInfoProps {
  product: StrapiProductDetail;
  selectedSizeLabel: string;
  categoryName: string;
}

export default function ProductInfo({
  product,
  selectedSizeLabel,
  categoryName,
}: ProductInfoProps) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-md">
      <h2 className="font-sans text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">
        {product.name}
        {selectedSizeLabel && ` - ${selectedSizeLabel}`}
      </h2>
      {categoryName && (
        <p className="font-sans text-sm text-gray-500 uppercase mb-1 md:mb-2">
          {categoryName}
        </p>
      )}
      <p className="font-sans text-sm text-foreground mb-6 md:mb-8">
        {product.dosage ?? product.concentration ?? product.formulation ?? ""}
      </p>
      {product?.availableOnline === true &&
        typeof product?.dvagoUrl === "string" &&
        product.dvagoUrl.trim() !== "" && (
          <a
            href={product.dvagoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full rounded-full py-3 bg-[#3b6a9e] hover:bg-[#345d8a] text-white font-medium transition-colors"
          >
            <ShoppingCart className="h-4 w-4" /> Order Online
          </a>
        )}
    </div>
  );
}
