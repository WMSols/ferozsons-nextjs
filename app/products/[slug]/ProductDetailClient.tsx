"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getStrapiImageUrl, getStrapiMediaUrl } from "@/lib/strapi";
import { strapiBlocksToHtml } from "@/lib/strapi-blocks";
import type { StrapiProductDetail } from "@/types/strapi";
import ProductBreadcrumbs from "../components/ProductBreadcrumbs";
import ProductImage from "../components/ProductImage";
import ProductInfo from "../components/ProductInfo";
import ProductActions from "../components/ProductActions";
import VolumeSelector from "../components/VolumeSelector";
import ProductDescription from "../components/ProductDescription";

export default function ProductDetailClient({
  product,
}: {
  product: StrapiProductDetail;
}) {
  const [selectedSize, setSelectedSize] = useState(0);
  const volumeOptions = product.volumeOptions ?? [];
  const selectedSizeLabel =
    volumeOptions[selectedSize] ?? volumeOptions[0] ?? product.dosage ?? "";

  const imageUrl = getStrapiImageUrl(product.image?.url);
  const categoryName = product.product_category?.name ?? "";
  const descriptionHtml = strapiBlocksToHtml(product.description);
  const faqFileUrl = getStrapiMediaUrl(product.faqFile?.url);
  const instructionsFileUrl = getStrapiMediaUrl(product.instructionsFile?.url);
  const pamphletFileUrl = getStrapiMediaUrl(product.pamphletFile?.url);

  return (
    <>
      <section className="py-8 md:py-12 bg-secondary">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="bg-background rounded-3xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 lg:gap-12 p-6 md:p-8 lg:p-10">
              <ProductImage imageUrl={imageUrl} name={product.name} />
              <div className="flex flex-col gap-4 lg:gap-6">
                <ProductInfo
                  product={product}
                  selectedSizeLabel={selectedSizeLabel}
                  categoryName={categoryName}
                />
                <ProductActions
                  faqFileUrl={faqFileUrl}
                  instructionsFileUrl={instructionsFileUrl}
                  pamphletFileUrl={pamphletFileUrl}
                />
              </div>
            </div>
          </div>

          <div className="max-w-6xl mt-12 ">

            <VolumeSelector
              options={volumeOptions}
              selectedIndex={selectedSize}
              onSelect={setSelectedSize}
            />
            <ProductDescription
              descriptionHtml={descriptionHtml}
              keyFeatures={product.keyFeatures}
            />
             <p className="text-sm text-muted-foreground my-4">
              Dosage: {product.dosage ?? ""}
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Concentration: {product.concentration ?? ""}

            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Formulation: {product.formulation ?? ""}
            </p>
          </div>

          <div className="mt-12">
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/products">
                <ArrowLeft className="mr-2 h-4 w-4" /> Return To Product List
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
