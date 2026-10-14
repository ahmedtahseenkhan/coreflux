import type { Metadata } from "next";

// Canonical origin. Every canonical / OG URL and the sitemap are built from it,
// so www and http variants all point search engines at one version.
export const SITE_URL = "https://corefluxsolutions.com";
export const SITE_NAME = "Coreflux Solutions";
export const CONTACT_EMAIL = "Info@corefluxsolutions.com";
export const DEFAULT_DESCRIPTION =
  "Houston-based software studio. We build custom ERP, LMS, AI automation, data migration, web, app and gaming solutions — without enterprise-level complexity.";

// TODO(owner): add the real profile URLs. Footer links and the Organization
// schema only render the ones that are filled in.
export const SOCIAL_LINKS: { label: string; href: string }[] = [
  { label: "LinkedIn", href: "" },
  { label: "GitHub", href: "" },
];

export const OG_IMAGE = {
  url: "/og.jpg",
  width: 1200,
  height: 630,
  alt: "Coreflux Solutions — Practical software for serious businesses.",
};

const MAX_TITLE = 60;

// "Page · Coreflux Solutions", shortened to "Page · Coreflux" (or just "Page")
// when the full form would be cut off in search results.
function fullTitle(title: string) {
  for (const candidate of [`${title} · ${SITE_NAME}`, `${title} · Coreflux`]) {
    if (candidate.length <= MAX_TITLE) return candidate;
  }
  return title;
}

export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  /** Use `title` as-is, without the site-name suffix (home page). */
  absoluteTitle?: boolean;
}): Metadata {
  const resolved = absoluteTitle ? title : fullTitle(title);
  return {
    title: { absolute: resolved },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_US",
      url: path,
      title: resolved,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: resolved,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
