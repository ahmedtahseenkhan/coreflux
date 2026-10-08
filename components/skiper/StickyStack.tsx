"use client";

import {
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Children, useRef, type ReactNode } from "react";

/**
 * Cards that pin as you scroll and stack on top of each other, with the
 * earlier ones easing back in scale.
 *
 * Adapted from Skiper UI "Sticky Stacked Cards" (skiper16 / StickyCard_001)
 * by @gurvinder-singh02 — https://skiper-ui.com. Free version: attribution to
 * Skiper UI is required (credited in the site footer).
 *
 * Stacks from the md breakpoint up. On phones the cards flow normally, so a
 * card taller than the screen is never covered before it has been read.
 */
export default function StickyStack({
  children,
  top = 112,
  step = 20,
}: {
  children: ReactNode;
  /** Distance from the top of the viewport where the first card pins (px). */
  top?: number;
  /** Extra offset per card so the edges of earlier cards stay visible (px). */
  step?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const items = Children.toArray(children);

  return (
    <div ref={ref} className="relative">
      {items.map((child, i) => (
        <StackItem
          key={i}
          index={i}
          total={items.length}
          progress={scrollYProgress}
          top={top + i * step}
        >
          {child}
        </StackItem>
      ))}
    </div>
  );
}

function StackItem({
  index,
  total,
  progress,
  top,
  children,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
  top: number;
  children: ReactNode;
}) {
  const reduce = useReducedMotion();
  const card = useRef<HTMLDivElement>(null);
  const targetScale = 1 - (total - 1 - index) * 0.04;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);
  const last = index === total - 1;

  // Write the scale straight to the element: no animation features to load.
  useMotionValueEvent(scale, "change", (v) => {
    if (card.current) card.current.style.transform = reduce ? "" : `scale(${v})`;
  });

  return (
    <div
      className={`md:sticky ${last ? "" : "mb-5 md:mb-[16vh]"}`}
      style={{ top }}
    >
      <div ref={card} style={{ transformOrigin: "50% 0%" }}>
        {children}
      </div>
    </div>
  );
}
