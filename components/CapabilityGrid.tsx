import type { ReactNode } from "react";

type Capability = {
  icon?: ReactNode;
  title: string;
  body: string;
  bullets?: string[];
};

export default function CapabilityGrid({
  items,
  cols = 3,
}: {
  items: Capability[];
  cols?: 2 | 3 | 4;
}) {
  const colClass =
    cols === 2 ? "md:grid-cols-2" : cols === 4 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`mt-10 grid gap-4 ${colClass}`}>
      {items.map((it, i) => (
        <article
          key={it.title}
          className="reveal group rounded-3xl border bg-[color:var(--card)] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          style={{ borderColor: "var(--line)", transitionDelay: `${i * 50}ms` }}
        >
          <div className="flex items-center gap-4">
            {it.icon && (
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-white transition group-hover:scale-105"
                style={{ background: "linear-gradient(135deg, var(--c4), var(--c1))" }}
              >
                {it.icon}
              </div>
            )}
            <h3 className="font-serif text-[24px] leading-tight text-[color:var(--ink)]">
              {it.title}
            </h3>
          </div>
          <p className="mt-4 text-[15px] leading-relaxed text-[color:var(--ink-2)]">
            {it.body}
          </p>
          {it.bullets && (
            <ul className="mt-5 flex flex-wrap gap-1.5">
              {it.bullets.map((b) => (
                <li
                  key={b}
                  className="rounded-full border px-2.5 py-1 font-mono text-[11.5px] text-[color:var(--ink-2)]"
                  style={{
                    borderColor: "var(--line)",
                    background: "color-mix(in oklab, var(--c1) 5%, var(--bg))",
                  }}
                >
                  {b}
                </li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </div>
  );
}
