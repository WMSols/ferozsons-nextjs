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
  const placeholderImage = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800";

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
        // Taller base height so the center active card is large. 
        // Side cards will automatically shrink because of the parent's scale() transform.
        "relative w-full h-[420px] md:h-[400px] lg:h-[460px] xl:h-[500px] rounded-[2rem] overflow-hidden transition-all duration-700 ease-out cursor-pointer shadow-lg",
        isActive ? "opacity-100" : "opacity-40 hover:opacity-70"
      )}
    >
      <Image
        src={imageUrl || placeholderImage}
        alt={item.name}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 60vw"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-8 md:p-10">
        <div className="flex flex-col items-center justify-center h-full md:h-auto md:flex-row md:items-end md:justify-between w-full gap-2 md:gap-4">
          <h3 className="text-white font-sans text-5xl md:pb-5 font-medium w-full md:w-2/3 leading-tight line-clamp-2 text-center md:text-left">
            {item.name}
          </h3>
          
          <Link
            href={linkHref}
            className="text-white/90 font-medium underline underline-offset-4 hover:text-white transition-colors shrink-0 md:pb-5"
            onClick={(e) => e.stopPropagation()} 
          >
            Explore Range
          </Link>
        </div>
      </div>
    </div>
  );
}