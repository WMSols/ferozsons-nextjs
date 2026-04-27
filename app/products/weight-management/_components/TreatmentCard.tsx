import Image from "next/image";
import Link from "next/link";

interface TreatmentCardProps {
  title: string;
  description: string;
  imageSrc: string;
  linkHref: string;
  variant: "gradient" | "light";
}

const variantStyles = {
  gradient: {
    card: "bg-gradient-to-b from-[#2C6CB0] via-[#6A57B6] to-[#B23A9A] text-white",
    description: "text-white/80",
    link: "bg-white/20 text-white backdrop-blur hover:bg-white/25",
  },
  light: {
    card: "bg-[#F2E9F2] text-blue-950",
    description: "text-blue-950/70",
    link: "bg-[#7B3FB0] text-white hover:bg-[#6A37A0]",
  },
} as const;

export default function TreatmentCard({
  title,
  description,
  imageSrc,
  linkHref,
  variant,
}: TreatmentCardProps) {
  const styles = variantStyles[variant];

  return (
    <article
      className={`relative flex h-full flex-col overflow-hidden rounded-[28px] p-7 shadow-sm ${styles.card}`}
    >
      <div className="relative z-10">
        <h3 className="text-[16px] font-semibold">{title}</h3>
        <p className={`mt-2 text-[13px] leading-relaxed ${styles.description}`}>
          {description}
        </p>
      </div>

      <div className="relative mt-auto aspect-[4/3] w-full pt-6">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-contain"
        />
      </div>

      <div className="mt-6">
        <Link
          href={linkHref}
          className={`inline-flex h-10 w-full items-center justify-center rounded-full px-5 text-sm font-semibold transition-colors ${styles.link}`}
        >
          View Full Range
        </Link>
      </div>
    </article>
  );
}
