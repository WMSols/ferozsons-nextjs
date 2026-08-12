import SectionWrapper from "@/components/shared/SectionWrapper";

export default function IntroSection() {
  return (
    <SectionWrapper className="py-16 md:py-24 mt-32 text-black ">
      <div className="mx-auto w-full max-w-5xl md:pl-16 flex md:flex-row flex-col gap-4 md:gap-16 items-start">
        <p className="text-xs md:text-sm font-normal uppercase mt-6">
          Partnering for Better Health
        </p>

        <p className="max-w-3xl font-bold font-kaisei text-3xl sm:text-5xl lg:text-[3.4rem] leading-[1.2] ">
          We believe meaningful<br className="hidden md:block"/> healthcare progress is<br className="hidden md:block"/>  achieved through<br className="hidden md:block"/>  trusted
          partnerships and<br className="hidden md:block"/>  a shared commitment to<br className="hidden md:block"/>  patient care.
        </p>
      </div>
    </SectionWrapper>
  );
}
