import { BoardDirector } from "@/types/strapi";


export function sortBoardOfDirectors(directors: BoardDirector[]): BoardDirector[] {
  return [...directors].sort((a, b) => {
    // 1. Primary Sort: Lowest sortNumber appears first
    if (a.sortNumber !== b.sortNumber) {
      return a.sortNumber - b.sortNumber;
    }

    // 2. Secondary Sort (Tie-breaker): If sortNumbers are equal, sort alphabetically by name
    return a.name.localeCompare(b.name);
  });
}