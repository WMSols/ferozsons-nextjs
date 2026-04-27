import React from "react";
import { csrSlideshowImages } from "@/data/csrData";
import Image from "next/image";
import { eGMPSlideshow } from "@/data/contract-manufacturing";

const EgmpSlideshowSection = () => {
  return (
    <div className="py-10">
      <h1
        className="font-display leading-tight text-center px-4 sm:px-10"
        style={{
          fontSize: "clamp(1.9rem, 3.5vw, 3rem)",
          color: "#1d4ed8",
          fontWeight: 700,
        }}
      >
        cGMP-Compliant Manufacturing & Quality Systems Infrastructure.
      </h1>
      <div className="flex relative overflow-hidden py-30">
        <style>{`
            @keyframes scroll {
              from { transform: translateX(0) }
              to { transform: translateX(-50%) }
            }
            .ticker {
              animation: scroll 60s linear infinite;
            }
          `}</style>

        {/* w-max is crucial here so the div stretches to fit all images, making -50% perfectly accurate */}
        <div className="flex ticker relative w-max]">
          {/* We map twice to create two identical blocks for a seamless loop */}
          {[1, 2].map((group) => (
            // pr-8 perfectly mimics gap-8 to connect the two groups seamlessly
            <div key={group} className="flex gap-8 shrink-0 pr-8">
              {eGMPSlideshow.map((slide, idx) => (
                <div
                  key={`${group}-${idx}`}
                  className="relative h-50 md:h-60 rounded-xl overflow-hidden shrink-0 bg-zinc-100"
                  style={{
                    aspectRatio:
                      slide.width && slide.height
                        ? `${slide.width} / ${slide.height}`
                        : "auto",
                  }}
                >
                  <Image
                    className="object-cover"
                    fill
                    quality={75}
                    src={slide.src}
                    alt={`CSR slide image ${idx + 1}`}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EgmpSlideshowSection;
