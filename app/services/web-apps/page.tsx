import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import CapabilityGrid from "@/components/CapabilityGrid";
import FAQ from "@/components/FAQ";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Website & App Development",
  description:
    "Business websites, booking platforms, e-commerce, mobile apps, client portals and admin dashboards built to perform.",
};

const SURFACES = [
  {
    label: "Marketing sites",
    desc: "Business websites that load fast, rank well and convert. CMS-driven where it helps, hand-coded where it matters.",
    tech: ["Next.js", "Sanity / Contentful", "Vercel", "Edge CDN"],
  },
  {
    label: "Booking platforms",
    desc: "Public booking flows, deposits, calendars, reminders, no-show recovery. Stripe-backed, mobile-first.",
    tech: ["Next.js", "Stripe", "Calendars API", "Postgres"],
  },
  {
    label: "E-commerce",
    desc: "Headless commerce on Shopify, Medusa or fully custom. Fast, indexable, with checkout you'd actually use.",
    tech: ["Shopify Hydrogen", "Medusa", "Stripe", "Algolia"],
  },
  {
    label: "Mobile apps",
    desc: "React Native for iOS + Android in one codebase, or native when the use case demands it.",
    tech: ["React Native", "Expo", "iOS", "Android"],
  },
  {
    label: "Client portals",
    desc: "Secure customer-facing surfaces — invoices, projects, files, messages — in one source of truth.",
    tech: ["Next.js", "Auth.js", "Postgres", "S3"],
  },
  {
    label: "Admin dashboards",
    desc: "Internal tools staff actually like using. Role-aware, fast, with the keyboard shortcuts power users need.",
    tech: ["Next.js", "tRPC", "Postgres", "Recharts"],
  },
];

const CAPABILITIES = [
  {
    icon: <span className="font-mono text-sm">DS</span>,
    title: "Custom design",
    body: "No templates, no theme marketplace. Every surface is designed from the brand up — typography, spacing, interaction states, dark mode if you need it.",
    bullets: ["Brand-up design", "Design system", "Interaction states", "Accessibility"],
  },
  {
    icon: <span className="font-mono text-sm">PF</span>,
    title: "Performance-first build",
    body: "Core Web Vitals matter for SEO and UX. We optimise for real users, not just Lighthouse scores.",
    bullets: ["Edge rendering", "Image optimisation", "Code splitting", "Prefetching"],
  },
  {
    icon: <span className="font-mono text-sm">A1</span>,
    title: "Accessibility",
    body: "WCAG AA by default. Keyboard navigation, screen-reader semantics, focus management — built in, not bolted on.",
    bullets: ["WCAG AA", "Keyboard nav", "Screen readers", "Colour contrast"],
  },
  {
    icon: <span className="font-mono text-sm">CX</span>,
    title: "CMS integration",
    body: "Headless CMS for content your team can edit without a developer. We pick the one that fits how you actually work.",
    bullets: ["Sanity", "Contentful", "Payload", "Structured content"],
  },
  {
    icon: <span className="font-mono text-sm">MB</span>,
    title: "Mobile apps",
    body: "React Native for one shared codebase across iOS and Android. Native modules where performance demands it.",
    bullets: ["React Native / Expo", "iOS + Android", "Push notifications", "Offline support"],
  },
  {
    icon: <span className="font-mono text-sm">AN</span>,
    title: "Analytics & conversion",
    body: "Instrumented from launch day — funnel visibility, real-user monitoring, A/B testing without re-deploys.",
    bullets: ["Posthog / GA4", "RUM", "A/B framework", "Heatmaps"],
  },
];

const TECH_STACK = [
  "Next.js 15", "React 19", "TypeScript", "Tailwind CSS",
  "Postgres", "Prisma / Drizzle", "Stripe", "Auth.js",
  "Vercel / Cloudflare", "React Native", "Expo", "Sanity",
];

const FAQ_ITEMS = [
  {
    q: "Do you do design or just development?",
    a: (
      <>
        Both. Design and engineering ship from the same small team — no
        agency-to-dev-shop handoff. You get consistent craft all the way from
        wireframe to deployed component.
      </>
    ),
  },
  {
    q: "We have a brand already — can you work with it?",
    a: (
      <>
        Yes. Bring us a brand guide (or just a logo and a colour) and we build
        the design system out from there. No insistence on starting from zero.
      </>
    ),
  },
  {
    q: "What CMS do you recommend?",
    a: (
      <>
        Sanity for structured content and complex schemas; Contentful if you&rsquo;re
        already in that ecosystem; Payload if you want a self-hosted option that
        grows into an app backend. We&rsquo;ll recommend based on your team&rsquo;s
        workflow, not ours.
      </>
    ),
  },
  {
    q: "How long to launch?",
    a: (
      <>
        A marketing site with CMS ships in 3–5 weeks. A full booking platform
        or client portal is typically 6–10 weeks to a first production release.
        Mobile apps are 8–14 weeks depending on native complexity.
      </>
    ),
  },
  {
    q: "Can you take over something someone else built?",
    a: (
      <>
        Yes — with an assessment first. We&rsquo;ll read the code, flag what
        works and what doesn&rsquo;t, and give you a realistic scope for what
        continuity looks like. We won&rsquo;t just take the retainer; the code
        has to be in a state we can stand behind.
      </>
    ),
  },
  {
    q: "Hosting, domain, email — do you handle all that?",
    a: (
      <>
        We can set it all up in your name and hand it over, or drop into an
        existing setup. Either way, every credential, account and domain
        registration ends up owned by you.
      </>
    ),
  },
];

