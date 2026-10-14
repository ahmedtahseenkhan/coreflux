"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";
import { GA_ID, CONSENT_KEY, OPEN_SETTINGS_EVENT } from "@/lib/analytics";

type Consent = "granted" | "denied" | null;

function readConsent(): Consent {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

function saveConsent(v: "granted" | "denied") {
  try {
    localStorage.setItem(CONSENT_KEY, v);
  } catch {
    // Storage blocked: the choice applies to this page view only.
  }
}

// Removes _ga / _ga_<ID> on every domain GA may have used.
function clearGaCookies() {
  const host = location.hostname;
  const domains = ["", host, `.${host.replace(/^www\./, "")}`];
  document.cookie
    .split(";")
    .map((c) => c.split("=")[0].trim())
    .filter((n) => n === "_ga" || n.startsWith("_ga_"))
    .forEach((n) =>
      domains.forEach((d) => {
        document.cookie = `${n}=; Max-Age=0; path=/${d ? `; domain=${d}` : ""}`;
      })
    );
}

/**
 * Cookie banner + GA4 loader. Google's script is only requested after the
 * visitor clicks Accept; until then no analytics code runs and no cookies
 * are set.
 */
export default function Analytics() {
  const [consent, setConsent] = useState<Consent>(null);
  const [bannerOpen, setBannerOpen] = useState(false);

  useEffect(() => {
    if (!GA_ID) return;
    const stored = readConsent();
    setConsent(stored);
    setBannerOpen(stored === null);
    const reopen = () => setBannerOpen(true);
    window.addEventListener(OPEN_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, reopen);
  }, []);

  // Queue the GA config; gtag.js picks the queue up when it loads.
  useEffect(() => {
    if (!GA_ID || consent !== "granted" || window.gtag) return;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      // gtag.js expects the Arguments object itself, not an array.
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };
    window.gtag("consent", "default", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "granted",
    });
    window.gtag("js", new Date());
    window.gtag("config", GA_ID);
  }, [consent]);

  if (!GA_ID) return null;

  const choose = (v: "granted" | "denied") => {
    saveConsent(v);
    setBannerOpen(false);
    if (v === "denied" && consent === "granted") {
      // GA is already running on this page: stop it, drop its cookies and
      // reload so the page continues without it.
      (window as unknown as Record<string, boolean>)[`ga-disable-${GA_ID}`] = true;
      clearGaCookies();
      location.reload();
      return;
    }
    setConsent(v);
  };

  return (
    <>
      {consent === "granted" && (
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
      )}

      {bannerOpen && (
        <div
          role="region"
          aria-label="Cookie consent"
          className="fixed bottom-4 left-4 right-4 z-[80] rounded-2xl border bg-white p-5 shadow-lg sm:left-auto sm:max-w-[420px]"
          style={{ borderColor: "var(--line)" }}
        >
          <p className="text-[15px] font-semibold text-[color:var(--ink)]">Cookies</p>
          <p className="mt-2 text-[14px] leading-relaxed text-[color:var(--ink-2)]">
            We&rsquo;d like to use Google Analytics cookies to see how people use
            this site. Nothing is set unless you accept.{" "}
            <Link
              href="/privacy"
              className="text-[color:var(--ink)] underline decoration-[color:var(--c1)] underline-offset-4"
            >
              Privacy policy
            </Link>
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button type="button" className="btn primary" onClick={() => choose("granted")}>
              Accept
            </button>
            <button type="button" className="btn ghost" onClick={() => choose("denied")}>
              Decline
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/** Footer link that reopens the banner so visitors can change their choice. */
export function CookieSettingsButton({ className }: { className?: string }) {
  if (!GA_ID) return null;
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT))}
    >
      Cookie settings
    </button>
  );
}
