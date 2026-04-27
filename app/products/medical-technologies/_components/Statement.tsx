export function Statement() {
  return (
    <section
      className="reveal-section relative rounded-t-[36px] bg-[#2a2a2a] px-6 pb-16 z-20
      pt-[60px]
      sm:pt-[80px]
      md:pt-[100px]
      lg:pt-[120px]
      xl:pt-[140px]"
    >
      <div className="mx-auto text-center max-w-[560px] sm:max-w-[680px] md:max-w-[800px] lg:max-w-[960px]">
        <p
          className="font-kaisei font-bold tracking-normal text-[#777777]
          text-[22px] leading-[34px]
          sm:text-[28px] sm:leading-[42px]
          md:text-[34px] md:leading-[50px]
          lg:text-[42px] lg:leading-[60px]"
        >
          From{" "}
          <strong className="font-bold text-white">global innovators</strong> to{" "}
          <strong className="font-bold text-white">hospitals</strong> across
          Pakistan, we partner with leading{" "}
          <strong className="font-bold text-white">medical technology</strong>{" "}
          companies to bring advanced solutions that help healthcare
          professionals deliver{" "}
          <strong className="font-bold text-white">better care</strong>.
        </p>

        <div className="mx-auto mt-10 flex h-10 w-2 flex-col items-center justify-between">
          <span className="h-[5px] w-[5px] rounded-full bg-[#555555]" />
          <span className="h-[5px] w-[5px] rounded-full bg-[#555555]" />
          <span className="h-[5px] w-[5px] rounded-full bg-[#555555]" />
        </div>
      </div>
    </section>
  );
}
