import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import Link from "next/link";
import CTA from "@/components/home/CTA";
import SectionHead from "@/components/SectionHead";
import StickyStack from "@/components/skiper/StickyStack";
import { tone } from "@/lib/tones";

export const metadata: Metadata = pageMetadata({
  title: "Process",
  description:
    "Discovery, blueprint, build & iterate, launch & support — how a Coreflux Solutions engagement runs from first call to launch.",
  path: "/process",
});

const PHASES = [
  {
    n: "01",
    label: "Discovery",
    duration: "Week 1",
    tagline: "A working session, not a sales pitch.",
    body: "We map your actual workflow, the constraints that matter, and the system you wish you had.",
    deliverables: [
      "Workflow map (your current state)",
      "Problem statement, agreed in writing",
      "First-cut scope options (light / full / phased)",
      "Ballpark range — before you commit to anything",
    ],
    format: "1–2 video calls · Shared doc · No deck",
  },
  {
    n: "02",
    label: "Blueprint",
    duration: "Week 2",
    tagline: "A fixed-scope plan you can hold us to.",
    body: "A binding document: exactly what we build, what it costs, and when each piece ships. Nothing starts until both sides sign off.",
    deliverables: [
      "Fixed scope (what's in, what's out)",
      "Fixed price and payment schedule",
      "Architecture diagram and data model sketch",
      "Milestone map with weekly release targets",
      "Acceptance criteria per milestone",
    ],
    format: "Shared blueprint doc · 1 review call · Sign-off",
  },
  {
    n: "03",
    label: "Build & iterate",
    duration: "Weeks 3 – N",
    tagline: "Weekly working releases. Reality lands early.",
    body: "Every Friday you get working software in a staging environment. Your team uses it; we adjust.",
    deliverables: [
      "Weekly deployed release (staging)",
      "Async demo recording per release",
      "Updated milestone tracker",
      "Decision log for any scope changes",
    ],
    format: "Async weekly demo · Shared Slack channel · No status meetings",
  },
  {
    n: "04",
    label: "Launch & support",
    duration: "Final week + ongoing",
    tagline: "Hand-off with everything in your name.",
    body: "Production deployment, migration, training and a handover that makes us optional — not essential.",
    deliverables: [
      "Production deployment to your infrastructure",
      "Data migration (if in scope)",
      "Team training session + recorded walkthrough",
      "Written documentation (schema, runbook, decisions)",
      "Full repository and credential transfer",
      "Optional: post-launch support retainer",
    ],
    format: "Live training · Recorded docs · Credentials in your name",
  },
];

const PRINCIPLES = [
  {
    title: "No status meetings",
    body: "Weekly async demos replace standup calls. Your calendar stays yours.",
  },
  {
    title: "Scope changes are renegotiated, not billed",
    body: "If scope expands, we update the blueprint — not the invoice.",
  },
  {
    title: "You can see everything, any time",
    body: "The repo is yours, the staging environment is live, the Slack is open.",
  },
  {
    title: "One channel, not five",
    body: "Slack for daily communication. Doc for decisions. That's it.",
  },
];

