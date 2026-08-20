import type { Metadata } from "next";
import { Inter, Merriweather,} from "next/font/google";
import "./globals.css"
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
