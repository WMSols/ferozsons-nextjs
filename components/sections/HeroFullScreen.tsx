import Image from "next/image";
import { cn } from "@/lib/utils";

interface HeroFullScreenProps {
  backgroundImage: string;
  overlayClassName?: string;
  children: React.ReactNode;
  className?: string;
}

export default function HeroFullScreen({
  backgroundImage,
  overlayClassName = "bg-black/50",
  children,
  className,
}: HeroFullScreenProps) {
  return (
    <section
      className={cn(
        "relative w-full min-h-[100vh] flex flex-col items-center justify-center",
        className,
      )}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className={cn("absolute inset-0 z-[1]", overlayClassName)} />
      </div>
      <div className="relative z-10 w-full">{children}</div>
    </section>
  );
}
