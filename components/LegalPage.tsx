import Link from "next/link";
import type { ReactNode } from "react";

export type LegalSection = {
  heading: string;
  /** Final text, once written. Until then the TODO box is shown. */
  body?: ReactNode;
  /** TODO(owner): what still needs to be written for this section. */
  todo?: string;
  /** Facts taken from how the site actually works, to build the text from. */
  facts?: string[];
};

export default function LegalPage({
  title,
  path,
  label,
  lastUpdated,
  sections,
}: {
  title: ReactNode;
  path: string;
  label: string;
  /** TODO(owner): set when the final text is published. */
  lastUpdated?: string;
  sections: LegalSection[];
}) {
  return (
    <section className="section" style={{ paddingTop: 128 }}>
      <div className="wrap max-w-[820px]">
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--mute)]"
        >
          <Link href="/" className="hover:text-[color:var(--c1)]">Home</Link>
          <span aria-hidden>/</span>
          <Link href={path} className="hover:text-[color:var(--c1)]">{label}</Link>
        </nav>

        <span className="kicker">Legal</span>
        <h1 className="title" style={{ fontSize: "clamp(40px, 6vw, 68px)" }}>
          {title}
        </h1>
        <p className="mt-5 font-mono text-[12px] uppercase tracking-[0.1em] text-[color:var(--mute)]">
          Last updated: {lastUpdated ?? "TODO"}
        </p>

        <div className="mt-12 space-y-12">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="font-serif text-[30px] leading-tight text-[color:var(--ink)]">
                {s.heading}
              </h2>
              {s.body ? (
                <div className="mt-4 space-y-4 text-[15.5px] leading-relaxed text-[color:var(--ink-2)]">
                  {s.body}
                </div>
              ) : (
                <div
                  className="mt-4 rounded-2xl border-2 border-dashed p-5 text-[14.5px] leading-relaxed text-[color:var(--ink-2)]"
                  style={{ borderColor: "var(--c1)", background: "color-mix(in oklab, var(--c1) 5%, var(--bg))" }}
                >
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--c1)]">
                    TODO — text needed before launch
                  </p>
                  {s.todo && <p className="mt-2">{s.todo}</p>}
                  {s.facts && s.facts.length > 0 && (
                    <>
                      <p className="mt-3 font-semibold text-[color:var(--ink)]">
                        What the site actually does (from the code):
                      </p>
                      <ul className="mt-2 list-disc space-y-1.5 pl-5">
                        {s.facts.map((f) => (
                          <li key={f}>{f}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
