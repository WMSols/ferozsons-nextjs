"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import {
  mainNavItems,
  PRODUCTS_DROPDOWN_PLACEHOLDER_LABEL,
  secondaryNavItems,
} from "@/data/navigation";
import { getCategoriesUrl, strapiFetch } from "@/lib/strapi";
import { cn } from "@/lib/utils";
import type { StrapiCategoriesResponse } from "@/types/strapi";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activePrimaryDropdown, setActivePrimaryDropdown] = useState<
    string | null
  >(null);
  const [activeNestedDropdown, setActiveNestedDropdown] = useState<
    string | null
  >(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [mobileNestedDropdown, setMobileNestedDropdown] = useState<
    string | null
  >(null);
  const pathname = usePathname();

  const categoriesQuery = useQuery({
    queryKey: ["product-categories"],
    queryFn: async (): Promise<StrapiCategoriesResponse> => {
      const res = await strapiFetch(getCategoriesUrl());
      return res.json();
    },
  });

  const productCategories = categoriesQuery.data?.data ?? [];

  const navItems = mainNavItems.map((item) => {
    if (item.label !== "Products" || !item.children?.length) return item;

    const hasPlaceholder = item.children.some(
      (c) => c.label === PRODUCTS_DROPDOWN_PLACEHOLDER_LABEL,
    );
    if (!hasPlaceholder) return item;

    const dynamicChildren = productCategories.map((cat) => ({
      label: cat.name,
      href: `/products?category=${encodeURIComponent(cat.slug)}`,
    }));

    const nextChildren = item.children.map((child) => {
      if (child.label !== PRODUCTS_DROPDOWN_PLACEHOLDER_LABEL) return child;
      return {
        label: "Medicine Categories",
        href: "/products",
        children: dynamicChildren,
      };
    });

    return { ...item, children: nextChildren };
  });

  return (
    <header className="sticky top-0 z-50  px-4 pt-4 ixl:px-6 ixl:pt-6">
      {/* Desktop */}
      <div className="hidden ixl:block rounded-[20px] bg-[#FFFFFF] shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
        <div className="flex items-center justify-between gap-8 px-8 py-4">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/Ferozsons-Logo-1000x250px3.png"
              alt="Ferozsons Laboratories Limited"
              width={200}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </Link>

          <nav className="flex items-center gap-6 flex-1 justify-start pl-8">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() =>
                  item.children && setActivePrimaryDropdown(item.label)
                }
                onMouseLeave={() => {
                  setActivePrimaryDropdown(null);
                  setActiveNestedDropdown(null);
                }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 text-base font-medium text-[#5C85A6] transition-colors hover:opacity-80",
                    pathname === item.href && "opacity-100",
                  )}
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-3 w-3" />}
                </Link>

                {item.children && activePrimaryDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="bg-[#FFFFFF] border border-[#CCCCCC] rounded-lg shadow-lg p-6 min-w-[240px]">
                      <p className="text-xs font-semibold text-[#666666] uppercase tracking-wider mb-3">
                        {item.label}
                      </p>
                      <div className="grid gap-1">
                        {item.children.map((child) => {
                          const nestedKey = `${item.label}.${child.label}`;
                          const hasNestedChildren =
                            Array.isArray(child.children) &&
                            child.children.length > 0;

                          return hasNestedChildren ? (
                            <div
                              key={`${child.label}-${child.href}`}
                              className="relative"
                              onMouseEnter={() =>
                                setActiveNestedDropdown(nestedKey)
                              }
                              onMouseLeave={() => setActiveNestedDropdown(null)}
                            >
                              <button className="flex items-center justify-between w-full px-3 py-2 text-sm text-[#333333] font-medium rounded-md hover:bg-gray-100">
                                {child.label}
                                <ChevronDown className="h-3 w-3 ml-2" />
                              </button>
                              {activeNestedDropdown === nestedKey && (
                                <div className="absolute left-full top-0 pl-2">
                                  <div className="bg-[#FFFFFF] border border-[#CCCCCC] rounded-lg shadow-lg p-4 min-w-[200px]">
                                    {child.children?.map((grandChild) => (
                                      <Link
                                        key={`${grandChild.label}-${grandChild.href}`}
                                        href={grandChild.href}
                                        className="block px-3 py-2 text-sm capitalize text-[#666666] hover:text-black rounded-md transition-colors hover:bg-gray-100"
                                        onClick={() => {
                                          setActivePrimaryDropdown(null);
                                          setActiveNestedDropdown(null);
                                        }}
                                      >
                                       {grandChild.label}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          ) : (
                            <Link
                              key={`${child.label}-${child.href}`}
                              href={child.href}
                              className="block px-3 py-2 text-sm text-[#666666] hover:text-black rounded-md transition-colors hover:bg-gray-100"
                              onClick={() => setActivePrimaryDropdown(null)}
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-4 shrink-0">
            {secondaryNavItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() =>
                  item.children && setActivePrimaryDropdown(item.label)
                }
                onMouseLeave={() => {
                  setActivePrimaryDropdown(null);
                  setActiveNestedDropdown(null);
                }}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-medium text-[#5C85A6] transition-colors hover:opacity-80"
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-3 w-3" />}
                </Link>

                {item.children && activePrimaryDropdown === item.label && (
                  <div className="absolute top-full right-0 pt-2 z-50">
                    <div className="bg-[#FFFFFF] border border-[#CCCCCC] rounded-lg shadow-lg p-6 min-w-60">
                      <p className="text-xs font-semibold text-[#666666] uppercase tracking-wider mb-3">
                        {item.label}
                      </p>
                      <div className="grid gap-1">
                        {item.children.map((child) => {
                          const nestedKey = `${item.label}.${child.label}`;
                          const hasNestedChildren =
                            Array.isArray(child.children) &&
                            child.children.length > 0;

                          return hasNestedChildren ? (
                            <div
                              key={`${child.label}-${child.href}`}
                              className="relative"
                              onMouseEnter={() =>
                                setActiveNestedDropdown(nestedKey)
                              }
                              onMouseLeave={() => setActiveNestedDropdown(null)}
                            >
                              <button className="flex items-center justify-between w-full px-3 py-2 text-sm text-[#333333] font-medium rounded-md hover:bg-gray-100">
                                {child.label}
                                <ChevronDown className="h-3 w-3 ml-2" />
                              </button>
                              {activeNestedDropdown === nestedKey && (
                                <div className="absolute right-full top-0 pr-2">
                                  <div className="bg-[#FFFFFF] border border-[#CCCCCC] rounded-lg shadow-lg p-4 min-w-[200px]">
                                    {child.children?.map((grandChild) => (
                                      <Link
                                        key={`${grandChild.label}-${grandChild.href}`}
                                        href={grandChild.href}
                                        className="block px-3 py-2 text-sm text-[#666666] hover:text-black rounded-md transition-colors hover:bg-gray-100"
                                        onClick={() => {
                                          setActivePrimaryDropdown(null);
                                          setActiveNestedDropdown(null);
                                        }}
                                      >
                                        {grandChild.label}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          ) : (
                            <Link
                              key={`${child.label}-${child.href}`}
                              href={child.href}
                              className="block px-3 py-2 text-sm text-[#666666] hover:text-black rounded-md transition-colors hover:bg-gray-100"
                              onClick={() => setActivePrimaryDropdown(null)}
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <button className="text-[#5C85A6] hover:opacity-80">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex ixl:hidden items-center justify-between rounded-[20px] bg-[#FFFFFF] shadow-[0_2px_12px_rgba(0,0,0,0.08)] px-4 py-3">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/Ferozsons-Logo-1000x250px3.png"
            alt="Ferozsons Laboratories Limited"
            width={160}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>
        <button
          className="p-2 text-[#5C85A6]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <>
          <button
            type="button"
            className="ixl:hidden fixed inset-0 z-40 bg-black/20"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
          <div className="ixl:hidden absolute top-full left-0 right-0 mt-2 z-50 px-4">
            <div className="rounded-[20px] bg-[#FFFFFF] shadow-[0_2px_12px_rgba(0,0,0,0.08)] border border-[#CCCCCC]/30 overflow-hidden">
              <div className="px-4 py-4 space-y-1">
                {navItems.map((item) => (
                  <div key={item.href}>
                    {item.children ? (
                      <>
                        <button
                          className="flex items-center justify-between w-full py-3 text-base font-medium text-[#5C85A6]"
                          onClick={() =>
                            setMobileDropdown(
                              mobileDropdown === item.label ? null : item.label,
                            )
                          }
                        >
                          {item.label}
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform",
                              mobileDropdown === item.label && "rotate-180",
                            )}
                          />
                        </button>
                        {mobileDropdown === item.label && (
                          <div className="pl-4 pb-2 space-y-1">
                            {item.children.map((child) => {
                              const nestedKey = `${item.label}.${child.label}`;
                              const hasNestedChildren =
                                Array.isArray(child.children) &&
                                child.children.length > 0;

                              return hasNestedChildren ? (
                                <div key={`${child.label}-${child.href}`}>
                                  <button
                                    className="flex items-center justify-between w-full py-2 text-sm text-[#5C85A6] hover:opacity-80"
                                    onClick={() =>
                                      setMobileNestedDropdown(
                                        mobileNestedDropdown === nestedKey
                                          ? null
                                          : nestedKey,
                                      )
                                    }
                                  >
                                    {child.label}
                                    <ChevronDown
                                      className={cn(
                                        "h-4 w-4 transition-transform",
                                        mobileNestedDropdown === nestedKey &&
                                          "rotate-180",
                                      )}
                                    />
                                  </button>
                                  {mobileNestedDropdown === nestedKey && (
                                    <div className="pl-4 pb-2 space-y-1">
                                      {child.children?.map((grandChild) => (
                                        <Link
                                          key={`${grandChild.label}-${grandChild.href}`}
                                          href={grandChild.href}
                                          className="block py-2 text-sm text-[#5C85A6] hover:opacity-80"
                                          onClick={() => {
                                            setMobileOpen(false);
                                            setMobileDropdown(null);
                                            setMobileNestedDropdown(null);
                                          }}
                                        >
                                          {grandChild.label}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ) : (
                                <Link
                                  key={`${child.label}-${child.href}`}
                                  href={child.href}
                                  className="block py-2 text-sm text-[#5C85A6] hover:opacity-80"
                                  onClick={() => {
                                    setMobileOpen(false);
                                    setMobileDropdown(null);
                                    setMobileNestedDropdown(null);
                                  }}
                                >
                                  {child.label}
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="block py-3 text-base font-medium text-[#5C85A6] hover:opacity-80"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}

                <div className="border-t border-[#CCCCCC]/50 pt-3 mt-3 space-y-1">
                  {secondaryNavItems.map((item) => (
                    <div key={item.href}>
                      {item.children ? (
                        <>
                          <button
                            className="flex items-center justify-between w-full py-2 text-sm font-medium text-[#5C85A6]"
                            onClick={() =>
                              setMobileDropdown(
                                mobileDropdown === item.label
                                  ? null
                                  : item.label,
                              )
                            }
                          >
                            {item.label}
                            <ChevronDown
                              className={cn(
                                "h-4 w-4 transition-transform",
                                mobileDropdown === item.label && "rotate-180",
                              )}
                            />
                          </button>
                          {mobileDropdown === item.label && (
                            <div className="pl-4 pb-2 space-y-1">
                              {item.children.map((child) => (
                                <Link
                                  key={`${child.label}-${child.href}`}
                                  href={child.href}
                                  className="block py-2 text-sm text-[#5C85A6] hover:opacity-80"
                                  onClick={() => {
                                    setMobileOpen(false);
                                    setMobileDropdown(null);
                                    setMobileNestedDropdown(null);
                                  }}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          className="block py-2 text-sm text-[#5C85A6] hover:opacity-80"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;