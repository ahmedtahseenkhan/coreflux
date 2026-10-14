import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import CTA from "@/components/home/CTA";
import { STUDIES } from "@/components/case-studies-data";
import { pageMetadata } from "@/lib/site";

export function generateStaticParams() {
  return Object.keys(STUDIES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = STUDIES[slug];
  if (!s) return { title: "Case study not found" };
  return pageMetadata({ title: s.title, description: s.oneLiner, path: `/case-studies/${s.slug}` });
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = STUDIES[slug];
  if (!s) notFound();

  const otherStudies = Object.values(STUDIES).filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <>
      <PageHero
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/case-studies", label: "Case studies" },
          { href: `/case-studies/${s.slug}`, label: s.tag },
        ]}
        eyebrow={`Case study · ${s.tag} · ${s.status}`}
        title={<>{s.title}</>}
        lede={<>{s.oneLiner}</>}
        ctas={[
          { href: "/#contact", label: "Discuss a similar build", primary: true },
          { href: "/case-studies", label: "Back to all work" },
        ]}
        meta={[
          { label: "Industry", value: s.industry },
          { label: "Duration", value: s.duration },
          { label: "Outcome", value: s.result },
          { label: "Status", value: s.status },
        ]}
      />

      {/* Stack */}
      <section className="section pt-0">
        <div className="wrap">
          <div className="reveal flex flex-wrap items-center gap-2">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--mute)]">
              Stack
            </span>
            {s.stack.map((t) => (
              <span
                key={t}
                className="rounded-full border px-3 py-1.5 text-[12px] font-mono text-[color:var(--ink-2)]"
                style={{
                  borderColor: "var(--line)",
                  background: "color-mix(in oklab, var(--c1) 4%, var(--bg))",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge + Approach */}
      <section className="section pt-0">
        <div className="wrap grid gap-12 md:grid-cols-2">
          <div className="reveal">
            <span className="kicker">The challenge</span>
            <h2 className="mt-3 font-serif text-[34px] leading-tight text-[color:var(--ink)] max-w-[18ch]">
              What we walked into.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-[color:var(--ink-2)] max-w-[52ch]">
              {s.challenge}
            </p>
          </div>

          <div className="reveal">
            <span className="kicker">The approach</span>
            <h2 className="mt-3 font-serif text-[34px] leading-tight text-[color:var(--ink)] max-w-[18ch]">
              How we built it.
            </h2>
            <ol className="mt-5 space-y-4">
              {s.approach.map((a, i) => (
                <li
                  key={i}
                  className="flex gap-4 text-[15px] leading-relaxed text-[color:var(--ink-2)]"
                >
                  <span
                    className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border font-mono text-[11px] text-[color:var(--ink)]"
                    style={{ borderColor: "var(--line)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{a}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section pt-0">
        <div className="wrap">
          <SectionHead
            kicker="Outcomes"
            title={<>Numbers from the <em>real</em> rollout.</>}
          />
          <div
            className="reveal mt-10 grid gap-0 grid-cols-2 md:grid-cols-4 border-y"
            style={{ borderColor: "var(--line)" }}
          >
            {s.outcomes.map((o, i, arr) => (
              <div
                key={o.label}
                className="p-7"
                style={{
                  borderColor: "var(--line)",
                  borderRight: i < arr.length - 1 ? "1px solid var(--line)" : "none",
                }}
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--mute)]">
                  {o.label}
                </div>
                <div className="mt-3 font-serif text-[48px] leading-none text-[color:var(--ink)]">
                  {o.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section pt-0">
        <div className="wrap">
          <SectionHead kicker="More work" title={<>Other things we&rsquo;ve built.</>} />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {otherStudies.map((o) => (
              <Link
                key={o.slug}
                href={`/case-studies/${o.slug}`}
                className="reveal group rounded-3xl border bg-[color:var(--card)] p-6 transition hover:-translate-y-1 hover:shadow-md"
                style={{ borderColor: "var(--line)" }}
              >
                <span
                  className="rounded-full border px-2.5 py-1 text-[11px] font-mono uppercase tracking-[0.08em] text-[color:var(--ink-2)]"
                  style={{
                    borderColor: "var(--line)",
                    background: "color-mix(in oklab, var(--c1) 4%, var(--bg))",
                  }}
                >
                  {o.tag}
                </span>
                <h3 className="mt-4 font-serif text-[22px] leading-tight text-[color:var(--ink)]">
                  {o.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[color:var(--ink-2)]">
                  {o.oneLiner}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
