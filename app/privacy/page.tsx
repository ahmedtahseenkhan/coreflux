import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import LegalPage, { type LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = pageMetadata({
  title: "Privacy policy",
  description:
    "How Coreflux Solutions collects, uses and protects information submitted through corefluxsolutions.com.",
  path: "/privacy",
});

// TODO(owner): replace each section's `todo`/`facts` with final `body` text
// (ideally reviewed by a lawyer) and set `lastUpdated` below.
const SECTIONS: LegalSection[] = [
  {
    heading: "Who we are",
    todo: "Name the legal entity responsible for this site (e.g. the registered company name), its address, and how to contact you about privacy.",
    facts: [
      "Trading name on the site: Coreflux Solutions, Houston, TX.",
      "Contact email used across the site: Info@corefluxsolutions.com.",
    ],
  },
  {
    heading: "Information we collect",
    todo: "Describe what you collect and why.",
    facts: [
      "Contact form: full name, email address, phone number, an optional project description, and which service the visitor selected.",
      "Analytics (only if the visitor accepts cookies): Google Analytics 4 records pages viewed, device and browser details, approximate location and how the visitor arrived.",
      "Server and security: the web server sees each visitor's IP address and browser user agent. The contact form uses the IP address briefly, in memory, to limit repeated submissions.",
      "If the contact form can't send directly, it opens the visitor's own email app, so the message is then sent from their mailbox.",
    ],
  },
  {
    heading: "How we use it",
    todo: "Explain the purposes (e.g. replying to enquiries, preparing proposals, improving the site) and, if you serve EU/UK visitors, the legal basis for each.",
  },
  {
    heading: "Cookies and analytics",
    todo: "Describe the cookies used and how visitors control them.",
    facts: [
      "No analytics or tracking cookies are set until the visitor clicks Accept in the cookie banner.",
      "If accepted, Google Analytics sets cookies named _ga and _ga_<ID> (by default they last up to 2 years).",
      "The visitor's choice is stored in their browser's local storage under the key cf-consent.",
      "Visitors can change their choice at any time via “Cookie settings” in the site footer; declining removes the Google Analytics cookies.",
    ],
  },
  {
    heading: "Who we share it with",
    todo: "List the service providers that process data for you and confirm whether you sell or share personal information.",
    facts: [
      "Contact-form emails are sent through Google (Gmail SMTP) to Info@corefluxsolutions.com.",
      "Analytics, if accepted, are processed by Google (Google Analytics 4).",
      "The site is hosted on Amazon Web Services (AWS).",
    ],
  },
  {
    heading: "How long we keep it",
    todo: "State how long you keep enquiry emails, analytics data (GA4 retention is set in the Google Analytics admin) and server logs.",
  },
  {
    heading: "Your rights",
    todo: "Explain how visitors can access, correct or delete their information, and any rights under laws that apply to you (e.g. Texas TDPSA, California CCPA/CPRA, UK/EU GDPR).",
  },
  {
    heading: "Contact",
    todo: "Confirm the address for privacy requests.",
    facts: ["Suggested: Info@corefluxsolutions.com (already used site-wide)."],
  },
];

export default function PrivacyPage() {
  return <LegalPage title="Privacy policy" label="Privacy" path="/privacy" sections={SECTIONS} />;
}
