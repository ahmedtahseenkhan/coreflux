import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import CTA from "@/components/home/CTA";

type Study = {
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

const STUDIES: Record<string, Study> = {
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

export function generateStaticParams() {
  return Object.keys(STUDIES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = STUDIES[slug];
  if (!s) return { title: "Case study not found" };
  return { title: s.title, description: s.oneLiner };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = STUDIES[slug];
  if (!s) notFound();

  const otherStudies = Object.values(STUDIES).filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <>
      <PageHero
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/case-studies", label: "Case studies" },
          { href: `/case-studies/${s.slug}`, label: s.tag },
        ]}
        eyebrow={`Case study · ${s.tag} · ${s.status}`}
        title={<>{s.title}</>}
        lede={<>{s.oneLiner}</>}
        ctas={[
          { href: "/#contact", label: "Discuss a similar build", primary: true },
          { href: "/case-studies", label: "Back to all work" },
        ]}
        meta={[
          { label: "Industry", value: s.industry },
          { label: "Duration", value: s.duration },
          { label: "Outcome", value: s.result },
          { label: "Status", value: s.status },
        ]}
      />

      {/* Stack */}
      <section className="section pt-0">
        <div className="wrap">
          <div className="reveal flex flex-wrap items-center gap-2">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--mute)]">
              Stack
            </span>
            {s.stack.map((t) => (
              <span
                key={t}
                className="rounded-full border px-3 py-1.5 text-[12px] font-mono text-[color:var(--ink-2)]"
                style={{
                  borderColor: "var(--line)",
                  background: "color-mix(in oklab, var(--c1) 4%, var(--bg))",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge + Approach */}
      <section className="section pt-0">
        <div className="wrap grid gap-12 md:grid-cols-2">
          <div className="reveal">
            <span className="kicker">The challenge</span>
            <h3 className="mt-3 font-serif text-[34px] leading-tight text-[color:var(--ink)] max-w-[18ch]">
              What we walked into.
            </h3>
            <p className="mt-5 text-[15px] leading-relaxed text-[color:var(--ink-2)] max-w-[52ch]">
              {s.challenge}
            </p>
          </div>

          <div className="reveal">
            <span className="kicker">The approach</span>
            <h3 className="mt-3 font-serif text-[34px] leading-tight text-[color:var(--ink)] max-w-[18ch]">
              How we built it.
            </h3>
            <ol className="mt-5 space-y-4">
              {s.approach.map((a, i) => (
                <li
                  key={i}
                  className="flex gap-4 text-[15px] leading-relaxed text-[color:var(--ink-2)]"
                >
                  <span
                    className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border font-mono text-[11px] text-[color:var(--ink)]"
                    style={{ borderColor: "var(--line)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{a}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section pt-0">
        <div className="wrap">
          <SectionHead
            kicker="Outcomes"
            title={<>Numbers from the <em>real</em> rollout.</>}
          />
          <div
            className="reveal mt-10 grid gap-0 grid-cols-2 md:grid-cols-4 border-y"
            style={{ borderColor: "var(--line)" }}
          >
            {s.outcomes.map((o, i, arr) => (
              <div
                key={o.label}
                className="p-7"
                style={{
                  borderColor: "var(--line)",
                  borderRight: i < arr.length - 1 ? "1px solid var(--line)" : "none",
                }}
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--mute)]">
                  {o.label}
                </div>
                <div className="mt-3 font-serif text-[48px] leading-none text-[color:var(--ink)]">
                  {o.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section pt-0">
        <div className="wrap">
          <SectionHead kicker="More work" title={<>Other things we&rsquo;ve built.</>} />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {otherStudies.map((o) => (
              <Link
                key={o.slug}
                href={`/case-studies/${o.slug}`}
                className="reveal group rounded-3xl border bg-[color:var(--card)] p-6 transition hover:-translate-y-1 hover:shadow-md"
                style={{ borderColor: "var(--line)" }}
              >
                <span
                  className="rounded-full border px-2.5 py-1 text-[11px] font-mono uppercase tracking-[0.08em] text-[color:var(--ink-2)]"
                  style={{
                    borderColor: "var(--line)",
                    background: "color-mix(in oklab, var(--c1) 4%, var(--bg))",
                  }}
                >
                  {o.tag}
                </span>
                <h4 className="mt-4 font-serif text-[22px] leading-tight text-[color:var(--ink)]">
                  {o.title}
                </h4>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[color:var(--ink-2)]">
                  {o.oneLiner}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
