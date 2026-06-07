import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import CapabilityGrid from "@/components/CapabilityGrid";
import FAQ from "@/components/FAQ";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "ERP Solutions",
  description:
    "Custom ERP systems for inventory, HR, accounting, CRM, operations and reporting — built around how your team actually works.",
};

const CAPABILITIES = [
  {
    icon: <span className="font-mono text-sm">IN</span>,
    title: "Inventory & warehousing",
    body:
      "Real-time stock visibility across locations, with batch, serial and lot tracking, multi-UoM, automated reorder logic and pick-pack-ship workflows.",
    bullets: ["Multi-warehouse", "Barcoding / labels", "Cycle counts", "Reorder rules"],
  },
  {
    icon: <span className="font-mono text-sm">HR</span>,
    title: "HR & payroll",
    body:
      "Employee records, time-off, attendance and payroll-ready exports. Country-specific tax tables when you need them, simple flat structures when you don't.",
    bullets: ["Employee directory", "Leave & attendance", "Payroll export", "Documents"],
  },
  {
    icon: <span className="font-mono text-sm">AC</span>,
    title: "Accounting workflows",
    body:
      "Quotes, invoices, bills, payments, reconciliation and reporting that connects directly to operations — no double entry between systems.",
    bullets: ["Invoicing", "Bills / AP", "Bank reconciliation", "Tax reports"],
  },
  {
    icon: <span className="font-mono text-sm">CR</span>,
    title: "CRM & sales",
    body:
      "Pipeline, contacts, deals, quotes and customer history — connected to invoicing, fulfilment and support so nothing falls between teams.",
    bullets: ["Pipeline", "Quotes → invoices", "Customer history", "Tasks"],
  },
  {
    icon: <span className="font-mono text-sm">DB</span>,
    title: "Operations dashboards",
    body:
      "Role-based dashboards for owners, ops leads and floor staff. Numbers that update live, not stale weekly exports.",
    bullets: ["Live KPIs", "Drill-down", "Custom reports", "Scheduled emails"],
  },
  {
    icon: <span className="font-mono text-sm">VM</span>,
    title: "Vendor management",
    body:
      "Vendor records, purchase orders, GRNs, supplier scorecards and payment cycles. The other half of inventory, done properly.",
    bullets: ["POs / GRNs", "Supplier scorecards", "Lead times", "Payment terms"],
  },
];

const FAQ_ITEMS = [
  {
    q: "How is this different from SAP, NetSuite or Odoo?",
    a: (
      <>
        Off-the-shelf ERPs are powerful, but you bend your business around their data
        model. We build to <em>your</em> data model — your products, your customers,
        your workflow — and skip the modules you don&rsquo;t need. You own the source
        code and the database.
      </>
    ),
  },
  {
    q: "What stack do you build on?",
    a: (
      <>
        Typically Next.js + TypeScript + Postgres for new builds, with Prisma or
        Drizzle for the ORM and tRPC or REST for the API. We&rsquo;ll match an
        existing stack if you have one we should fit into.
      </>
    ),
  },
  {
    q: "How long does an ERP build take?",
    a: (
      <>
        A first usable release ships in 4–8 weeks for a focused scope (one core
        workflow). A full ERP across operations, finance and CRM is usually 4–6
        months of weekly releases. You&rsquo;re using something real every week
        either way.
      </>
    ),
  },
  {
    q: "Can you migrate from our spreadsheets or old system?",
    a: (
      <>
        Yes — that&rsquo;s usually step one. See our{" "}
        <Link href="/services/data-migration" className="underline decoration-[color:var(--c1)] underline-offset-4">
          Data Migration service
        </Link>
        . We move history, not just current state, so you don&rsquo;t lose context.
      </>
    ),
  },
  {
    q: "What does it cost?",
    a: (
      <>
        Fixed-scope blueprints, not hourly. A first working release for one workflow
        typically lands between $18k–$45k depending on integrations. We tell you the
        number before you sign anything.
      </>
    ),
  },
  {
    q: "Who owns the code?",
    a: (
      <>
        You do — 100%. Code in your GitHub, database on your infrastructure (or ours
        with full migration rights). No vendor lock-in, no per-seat ransom.
      </>
    ),
  },
];

