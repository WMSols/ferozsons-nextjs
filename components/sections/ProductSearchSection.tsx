"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonMotion } from "@/components/animations/ButtonMotion";

interface ProductSearchSectionProps {
  label?: string;
  description: string;
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
  return (
    <section className="w-full py-16 md:py-24 bg-product-bg">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-start text-left">
        <h2 className="text-sm font-bold font-sans text-foreground mb-4 md:mb-6">
          {label}
        </h2>
        <h3 className="font-serif text-2xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight text-foreground max-w-[800px]">
          {description}
        </h3>
        <div className="flex flex-col md:flex-row items-center gap-6 mt-12 w-full max-w-4xl">
          <div className="flex items-center gap-2 flex-1 w-full md:w-auto border-b border-foreground/30 min-w-0">
            <input
              type="search"
              placeholder={searchPlaceholder}
              className="flex-1 min-w-0 py-2 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
              aria-label="Search for a product"
            />
            <button
              type="button"
              className="shrink-0 w-10 h-10 rounded-full border border-foreground/50 flex items-center justify-center text-foreground hover:bg-foreground/5 transition-colors"
              aria-label="Search"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <ButtonMotion>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-2 border-foreground/40 bg-transparent text-primary hover:bg-foreground/5 shrink-0"
            >
              <Link href={ctaLink}>{ctaText}</Link>
            </Button>
          </ButtonMotion>
        </div>
      </div>
    </section>
  );
}
