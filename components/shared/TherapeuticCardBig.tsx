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
      className="relative w-full h-[580px] md:h-[540px] lg:h-[580px] xl:h-[640px] rounded-[3rem] overflow-hidden transition-all duration-700 ease-out cursor-pointer shadow-lg opacity-100"
    >
      <Image
        src={imageUrl || placeholderImage}
        alt={item.name}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 60vw, 52vw"
      />
      
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t to-transparent flex flex-col justify-end p-5 md:p-10",
          isActive ? "from-black/90 via-black/30" : "from-black/25 via-transparent"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full md:h-auto md:flex-row md:items-end md:justify-between w-full gap-2 md:gap-4">
          <h3 className="text-white font-sans text-3xl md:text-5xl md:pb-5 font-medium w-full md:w-2/3 leading-tight line-clamp-2 text-center md:text-left">
            {item.name}
          </h3>
          
          <Link
            href={linkHref}
            className="text-white/90 text-sm md:text-base font-medium underline underline-offset-4 hover:text-white transition-colors shrink-0 md:pb-5"
            onClick={(e) => e.stopPropagation()} 
          >
            Explore Range
          </Link>
        </div>
      </div>
    </div>
  );
}