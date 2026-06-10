"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--mx", String(x));
      el.style.setProperty("--my", String(y));
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="hero-v2" ref={ref}>
      {/* Video background */}
      <div className="hero-v2-bg" aria-hidden>
        <video
          className="hero-v2-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="hero-v2-veil" />
        <span className="orb orb1" />
        <span className="orb orb2" />
        <span className="hero-v2-grid" />
      </div>

      <div className="hero-v2-inner wrap">
        {/* Left: copy */}
        <div className="hero-v2-copy">
          <span className="hero-v2-badge">
            <span className="ping" />
            Now booking new projects
          </span>

          <h1 className="hero-v2-title">
            Practical software for{" "}
            <span className="grad">serious</span> businesses.
          </h1>

          <p className="hero-v2-sub">
            Custom ERP, LMS, AI automation, web, apps &amp; games — without the
            enterprise complexity.
          </p>

          <div className="hero-v2-ctas">
            <Link href="/#contact" className="btn primary">
              Book a discovery call <span className="arrow">↗</span>
            </Link>
            <Link href="/#services" className="btn ghost">
              See what we build
            </Link>
          </div>
        </div>

        {/* Right: animated orbit visual */}
        <div className="hero-v2-visual" aria-hidden>
          <div className="orbit">
            <div className="orbit-ring r1">
              <span className="dot dt" />
              <span className="dot dr" />
              <span className="dot db" />
            </div>
            <div className="orbit-ring r2">
              <span className="dot dt" />
              <span className="dot dl" />
            </div>

            <div className="orbit-core">
              core<b>flux</b>
            </div>

            <span className="chip-float cf1"><span className="ic" /> ERP</span>
            <span className="chip-float cf2"><span className="ic" /> AI Automation</span>
            <span className="chip-float cf3"><span className="ic" /> LMS</span>
            <span className="chip-float cf4"><span className="ic" /> Web &amp; Apps</span>
          </div>
        </div>
      </div>

      <a href="#services" className="hero-v2-scroll" aria-label="Scroll to services">
        <span className="hero-v2-scroll-dot" />
      </a>
    </section>
  );
}
