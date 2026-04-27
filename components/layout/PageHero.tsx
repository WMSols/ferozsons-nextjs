import Link from "next/link";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
  backgroundImage?: string;
}

const PageHero = ({
  title,
  subtitle,
  breadcrumbs,
  backgroundImage,
}: PageHeroProps) => {
  return (
    <section
      className={` -mt-[6.6rem] relative py-16 md:py-24 overflow-hidden ${
        backgroundImage ? "text-white min-h-screen flex items-center" : "bg-transparent"
      }`}
    >
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      )}
      <div className="container relative z-10">
        {/* {breadcrumbs && breadcrumbs.length > 0 && (
          <Breadcrumb className={`mb-6 ${backgroundImage ? "text-white/80" : ""}`}>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/" className={backgroundImage ? "text-white/80 hover:text-white" : ""}>Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="contents">
                  <BreadcrumbSeparator className={backgroundImage ? "text-white/40" : ""} />
                  <BreadcrumbItem>
                    {crumb.href ? (
                      <BreadcrumbLink asChild>
                        <Link href={crumb.href} className={backgroundImage ? "text-white/80 hover:text-white" : ""}>{crumb.label}</Link>
                      </BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage className={backgroundImage ? "text-white" : ""}>{crumb.label}</BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                </span>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        )} */}
        <h1 className={`text-3xl md:text-5xl lg:text-6xl font-bold ${backgroundImage ? "text-white" : "text-foreground"}`}>
          {title}
        </h1>
        {subtitle && (
          <p className={`mt-6 text-lg md:text-xl max-w-3xl leading-relaxed ${backgroundImage ? "text-white/90" : "text-muted-foreground"}`}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
