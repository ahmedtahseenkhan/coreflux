import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import CapabilityGrid from "@/components/CapabilityGrid";
import FAQ from "@/components/FAQ";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Gaming & Interactive Apps",
  description:
    "Mobile games, web games, educational games, training simulations and gamified apps with measurable outcomes.",
};

const CAPABILITIES = [
  {
    icon: <span className="font-mono text-sm">MG</span>,
    title: "Mobile games",
    body: "Casual or session-driven titles with retention loops, in-app economies and store submission handled. iOS + Android.",
    bullets: ["React Native / Unity", "Retention loops", "In-app economy", "Store submission"],
  },
  {
    icon: <span className="font-mono text-sm">WG</span>,
    title: "Web games",
    body: "Instant-load games that run in any browser. No app-store friction — share a link, play. PixiJS for 2D, Three.js for 3D.",
    bullets: ["PixiJS / Three.js", "No install", "Instant load", "Social sharing"],
  },
  {
    icon: <span className="font-mono text-sm">EG</span>,
    title: "Educational games",
    body: "Curriculum-aligned interactive experiences for schools, edtech platforms or corporate training. Learning outcomes built into the design.",
    bullets: ["Learning outcomes", "Curriculum mapping", "Progress tracking", "Teacher dashboard"],
  },
  {
    icon: <span className="font-mono text-sm">TS</span>,
    title: "Training simulations",
    body: "Branching scenarios, consequence-driven decision trees and scoring for compliance, onboarding or skills development.",
    bullets: ["Branching scenarios", "Consequence trees", "Scoring + leaderboard", "Certificate link"],
  },
  {
    icon: <span className="font-mono text-sm">GA</span>,
    title: "Gamified apps",
    body: "Points, streaks, levels and social leaderboards inside otherwise-serious software — used surgically to drive behaviour change.",
    bullets: ["Points + streaks", "Leaderboards", "Achievement system", "Push nudges"],
  },
  {
    icon: <span className="font-mono text-sm">AN</span>,
    title: "Analytics & balance",
    body: "Every game ships with telemetry — funnels, retention, balance metrics. You tune from data, not gut.",
    bullets: ["Session funnels", "Retention curves", "Balance telemetry", "A/B scenarios"],
  },
];

const METRICS = [
  { stat: "3.2×", label: "Completion vs. slide deck", context: "Training simulation vs. PDF baseline" },
  { stat: "62%", label: "Weekly return rate", context: "Gamified training after 8 weeks" },
  { stat: "11min", label: "Avg. session length", context: "Mobile-first educational game" },
  { stat: "24", label: "Scenarios per project", context: "Typical training sim scope" },
];

const GENRES = [
  { tag: "Compliance", name: "Safety training sim", metric: "↑ 3.1× completion" },
  { tag: "Onboarding", name: "New-hire experience", metric: "↓ 40% time-to-productivity" },
  { tag: "Sales training", name: "Pitch scenario simulator", metric: "↑ 28% deal close rate" },
  { tag: "Education", name: "Maths curriculum game", metric: "93% learner retention" },
  { tag: "Customer", name: "Loyalty gamification", metric: "↑ 55% app DAU" },
  { tag: "Healthcare", name: "Protocol decision tree", metric: "100% compliance audit pass" },
];

const FAQ_ITEMS = [
  {
    q: "Can a game actually improve training outcomes?",
    a: (
      <>
        Yes — with the right design. Slide decks produce 28–30% completion
        rates. Branching scenarios with consequence-driven feedback and scoring
        produce 80–95%, with better retention at 30 days. We build both and
        measure both.
      </>
    ),
  },
  {
    q: "What's the difference between a gamified app and a game?",
    a: (
      <>
        A gamified app adds game mechanics (points, streaks, leaderboards) to
        an otherwise functional app. A game is built as a game from the ground
        up. We do both — the distinction matters for design and scope.
      </>
    ),
  },
  {
    q: "What engine do you use?",
    a: (
      <>
        PixiJS for web-based 2D (instant load, no install), Unity for mobile
        titles that need native performance, React Native for cross-platform
        apps with light game mechanics. We pick the engine that fits the
        distribution target, not the one we're comfortable with.
      </>
    ),
  },
  {
    q: "How long does a game take to build?",
    a: (
      <>
        A focused training simulation (1 scenario set, 15–25 branches) ships
        in 6–8 weeks. A full mobile game with meta-game and economy is
        typically 12–20 weeks. Web games land in 5–10 weeks depending on scope.
      </>
    ),
  },
  {
    q: "Do you handle App Store submission?",
    a: (
      <>
        Yes — accounts, certificates, screenshots, metadata, review responses.
        We&rsquo;ve been through the review process enough times to know what
        flags reviewers and what doesn&rsquo;t.
      </>
    ),
  },
  {
    q: "Can you add a leaderboard / scoring to our existing app?",
    a: (
      <>
        Yes. Focused gamification drops are a common engagement &mdash; 2–4
        weeks to add a meaningful mechanic (streak, leaderboard, achievement
        system) to a running product.
      </>
    ),
  },
];

