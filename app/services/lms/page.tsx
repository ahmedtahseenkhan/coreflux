import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import CapabilityGrid from "@/components/CapabilityGrid";
import FAQ from "@/components/FAQ";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "LMS Solutions",
  description:
    "Custom training portals, employee learning systems, compliance training, course platforms and progress dashboards.",
};

const CAPABILITIES = [
  {
    icon: <span className="font-mono text-sm">TP</span>,
    title: "Training portals",
    body:
      "Branded portals for internal teams, contractors or customers. SSO, per-role tracks, certificates that don't look like clipart.",
    bullets: ["SSO / SAML", "Per-role tracks", "Branded certificates", "Bulk enrolment"],
  },
  {
    icon: <span className="font-mono text-sm">CP</span>,
    title: "Compliance & certification",
    body:
      "Expiry tracking, auto-reminders, audit-ready exports. Built so an inspector can see proof in two clicks.",
    bullets: ["Expiry alerts", "Audit exports", "Manager approvals", "Re-cert flows"],
  },
  {
    icon: <span className="font-mono text-sm">CS</span>,
    title: "Course platforms",
    body:
      "Multi-instructor publishing, drip releases, assignments and grading. Stripe-backed if you're selling externally.",
    bullets: ["Multi-instructor", "Drip cohorts", "Stripe payments", "Discussion threads"],
  },
  {
    icon: <span className="font-mono text-sm">DA</span>,
    title: "Progress dashboards",
    body:
      "Managers see what their team has and hasn't done. Learners see what's next, not 47 menu items.",
    bullets: ["Live KPIs", "Team rollups", "Risk flags", "Scheduled reports"],
  },
  {
    icon: <span className="font-mono text-sm">MB</span>,
    title: "Mobile-first delivery",
    body:
      "Most workforces don't live at a desk. Short, mobile sessions beat a 60-slide LMS deck every time.",
    bullets: ["PWA / native", "Offline sessions", "5-min lessons", "Push reminders"],
  },
  {
    icon: <span className="font-mono text-sm">IX</span>,
    title: "Integrations",
    body:
      "Wire into your HR system, payroll, or ERP so onboarding auto-enrols training and offboarding revokes access.",
    bullets: ["HRIS / payroll", "ERP hooks", "SSO providers", "Webhooks"],
  },
];

const TRACKS = [
  {
    role: "New hire",
    color: "var(--c1)",
    items: [
      { t: "Welcome & values", state: "done" },
      { t: "Tools & systems", state: "done" },
      { t: "Role-specific 101", state: "active" },
      { t: "First-week shadow", state: "todo" },
      { t: "30-day check-in", state: "todo" },
    ],
  },
  {
    role: "Site operator",
    color: "var(--c2)",
    items: [
      { t: "Safety basics", state: "done" },
      { t: "Equipment certs", state: "done" },
      { t: "Hazmat handling", state: "done" },
      { t: "Annual refresher", state: "active" },
      { t: "Incident reporting", state: "todo" },
    ],
  },
  {
    role: "Manager",
    color: "var(--c4)",
    items: [
      { t: "Leadership 101", state: "done" },
      { t: "Performance reviews", state: "active" },
      { t: "Compliance for managers", state: "todo" },
      { t: "Hiring & onboarding", state: "todo" },
      { t: "Annual leadership refresh", state: "todo" },
    ],
  },
];

const FAQ_ITEMS = [
  {
    q: "How is this different from Cornerstone, Docebo or TalentLMS?",
    a: (
      <>
        Off-the-shelf LMSes are built for the average customer; you pay (a lot)
        for features you&rsquo;ll never touch and bend your tracks around their
        model. We build only what your workforce needs, integrate where you
        already live (HR, payroll, ERP), and you own the data and source.
      </>
    ),
  },
  {
    q: "Does it work for non-desk workers?",
    a: (
      <>
        Yes — and that&rsquo;s usually the point. Mobile-first delivery, short
        sessions, offline support and push reminders. The 80% of staff who
        never log into a desktop will still complete training.
      </>
    ),
  },
  {
    q: "Can we run it for customers / external learners too?",
    a: (
      <>
        Yep. Same engine handles internal compliance and external course sales
        — multi-tenant brands, Stripe-backed cohorts, drip releases, and
        instructor management.
      </>
    ),
  },
  {
    q: "How long to a first release?",
    a: (
      <>
        Typical first usable release in 4–6 weeks for one role track. Full
        rollout across roles, integrations and audit exports is 8–14 weeks.
        You&rsquo;ll use real working software every week.
      </>
    ),
  },
  {
    q: "Audit / compliance exports — what format?",
    a: (
      <>
        Whatever your auditors actually accept — PDF certificate packs, CSV
        with timestamps and signatures, or signed JSON for downstream systems.
        Built around your audit, not ours.
      </>
    ),
  },
  {
    q: "Who owns the content and data?",
    a: (
      <>
        You do. Lessons, completions, certificates and the user database live
        on your infrastructure. Export everything any time.
      </>
    ),
  },
];

