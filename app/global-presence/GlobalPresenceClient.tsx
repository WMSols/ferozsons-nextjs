"use client";

import CTASection from "./components/CTASection";
import GlobalExports from "./components/GlobalExports";
import HeroSection from "./components/HeroSection";
import MessageSection from "./components/MessageSection";

export default function GlobalPresenceClient() {
  return (
    <div className="mt-[-6.6rem] bg-[#e8e8e8]">
      <HeroSection />
      <GlobalExports />
      <MessageSection />
      <section id="global-presence-cta">
        <CTASection />
      </section>
    </div>
  );
}
