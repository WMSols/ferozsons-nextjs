import { BoardDirector } from "@/types/strapi";


export function sortBoardOfDirectors(directors: BoardDirector[]): BoardDirector[] {
  const getRoleRank = (role: string) => {
    const lowerRole = role.toLowerCase();
    if (lowerRole.includes("ceo")) return 1;
    if (lowerRole.includes("chairperson")) return 2;
    return 3; // Rest of the people
  };

  return [...directors].sort((a, b) => getRoleRank(a.role) - getRoleRank(b.role));
}