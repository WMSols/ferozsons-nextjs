import type { Metadata } from "next";
import GlobalPresenceClient from "./GlobalPresenceClient";

export const metadata: Metadata = {
  title: "Global Presence",
  description:
    "Delivering trusted pharmaceutical products worldwide through seamless export operations.",
};

export default function GlobalPresencePage() {
  return <GlobalPresenceClient />;
}
