import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import LegalPage, { type LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = pageMetadata({
  title: "Terms and conditions",
  description: "The terms that apply to using corefluxsolutions.com.",
  path: "/terms",
});

// TODO(owner): replace each section's `todo`/`facts` with final `body` text
// (ideally reviewed by a lawyer) and set `lastUpdated` below.
const SECTIONS: LegalSection[] = [
  {
    heading: "About these terms",
    todo: "Say who operates the site (legal entity name and address) and that using the site means accepting these terms.",
  },
  {
    heading: "Information on this site",
    todo: "Clarify that site content (service descriptions, timelines, price ranges, case-study figures) is general information and not an offer or guarantee.",
    facts: [
      "The site quotes indicative timelines and price ranges (e.g. ERP first release “$18k–$45k”, “4–8 weeks”).",
      "Case studies describe client results with client names kept confidential.",
    ],
  },
  {
    heading: "Engagements",
    todo: "State that project work is governed by a separate signed agreement, not by these website terms.",
    facts: [
      "The Process page says work starts only after a fixed-scope blueprint is signed off by both sides.",
    ],
  },
  {
    heading: "Intellectual property",
    todo: "Describe who owns the site's text, design and brand assets, and what visitors (and press) may reuse.",
    facts: ["The Press kit page offers brand assets and boilerplate for press use."],
  },
  {
    heading: "Links to other sites",
    todo: "Disclaim responsibility for external sites linked from this one.",
    facts: ["The site links to emplearnings.com from the Selected work section."],
  },
  {
    heading: "Disclaimers and limitation of liability",
    todo: "Add your disclaimer and liability wording.",
  },
  {
    heading: "Governing law",
    todo: "Name the governing law and venue (e.g. the State of Texas).",
  },
  {
    heading: "Changes and contact",
    todo: "Explain how you'll update these terms and where to send questions.",
    facts: ["Contact email used across the site: Info@corefluxsolutions.com."],
  },
];

export default function TermsPage() {
  return <LegalPage title="Terms and conditions" label="Terms" path="/terms" sections={SECTIONS} />;
}
