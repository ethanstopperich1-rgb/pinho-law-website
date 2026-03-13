import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { locales } from "@/i18n/routing";

const pages = [
  "",
  "/about",
  "/about/attorney",
  "/immigration",
  "/immigration/family-based",
  "/immigration/marriage-based",
  "/immigration/green-cards",
  "/immigration/adjustment-of-status",
  "/immigration/citizenship",
  "/immigration/work-visas",
  "/immigration/investor-visas",
  "/immigration/eb-visas",
  "/immigration/change-of-status",
  "/immigration/visa-extensions",
  "/immigration/family-petitions",
  "/business",
  "/business/formation",
  "/business/contracts",
  "/business/disputes",
  "/business/immigrant-entrepreneurs",
  "/consultation",
  "/reviews",
  "/resources",
  "/resources/faq",
  "/privacy",
  "/terms",
  "/disclaimer",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    for (const locale of locales) {
      entries.push({
        url: `${SITE.url}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1.0 : page.split("/").length <= 2 ? 0.8 : 0.6,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${SITE.url}/${l}${page}`])
          ),
        },
      });
    }
  }

  return entries;
}
