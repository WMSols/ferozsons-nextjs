import Link from "next/link";

const columns = [
  [
    { label: "About Us", href: "/about", active: false },
    { label: "Products", href: "/products", active: false },
    { label: "Partnerships", href: "/partnerships", active: true },
    { label: "Investors", href: "/investors", active: true },
  ],
  [
    { label: "Newsroom", href: "/newsroom", active: false },
    { label: "Stories", href: "/stories", active: false },
    { label: "Careers", href: "/careers", active: false },
    { label: "Patients", href: "/patients", active: false },
  ],
  [
    { label: "Physicians", href: "/physicians", active: false },
    { label: "Creating Impact", href: "/csr", active: false },
    { label: "Press & Media", href: "/press-media", active: false },
    { label: "Board of Directors", href: "/board-of-directors", active: false },
  ],
];

export function MedicalTechnologiesFooter() {
  return (
    <footer className="bg-[#111111] px-4 py-14 sm:py-16">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 md:grid-cols-4">
        <div className="flex items-start">
          <Link href="/" className="inline-flex items-center gap-3">
            {/* Replace with <Image src={...} alt="Ferozsons footer mark" width={28} height={28} className="rounded-full" /> */}
            <div className="h-7 w-7 rounded-full bg-[#1F6EC9]" aria-hidden />
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2f2f2f]">
              FEROZSONS
            </span>
          </Link>
        </div>

        {columns.map((links, index) => (
          <ul key={index} className="space-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-[13px] transition-colors hover:text-white ${
                    link.active ? "text-white" : "text-[#888888]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </footer>
  );
}
