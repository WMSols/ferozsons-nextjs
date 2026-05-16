import { useState, useCallback, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import type { ProductsFilterMode } from "@/lib/strapi";

export function useProductFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const categoryFromUrl =
    searchParams.get("category") ?? "";

  const searchFromUrl =
    searchParams.get("search") ?? "";

  const [search, setSearch] =
    useState(searchFromUrl);

  const [page, setPage] = useState(1);

  const [filterMode, setFilterMode] =
    useState<ProductsFilterMode>(
      categoryFromUrl ? "category" : "az",
    );

  const [selectedCategory, setSelectedCategory] =
    useState(categoryFromUrl);

  useEffect(() => {
    if (categoryFromUrl) {
      setFilterMode("category");
      setSelectedCategory(categoryFromUrl);
      setPage(1);
    }
  }, [categoryFromUrl]);

  useEffect(() => {
    if (searchFromUrl) {
      setSearch(searchFromUrl);
    }
  }, [searchFromUrl]);
  useEffect(() => {
  const params = new URLSearchParams(
    searchParams.toString(),
  );

  if (search.trim()) {
    params.set("search", search);
  } else {
    params.delete("search");
  }

  router.replace(
    `/products?${params.toString()}`,
    {
      scroll: false,
    },
  );
}, [search]);

  // RESET PAGE WHEN SEARCH CHANGES
  useEffect(() => {
    setPage(1);
  }, [search]);

  const resetPage = useCallback(
    () => setPage(1),
    [],
  );

  const clearUrlCategory = useCallback(() => {
    if (searchParams.get("category")) {
      const params = new URLSearchParams(
        searchParams.toString(),
      );

      params.delete("category");

      router.replace(
        `/products?${params.toString()}`,
        {
          scroll: false,
        },
      );
    }
  }, [searchParams, router]);

  const setPrescribed = useCallback(() => {
    setFilterMode("prescribed");
    setSelectedCategory("");
    resetPage();
    clearUrlCategory();
  }, [resetPage, clearUrlCategory]);

  const setCategoryMode = useCallback(() => {
    setFilterMode("category");
    resetPage();
  }, [resetPage]);

  const setAzMode = useCallback(() => {
    setFilterMode("az");
    setSelectedCategory("");
    resetPage();
    clearUrlCategory();
  }, [resetPage, clearUrlCategory]);

  const toggleCategory = useCallback(
    (slug: string) => {
      setSelectedCategory((prev) =>
        prev === slug ? "" : slug,
      );

      resetPage();

      const params = new URLSearchParams(
        searchParams.toString(),
      );

      if (slug) {
        params.set("category", slug);
      } else {
        params.delete("category");
      }

      router.replace(
        `/products?${params.toString()}`,
        {
          scroll: false,
        },
      );
    },
    [resetPage, router, searchParams],
  );

  return {
    search,
    setSearch,

    page,
    setPage,

    effectiveCategory: selectedCategory,
    effectiveFilterMode: filterMode,

    setPrescribed,
    setCategoryMode,
    setAzMode,
    toggleCategory,
  };
}