import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { SERVICES, STUDIO } from "@/components/nav-data";
import { STUDIES } from "@/components/case-studies-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    ...SERVICES.map((s) => s.href),
    ...STUDIO.map((s) => s.href),
    ...Object.keys(STUDIES).map((slug) => `/case-studies/${slug}`),
    "/privacy",
    "/terms",
  ];
  return paths.map((path) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path.split("/").length > 2 ? 0.7 : 0.8,
  }));
}
