import type { ReactNode } from "react";

function Highlight({ children }: { children: ReactNode }) {
  return (
    <span className="mx-1 inline-block rounded-[0.7rem] bg-gradient-to-r from-[#3B73AC] to-[#182F46] px-3 py-1 text-white shadow-[0_8px_18px_rgba(53,111,171,0.35)]">
      {children}
    </span>
  );
}

export default function MessageSection() {
  return (
    <section className="pb-14 pt-12 sm:pb-20 sm:pt-16">
      <div className="container max-w-[1100px]">
        <h2 className=" mx-auto max-w-[840px] text-center font-kaisei text-[2.8rem] font-black leading-[1.2] tracking-tight text-black sm:text-[3.45rem] lg:text-6xl">
          We offer high-quality pharmaceutical products to partners
          <Highlight>worldwide</Highlight>, supported by seamless export
          operations, strategic<Highlight>collaborations</Highlight>, and a
          commitment to excellence in every market we serve.
        </h2>
      </div>
    </section>
  );
}
