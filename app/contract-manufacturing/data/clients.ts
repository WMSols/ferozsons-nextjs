import type { CurrentClient, LegacyClient } from "./types";

export const currentClients: CurrentClient[] = [
  {
    name: "Chiesi",
    country: "Italy",
    initial: "C",
    color: "#c0392b",
    image: "/images/contract-manufacturing/chiesi.png",
  },
  {
    name: "LCI",
    country: "Lucky Core Industries",
    initial: "L",
    color: "#1a6eb5",
    image: "/images/contract-manufacturing/lucky.png",
  },
  {
    name: "Hoechst Pakistan",
    country: "Pakistan",
    initial: "H",
    color: "#2a7f62",
    image: "/images/contract-manufacturing/hoechst.png",
  },
];

export const legacyClients: LegacyClient[] = [
  "Boots, Nottingham UK",
  "Grunenthal, Germany",
  "Lakeside Laboratories (Subsidiary of Colgate Palmolive)",
  "Procter & Gamble",
];
