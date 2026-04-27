"use client";

import PageHero from "@/components/layout/PageHero";
import { useProducts } from "./hooks/useProducts";
import { useCategories } from "./hooks/useCategories";
import { useProductFilters } from "./hooks/useProductFilters";
import ProductSearch from "./components/ProductSearch";
import ProductFilterTabs from "./components/ProductFilterTabs";
import CategoryPills from "./components/CategoryPills";
import ProductGrid from "./components/ProductGrid";
import ProductsSkeleton from "./components/ProductsSkeleton";
import ProductPagination from "./components/ProductPagination";

export default function ProductListClient() {
  const filters = useProductFilters();
  const { categories, isLoading: isCategoriesLoading } = useCategories();
  const {
    products,
    pageCount,
    currentPage,
    total,
    isLoading,
    isError,
  } = useProducts(filters.effectiveCategory, filters.effectiveFilterMode, filters.page);

  const filtered = filters.filteredBySearch(products);

  return (
    <div className="pt-10">
      <PageHero
        title="Our Products"
        subtitle="Explore our comprehensive range of pharmaceutical products."
      />

      <section className="py-12">
        <div className="container">
          <ProductSearch value={filters.search} onChange={filters.setSearch} />

          <ProductFilterTabs
            activeMode={filters.effectiveFilterMode}
            onPrescribed={filters.setPrescribed}
            onCategory={filters.setCategoryMode}
            onAz={filters.setAzMode}
          />

          {filters.effectiveFilterMode === "category" && (
            <CategoryPills
              categories={categories}
              selectedCategory={filters.effectiveCategory}
              onSelect={filters.toggleCategory}
              isLoading={isCategoriesLoading}
            />
          )}

          {isError && (
            <p className="text-center text-destructive py-8">
              Failed to load products. Please try again.
            </p>
          )}

          {!isError && isLoading && <ProductsSkeleton />}

          {!isError && !isLoading && (
            <>
              <ProductGrid products={filtered} />
              <ProductPagination
                currentPage={currentPage}
                pageCount={pageCount}
                total={total}
                onPageChange={filters.setPage}
              />
            </>
          )}
        </div>
      </section>
    </div>
  );
}
