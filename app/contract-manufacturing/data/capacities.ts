import type { InjectableCapacityRow, ProductionCapacityRow } from "./types";

export const productionCapacities: ProductionCapacityRow[] = [
  { form: "Tablets", capacity: "550 Million Tablets" },
  { form: "Capsules", capacity: "222 Million Capsules" },
  { form: "Dry Suspensions", capacity: "2.5 Million Bottles" },
  { form: "Ointment / Creams 15gm", capacity: "11 Million Tubes" },
  { form: "Powder Sachets", capacity: "11 Million Sachets" },
];

export const injectableCapacities: InjectableCapacityRow[] = [
  {
    form: "Liquid",
    packingType: "Vials",
    filling: "2 ML",
    dailyCapacity: 410000,
  },
  {
    form: "Liquid",
    packingType: "Vials",
    filling: "5 ML",
    dailyCapacity: 345000,
  },
  {
    form: "Liquid",
    packingType: "Vials",
    filling: "10 ML",
    dailyCapacity: 298000,
  },
  {
    form: "Liquid",
    packingType: "Vials",
    filling: "30 ML",
    dailyCapacity: 172000,
  },
  {
    form: "Liquid",
    packingType: "Ampoules",
    filling: "2 ML",
    dailyCapacity: 315000,
  },
  {
    form: "Liquid",
    packingType: "Ampoules",
    filling: "6 ML",
    dailyCapacity: 250000,
  },
  {
    form: "Liquid",
    packingType: "Ampoules",
    filling: "10 ML",
    dailyCapacity: 175000,
  },
  {
    form: "Liquid",
    packingType: "Prefilled Syringes",
    filling: "1 ML",
    dailyCapacity: 135000,
  },
  {
    form: "Liquid",
    packingType: "Cartridges",
    filling: "3 ML",
    dailyCapacity: 90000,
  },
  {
    form: "Lyophilized",
    packingType: "Vials",
    filling: "2 ML",
    dailyCapacity: 220000,
  },
  {
    form: "Lyophilized",
    packingType: "Vials",
    filling: "10 ML",
    dailyCapacity: 105000,
  },
  {
    form: "Lyophilized",
    packingType: "Vials",
    filling: "30 ML",
    dailyCapacity: 54000,
  },
];
