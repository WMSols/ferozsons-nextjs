
import { cache } from "react";
import { notFound } from "next/navigation";
import { getProductBySlugUrl, strapiFetch } from "@/lib/strapi";
import type { StrapiProductDetail } from "@/types/strapi";
import ProductDetailClient from "./ProductDetailClient";

const fetchProductBySlug = cache(
  async (slug: string): Promise<StrapiProductDetail | null> => {
    const url = getProductBySlugUrl(slug);
    const res = await strapiFetch(url);
    const json = (await res.json()) as { data?: StrapiProductDetail[] };
    return json.data?.[0] ?? null;
  }
);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await fetchProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.name,
    description:
      product.keyFeatures ??
      product.formulation ??
      product.concentration ??
      undefined,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await fetchProductBySlug(slug);
  if (!product) {
    notFound();
  }
  return <ProductDetailClient product={product} />;
}
