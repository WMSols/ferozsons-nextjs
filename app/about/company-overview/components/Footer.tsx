"use client";

import React from "react";
import type { FooterColumn } from "./types";

const Footer: React.FC = () => {
  const columns: FooterColumn[] = [
    {
      heading: "Connect",
      links: ["Investors", "Media Kit", "Media Relations"],
    },
    { heading: "Brands", links: ["Ferozsons", "BF Biosciences"] },
  ];

  return (
    <footer className="bg-[#07163a] py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 border-b border-white/8 pb-12 mb-10">
          <div className="md:col-span-2">
            <div
              className="text-blue-200 font-black text-2xl mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Ferozsons
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Advancing healthcare through science since 1954. Listed on the
              Pakistan Stock Exchange.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-white font-semibold text-xs tracking-[0.3em] uppercase mb-4">
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-white/40 hover:text-blue-300 text-sm transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-xs">
            © 2025 Ferozsons Laboratories Limited. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Terms", "Privacy Policy", "Quality & Safety"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-white/25 hover:text-white/60 text-xs transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
