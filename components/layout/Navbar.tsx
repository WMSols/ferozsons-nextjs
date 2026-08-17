"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { Menu, X, Search, ChevronDown, ChevronRight, ChevronLeft, ArrowRight } from "lucide-react";
import { mainNavItems, secondaryNavItems, NavItem } from "@/data/navigation";
import { getCategoriesUrl, strapiFetch } from "@/lib/strapi";
import { cn } from "@/lib/utils";
import type { StrapiCategoriesResponse } from "@/types/strapi";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [activePrimaryDropdown, setActivePrimaryDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [desktopSearchOpen, setDesktopSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const pathname = usePathname();
  const router = useRouter();
  const desktopSearchRef = useRef<HTMLInputElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const closeMenuTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const ignoreHamburgerHoverRef = useRef(false);

  useEffect(() => {
    if (desktopSearchOpen) {
      desktopSearchRef.current?.focus();
    }
  }, [desktopSearchOpen]);

  const clearCloseMenuTimeout = () => {
    if (closeMenuTimeoutRef.current) {
      clearTimeout(closeMenuTimeoutRef.current);
      closeMenuTimeoutRef.current = null;
    }
  };

  const openDesktopMenu = () => {
    if (ignoreHamburgerHoverRef.current) return;
    clearCloseMenuTimeout();
    setDesktopMenuOpen(true);
    setActivePrimaryDropdown((current) => current ?? mainNavItems[0]?.label ?? null);
  };

  const closeDesktopMenu = () => {
    clearCloseMenuTimeout();
    setDesktopMenuOpen(false);
    setActivePrimaryDropdown(null);
  };

  const scheduleCloseDesktopMenu = () => {
    clearCloseMenuTimeout();
    closeMenuTimeoutRef.current = setTimeout(() => {
      closeDesktopMenu();
    }, 160);
  };

  useEffect(() => {
    return () => clearCloseMenuTimeout();
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    setSearchQuery("");
    setDesktopSearchOpen(false);
    setMobileOpen(false);
    setDesktopMenuOpen(false);
  };

  const categoriesQuery = useQuery({
    queryKey: ["product-categories"],
    queryFn: async (): Promise<StrapiCategoriesResponse> => {
      const res = await strapiFetch(getCategoriesUrl());
      return res.json();
    },
  });

  const productCategories = categoriesQuery.data?.data ?? [];

  // Helper to check if an item should trigger a dropdown
  const hasDropdown = (item: NavItem) => {
    return !!(item.children && item.children.length > 0) || item.label === "Products" || !!item.megaImage;
  };

  // Reusable component block for the Mega Menu (Desktop)
  const renderMegaMenu = (item: NavItem) => {
    if (!hasDropdown(item) || activePrimaryDropdown !== item.label) return null;

    // Check if we actually have sub-links to display in the middle column
    const hasSubLinks = item.children && item.children.length > 0;

    return (
      <div className="absolute top-full left-0 right-0 z-50 before:absolute before:inset-x-0 before:-top-8 before:h-8 before:bg-transparent">
        {/* Adjusted padding to hug the ceiling (px-10 pb-10 pt-6) */}
        <div className="bg-[#000000] border-t border-white/20 rounded-b-[25px] shadow-2xl px-10 pb-10 pt-6 origin-top animate-in fade-in slide-in-from-top-3 duration-300 ease-out">
          {/* Removed top padding (py-8 to pb-4) to bring elements higher */}
          <div className="grid grid-cols-13 gap-4 pb-4">

            {/* Left Column: Title & Description */}
            <div className="col-span-4 flex flex-col gap-4">
              {/* Added font-serif and leading-none to hug the top edge perfectly */}
              <h2 className="text-5xl font-serif leading-none text-white">{item.label}</h2>
              {item.description && (
                <p className="text-white/70 text-sm leading-relaxed pr-4 mt-2">
                  {item.description}
                </p>
              )}
            </div>

            {/* Middle Column: Links (Only renders if there are children) */}
            {hasSubLinks && (
              <div className={cn(
                "flex flex-col justify-start border-l border-white/10 pl-8",
                item.megaImage ? "col-span-4" : "col-span-3"
              )}>
                <div className="grid gap-4">
                  {item.children?.map((child) => (
                    <Link
                      key={`${child.label}-${child.href}`}
                      href={child.href}
                      className="text-white text-sm font-medium hover:text-[#89bdf2] transition-colors w-fit border-b border-transparent hover:border-[#89bdf2] pb-0.5"
                      onClick={() => {
                        setActivePrimaryDropdown(null);
                        setDesktopMenuOpen(false);
                      }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Right Column: Image Card OR Dynamic Product Categories Grid */}
            {item.megaImage ? (
              <div className={cn(
                "h-full min-h-[250px] -mb-4 relative rounded-xl overflow-hidden group",
                // Dynamically span 7 cols, push to column 7, and add top margin if there are no sub-links
                hasSubLinks ? "col-span-5" : "col-span-7 col-start-7 mt-14"
              )}>
                <Image
                  src={item.megaImage}
                  alt={item.megaImageTitle || item.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                  {item.megaImageTitle && (
                    <h3 className="text-white font-semibold text-xl mb-1">
                      {item.megaImageTitle}
                    </h3>
                  )}
                  <Link
                    href={item.megaImageLink || item.href}
                    className="text-white/80 text-sm flex items-center justify-between hover:text-white transition-colors"
                    onClick={() => {
                      setActivePrimaryDropdown(null);
                      setDesktopMenuOpen(false);
                    }}
                  >
                    {item.megaImageSubtitle} <ArrowRight className="h-8 w-8" />
                  </Link>
                </div>
              </div>
            ) : (
              item.label === "Products" && (
                <div className={cn(
                  "grid grid-cols-2 gap-x-8 gap-y-4 content-start border-l border-white/10 pl-8",
                  hasSubLinks ? "col-span-5" : "col-span-7 col-start-7 mt-14"
                )}>
                  {productCategories.map((cat) => (
                    <Link
                      key={cat.slug || cat.name}
                      href={`/products?category=${encodeURIComponent(cat.slug || cat.name)}`}
                      className="text-white/80 text-sm hover:text-white transition-colors"
                      onClick={() => {
                        setActivePrimaryDropdown(null);
                        setDesktopMenuOpen(false);
                      }}
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )
            )}

          </div>
        </div>
      </div>
    );
  };

  return (
    <header className="fixed w-[90%] mx-auto left-0 right-0 z-50 top-6">
      {/* Desktop */}
      <div
        ref={navContainerRef}
        className={cn(
          "hidden ixl:flex flex-col bg-[#000000] shadow-[0_2px_12px_rgba(0,0,0,0.08)] transition-all duration-300 relative",
          activePrimaryDropdown ? "rounded-t-[25px]" : "rounded-[25px]"
        )}
        onMouseLeave={scheduleCloseDesktopMenu}
        onMouseEnter={clearCloseMenuTimeout}
      >
        {desktopSearchOpen ? (
          /* Full-width Search View */
          <div className="flex items-center justify-between w-full px-8 py-4 animate-in fade-in zoom-in-95 duration-300 gap-6">
            <div className="flex items-center gap-4 shrink-0">
              <Search className="h-5 w-5 text-white" />
              <span className="text-white text-sm font-medium hidden lg:block">
                Search Ferozsons Products
              </span>
            </div>

            <form
              onSubmit={handleSearchSubmit}
              className="flex flex-1 items-center gap-4"
            >
              <div className="flex-1 flex items-center bg-[#222222] rounded-full px-5 py-3">
                <input
                  ref={desktopSearchRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search ferozsons-labs.com"
                  className="w-full text-sm text-white placeholder:text-[#999999] outline-none bg-transparent"
                />
              </div>
              <button
                type="submit"
                className="bg-white text-black p-3.5 rounded-[15px] hover:bg-gray-200 transition-colors shrink-0"
              >
                <Search className="h-6 w-6" />
              </button>
            </form>

            <button
              className="text-white hover:text-gray-300 shrink-0 ml-2"
              onClick={() => setDesktopSearchOpen(false)}
              aria-label="Close search"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        ) : (
          /* Default & Menu Open States */
          <div className="flex flex-col w-full">
            {/* Row 1: Logo & Action Icons */}
            <div className="flex items-center justify-between px-8 py-4 w-full">
              <Link
                href="/"
                className="flex items-center shrink-0"
                onClick={() => {
                  setDesktopMenuOpen(false);
                  setActivePrimaryDropdown(null);
                }}
              >
                <Image
                  src="/Ferozsons-Logo-1000x250px3.avif"
                  alt="Ferozsons Laboratories Limited"
                  width={200}
                  height={50}
                  className="h-10 w-auto"
                  priority
                />
              </Link>

              <div className="flex items-center gap-6 shrink-0">
                <button
                  className="text-[#FFFFFF] hover:text-gray-300"
                  onClick={() => {
                    setDesktopSearchOpen(true);
                    setDesktopMenuOpen(false);
                    setActivePrimaryDropdown(null);
                  }}
                  aria-label="Open search"
                >
                  <Search className="h-5 w-5" />
                </button>
                <button
                  className="text-[#FFFFFF] hover:text-gray-300"
                  onMouseEnter={openDesktopMenu}
                  onMouseLeave={() => {
                    ignoreHamburgerHoverRef.current = false;
                  }}
                  onClick={() => {
                    if (desktopMenuOpen) {
                      ignoreHamburgerHoverRef.current = true;
                      closeDesktopMenu();
                    } else {
                      ignoreHamburgerHoverRef.current = false;
                      openDesktopMenu();
                    }
                  }}
                  aria-label="Toggle menu"
                  aria-expanded={desktopMenuOpen}
                >
                  {desktopMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>

            {/* Row 2: Expanded Nav Items */}
            {desktopMenuOpen && (
              <div className="flex items-center justify-between px-8 pb-5 pt-2 w-full animate-in fade-in slide-in-from-top-3 duration-300 ease-out">
                <nav className="flex items-center gap-4 flex-1 justify-start">
                  {mainNavItems.map((item) => (
                    <div
                      key={item.href}
                      className="static"
                      onMouseEnter={() => hasDropdown(item) && setActivePrimaryDropdown(item.label)}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center gap-1 text-sm font-medium text-[#FFFFFF] transition-all px-4 py-2 rounded-full",
                          activePrimaryDropdown === item.label ? "bg-white/15" : "hover:text-gray-300",
                          pathname === item.href && "text-white"
                        )}
                        onClick={() => {
                          setDesktopMenuOpen(false);
                          setActivePrimaryDropdown(null);
                        }}
                      >
                        {item.label}
                      </Link>
                      {renderMegaMenu(item)}
                    </div>
                  ))}
                </nav>

                <div className="flex items-center gap-4 shrink-0">
                  {secondaryNavItems.map((item) => (
                    <div
                      key={item.href}
                      className="static"
                      onMouseEnter={() => hasDropdown(item) && setActivePrimaryDropdown(item.label)}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center gap-1 text-sm font-medium text-[#FFFFFF] transition-all px-4 py-2 rounded-full",
                          activePrimaryDropdown === item.label ? "bg-white/15" : "hover:text-gray-300",
                          pathname === item.href && "text-white"
                        )}
                        onClick={() => {
                          setDesktopMenuOpen(false);
                          setActivePrimaryDropdown(null);
                        }}
                      >
                        {item.label}
                      </Link>
                      {renderMegaMenu(item)}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mobile Header (Collapsed State) */}
      <div className="flex ixl:hidden items-center justify-between rounded-[20px] bg-[#000000] shadow-[0_2px_12px_rgba(0,0,0,0.08)] px-4 py-3">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/Ferozsons-Logo-1000x250px3.avif"
            alt="Ferozsons Laboratories Limited"
            width={160}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>
        <button
          className="p-2 text-[#FFFFFF]"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu (Full Screen Overlay) */}
      {mobileOpen && (
        <div className="ixl:hidden fixed inset-0 z-[100] bg-[#000000] flex flex-col animate-in fade-in slide-in-from-top-[50px] duration-300">

          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between px-6 py-6">
            <Link
              href="/"
              className="flex items-center shrink-0"
              onClick={() => {
                setMobileOpen(false);
                setMobileDropdown(null);
              }}
            >
              <Image
                src="/Ferozsons-Logo-1000x250px3.avif"
                alt="Ferozsons Laboratories Limited"
                width={160}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>
            <button
              className="p-2 text-[#FFFFFF]"
              onClick={() => {
                setMobileOpen(false);
                setMobileDropdown(null);
              }}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {!mobileDropdown ? (
              /* Main Menu List */
              <div className="flex flex-col gap-10 animate-in fade-in slide-in-from-left-4 duration-300">
                <div className="flex flex-col gap-6">
                  {mainNavItems.map((item) => (
                    <div key={item.href} className="flex items-center justify-between">
                      {hasDropdown(item) ? (
                        <button
                          className="flex items-center justify-between w-full text-left group"
                          onClick={() => setMobileDropdown(item.label)}
                        >
                          <span className="font-serif text-3xl text-white group-hover:text-gray-300 transition-colors">
                            {item.label}
                          </span>
                          <ChevronRight className="h-6 w-6 text-white" />
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          className="font-serif text-3xl text-white w-full text-left hover:text-gray-300 transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-6">
                  {secondaryNavItems.map((item) => (
                    <div key={item.href} className="flex items-center justify-between">
                      {hasDropdown(item) ? (
                        <button
                          className="flex items-center justify-between w-full text-left group"
                          onClick={() => setMobileDropdown(item.label)}
                        >
                          <span className="font-serif text-2xl text-white group-hover:text-gray-300 transition-colors">
                            {item.label}
                          </span>
                          <ChevronRight className="h-5 w-5 text-white" />
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          className="font-serif text-2xl text-white w-full text-left hover:text-gray-300 transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* Submenu Drilldown */
              <div className="flex flex-col pb-10 animate-in fade-in slide-in-from-right-4 duration-300">
                <button
                  onClick={() => setMobileDropdown(null)}
                  className="text-white/50 mb-6 w-fit text-left flex items-center gap-2 text-sm hover:text-white transition-colors"
                >
                  <ChevronLeft className="h-4 w-4" /> Back to menu
                </button>

                {(() => {
                  const activeItem = [...mainNavItems, ...secondaryNavItems].find(i => i.label === mobileDropdown);
                  if (!activeItem) return null;

                  return (
                    <div className="flex flex-col">
                      <h2 className="font-serif text-[2rem] leading-tight text-white inline-block border-b-2 border-white pb-2 mb-8 w-fit">
                        {activeItem.label}
                      </h2>

                      <div className="flex flex-col gap-6 mb-12">
                        {activeItem.children?.map(child => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="text-white text-lg font-medium hover:text-[#89bdf2] hover:underline underline-offset-4 transition-all"
                            onClick={() => {
                              setMobileOpen(false);
                              setMobileDropdown(null);
                            }}
                          >
                            {child.label}
                          </Link>
                        ))}

                        {activeItem.label === "Products" && productCategories.length > 0 && (
                          <>
                            <div className="h-px w-full bg-white/20" aria-hidden />
                            {productCategories.map((cat) => (
                              <Link
                                key={cat.slug || cat.name}
                                href={`/products?category=${encodeURIComponent(cat.slug || cat.name)}`}
                                className="text-white/50 text-lg font-medium hover:text-white transition-colors"
                                onClick={() => {
                                  setMobileOpen(false);
                                  setMobileDropdown(null);
                                }}
                              >
                                {cat.name}
                              </Link>
                            ))}
                          </>
                        )}
                      </div>

                      {/* Image Card for Mega Menu */}
                      {activeItem.megaImage && (
                        <div className="relative w-full h-[250px] rounded-2xl overflow-hidden group">
                          <Image
                            src={activeItem.megaImage}
                            alt={activeItem.megaImageTitle || activeItem.label}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-5">
                            <h3 className="text-white font-semibold text-lg mb-1 leading-tight">
                              {activeItem.megaImageTitle}
                            </h3>
                            <Link
                              href={activeItem.megaImageLink || activeItem.href}
                              className="text-white/80 text-xs font-medium flex items-center gap-2 hover:text-white transition-colors"
                              onClick={() => {
                                setMobileOpen(false);
                                setMobileDropdown(null);
                              }}
                            >
                              {activeItem.megaImageSubtitle} <ArrowRight className="h-3 w-3" />
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;