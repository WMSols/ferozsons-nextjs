"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { footerLinks, legalLinks } from "@/data/navigation";
import {
  fetchWebsiteUpdateDate,
  WEBSITE_UPDATE_DATE_FALLBACK,
} from "@/lib/website-update-date";

const Footer = ({ dark = false }: { dark?: boolean }) => {
  const [displayDate, setDisplayDate] = useState(WEBSITE_UPDATE_DATE_FALLBACK);

  useEffect(() => {
    fetchWebsiteUpdateDate().then(setDisplayDate);
  }, []);

  return (
    <footer
      className={`reveal-section text-navy-foreground ${dark ? "bg-black" : "bg-navy"}`}
    >
      <div className="container pt-16 ">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-5 lg:gap-x-12 lg:gap-y-10">
          {/* Logo column */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/Ferozsons-Logo-1000x250px3.webp"
                alt="Ferozsons Laboratories Limited"
                width={200}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm opacity-70 leading-relaxed">
              Committed to improving the quality of life through innovative
              healthcare solutions since 1956.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-14  gap-y-10 lg:contents">
            {footerLinks.map((column) => (
              <div key={column.title}>
                {column.title.trim() ? (
                  <h3 className="text-sm font-semibold mb-4">{column.title}</h3>
                ) : (
                  <div className="text-sm font-semibold mb-4 invisible" aria-hidden>
                    &nbsp;
                  </div>
                )}
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6  md:items-start border-t border-white/10 mt-12 pt-4">
          {/* Left Column: Copyright */}
          <div className="justify-self-start">
            <p className="text-xs opacity-50">
              © {new Date().getFullYear()} Ferozsons Laboratories Limited. All
              rights reserved.
            </p>
           
            <p className="text-xs text-muted-foreground mt-2">“In case your complaint has not been properly redressed by us, you may lodge your 
complaint with Securities and Exchange Commission of Pakistan (the “SECP”). 
However, please note that SECP will entertain only those complaints which were at first 
directly requested to be redressed by the company and the company has failed to 
redress the same. Further, the complaints that are not relevant to SECP’s regulatory 
domain/competence shall not be entertained by the SECP.</p>

            <div className="mt-6 pt-4 border-t border-white/15 flex items-center gap-3">
              {legalLinks.map((link, index) => (
                <span key={link.href} className="flex items-center gap-3">
                  {index > 0 && (
                    <span className="text-white/20" aria-hidden>
                      |
                    </span>
                  )}
                  <Link
                    href={link.href}
                    className="text-xs font-medium text-white/70 hover:text-white transition-colors underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </Link>
                </span>
              ))}
            </div>
          </div>

          {/* Center Column: SCEP and Jama-Punji logos */}
          <div className="flex gap-2 h-auto justify-self-center xs:px-0 px-2 mt-2 md:mt-0">
            <div className="h-8 xs:w-40 w-32 rounded-sm overflow-hidden">
              <a
                href="https://sdms.secp.gov.pk"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="h-full w-full aspect-auto"
                  alt="secp logo"
                  src={"/images/secp-logo.webp"}
                />
              </a>
            </div>
            <div className="h-8 xs:w-40 w-32  rounded-sm overflow-hidden">
              <a href="https://jamapunji.pk" target="_blank" rel="noreferrer">
                <img
                  className="h-full w-full aspect-auto"
                  alt="jamapunji logo"
                  src={"/images/jama-punji-logo.webp"}
                />
              </a>
            </div>
          </div>

          {/* Right Column: Contact info and Links */}
          <div className="flex flex-col gap-3 justify-self-end text-left md:text-right w-full md:w-auto">
            <p className="text-sm opacity-70 leading-relaxed">
              For any inquiries, concerns, or complaints, please contact:
              <br />
              <strong className="font-medium text-white opacity-100">
                Syed Ghausuddin Saif
              </strong>
              , Company Secretary
              <br />
              5 KM Sundar Raiwind Road, Lahore - 55150
              <br />
              Email:{" "}
              <a
                href="mailto:cs@ferozsons-labs.com"
                className="hover:text-white transition-opacity"
              >
                cs@ferozsons-labs.com
              </a>
            </p>
          </div>
        </div>
        <div className="py-6 text-sm font-light border-t border-white/10 mt-4">
          <p className="text-center">
            Designed & Developed by{" "}
            <a
              className="text-[#10B77A] font-semibold"
              href="https://www.wmsols.com/"
              target="_blank"
            >
              WMsols
            </a>
          </p>
          {/* Dynamic Date Rendered Here */}
          <p className="text-center text-xs mt-2 text-muted-foreground">
            Last date website was updated: {displayDate}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;