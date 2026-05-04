import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/data/navigation";

const Footer = ({ dark = false }: { dark?: boolean }) => {
  return (
    <footer
      className={`reveal-section text-navy-foreground ${dark ? "bg-black" : "bg-navy"}`}
    >
      <div className="container pt-16 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo column */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/Ferozsons-Logo-1000x250px3.png"
                alt="Ferozsons Laboratories Limited"
                width={200}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm opacity-70 leading-relaxed">
              Committed to improving the quality of life through innovative
              healthcare solutions since 1954.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([key, links]) => (
            <div key={key}>
              <ul className="space-y-3">
                {links.map((link) => (
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start border-t border-white/10 mt-12 pt-4">

          {/* Left Column: Copyright */}
          <div className="justify-self-start">
            <p className="text-xs opacity-50">
              © {new Date().getFullYear()} Ferozsons Laboratories Limited. All
              rights reserved.
            </p>
          </div>

          {/* Center Column: SCEP and Jama-Punji logos */}
          <div className="flex gap-2 h-auto justify-self-center mt-2 md:mt-0">
            <div className="h-8 w-40 rounded-sm overflow-hidden">
              <a href="https://sdms.secp.gov.pk" target="_blank" rel="noreferrer">
                <img
                  className="h-full w-full"
                  alt="secp logo"
                  src={"/images/secp-logo.jpg"}
                />
              </a>
            </div>
            <div className="h-8 w-40 rounded-sm overflow-hidden">
              <a href="https://jamapunji.pk" target="_blank" rel="noreferrer">
                <img
                  className="h-full w-full"
                  alt="jamapunji logo"
                  src={"/images/jama-punji-logo.png"}
                />
              </a>
            </div>
          </div>

          {/* Right Column: Contact info and Links */}
          <div className="flex flex-col gap-3 justify-self-end text-left md:text-right w-full md:w-auto">
            <p className="text-sm opacity-70 leading-relaxed">
              For any inquiries, concerns, or complaints, please contact:<br />
              <strong className="font-medium text-white opacity-100">Syed Ghausuddin Saif</strong>, Company Secretary<br />
              5 KM Sundar Raiwind Road, Lahore - 55150<br />
              Email: <a href="mailto:cs@ferozsons-labs.com" className="hover:text-white transition-opacity">cs@ferozsons-labs.com</a>
            </p>
          </div>

        </div>
        <div className="py-6 text-sm border-t border-white/10 mt-4">
          <p className="text-center">
            Managed by{" "}
            <a
            className="text-green-400 italic"
             href="https://www.wmsols.com/"
             target="_blank">
              WMsols
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
