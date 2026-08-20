"use client";

import ArticlesGrid from "@/components/sections/ArticlesGrid";
import { useLatestNewsroomArticles } from "@/app/newsroom/hooks/useLatestNewsroomArticles";

export default function ArticlesGridClient() {
  const { latestArticles, isLoading } = useLatestNewsroomArticles();

  return (
    <>
      <ArticlesGrid
        articles={latestArticles}
        subtitle="Latest Articles"
        title={(<span> Discover the Stories Driving<br className="hidden md:block"/> Better Healthcare.</span>)}
        isLoading={isLoading}
      />
    </>
  );
}