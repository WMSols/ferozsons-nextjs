import { TherapeuticArea } from "@/types/strapi";

export function sortTherapeuticAreas(therapeuticAreas:TherapeuticArea []): TherapeuticArea[] {
  return [...therapeuticAreas].sort((a, b) => {
    // 1. Primary Sort: Lowest sortNumber appears first
    if ((a.sortNumber !== b.sortNumber) && (a.sortNumber != undefined && b.sortNumber !== undefined)) {
      return a.sortNumber - b.sortNumber;
    }

    // 2. Secondary Sort (Tie-breaker): If sortNumbers are equal, sort alphabetically by name
    return a.name.localeCompare(b.name);
  });
}