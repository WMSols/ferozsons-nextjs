"use client";

import React, { useState } from "react";
import { Briefcase, MapPin, Clock } from "lucide-react";
import JobApplicationForm from "./JobApplicationForm"; // Ensure this import path matches your project structure

interface PositionCardProps {
  jobId: number | string;
  title: string;
  domain: string;
  location: string;
  type: string;
  overview: string;
  requirements: string;
  responsiblities: string;
  benefits: string;
  skills: string;
}

export default function PositionCard({
  jobId,
  title,
  domain,
  location,
  type,
  overview,
  requirements,
  responsiblities,
  benefits,
  skills,
}: PositionCardProps) {
  // State to control the visibility of the application form modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Bundle the job details to pass to the modal
  const jobData : PositionCardProps = {
    jobId,
    title,
    domain,
    location,
    type,
    overview,
    requirements,
    responsiblities,
    benefits,
    skills,
  };

  return (
    <>
      {/* The Job Position Card */}
      <div className="flex flex-col items-start border border-black/30  justify-between gap-12 rounded-3xl bg-white py-16 px-8 md:py-24 md:px-20 sm:flex-row sm:items-center">
        <div className="flex flex-col">
          <div className="flex justify-between w-full md:flex-row flex-col gap-4">
            <h3 className=" text-3xl font-bold text-[#3B73AC]">{title}</h3>
                <button
          onClick={() => setIsModalOpen(true)}
          className="whitespace-nowrap rounded-full bg-[#1a65a4] h-12 px-8 hidden sm:inline-flex items-center justify-center text-base font-medium text-white transition-colors hover:bg-[#145084]"
        >
          Apply Now
        </button>
            </div>
          <div className="flex flex-wrap items-center gap-4 text-lg  mt-4 text-gray-600">
           { domain &&
             <span className="flex items-center gap-1.5">
              <Briefcase size={16} className="text-gray-400" /> {domain}
            </span>
           }
            <span className="flex items-center gap-1.5">
              <MapPin size={16} className="text-gray-400" /> {location}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={16} className="text-gray-400" /> {type}
            </span>
          </div>
          <p className=" mt-8 text-xl line-clamp-4">{overview}</p>
          {/* Skills */}
          {/* <div className="flex gap-2 sm:flex-row flex-col">
            {skills?.split(",").map((skill, idx) => (
              <span
                key={idx}
                className="text-xs rounded-full bg-blue-100 px-1.5 py-0.5 text-blue-600"
              >
                {skill}
              </span>
            ))}
          </div> */}
                 <button
          onClick={() => setIsModalOpen(true)}
          className="whitespace-nowrap rounded-full bg-[#1a65a4] h-12 px-8 mt-4 sm:hidden inline-flex items-center justify-center text-base font-medium text-white transition-colors hover:bg-[#145084]"
        >
          Apply Now
        </button>
        </div>

      
      </div>

      {/* The Application Form Modal */}
      <JobApplicationForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        job={jobData}
      />
    </>
  );
}
