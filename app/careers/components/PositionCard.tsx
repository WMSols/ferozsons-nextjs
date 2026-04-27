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
      <div className="flex flex-col items-start border  justify-between gap-12 rounded-xl bg-[#f8f9fb] py-12 px-6 sm:flex-row sm:items-center">
        <div className="flex flex-col">
          <h3 className="mb-2 text-xl font-bold text-[#0f2846]">{title}</h3>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <Briefcase size={16} className="text-gray-400" /> {domain}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={16} className="text-gray-400" /> {location}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={16} className="text-gray-400" /> {type}
            </span>
          </div>
          <p className="text-muted-foreground text-sm my-2 line-clamp-4">{overview}</p>
          {/* Skills */}
          <div className="flex gap-2">
            {skills?.split(",").map((skill, idx) => (
              <span
                key={idx}
                className="text-xs rounded-full bg-blue-100 px-1.5 py-0.5 text-blue-600"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="whitespace-nowrap rounded-full bg-[#1a65a4] px-6 py-2.5 font-medium text-white transition-colors hover:bg-[#145084]"
        >
          Apply Now
        </button>
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
