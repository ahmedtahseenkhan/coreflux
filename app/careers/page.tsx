import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join CoreFlux — a small Houston-based studio building practical, custom software.",
};

const VALUES = [
  {
    t: "Senior bias",
    b: "We hire people who've shipped real systems. Small team, no junior cosplay — everyone owns work end-to-end.",
  },
  {
    t: "Practical taste",
    b: "We like opinionated craft, not over-engineering. The boring stack works; the custom layer is where we earn our keep.",
  },
  {
    t: "Written-first culture",
    b: "Decisions in docs, not in meetings you missed. If it matters, it's written down where everyone can find it.",
  },
  {
    t: "Real ownership",
    b: "You scope, build, ship and own outcomes for your work. We don't ticket-shuffle through a backlog.",
  },
];

const ROLES = [
  {
    title: "Senior Full-Stack Engineer",
    team: "Engineering",
    type: "Full-time · Houston / Remote",
    body: "Lead builds across our stack (Next.js, TypeScript, Postgres). You'll own client systems end-to-end.",
  },
  {
    title: "AI Engineer",
    team: "Intelligence",
    type: "Full-time · Houston / Remote",
    body: "RAG, agentic workflows, evals. You'll ship AI features that survive production traffic and audit reviews.",
  },
  {
    title: "Product Designer",
    team: "Design",
    type: "Full-time · Houston / Remote",
    body: "Custom dashboards, complex internal tools, design systems that engineers like working with.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/careers", label: "Careers" },
        ]}
        eyebrow="Studio · Careers"
        title={<>Small team. <em>Real</em> work. Houston-based.</>}
        lede={
          <>
            We&rsquo;re a young studio with serious projects in motion.
            We&rsquo;re hiring senior engineers, designers and AI builders who
            want to ship custom software end-to-end &mdash; not push tickets
            through an outsourced pipeline.
          </>
        }
        ctas={[
          { href: "mailto:careers@coreflux.studio?subject=CoreFlux%20careers", label: "Email careers@coreflux.studio", primary: true },
          { href: "#roles", label: "See open roles" },
        ]}
        meta={[
          { label: "Team", value: "Small, senior" },
          { label: "HQ", value: "Houston, TX" },
          { label: "Remote", value: "US & global" },
          { label: "Open roles", value: `${ROLES.length}` },
        ]}
      />

      <section className="section pt-0">
        <div className="wrap">
          <SectionHead
            kicker="How we work"
            title={<>What you&rsquo;re signing up <em>for</em>.</>}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {VALUES.map((v, i) => (
              <div
                key={v.t}
                className="reveal rounded-3xl border bg-[color:var(--card)] p-7"
                style={{ borderColor: "var(--line)", transitionDelay: `${i * 50}ms` }}
              >
                <h3 className="font-serif text-[26px] leading-tight text-[color:var(--ink)]">
                  {v.t}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-[color:var(--ink-2)]">
                  {v.b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="roles" className="section pt-0">
        <div className="wrap">
          <SectionHead
            kicker="Open roles"
            title={<>Roles we&rsquo;re actively <em>hiring</em>.</>}
            blurb={
              <>
                Don&rsquo;t see a fit but you think you&rsquo;re it? Email{" "}
                <Link
                  href="mailto:careers@coreflux.studio"
                  className="text-[color:var(--ink)] underline decoration-[color:var(--c1)] underline-offset-4"
                >
                  careers@coreflux.studio
                </Link>{" "}
                with what you&rsquo;d want to build here.
              </>
            }
          />
          <ul
            className="mt-10 divide-y rounded-3xl border bg-[color:var(--card)]"
            style={{ borderColor: "var(--line)" }}
          >
            {ROLES.map((r, i) => (
              <li
                key={r.title}
                className="reveal flex flex-col gap-3 p-7 md:flex-row md:items-center md:justify-between"
                style={{ transitionDelay: `${i * 50}ms`, borderColor: "var(--line)" }}
              >
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--c1)]">
                    {r.team} · {r.type}
                  </div>
                  <h4 className="mt-2 font-serif text-[26px] leading-tight text-[color:var(--ink)]">
                    {r.title}
                  </h4>
                  <p className="mt-2 max-w-[60ch] text-[14.5px] leading-relaxed text-[color:var(--ink-2)]">
                    {r.body}
                  </p>
                </div>
                <Link
                  href={`mailto:careers@coreflux.studio?subject=${encodeURIComponent(`Application: ${r.title}`)}`}
                  className="btn primary self-start md:self-auto"
                >
                  Apply <span className="arrow">↗</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA />
    </>
  );
}
