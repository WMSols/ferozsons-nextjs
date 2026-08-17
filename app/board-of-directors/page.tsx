// app/board-of-directors/page.tsx
import { getBoardOfDirectors } from "@/lib/strapi";
import { sortBoardOfDirectors } from "./_lib/getSortedDirectors"; 
import BoardMemberCards from "./components/BoardMemberCards";
import { boardMembers } from "@/data/partnerships";
import PageHero from "@/components/layout/PageHero";

export default async function BoardOfDirectorsPage() {
  // 1. Fetch the raw data (Server-side)
  const { data: rawDirectors } = await getBoardOfDirectors();

  // 2. Sort the data (Server-side)
  const sortedDirectors = rawDirectors.length > 0 ?  sortBoardOfDirectors(rawDirectors) : boardMembers ;

  // 3. Pass the clean, sorted data to the Client Component
  return (
    <>
    <PageHero
    title="Board of Directors"
    backgroundImage="/images/BoD-Hero.webp"
    subtitle=""/>
      <BoardMemberCards members={sortedDirectors} />
      </>
  );
}