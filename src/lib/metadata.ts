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
  pt: "pt-BR",
  es: "es",
};

export function createArticleMetadata(opts: {
  title: string;
  description: string;
  path: string;
  locale: Locale;
  datePublished: string;
  dateModified?: string;
  keywords?: string[];
  section?: string;
}): Metadata {
  const url = `${SITE.url}/${opts.locale}${opts.path}`;
  return {
    title: opts.title,
    description: opts.description,
    keywords: opts.keywords,
    authors: [{ name: "Dra. Izi Pinho", url: `${SITE.url}/${opts.locale}/attorney-izi-pinho` }],
    alternates: {
      canonical: url,
      languages: {
        "pt-BR": `${SITE.url}/pt${opts.path}`,
        en: `${SITE.url}/en${opts.path}`,
        es: `${SITE.url}/es${opts.path}`,
        "x-default": `${SITE.url}/pt${opts.path}`,
      },
    },
    openGraph: {
      type: "article",
      title: opts.title,
      description: opts.description,
      url,
      siteName: SITE.name,
      locale: localeToHreflang[opts.locale],
      publishedTime: opts.datePublished,
      modifiedTime: opts.dateModified ?? opts.datePublished,
      authors: [`${SITE.url}/${opts.locale}/attorney-izi-pinho`],
      section: opts.section,
      tags: opts.keywords,
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
    },
    robots: { index: true, follow: true },
  };
}

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
        "pt-BR": `${SITE.url}/pt${path}`,
        en: `${SITE.url}/en${path}`,
        es: `${SITE.url}/es${path}`,
        "x-default": `${SITE.url}/pt${path}`,
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
