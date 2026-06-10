import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://corefluxsolutions.com"),
  title: {
    default: "Coreflux Solutions — Practical software for serious businesses",
    template: "%s · Coreflux Solutions",
  },
  description:
    "Houston-based software studio. We build custom ERP, LMS, AI automation, data migration, web, app and gaming solutions — without enterprise-level complexity.",
  openGraph: {
    title: "Coreflux Solutions — Practical software for serious businesses",
    description:
      "Custom ERP, LMS, AI automation, data migration, web, app and gaming solutions.",
    type: "website",
    locale: "en_US",
    siteName: "Coreflux Solutions",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body>
        <RevealObserver />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
