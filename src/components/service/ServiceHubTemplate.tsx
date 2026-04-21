import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { CtaSection } from "@/components/sections/cta-section";
import { GoldGradientCard } from "@/components/ui/gold-gradient-card";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";
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
  const breadcrumbLd = breadcrumbSchema([
    { name: "Home", url: `${SITE.url}/${key}` },
    { name: breadcrumbLabel, url: `${SITE.url}/${key}/${slug}` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbLd} />

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
          </FadeIn>
          {content.stats && content.stats.length > 0 && (
            <FadeIn delay={0.2}>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {content.stats.map((s) => (
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
          )}
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
