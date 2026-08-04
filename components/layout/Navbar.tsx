"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { Menu, X, Search, ChevronDown, ArrowRight } from "lucide-react";
import { mainNavItems, secondaryNavItems, NavItem } from "@/data/navigation";
import { getCategoriesUrl, strapiFetch } from "@/lib/strapi";
import { cn } from "@/lib/utils";
import type { StrapiCategoriesResponse } from "@/types/strapi";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activePrimaryDropdown, setActivePrimaryDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [desktopSearchOpen, setDesktopSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const pathname = usePathname();
  const router = useRouter();
  const desktopSearchRef = useRef<HTMLInputElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (desktopSearchOpen) {
      desktopSearchRef.current?.focus();
    }
  }, [desktopSearchOpen]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    setSearchQuery("");
    setDesktopSearchOpen(false);
    setMobileOpen(false);
  };

  const categoriesQuery = useQuery({
    queryKey: ["product-categories"],
    queryFn: async (): Promise<StrapiCategoriesResponse> => {
      const res = await strapiFetch(getCategoriesUrl());
      return res.json();
    },
  });

  const productCategories = categoriesQuery.data?.data ?? [];

  // Reusable component block for the Mega Menu
  const renderMegaMenu = (item: NavItem) => {
    if (!item.children || activePrimaryDropdown !== item.label) return null;

    return (
      <div className="absolute top-full left-0 right-0 z-50 before:absolute before:inset-x-0 before:-top-8 before:h-8 before:bg-transparent">
        <div className="bg-[#000000] border-t border-white/20 rounded-b-[20px] shadow-2xl p-10 pt-20 animate-in fade-in duration-300 ease-in">
          <div className="grid grid-cols-12 gap-8">
            
            {/* Left Column: Title & Description */}
            <div className="col-span-3 flex flex-col gap-4">
              <h2 className="text-4xl font-serif text-white">{item.label}</h2>
              {item.description && (
                <p className="text-white/70 text-sm leading-relaxed pr-4">
                  {item.description}
                </p>
              )}
            </div>

            {/* Middle Column: Links (Smaller if image exists, larger if Products Grid) */}
            <div className={cn(
              "border-l border-white/10 pl-8 flex flex-col justify-start",
              item.megaImage ? "col-span-4" : "col-span-3"
            )}>
              <div className="grid gap-4">
                {item.children.map((child) => (
                  <Link
                    key={`${child.label}-${child.href}`}
                    href={child.href}
                    className="text-white text-sm font-medium hover:text-[#89bdf2] transition-colors w-fit border-b border-white hover:border-[#89bdf2] pb-0.5"
                    onClick={() => setActivePrimaryDropdown(null)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Column: Image Card OR Dynamic Product Categories Grid */}
            {item.megaImage ? (
              <div className="col-span-5 h-full min-h-[300px] relative rounded-xl overflow-hidden group">
                <Image
                  src={item.megaImage}
                  alt={item.megaImageTitle || item.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white font-semibold text-xl mb-1">
                    {item.megaImageTitle}
                  </h3>
                  <Link 
                    href={item.megaImageLink || item.href} 
                    className="text-white/80 text-sm flex items-center gap-2 hover:text-white transition-colors"
                    onClick={() => setActivePrimaryDropdown(null)}
                  >
                    {item.megaImageSubtitle} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ) : (
              item.label === "Products" && (
                <div className="col-span-6 grid grid-cols-2 gap-x-8 gap-y-4 content-start">
                  {productCategories.map((cat) => (
                    <Link
                      key={cat.slug || cat.name}
                      href={`/products?category=${encodeURIComponent(cat.slug || cat.name)}`}
                      className="text-white/80 text-sm hover:text-white transition-colors"
                      onClick={() => setActivePrimaryDropdown(null)}
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
          "hidden ixl:block bg-[#000000] shadow-[0_2px_12px_rgba(0,0,0,0.08)] transition-all duration-300 relative",
          activePrimaryDropdown ? "rounded-t-[20px]" : "rounded-[20px]"
        )}
      >
        <div className="flex items-center justify-between gap-8 px-8 py-4">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/Ferozsons-Logo-1000x250px3.avif"
              alt="Ferozsons Laboratories Limited"
              width={200}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Search View */}
          {desktopSearchOpen ? (
            <div className="flex-1 flex items-center justify-end w-full animate-in fade-in zoom-in-95 duration-300">
               <form
                  onSubmit={handleSearchSubmit}
                  className="flex flex-1 items-center gap-3 bg-[#1A1A1A] rounded-full px-4 py-2 mx-8 max-w-4xl"
                >
                  <input
                    ref={desktopSearchRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search ferozsons-labs.com"
                    className="flex-1 text-sm text-white placeholder:text-[#999999] outline-none bg-transparent"
                  />
                  <button
                    type="submit"
                    className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <Search className="h-4 w-4" />
                  </button>
                </form>
                <button
                  className="text-white hover:text-gray-300 ml-4 shrink-0"
                  onClick={() => setDesktopSearchOpen(false)}
                >
                  <X className="h-6 w-6" />
                </button>
            </div>
          ) : (
            <>
              {/* Main Nav Links */}
              <nav className="flex items-center gap-6 flex-1 justify-start pl-8 animate-in fade-in duration-300">
                {mainNavItems.map((item) => (
                  <div
                    key={item.href}
                    className="static"
                    onMouseEnter={() => item.children && setActivePrimaryDropdown(item.label)}
                    onMouseLeave={() => setActivePrimaryDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-1 text-sm font-medium text-[#FFFFFF] transition-all px-4 py-2 rounded-full",
                        activePrimaryDropdown === item.label ? "bg-white/10" : "hover:text-gray-300",
                        pathname === item.href && "text-white"
                      )}
                    >
                      {item.label}
                    </Link>
                    {renderMegaMenu(item)}
                  </div>
                ))}
              </nav>

              {/* Secondary Nav & Search Trigger */}
              <div className="flex items-center gap-6 shrink-0 animate-in fade-in duration-300">
                {secondaryNavItems.map((item) => (
                  <div
                    key={item.href}
                    className="static"
                    onMouseEnter={() => item.children && setActivePrimaryDropdown(item.label)}
                    onMouseLeave={() => setActivePrimaryDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-1 text-sm font-medium text-[#FFFFFF] transition-all px-4 py-2 rounded-full",
                        activePrimaryDropdown === item.label ? "bg-white/10" : "hover:text-gray-300",
                        pathname === item.href && "text-white"
                      )}
                    >
                      {item.label}
                    </Link>
                    {renderMegaMenu(item)}
                  </div>
                ))}
                
                <button
                  className="text-[#FFFFFF] hover:text-gray-300 ml-2"
                  onClick={() => setDesktopSearchOpen(true)}
                  aria-label="Open search"
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Mobile (Simplified) */}
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
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
            <div className="rounded-[20px] bg-[#000000] shadow-[0_2px_12px_rgba(0,0,0,0.08)] border border-[#CCCCCC]/30 overflow-hidden">
              <div className="px-4 py-4 space-y-1 max-h-[75vh] overflow-y-auto">

                {/* Mobile search */}
                <form
                  onSubmit={handleSearchSubmit}
                  className="flex items-center gap-2 bg-[#1A1A1A] rounded-lg px-3 py-2 mb-3"
                >
                  <Search className="h-4 w-4 text-white/50 shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for products..."
                    className="flex-1 text-sm text-white placeholder:text-white/50 outline-none bg-transparent"
                  />
                </form>

                {/* Main Mobile Nav Items */}
                {mainNavItems.map((item) => (
                  <div key={item.href}>
                    {item.children ? (
                      <>
                        <div className="flex items-center justify-between w-full py-3 text-base font-medium text-[#FFFFFF]">
                          <Link
                            href={item.href}
                            className="flex-1 hover:opacity-80 text-left"
                            onClick={() => {
                              setMobileOpen(false);
                              setMobileDropdown(null);
                            }}
                          >
                            {item.label}
                          </Link>
                          <button
                            className="p-2 -mr-2"
                            onClick={() =>
                              setMobileDropdown(
                                mobileDropdown === item.label ? null : item.label,
                              )
                            }
                          >
                            <ChevronDown
                              className={cn(
                                "h-4 w-4 transition-transform",
                                mobileDropdown === item.label && "rotate-180",
                              )}
                            />
                          </button>
                        </div>
                        {mobileDropdown === item.label && (
                          <div className="pl-4 pb-2 space-y-1 flex flex-col">
                            {item.children.map((child) => (
                                <Link
                                  key={`${child.label}-${child.href}`}
                                  href={child.href}
                                  className="py-2 text-sm text-white/70 hover:text-white"
                                  onClick={() => {
                                    setMobileOpen(false);
                                    setMobileDropdown(null);
                                  }}
                                >
                                  {child.label}
                                </Link>
                            ))}
                            {/* Inject Strapi Categories into mobile Products dropdown */}
                            {item.label === "Products" && productCategories.map((cat) => (
                               <Link
                                 key={`mob-cat-${cat.slug || cat.name}`}
                                 href={`/products?category=${encodeURIComponent(cat.slug || cat.name)}`}
                                 className="py-2 pl-4 text-sm text-white/40 hover:text-white"
                                 onClick={() => {
                                   setMobileOpen(false);
                                   setMobileDropdown(null);
                                 }}
                               >
                                 {cat.name}
                               </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="block py-3 text-base font-medium text-[#FFFFFF] hover:opacity-80"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}

                {/* Secondary Mobile Nav Items */}
                <div className="border-t border-white/20 pt-3 mt-3 space-y-1">
                  {secondaryNavItems.map((item) => (
                    <div key={item.href}>
                      {item.children ? (
                        <>
                          <div className="flex items-center justify-between w-full py-3 text-sm font-medium text-[#FFFFFF]">
                            <Link
                              href={item.href}
                              className="flex-1 hover:opacity-80 text-left"
                              onClick={() => {
                                setMobileOpen(false);
                                setMobileDropdown(null);
                              }}
                            >
                              {item.label}
                            </Link>
                            <button
                              className="p-2 -mr-2"
                              onClick={() =>
                                setMobileDropdown(
                                  mobileDropdown === item.label ? null : item.label,
                                )
                              }
                            >
                              <ChevronDown
                                className={cn(
                                  "h-4 w-4 transition-transform",
                                  mobileDropdown === item.label && "rotate-180",
                                )}
                              />
                            </button>
                          </div>
                          {mobileDropdown === item.label && (
                            <div className="pl-4 pb-2 space-y-1 flex flex-col">
                              {item.children.map((child) => (
                                  <Link
                                    key={`${child.label}-${child.href}`}
                                    href={child.href}
                                    className="py-2 text-sm text-white/70 hover:text-white"
                                    onClick={() => {
                                      setMobileOpen(false);
                                      setMobileDropdown(null);
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
                          className="block py-3 text-sm font-medium text-[#FFFFFF] hover:opacity-80"
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