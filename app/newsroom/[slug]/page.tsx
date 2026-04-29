
import { cache } from "react";
import { notFound } from "next/navigation";
import { getNewsroomBySlugUrl, strapiFetch } from "@/lib/strapi";
import type { StrapiNewsroom } from "@/types/strapi";
import NewsroomDetailClient from "./NewsroomDetailClient";

const fetchNewsroomBySlug = cache(
  async (slug: string): Promise<StrapiNewsroom | null> => {
    const url = getNewsroomBySlugUrl(slug);
    const res = await strapiFetch(url);
    const json = (await res.json()) as { data?: StrapiNewsroom[] };
    return json.data?.[0] ?? null;
  }
);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await fetchNewsroomBySlug(slug);

  if (!article) return { title: "Article Not Found" };

  return {
    title: article.title,
  };
}

export default async function NewsroomDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await fetchNewsroomBySlug(slug);

  if (!article) {
    notFound();
  }

  return <NewsroomDetailClient article={article} />;
}
