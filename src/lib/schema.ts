import { FIRM, SITE } from "./constants";

// JSON-LD schema generators for SEO/AEO

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${SITE.url}/#organization`,
    name: FIRM.name,
    legalName: FIRM.legalName,
    url: SITE.url,
    logo: `${SITE.url}/images/logo.png`,
    image: `${SITE.url}/images/og/default.jpg`,
    telephone: FIRM.phone,
    email: FIRM.email,
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
    sameAs: Object.values(FIRM.social),
    areaServed: {
      "@type": "State",
      name: "Florida",
    },
    knowsLanguage: ["en", "pt-BR", "es"],
    priceRange: "$$",
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
