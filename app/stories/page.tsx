import PageHero from "@/components/layout/PageHero";
import ArticlesGrid from "@/components/sections/ArticlesGrid";
import { articles } from "@/data/articles";

export const metadata = {
  title: "Stories",
  description: "Impact stories from patients, communities, and our team.",
};

export default function StoriesPage() {
  const storyArticles = articles.filter((a) => a.type === "story");

  return (
    <>
      <PageHero
        title="Stories"
        subtitle="Impact stories from patients, communities, and our team."
        breadcrumbs={[{ label: "Stories" }]}
      />
      <ArticlesGrid articles={storyArticles} showDate columns={3} />
    </>
  );
}
