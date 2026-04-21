import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { JsonLd } from "@/components/seo/json-ld";
import { Star } from "lucide-react";
import {
  TestimonialsColumn,
  type TestimonialItem,
} from "@/components/ui/testimonials-columns-1";
import { CtaSection } from "@/components/sections/cta-section";
import { REVIEWS, REVIEW_STATS, type PinhoReview } from "@/content/reviews";
import { SITE } from "@/lib/constants";
import type { Locale } from "@/i18n/routing";

type L = "pt" | "en" | "es";

const TITLES = {
  pt: "Avaliações — 4.6 de 111 no Google | Pinho Law",
  en: "Reviews — 4.6 from 111 on Google | Pinho Law",
  es: "Reseñas — 4.6 de 111 en Google | Pinho Law",
} as const;

const DESCRIPTIONS = {
  pt: "Depoimentos reais de clientes Pinho Law no Google — 4.6 estrelas em 111 avaliações. Casos de imigração, naturalização, empresarial e imobiliário em Orlando.",
  en: "Real client testimonials for Pinho Law on Google — 4.6 stars across 111 reviews. Immigration, naturalization, business, and real estate cases in Orlando.",
  es: "Testimonios reales de clientes en Google — 4.6 estrellas en 111 reseñas.",
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
      m < 12
        ? `${m} ${m === 1 ? "mês" : "meses"} atrás`
        : `${Math.round(m / 12)} ${m < 24 ? "ano" : "anos"} atrás`,
    tagLabels: {
      immigration: "Cliente de Imigração",
      business: "Cliente Empresarial",
      citizenship: "Cliente de Cidadania",
      family: "Cliente Familiar",
    },
    defaultRole: "Cliente Pinho Law",
  },
  en: {
    eyebrow: "Testimonials",
    heading: "What our clients say",
    sub: "Every case tells a story. These are real, verifiable client reviews published on Google over the past 6 years.",
    statsLabel: "stars from",
    reviewsLabel: "reviews",
    sourceLabel: "Source",
    agoLabel: (m: number) =>
      m < 12
        ? `${m} ${m === 1 ? "month" : "months"} ago`
        : `${Math.round(m / 12)} ${m < 24 ? "year" : "years"} ago`,
    tagLabels: {
      immigration: "Immigration Client",
      business: "Business Client",
      citizenship: "Citizenship Client",
      family: "Family Client",
    },
    defaultRole: "Pinho Law Client",
  },
  es: {
    eyebrow: "Testimonios",
    heading: "Lo que dicen nuestros clientes",
    sub: "Testimonios reales publicados en Google durante los últimos 6 años.",
    statsLabel: "estrellas de",
    reviewsLabel: "reseñas",
    sourceLabel: "Fuente",
    agoLabel: (m: number) =>
      m < 12
        ? `${m} ${m === 1 ? "mes" : "meses"} atrás`
        : `${Math.round(m / 12)} ${m < 24 ? "año" : "años"} atrás`,
    tagLabels: {
      immigration: "Cliente de Inmigración",
      business: "Cliente Empresarial",
      citizenship: "Cliente de Ciudadanía",
      family: "Cliente Familiar",
    },
    defaultRole: "Cliente Pinho Law",
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

type Heading = (typeof HEADINGS)[L];
function toItem(r: PinhoReview, l: L, h: Heading): TestimonialItem {
  const body = l === "pt" ? (r.bodyPt ?? r.body) : l === "es" ? (r.bodyEs ?? r.body) : r.body;
  const role = r.tag ? h.tagLabels[r.tag] : h.defaultRole;
  return {
    text: body,
    name: r.author,
    role: `${role} · ${h.agoLabel(r.monthsAgo)}`,
  };
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

  const items = REVIEWS.map((r) => toItem(r, key, h));
  const third = Math.ceil(items.length / 3);
  const col1 = items.slice(0, third);
  const col2 = items.slice(third, third * 2);
  const col3 = items.slice(third * 2);

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

            <div className="mt-8 inline-flex flex-col items-center gap-2 rounded-[var(--radius-lg)] border border-gold/30 bg-white px-6 py-5 shadow-sm md:px-8 md:py-6">
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-6 w-6 ${i < Math.floor(REVIEW_STATS.average) ? "fill-gold text-gold" : "fill-none text-gold"}`}
                    />
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
                <span className="text-ink-muted/70">
                  {h.sourceLabel}: {REVIEW_STATS.source}
                </span>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Scrolling testimonial columns — 21st.dev/testimonials-columns-1 */}
      <section className="bg-cream pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex max-h-[740px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
            <TestimonialsColumn testimonials={col1} duration={26} />
            <TestimonialsColumn
              testimonials={col2}
              className="hidden md:block"
              duration={32}
            />
            <TestimonialsColumn
              testimonials={col3}
              className="hidden lg:block"
              duration={28}
            />
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
