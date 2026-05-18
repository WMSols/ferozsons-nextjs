"use client";

import ArticlesGrid from "@/components/sections/ArticlesGrid";
import { useLatestNewsroomArticles } from "@/app/newsroom/hooks/useLatestNewsroomArticles";

export default function ArticlesGridClient() {
  const { latestArticles, isLoading } = useLatestNewsroomArticles();

  if (isLoading || latestArticles.length === 0) {
    return null;
  }

  return (
    <>
    {isLoading ? (
      <div className="text-muted-foreground">Loading latest articles...</div>
    ):(  
    <ArticlesGrid
      articles={latestArticles}
      title="Latest Articles"
      viewAllLink="/newsroom"
      viewAllText="View All"
    />)}
  
    </>
  );
}