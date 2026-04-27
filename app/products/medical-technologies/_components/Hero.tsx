"use client";

import Image from "next/image";
export function Hero() {
  return (
    <section className="hero-section bg-[#1a1a1a] px-4 pb-0 pt-14 sm:pt-18 overflow-hidden">
      <div className="mx-auto flex max-w-300 flex-col items-center text-center">
        <h1 className="hero-title font-kaisei font-bold">
          <span className="block text-[42px] leading-[40px] sm:text-[64px] sm:leading-[60px] md:text-[80px] md:leading-[76px] lg:text-[96px] lg:leading-[90px] tracking-normal text-[#aaaaaa]">
            <span>Medical</span>
          </span>
          <span className="block text-[42px] leading-[40px] sm:text-[64px] sm:leading-[60px] md:text-[80px] md:leading-[76px] lg:text-[96px] lg:leading-[90px] tracking-normal text-white">
            <span>Technologies</span>
          </span>
        </h1>

        <p className="hero-subtext mt-3 max-w-[540px] font-sans text-[14px] leading-[100%] tracking-normal font-semibold text-[#666666] sm:text-[16px] md:text-[20px]">
          At Ferozsons Laboratories Limited, we bring global medical
          technologies to Pakistan&apos;s healthcare system.
        </p>
        <div
          className="hero-sphere relative z-10 -mt-48
          w-[320px] h-[320px] -mb-[120px]
          sm:w-[500px] sm:h-[500px] sm:-mb-[180px]
          md:w-[700px] md:h-[700px] md:-mb-[260px]
          lg:w-[900px] lg:h-[900px] lg:-mb-[340px]
          xl:w-[1000px] xl:h-[1000px] xl:-mb-[380px]"
        >
          <Image
            src="/medical-technologies/hero-sphere.png"
            alt="Ferozsons sphere"
            fill
            className="object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
          />
        </div>
      </div>
    </section>
  );
}
