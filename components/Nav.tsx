"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SERVICES, STUDIO, type NavItem } from "./nav-data";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<null | "services" | "studio">(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);

  // Close on outside click / Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    }
    function onClick(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  const hoverOpen = (menu: "services" | "studio") => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(menu);
  };
  const hoverClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  };

  return (
    <header className="nav" ref={headerRef}>
      <div className="nav-inner">
        <Link href="/" className="logo" onClick={() => setOpenMenu(null)}>
          coreflux<span className="dot" />
        </Link>

        <nav className="links" aria-label="Primary">
          {/* Services mega-dropdown */}
          <div
            className="has-mega"
            onMouseEnter={() => hoverOpen("services")}
            onMouseLeave={hoverClose}
          >
            <button
              className="mega-trigger"
              data-open={openMenu === "services"}
              aria-expanded={openMenu === "services"}
              aria-haspopup="true"
              onClick={() =>
                setOpenMenu((m) => (m === "services" ? null : "services"))
              }
            >
              Services <span className="caret">▾</span>
            </button>
            <MegaPanel
              open={openMenu === "services"}
              items={SERVICES}
              footHref="/#services"
              footLabel="All six service lines"
              onNavigate={() => setOpenMenu(null)}
            />
          </div>

          {/* Studio mega-dropdown */}
          <div
            className="has-mega"
            onMouseEnter={() => hoverOpen("studio")}
            onMouseLeave={hoverClose}
          >
            <button
              className="mega-trigger"
              data-open={openMenu === "studio"}
              aria-expanded={openMenu === "studio"}
              aria-haspopup="true"
              onClick={() =>
                setOpenMenu((m) => (m === "studio" ? null : "studio"))
              }
            >
              Studio <span className="caret">▾</span>
            </button>
            <MegaPanel
              open={openMenu === "studio"}
              items={STUDIO}
              footHref="/case-studies"
              footLabel="See selected work"
              onNavigate={() => setOpenMenu(null)}
            />
          </div>

          <Link href="/case-studies">Work</Link>
          <Link href="/#contact">Contact</Link>
        </nav>

        <span className="spacer" />

        <button
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          className="md:hidden btn ghost"
          onClick={() => setMobileOpen((s) => !s)}
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>

        <Link className="btn primary" href="/#contact">
          Let&rsquo;s talk
          <span className="arrow">↗</span>
        </Link>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden mt-3 rounded-3xl border bg-white/90 backdrop-blur p-5 max-h-[70vh] overflow-y-auto"
          style={{ borderColor: "var(--line)" }}
        >
          <MobileGroup
            title="Services"
            items={SERVICES}
            onNavigate={() => setMobileOpen(false)}
          />
          <MobileGroup
            title="Studio"
            items={STUDIO}
            onNavigate={() => setMobileOpen(false)}
          />
          <Link
            href="/#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 btn primary w-full justify-center"
          >
            Let&rsquo;s talk <span className="arrow">↗</span>
          </Link>
        </div>
      )}
    </header>
  );
}

function MegaPanel({
  open,
  items,
  footHref,
  footLabel,
  onNavigate,
}: {
  open: boolean;
  items: NavItem[];
  footHref: string;
  footLabel: string;
  onNavigate: () => void;
}) {
  return (
    <div className={`mega-panel ${open ? "open" : ""}`} role="menu">
      <div className="mega-grid">
        {items.map((it) => (
          <Link
            key={it.href}
            href={it.href}
            className="mega-item"
            role="menuitem"
            onClick={onNavigate}
            tabIndex={open ? 0 : -1}
          >
            <span className="mega-ico">{it.ico}</span>
            <span>
              <span className="mega-it-title">{it.label}</span>
              <span className="mega-it-desc">{it.desc}</span>
            </span>
          </Link>
        ))}
      </div>
      <div className="mega-foot">
        <span>Every project ships from one small team.</span>
        <Link href={footHref} onClick={onNavigate}>
          {footLabel} <span className="arrow">↗</span>
        </Link>
      </div>
    </div>
  );
}

function MobileGroup({
  title,
  items,
  onNavigate,
}: {
  title: string;
  items: NavItem[];
  onNavigate: () => void;
}) {
  return (
    <div className="mb-4">
      <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--mute)] mb-2">
        {title}
      </div>
      <div className="grid gap-1">
        {items.map((it) => (
          <Link
            key={it.href}
            href={it.href}
            onClick={onNavigate}
            className="flex items-center gap-3 rounded-2xl px-3 py-2.5 active:bg-[color:var(--bg-2)]"
          >
            <span className="mega-ico" style={{ width: 32, height: 32, fontSize: 11 }}>
              {it.ico}
            </span>
            <span>
              <span className="block text-[14px] font-semibold text-[color:var(--ink)]">
                {it.label}
              </span>
              <span className="block text-[12px] text-[color:var(--mute)]">
                {it.desc}
              </span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
