import type React from "react";

export interface TherapeuticArea {
  id: string;
  title: string;
  desc: string;
  svg: React.ReactNode;
}

export interface Stat {
  value: string;
  label: string;
}

export interface BioCard {
  label: string;
  value: string;
  sub: string;
}

export interface FooterColumn {
  heading: string;
  links: string[];
}

export interface Blob {
  w: number;
  h: number;
  x: string;
  y: string;
  color: string;
}

export interface CounterProps {
  target: string;
}
