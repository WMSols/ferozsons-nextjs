import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Hero() {
  return (
    <section className="bg-[#EEF2FF]"> 

      <div className="container pb-14 pt-10 md:pb-20 md:pt-14">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="max-w-xl">
            <h1 className="text-[34px] leading-[1.12] text-blue-950 sm:text-[44px] sm:leading-[1.1]">
              Modern solutions for{" "}
              <span className="font-serif bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                weight management
              </span>
            </h1>

            <ul className="mt-8 space-y-4 text-[15px] leading-relaxed text-blue-950/80">
              {[
                "A selection of products and services to support modern care.",
                "Care options tailored to different clinical needs and goals.",
                "Backed by science-led innovation and collaboration.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-[6px] bg-blue-600 text-white shadow-sm">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                className="h-10 rounded-full bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
              >
                GLP-1
              </button>
              <button
                type="button"
                className="h-10 rounded-full border border-blue-600/40 bg-white/40 px-5 text-sm font-semibold text-blue-800 backdrop-blur transition-colors hover:bg-white/70"
              >
                Dual GLP-1 and GIP
              </button>
            </div>

            <p className="mt-4 max-w-lg text-[12px] leading-relaxed text-muted-foreground">
              Product availability and indications may vary. Please refer to local prescribing
              information and consult a healthcare professional.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="relative aspect-square w-full">
              <Image
                src="/ferozsons-foam-logo.png"
                alt="Weight management featured product graphic"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
