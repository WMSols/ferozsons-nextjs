import Image from "next/image";
import Link from "next/link";
import { CSRInvestorsCardsData } from "@/data/csrData";
import { cn } from "@/lib/utils";

export default function CSRInvestorsCards() {
  return (
    <section className="py-16 md:py-24 overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-8 space-y-20 md:space-y-32">
        {CSRInvestorsCardsData.map((card) => {
          // Check if the image should sit on the right side for desktop
          const isImageRight = card.imagePosition === "right";

          return (
            <div 
              key={card.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center"
            >
              {/* Image Container */}
              <div className={cn(
                "relative w-full aspect-[4/3] rounded-[32px] overflow-hidden shadow-sm",
                // On mobile it always sits on top (order-1), on desktop it swaps based on data
                isImageRight ? "order-1 md:order-2" : "order-1 md:order-1"
              )}>
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Text Container */}
              <div className={cn(
                "flex flex-col justify-center",
                isImageRight ? "order-2 md:order-1" : "order-2 md:order-2"
              )}>
                <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-serif font-medium text-black mb-6 md:mb-8 leading-tight">
                  {card.title}
                </h2>
                
                {/* Paragraphs Wrapper */}
                <div className="space-y-5 max-w-3xl text-black md:space-y-6 mb-8 md:mb-10">
                  {card.paragraphs.map((paragraph, idx) => (
                    <p key={idx} className=" text-sm md:text-base leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Call to Action Link */}
                <Link
                  href={card.linkHref}
                  className="text-[#3B73AC] text-sm md:text-base font-medium underline underline-offset-4 hover:text-[#294e74] transition-colors w-fit"
                >
                  {card.linkText}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}