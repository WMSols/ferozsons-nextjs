"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FileText, Download, X } from "lucide-react";

interface ProductActionsProps {
  faqFileUrl: string | null;
  instructionsFileUrl: string | null;
  pamphletFileUrl: string | null;
}

export default function ProductActions({
  faqFileUrl,
  instructionsFileUrl,
  pamphletFileUrl,
}: ProductActionsProps) {
  // Renamed to popupMedia since it can be an image or a PDF now
  const [popupMedia, setPopupMedia] = useState<string | null>(null);

  const handleOpenPopup = (
    e: React.MouseEvent,
    mediaUrl: string | null,
    isDummyLink: boolean = false
  ) => {
    if (isDummyLink) {
      e.preventDefault();
    }
    if (mediaUrl) {
      setPopupMedia(mediaUrl);
    }
  };

  // Helper function to check if the file is a PDF
  const isPdf = (url: string) => {
    return url.toLowerCase().includes(".pdf");
  };

  return (
    <>
      <div className="rounded-3xl p-8 bg-[#3b6a9e] flex flex-col gap-4">
        <Link
          href="#"
          onClick={(e) => handleOpenPopup(e, faqFileUrl, true)}
          className="w-full rounded-full py-3 px-4 text-center text-white font-medium border border-white bg-transparent hover:bg-white/10 transition-colors"
        >
          FAQs
        </Link>

        {instructionsFileUrl ? (
          <a
            href={instructionsFileUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              // Prevent default so we open in modal instead of new tab if preferred
              // Remove e.preventDefault() if you want BOTH the popup and a new tab
              e.preventDefault();
              handleOpenPopup(e, instructionsFileUrl);
            }}
            className="flex items-center justify-center gap-2 w-full rounded-full py-3 px-4 text-center font-medium bg-white text-foreground hover:bg-gray-100 transition-colors"
          >
            <FileText className="h-4 w-4" />
            Instructions For Use
            <Download className="h-4 w-4" />
          </a>
        ) : (
          <Link
            href="#"
            onClick={(e) => handleOpenPopup(e, "/hero.jpg", true)}
            className="w-full rounded-full py-3 px-4 text-center font-medium bg-white text-foreground hover:bg-gray-100 transition-colors"
          >
            Instructions For Use
          </Link>
        )}

        {pamphletFileUrl ? (
          <a
            href={pamphletFileUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              handleOpenPopup(e, pamphletFileUrl);
            }}
            className="flex items-center justify-center gap-2 w-full rounded-full py-3 px-4 text-center font-medium bg-white text-foreground hover:bg-gray-100 transition-colors"
          >
            Product Information Pamphlet
          </a>
        ) : (
          <Link
            href="#"
            onClick={(e) => handleOpenPopup(e, "/hero.jpg", true)}
            className="w-full rounded-full py-3 px-4 text-center font-medium bg-white text-foreground hover:bg-gray-100 transition-colors"
          >
            Product Information Pamphlet
          </Link>
        )}
      </div>

      {/* Media Popup Modal */}
      {popupMedia && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 sm:p-8">
          <div className="relative flex flex-col items-center max-w-5xl w-full max-h-full">
            {/* Close Button */}
            <button
              onClick={() => setPopupMedia(null)}
              className="absolute z-10 -top-12 right-0 sm:-right-8 sm:-top-10 cursor-pointer p-2 text-white/80 hover:text-white transition-colors rounded-full"
              aria-label="Close modal"
            >
              <X className="h-8 w-8" />
            </button>

           {/* Media Container */}
            <div className="relative w-full h-[85vh] overflow-hidden rounded-2xl shadow-2xl bg-white flex items-center justify-center">
              {isPdf(popupMedia) ? (
                // Replaced iframe with object tag for better PDF handling
                <object
                  data={`${popupMedia}#toolbar=0`}
                  type="application/pdf"
                  className="w-full h-full border-none"
                >
                  {/* Fallback UI if the browser/server blocks the embed */}
                  <div className="flex flex-col items-center justify-center h-full p-8 text-center gap-4 bg-gray-50 rounded-2xl">
                    <FileText className="h-12 w-12 text-gray-400" />
                    <p className="text-gray-600 font-medium">
                      Your browser or local server is restricting the PDF preview.
                    </p>
                    <a
                      href={popupMedia}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-[#3b6a9e] text-white rounded-full font-medium hover:bg-[#2a4d75] transition-colors"
                    >
                      Open PDF in New Tab
                    </a>
                  </div>
                </object>
              ) : (
                // Image Viewer
                <Image
                  src={popupMedia}
                  alt="Popup content"
                  fill
                  className="object-contain"
                  unoptimized={popupMedia.startsWith("http")}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}