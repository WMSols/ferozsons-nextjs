import { cn } from "@/lib/utils";

interface BrandLockupProps {
  variant?: "light" | "dark";
  size?: "sm" | "lg";
  className?: string;
}

export default function BrandLockup({
  variant = "light",
  size = "lg",
  className,
}: BrandLockupProps) {
  const suffix = variant === "light" ? "light" : "dark";

  return (
    <div className={cn("flex items-center gap-4", className)}>
      <img
        src="ferozsons-f-white.png"
        alt="Ferozsons logo"
        className={cn("shrink-0", size === "lg" ? "h-20" : "h-16")}
      />
      <img
        src="people-trust-us.png"
        alt="People Trust Us"
        className={cn("shrink-0", size === "lg" ? "h-24 md:h-28" : "h-16 md:h-20")}
      />
    </div>
  );
}