export default function GamesSimsPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/#services", label: "Services" },
          { href: "/services/games-sims", label: "Games & Sims" },
        ]}
        eyebrow="Service · 06 / 06 · Engagement"
        title={<>Games that <em>actually</em> move the metric.</>}
        lede={
          <>
            Mobile games, web games, educational games, training simulations and
            gamified apps — built with the same engineering discipline as our
            serious software, pointed at engagement. Measurable outcomes, not
            vanity metrics.
          </>
        }
        ctas={[
          { href: "/#contact", label: "Talk to us about a project", primary: true },
          { href: "#outcomes", label: "See the outcomes" },
        ]}
        meta={[
          { label: "Typical scope", value: "6–14 wks" },
          { label: "Engines", value: "PixiJS · Unity · RN" },
          { label: "Platforms", value: "Web · iOS · Android" },
          { label: "Analytics", value: "Built-in" },
        ]}
      />

      {/* Game HUD visual */}
      <section id="outcomes" className="section pt-0">
        <div className="wrap">
          <SectionHead
            kicker="Measurable outcomes"
            title={<>Fun is a strategy. <em>Metrics</em> are the proof.</>}
            blurb={
              <>
                Every game we ship is instrumented from day one. Completion,
                retention, session length, scenario success rates — we build
                the telemetry alongside the game, not after.
              </>
            }
          />

          {/* HUD-style stats panel */}
          <div
            className="reveal mt-10 overflow-hidden rounded-3xl border bg-[color:var(--ink)]"
            style={{ borderColor: "var(--ink)" }}
          >
            {/* Top HUD bar */}
            <div
              className="flex items-center justify-between px-6 py-3 font-mono text-[11px] uppercase tracking-[0.14em]"
              style={{
                borderBottom: "1px solid rgba(255,255,255,.1)",
                color: "rgba(255,255,255,.5)",
              }}
            >
              <span style={{ color: "var(--c3)" }}>◆ Coreflux Solutions — Analytics Dashboard</span>
              <span>Session · Live</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4">
              {METRICS.map((m, i, arr) => (
                <div
                  key={m.label}
                  className="p-7"
                  style={{
                    borderRight: i < arr.length - 1 ? "1px solid rgba(255,255,255,.08)" : "none",
                    borderBottom: "1px solid rgba(255,255,255,.08)",
                  }}
                >
                  <div className="font-serif text-[52px] leading-none text-white">
                    {m.stat}
                  </div>
                  <div
                    className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em]"
                    style={{ color: "var(--c3)" }}
                  >
                    {m.label}
                  </div>
                  <div className="mt-1 text-[12px]" style={{ color: "rgba(255,255,255,.45)" }}>
                    {m.context}
                  </div>
                </div>
              ))}
            </div>

            {/* Retention curve */}
            <div
              className="px-7 py-6"
              style={{ borderTop: "1px solid rgba(255,255,255,.08)" }}
            >
              <div
                className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em]"
                style={{ color: "rgba(255,255,255,.4)" }}
              >
                7-day retention curve
              </div>
              <RetentionCurve />
            </div>
          </div>
        </div>
      </section>

      {/* Genre / use-case gallery */}
      <section className="section pt-0">
        <div className="wrap">
          <SectionHead
            kicker="Use cases"
            title={<>Six industries. Same <em>toolkit</em>.</>}
            blurb={
              <>
                Game design principles transfer. Whether the player is a new
                hire, a sales rep or a child learning maths, the mechanics of
                progress, feedback and reward work the same way.
              </>
            }
          />

          <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {GENRES.map((g, i) => (
              <article
                key={g.name}
                className="reveal group relative overflow-hidden rounded-3xl border bg-[color:var(--card)] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                style={{ borderColor: "var(--line)", transitionDelay: `${i * 50}ms` }}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(100% 60% at 0% 0%, color-mix(in oklab, var(--c1) 12%, transparent), transparent 60%)",
                  }}
                />
                <span
                  className="relative rounded-full border px-2.5 py-1 text-[11px] font-mono uppercase tracking-[0.08em] text-[color:var(--c1)]"
                  style={{ borderColor: "color-mix(in oklab, var(--c1) 30%, var(--line))" }}
                >
                  {g.tag}
                </span>
                <h3 className="relative mt-4 font-serif text-[26px] leading-tight text-[color:var(--ink)]">
                  {g.name}
                </h3>
                <div
                  className="relative mt-4 flex items-center gap-2 font-mono text-[12px]"
                  style={{ color: "var(--c1)" }}
                >
                  <span
                    className="inline-block h-1.5 w-1.5 rounded-full"
                    style={{ background: "var(--c1)" }}
                  />
                  {g.metric}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section pt-0">
        <div className="wrap">
          <SectionHead
            kicker="Capabilities"
            title={<>From scenario to <em>store</em>.</>}
          />
          <CapabilityGrid items={CAPABILITIES} />
        </div>
      </section>

      {/* Positioning callout */}
      <section className="section pt-0">
        <div className="wrap">
          <div
            className="reveal rounded-3xl border p-10 md:p-14"
            style={{
              borderColor: "var(--line)",
              background: "color-mix(in oklab, var(--c1) 5%, var(--bg))",
            }}
          >
            <span className="kicker">The real case for games</span>
            <p className="mt-4 font-serif text-[32px] md:text-[42px] leading-[1.1] tracking-tight text-[color:var(--ink)] max-w-[26ch]">
              A slide deck is a monologue. A simulation is a{" "}
              <em className="italic text-[color:var(--c1)]">conversation</em>{" "}
              — and people remember conversations.
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-[color:var(--ink-2)] max-w-[60ch]">
              The same engineering toolkit that builds an ERP or a booking
              platform can build a branching scenario or a retention loop.
              We just point it at engagement instead of operations &mdash; and
              we measure whether it worked.
            </p>
            <Link href="/#contact" className="btn primary mt-8 inline-flex">
              Tell us what you&rsquo;re trying to change <span className="arrow">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <FAQ items={FAQ_ITEMS} />
      <CTA />
    </>
  );
}

