import type { Metadata } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Alpha Vector Technologies | Forensic Methodologies for Digital Accountability",
    template: "%s | Alpha Vector Technologies",
  },
  description: "Institutional-grade forensic methodologies for algorithmic negligence attribution, distributed ledger security quantification, and executive liability reconstruction. Principal Researcher: Gavin Sangedha.",
  keywords: [
    "algorithmic negligence",
    "digital forensics",
    "executive liability",
    "causal attribution",
    "distributed ledger security",
    "Caremark compliance",
    "Daubert admissibility",
    "Gavin Sangedha",
    "Alpha Vector Technologies",
    "forensic methodologies",
    "AI accountability",
    "corporate governance"
  ],
  authors: [{ name: "Gavin Sangedha", url: "https://alphavectortech.com" }],
  creator: "Alpha Vector Technologies",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://alphavectortech.com",
    siteName: "Alpha Vector Technologies",
    title: "Alpha Vector Technologies | Forensic Methodologies for Digital Accountability",
    description: "Institutional-grade forensic methodologies for algorithmic negligence attribution and executive liability reconstruction.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alpha Vector Technologies",
    description: "Forensic Methodologies for Digital Accountability",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${jetbrainsMono.variable} min-h-screen bg-slate-50 font-sans text-slate-900 antialiased`}>
        <div className="fixed inset-0 z-0 pointer-events-none opacity-30 grid-bg"></div>
        <Navbar />
        <main className="relative z-10 flex min-h-screen flex-col items-center pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
