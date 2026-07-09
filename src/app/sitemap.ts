import type { MetadataRoute } from "next";
import { getPathname } from "@/i18n/navigation";
import { getArticleIds, getServiceIds, getArticle } from "@/lib/content";

const BASE = "https://www.tkak.sk";

type Href = Parameters<typeof getPathname>[0]["href"];

// Static routes that are live at launch (e-shop is intentionally excluded —
// it 404s while the flag is off, so it must not appear in the sitemap).
const STATIC: Href[] = [
  "/",
  "/services",
  "/about",
  "/blog",
  "/contact",
  "/international",
  "/privacy",
  "/terms",
  "/cookies",
];

function priorityFor(href: Href): number {
  if (href === "/") return 1;
  if (typeof href === "string") {
    return ["/privacy", "/terms", "/cookies"].includes(href) ? 0.3 : 0.8;
  }
  return 0.6; // dynamic detail / article
}

export default function sitemap(): MetadataRoute.Sitemap {
  const services: Href[] = getServiceIds().map((id) => ({
    pathname: "/services/[id]",
    params: { id },
  }));
  const articles: Href[] = getArticleIds().map((id) => ({
    pathname: "/blog/[id]",
    params: { id },
  }));

  return [...STATIC, ...services, ...articles].map((href) => {
    const sk = BASE + getPathname({ locale: "sk", href });
    const en = BASE + getPathname({ locale: "en", href });
    // Articles carry a real publish date → expose it as lastModified.
    let lastModified: Date | undefined;
    if (typeof href === "object" && href.pathname === "/blog/[id]") {
      const article = getArticle("sk", String(href.params.id));
      if (article) lastModified = new Date(article.iso);
    }
    return {
      url: sk,
      alternates: { languages: { sk, en } },
      changeFrequency: "monthly" as const,
      priority: priorityFor(href),
      ...(lastModified ? { lastModified } : {}),
    };
  });
}
