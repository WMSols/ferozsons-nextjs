"use client";

import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReactNode, useState } from "react";
import { StaggerFadeUpInView } from "../animations/StaggerFadeUpInView";
interface ProductSearchSectionProps {
  label?: string;
  description: string | ReactNode;
  searchPlaceholder?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function ProductSearchSection({
  label = "Products",
  description,
  searchPlaceholder = "Searching for a product?",
  ctaText = "Explore Our Complete Portfolio",
  ctaLink = "/products",
}: ProductSearchSectionProps) {

  const [searchQuery, setSearchQuery] = useState("")
  return (
    <StaggerFadeUpInView className="w-full py-16 md:py-24 bg-product-bg">
      <div className="container mx-auto px-4 md:px-8 flex text-black flex-col text-left">
        <h2 className="font-sans uppercase text-center  mb-4 md:mb-16">
          {label}
        </h2>
        <h3 className=" text-2xl md:text-4xl lg:text-[56px] font-bold leading-normal  ">
          {description}
        </h3>
        <div className="flex flex-col md:flex-row md:items-center gap-6 mt-12 w-full max-w-4xl">
          <div className="flex items-center px-4 py-1 gap-2 flex-1 w-full md:w-auto border rounded-full border-primary min-w-0">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={searchPlaceholder}
              className="flex-1 min-w-0 py-2 pl-4 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
              aria-label="Search for a product"
            />
            <Link
              href={`/products?search=${encodeURIComponent(searchQuery.trim())}`}
              type="button"
              className={`shrink-0 w-10 h-10 rounded-full  flex items-center justify-center text-foreground hover:bg-foreground/5 transition-colors ${searchQuery ? "": "pointer-events-none cursor-not-allowed"}`}
              aria-label="Search products"
            >
              <Search className="h-6 w-6 text-gray-500" />
            </Link>
          </div>
            <button
              className="inline-flex items-center justify-center rounded-full h-12 px-8 bg-[#3B73AC] text-white text-base font-medium hover:bg-[#2A5A8C] shrink-0"
            >
              <Link href={ctaLink}>{ctaText}</Link>
            </button>
        </div>
      </div>
    </StaggerFadeUpInView>
  );
}
