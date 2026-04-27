import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: { default: "Feroz Sons", template: "%s | Feroz Sons" },
  description: "Feroz Sons Website",
  authors: [{ name: "Feroz Sons" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Kaisei+Opti:wght@400;700&display=swap"
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
