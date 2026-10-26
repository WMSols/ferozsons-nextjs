import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css"
import Layout from "@/components/layout/Layout";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: { default: "Ferozsons Laboratories Limited", template: "%s | Ferozsons Laboratories Limited" },
  description: "Ferozsons Laboratories Limited",
  authors: [{ name: "Ferozsons Laboratories Limited" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Kaisei Opti / Open Sans via <link>, not next/font: next/font emits
            hundreds of CJK unicode-range files for Kaisei (~246 preloads), so
            the latin face never wins on Cloudflare and Fallback (Arial) shows. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kaisei+Opti:wght@400;500;700&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${merriweather.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <TooltipProvider>
          <QueryProvider>
            <Toaster />
            <Sonner />
            <Layout>{children}</Layout>
          </QueryProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
