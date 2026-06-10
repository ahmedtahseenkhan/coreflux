import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Case studies",
  description:
    "Selected work from the team behind Coreflux Solutions — ERP, LMS, AI, data migration, web and gaming systems built for real teams.",
};

type Status = "Live" | "In production" | "Coming soon";

const STUDIES: {
  slug: string;
  tag: string;
  title: string;
  client: string;
  industry: string;
  duration: string;
  result: string;
  body: string;
  status: Status;
}[] = [
  {
    slug: "logistics-erp",
    tag: "ERP / Logistics",
    title: "Multi-warehouse inventory & dispatch ERP",
    client: "Confidential · regional logistics operator",
    industry: "Logistics & distribution",
    duration: "11 weeks to first release",
    result: "Replaced 6 spreadsheets, cut dispatch errors by ~40%",
    body:
      "Real-time stock across three warehouses, dispatch workflow with driver app and live reorder rules.",
    status: "Live",
  },
  {
    slug: "compliance-lms",
    tag: "LMS / Compliance",
    title: "Workforce compliance & certification portal",
    client: "Confidential · regulated workforce of 300+",
    industry: "Industrial training",
    duration: "8 weeks to launch",
    result: "100% certification audit pass rate after first cycle",
    body:
      "Per-role training tracks, expiry alerts and exportable audit logs for inspectors.",
    status: "Live",
  },
  {
    slug: "crm-migration",
    tag: "Data Migration",
    title: "Legacy CRM → modern data platform",
    client: "Confidential · B2B services company",
    industry: "Professional services",
    duration: "5 weeks",
    result: "12 years of records migrated, zero data loss",
    body:
      "Reconciled three overlapping systems and a decade of spreadsheets into one source of truth.",
    status: "In production",
  },
  {
    slug: "internal-ai-assistant",
    tag: "AI Automation",
    title: "Internal knowledge assistant & ticket triage",
    client: "Confidential · SaaS support team",
    industry: "B2B SaaS",
    duration: "6 weeks",
    result: "Avg. first response time cut from 6h to 38m",
    body:
      "RAG over internal docs + auto-classification on inbound tickets, with hand-off to humans on ambiguity.",
    status: "Live",
  },
  {
    slug: "booking-platform",
    tag: "Web & Apps",
    title: "Booking platform & client portal",
    client: "Confidential · service business chain",
    industry: "Consumer services",
    duration: "10 weeks",
    result: "85% of bookings now self-serve",
    body:
      "Web + mobile booking, in-portal payments, admin dashboard and customer comms.",
    status: "Live",
  },
  {
    slug: "training-sim",
    tag: "Gaming / Interactive",
    title: "Gamified training simulation",
    client: "Confidential · field operations team",
    industry: "Field operations",
    duration: "7 weeks",
    result: "Training completion up 3.2× vs slide-deck baseline",
    body:
      "Branching scenarios, scoring, and a leaderboard that turned a compliance chore into a weekly habit.",
    status: "Coming soon",
  },
];

const TAGS = ["All", "ERP / Logistics", "LMS / Compliance", "Data Migration", "AI Automation", "Web & Apps", "Gaming / Interactive"];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/case-studies", label: "Case studies" },
        ]}
        eyebrow="Selected work · Studio"
        title={
          <>
            New studio. <em>Real</em> systems shipped.
          </>
        }
        lede={
          <>
            Coreflux Solutions is a young brand, but the work behind it isn&rsquo;t.
            Here&rsquo;s a snapshot of recent builds across ERP, LMS, AI, data,
            web and gaming. Client names are kept private by default —
            we&rsquo;ll happily make warm intros on request.
          </>
        }
        ctas={[
          { href: "/#contact", label: "Discuss a similar build", primary: true },
          { href: "#studies", label: "Browse work" },
        ]}
        meta={[
          { label: "Systems shipped", value: "40+" },
          { label: "Industries", value: "9" },
          { label: "Avg first release", value: "6 wks" },
          { label: "Repeat clients", value: "92%" },
        ]}
      />

      {/* Filter pills (static, decorative for now) */}
      <section id="studies" className="section pt-0">
        <div className="wrap">
          <SectionHead
            kicker="Recent work"
            title={<>Pick a discipline. We&rsquo;ve <em>probably</em> built it.</>}
          />

          <div className="reveal mt-2 flex flex-wrap gap-2">
            {TAGS.map((t) => (
              <span
                key={t}
                className="rounded-full border px-3.5 py-1.5 text-[12px] font-mono uppercase tracking-[0.08em] text-[color:var(--ink-2)]"
                style={{
                  borderColor: "var(--line)",
                  background: t === "All" ? "var(--ink)" : "transparent",
                  color: t === "All" ? "var(--bg)" : "var(--ink-2)",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {STUDIES.map((s, i) => (
              <Link
                key={s.slug}
                href={`/case-studies/${s.slug}`}
                className="reveal group relative overflow-hidden rounded-3xl border bg-[color:var(--card)] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                style={{ borderColor: "var(--line)", transitionDelay: `${i * 50}ms` }}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(120% 80% at 100% 0%, color-mix(in oklab, var(--c2) 14%, transparent), transparent 60%)",
                  }}
                />
                <div className="relative flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.08em]">
                  <span
                    className="rounded-full border px-2.5 py-1 text-[color:var(--ink-2)]"
                    style={{
                      borderColor: "var(--line)",
                      background: "color-mix(in oklab, var(--c1) 4%, var(--bg))",
                    }}
                  >
                    {s.tag}
                  </span>
                  <StatusPill status={s.status} />
                </div>
                <h3 className="relative mt-5 font-serif text-[30px] leading-tight text-[color:var(--ink)]">
                  {s.title}
                </h3>
                <p className="relative mt-3 text-[14.5px] leading-relaxed text-[color:var(--ink-2)] max-w-[52ch]">
                  {s.body}
                </p>

                <dl className="relative mt-6 grid grid-cols-3 gap-4 border-t pt-4" style={{ borderColor: "var(--line)" }}>
                  <Meta label="Industry" value={s.industry} />
                  <Meta label="Duration" value={s.duration} />
                  <Meta label="Result" value={s.result} />
                </dl>

                <div
                  className="relative mt-6 flex items-center justify-between border-t border-dashed pt-4 font-mono text-[12px] uppercase tracking-[0.08em] text-[color:var(--ink)]"
                  style={{ borderColor: "var(--line)" }}
                >
                  <span className="opacity-75 transition group-hover:opacity-100">
                    Read case study
                  </span>
                  <span className="transition group-hover:translate-x-1">↗</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-[10px] uppercase tracking-[0.1em] text-[color:var(--mute)]">
        {label}
      </dt>
      <dd className="mt-1 text-[12.5px] leading-snug text-[color:var(--ink-2)]">
        {value}
      </dd>
    </div>
  );
}

function StatusPill({ status }: { status: Status }) {
  const color =
    status === "Live"
      ? "var(--c1)"
      : status === "In production"
      ? "var(--c4)"
      : "var(--mute)";
  return (
    <span className="flex items-center gap-2 text-[color:var(--mute)]">
      <span
        className="block h-[7px] w-[7px] rounded-full"
        style={{ background: color }}
      />
      {status}
    </span>
  );
}
