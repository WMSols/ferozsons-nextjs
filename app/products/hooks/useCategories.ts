import { useQuery } from "@tanstack/react-query";
import { getCategoriesUrl, strapiFetch } from "@/lib/strapi";
import type { StrapiCategoriesResponse } from "@/types/strapi";

export function useCategories() {
  const categoriesQuery = useQuery({
    queryKey: ["product-categories"],
    queryFn: async (): Promise<StrapiCategoriesResponse> => {
      const res = await strapiFetch(getCategoriesUrl());
      return res.json();
    },
  });

  return {
    categories: categoriesQuery.data?.data ?? [],
    isLoading: categoriesQuery.isLoading,
  };
}
