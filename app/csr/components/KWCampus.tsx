import { StaggerFadeUpInView } from "@/components/animations/StaggerFadeUpInView";
import Image from "next/image";
import Link from "next/link";

export default function KWCampus() {
    return (
        <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-black py-36">
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/CSR/initiatives/Quality-Impact.webp"
                    alt="Students at Khalid Waheed Campus"
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                />
                {/* Dark overlay and gradient for text readability */}
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-transparent" />
            </div>

            {/* Content Container */}
            <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20 w-full">
                <div className="max-w-5xl flex flex-col items-start">

                    {/* Logo Lockup */}
                    <StaggerFadeUpInView>
                    <div className="flex items-center -mb-8">
                        <div className="w-28 h-28 md:w-36 md:h-36  flex items-center justify-center shrink-0">
                            <img src="/ferozsons-f-white.webp" alt="Ferozsons white logo" />
                        </div>
                        <span className=" w-36 text-xs md:text-sm">
                            <img src="/people-trust-us.webp" alt="People Trust Us white logo" />
                        </span>
                    </div>
                    </StaggerFadeUpInView>
                    <StaggerFadeUpInView>
                    <div className="-mt-4">


                        {/* Heading */}
                        <h2 className="text-white text-5xl md:text-6xl lg:text-[5rem] font-bold leading-tight mb-8">
                            Khalid Waheed Campus
                        </h2>

                        {/* Paragraph */}
                        <p className="text-white text-lg md:text-xl leading-relaxed mb-10 max-w-3xl">
                            In memory of Ferozsons' founding Chief Executive, Mr. Khalid Waheed,<br />
                            the company and family co-funded the TCF Khalid Waheed Campus at <br />
                            Kot Addu, Muzaffargarh. With 10% of the world's out-of-school children<br />
                            living in Pakistan, primary education is among our most urgent national<br />
                            challenges. This campus stands as a lasting tribute — bringing quality<br />
                            schooling to one of the country's most underserved regions.
                        </p>
                    </div>
                    </StaggerFadeUpInView>
                    {/* CTA Button */}
                    <Link
                        href="/about/purpose"
                        className="inline-flex mt-8 items-center justify-center bg-[#3B73AC] hover:bg-[#214e7b] text-white text-base font-medium h-12 px-8 rounded-full transition-colors w-fit"
                    >
                        Missions, Strategy & Values
                    </Link>

                </div>
            </div>
        </section>
    );
}