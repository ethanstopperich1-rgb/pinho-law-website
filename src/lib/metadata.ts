import type { Metadata } from "next";
import { SITE } from "./constants";
import type { Locale } from "@/i18n/routing";

interface PageMetadataOpts {
  title: string;
  description: string;
  path: string;
  locale: Locale;
  noIndex?: boolean;
  /** Optional absolute OG image URL. Defaults to /images/og/default.jpg. */
  ogImage?: string;
}

const localeToHreflang: Record<Locale, string> = {
  en: "en",
  pt: "pt-BR",
  es: "es",
};

const DEFAULT_OG_IMAGE = `${SITE.url}/opengraph-image`;

/** Standard OG image array — 1200×630 branded image. */
function ogImages(imageUrl?: string) {
  return [
    {
      url: imageUrl ?? DEFAULT_OG_IMAGE,
      width: 1200,
      height: 630,
      alt: "Pinho Law — Immigration & Business Attorneys in Orlando, FL",
      type: "image/jpeg",
    },
  ];
}

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
      images: ogImages(),
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: ogImages().map((i) => i.url),
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
  ogImage,
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
      images: ogImages(ogImage),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImages(ogImage).map((i) => i.url),
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
