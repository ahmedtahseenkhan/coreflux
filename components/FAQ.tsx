"use client";

import { useState } from "react";

type Item = { q: string; a: React.ReactNode };

export default function FAQ({
  items,
  kicker = "FAQ",
  title,
}: {
  items: Item[];
  kicker?: string;
  title?: React.ReactNode;
}) {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <span className="kicker">{kicker}</span>
            <h2>{title ?? <>Questions, <em>answered</em>.</>}</h2>
          </div>
          <p>
            If something isn&rsquo;t covered here, write to{" "}
            <a
              href="mailto:hello@coreflux.studio"
              className="text-[color:var(--ink)] underline decoration-[color:var(--c1)] underline-offset-4"
            >
              hello@coreflux.studio
            </a>{" "}
            &mdash; you&rsquo;ll get a real answer within a working day.
          </p>
        </div>

        <div className="mt-8 divide-y rounded-3xl border bg-[color:var(--card)]" style={{ borderColor: "var(--line)" }}>
          {items.map((it, i) => (
            <Row key={i} item={it} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Row({ item, index }: { item: Item; index: number }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <details
      open={open}
      onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open)}
      className="group reveal"
      style={{ borderColor: "var(--line)" }}
    >
      <summary className="flex cursor-pointer items-center justify-between gap-6 px-6 py-5 list-none">
        <span className="font-serif text-[22px] leading-snug text-[color:var(--ink)]">
          {item.q}
        </span>
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-[color:var(--ink)] transition group-open:rotate-45"
          style={{ borderColor: "var(--line)" }}
          aria-hidden
        >
          +
        </span>
      </summary>
      <div className="px-6 pb-6 text-[15px] leading-relaxed text-[color:var(--ink-2)] max-w-[68ch]">
        {item.a}
      </div>
    </details>
  );
}
