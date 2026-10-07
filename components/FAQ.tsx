import { isValidElement, type ReactNode } from "react";
import JsonLd from "@/components/JsonLd";

type Item = { q: string; a: ReactNode };

// Flattens a JSX answer to plain text for the FAQPage schema, so the
// structured data always matches what's on the page.
function toText(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(toText).join("");
  if (isValidElement(node)) return toText((node.props as { children?: ReactNode }).children);
  return "";
}

export default function FAQ({
  items,
  kicker = "FAQ",
  title,
}: {
  items: Item[];
  kicker?: string;
  title?: ReactNode;
}) {
  return (
    <section className="section">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((it) => ({
            "@type": "Question",
            name: it.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: toText(it.a).replace(/\s+/g, " ").trim(),
            },
          })),
        }}
      />
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <span className="kicker">{kicker}</span>
            <h2>{title ?? <>Questions, <em>answered</em>.</>}</h2>
          </div>
          <p>
            If something isn&rsquo;t covered here, write to{" "}
            <a
              href="mailto:Info@corefluxsolutions.com"
              className="text-[color:var(--ink)] underline decoration-[color:var(--c1)] underline-offset-4"
            >
              Info@corefluxsolutions.com
            </a>{" "}
            &mdash; you&rsquo;ll get a real answer within a working day.
          </p>
        </div>

        <div className="mt-8 divide-y rounded-3xl border bg-[color:var(--card)]" style={{ borderColor: "var(--line)" }}>
          {items.map((it, i) => (
            <details
              key={i}
              open={i === 0}
              className="group reveal"
              style={{ borderColor: "var(--line)" }}
            >
              <summary className="flex cursor-pointer items-center justify-between gap-6 px-6 py-5 list-none">
                <span className="font-serif text-[22px] leading-snug text-[color:var(--ink)]">
                  {it.q}
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
                {it.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
