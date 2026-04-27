import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import DecorativeGrid from "./DecorativeGrid";
import TreatmentCard from "./TreatmentCard";

export default function TreatmentOptions() {
  return (
    <section className="relative bg-white">
      <div
        className="absolute left-0 top-0 w-full -translate-y-full overflow-hidden"
        aria-hidden
      >
        <svg
          className="block h-10 w-full text-white md:h-14"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
        >
          <path
            d="M0,32 C240,72 480,72 720,32 C960,-8 1200,-8 1440,32 L1440,80 L0,80 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="container pb-16 pt-14 md:pb-20 md:pt-16">
        <h2 className="max-w-3xl text-[28px] leading-tight text-blue-950 sm:text-[34px]">
          Explore our available weight-management{" "}
          <span className="font-serif bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            treatment options
          </span>
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <TreatmentCard
              title="Sematide (GLP-1)"
              description="A modern weight management option with clinically supported dosing and patient-focused care."
              imageSrc="/weight-management/sematide.png"
              linkHref="/products?category=sematide"
              variant="gradient"
            />
            <TreatmentCard
              title="Zeptide (GLP-1 + GIP)"
              description="Dual-pathway support designed to align with evolving weight management approaches."
              imageSrc="/weight-management/zeptide.png"
              linkHref="/products?category=zeptide"
              variant="light"
            />
          </div>

          <div className="flex justify-center lg:justify-end">
            <DecorativeGrid />
          </div>
        </div>

        <div className="mt-10">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full border border-blue-950/20 bg-white px-5 py-2.5 text-sm font-semibold text-blue-950 shadow-sm transition-colors hover:bg-blue-950/[0.03]"
          >
            <ArrowLeft className="h-4 w-4" />
            Return To Product List
          </Link>
        </div>
      </div>
    </section>
  );
}
