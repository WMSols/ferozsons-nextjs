import type { ReactNode } from "react";

export interface FacilityCard {
  title: string;
  body: string;
  icon: ReactNode;
}

export interface StatCard {
  value: number;
  suffix: string;
  label: string;
  accent: boolean;
  icon: ReactNode;
}

export interface CurrentClient {
  name: string;
  country: string;
  initial: string;
  color: string;
  image: string;
}

export type LegacyClient = string;

export interface ProductionCapacityRow {
  form: string;
  capacity: string;
}

export interface InjectableCapacityRow {
  form: string;
  packingType: string;
  filling: string;
  dailyCapacity: number;
}
