import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "PRO & Government Relations | Saudi Arabia",
  description: "Professional PRO services for company setup, visa processing, and government compliance in Saudi Arabia. Save 50% with expert outsourcing.",
  keywords: "PRO services Saudi Arabia, MISA, GOSI, Iqama, Muqeem, Absher, Qiwa, ZATCA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-[#0A1628] text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
