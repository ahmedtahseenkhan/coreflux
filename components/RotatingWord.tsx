"use client";

import { useEffect, useState } from "react";

export default function RotatingWord({
  words,
  interval = 2200,
}: {
  words: string[];
  interval?: number;
}) {
  const [i, setI] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const id = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setI((p) => (p + 1) % words.length);
        setAnimating(false);
      }, 280);
    }, interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span
      className="relative inline-flex items-baseline"
      style={{ minWidth: "1ch" }}
    >
      <span
        aria-live="polite"
        className="font-serif italic"
        style={{
          color: "var(--c1)",
          display: "inline-block",
          transition: "opacity .28s ease, transform .28s cubic-bezier(.2,.7,.2,1)",
          opacity: animating ? 0 : 1,
          transform: animating ? "translateY(-8px)" : "translateY(0)",
        }}
      >
        {words[i]}
      </span>
    </span>
  );
}
