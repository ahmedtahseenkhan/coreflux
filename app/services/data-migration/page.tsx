import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import CapabilityGrid from "@/components/CapabilityGrid";
import FAQ from "@/components/FAQ";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Data Migration",
  description:
    "Move data from Excel, old CRMs, legacy databases, paper or manual systems into clean, modern systems without losing history.",
};

const SOURCES = [
  { name: "Spreadsheets", note: "Excel · Google Sheets · CSV" },
  { name: "Old CRMs", note: "Salesforce · HubSpot · Zoho · Custom" },
  { name: "Legacy databases", note: "SQL Server · Oracle · Access · Filemaker" },
  { name: "Paper / manual", note: "OCR · form digitisation · review queue" },
  { name: "Disconnected SaaS", note: "Stitch the 7 tools your team uses" },
];

const PHASES = [
  {
    n: "01",
    t: "Assessment",
    b: "We open every source, count the rows, find the weird records and write the migration plan. Nothing happens to your data yet.",
  },
  {
    n: "02",
    t: "Mapping",
    b: "Field-by-field mapping from your sources to a clean target schema. Identity resolution rules locked in writing.",
  },
  {
    n: "03",
    t: "Dry run",
    b: "We migrate to a parallel environment, run validation, share a reconciliation report. You verify before anything goes live.",
  },
  {
    n: "04",
    t: "Cut-over",
    b: "Dual-write window or scheduled cut-over depending on risk. Your team keeps working; we move history in the background.",
  },
  {
    n: "05",
    t: "Reconciliation",
    b: "Row-for-row counts, checksums, sampled audits. Every record is accounted for and the proof is in writing.",
  },
];

const CAPABILITIES = [
  {
    icon: <span className="font-mono text-sm">XL</span>,
    title: "Spreadsheets → real schema",
    body:
      "Years of Excel into a properly modelled, indexed Postgres database. With audit trails, backups and dignity.",
    bullets: ["Schema design", "Indexing", "Audit log", "Backups + PITR"],
  },
  {
    icon: <span className="font-mono text-sm">ID</span>,
    title: "Identity resolution",
    body:
      "Dedupe at the identity level, not by name. Survives renames, mergers, typo-grade duplicates.",
    bullets: ["Fuzzy match", "Manual review queue", "Merge history", "Survivorship rules"],
  },
  {
    icon: <span className="font-mono text-sm">HX</span>,
    title: "History preservation",
    body:
      "Activity history, notes and attachments follow the resolved record — not lost in the merge.",
    bullets: ["Full activity feed", "Attachments", "Note threads", "Source references"],
  },
  {
    icon: <span className="font-mono text-sm">VA</span>,
    title: "Validation & reconciliation",
    body:
      "Row counts, checksums and sampled audits prove every record arrived. We share the report.",
    bullets: ["Row counts", "Checksums", "Sampled audit", "Discrepancy log"],
  },
  {
    icon: <span className="font-mono text-sm">RB</span>,
    title: "Reversible cut-over",
    body:
      "Dual-write windows, dry runs and a tested rollback plan. Your business doesn't stop for a weekend.",
    bullets: ["Dual-write window", "Tested rollback", "Zero-downtime option", "Phased cut-over"],
  },
  {
    icon: <span className="font-mono text-sm">DC</span>,
    title: "Documentation",
    body:
      "The new schema, the mapping rules, the migration log — handed over in writing your team will actually read.",
    bullets: ["Schema docs", "Mapping rules", "Runbook", "Lineage map"],
  },
];

