import Link from "next/link";
import type { ReactNode } from "react";

type Crumb = { href: string; label: string };

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  lede: ReactNode;
  ctas?: { href: string; label: string; primary?: boolean }[];
  crumbs?: Crumb[];
  meta?: { label: string; value: string }[];
  accent?: "purple" | "violet" | "indigo";
};

export default function PageHero({
  eyebrow,
  title,
  lede,
  ctas = [{ href: "/#contact", label: "Start a project", primary: true }],
  crumbs,
  meta,
}: PageHeroProps) {
  return (
    <section className="hero" style={{ paddingTop: 60, paddingBottom: 70 }}>
      <div className="dots" />
      <div className="blob-field" aria-hidden>
        <span className="blob b1" />
        <span className="blob b2" />
        <span className="blob b3" />
      </div>

      <div className="wrap hero-inner">
        {crumbs && (
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--mute)]"
          >
            {crumbs.map((c, i) => (
              <span key={c.href} className="flex items-center gap-2">
                <Link href={c.href} className="hover:text-[color:var(--c1)]">
                  {c.label}
                </Link>
                {i < crumbs.length - 1 && <span aria-hidden>/</span>}
              </span>
            ))}
          </nav>
        )}

        <span className="eyebrow">
          <span className="sq" />
          {eyebrow}
        </span>

        <h1
          className="title"
          style={{ fontSize: "clamp(40px, 6.5vw, 80px)", maxWidth: "20ch" }}
        >
          {title}
        </h1>

        <p className="lede">{lede}</p>

        <div className="hero-ctas">
          {ctas.map((c) => (
            <Link
              key={c.href + c.label}
              href={c.href}
              className={`btn ${c.primary ? "primary" : "ghost"}`}
            >
              {c.label}
              {c.primary && <span className="arrow">↗</span>}
            </Link>
          ))}
        </div>

        {meta && meta.length > 0 && (
          <dl
            className="mt-14 grid gap-0 grid-cols-2 md:grid-cols-4 border-y"
            style={{ borderColor: "var(--line)" }}
          >
            {meta.map((m, i) => (
              <div
                key={m.label}
                className="p-5 md:border-r"
                style={{
                  borderColor: "var(--line)",
                  borderRight: i < meta.length - 1 ? "1px solid var(--line)" : "none",
                }}
              >
                <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--mute)]">
                  {m.label}
                </dt>
                <dd className="mt-2 font-serif text-[28px] leading-tight text-[color:var(--ink)]">
                  {m.value}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}
