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
          className="reveal rounded-3xl border bg-[color:var(--card)] p-7 shadow-sm transition hover:shadow-md"
          style={{ borderColor: "var(--line)", transitionDelay: `${i * 50}ms` }}
        >
          {it.icon && (
            <div
              className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl text-white"
              style={{ background: "var(--ink)" }}
            >
              {it.icon}
            </div>
          )}
          <h3 className="font-serif text-[24px] leading-snug text-[color:var(--ink)]">
            {it.title}
          </h3>
          <p className="mt-3 text-[14.5px] leading-relaxed text-[color:var(--ink-2)]">
            {it.body}
          </p>
          {it.bullets && (
            <ul className="mt-5 space-y-2">
              {it.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2 text-[13.5px] text-[color:var(--ink-2)]"
                >
                  <span
                    className="mt-1.5 h-1 w-1 shrink-0 rounded-full"
                    style={{ background: "var(--c1)" }}
                  />
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
