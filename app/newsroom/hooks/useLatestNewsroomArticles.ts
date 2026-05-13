"use client";

import { useMemo } from "react";
import { useNewsrooms } from "./useNewsrooms";
import type { StrapiNewsroom } from "@/types/strapi";
import type { Article } from "@/data/articles";

const DEFAULT_LIMIT = 3;
const EXCERPT_MAX_LENGTH = 160;

function stripHtml(content: string): string {
  return content
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function toExcerpt(content: string): string {
  const text = stripHtml(content);

  if (text.length <= EXCERPT_MAX_LENGTH) {
    return text;
  }

  return `${text.slice(0, EXCERPT_MAX_LENGTH).trimEnd()}...`;
}

function toArticle(item: StrapiNewsroom): Article {
  return {
    id: item.documentId || String(item.id),
    title: item.title,
    excerpt: item.content,
    date: item.date || item.publishedAt || item.createdAt,
    category: "News",
    type: "news",
    image: item.featured_image?.url,
  };
}

export function useLatestNewsroomArticles(limit: number = DEFAULT_LIMIT) {
  const { items, isLoading, isError } = useNewsrooms();

  const latestArticles = useMemo(() => {
    return [...items]
      .sort(
        (a, b) =>
          new Date(b.date || b.createdAt || b.publishedAt).getTime() -
          new Date(a.date || a.createdAt || a.publishedAt).getTime(),
      )
      .slice(0, limit)
      .map(toArticle);
  }, [items, limit]);

  return {
    latestArticles,
    isLoading,
    isError,
  };
}
