"use client";

import Link from "next/link";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import { useId, useState } from "react";

export type ExpandItem = {
  num: string;
  tag: string;
  title: string;
  desc: string;
  chips: string[];
  href: string;
};

/**
 * Panels that expand on hover, keyboard focus or tap: a horizontal strip on
 * large screens, a vertical accordion below.
 *
 * Adapted from Skiper UI "Horizontal Hover Expand" (skiper52 / HoverExpand_001)
 * and "Vertical Hover Expand" (skiper53 / HoverExpand_002) by
 * @gurvinder-singh02 — https://skiper-ui.com. Free version: attribution to
 * Skiper UI is required (credited in the site footer). Rebuilt around text
 * panels instead of images, with buttons + aria-expanded for keyboard and
 * screen-reader users.
 */
export default function HoverExpand({
  items,
  initial = 0,
}: {
  items: ExpandItem[];
  initial?: number;
}) {
  const [active, setActive] = useState(initial);
  const reduce = useReducedMotion();
  const uid = useId();
  const transition = reduce
    ? { duration: 0 }
    : { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <LazyMotion features={domAnimation} strict>
      <div className="hx">
        {items.map((it, i) => {
          const open = i === active;
          const bodyId = `${uid}-${i}`;
          return (
            <m.div
              key={it.href}
              className="hx-panel"
              data-active={open}
              initial={false}
              animate={{ flexGrow: open ? 5 : 1 }}
              transition={transition}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              <h3 className="hx-head">
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={bodyId}
                  onClick={() => setActive(i)}
                >
                  <span className="hx-num">{it.num}</span>
                  <span className="hx-title">{it.title}</span>
                  {/* Vertical label for collapsed panels on large screens */}
                  <span className="hx-title-v" aria-hidden>
                    {it.title}
                  </span>
                </button>
              </h3>

              <m.div
                id={bodyId}
                className="hx-body"
                initial={false}
                animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                transition={transition}
                inert={!open}
              >
                <div className="hx-body-inner">
                  <span className="hx-tag">{it.tag}</span>
                  <p className="hx-desc">{it.desc}</p>
                  <ul className="hx-chips">
                    {it.chips.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                  <Link href={it.href} className="hx-link">
                    Explore {it.title} <span aria-hidden>→</span>
                  </Link>
                </div>
              </m.div>
            </m.div>
          );
        })}
      </div>
    </LazyMotion>
  );
}
