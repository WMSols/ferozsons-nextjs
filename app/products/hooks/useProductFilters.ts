import { useState, useCallback, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import type { ProductsFilterMode } from "@/lib/strapi";
import type { StrapiProduct } from "@/types/strapi";

export function useProductFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryFromUrl = searchParams.get("category") ?? "";

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [filterMode, setFilterMode] = useState<ProductsFilterMode>(
    categoryFromUrl ? "category" : "prescribed",
  );
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl);
  useEffect(() => {
    if (categoryFromUrl) {
      setFilterMode("category");
      setSelectedCategory(categoryFromUrl);
      setPage(1);
    }
  }, [categoryFromUrl]);

  const resetPage = useCallback(() => setPage(1), []);

  const clearUrlCategory = useCallback(() => {
    if (searchParams.get("category")) {
      router.replace("/products", { scroll: false });
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
    clearUrlCategory();
  }, [resetPage, clearUrlCategory]);

  const setAzMode = useCallback(() => {
    setFilterMode("az");
    setSelectedCategory("");
    resetPage();
    clearUrlCategory();
  }, [resetPage, clearUrlCategory]);

  const toggleCategory = useCallback(
    (slug: string) => {
      setSelectedCategory((prev) => (prev === slug ? "" : slug));
      resetPage();
      clearUrlCategory();
    },
    [resetPage, clearUrlCategory],
  );

  const filteredBySearch = useCallback(
    (products: StrapiProduct[]) => {
      if (!search.trim()) return products;
      const q = search.toLowerCase();
      return products.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          (p.product_category?.name ?? "").toLowerCase().includes(q),
      );
    },
    [search],
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
    filteredBySearch,
  };
}
