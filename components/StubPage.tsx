import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import CTA from "@/components/home/CTA";

export type StubPageProps = {
  eyebrow: string;
  title: React.ReactNode;
  lede: React.ReactNode;
  crumbs: { href: string; label: string }[];
  meta?: { label: string; value: string }[];
  highlights: { title: string; body: string }[];
  comingSoon?: string[];
  primaryHref?: string;
};

export default function StubPage({
  eyebrow,
  title,
  lede,
  crumbs,
  meta,
  highlights,
  comingSoon = [
    "Capabilities deep-dive",
    "Selected work",
    "Pricing & engagement model",
    "Detailed FAQ",
  ],
  primaryHref = "/#contact",
}: StubPageProps) {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow={eyebrow}
        title={title}
        lede={lede}
        ctas={[
          { href: primaryHref, label: "Talk to us about this", primary: true },
          { href: "/case-studies", label: "See related work" },
        ]}
        meta={meta}
      />

      <section className="section pt-0">
        <div className="wrap">
          <SectionHead
            kicker="At a glance"
            title={<>What this <em>actually</em> covers.</>}
            blurb={
              <>
                We&rsquo;re fleshing out a full page for this service. Until
                then, here&rsquo;s the short version. For a tailored answer to
                your project,{" "}
                <Link
                  href="/#contact"
                  className="text-[color:var(--ink)] underline decoration-[color:var(--c1)] underline-offset-4"
                >
                  send us a one-liner
                </Link>
                .
              </>
            }
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((h, i) => (
              <div
                key={h.title}
                className="reveal rounded-3xl border bg-[color:var(--card)] p-7 shadow-sm"
                style={{ borderColor: "var(--line)", transitionDelay: `${i * 50}ms` }}
              >
                <h3 className="font-serif text-[24px] leading-snug text-[color:var(--ink)]">
                  {h.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-[color:var(--ink-2)]">
                  {h.body}
                </p>
              </div>
            ))}
          </div>

          <div
            className="reveal mt-12 rounded-3xl border p-8"
            style={{
              borderColor: "var(--line)",
              background: "color-mix(in oklab, var(--c1) 5%, var(--bg))",
            }}
          >
            <div className="flex flex-wrap items-center gap-3">
              <span
                className="inline-flex h-2.5 w-2.5 rounded-full"
                style={{ background: "var(--c1)" }}
              />
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--c1)]">
                Full page coming soon
              </span>
            </div>
            <h4 className="mt-3 font-serif text-[28px] leading-tight text-[color:var(--ink)] max-w-[24ch]">
              We&rsquo;re writing this one with more care than a paragraph allows.
            </h4>
            <p className="mt-3 text-[14.5px] leading-relaxed text-[color:var(--ink-2)] max-w-[60ch]">
              The full page will cover:
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {comingSoon.map((c) => (
                <li
                  key={c}
                  className="rounded-full border px-3 py-1.5 text-[12px] font-mono text-[color:var(--ink-2)]"
                  style={{ borderColor: "var(--line)", background: "rgba(255,255,255,.6)" }}
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