export default function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-14 border-b"
        style={{ borderColor: "var(--line)" }}
      >
        <div className="wrap">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--mute)]"
          >
            <Link href="/" className="hover:text-[color:var(--c1)]">Home</Link>
            <span aria-hidden>/</span>
            <Link href="/process" className="hover:text-[color:var(--c1)]">Process</Link>
          </nav>

          <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] items-end">
            <div>
              <span className="eyebrow">
                <span className="sq" />
                Studio · How we work
              </span>
              <h1
                className="title mt-5"
                style={{ fontSize: "clamp(44px, 7vw, 84px)", maxWidth: "16ch" }}
              >
                Four phases. Weekly working <em>releases</em>.
              </h1>
            </div>
            <div>
              <p className="font-serif text-[22px] leading-relaxed text-[color:var(--ink-2)] max-w-[36ch]">
                Every engagement runs on the same backbone. You always know
                what&rsquo;s next.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/#contact" className="btn primary">
                  Start with discovery <span className="arrow">↗</span>
                </Link>
                <Link href="/approach" className="btn ghost">
                  Our approach
                </Link>
              </div>
            </div>
          </div>

          <dl
            className="mt-14 grid grid-cols-2 md:grid-cols-4 border-t"
            style={{ borderColor: "var(--line)" }}
          >
            {[
              { label: "Discovery", value: "1 wk" },
              { label: "Blueprint", value: "1 wk" },
              { label: "First working release", value: "Week 3" },
              { label: "Delivery cadence", value: "Weekly" },
            ].map((s, i, arr) => (
              <div
                key={s.label}
                className="pt-5 pr-8"
                style={{ borderRight: i < arr.length - 1 ? "1px solid var(--line)" : "none" }}
              >
                <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--mute)]">
                  {s.label}
                </dt>
                <dd className="mt-1.5 font-serif text-[26px] text-[color:var(--ink)]">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Phases — sticky stacked cards */}
      <section className="section">
        <div className="wrap">
          <StickyStack>
            {PHASES.map((ph, i) => {
              const t = tone(i);
              return (
                <article
                  key={ph.n}
                  className="rounded-[28px] border p-8 shadow-lg md:p-12"
                  style={{ background: t.bg, borderColor: t.border, color: t.fg }}
                >
                  <div
                    className="flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.14em]"
                    style={{ color: t.accent }}
                  >
                    <span>
                      Phase {ph.n} · {ph.duration}
                    </span>
                    <span style={{ color: t.sub }}>{ph.format}</span>
                  </div>
                  <div className="mt-8 grid gap-8 md:grid-cols-[1fr_1.1fr] md:items-end">
                    <div>
                      <h2 className="font-serif text-[48px] leading-none tracking-tight md:text-[68px]">
                        {ph.label}
                      </h2>
                      <p
                        className="mt-4 font-serif text-[20px] italic leading-snug"
                        style={{ color: t.accent }}
                      >
                        &ldquo;{ph.tagline}&rdquo;
                      </p>
                    </div>
                    <div>
                      <p className="text-[16px] leading-relaxed" style={{ color: t.sub }}>
                        {ph.body}
                      </p>
                      <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Deliverables">
                        {ph.deliverables.map((d) => (
                          <li
                            key={d}
                            className="rounded-full border px-3 py-1.5 text-[12.5px]"
                            style={{ borderColor: t.chipBorder, color: t.sub }}
                          >
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </StickyStack>
        </div>
      </section>

      {/* Working principles */}
      <section className="section pt-0">
        <div className="wrap">
          <SectionHead
            kicker="Working style"
            title={<>How the day-to-day <em>actually</em> runs.</>}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {PRINCIPLES.map((p, i) => (
              <div
                key={p.title}
                className="reveal rounded-3xl border bg-[color:var(--card)] p-7"
                style={{ borderColor: "var(--line)", transitionDelay: `${i * 60}ms` }}
              >
                <h3 className="font-serif text-[26px] leading-tight text-[color:var(--ink)]">
                  {p.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-[color:var(--ink-2)]">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Start CTA */}
      <section className="section pt-0">
        <div className="wrap">
          <div
            className="reveal rounded-3xl border p-10 md:p-14"
            style={{
              borderColor: "var(--line)",
              background: "color-mix(in oklab, var(--c1) 5%, var(--bg))",
            }}
          >
            <span className="kicker">Start here</span>
            <h2 className="mt-4 font-serif text-[36px] md:text-[44px] leading-tight text-[color:var(--ink)] max-w-[22ch]">
              Discovery is free. It&rsquo;s a working session, not a{" "}
              <em className="italic text-[color:var(--c1)]">pitch</em>.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[color:var(--ink-2)] max-w-[56ch]">
              One call. You describe the problem, we describe what we&rsquo;d
              build and what it&rsquo;d cost.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/#contact" className="btn primary">
                Book a discovery call <span className="arrow">↗</span>
              </Link>
              <Link href="/case-studies" className="btn ghost">
                See what we&rsquo;ve shipped
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
