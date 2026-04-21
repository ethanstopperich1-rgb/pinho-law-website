import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { locales } from "@/i18n/routing";

const BASE = SITE.url;

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
  "tools",
  "tools/visa-decision-engine",
  "tools/firpta-calculator",
  "tools/eb5-calculator",
  "tools/priority-date-tracker",
  "tools/visa-cost-estimator",
  "tools/green-card-timeline",
  "tools/llc-vs-corp",
  "tools/br-us-tax",
  "immigration-live",
  "blog",
  "blog/trump-gold-card-vs-eb2-niw-2026",
  "blog/comprar-imovel-eua-via-llc-guia",
  "blog/abrir-empresa-eua-sendo-brasileiro",
  "disclaimer",
  "privacy",
  "terms",
];

const immigrationPages = [
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

const allPages = [
  ...topPages,
  ...immigrationPages,
  ...businessPages,
  ...realEstatePages,
];

const hreflangFor = (l: (typeof locales)[number]) =>
  l === "pt" ? "pt-BR" : l === "es" ? "es" : "en-US";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const slug of allPages) {
    for (const locale of locales) {
      entries.push({
        url: slug ? `${BASE}/${locale}/${slug}` : `${BASE}/${locale}`,
        lastModified: new Date(),
        changeFrequency:
          slug === "" || slug === "immigration-live" ? "daily" : "weekly",
        priority:
          slug === ""
            ? 1.0
            : topPages.includes(slug)
              ? 0.9
              : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [
              hreflangFor(l),
              slug ? `${BASE}/${l}/${slug}` : `${BASE}/${l}`,
            ]),
          ),
        },
      });
    }
  }

  return entries;
}
