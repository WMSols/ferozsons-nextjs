import Link from "next/link";
import Image from "next/image";
import { TherapeuticArea } from "@/types/strapi";
import { getStrapiImageUrl } from "@/lib/strapi";
import { cn } from "@/lib/utils";

interface TherapeuticCardBigProps {
  item: TherapeuticArea;
  isActive?: boolean;
  linkHref: string;
  onClick?: () => void;
}

export default function TherapeuticCardBig({
  item,
  isActive = true,
  linkHref,
  onClick,
}: TherapeuticCardBigProps) {
  // Using a reliable placeholder for development until actual images are provided
  const placeholderImage = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800";

  // Safely resolve the image URL whether it's a string, Strapi object, or undefined
  const getImageUrl = (img: string | { url: string } | undefined) => {
    if (!img) return undefined;
    return typeof img === "string" ? img : img.url;
  };
  
  const stringUrl = getImageUrl(item.image);
  const imageUrl = stringUrl 
    ? (stringUrl.startsWith("/images") ? stringUrl : getStrapiImageUrl(stringUrl)) 
    : placeholderImage;

  return (
    <div
      onClick={onClick}
      className={cn(
        // Increased mobile height to 450px for the taller portrait layout
        "relative w-full md:w-195 h-[600px]  rounded-[32px] overflow-hidden transition-all duration-700 ease-out cursor-pointer shadow-lg",
        isActive ? "scale-100 opacity-100" : "scale-90 opacity-60 hover:opacity-80"
      )}
    >
      <Image
        src={imageUrl || placeholderImage}
        alt={item.name}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 60vw"
      />
      
      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-8 md:p-10">
        
        {/* Adjusted flex layout for perfect mobile centering while keeping desktop intact */}
        <div className="flex flex-col items-center justify-center h-full md:h-auto md:flex-row md:items-end md:justify-between w-full gap-2 md:gap-4">
          <h3 className="text-white font-sans text-5xl md:pb-5 font-medium w-full md:w-2/3 leading-tight line-clamp-2 text-center md:text-left">
            {item.name}
          </h3>
          
          <Link
            href={linkHref}
            className="text-white/90  font-medium underline underline-offset-4 hover:text-white transition-colors shrink-0 md:pb-5"
            // Prevent the card's onClick from firing when clicking the link directly
            onClick={(e) => e.stopPropagation()} 
          >
            Explore Range
          </Link>
        </div>

      </div>
    </div>
  );
}