export default function WebAppsPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/#services", label: "Services" },
          { href: "/services/web-apps", label: "Web & Apps" },
        ]}
        eyebrow="Service · 05 / 06 · Surfaces"
        title={<>Web &amp; apps that <em>look</em> as good as they perform.</>}
        lede={
          <>
            Business websites, booking platforms, e-commerce, mobile apps,
            client portals and admin dashboards. Custom design and custom code
            — no templates, no theme slop — built to be fast, accessible and
            on-brand from day one.
          </>
        }
        ctas={[
          { href: "/#contact", label: "Book a discovery call", primary: true },
          { href: "#surfaces", label: "See what we build" },
        ]}
        meta={[
          { label: "First release", value: "3–8 wks" },
          { label: "Performance", value: "Core Web Vitals" },
          { label: "Accessibility", value: "WCAG AA" },
          { label: "Mobile", value: "iOS + Android" },
        ]}
      />

      {/* Device-stack surface browser */}
      <section id="surfaces" className="section pt-0">
        <div className="wrap">
          <SectionHead
            kicker="Six surface types"
            title={<>Every surface your business <em>touches</em> customers on.</>}
            blurb={
              <>
                We build across the full stack of user-facing surfaces — from
                the marketing site a prospect finds first to the admin dashboard
                your ops team lives in every day.
              </>
            }
          />

          <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {SURFACES.map((s, i) => (
              <article
                key={s.label}
                className="reveal group overflow-hidden rounded-3xl border bg-[color:var(--card)] shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                style={{ borderColor: "var(--line)", transitionDelay: `${i * 50}ms` }}
              >
                {/* Mini browser chrome */}
                <div
                  className="flex items-center gap-1.5 border-b px-4 py-3"
                  style={{ borderColor: "var(--line)", background: "color-mix(in oklab, var(--ink) 4%, var(--bg))" }}
                >
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--c4)" }} />
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--c2)" }} />
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--c1)" }} />
                  <span
                    className="ml-2 flex-1 rounded-full px-3 py-0.5 text-[11px] font-mono text-[color:var(--mute)]"
                    style={{ background: "color-mix(in oklab, var(--ink) 6%, var(--bg))" }}
                  >
                    {s.label.toLowerCase().replace(/\s+/g, "-")}.coreflux.studio
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-[26px] leading-tight text-[color:var(--ink)]">
                    {s.label}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[color:var(--ink-2)]">
                    {s.desc}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {s.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border px-2.5 py-0.5 text-[11px] font-mono text-[color:var(--ink-2)]"
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
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="section pt-0">
        <div className="wrap">
          <div
            className="reveal rounded-3xl border bg-[color:var(--ink)] p-10 text-white"
            style={{ borderColor: "var(--ink)" }}
          >
            <div className="flex flex-wrap items-end gap-8 justify-between">
              <div>
                <span
                  className="font-mono text-[11px] uppercase tracking-[0.14em]"
                  style={{ color: "var(--c3)" }}
                >
                  Default stack
                </span>
                <h3 className="mt-2 font-serif text-[34px] leading-tight max-w-[18ch]">
                  Boring, proven tech. <em className="italic" style={{ color: "var(--c3)" }}>Custom</em> where it earns its keep.
                </h3>
                <p className="mt-3 text-[14.5px] text-white/65 max-w-[50ch]">
                  We use the same stack across projects so we know its failure
                  modes. Custom layers sit on top — not underneath.
                </p>
              </div>
              <Link href="/#contact" className="btn shrink-0" style={{ background: "white", color: "var(--ink)" }}>
                Ask about your project <span className="arrow">↗</span>
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {TECH_STACK.map((t) => (
                <span
                  key={t}
                  className="rounded-full border px-3 py-1.5 text-[12px] font-mono"
                  style={{ borderColor: "rgba(255,255,255,.15)", color: "rgba(255,255,255,.75)" }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section pt-0">
        <div className="wrap">
          <SectionHead
            kicker="Capabilities"
            title={<>Design and engineering as <em>one</em> discipline.</>}
          />
          <CapabilityGrid items={CAPABILITIES} />
        </div>
      </section>

      {/* Quality standards */}
      <section className="section pt-0">
        <div className="wrap">
          <SectionHead
            kicker="Quality bar"
            title={<>What every project ships with, <em>by default</em>.</>}
          />
          <div
            className="reveal mt-10 grid gap-0 grid-cols-1 md:grid-cols-4 border-y"
            style={{ borderColor: "var(--line)" }}
          >
            {[
              { n: "100", u: "Lighthouse", d: "Performance, accessibility and SEO scores on every deploy." },
              { n: "AA", u: "WCAG", d: "Keyboard, screen-reader and colour-contrast compliance built in from day one." },
              { n: "<1s", u: "LCP target", d: "Largest Contentful Paint under 1 second on a fast connection. Real users notice." },
              { n: "0", u: "Vendor lock-in", d: "Your repo, your domain, your accounts. Switch hosts or teams without asking us." },
            ].map((s, i, arr) => (
              <div
                key={s.u}
                className="p-7"
                style={{
                  borderRight: i < arr.length - 1 ? "1px solid var(--line)" : "none",
                }}
              >
                <div className="font-serif text-[52px] leading-none text-[color:var(--ink)]">
                  {s.n}
                </div>
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--c1)] mt-1">
                  {s.u}
                </div>
                <p className="mt-3 text-[13.5px] leading-relaxed text-[color:var(--ink-2)]">
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={FAQ_ITEMS} />
      <CTA />
    </>
  );
}