export default function LMSPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/#services", label: "Services" },
          { href: "/services/lms", label: "LMS Solutions" },
        ]}
        eyebrow="Service · 02 / 06 · Learning"
        title={<>Learning systems that <em>actually</em> get completed.</>}
        lede={
          <>
            Training portals, employee learning systems, compliance training,
            course platforms and progress dashboards. Built mobile-first for
            the 80% of staff who don&rsquo;t live in a browser tab.
          </>
        }
        ctas={[
          { href: "/#contact", label: "Book a discovery call", primary: true },
          { href: "#tracks", label: "See learning tracks" },
        ]}
        meta={[
          { label: "First release", value: "4–6 wks" },
          { label: "Best for", value: "50–5,000 learners" },
          { label: "Mobile-first", value: "Yes" },
          { label: "Audit exports", value: "Built-in" },
        ]}
      />

      {/* Role-based tracks visual */}
      <section id="tracks" className="section pt-0">
        <div className="wrap">
          <SectionHead
            kicker="Role-based learning"
            title={<>One platform. <em>Many</em> tracks.</>}
            blurb={
              <>
                Each learner sees only what matters for their role &mdash; with
                clear next steps, real progress, and certifications that
                won&rsquo;t expire silently in the background.
              </>
            }
          />

          <div className="reveal mt-10 grid gap-4 md:grid-cols-3">
            {TRACKS.map((track, i) => {
              const done = track.items.filter((x) => x.state === "done").length;
              const pct = Math.round((done / track.items.length) * 100);
              return (
                <article
                  key={track.role}
                  className="rounded-3xl border bg-[color:var(--card)] p-7 shadow-sm"
                  style={{ borderColor: "var(--line)", transitionDelay: `${i * 60}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span
                        className="inline-block h-3 w-3 rounded-sm"
                        style={{ background: track.color }}
                      />
                      <h3 className="font-serif text-[22px] leading-tight text-[color:var(--ink)]">
                        {track.role}
                      </h3>
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[color:var(--mute)]">
                      {done} / {track.items.length}
                    </span>
                  </div>

                  <div
                    className="mt-4 h-1.5 w-full overflow-hidden rounded-full"
                    style={{ background: "var(--line)" }}
                  >
                    <span
                      className="block h-full rounded-full"
                      style={{ width: `${pct}%`, background: track.color }}
                    />
                  </div>

                  <ul className="mt-5 space-y-3">
                    {track.items.map((it) => (
                      <li
                        key={it.t}
                        className="flex items-center gap-3 text-[14px]"
                      >
                        <span
                          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-mono"
                          style={{
                            border:
                              it.state === "todo"
                                ? "1px solid var(--line)"
                                : `1px solid ${track.color}`,
                            background:
                              it.state === "done"
                                ? track.color
                                : it.state === "active"
                                ? `color-mix(in oklab, ${track.color} 20%, transparent)`
                                : "transparent",
                            color: it.state === "done" ? "#fff" : "var(--ink)",
                          }}
                        >
                          {it.state === "done" ? "✓" : it.state === "active" ? "•" : ""}
                        </span>
                        <span
                          style={{
                            color:
                              it.state === "todo" ? "var(--mute)" : "var(--ink-2)",
                            fontWeight: it.state === "active" ? 500 : 400,
                          }}
                        >
                          {it.t}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>

          <p className="reveal mt-6 text-[13px] text-[color:var(--mute)] max-w-[64ch]">
            Tracks are configured per role, location or any custom segment.
            Re-certification windows and expiry alerts run on their own
            schedule.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section pt-0">
        <div className="wrap">
          <SectionHead
            kicker="Capabilities"
            title={<>From <em>day-one</em> onboarding to year-five recerts.</>}
          />
          <CapabilityGrid items={CAPABILITIES} />
        </div>
      </section>

      {/* Outcomes / why it works */}
      <section className="section pt-0">
        <div className="wrap">
          <SectionHead
            kicker="Why custom"
            title={<>What you get that an off-the-shelf LMS <em>won&rsquo;t</em> give you.</>}
          />
          <div
            className="reveal mt-10 grid gap-0 grid-cols-1 md:grid-cols-3 border-y"
            style={{ borderColor: "var(--line)" }}
          >
            {[
              {
                k: "Audit-ready",
                v: "Inspector-grade exports",
                d: "Your auditor's exact format, not a generic CSV. We've passed real audits.",
              },
              {
                k: "Mobile completion",
                v: "Up to 3.2× higher",
                d: "Short, native-feeling sessions for off-desk staff beat desktop LMS UX every time.",
              },
              {
                k: "Integrated",
                v: "HR · Payroll · ERP",
                d: "Onboarding kicks off training automatically. Offboarding revokes access cleanly.",
              },
            ].map((o, i, arr) => (
              <div
                key={o.k}
                className="p-7"
                style={{
                  borderColor: "var(--line)",
                  borderRight: i < arr.length - 1 ? "1px solid var(--line)" : "none",
                }}
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--c1)]">
                  {o.k}
                </div>
                <div className="mt-3 font-serif text-[40px] leading-none text-[color:var(--ink)]">
                  {o.v}
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-[color:var(--ink-2)]">
                  {o.d}
                </p>
              </div>
            ))}
          </div>

          <div
            className="reveal mt-8 rounded-3xl border p-7"
            style={{
              borderColor: "var(--line)",
              background: "color-mix(in oklab, var(--c1) 5%, var(--bg))",
            }}
          >
            <p className="text-[15px] leading-relaxed text-[color:var(--ink-2)]">
              <strong className="text-[color:var(--ink)]">Already on an LMS that almost works?</strong>{" "}
              We also do focused integrations &mdash; mobile front-ends,
              auto-enrolment from HR, audit export pipelines &mdash; without
              ripping out what you have.{" "}
              <Link
                href="/#contact"
                className="text-[color:var(--ink)] underline decoration-[color:var(--c1)] underline-offset-4"
              >
                Tell us where it's breaking
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <FAQ items={FAQ_ITEMS} />
      <CTA />
    </>
  );
}
