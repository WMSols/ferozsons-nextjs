import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  as?: "section" | "div";
  id?: string;
}

export default function SectionWrapper({
  children,
  className,
  containerClassName,
  as: Tag = "section",
  id,
}: SectionWrapperProps) {
  return (
    <Tag id={id} className={cn("py-16 md:py-20", className)}>
      <div className={cn("container", containerClassName)}>{children}</div>
    </Tag>
  );
}
