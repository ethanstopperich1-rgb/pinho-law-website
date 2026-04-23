import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { GoldGradientCard } from "@/components/ui/gold-gradient-card";
import { CtaSection } from "@/components/sections/cta-section";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { AuthorByline } from "@/components/seo/AuthorByline";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { createPageMetadata } from "@/lib/metadata";
import { CITIES, getAllCitySlugs } from "@/data/cities";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { FIRM, REVIEWS, SITE } from "@/lib/constants";
import type { L } from "@/content/blog/types";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getAllCitySlugs().map((city) => ({ locale, city })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; city: string }>;
}) {
  const { locale, city: slug } = await params;
  const city = CITIES[slug];
  if (!city) return {};
  const l = locale as L;
  const titles = {
    pt: `Advogado de Imigração em ${city.name}, FL | Pinho Law`,
    en: `Immigration Attorney in ${city.name}, Florida | Pinho Law`,
    es: `Abogado de Inmigración en ${city.name}, Florida | Pinho Law`,
  };
  const descriptions = {
    pt: `Dra. Izi Pinho atende brasileiros em ${city.name}, FL com imigração, green card, E-2, K-1 e naturalização. Consulta virtual disponível. ${FIRM.phone}`,
    en: `Attorney Izi Pinho serves the Brazilian community in ${city.name}, FL with green card, E-2, K-1, and naturalization. Virtual consultations available. ${FIRM.phone}`,
    es: `Abogada Izi Pinho atiende brasileños en ${city.name}, FL con green card, E-2, K-1 y naturalización. ${FIRM.phone}`,
  };
  return createPageMetadata({
    title: titles[l],
    description: descriptions[l],
    path: `/advogado-imigracao/${slug}`,
    locale: locale as Locale,
  });
}

const COPY = {
  pt: {
    breadcrumb: "Advogado Imigração",
    h1: (city: string) => `Advogado de Imigração em ${city}, Flórida`,
    communityH2: (city: string) => `A Comunidade Brasileira em ${city}`,
    servicesH2: "Serviços de Imigração Disponíveis",
    whyH2: (city: string) => `Por Que Brasileiros em ${city} Escolhem a Pinho Law`,
    trustBullets: [
      "🌐 Atendimento trilíngue: português, inglês e espanhol",
      "💻 Consultas virtuais para toda a Flórida — sem precisar viajar",
      `⭐ ${REVIEWS.totalReviews}+ avaliações · ${REVIEWS.googleRating}★ Google`,
      "🏆 Best Lawyers® 2021–2026 · Super Lawyers® Rising Star 2023–2026",
    ],
    brazilianPop: "brasileiros",
    driveTime: (min: number) => `🚗 ${min} min de Orlando`,
    officeHere: (city: string) => `📍 Escritório em ${city}`,
    virtualAvail: "💻 Consulta virtual disponível",
    stat1Label: "brasileiros estimados",
    stat2Label: "da população",
    services: [
      { title: "Green Card EB-2 NIW", href: "/immigration/eb-2-niw" },
      { title: "Visto E-2 Investidor", href: "/immigration/e-2" },
      { title: "Visto K-1 Noivo(a)", href: "/immigration/k-1" },
      { title: "Visto L-1A Executivo", href: "/immigration/l-1a" },
      { title: "EB-5 Investidor", href: "/immigration/eb-5" },
      { title: "EB-1A Habilidade Extraordinária", href: "/immigration/eb-1a" },
    ],
  },
  en: {
    breadcrumb: "Immigration Attorney",
    h1: (city: string) => `Immigration Attorney in ${city}, Florida`,
    communityH2: (city: string) => `The Brazilian Community in ${city}`,
    servicesH2: "Immigration Services Available",
    whyH2: (city: string) => `Why Brazilians in ${city} Choose Pinho Law`,
    trustBullets: [
      "🌐 Trilingual service: Portuguese, English, and Spanish",
      "💻 Virtual consultations across Florida — no travel needed",
      `⭐ ${REVIEWS.totalReviews}+ reviews · ${REVIEWS.googleRating}★ Google`,
      "🏆 Best Lawyers® 2021–2026 · Super Lawyers® Rising Star 2023–2026",
    ],
    brazilianPop: "Brazilians",
    driveTime: (min: number) => `🚗 ${min} min from Orlando`,
    officeHere: (city: string) => `📍 Office in ${city}`,
    virtualAvail: "💻 Virtual consultation available",
    stat1Label: "estimated Brazilians",
    stat2Label: "of population",
    services: [
      { title: "Green Card EB-2 NIW", href: "/immigration/eb-2-niw" },
      { title: "E-2 Investor Visa", href: "/immigration/e-2" },
      { title: "K-1 Fiancé Visa", href: "/immigration/k-1" },
      { title: "L-1A Executive Visa", href: "/immigration/l-1a" },
      { title: "EB-5 Investor", href: "/immigration/eb-5" },
      { title: "EB-1A Extraordinary Ability", href: "/immigration/eb-1a" },
    ],
  },
  es: {
    breadcrumb: "Abogado Inmigración",
    h1: (city: string) => `Abogado de Inmigración en ${city}, Florida`,
    communityH2: (city: string) => `La Comunidad Brasileña en ${city}`,
    servicesH2: "Servicios de Inmigración Disponibles",
    whyH2: (city: string) => `Por Qué Brasileños en ${city} Escogen Pinho Law`,
    trustBullets: [
      "🌐 Atención trilingüe: portugués, inglés y español",
      "💻 Consultas virtuales en toda Florida",
      `⭐ ${REVIEWS.totalReviews}+ reseñas · ${REVIEWS.googleRating}★ Google`,
      "🏆 Best Lawyers® 2021–2026 · Super Lawyers® Rising Star 2023–2026",
    ],
    brazilianPop: "brasileños",
    driveTime: (min: number) => `🚗 ${min} min desde Orlando`,
    officeHere: (city: string) => `📍 Oficina en ${city}`,
    virtualAvail: "💻 Consulta virtual disponible",
    stat1Label: "brasileños estimados",
    stat2Label: "de la población",
    services: [
      { title: "Green Card EB-2 NIW", href: "/immigration/eb-2-niw" },
      { title: "Visa E-2 Inversionista", href: "/immigration/e-2" },
      { title: "Visa K-1 Prometido(a)", href: "/immigration/k-1" },
      { title: "Visa L-1A Ejecutivo", href: "/immigration/l-1a" },
      { title: "EB-5 Inversionista", href: "/immigration/eb-5" },
      { title: "EB-1A Habilidad Extraordinaria", href: "/immigration/eb-1a" },
    ],
  },
} as const;

