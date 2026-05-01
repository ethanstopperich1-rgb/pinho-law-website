import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { CtaSection } from "@/components/sections/cta-section";
import { GoldGradientCard } from "@/components/ui/gold-gradient-card";
import { AuthorByline } from "@/components/seo/AuthorByline";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { CASE_STATS, SITE } from "@/lib/constants";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

// Shared template for pillar hub pages (/immigration, /business, /real-estate).
// Renders: hero → stats band → one or more grouped service-card sections → CTA.
// Each card links to a detailed service page that uses ServicePageTemplate.

export type L = "pt" | "en" | "es";

export interface HubCard {
  title: string;
  body: string;
  href: string;
  /** Optional emphasis for the "scholarly moat" / crown-jewel card. */
  featured?: boolean;
}

export interface HubCardGroup {
  title: string;
  intro?: string;
  cards: readonly HubCard[];
}

export interface HubStat {
  value: string;
  label: string;
}

export interface ServiceHubContent {
  locale: L;
  slug: string;
  breadcrumbLabel: string;
  eyebrow: string;
  h1: string;
  lede: string;
  stats?: readonly HubStat[];
  groups: readonly HubCardGroup[];
  ctaLabel: string;
  ctaHref: string;
}

export function ServiceHubTemplate({
  content,
}: {
  content: ServiceHubContent;
}) {
  const { locale: key, slug, breadcrumbLabel } = content;
  const hubUrl = `${SITE.url}/${key}/${slug}`;
  const breadcrumbLd = breadcrumbSchema([
    { name: "Home", url: `${SITE.url}/${key}` },
    { name: breadcrumbLabel, url: hubUrl },
  ]);
  // Service schema on hub pages — closes audit "0 of 5 pages have Service
  // schema" finding. Each child card becomes a sub-service via hasOfferCatalog.
  const serviceLd = {
    ...serviceSchema({
      name: content.h1,
      description: content.lede,
      url: hubUrl,
    }),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: content.h1,
      itemListElement: content.groups.flatMap((g) =>
        g.cards.map((card) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "LegalService",
            name: card.title,
            description: card.body,
            url: `${SITE.url}/${key}${card.href}`,
          },
        })),
      ),
    },
  };
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: content.h1,
    numberOfItems: content.groups.reduce((n, g) => n + g.cards.length, 0),
    itemListElement: content.groups.flatMap((g, gi) =>
      g.cards.map((card, ci) => ({
        "@type": "ListItem",
        position: gi * 100 + ci + 1,
        url: `${SITE.url}/${key}${card.href}`,
        name: card.title,
      })),
    ),
  };

  // Trilingual freshness stamp — surfaced as visible <time> below the lede
  // and also feeds AggregateRating dateModified hint.
  const lastReviewedLabel =
    key === "pt"
      ? "Última revisão"
      : key === "es"
        ? "Última revisión"
        : "Last reviewed";

  return (
    <>
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={serviceLd} />
      <JsonLd data={itemListLd} />

      {/* Hero */}
      <section className="bg-navy py-20 md:py-28">
        <Container>
          <FadeIn className="max-w-3xl">
            <span className="gold-rule" />
            <p className="mt-6 text-xs font-medium uppercase tracking-wider text-gold">
              {content.eyebrow}
            </p>
            <h1 className="mt-3 font-heading text-4xl font-semibold text-cream md:text-6xl">
              {content.h1}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-cream/70 md:text-xl">
              {content.lede}
            </p>
            {/* Visible freshness signal — closes audit "0 of 5 pages have
                date signals" finding. Wrapped in <time> for AI engines. */}
            <p className="mt-4 text-[11px] uppercase tracking-wider text-cream/50">
              {lastReviewedLabel}{" "}
              <time dateTime={CASE_STATS.asOf}>
                {CASE_STATS.asOfLabel[key]}
              </time>
            </p>
          </FadeIn>
          {(() => {
            // Always render firm-wide stats as a fallback so every hub page
            // has visible numerical proof — closes audit "0 of 5 pages have
            // statistics" finding. Page-specific stats win if provided.
            const statRow =
              content.stats && content.stats.length > 0
                ? content.stats
                : ([
                    { value: CASE_STATS.casesApproved, label: key === "pt" ? "Casos aprovados" : key === "es" ? "Casos aprobados" : "Cases approved" },
                    { value: CASE_STATS.successRate, label: key === "pt" ? "Taxa de aprovação" : key === "es" ? "Tasa de aprobación" : "Approval rate" },
                    { value: CASE_STATS.clientsServed, label: key === "pt" ? "Clientes atendidos" : key === "es" ? "Clientes atendidos" : "Clients served" },
                    { value: "9+", label: key === "pt" ? "Anos de prática" : key === "es" ? "Años de práctica" : "Years in practice" },
                  ] as const);
            return (
              <FadeIn delay={0.2}>
                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {statRow.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-[var(--radius-md)] border border-gold/20 bg-navy-light/50 p-4 backdrop-blur-sm"
                    >
                      <div className="font-heading text-xl font-semibold text-cream md:text-2xl">
                        {s.value}
                      </div>
                      <div className="mt-1 text-[11px] uppercase tracking-wider text-cream/50">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            );
          })()}
        </Container>
      </section>

      {/* Author byline + freshness (AEO E-E-A-T) */}
      <section className="border-b border-border/40 bg-cream py-6">
        <Container>
          <div className="mx-auto max-w-3xl">
            <AuthorByline locale={content.locale} role="reviewer" />
          </div>
        </Container>
      </section>

      {/* Groups of service cards */}
      {content.groups.map((group, gi) => {
        const alt = gi % 2 === 0;
        const bg = alt ? "bg-cream" : "bg-white";
        return (
          <section
            key={group.title}
            className={`${gi === 0 ? "" : "border-t border-border"} ${bg} py-20`}
          >
            <Container>
              <FadeIn className="mx-auto max-w-2xl text-center">
                <h2 className="font-heading text-3xl font-semibold text-ink md:text-4xl">
                  {group.title}
                </h2>
                {group.intro && (
                  <p className="mt-4 text-base leading-relaxed text-ink-muted">
                    {group.intro}
                  </p>
                )}
              </FadeIn>
              <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
                {group.cards.map((card, i) => (
                  <FadeIn key={card.title} delay={i * 0.04}>
                    <Link href={card.href} className="block h-full focus:outline-none">
                      <GoldGradientCard
                        className={`h-full ${
                          card.featured ? "border-gold bg-gold/5" : ""
                        }`}
                      >
                        <div className="flex h-full flex-col">
                          <h3 className="flex items-start justify-between gap-3 font-heading text-lg font-semibold text-ink">
                            {card.title}
                            <ArrowRight className="h-4 w-4 shrink-0 text-gold transition-transform group-hover:translate-x-0.5" />
                          </h3>
                          <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                            {card.body}
                          </p>
                        </div>
                      </GoldGradientCard>
                    </Link>
                  </FadeIn>
                ))}
              </div>
            </Container>
          </section>
        );
      })}

      {/* CTA */}
      <section className="border-t border-border bg-ink py-16 text-cream">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <Link
              href={content.ctaHref}
              className="inline-flex items-center justify-center rounded-[var(--radius-md)] bg-gold px-6 py-3 text-sm font-medium text-white hover:bg-gold/90"
            >
              {content.ctaLabel} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </FadeIn>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
