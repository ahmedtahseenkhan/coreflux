import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import JsonLd from "@/components/JsonLd";
import Analytics from "@/components/Analytics";
import {
  SITE_URL,
  SITE_NAME,
  CONTACT_EMAIL,
  DEFAULT_DESCRIPTION,
  OG_IMAGE,
  SOCIAL_LINKS,
} from "@/lib/site";
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

// Site-wide defaults. Pages override title / description / canonical / OG via
// pageMetadata() in lib/site.ts.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Coreflux Solutions — Software for serious businesses",
    template: `%s · ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    images: [OG_IMAGE],
  },
  twitter: { card: "summary_large_image", images: [OG_IMAGE.url] },
};

const ORGANIZATION = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon-512.png`,
  image: `${SITE_URL}${OG_IMAGE.url}`,
  description: DEFAULT_DESCRIPTION,
  email: CONTACT_EMAIL,
  foundingDate: "2025",
  // TODO(owner): add streetAddress / postalCode if you want a full address shown.
  address: {
    "@type": "PostalAddress",
    addressLocality: "Houston",
    addressRegion: "TX",
    addressCountry: "US",
  },
  sameAs: SOCIAL_LINKS.filter((s) => s.href).map((s) => s.href),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body>
        <JsonLd data={ORGANIZATION} />
        <RevealObserver />
        <Nav />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