const DELIVERABLES = [
  { label: "Architecture map", body: "Full data model, integration points, environments and access roles." },
  { label: "Working software", body: "Weekly deployable releases against a fixed-scope blueprint." },
  { label: "Migration", body: "Historical data moved in clean, validated against your records." },
  { label: "Training & docs", body: "Recorded walkthroughs and written docs your team will actually read." },
  { label: "Source & infra", body: "Repo, deployment pipeline and infrastructure handed over in your name." },
  { label: "Support track", body: "Optional retainer for changes, scaling and new modules post-launch." },
];

export default function ERPPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/#services", label: "Services" },
          { href: "/services/erp", label: "ERP Solutions" },
        ]}
        eyebrow="Service · 01 / 06 · Operations"
        title={
          <>
            ERP systems that match <em>your</em> business, not the other way around.
          </>
        }
        lede={
          <>
            Inventory, HR, accounting workflows, CRM, operations dashboards, vendor
            management and reporting — built as one connected system, around how
            your team already works. No per-seat licenses, no five-year roadmap.
          </>
        }
        ctas={[
          { href: "/#contact", label: "Book a discovery call", primary: true },
          { href: "#capabilities", label: "See capabilities" },
        ]}
        meta={[
          { label: "First release", value: "4–8 wks" },
          { label: "Full ERP", value: "4–6 mo" },
          { label: "Stack", value: "Yours, owned" },
          { label: "Lock-in", value: "None" },
        ]}
      />

      {/* Capabilities */}
      <section id="capabilities" className="section pt-0">
        <div className="wrap">
          <SectionHead
            kicker="Capabilities"
            title={<>Every part of operations, <em>one</em> system.</>}
            blurb={
              <>
                Pick the modules that match your business today. Add the rest when you
                need them — same data model, no re-platforming.
              </>
            }
          />
          <CapabilityGrid items={CAPABILITIES} />
        </div>
      </section>

      {/* Architecture / how it's built */}
      <section className="section pt-0">
        <div className="wrap">
          <SectionHead
            kicker="How it's built"
            title={<>One data model. <em>Every</em> workflow.</>}
            blurb={
              <>
                Most ERP failures come from systems built as bolted-together modules.
                We start from your data — products, people, money — and build outward,
                so every workflow reads from the same source of truth.
              </>
            }
          />

          <div
            className="reveal mt-10 grid gap-0 overflow-hidden rounded-3xl border bg-[color:var(--card)] md:grid-cols-3"
            style={{ borderColor: "var(--line)" }}
          >
            {[
              {
                step: "Data layer",
                desc: "Postgres + clean schema. Audited, versioned, indexed for the reports you'll actually run.",
                tag: "Layer 01",
              },
              {
                step: "Workflow layer",
                desc: "TypeScript services for inventory moves, invoicing, payroll exports. Tested, observable, deterministic.",
                tag: "Layer 02",
              },
              {
                step: "Interface layer",
                desc: "Role-aware dashboards for owners, ops, finance and floor staff. Mobile-friendly where it matters.",
                tag: "Layer 03",
              },
            ].map((l, i, arr) => (
              <div
                key={l.step}
                className="p-8"
                style={{
                  borderRight: i < arr.length - 1 ? "1px solid var(--line)" : "none",
                }}
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--c1)]">
                  {l.tag}
                </span>
                <h4 className="mt-3 font-serif text-[26px] text-[color:var(--ink)]">
                  {l.step}
                </h4>
                <p className="mt-3 text-[14.5px] leading-relaxed text-[color:var(--ink-2)]">
                  {l.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section pt-0">
        <div className="wrap">
          <SectionHead
            kicker="What you get"
            title={<>Working software, plus everything <em>around</em> it.</>}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {DELIVERABLES.map((d, i) => (
              <div
                key={d.label}
                className="reveal rounded-2xl border bg-[color:var(--card)] p-6"
                style={{ borderColor: "var(--line)", transitionDelay: `${i * 50}ms` }}
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--mute)]">
                  {String(i + 1).padStart(2, "0")} / {String(DELIVERABLES.length).padStart(2, "0")}
                </div>
                <h4 className="mt-3 font-serif text-[22px] text-[color:var(--ink)]">
                  {d.label}
                </h4>
                <p className="mt-2 text-[14px] leading-relaxed text-[color:var(--ink-2)]">
                  {d.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={FAQ_ITEMS} />
      <CTA />
    </>
  );
}
