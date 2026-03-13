import type { Metadata } from "next";
import { SITE } from "./constants";
import type { Locale } from "@/i18n/routing";

interface PageMetadataOpts {
  title: string;
  description: string;
  path: string;
  locale: Locale;
  noIndex?: boolean;
}

const localeToHreflang: Record<Locale, string> = {
  en: "en",
  "pt-br": "pt-BR",
  es: "es",
};

export function createPageMetadata({
  title,
  description,
  path,
  locale,
  noIndex = false,
}: PageMetadataOpts): Metadata {
  const url = `${SITE.url}/${locale}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: `${SITE.url}/en${path}`,
        "pt-BR": `${SITE.url}/pt-br${path}`,
        es: `${SITE.url}/es${path}`,
        "x-default": `${SITE.url}/en${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      locale: localeToHreflang[locale],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
