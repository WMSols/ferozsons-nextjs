import React, { useState } from "react";
import { X, Briefcase, MapPin, Clock, Paperclip } from "lucide-react";
import { submitJobApplication } from "@/lib/strapi";


const JobApplicationModal = ({ isOpen, onClose, job }) => {
  // Form states
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [coverLetter, setCoverLetter] = useState("");

  // File states
  const [fileName, setFileName] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  // Submission states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFileName(file.name);
      setResumeFile(file);
    } else {
      setFileName("");
      setResumeFile(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!resumeFile) {
      setStatusMessage({ type: "error", text: "Please attach your resume." });
      return;
    }

    setIsSubmitting(true);
    setStatusMessage({ type: "", text: "" });

    try {
      await submitJobApplication({
        fullName,
        email,
        coverLetter,
        title: job.title, // <-- We now include the job title from the props!
        resume: resumeFile,
      });

      setStatusMessage({ type: "success", text: "Application submitted successfully!" });

      setTimeout(() => {
        onClose();
        setFullName("");
        setEmail("");
        setCoverLetter("");
        setFileName("");
        setResumeFile(null);
        setStatusMessage({ type: "", text: "" });
      }, 2000);

    } catch (error) {
      console.error("Submission error:", error);
      setStatusMessage({ type: "error", text: "Failed to submit. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen || !job) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50 p-4 sm:p-6">
      <div className="relative w-full max-w-2xl max-h-[90vh] rounded-xl overflow-y-scroll bg-white shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 transition-colors hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <div className="border-b border-gray-100 p-6 sm:p-8">
          <h2 className="mb-3 text-2xl font-bold text-[#0f2846]">
            {job.title}
          </h2>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <Briefcase size={16} /> {job.department}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={16} /> {job.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={16} /> {job.type}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="my-4">
              <h1 className="font-semibold">Overview</h1>
              <p className="text-muted-foreground text-sm my-1 ml-2 ">{job.overview}</p>
            </div>
            <div className="my-4">
              <h1 className="font-semibold">Responsibilites</h1>
              <p className="text-muted-foreground text-sm my-1 ml-2">
                {job.responsiblities}
              </p>
            </div>
            <div className="my-4">
              <h1 className="font-semibold">Requirements</h1>
              <p className="text-muted-foreground text-sm my-1 ml-2">
                {job.requirements}
              </p>
            </div>
            <div className="my-4">
              <h1 className="font-semibold">Skills</h1>
              <div className="flex gap-2">
                {job.skills?.split(",").map((skill: string, idx: number) => (
                  <span
                    key={idx}
                    className="text-xs rounded-full bg-blue-100 px-1.5 py-0.5 text-blue-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="my-4">
              <h1 className="font-semibold">What You'll Get</h1>
              <p className="text-muted-foreground text-sm my-1 ml-2">{job.benefits}</p>
            </div>
          </div>
        </div>

{/* ---------------------------Application Form------------------------------- */}
        <form className="p-6 sm:p-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-900">
                Full Name
              </label>
              <input
               name="fullName"
                type="text"
                placeholder="e.g, John Smith"
                className="w-full rounded-md border border-gray-300 bg-gray-50 p-3 text-sm outline-none focus:border-[#1a65a4] focus:ring-1 focus:ring-[#1a65a4]"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-900">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                placeholder="example@gmail.com"
                className="w-full rounded-md border border-gray-300 bg-gray-50 p-3 text-sm outline-none focus:border-[#1a65a4] focus:ring-1 focus:ring-[#1a65a4]"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="mb-2 block text-sm font-medium text-gray-900">
              Cover Letter ( Optional )
            </label>
            <textarea
            name="coverLetter"
              rows={4}
              placeholder="Tell us why you're a great fit for this role..."
              className="w-full rounded-md border border-gray-300 bg-gray-50 p-3 text-sm outline-none focus:border-[#1a65a4] focus:ring-1 focus:ring-[#1a65a4] resize-none"
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
            />
          </div>

          <div className="mt-6">
            <label className="mb-2 block text-sm font-medium text-gray-900">
              Resume / CV
            </label>
            <div className="relative flex cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-gray-400 bg-gray-50 p-6 transition-colors hover:bg-gray-100">
              <input
                name="files"
                type="file"
                className="absolute inset-0 cursor-pointer opacity-0"
                accept=".pdf,.doc,.docx"
                required
                onChange={handleFileChange}
              />

              {fileName ? (
                <div className="flex flex-col items-center text-[#1a65a4]">
                  <Paperclip size={24} className="mb-2" />
                  <span className="text-sm font-semibold">{fileName}</span>
                </div>
              ) : (
                <>
                  <Paperclip size={24} className="mb-2 text-gray-500" />
                  <span className="text-sm text-gray-600">
                    Click to upload or drag and drop
                  </span>
                  <span className="mt-1 text-xs text-gray-400">
                    PDF, DOCX (MAX. 5MB)
                  </span>
                </>
              )}
            </div>
          </div>

          {statusMessage.text && (
            <div className={`mt-4 text-sm ${statusMessage.type === 'error' ? 'text-red-600' : 'text-green-600'}`}>
              {statusMessage.text}
            </div>
          )}

          <div className="mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-[#1a65a4] py-3 text-center font-medium text-white transition-colors hover:bg-[#145084] disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationModal;