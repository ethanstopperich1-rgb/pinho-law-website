import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { locales } from "@/i18n/routing";
import { VISAS, getAllVisaIds } from "@/data/visas";
import { getAllCitySlugs } from "@/data/cities";
import { FAQS } from "@/data/faqs";
import { ARTICLES } from "@/content/blog";

const BASE = SITE.url;

// ── Group 1: static top pages ────────────────────────────────────
const topPages = [
  "",
  "about",
  "attorney-izi-pinho",
  "team",
  "team/gregori-pretto",
  "team/hannah-dantas",
  "team/gabriel-marinho",
  "american-dream",
  "expand-business-usa",
  "already-in-usa",
  "press",
  "publications",
  "podcast",
  "results",
  "reviews",
  "resources",
  "resources/faq",
  "consultation",
  "contact",
  "immigration-live",
  "blog",
  "tools",
  "disclaimer",
  "privacy",
  "terms",
];

// ── Group 1b: service-hub and legacy service pages ──────────────
const legacyImmigrationPages = [
  "immigration",
  "immigration/immigrant-visas",
  "immigration/immigrant-visas/eb-1",
  "immigration/immigrant-visas/eb-2",
  "immigration/immigrant-visas/eb-2-niw",
  "immigration/immigrant-visas/eb-3",
  "immigration/immigrant-visas/eb-5",
  "immigration/immigrant-visas/family-green-card",
  "immigration/immigrant-visas/marriage-us-citizen",
  "immigration/immigrant-visas/marriage-lpr",
  "immigration/immigrant-visas/us-citizenship",
  "immigration/immigrant-visas/child-green-card",
  "immigration/non-immigrant-visas",
  "immigration/non-immigrant-visas/e-2",
  "immigration/non-immigrant-visas/l-1",
  "immigration/non-immigrant-visas/o-1",
  "immigration/non-immigrant-visas/p",
  "immigration/non-immigrant-visas/tn",
  "immigration/non-immigrant-visas/h-1b",
  "immigration/non-immigrant-visas/h-2a",
  "immigration/non-immigrant-visas/f-1",
  "immigration/non-immigrant-visas/visa-extension",
  "immigration/non-immigrant-visas/change-of-status",
];

const businessPages = [
  "business",
  "business/llc-formation",
  "business/c-corp-s-corp",
  "business/operating-agreements",
  "business/shareholder-disputes",
  "business/benefit-corporations",
  "business/contracts",
  "business/asset-protection",
  "business/will-and-trust",
  "business/brazil-us-taxation",
];

const realEstatePages = [
  "real-estate",
  "real-estate/residential-closing",
  "real-estate/commercial-closing",
  "real-estate/foreign-buyer-firpta",
  "real-estate/investment-structuring",
  "real-estate/title-review",
];

const toolPages = [
  "tools/visa-decision-engine",
  "tools/firpta-calculator",
  "tools/eb5-calculator",
  "tools/priority-date-tracker",
  "tools/visa-cost-estimator",
  "tools/green-card-timeline",
  "tools/llc-vs-corp",
  "tools/br-us-tax",
];

const hreflangFor = (l: (typeof locales)[number]) =>
  l === "pt" ? "pt-BR" : l === "es" ? "es" : "en-US";

function buildAlternates(slug: string) {
  return {
    languages: Object.fromEntries(
      locales.map((l) => [
        hreflangFor(l),
        slug ? `${BASE}/${l}/${slug}` : `${BASE}/${l}`,
      ]),
    ),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const now = new Date("2026-04-20");

  const push = (
    slug: string,
    priority: number,
    changeFrequency: "daily" | "weekly" | "monthly" | "yearly",
  ) => {
    for (const locale of locales) {
      entries.push({
        url: slug ? `${BASE}/${locale}/${slug}` : `${BASE}/${locale}`,
        lastModified: now,
        changeFrequency,
        priority,
        alternates: buildAlternates(slug),
      });
    }
  };

  // Groups 1 + 1b + business + real-estate + tools
  for (const p of topPages)
    push(p, p === "" ? 1.0 : 0.9, p === "immigration-live" ? "daily" : "weekly");
  for (const p of legacyImmigrationPages) push(p, 0.85, "monthly");
  for (const p of businessPages) push(p, 0.85, "monthly");
  for (const p of realEstatePages) push(p, 0.85, "monthly");
  for (const p of toolPages) push(p, 0.85, "monthly");

  // Group 2 — visa hubs (programmatic): /immigration/[visa.slugs[locale]]
  for (const visaId of getAllVisaIds()) {
    const visa = VISAS[visaId];
    for (const locale of locales) {
      const slug = `immigration/${visa.slugs[locale]}`;
      entries.push({
        url: `${BASE}/${locale}/${slug}`,
        lastModified: new Date(visa.lastReviewedAt),
        changeFrequency: "monthly",
        priority: 0.95,
        alternates: buildAlternates(slug),
      });
    }
  }

  // Group 4 — city pages: /advogado-imigracao/[city]
  for (const citySlug of getAllCitySlugs()) {
    const slug = `advogado-imigracao/${citySlug}`;
    push(slug, 0.8, "yearly");
  }

  // Group 5 — FAQ pages: /perguntas/[faq.slug[locale]]
  for (const faq of FAQS) {
    for (const locale of locales) {
      const s = faq.slug[locale];
      if (!s) continue;
      const slug = `perguntas/${s}`;
      entries.push({
        url: `${BASE}/${locale}/${slug}`,
        lastModified: new Date(faq.lastReviewedAt),
        changeFrequency: "monthly",
        priority: 0.75,
        alternates: buildAlternates(slug),
      });
    }
  }

  // Group 6 — blog articles (pulled from programmatic registry)
  for (const a of ARTICLES) {
    const slug = `blog/${a.slug}`;
    push(slug, 0.7, "monthly");
  }

  return entries;
}
