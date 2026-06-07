import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "How CoreFlux builds software — practical, scalable, fully owned by you.",
};

const PRINCIPLES = [
  {
    n: "01",
    title: "Ship working software, not documents.",
    pull: "Every milestone is something your team can actually use.",
    body: (
      <>
        <p>
          Documents, diagrams and slide decks have their place — they support
          the build. They don&rsquo;t replace it. We measure progress by
          working software in your hands, not by artefacts in a Notion page
          that nobody opens after the kickoff meeting.
        </p>
        <p>
          The consequence of this is that your team uses real software from
          week three, not month six. Reality lands early. Problems are cheap to
          fix, not expensive to discover.
        </p>
      </>
    ),
  },
  {
    n: "02",
    title: "Build to your data model, not ours.",
    pull: "Your products, your customers, your workflow — modelled exactly.",
    body: (
      <>
        <p>
          Off-the-shelf platforms are built for the average customer. You pay a
          per-seat license for features you&rsquo;ll never use, and you reshape
          your operations to fit their schema instead of the other way around.
        </p>
        <p>
          Custom means we start from your data — what you sell, who you serve,
          how money moves — and build outward. The schema reflects reality.
          The UI reflects how your team works, not how an enterprise product
          manager imagined a generalist might work.
        </p>
      </>
    ),
  },
  {
    n: "03",
    title: "One small team, end to end.",
    pull: "No handoffs between strategy, design, engineering and data.",
    body: (
      <>
        <p>
          The people who design the system are the people who build it, and the
          people who talked to you about the problem. There is no brief that
          travels from a strategy consultant to an offshore development team.
        </p>
        <p>
          This matters because context lives in people. The engineering decision
          made in week four should be informed by the conversation we had in
          week one. On a small team, it is. On a large agency, it usually isn&rsquo;t.
        </p>
      </>
    ),
  },
  {
    n: "04",
    title: "Fix the cost. Show the work.",
    pull: "A fixed scope and price before you commit to anything.",
    body: (
      <>
        <p>
          We don&rsquo;t run hourly retainers that meter by the ticket. Every
          engagement starts with a blueprint: what we build, what it costs,
          what success looks like, and when each piece ships. That document is
          a commitment, not an estimate.
        </p>
        <p>
          When scope changes — it always does — we renegotiate the blueprint,
          not the invoice. Surprises are for birthdays, not software budgets.
        </p>
      </>
    ),
  },
  {
    n: "05",
    title: "You own everything, no exceptions.",
    pull: "Code, data, infrastructure and accounts — all in your name.",
    body: (
      <>
        <p>
          Your GitHub repository. Your AWS or Cloudflare account. Your domain
          registrar. Your database backups. We set everything up in your name
          from day one, hand it over on launch day, and have no leverage over
          your ability to run or modify the system after we&rsquo;re done.
        </p>
        <p>
          No per-seat license that triples when you hire. No migration fee when
          you want to move hosts. No &ldquo;you need us&rdquo; unless you want us.
        </p>
      </>
    ),
  },
  {
    n: "06",
    title: "Write decisions down.",
    pull: "If it matters, it lives in writing. No verbal commitments.",
    body: (
      <>
        <p>
          Scope in a doc. Architecture decisions in a doc. Reasoning behind a
          tradeoff — in a doc. This isn&rsquo;t bureaucracy; it&rsquo;s the
          practice that stops the same argument from happening twice.
        </p>
        <p>
          When the engineer who built a system leaves, the reasoning should be
          findable. When a client asks why a decision was made six months ago,
          the answer shouldn&rsquo;t be &ldquo;I think we talked about it on a call.&rdquo;
        </p>
      </>
    ),
  },
];

export default function ApproachPage() {
  return (
    <>
      {/* Hero — editorial, no blobs */}
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
            <Link href="/approach" className="hover:text-[color:var(--c1)]">Approach</Link>
          </nav>

          <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] items-end">
            <div>
              <span className="eyebrow">
                <span className="sq" />
                Studio · Houston, TX
              </span>
              <h1
                className="title mt-5"
                style={{ fontSize: "clamp(44px, 7vw, 84px)", maxWidth: "16ch" }}
              >
                How we think about building <em>software</em>.
              </h1>
            </div>
            <div>
              <p
                className="font-serif text-[22px] leading-relaxed text-[color:var(--ink-2)] max-w-[36ch]"
              >
                Six principles we hold to across every engagement. Not rules
                imposed from outside — the things we&rsquo;ve learned actually
                matter from building real systems for real teams.
              </p>
              <div className="mt-8 flex gap-3 flex-wrap">
                <Link href="/#contact" className="btn primary">
                  Work with us <span className="arrow">↗</span>
                </Link>
                <Link href="/process" className="btn ghost">
                  See our process
                </Link>
              </div>
            </div>
          </div>

          {/* Stat bar */}
          <dl
            className="mt-14 grid grid-cols-2 md:grid-cols-4 border-t"
            style={{ borderColor: "var(--line)" }}
          >
            {[
              { label: "Studio founded", value: "2025" },
              { label: "HQ", value: "Houston, TX" },
              { label: "Team", value: "Small, senior" },
              { label: "Ownership model", value: "Yours, 100%" },
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

      {/* Manifesto — numbered principles */}
      <section className="section">
        <div className="wrap">
          <div className="space-y-0 divide-y" style={{ borderColor: "var(--line)" }}>
            {PRINCIPLES.map((p, i) => (
              <article
                key={p.n}
                className="reveal grid gap-8 py-14 md:grid-cols-[80px_1.1fr_1.3fr]"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {/* Number */}
                <div className="font-serif text-[64px] leading-none text-[color:var(--line)] select-none">
                  {p.n}
                </div>

                {/* Title + pull */}
                <div>
                  <h2 className="font-serif text-[30px] md:text-[36px] leading-tight text-[color:var(--ink)] tracking-tight max-w-[20ch]">
                    {p.title}
                  </h2>
                  <p
                    className="mt-4 font-serif italic text-[20px] leading-snug max-w-[28ch]"
                    style={{ color: "var(--c1)" }}
                  >
                    &ldquo;{p.pull}&rdquo;
                  </p>
                </div>

                {/* Body */}
                <div
                  className="space-y-4 text-[15.5px] leading-relaxed text-[color:var(--ink-2)]"
                >
                  {p.body}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer callout */}
      <section className="section pt-0">
        <div className="wrap">
          <div
            className="reveal rounded-3xl border p-10 md:p-14"
            style={{
              borderColor: "var(--line)",
              background: "color-mix(in oklab, var(--c1) 5%, var(--bg))",
            }}
          >
            <span className="kicker">In practice</span>
            <p className="mt-4 font-serif text-[32px] md:text-[40px] leading-[1.1] tracking-tight text-[color:var(--ink)] max-w-[26ch]">
              These aren&rsquo;t principles we aspire to. They&rsquo;re the
              ones that already show up in how{" "}
              <em className="italic text-[color:var(--c1)]">we actually work</em>
              .
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-[color:var(--ink-2)] max-w-[56ch]">
              The best way to test that claim is a discovery call — a
              working session, not a pitch. You describe the problem,
              we describe what we&rsquo;d build, and you decide whether it
              sounds like the way you want to work.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/#contact" className="btn primary">
                Book a discovery call <span className="arrow">↗</span>
              </Link>
              <Link href="/process" className="btn ghost">
                See the process
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
