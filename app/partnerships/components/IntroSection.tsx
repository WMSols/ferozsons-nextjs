import SectionWrapper from "@/components/shared/SectionWrapper";

export default function IntroSection() {
  return (
    <SectionWrapper className="py-16 md:py-24 bg-muted/30">
      <div className="mx-auto w-full max-w-5xl md:pl-16 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 md:gap-14 items-start">
        <p className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-foreground/70 md:pt-2">
          Partnering for Better Health
        </p>

        <p className="max-w-[18ch] font-kaisei text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.05] text-foreground">
          We believe meaningful healthcare progress is achieved through trusted
          partnerships and a shared commitment to patient care.
        </p>
      </div>
    </SectionWrapper>
  );
}
