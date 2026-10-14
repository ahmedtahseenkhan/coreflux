import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";

export const metadata: Metadata = pageMetadata({
  title: "Press kit",
  description: "Coreflux Solutions brand assets, boilerplate and press contact.",
  path: "/press-kit",
});

const FACTS = [
  { label: "Studio", value: "Coreflux Solutions" },
  { label: "Founded", value: "2025" },
  { label: "HQ", value: "Houston, TX" },
  { label: "Team", value: "Small, senior" },
  { label: "Services", value: "ERP, LMS, AI, Data, Web, Apps, Games" },
  { label: "Engagement", value: "Fixed-scope, client-owned" },
];

// TODO(owner): add the real files to public/press/ and set `file` on each entry
// (e.g. file: "/press/corefluxsolutions-wordmark-light.svg"). Until a file is
// set, the button emails press@ to request it instead of linking to a 404.
const ASSETS: { name: string; note: string; file?: string; swatch?: string }[] = [
  { name: "Wordmark · Light", note: "SVG · 8KB · For light backgrounds" },
  { name: "Wordmark · Dark", note: "SVG · 8KB · For dark backgrounds" },
  { name: "Brand colour", note: "Primary purple — #7C3AED", swatch: "#7C3AED" },
  { name: "Press one-pager", note: "PDF · Boilerplate + facts · ~80KB" },
];

export default function PressKitPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/press-kit", label: "Press kit" },
        ]}
        eyebrow="Studio · Press kit"
        title={<>Press, brand and the <em>boilerplate</em> bit.</>}
        lede={
          <>
            Everything you need to write about Coreflux Solutions accurately &mdash; the
            short version, the long version, the visuals, and a real human you
            can email.
          </>
        }
        ctas={[
          { href: "mailto:press@corefluxsolutions.com?subject=Press%20enquiry", label: "Email press@corefluxsolutions.com", primary: true },
          { href: "#facts", label: "Quick facts" },
        ]}
        meta={[
          { label: "Press contact", value: "press@corefluxsolutions.com" },
          { label: "Response", value: "< 1 business day" },
          { label: "Region", value: "US / global" },
          { label: "Last updated", value: "2026" },
        ]}
      />

      <section id="facts" className="section pt-0">
        <div className="wrap">
          <SectionHead
            kicker="Quick facts"
            title={<>Boring true things, in <em>one</em> place.</>}
          />
          <dl
            className="mt-10 grid gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-y"
            style={{ borderColor: "var(--line)" }}
          >
            {FACTS.map((f, i, arr) => (
              <div
                key={f.label}
                className="p-7 border-r border-b"
                style={{
                  borderColor: "var(--line)",
                  borderRight:
                    (i + 1) % 3 === 0 || i === arr.length - 1
                      ? "none"
                      : "1px solid var(--line)",
                  borderBottom: i >= arr.length - 3 ? "none" : "1px solid var(--line)",
                }}
              >
                <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--mute)]">
                  {f.label}
                </dt>
                <dd className="mt-2 font-serif text-[24px] leading-snug text-[color:var(--ink)]">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section pt-0">
        <div className="wrap grid gap-12 md:grid-cols-2">
          <div className="reveal">
            <span className="kicker">Boilerplate · Short</span>
            <p className="mt-4 font-serif text-[26px] leading-snug text-[color:var(--ink)] max-w-[42ch]">
              Coreflux Solutions is a Houston-based software studio building custom ERP,
              LMS, AI automation, data migration, web, app and gaming solutions
              for businesses that need practical, scalable technology &mdash;
              without enterprise-level complexity.
            </p>
          </div>
          <div className="reveal">
            <span className="kicker">Boilerplate · Long</span>
            <p className="mt-4 text-[15px] leading-relaxed text-[color:var(--ink-2)]">
              Coreflux Solutions is a small, senior software studio based in Houston,
              Texas. The team builds custom operational systems &mdash; ERP,
              LMS, AI automation, data migration, web and mobile applications,
              and interactive games &mdash; for businesses that have outgrown
              spreadsheets but don&rsquo;t want the cost, lock-in or complexity
              of enterprise platforms. Engagements run on fixed-scope
              blueprints with weekly working releases and full client
              ownership of code, data and infrastructure.
            </p>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="wrap">
          <SectionHead
            kicker="Assets"
            title={<>Brand and downloadables.</>}
            blurb={
              <>
                These links will be live once the press kit ships in full.
                Email{" "}
                <Link
                  href="mailto:press@corefluxsolutions.com"
                  className="text-[color:var(--ink)] underline decoration-[color:var(--c1)] underline-offset-4"
                >
                  press@corefluxsolutions.com
                </Link>{" "}
                for the originals in the meantime.
              </>
            }
          />
          <ul
            className="mt-10 divide-y rounded-3xl border bg-[color:var(--card)]"
            style={{ borderColor: "var(--line)" }}
          >
            {ASSETS.map((a, i) => (
              <li
                key={a.name}
                className="reveal flex flex-col gap-3 p-6 md:flex-row md:items-center md:justify-between"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div>
                  <h3 className="font-serif text-[22px] leading-snug text-[color:var(--ink)]">
                    {a.name}
                  </h3>
                  <p className="mt-1 text-[13px] text-[color:var(--mute)]">
                    {a.note}
                  </p>
                </div>
                {a.swatch ? (
                  <span
                    className="h-11 w-11 shrink-0 self-start rounded-xl border md:self-auto"
                    style={{ background: a.swatch, borderColor: "var(--line)" }}
                    aria-hidden
                  />
                ) : (
                  <a
                    href={
                      a.file ??
                      `mailto:press@corefluxsolutions.com?subject=${encodeURIComponent(`Press kit: ${a.name}`)}`
                    }
                    className="btn ghost self-start md:self-auto"
                  >
                    {a.file ? "Download" : "Request"}
                    <span className="arrow">↗</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
