import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import Link from "next/link";
import CTA from "@/components/home/CTA";
import StickyStack from "@/components/skiper/StickyStack";
import { tone } from "@/lib/tones";

export const metadata: Metadata = pageMetadata({
  title: "Approach",
  description:
    "How Coreflux Solutions builds software — practical, scalable, fully owned by you.",
  path: "/approach",
});

const PRINCIPLES = [
  {
    n: "01",
    title: "Ship working software, not documents.",
    pull: "Every milestone is something your team can actually use.",
    body: "We measure progress by working software in your hands — your team uses real software from week three, not month six.",
  },
  {
    n: "02",
    title: "Build to your data model, not ours.",
    pull: "Your products, your customers, your workflow — modelled exactly.",
    body: "Custom means we start from your data — what you sell, who you serve, how money moves — and build outward.",
  },
  {
    n: "03",
    title: "One small team, end to end.",
    pull: "No handoffs between strategy, design, engineering and data.",
    body: "The people who design the system are the people who build it, and the people who talked to you about the problem.",
  },
  {
    n: "04",
    title: "Fix the cost. Show the work.",
    pull: "A fixed scope and price before you commit to anything.",
    body: "When scope changes — it always does — we renegotiate the blueprint, not the invoice.",
  },
  {
    n: "05",
    title: "You own everything, no exceptions.",
    pull: "Code, data, infrastructure and accounts — all in your name.",
    body: "We set everything up in your name from day one and hand it over on launch day.",
  },
  {
    n: "06",
    title: "Write decisions down.",
    pull: "If it matters, it lives in writing. No verbal commitments.",
    body: "Scope, architecture decisions and the reasoning behind a tradeoff — in a doc, so the same argument doesn't happen twice.",
  },
];

export default function ApproachPage() {
  return (
    <>
      {/* Hero — editorial, no blobs */}
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
                Six principles we hold to across every engagement.
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

      {/* Principles — sticky stacked cards */}
      <section className="section">
        <div className="wrap">
          <StickyStack>
            {PRINCIPLES.map((p, i) => {
              const t = tone(i);
              return (
                <article
                  key={p.n}
                  className="grid min-h-[300px] gap-6 rounded-[28px] border p-8 shadow-lg md:grid-cols-[96px_1.1fr_1fr] md:items-center md:gap-10 md:p-12"
                  style={{ background: t.bg, borderColor: t.border, color: t.fg }}
                >
                  <div
                    className="font-serif text-[56px] leading-none md:text-[72px]"
                    style={{ color: t.accent }}
                    aria-hidden
                  >
                    {p.n}
                  </div>
                  <div>
                    <h2 className="font-serif text-[32px] leading-[1.05] tracking-tight md:text-[44px]">
                      {p.title}
                    </h2>
                    <p
                      className="mt-4 font-serif text-[20px] italic leading-snug"
                      style={{ color: t.accent }}
                    >
                      &ldquo;{p.pull}&rdquo;
                    </p>
                  </div>
                  <p className="text-[16px] leading-relaxed" style={{ color: t.sub }}>
                    {p.body}
                  </p>
                </article>
              );
            })}
          </StickyStack>
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
              working session, not a pitch.
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
