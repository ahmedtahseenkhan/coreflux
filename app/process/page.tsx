import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/home/CTA";
import SectionHead from "@/components/SectionHead";

export const metadata: Metadata = {
  title: "Process",
  description:
    "Discovery, blueprint, build & iterate, launch & support — how a CoreFlux engagement runs from first call to launch.",
};

const PHASES = [
  {
    n: "01",
    label: "Discovery",
    duration: "Week 1",
    tagline: "A working session, not a sales pitch.",
    body: "We map your actual workflow, the constraints that matter, the workarounds your team has normalised, and the system you wish you had. You leave with a clear picture of what a solution looks like and whether we're the right people to build it.",
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
    body: "We turn the discovery output into a binding document: exactly what we build, what it costs, what success looks like, and when each piece ships. Nothing starts until this is signed off — by both sides.",
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
    body: "We build against the blueprint in weekly cycles. Every Friday you get something real to use — not a screenshot, not a Figma, working software in a staging environment. Your team uses it. We take the feedback and adjust.",
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
    body: "Production deployment, migration (if applicable), training for your team, and a handover session that makes us optional — not essential. Post-launch, we offer a support track for changes, scaling and new modules.",
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
    body: "Weekly async demos replace standup calls. You watch when it suits you, comment in the doc, and we respond. Your calendar stays yours.",
  },
  {
    title: "Scope changes are renegotiated, not billed",
    body: "If scope expands, we update the blueprint — not the invoice. You know the new number before any extra work starts.",
  },
  {
    title: "You can see everything, any time",
    body: "The repo is yours, the staging environment is live, the Slack is open. There is no black box between kickoff and launch.",
  },
  {
    title: "One channel, not five",
    body: "Slack for daily communication. Doc for decisions. That's it. No email threads, no project-management tool you have to learn.",
  },
];

export default function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-20 pb-14 border-b"
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
                Every engagement runs on the same backbone — small enough to
                move fast, structured enough to be predictable. You always
                know what&rsquo;s next.
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

      {/* Vertical timeline */}
      <section className="section">
        <div className="wrap">
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-[39px] top-0 bottom-0 hidden md:block w-px"
              style={{ background: "var(--line)" }}
            />

            <ol className="space-y-6">
              {PHASES.map((ph, i) => (
                <li
                  key={ph.n}
                  className="reveal relative grid gap-0 md:grid-cols-[80px_1fr] items-start"
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  {/* Number bubble */}
                  <div className="relative z-10 flex items-center justify-center">
                    <div
                      className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border-2 bg-[color:var(--bg)] font-serif text-[22px] text-[color:var(--ink)]"
                      style={{ borderColor: "var(--c1)" }}
                    >
                      {ph.n}
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className="ml-0 md:ml-8 rounded-3xl border bg-[color:var(--card)] overflow-hidden shadow-sm"
                    style={{ borderColor: "var(--line)" }}
                  >
                    {/* Card header */}
                    <div
                      className="flex flex-wrap items-center justify-between gap-4 px-7 py-5 border-b"
                      style={{ borderColor: "var(--line)" }}
                    >
                      <div>
                        <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--c1)]">
                          Phase {ph.n} · {ph.duration}
                        </div>
                        <h2 className="mt-1 font-serif text-[30px] leading-tight text-[color:var(--ink)]">
                          {ph.label}
                        </h2>
                      </div>
                      <p className="font-serif italic text-[18px] text-[color:var(--ink-2)] max-w-[28ch]">
                        &ldquo;{ph.tagline}&rdquo;
                      </p>
                    </div>

                    {/* Card body */}
                    <div className="grid gap-0 md:grid-cols-[1fr_1px_1fr]">
                      <div className="p-7">
                        <p className="text-[15px] leading-relaxed text-[color:var(--ink-2)]">
                          {ph.body}
                        </p>
                        <div
                          className="mt-5 rounded-2xl border px-4 py-3 font-mono text-[12px] text-[color:var(--mute)]"
                          style={{ borderColor: "var(--line)" }}
                        >
                          <span className="text-[color:var(--c1)]">Format:</span>{" "}
                          {ph.format}
                        </div>
                      </div>

                      <div style={{ background: "var(--line)" }} />

                      <div className="p-7">
                        <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--mute)] mb-4">
                          Deliverables
                        </div>
                        <ul className="space-y-2.5">
                          {ph.deliverables.map((d) => (
                            <li key={d} className="flex items-start gap-3 text-[14px] text-[color:var(--ink-2)]">
                              <span
                                className="mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[9px] text-white"
                                style={{ background: "var(--c1)" }}
                              >
                                ✓
                              </span>
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Working principles */}
      <section className="section pt-0">
        <div className="wrap">
          <SectionHead
            kicker="Working style"
            title={<>How the day-to-day <em>actually</em> runs.</>}
            blurb={
              <>
                The four rules we hold to keep the work clean and the
                relationship honest.
              </>
            }
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
            <h3 className="mt-4 font-serif text-[36px] md:text-[44px] leading-tight text-[color:var(--ink)] max-w-[22ch]">
              Discovery is free. It&rsquo;s a working session, not a{" "}
              <em className="italic text-[color:var(--c1)]">pitch</em>.
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-[color:var(--ink-2)] max-w-[56ch]">
              One call. You describe the problem, we describe what we&rsquo;d
              build and what it&rsquo;d cost. No commitment, no follow-up
              sequence, no deck with our logo on every slide.
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
