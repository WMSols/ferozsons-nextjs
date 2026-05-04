import { Handshake } from "lucide-react";

export default function CTASection() {
  return (
    <section className="pb-20 sm:pb-24 lg:pb-32  pt-25 ">
      <div className="container max-w-[1320px]">
        <div className="rounded-[2.15rem] bg-[#427bb8] px-8 py-10 text-white shadow-[0_22px_50px_rgba(27,58,96,0.24)] sm:px-12 sm:py-14 lg:rounded-[2.6rem] lg:px-14 lg:py-16">
          <div className="max-w-[740px]">
            <h2 className="font-kaisei text-[2.6rem] font-bold leading-[1.13] sm:text-[2.8rem]">
              Start a Conversation with Our Exports Team
            </h2>
            <p className="mt-6 max-w-[630px] text-xl leading-[1.4] text-white/90 sm:text-[1.35rem]">
              Our exports team is available to support strategic collaborations
              and ensure seamless access to our products worldwide.
            </p>
          </div>

          <div className="mt-12 inline-flex max-w-full items-center gap-4 rounded-[1.9rem] bg-white px-6 py-6 text-[#151515] shadow-[0_12px_30px_rgba(0,0,0,0.12)] sm:px-8 sm:py-7">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f3f4f6] text-[#121212]">
              <Handshake aria-hidden className="h-7 w-7" />
            </div>
            <div>
              <p className="text-[1.25rem] font-semibold leading-none">
                Export Services
              </p>
              <a
                href="mailto:export@ferozsons-labs.com"
                className="mt-2 block text-sm leading-none text-[#4d4d4d] hover:text-[#2f80c7]"
              >
                export@ferozsons-labs.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
