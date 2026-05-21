import { useQuery } from "@tanstack/react-query";
import { strapiFetch, STRAPI_BASE_URL } from "@/lib/strapi";
import type { TherapeuticArea } from "@/types/strapi";

export function useTherapeuticAreas() {
  const therapeuticAreasQuery = useQuery({
    queryKey: ["therapeutic-areas"],
    queryFn: async (): Promise<TherapeuticArea[]> => {
      const res = await strapiFetch(
        `${STRAPI_BASE_URL}/api/pharmaceutical-areas?populate=*`,
      );
      const json = await res.json();
      return Array.isArray(json?.data) ? json.data : [];
    },
  });

  return {
    therapeuticAreas: therapeuticAreasQuery.data ?? [],
    isLoading: therapeuticAreasQuery.isLoading,
    isError: therapeuticAreasQuery.isError,
    error: therapeuticAreasQuery.error,
  };
}
