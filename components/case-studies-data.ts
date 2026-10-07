// Case study content, shared by the detail pages and the sitemap.

export type Study = {
  slug: string;
  tag: string;
  title: string;
  oneLiner: string;
  industry: string;
  duration: string;
  result: string;
  stack: string[];
  challenge: string;
  approach: string[];
  outcomes: { label: string; value: string }[];
  status: "Live" | "In production" | "Coming soon";
};

export const STUDIES: Record<string, Study> = {
  "logistics-erp": {
    slug: "logistics-erp",
    tag: "ERP / Logistics",
    title: "Multi-warehouse inventory & dispatch ERP",
    oneLiner:
      "Three warehouses, six spreadsheets, one dispatch team — replaced with a single operations layer.",
    industry: "Logistics & distribution",
    duration: "11 weeks to first release",
    result: "Dispatch errors down ~40%",
    stack: ["Next.js", "Postgres", "Drizzle ORM", "Cloudflare", "Driver PWA"],
    challenge:
      "Three warehouses ran on six overlapping spreadsheets and a paper dispatch log. Inventory was wrong by the time orders were picked, drivers worked off printed sheets, and refunds for missed deliveries had become a line item.",
    approach: [
      "Mapped the actual stock-keeping flow with floor staff for two days before writing any code.",
      "Rebuilt the data model around units of stock + movement events (not snapshots), so history is reconstructable.",
      "Shipped the picker UI in week 3 — driver PWA, warehouse dashboard and dispatch live tracking by week 8.",
      "Migrated 18 months of historical orders and inventory into the new model before cut-over.",
    ],
    outcomes: [
      { label: "Dispatch errors", value: "–40%" },
      { label: "Reorder lead time", value: "–55%" },
      { label: "Manual ops hours", value: "–6h / day" },
      { label: "Drivers onboarded", value: "22" },
    ],
    status: "Live",
  },
  "compliance-lms": {
    slug: "compliance-lms",
    tag: "LMS / Compliance",
    title: "Workforce compliance & certification portal",
    oneLiner:
      "Per-role training tracks, expiry alerts and audit-ready exports for a regulated workforce of 300+.",
    industry: "Industrial training",
    duration: "8 weeks to launch",
    result: "100% audit pass rate after first cycle",
    stack: ["Next.js", "Postgres", "S3 video", "SAML SSO", "Email + SMS"],
    challenge:
      "Certifications were tracked in a shared workbook. Inspectors found expired credentials on the floor twice in twelve months. The team needed an audit-ready system without retraining 300+ people on enterprise software.",
    approach: [
      "Built role-driven training tracks — your role determines what you must complete and when it expires.",
      "Auto-generated audit exports as PDFs ready to hand to inspectors.",
      "Native mobile flow for the 80% of staff who don't use desktops.",
      "Migrated and validated five years of legacy certification records.",
    ],
    outcomes: [
      { label: "Audit pass rate", value: "100%" },
      { label: "Expired creds on floor", value: "0" },
      { label: "Avg. completion", value: "94%" },
      { label: "Roles modelled", value: "17" },
    ],
    status: "Live",
  },
  "crm-migration": {
    slug: "crm-migration",
    tag: "Data Migration",
    title: "Legacy CRM → modern data platform",
    oneLiner:
      "Twelve years of overlapping records across three systems, migrated into one source of truth without data loss.",
    industry: "Professional services",
    duration: "5 weeks",
    result: "Zero data loss across 12 years of history",
    stack: ["Postgres", "dbt", "Python ETL", "Airbyte", "Looker Studio"],
    challenge:
      "Three CRMs and a decade of spreadsheets had produced a customer table with 7 different ways of spelling the same companies, contradictory contact records, and lost engagement history. Sales was making decisions on wrong data.",
    approach: [
      "Built an identity-resolution layer that survives renames, mergers and typo-grade duplicates.",
      "Reconciled three CRMs against canonical entities before writing to the new system.",
      "Preserved 12 years of activity history attached to resolved customers, not lost.",
      "Stood up a reporting layer so sales and finance see the same numbers.",
    ],
    outcomes: [
      { label: "Records reconciled", value: "2.1M" },
      { label: "Duplicate companies", value: "–87%" },
      { label: "Data loss", value: "Zero" },
      { label: "Reporting consistency", value: "100%" },
    ],
    status: "In production",
  },
  "internal-ai-assistant": {
    slug: "internal-ai-assistant",
    tag: "AI Automation",
    title: "Internal knowledge assistant & ticket triage",
    oneLiner:
      "RAG over internal docs plus auto-triage on inbound tickets, with confident hand-off to humans on ambiguity.",
    industry: "B2B SaaS",
    duration: "6 weeks",
    result: "First response time: 6h → 38m",
    stack: ["Next.js", "Postgres + pgvector", "Anthropic Claude", "Inngest", "Linear API"],
    challenge:
      "A growing support team was drowning in tickets that mostly had answers buried in docs and old conversations. Hiring more agents was an option; cutting time-to-answer was a better one.",
    approach: [
      "RAG over docs, runbooks and resolved tickets — not a generic chatbot, a team-specific assistant.",
      "Auto-classification on inbound tickets with confidence threshold and human hand-off.",
      "Suggested replies in the agent UI rather than full autonomous responses.",
      "Feedback loop: every accepted reply improves the retrieval ranking.",
    ],
    outcomes: [
      { label: "Avg. first response", value: "6h → 38m" },
      { label: "Auto-classified", value: "73%" },
      { label: "Agent CSAT", value: "+18%" },
      { label: "Coverage", value: "9 doc sources" },
    ],
    status: "Live",
  },
  "booking-platform": {
    slug: "booking-platform",
    tag: "Web & Apps",
    title: "Booking platform & client portal",
    oneLiner:
      "End-to-end web + mobile booking, in-portal payments, admin dashboard and customer comms.",
    industry: "Consumer services",
    duration: "10 weeks",
    result: "85% of bookings are now self-serve",
    stack: ["Next.js", "React Native", "Stripe", "Postgres", "Resend"],
    challenge:
      "Bookings were handled by phone, payments by card terminal, customer records on paper. Growth had stalled because every new location meant doubling phone staff.",
    approach: [
      "Public booking flow optimised for thumb on phone, not pretty on desktop.",
      "Stripe-backed payments with deposits, refunds and saved cards.",
      "Admin dashboard for floor managers — same data, faster surfaces.",
      "Customer comms (reminders, no-show recovery, follow-ups) baked into the loop.",
    ],
    outcomes: [
      { label: "Self-serve bookings", value: "85%" },
      { label: "No-show rate", value: "–34%" },
      { label: "Avg. booking time", value: "1m 12s" },
      { label: "Locations onboarded", value: "5" },
    ],
    status: "Live",
  },
  "training-sim": {
    slug: "training-sim",
    tag: "Gaming / Interactive",
    title: "Gamified training simulation",
    oneLiner:
      "Branching scenarios and scoring that turned a compliance chore into a weekly habit.",
    industry: "Field operations",
    duration: "7 weeks",
    result: "Completion 3.2× vs slide-deck baseline",
    stack: ["PixiJS", "React", "Postgres", "Cloudflare R2"],
    challenge:
      "Mandatory training had a 28% completion rate. People hated it, but the content actually mattered for safety. The ask: same content, dramatically higher engagement.",
    approach: [
      "Re-cut the curriculum as branching scenarios with consequences, not multiple-choice.",
      "Lightweight scoring + a weekly team leaderboard for friendly competition.",
      "Mobile-first — most users open it during downtime, not at a desk.",
      "Built on PixiJS for instant load, no app-store gatekeeping.",
    ],
    outcomes: [
      { label: "Completion", value: "3.2×" },
      { label: "Avg. session", value: "11 min" },
      { label: "Weekly returnees", value: "62%" },
      { label: "Scenarios shipped", value: "24" },
    ],
    status: "Coming soon",
  },
};
