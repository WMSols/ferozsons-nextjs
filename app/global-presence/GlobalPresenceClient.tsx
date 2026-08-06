"use client";

import PageHero from "@/components/layout/PageHero";
import CTASection from "./components/CTASection";
import GlobalExports from "./components/GlobalExports";
import MessageSection from "./components/MessageSection";
import GlobalTrustCard from "./components/GlobalTrustCard";

export default function GlobalPresenceClient() {
  return (
    <div className="bg-[#F7F7F7]">
  <PageHero
  backgroundImage="/global-presence/GP-Hero.webp"
  title="Global Presence"
  />
        <GlobalExports />
        <GlobalTrustCard/>
      <MessageSection />
      <section id="global-presence-cta">
        <CTASection />
      </section>
    </div>
  );
}
