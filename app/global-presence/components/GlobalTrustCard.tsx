import Image from "next/image";
import { ReactNode } from "react";

interface GlobalTrustCardProps {
  backgroundImage?: string;
  tagline?: string | ReactNode;
}

export default function GlobalTrustCard({
  backgroundImage = "/global-presence/Secondary-GP.webp",
  tagline = (<span>Delivering trusted, high-quality pharmaceutical<br className="hidden md:block"/> products to over 30 countries</span>),
}: GlobalTrustCardProps) {
  return (
    <section className="md:min-h-screen mt-8 sm:mt-12  py-10">
      <div className="relative w-full  overflow-hidden min-h-[500px] md:min-h-screen flex flex-col justify-between  shadow-lg group">
        
        {/* Background Image */}
        <Image
          src={backgroundImage}
          alt="Global Presence - People Trust Us"
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 90vw"
          priority
        />
        

        {/* Top-Right Container for Icon */}
        <div className="relative mb-10  z-10 flex justify-end w-full">
          {/* REPLACE THIS DIV WITH YOUR CUSTOM ICON COMPONENT / SVG */}
          <Image
            src="/people-trust-us.webp"
            alt="Trust Icon"
            width={100}
            height={100}
            className=" md:w-52"
          />
        </div>

        {/* Bottom Center Tagline */}
        <div className="relative p-8 md:p-12 lg:p-16 z-10 w-full max-w-4xl mx-auto text-center">
          <p className="text-white text-lg md:text-2xl font-light leading-relaxed  drop-shadow-md">
            {tagline}
          </p>
        </div>

      </div>
    </section>
  );
}