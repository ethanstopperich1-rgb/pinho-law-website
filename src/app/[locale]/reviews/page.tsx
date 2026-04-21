import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { GoldGradientCard } from "@/components/ui/gold-gradient-card";
import { JsonLd } from "@/components/seo/json-ld";
import { Star } from "lucide-react";
import { CtaSection } from "@/components/sections/cta-section";
import { REVIEWS, REVIEW_STATS } from "@/content/reviews";
import { SITE } from "@/lib/constants";
import type { Locale } from "@/i18n/routing";

type L = "pt" | "en" | "es";

const TITLES = {
  pt: "Avaliações — 5.0 de 111 no Google | Pinho Law",
  en: "Reviews — 5.0 from 111 on Google | Pinho Law",
  es: "Reseñas — 5.0 de 111 en Google | Pinho Law",
} as const;

const DESCRIPTIONS = {
  pt: "Depoimentos reais de clientes Pinho Law no Google — 5.0 estrelas em 111 avaliações. Casos de imigração, naturalização, empresarial e imobiliário em Orlando.",
  en: "Real client testimonials for Pinho Law on Google — 5.0 stars across 111 reviews. Immigration, naturalization, business, and real estate cases in Orlando.",
  es: "Testimonios reales de clientes en Google — 5.0 estrellas en 111 reseñas.",
} as const;

const HEADINGS = {
  pt: {
    eyebrow: "Depoimentos",
    heading: "O que nossos clientes dizem",
    sub: "Cada caso é uma história. Estes são depoimentos reais e verificáveis de clientes Pinho Law publicados no Google ao longo dos últimos 6 anos.",
    statsLabel: "estrelas em",
    reviewsLabel: "avaliações",
    sourceLabel: "Fonte",
    agoLabel: (m: number) =>
      m < 12 ? `${m} ${m === 1 ? "mês" : "meses"} atrás` : `${Math.round(m / 12)} ${m < 24 ? "ano" : "anos"} atrás`,
    tagLabels: {
      immigration: "Imigração",
      business: "Empresarial",
      citizenship: "Cidadania",
      family: "Família",
    },
  },
  en: {
    eyebrow: "Testimonials",
    heading: "What our clients say",
    sub: "Every case tells a story. These are real, verifiable client reviews published on Google over the past 6 years.",
    statsLabel: "stars from",
    reviewsLabel: "reviews",
    sourceLabel: "Source",
    agoLabel: (m: number) =>
      m < 12 ? `${m} ${m === 1 ? "month" : "months"} ago` : `${Math.round(m / 12)} ${m < 24 ? "year" : "years"} ago`,
    tagLabels: {
      immigration: "Immigration",
      business: "Business",
      citizenship: "Citizenship",
      family: "Family",
    },
  },
  es: {
    eyebrow: "Testimonios",
    heading: "Lo que dicen nuestros clientes",
    sub: "Testimonios reales publicados en Google durante los últimos 6 años.",
    statsLabel: "estrellas de",
    reviewsLabel: "reseñas",
    sourceLabel: "Fuente",
    agoLabel: (m: number) =>
      m < 12 ? `${m} ${m === 1 ? "mes" : "meses"} atrás` : `${Math.round(m / 12)} ${m < 24 ? "año" : "años"} atrás`,
    tagLabels: {
      immigration: "Inmigración",
      business: "Empresarial",
      citizenship: "Ciudadanía",
      family: "Familia",
    },
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const key = locale as L;
  return createPageMetadata({
    title: TITLES[key],
    description: DESCRIPTIONS[key],
    path: "/reviews",
    locale: locale as Locale,
  });
}

export default async function ReviewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const key = locale as L;
  const h = HEADINGS[key];

  // JSON-LD aggregate rating — Google Places-backed, per schema.org.
  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${SITE.url}/#organization`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(REVIEW_STATS.average),
      reviewCount: String(REVIEW_STATS.count),
      bestRating: "5",
      worstRating: "1",
    },
    review: REVIEWS.slice(0, 10).map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(r.rating),
        bestRating: "5",
      },
      reviewBody: r.body,
    })),
  };

  return (
    <>
      <JsonLd data={aggregateRatingSchema} />

      <section className="bg-cream pt-20 pb-8 md:pt-28 md:pb-12">
        <Container>
          <FadeIn className="mx-auto max-w-3xl text-center">
            <span className="gold-rule mx-auto" />
            <p className="mt-6 text-xs font-medium uppercase tracking-wider text-gold">
              {h.eyebrow}
            </p>
            <h1 className="mt-3 font-heading text-3xl font-semibold text-ink md:text-5xl">
              {h.heading}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
              {h.sub}
            </p>

            <div className="mt-8 inline-flex flex-col items-center gap-2 rounded-[var(--radius-lg)] border border-gold/30 bg-white px-8 py-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-gold text-gold" />
                  ))}
                </div>
                <div className="font-heading text-3xl font-semibold text-ink md:text-4xl">
                  {REVIEW_STATS.average.toFixed(1)}
                </div>
              </div>
              <div className="text-sm text-ink-muted">
                {h.statsLabel}{" "}
                <span className="font-semibold text-ink">{REVIEW_STATS.count}</span>{" "}
                {h.reviewsLabel} ·{" "}
                <span className="text-ink-muted/70">{h.sourceLabel}: {REVIEW_STATS.source}</span>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-cream py-16">
        <Container>
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <FadeIn key={`${r.author}-${i}`} delay={Math.min(i * 0.03, 0.4)}>
                <GoldGradientCard className="h-full">
                  <div className="flex h-full flex-col">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-0.5">
                        {Array.from({ length: r.rating }).map((_, j) => (
                          <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                        ))}
                      </div>
                      {r.tag && (
                        <span className="inline-flex items-center rounded-full border border-gold/30 bg-gold/5 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-gold">
                          {h.tagLabels[r.tag]}
                        </span>
                      )}
                    </div>
                    <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">
                      &ldquo;{r.body}&rdquo;
                    </blockquote>
                    <div className="mt-5 flex items-center justify-between border-t border-border pt-3">
                      <div>
                        <p className="font-heading text-sm font-semibold text-ink">
                          {r.author}
                        </p>
                        <p className="text-xs text-ink-muted/80">
                          {h.agoLabel(r.monthsAgo)}
                        </p>
                      </div>
                      <span className="text-[10px] font-medium uppercase tracking-wider text-ink-muted/60">
                        {r.lang.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </GoldGradientCard>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