function RetentionCurve() {
  const points = [100, 78, 65, 58, 54, 51, 49];
  const days = ["D1", "D2", "D3", "D4", "D5", "D6", "D7"];
  const w = 600;
  const h = 80;
  const pad = 16;
  const xs = points.map((_, i) => pad + (i * (w - pad * 2)) / (points.length - 1));
  const ys = points.map((p) => h - pad - ((p / 100) * (h - pad * 2)));
  const path = xs.map((x, i) => `${i === 0 ? "M" : "L"} ${x} ${ys[i]}`).join(" ");
  const area = `${path} L ${xs[xs.length - 1]} ${h - pad} L ${xs[0]} ${h - pad} Z`;

  return (
    <div className="relative">
      <svg viewBox={`0 0 ${w} ${h}`} width="100%" height={80} aria-label="Retention curve">
        <defs>
          <linearGradient id="retentionGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--c1)" stopOpacity=".35" />
            <stop offset="100%" stopColor="var(--c1)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={area} fill="url(#retentionGrad)" />
        <path d={path} fill="none" stroke="var(--c1)" strokeWidth="2" strokeLinejoin="round" />
        {xs.map((x, i) => (
          <g key={days[i]}>
            <circle cx={x} cy={ys[i]} r="3.5" fill="var(--c1)" />
            <text
              x={x}
              y={h - 2}
              textAnchor="middle"
              fontSize="10"
              fontFamily="var(--font-geist-mono, monospace)"
              fill="rgba(255,255,255,.35)"
            >
              {days[i]}
            </text>
            <text
              x={x}
              y={ys[i] - 8}
              textAnchor="middle"
              fontSize="9"
              fontFamily="var(--font-geist-mono, monospace)"
              fill="rgba(255,255,255,.6)"
            >
              {points[i]}%
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
