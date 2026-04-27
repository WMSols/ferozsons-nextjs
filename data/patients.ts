export interface Condition {
  name: string;
  description: string;
  treatments: string[];
}

export const conditions: Condition[] = [
  {
    name: "Hepatitis C",
    description:
      "Hepatitis C is a liver disease caused by the hepatitis C virus (HCV). It can range from a mild illness lasting a few weeks to a serious, lifelong condition. Modern direct-acting antiviral treatments can cure more than 95% of persons with hepatitis C infection.",
    treatments: [
      "Sovaldi® (sofosbuvir)",
      "Harvoni® (ledipasvir/sofosbuvir)",
      "Epclusa® (sofosbuvir/velpatasvir)",
    ],
  },
  {
    name: "Hepatitis B",
    description:
      "Hepatitis B is a potentially life-threatening liver infection caused by the hepatitis B virus (HBV). It is a major global health problem and can cause chronic infection, putting people at high risk of death from cirrhosis and liver cancer.",
    treatments: ["Entavir® (entecavir)"],
  },
  {
    name: "Cardiovascular Disease",
    description:
      "Cardiovascular diseases are a group of disorders of the heart and blood vessels. They are the leading cause of death globally. Risk factor management through medication and lifestyle changes can significantly reduce the burden of cardiovascular disease.",
    treatments: ["Lipitor® (atorvastatin)", "Norvasc® (amlodipine)"],
  },
];
