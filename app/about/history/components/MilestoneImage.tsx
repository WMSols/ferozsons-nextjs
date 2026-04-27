"use client";

import { useState } from "react";

import Image from "next/image";

import PlaceholderImage from "./PlaceholderImage";

export default function MilestoneImage({
  src,
  alt,
  catColor,
}: {
  src?: string;
  alt: string;
  catColor: string;
}) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  if (!src || errored) return <PlaceholderImage alt={alt} color={catColor} />;

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "3/2",
        borderRadius: 4,
        overflow: "hidden",
        background: `${catColor}08`,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        style={{
          objectFit: "cover",
          transition: "opacity 0.5s ease",
          opacity: loaded ? 1 : 0,
        }}
        onLoad={() => setLoaded(true)}
        onError={() => setErrored(true)}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      {!loaded && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `${catColor}10`,
            animation: "shimmer 1.6s infinite linear",
            backgroundImage: `linear-gradient(90deg, ${catColor}06 25%, ${catColor}16 50%, ${catColor}06 75%)`,
            backgroundSize: "300% 100%",
          }}
        />
      )}
    </div>
  );
}
