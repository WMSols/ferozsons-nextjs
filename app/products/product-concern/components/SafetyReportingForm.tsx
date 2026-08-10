"use client";

import { useState } from "react";

interface SafetyFormData {
  // Patient Info
  initials: string;
  gender: string;
  age: string;
  // Drug Details
  drugName: string;
  indication: string;
  batchLot: string;
  doseFrequency: string;
  dosage: string;
  drugStartDate: string;
  drugEndDate: string;
  isOngoing: boolean;
  // Adverse Event
  aeStartDate: string;
  aeEndDate: string;
  aeDetails: string;
  aeManagement: string;
  // Seriousness
  seriousnessDate: string;
  causeOfEvent: string;
  seriousness: string;
  // Outcome
  outcome: string;
  // Pregnancy Exposure
  pregExposureStart: string;
  pregExposureEnd: string;
  // Reporter Info
  reporterName: string;
  reporterProfession: string;
  reporterPhone: string;
  reporterEmail: string;
}

export default function SafetyReportingForm() {
  const [activeTab, setActiveTab] = useState<"patient" | "hcp">("hcp");
  
  const [formData, setFormData] = useState<SafetyFormData>({
    initials: "",
    gender: "",
    age: "",
    drugName: "",
    indication: "",
    batchLot: "",
    doseFrequency: "",
    dosage: "",
    drugStartDate: "",
    drugEndDate: "",
    isOngoing: false,
    aeStartDate: "",
    aeEndDate: "",
    aeDetails: "",
    aeManagement: "",
    seriousnessDate: "",
    causeOfEvent: "",
    seriousness: "Life threatening (immediate risk of death due to an event)",
    outcome: "Not resolved",
    pregExposureStart: "",
    pregExposureEnd: "",
    reporterName: "",
    reporterProfession: "",
    reporterPhone: "",
    reporterEmail: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting Safety Report:", { reporterType: activeTab, ...formData });
  };

  // Shared input styling to match the light blue aesthetic
  const inputBase = "w-full bg-[#EAF5FC] border border-transparent rounded-lg px-4 py-3 focus:outline-none focus:border-[#A5C3DF] focus:ring-2 focus:ring-[#3B73AC]/20 text-foreground transition-all";

  return (
    <section className="py-16 md:py-24 bg-[#F8F9FA]">
      <div className="container mx-auto px-4 max-w-6xl flex flex-col items-center">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-foreground">
          Safety Reporting Form
        </h2>

        {/* Visual Toggle */}
        <div className="bg-black rounded-[2rem] p-1.5 flex w-full max-w-[500px] mb-16 md:mb-20 shadow-lg">
          <button
            type="button"
            onClick={() => setActiveTab("patient")}
            className={`flex-1 p-6 rounded-[1.75rem] text-center transition-all duration-300 font-bold ${
              activeTab === "patient"
                ? "bg-[#3B73AC] text-white shadow-md"
                : "text-white hover:bg-white/10"
            }`}
          >
            Patient
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("hcp")}
            className={`flex-1 p-6 flex items-center justify-center rounded-[1.75rem] text-center transition-all duration-300 font-bold leading-tight ${
              activeTab === "hcp"
                ? "bg-[#3B73AC] text-white shadow-md"
                : "text-white hover:bg-white/10"
            }`}
          >
            Healthcare <br className="hidden sm:block" /> Professional
          </button>
        </div>

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-10">
              
              {/* Patient Information Section */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground/80 mb-6">
                  Patient Information
                </h3>
                <input
                  type="text"
                  name="initials"
                  value={formData.initials}
                  onChange={handleInputChange}
                  placeholder="Initials"
                  className={`${inputBase} mb-6`}
                />
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                  <span className="font-bold text-foreground">Gender:</span>
                  <div className="flex flex-col gap-3">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleInputChange} className="w-4 h-4 accent-[#3B73AC]" />
                      <span className="text-sm">Male</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleInputChange} className="w-4 h-4 accent-[#3B73AC]" />
                      <span className="text-sm">Female</span>
                    </label>
                  </div>
                  <div className="flex items-center gap-4 ml-auto sm:ml-4">
                    <input
                      type="text"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      placeholder="Age"
                      className="w-24 bg-[#EAF5FC] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3B73AC]/20 text-center"
                    />
                    <span className="font-bold text-foreground">Years</span>
                  </div>
                </div>
              </div>

              {/* Suspected Drug Details Section */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground/80 mb-6">
                  Suspected Drug Details
                </h3>
                <div className="flex flex-col gap-5">
                  <input type="text" name="drugName" value={formData.drugName} onChange={handleInputChange} placeholder="Drug Name" className={inputBase} />
                  <input type="text" name="indication" value={formData.indication} onChange={handleInputChange} placeholder="Name of Disease for which Drug was used (Indication)" className={inputBase} />
                  <input type="text" name="batchLot" value={formData.batchLot} onChange={handleInputChange} placeholder="Batch / lot Number" className={`${inputBase} sm:w-1/2`} />
                  <input type="text" name="doseFrequency" value={formData.doseFrequency} onChange={handleInputChange} placeholder="Dose & Frequency" className={inputBase} />
                  <input type="text" name="dosage" value={formData.dosage} onChange={handleInputChange} placeholder="Dosage: Table, Capsule, Syrup, Injection, Sachet, Topical, Others" className={inputBase} />
                  
                  <p className="text-sm text-foreground/80 mt-2">
                    Manufacturer/Marketer (In case of imported products): Ferozsons Laboratories Limited
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 mt-2">
                    <input type="date" name="drugStartDate" value={formData.drugStartDate} onChange={handleInputChange} className="bg-[#EAF5FC] rounded-lg px-4 py-2.5 focus:outline-none text-foreground/70 min-w-[160px]" />
                    <input type="date" name="drugEndDate" value={formData.drugEndDate} onChange={handleInputChange} className="bg-[#EAF5FC] rounded-lg px-4 py-2.5 focus:outline-none text-foreground/70 min-w-[160px]" />
                    <label className="flex items-center gap-2 font-bold cursor-pointer ml-2">
                      <input type="checkbox" name="isOngoing" checked={formData.isOngoing} onChange={handleInputChange} className="w-4 h-4 accent-[#3B73AC]" />
                      OR Ongoing
                    </label>
                  </div>
                </div>
              </div>

              {/* Adverse Event Details Section */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground/80 mb-6">
                  Adverse Event Details
                </h3>
                <div className="flex flex-wrap gap-4 mb-5">
                  <input type="date" name="aeStartDate" value={formData.aeStartDate} onChange={handleInputChange} className="flex-1 bg-[#EAF5FC] rounded-lg px-4 py-2.5 focus:outline-none text-foreground/70 min-w-[160px]" />
                  <input type="date" name="aeEndDate" value={formData.aeEndDate} onChange={handleInputChange} className="flex-1 bg-[#EAF5FC] rounded-lg px-4 py-2.5 focus:outline-none text-foreground/70 min-w-[160px]" />
                </div>
                <div className="flex flex-col gap-5">
                  <textarea name="aeDetails" value={formData.aeDetails} onChange={handleInputChange} placeholder="Adverse Event Details * (provide diagnosis if known)" rows={4} className={`${inputBase} resize-y`} required />
                  <textarea name="aeManagement" value={formData.aeManagement} onChange={handleInputChange} placeholder="Management of Events" rows={3} className={`${inputBase} resize-y`} />
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col gap-10">
              
              {/* Seriousness Section */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground/80 mb-6">
                  Seriousness
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <input type="date" name="seriousnessDate" value={formData.seriousnessDate} onChange={handleInputChange} className="sm:w-1/3 bg-[#EAF5FC] rounded-lg px-4 py-3 focus:outline-none text-foreground/70" />
                  <input type="text" name="causeOfEvent" value={formData.causeOfEvent} onChange={handleInputChange} placeholder="Cause of Event" className="sm:w-2/3 bg-[#EAF5FC] rounded-lg px-4 py-3 focus:outline-none" />
                </div>
                <div className="flex flex-col gap-3">
                  {[
                    "Life threatening (immediate risk of death due to an event)",
                    "Initial / prolonged hospitalization",
                    "Congenital anomaly / birth defects",
                    "Persistent / significant disability",
                    "Medically significant (important medical events that may jeopardize the patient and may require medical / surgical intervention to prevent the other outcome)",
                    "Non Serious",
                  ].map((option) => (
                    <label key={option} className="flex items-start gap-3 cursor-pointer">
                      <input type="radio" name="seriousness" value={option} checked={formData.seriousness === option} onChange={handleInputChange} className="w-4 h-4 mt-1 accent-[#3B73AC] shrink-0" />
                      <span className="text-sm text-foreground/80 leading-relaxed">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Outcome Section */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground/80 mb-6">
                  Outcome
                </h3>
                <div className="flex flex-col gap-3">
                  {[
                    "Not resolved",
                    "Resolved",
                    "Resolved with sequelae",
                    "Resolving",
                    "Unknown",
                    "Death",
                  ].map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer">
                      <input type="radio" name="outcome" value={option} checked={formData.outcome === option} onChange={handleInputChange} className="w-4 h-4 accent-[#3B73AC]" />
                      <span className="text-sm text-foreground/80">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Pregnancy Exposure Section */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground/80 mb-6">
                  Pregnancy Exposure
                </h3>
                <div className="flex flex-wrap gap-4">
                  <input type="date" name="pregExposureStart" value={formData.pregExposureStart} onChange={handleInputChange} className="flex-1 bg-[#EAF5FC] rounded-lg px-4 py-3 focus:outline-none text-foreground/70 min-w-[160px]" />
                  <input type="date" name="pregExposureEnd" value={formData.pregExposureEnd} onChange={handleInputChange} className="flex-1 bg-[#EAF5FC] rounded-lg px-4 py-3 focus:outline-none text-foreground/70 min-w-[160px]" />
                </div>
              </div>

              {/* Reporter Information Section */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground/80 mb-6">
                  Reporter Information
                </h3>
                <div className="flex flex-col gap-5">
                  <input type="text" name="reporterName" value={formData.reporterName} onChange={handleInputChange} placeholder="Name" className={inputBase} />
                  <div className="flex flex-col sm:flex-row gap-5">
                    <input type="text" name="reporterProfession" value={formData.reporterProfession} onChange={handleInputChange} placeholder="Profession / Qualification" className={`${inputBase} sm:w-1/2`} />
                    <input type="tel" name="reporterPhone" value={formData.reporterPhone} onChange={handleInputChange} placeholder="Telephone number" className={`${inputBase} sm:w-1/2`} />
                  </div>
                  <input type="email" name="reporterEmail" value={formData.reporterEmail} onChange={handleInputChange} placeholder="Email" className={inputBase} />
                </div>
              </div>
              
              {/* Submit Button */}
              <div className="mt-4">
               <button
              type="submit"
              className="bg-[#3B73AC] hover:bg-[#294e74] text-white font-medium px-10 py-3.5 rounded-full transition-colors shadow-sm hover:shadow-md"
            >
              Submit Report
            </button>
              </div>

            </div>
          </div>
        </form>

      </div>
    </section>
  );
}