import { FIRM, IZI, REVIEWS, SITE } from "./constants";

// JSON-LD schema generators for SEO/AEO

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LegalService", "LocalBusiness"],
    "@id": `${SITE.url}/#organization`,
    name: FIRM.name,
    alternateName: ["Pinho Law", "Escritório de Advocacia Pinho Law"],
    legalName: FIRM.legalName,
    url: SITE.url,
    logo: `${SITE.url}/images/logo.svg`,
    image: `${SITE.url}/images/og/default.jpg`,
    telephone: FIRM.phone,
    email: FIRM.email,
    foundingDate: "2017-08",
    founder: { "@id": `${SITE.url}/#izi-pinho` },
    address: {
      "@type": "PostalAddress",
      streetAddress: `${FIRM.address.street}, ${FIRM.address.suite}`,
      addressLocality: FIRM.address.city,
      addressRegion: FIRM.address.state,
      postalCode: FIRM.address.zip,
      addressCountry: FIRM.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: FIRM.coordinates.lat,
      longitude: FIRM.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    // Merge firm social URLs with Izi's authoritative directory presence
    // so the org entity graph connects to her verified profiles.
    sameAs: Array.from(
      new Set([...Object.values(FIRM.social), ...IZI.sameAs]),
    ),
    areaServed: [
      { "@type": "State", name: "Florida" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Brazil" },
    ],
    knowsLanguage: ["pt-BR", "en-US", "es"],
    priceRange: "$$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: REVIEWS.googleRating,
      reviewCount: REVIEWS.totalReviews,
      bestRating: "5",
      worstRating: "1",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços Jurídicos",
      itemListElement: [
        { "@type": "OfferCatalog", name: "Imigração" },
        { "@type": "OfferCatalog", name: "Direito Empresarial" },
        { "@type": "OfferCatalog", name: "Direito Imobiliário" },
      ],
    },
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    publisher: {
      "@id": `${SITE.url}/#organization`,
    },
    inLanguage: ["en", "pt-BR", "es"],
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(
  items: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["dt", "dd"],
    },
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function webPageSchema(opts: {
  title: string;
  description: string;
  url: string;
  locale: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": opts.url,
    name: opts.title,
    description: opts.description,
    url: opts.url,
    inLanguage: opts.locale,
    isPartOf: {
      "@id": `${SITE.url}/#website`,
    },
    about: {
      "@id": `${SITE.url}/#organization`,
    },
  };
}

export function reviewSchema(
  reviews: { author: string; body: string; rating: number }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${SITE.url}/#organization`,
    name: FIRM.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.6",
      reviewCount: String(reviews.length),
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: r.author,
      },
      reviewBody: r.body,
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(r.rating),
        bestRating: "5",
      },
    })),
  };
}

export function podcastSeriesSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    "@id": `${SITE.url}/#canal-perguntas-sonho-americano`,
    name: "Sonho Americano — Canal Perguntas",
    description:
      "Podcast de Paulo Paternes sobre a vida, negócios e imigração de brasileiros nos EUA. Dra. Izi Pinho é convidada recorrente.",
    url: "https://canalperguntas.com",
    inLanguage: "pt-BR",
  };
}

export function podcastEpisodeSchema(opts: {
  name: string;
  datePublished: string;
  url: string;
  embedUrl?: string;
  duration?: string;
  description: string;
  transcript?: string;
  locale: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    name: opts.name,
    datePublished: opts.datePublished,
    url: opts.url,
    ...(opts.embedUrl ? { embedUrl: opts.embedUrl } : {}),
    ...(opts.duration ? { duration: opts.duration } : {}),
    description: opts.description,
    inLanguage: opts.locale,
    partOfSeries: { "@id": `${SITE.url}/#canal-perguntas-sonho-americano` },
    actor: { "@id": `${SITE.url}/#izi-pinho` },
    ...(opts.transcript ? { transcript: opts.transcript } : {}),
  };
}

export function iziPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Attorney",
    "@id": `${SITE.url}/#izi-pinho`,
    name: IZI.name,
    givenName: IZI.givenName,
    familyName: IZI.familyName,
    honorificPrefix: IZI.honorificPrefix,
    honorificSuffix: IZI.honorificSuffix,
    jobTitle: IZI.jobTitle,
    email: IZI.email,
    image: `${SITE.url}/images/team/izi-pinho.jpg`,
    url: `${SITE.url}/pt/attorney-izi-pinho`,
    nationality: { "@type": "Country", name: "Brazil" },
    knowsLanguage: IZI.knowsLanguage,
    worksFor: { "@id": `${SITE.url}/#organization` },
    alumniOf: IZI.education.map((e) => ({
      "@type": "CollegeOrUniversity",
      name: e.institution,
      url: e.url,
    })),
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "license",
        name: "Florida Bar Admission",
        identifier: IZI.barNumber,
        recognizedBy: {
          "@type": "Organization",
          name: "The Florida Bar",
          url: "https://www.floridabar.org",
        },
      },
      ...IZI.education.map((e) => ({
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: `${e.degree}${e.honors ? `, ${e.honors}` : ""}`,
        recognizedBy: { "@type": "Organization", name: e.institution },
        dateCreated: String(e.year),
      })),
    ],
    memberOf: IZI.memberships.map((m) => ({
      "@type": "Organization",
      name: m.name,
      ...("url" in m && m.url ? { url: m.url } : {}),
    })),
    award: IZI.awards.map((a) => `${a.name} (${a.year})`),
    sameAs: IZI.sameAs,
  };
}

export function iziScholarlyArticleSchema() {
  const a = IZI.scholarlyArticle;
  return {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "@id": `${SITE.url}/#scholarly-benefit-corporations`,
    headline: a.name,
    name: a.name,
    author: { "@id": `${SITE.url}/#izi-pinho` },
    datePublished: String(a.year),
    isPartOf: {
      "@type": "Periodical",
      name: "Stetson Law Review",
      issn: "0739-9731",
    },
    citation: a.citation,
    url: a.url,
    publisher: {
      "@type": "Organization",
      name: "Stetson University College of Law",
    },
    isBasedOn: a.citedBy.map((c) => ({
      "@type": "CreativeWork",
      name: c.name,
      url: c.url,
    })),
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  locale: string;
  image?: string;
  keywords?: string[];
  wordCount?: number;
  articleSection?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    url: opts.url,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    inLanguage: opts.locale,
    image: opts.image ?? `${SITE.url}/images/og/default.jpg`,
    keywords: opts.keywords?.join(", "),
    wordCount: opts.wordCount,
    articleSection: opts.articleSection,
    author: { "@id": `${SITE.url}/#izi-pinho` },
    reviewedBy: { "@id": `${SITE.url}/#izi-pinho` },
    publisher: { "@id": `${SITE.url}/#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": opts.url },
    // Speakable for voice assistants (Google Assistant et al.)
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "p:first-of-type", "h2"],
    },
  };
}

// Collection page schema for /blog, /tools index listings.
export function collectionPageSchema(opts: {
  name: string;
  description: string;
  url: string;
  locale: string;
  items: Array<{ name: string; url: string; description?: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    inLanguage: opts.locale,
    isPartOf: { "@id": `${SITE.url}/#website` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: opts.items.map((it, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: it.url,
        name: it.name,
        description: it.description,
      })),
    },
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: {
      "@id": `${SITE.url}/#organization`,
    },
    areaServed: {
      "@type": "State",
      name: "Florida",
    },
  };
}