const FAQ_ITEMS = [
  {
    q: "How long does a typical migration take?",
    a: (
      <>
        Tightly-scoped migrations land in 3–5 weeks. Multi-source consolidations
        with identity resolution are usually 5–8 weeks. We give you a fixed
        scope and date after assessment.
      </>
    ),
  },
  {
    q: "What if our source data is a mess?",
    a: (
      <>
        That&rsquo;s the normal case, not the exception. Assessment covers
        exactly that — duplicates, contradictions, missing fields. You see the
        problems before we touch anything.
      </>
    ),
  },
  {
    q: "Do you build the new system too, or just migrate?",
    a: (
      <>
        Either. We migrate into your existing system if you have one, or we
        build the new home alongside &mdash; see{" "}
        <Link href="/services/erp" className="underline decoration-[color:var(--c1)] underline-offset-4">
          ERP Solutions
        </Link>{" "}
        for the bundle.
      </>
    ),
  },
  {
    q: "Can we keep operating during the migration?",
    a: (
      <>
        Yes. Dual-write windows or scheduled overnight cut-overs depending on
        risk tolerance. We&rsquo;ve never had to halt a business to do this.
      </>
    ),
  },
  {
    q: "Who validates the result?",
    a: (
      <>
        We do (with checksums and sampled audits) and you do (against records
        your team trusts). We don&rsquo;t mark a migration complete until both
        sides sign off in writing.
      </>
    ),
  },
  {
    q: "What if it fails after go-live?",
    a: (
      <>
        Reversible cut-over by default — we keep the old system warm for an
        agreed window. You can roll back without data loss.
      </>
    ),
  },
];