export default async function CityAttorneyPage({
  params,
}: {
  params: Promise<{ locale: string; city: string }>;
}) {
  const { locale, city: slug } = await params;
  setRequestLocale(locale);
  const city = CITIES[slug];
  if (!city) notFound();
  const l = locale as L;
  const h = COPY[l];

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LegalService", "LocalBusiness"],
    name: FIRM.name,
    areaServed: [
      city.name,
      { "@type": "State", name: "Florida" },
      { "@type": "Country", name: "United States" },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: `${FIRM.address.street}, ${FIRM.address.suite}`,
      addressLocality: FIRM.address.city,
      addressRegion: FIRM.address.state,
      postalCode: FIRM.address.zip,
      addressCountry: FIRM.address.country,
    },
    telephone: FIRM.phone,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: REVIEWS.googleRating,
      reviewCount: REVIEWS.totalReviews,
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <>
      <JsonLd data={localBusiness} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Pinho Law", url: `${SITE.url}/${l}` },
          {
            name: h.breadcrumb,
            url: `${SITE.url}/${l}/advogado-imigracao`,
          },
          {
            name: city.name,
            url: `${SITE.url}/${l}/advogado-imigracao/${city.slug}`,
          },
        ])}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0E1B2E] pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,169,97,0.15)_0%,_transparent_55%)]" />
        <Container className="relative">
          <nav className="text-xs text-white/60">
            <Link href="/" className="hover:text-[#C9A961]">
              Pinho Law
            </Link>{" "}
            <span>/</span> <span>{h.breadcrumb}</span>{" "}
            <span>/</span>{" "}
            <span className="text-[#C9A961]">{city.name}</span>
          </nav>
          <FadeIn className="mt-6 max-w-3xl">
            <h1 className="font-heading text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              {h.h1(city.name)}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-white/75 md:text-xl">
              {city.content.intro[l] ?? city.content.intro.pt}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full border border-[#C9A961]/40 bg-[#C9A961]/10 px-3 py-1 text-sm text-[#C9A961]">
                👥 ~{city.demographics.brazilianPopulation.toLocaleString()}{" "}
                {h.brazilianPop}
              </span>
              <span className="inline-flex items-center rounded-full border border-[#C9A961]/40 bg-[#C9A961]/10 px-3 py-1 text-sm text-[#C9A961]">
                {city.isOfficeLocation
                  ? h.officeHere(city.name)
                  : h.driveTime(city.location.driveTimeFromOfficeMinutes)}
              </span>
              <span className="inline-flex items-center rounded-full border border-[#C9A961]/40 bg-[#C9A961]/10 px-3 py-1 text-sm text-[#C9A961]">
                {h.virtualAvail}
              </span>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <MagneticButton distance={0.3}>
                <Link
                  href="/consultation"
                  className="inline-flex items-center justify-center rounded-[var(--radius-md)] bg-[#C9A961] px-6 py-3 font-semibold text-[#0E1B2E] hover:bg-[#C9A961]/90"
                >
                  {l === "pt"
                    ? "Agendar Consulta"
                    : l === "es"
                      ? "Agendar Consulta"
                      : "Book Consultation"}
                </Link>
              </MagneticButton>
              <a
                href={`https://wa.me/${FIRM.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-[var(--radius-md)] border border-[#C9A961] px-6 py-3 font-semibold text-[#C9A961] hover:bg-[#C9A961]/10"
              >
                WhatsApp
              </a>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Author byline + freshness (AEO E-E-A-T) */}
      <section className="border-b border-border/40 bg-cream pt-6">
        <Container>
          <div className="mx-auto max-w-3xl">
            <AuthorByline locale={l as Locale} role="author" />
          </div>
        </Container>
      </section>

      {/* Community */}
      <section className="bg-cream py-16">
        <Container>
          <FadeIn className="mx-auto max-w-5xl">
            <h2 className="font-heading text-3xl font-semibold text-ink md:text-4xl">
              {h.communityH2(city.name)}
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-[var(--radius-md)] border border-[#C9A961]/20 bg-white p-6">
                <div className="font-heading text-3xl font-semibold text-[#C9A961] md:text-4xl">
                  {city.demographics.brazilianPopulation.toLocaleString()}
                </div>
                <div className="mt-2 text-sm text-ink-muted">{h.stat1Label}</div>
              </div>
              {city.demographics.brazilianPercentage && (
                <div className="rounded-[var(--radius-md)] border border-[#C9A961]/20 bg-white p-6">
                  <div className="font-heading text-3xl font-semibold text-[#C9A961] md:text-4xl">
                    {city.demographics.brazilianPercentage}%
                  </div>
                  <div className="mt-2 text-sm text-ink-muted">
                    {h.stat2Label}
                  </div>
                </div>
              )}
              <div className="rounded-[var(--radius-md)] border border-[#C9A961]/20 bg-white p-6">
                <div className="font-heading text-3xl font-semibold text-[#C9A961] md:text-4xl">
                  {city.isOfficeLocation
                    ? "📍"
                    : `${city.location.driveTimeFromOfficeMinutes} min`}
                </div>
                <div className="mt-2 text-sm text-ink-muted">
                  {city.isOfficeLocation
                    ? h.officeHere(city.name)
                    : l === "pt"
                      ? "do nosso escritório"
                      : l === "es"
                        ? "desde nuestra oficina"
                        : "from our office"}
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-[#0E1B2E] py-16 text-white">
        <Container>
          <FadeIn className="mx-auto max-w-5xl">
            <h2 className="font-heading text-3xl font-semibold text-white md:text-4xl">
              {h.servicesH2}
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {h.services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="block h-full focus:outline-none"
                >
                  <GoldGradientCard className="h-full">
                    <div className="flex h-full flex-col">
                      <h3 className="font-heading text-lg font-semibold text-ink">
                        {s.title}
                      </h3>
                      <div className="mt-4 text-sm font-medium text-[#C9A961]">
                        {l === "pt"
                          ? "Ver detalhes →"
                          : l === "es"
                            ? "Ver detalles →"
                            : "See details →"}
                      </div>
                    </div>
                  </GoldGradientCard>
                </Link>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Why */}
      <section className="bg-cream py-12">
        <Container>
          <FadeIn className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-semibold text-ink md:text-3xl">
              {h.whyH2(city.name)}
            </h2>
            <ul className="mt-6 space-y-3">
              {h.trustBullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2 text-base text-ink md:text-lg"
                >
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
