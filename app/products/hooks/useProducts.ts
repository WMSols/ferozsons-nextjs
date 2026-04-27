import { useQuery } from "@tanstack/react-query";
import {
  buildProductsUrl,
  strapiFetch,
  type ProductsFilterMode,
} from "@/lib/strapi";
import type { StrapiProductsResponse } from "@/types/strapi";

export function useProducts(
  category: string,
  filterMode: ProductsFilterMode,
  page: number,
) {
  const productsQuery = useQuery({
    queryKey: ["products", category, filterMode, page],
    queryFn: async (): Promise<StrapiProductsResponse> => {
      const url = buildProductsUrl({
        page,
        pageSize: 25,
        filterMode,
        selectedCategory: category,
      });
      const res = await strapiFetch(url);
      return res.json();
    },
  });

  const products = productsQuery.data?.data ?? [];
  const pagination = productsQuery.data?.meta?.pagination;
  const pageCount = Math.max(0, pagination?.pageCount ?? 0);
  const currentPage = pagination?.page ?? 1;
  const total = pagination?.total ?? 0;

  return {
    products,
    pagination,
    pageCount,
    currentPage,
    total,
    isLoading: productsQuery.isLoading,
    isError: productsQuery.isError,
  };
}
