import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProductSearch() {
  return (
    <section className="bg-white py-14 md:py-16">
      <div className="container">
        <p className="text-sm font-bold text-blue-950">Products</p>

        <h2 className="mt-5 max-w-5xl font-serif text-[22px] font-bold leading-snug text-blue-950 sm:text-[28px] md:text-[34px]">
          Across a portfolio of over 140 products, every medicine reflects our commitment to
          quality and patient care, supported by over 1,000 professionals.
        </h2>

        <div className="mt-10 flex flex-col gap-5 md:flex-row md:items-center md:gap-8">
          <div className="flex w-full items-center gap-3 border-b border-blue-950/25 pb-2 md:flex-1">
            <input
              type="search"
              placeholder="Searching for a product?"
              className="h-10 w-full bg-transparent text-[14px] text-blue-950 placeholder:text-blue-950/45 focus:outline-none"
              aria-label="Search for a product"
            />
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full border border-blue-950/40 text-blue-950 transition-colors hover:bg-blue-950/[0.04]"
              aria-label="Search"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <Link
            href="/products"
            className="inline-flex h-11 items-center justify-center rounded-full border-2 border-blue-950/25 bg-white px-6 text-sm font-semibold text-blue-800 transition-colors hover:bg-blue-950/[0.04] md:shrink-0"
          >
            Browse Our Complete Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
