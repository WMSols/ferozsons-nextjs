import type { Metadata } from "next";
import { Hero } from "./_components/Hero";
import { Statement } from "./_components/Statement";
import { TrustedPartners } from "./_components/TrustedPartners";
import { PartnerDetails } from "./_components/PartnerDetails";
import { SmoothScroll } from "./_components/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Medical Technologies",
  description:
    "From global innovators to hospitals across Pakistan, Ferozsons brings advanced medical technologies to healthcare professionals.",
};

export default function MedicalTechnologiesPage() {
  return (
    <div className="bg-[#1a1a1a] text-white">
      <SmoothScroll />
      <Navbar />
      <Hero />
      <Statement />
      <TrustedPartners />
      <PartnerDetails />
      <Footer dark={true} />
    </div>
  );
}
