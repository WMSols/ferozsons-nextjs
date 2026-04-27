export interface Product {
  slug: string;
  name: string;
  category: string;
  dosage: string;
  description: string;
  sizes: string[];
  image?: string;
  commonlyPrescribed?: boolean;
}

export const productCategories = [
  "Anti-Infectives",
  "Cardiovascular",
  "Gastroenterology",
  "Hepatology",
  "Neurology",
  "Oncology",
  "Pain Management",
  "Respiratory",
];

export const products: Product[] = [
  {
    slug: "sovaldi",
    name: "Sovaldi®",
    category: "Hepatology",
    dosage: "400mg Tablets",
    description: "Sovaldi (sofosbuvir) is a prescription medicine used to treat chronic hepatitis C infection in adults. It is a nucleotide analogue inhibitor that works by blocking the hepatitis C virus from multiplying in the body.",
    sizes: ["28 Tablets"],
    commonlyPrescribed: true,
  },
  {
    slug: "harvoni",
    name: "Harvoni®",
    category: "Hepatology",
    dosage: "90mg/400mg Tablets",
    description: "Harvoni is a combination of ledipasvir and sofosbuvir used for the treatment of chronic hepatitis C virus (HCV) genotype 1 infection in adults.",
    sizes: ["28 Tablets"],
    commonlyPrescribed: true,
  },
  {
    slug: "epclusa",
    name: "Epclusa®",
    category: "Hepatology",
    dosage: "400mg/100mg Tablets",
    description: "Epclusa is a fixed-dose combination of sofosbuvir and velpatasvir indicated for the treatment of adult patients with chronic hepatitis C virus infection.",
    sizes: ["28 Tablets"],
    commonlyPrescribed: true,
  },
  {
    slug: "entavir",
    name: "Entavir®",
    category: "Hepatology",
    dosage: "0.5mg / 1mg Tablets",
    description: "Entavir (entecavir) is indicated for the treatment of chronic hepatitis B virus infection in adults with evidence of active viral replication.",
    sizes: ["30 Tablets"],
    commonlyPrescribed: true,
  },
  {
    slug: "lipitor",
    name: "Lipitor®",
    category: "Cardiovascular",
    dosage: "10mg / 20mg / 40mg Tablets",
    description: "Lipitor (atorvastatin calcium) reduces levels of LDL cholesterol and triglycerides in the blood while raising HDL cholesterol levels.",
    sizes: ["10 Tablets", "30 Tablets"],
    commonlyPrescribed: true,
  },
  {
    slug: "norvasc",
    name: "Norvasc®",
    category: "Cardiovascular",
    dosage: "5mg / 10mg Tablets",
    description: "Norvasc (amlodipine besylate) is a calcium channel blocker used to treat high blood pressure and coronary artery disease.",
    sizes: ["20 Tablets"],
    commonlyPrescribed: true,
  },
  {
    slug: "brufen",
    name: "Brufen®",
    category: "Pain Management",
    dosage: "200mg / 400mg / 600mg Tablets",
    description: "Brufen (ibuprofen) is a nonsteroidal anti-inflammatory drug used for the treatment of mild to moderate pain, inflammation, and fever.",
    sizes: ["20 Tablets", "30 Tablets"],
    commonlyPrescribed: true,
  },
  {
    slug: "ceclor",
    name: "Ceclor®",
    category: "Anti-Infectives",
    dosage: "250mg / 500mg Capsules",
    description: "Ceclor (cefaclor) is a second-generation cephalosporin antibiotic used in the treatment of susceptible bacterial infections.",
    sizes: ["12 Capsules", "100ml Suspension"],
  },
  {
    slug: "aricept",
    name: "Aricept®",
    category: "Neurology",
    dosage: "5mg / 10mg Tablets",
    description: "Aricept (donepezil) is a cholinesterase inhibitor used to treat dementia of the Alzheimer's type.",
    sizes: ["14 Tablets"],
  },
  {
    slug: "losec",
    name: "Losec®",
    category: "Gastroenterology",
    dosage: "20mg / 40mg Capsules",
    description: "Losec (omeprazole) is a proton pump inhibitor that decreases the amount of acid produced in the stomach.",
    sizes: ["14 Capsules", "28 Capsules"],
    commonlyPrescribed: true,
  },
  {
    slug: "zithromax",
    name: "Zithromax®",
    category: "Anti-Infectives",
    dosage: "250mg / 500mg Tablets",
    description: "Zithromax (azithromycin) is a macrolide antibiotic used for the treatment of a wide variety of bacterial infections.",
    sizes: ["6 Tablets", "3 Tablets"],
    commonlyPrescribed: true,
  },
  {
    slug: "xeloda",
    name: "Xeloda®",
    category: "Oncology",
    dosage: "500mg Tablets",
    description: "Xeloda (capecitabine) is used in the treatment of metastatic breast cancer and colorectal cancer.",
    sizes: ["120 Tablets"],
  },
];