export default function DataMigrationPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/#services", label: "Services" },
          { href: "/services/data-migration", label: "Data Migration" },
        ]}
        eyebrow="Service · 03 / 06 · Foundations"
        title={<>Move the data. <em>Keep</em> the history.</>}
        lede={
          <>
            From Excel, old CRMs, legacy databases, paper or manual systems and
            disconnected tools into clean, modern systems &mdash; without
            losing history, context or the reports you already rely on.
          </>
        }
        ctas={[
          { href: "/#contact", label: "Book an assessment", primary: true },
          { href: "#flow", label: "See migration flow" },
        ]}
        meta={[
          { label: "Typical project", value: "3–8 wks" },
          { label: "History preserved", value: "Years" },
          { label: "Validation", value: "100% reconciled" },
          { label: "Cut-over", value: "Reversible" },
        ]}
      />

      {/* Source → Target flow */}
      <section id="flow" className="section pt-0">
        <div className="wrap">
          <SectionHead
            kicker="Source → target"
            title={<>Five kinds of mess. <em>One</em> clean destination.</>}
            blurb={
              <>
                Most projects pull from 3–5 sources at once. We reconcile them
                into a single canonical model before they hit your new system.
              </>
            }
          />

          <div
            className="reveal mt-10 overflow-hidden rounded-3xl border bg-[color:var(--card)]"
            style={{ borderColor: "var(--line)" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr]">
              {/* Sources */}
              <div className="p-8">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--mute)]">
                  Sources
                </span>
                <ul className="mt-4 space-y-3">
                  {SOURCES.map((s) => (
                    <li
                      key={s.name}
                      className="flex items-start gap-3 rounded-2xl border bg-white/60 p-4"
                      style={{ borderColor: "var(--line)" }}
                    >
                      <span
                        className="mt-1 block h-2 w-2 shrink-0 rounded-sm"
                        style={{ background: "var(--c1)" }}
                      />
                      <div>
                        <div className="font-medium text-[14.5px] text-[color:var(--ink)]">
                          {s.name}
                        </div>
                        <div className="font-mono text-[11px] text-[color:var(--mute)]">
                          {s.note}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pipeline middle */}
              <div className="hidden md:flex items-center justify-center px-4 py-8">
                <FlowArrow />
              </div>

              {/* Target */}
              <div
                className="p-8"
                style={{
                  background: "color-mix(in oklab, var(--c1) 6%, var(--bg))",
                  borderLeft: "1px solid var(--line)",
                }}
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--c1)]">
                  Target
                </span>
                <div className="mt-4 rounded-2xl border bg-[color:var(--ink)] p-6 text-white">
                  <div className="font-serif text-[24px] leading-tight">
                    One source of truth
                  </div>
                  <p className="mt-2 text-[13px] text-white/70">
                    Postgres + clean schema, indexed for the reports you actually run.
                  </p>
                  <ul className="mt-5 space-y-2 font-mono text-[12px] text-white/80">
                    <li className="flex items-center justify-between border-b border-white/10 py-1">
                      <span>customers</span>
                      <span style={{ color: "var(--c3)" }}>resolved</span>
                    </li>
                    <li className="flex items-center justify-between border-b border-white/10 py-1">
                      <span>orders</span>
                      <span style={{ color: "var(--c3)" }}>linked</span>
                    </li>
                    <li className="flex items-center justify-between border-b border-white/10 py-1">
                      <span>activity_feed</span>
                      <span style={{ color: "var(--c3)" }}>preserved</span>
                    </li>
                    <li className="flex items-center justify-between py-1">
                      <span>attachments</span>
                      <span style={{ color: "var(--c3)" }}>migrated</span>
                    </li>
                  </ul>
                </div>
                <p className="mt-4 text-[13px] text-[color:var(--ink-2)]">
                  Every row carries a reference back to its source so lineage
                  is traceable forever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-phase process */}
      <section className="section pt-0">
        <div className="wrap">
          <SectionHead
            kicker="The process"
            title={<>Five phases. <em>One</em> reversible cut-over.</>}
          />

          <ol className="mt-10 space-y-3">
            {PHASES.map((p, i) => (
              <li
                key={p.n}
                className="reveal grid items-start gap-6 rounded-3xl border bg-[color:var(--card)] p-7 md:grid-cols-[80px_1fr_1.4fr]"
                style={{ borderColor: "var(--line)", transitionDelay: `${i * 50}ms` }}
              >
                <div className="font-serif text-[42px] leading-none text-[color:var(--c1)]">
                  {p.n}
                </div>
                <div>
                  <h4 className="font-serif text-[26px] leading-tight text-[color:var(--ink)]">
                    {p.t}
                  </h4>
                </div>
                <p className="text-[14.5px] leading-relaxed text-[color:var(--ink-2)]">
                  {p.b}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section pt-0">
        <div className="wrap">
          <SectionHead
            kicker="Capabilities"
            title={<>Everything you should expect, and most teams <em>don&rsquo;t</em> get.</>}
          />
          <CapabilityGrid items={CAPABILITIES} />
        </div>
      </section>

      <FAQ items={FAQ_ITEMS} />
      <CTA />
    </>
  );
}

function FlowArrow() {
  return (
    <svg width="120" height="160" viewBox="0 0 120 160" aria-hidden>
      <defs>
        <linearGradient id="flowGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--ink-2)" stopOpacity=".25" />
          <stop offset="100%" stopColor="var(--c1)" stopOpacity=".9" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#flowGrad)" strokeWidth="1.4">
        <path d="M0 20 C 60 20, 60 80, 110 80" />
        <path d="M0 55 C 60 55, 60 80, 110 80" />
        <path d="M0 80 L 110 80" />
        <path d="M0 105 C 60 105, 60 80, 110 80" />
        <path d="M0 140 C 60 140, 60 80, 110 80" />
      </g>
      <circle r="3" fill="var(--c1)">
        <animateMotion dur="2.8s" repeatCount="indefinite" path="M0 20 C 60 20, 60 80, 110 80" />
      </circle>
      <circle r="3" fill="var(--c2)">
        <animateMotion dur="2.8s" begin="0.5s" repeatCount="indefinite" path="M0 55 C 60 55, 60 80, 110 80" />
      </circle>
      <circle r="3" fill="var(--c4)">
        <animateMotion dur="2.8s" begin="1s" repeatCount="indefinite" path="M0 80 L 110 80" />
      </circle>
      <circle r="3" fill="var(--c2)">
        <animateMotion dur="2.8s" begin="1.5s" repeatCount="indefinite" path="M0 105 C 60 105, 60 80, 110 80" />
      </circle>
      <circle r="3" fill="var(--c1)">
        <animateMotion dur="2.8s" begin="2s" repeatCount="indefinite" path="M0 140 C 60 140, 60 80, 110 80" />
      </circle>
    </svg>
  );
}
