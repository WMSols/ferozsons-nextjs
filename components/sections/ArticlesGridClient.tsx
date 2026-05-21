"use client";

import ArticlesGrid from "@/components/sections/ArticlesGrid";
import { useLatestNewsroomArticles } from "@/app/newsroom/hooks/useLatestNewsroomArticles";

export default function ArticlesGridClient() {
  const { latestArticles, isLoading } = useLatestNewsroomArticles();

  return (
    <>
    <ArticlesGrid
      articles={latestArticles}
      title="Latest Articles"
      viewAllLink="/newsroom"
      viewAllText="View All"
      isLoading={isLoading}
    />
    </>
  );
}