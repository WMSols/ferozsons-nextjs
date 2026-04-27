import Link from "next/link";

const leftLinks = [
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Newsroom", href: "/newsroom" },
  { label: "Stories", href: "/stories" },
];

const rightLinks = [
  { label: "Investors", href: "/investors" },
  { label: "Careers", href: "/careers" },
];

export function MedicalTechnologiesHeader() {
  return (
    <header className="px-4 pt-4 lg:px-8 lg:pt-6">
      <div className="mx-auto flex w-full max-w-300 items-center justify-between rounded-[20px] bg-white px-4 py-3 sm:px-6 lg:px-8 lg:py-4">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1F6EC9] text-sm font-bold text-white">
            F
          </div>
          <div className="leading-tight">
            <p className="text-sm font-bold tracking-tight text-[#2a2a2a] sm:text-base">
              FEROZSONS
            </p>
            <p className="text-[8px] uppercase tracking-[0.2em] text-[#5f5f5f] sm:text-[9px]">
              Laboratories Limited
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {leftLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-[#5C85A6] hover:opacity-80"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          {rightLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-[#5C85A6] hover:opacity-80"
            >
              {link.label}
            </Link>
          ))}
          <div className="h-4 w-px bg-[#D6D6D6]" aria-hidden />
          <span className="text-[#5C85A6] text-xs" aria-hidden>
            Search
          </span>
        </div>
      </div>
    </header>
  );
}
