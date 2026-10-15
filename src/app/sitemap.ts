import type { MetadataRoute } from "next";
import { publishedArticles } from "@/content/insights";
import { getSiteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/services/",
    "/solutions/vaultiq/",
    "/about/",
    "/insights/",
    "/contact/",
    "/privacy/",
    ...publishedArticles().map((article) => `/insights/${article.slug}/`),
  ];

  return paths.map((path) => ({
    url: `${getSiteUrl()}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.6,
  }));
}
