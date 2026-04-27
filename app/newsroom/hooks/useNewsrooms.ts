"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { buildNewsroomsUrl, strapiFetch } from "@/lib/strapi";
import type { StrapiNewsroomsResponse } from "@/types/strapi";

const PAGE_SIZE = 25;

export function useNewsrooms() {
  const newsroomsQuery = useInfiniteQuery({
    queryKey: ["newsrooms"],
    initialPageParam: 1,
    queryFn: async ({ pageParam }): Promise<StrapiNewsroomsResponse> => {
      const url = buildNewsroomsUrl({ page: pageParam, pageSize: PAGE_SIZE });
      const res = await strapiFetch(url);
      return res.json();
    },
    getNextPageParam: (lastPage) => {
      const pagination = lastPage.meta?.pagination;
      if (!pagination) return undefined;
      return pagination.page < pagination.pageCount
        ? pagination.page + 1
        : undefined;
    },
  });

  const pages = newsroomsQuery.data?.pages ?? [];
  const items = pages.flatMap((page) => page.data ?? []);
  const pagination = pages[pages.length - 1]?.meta?.pagination;

  return {
    items,
    pagination,
    isLoading: newsroomsQuery.isLoading,
    isError: newsroomsQuery.isError,
    hasNextPage: newsroomsQuery.hasNextPage,
    isFetchingNextPage: newsroomsQuery.isFetchingNextPage,
    fetchNextPage: newsroomsQuery.fetchNextPage,
  };
}
