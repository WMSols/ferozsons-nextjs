import type { Metadata } from "next";
import { Inter, Merriweather, Kaisei_Opti, Open_Sans } from "next/font/google";
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

// Brand heading/body faces — must use next/font; CSS @import of Google Fonts
// is dropped under Next 16 Turbopack, so Kaisei/Open Sans never loaded.
const kaiseiOpti = Kaisei_Opti({
  variable: "--font-kaisei-opti",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans-face",
  subsets: ["latin"],
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
      </head>
      <body
        className={`${inter.variable} ${merriweather.variable} ${kaiseiOpti.variable} ${openSans.variable} font-sans antialiased`}
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
