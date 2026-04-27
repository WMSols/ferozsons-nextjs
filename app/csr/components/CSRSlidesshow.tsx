import React from "react";
import { csrSlideshowImages } from "@/data/csrData";
import Image from "next/image";

const CSRSlidesshow = () => {
  return (
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
            {csrSlideshowImages.map((slide, idx) => (
              <div
                key={`${group}-${idx}`}
                className="relative h-50 md:h-60 rounded-xl overflow-hidden shrink-0 bg-zinc-100"
                style={{
                  aspectRatio: slide.width && slide.height
                    ? `${slide.width} / ${slide.height}`
                    : "auto",
                }}
              >
                <Image
                  className="object-cover"
                  fill
                  quality={75}
                  src={slide.url}
                  alt={`CSR slide image ${idx + 1}`}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CSRSlidesshow;