import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { CtaSection } from "@/components/sections/cta-section";
import { AuthorByline } from "@/components/seo/AuthorByline";
import { JsonLd } from "@/components/seo/json-ld";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from "@/lib/schema";
import { CASE_STATS, SITE } from "@/lib/constants";
import { ServiceTable } from "@/components/service/ServiceTable";
import { Link } from "@/i18n/navigation";
import {
  AlertTriangle,
  CheckCircle2,
  CircleDollarSign,
  Info,
} from "lucide-react";
import type { ReactNode } from "react";

// Shared template for Pinho Law service pages. One source of truth for
// visual rhythm, schema wiring, breadcrumb + FAQ JSON-LD. Each service
// page passes a typed content object and optionally a custom section
// (e.g. a country-eligibility table, a multi-column comparison) via
// the `beforeFaq` slot.

export type L = "pt" | "en" | "es";

export interface ServiceStat {
  value: string;
  label: string;
}

export interface ServiceTable2026 {
  heading: string;
  headers: readonly string[];
  rows: readonly (readonly string[])[];
  note?: string;
  /** Visual emphasis on the note block. Default = subdued italic. */
  noteStyle?: "gold" | "muted";
}

export interface ServiceListSection {
  heading: string;
  intro?: string;
  items: readonly string[];
  /** "numbered" for Dhanasar-style prongs, "check" for winning factors */
  style?: "numbered" | "check";
}

export interface ServiceCallout {
  badgeLabel: string;
  heading: string;
  body: string;
  recLabel?: string;
  rec?: string;
  liveLink?: { label: string; href: string };
  /** Alert color palette. Default = gold. */
  tone?: "alert" | "gold";
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceRelated {
  label: string;
  href: string;
}

export interface ServicePageContent {
  locale: L;
  /** Canonical EN slug of this page — used in breadcrumb + schema URLs. */
  slug: string;
  breadcrumbLabel: string;
  immigrationBreadcrumb: string;
  eyebrow: string;
  h1: string;
  lede: string;
  stats?: readonly ServiceStat[];
  meta: {
    title: string;
    description: string;
  };
  sections: readonly (
    | { kind: "list"; value: ServiceListSection }
    | { kind: "table"; value: ServiceTable2026 }
    | { kind: "callout"; value: ServiceCallout }
    | { kind: "prose"; heading: string; body: string }
  )[];
  faqTitle: string;
  faq: readonly ServiceFaq[];
  relatedTitle: string;
  related: readonly ServiceRelated[];
}

export function ServicePageTemplate({
  content,
  beforeFaq,
}: {
  content: ServicePageContent;
  beforeFaq?: ReactNode;
}) {
  const { locale: key, slug, breadcrumbLabel, immigrationBreadcrumb } = content;

  const faqLd = faqSchema(
    content.faq.map(({ q, a }) => ({ question: q, answer: a })),
  );
  const breadcrumbLd = breadcrumbSchema([
    { name: "Home", url: `${SITE.url}/${key}` },
    { name: immigrationBreadcrumb, url: `${SITE.url}/${key}/${topOf(slug)}` },
    { name: breadcrumbLabel, url: `${SITE.url}/${key}/${slug}` },
  ]);
  const serviceLd = serviceSchema({
    name: content.h1,
    description: content.meta.description,
    url: `${SITE.url}/${key}/${slug}`,
  });

  return (
    <>
      <JsonLd data={faqLd} />
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={serviceLd} />

      {/* Hero + stats band */}
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
            {/* Visible <time> freshness signal — closes audit "0/5 date
                signals" finding on every Service page. */}
            <p className="mt-4 text-[11px] uppercase tracking-wider text-cream/50">
              {key === "pt" ? "Última revisão" : key === "es" ? "Última revisión" : "Last reviewed"}{" "}
              <time dateTime={CASE_STATS.asOf}>
                {CASE_STATS.asOfLabel[key]}
              </time>
            </p>
          </FadeIn>
          {(() => {
            // Always render statistics — page-specific stats override the
            // firm-wide fallback. Closes audit "0/5 statistics" finding.
            const statRow =
              content.stats && content.stats.length > 0
                ? content.stats
                : ([
                    { value: CASE_STATS.casesApproved, label: key === "pt" ? "Casos aprovados" : key === "es" ? "Casos aprobados" : "Cases approved" },
                    { value: CASE_STATS.successRate, label: key === "pt" ? "Taxa de aprovação" : key === "es" ? "Tasa de aprobación" : "Approval rate" },
                    { value: CASE_STATS.clientsServed, label: key === "pt" ? "Clientes atendidos" : key === "es" ? "Clientes atendidos" : "Clients served" },
                    { value: "4.6★", label: key === "pt" ? "111 avaliações Google" : key === "es" ? "111 reseñas Google" : "111 Google reviews" },
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

      {/* Visible author byline + freshness signal — AEO E-E-A-T
          (addresses audit [High] Absent Author Credentials +
          [Medium] Content Freshness Signals). */}
      <section className="border-b border-border/40 bg-cream py-6">
        <Container>
          <div className="mx-auto max-w-3xl">
            <AuthorByline locale={content.locale} role="reviewer" />
          </div>
        </Container>
      </section>

      {/* Sections — alternating light/white for rhythm */}
      {content.sections.map((s, i) => {
        const alt = i % 2 === 0;
        const bg = alt ? "bg-cream" : "bg-white";
        return (
          <section
            key={i}
            className={`${i === 0 ? "" : "border-t border-border"} ${bg} py-20`}
          >
            <Container>
              <FadeIn className="mx-auto max-w-3xl">
                {s.kind === "prose" && (
                  <>
                    <h2 className="font-heading text-3xl font-semibold text-ink md:text-4xl">
                      {s.heading}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-ink-muted">
                      {s.body}
                    </p>
                  </>
                )}
                {s.kind === "list" && (
                  <>
                    <h2 className="font-heading text-3xl font-semibold text-ink md:text-4xl">
                      {s.value.heading}
                    </h2>
                    {s.value.intro && (
                      <p className="mt-4 text-base leading-relaxed text-ink-muted">
                        {s.value.intro}
                      </p>
                    )}
                    {s.value.style === "numbered" ? (
                      <ol className="mt-6 space-y-3">
                        {s.value.items.map((item, idx) => (
                          <li key={item} className="flex gap-3 text-base text-ink">
                            <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-xs font-semibold text-white">
                              {idx + 1}
                            </span>
                            {item}
                          </li>
                        ))}
                      </ol>
                    ) : (
                      <ul className="mt-6 space-y-3">
                        {s.value.items.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 text-base text-ink-muted"
                          >
                            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-gold" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
                {s.kind === "table" && (
                  <>
                    <h2 className="font-heading text-3xl font-semibold text-ink md:text-4xl">
                      {s.value.heading}
                    </h2>
                    <ServiceTable
                      headers={s.value.headers}
                      rows={s.value.rows}
                      className="mt-6"
                    />
                    {s.value.note && (
                      <p
                        className={
                          s.value.noteStyle === "gold"
                            ? "mt-5 rounded-[var(--radius-md)] border border-gold/30 bg-gold/5 p-4 text-sm leading-relaxed text-ink"
                            : "mt-5 text-sm italic leading-relaxed text-ink-muted"
                        }
                      >
                        {s.value.note}
                      </p>
                    )}
                  </>
                )}
                {s.kind === "callout" && (
                  <CalloutBlock c={s.value} />
                )}
              </FadeIn>
            </Container>
          </section>
        );
      })}

      {beforeFaq}

      {/* FAQ */}
      <section className="border-t border-border bg-cream py-20">
        <Container>
          <FadeIn className="mx-auto max-w-3xl">
            <h2 className="font-heading text-3xl font-semibold text-ink md:text-4xl">
              {content.faqTitle}
            </h2>
            <div className="mt-10 divide-y divide-border">
              {content.faq.map((item, i) => (
                <FadeIn key={item.q} delay={i * 0.03}>
                  <div className="py-6">
                    <h3 className="font-heading text-lg font-semibold text-ink">
                      {item.q}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {item.a}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Related */}
      {content.related.length > 0 && (
        <section className="border-t border-border bg-white py-16">
          <Container>
            <FadeIn className="mx-auto max-w-3xl">
              <h2 className="font-heading text-xl font-semibold text-ink">
                {content.relatedTitle}
              </h2>
              <ul className="mt-4 space-y-2">
                {content.related.map((r) => (
                  <li key={r.href}>
                    <Link
                      href={r.href}
                      className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:underline"
                    >
                      → {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </Container>
        </section>
      )}

      <CtaSection />
    </>
  );
}

// ------- helpers -------

function topOf(slug: string): string {
  // Derive the top-level section (immigration / business / real-estate) for
  // the middle breadcrumb item. Safe because all service slugs share the
  // pattern <top>/<category>/<visa> or <top>/<service>.
  return slug.split("/")[0] ?? slug;
}

function CalloutBlock({ c }: { c: ServiceCallout }) {
  const tone = c.tone ?? "gold";
  const palette =
    tone === "alert"
      ? {
          container: "rounded-[var(--radius-lg)] border border-alert/30 bg-alert/5 p-6 md:p-8",
          badge: "border-alert/40 bg-alert/10 text-alert",
          badgeIcon: <AlertTriangle className="h-3.5 w-3.5" />,
        }
      : {
          container: "rounded-[var(--radius-lg)] border border-gold/30 bg-gold/5 p-6 md:p-8",
          badge: "border-gold/40 bg-gold/10 text-gold",
          badgeIcon: <Info className="h-3.5 w-3.5" />,
        };
  return (
    <div className={palette.container}>
      <div
        className={`mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-medium ${palette.badge}`}
      >
        {palette.badgeIcon}
        {c.badgeLabel}
      </div>
      <h2 className="font-heading text-2xl font-semibold text-ink md:text-3xl">
        {c.heading}
      </h2>
      <p className="mt-4 text-sm leading-relaxed text-ink-muted md:text-base">
        {c.body}
      </p>
      {c.rec && (
        <div className="mt-5 border-t border-ink/10 pt-4">
          {c.recLabel && (
            <p className="text-xs font-medium uppercase tracking-wider text-gold">
              {c.recLabel}
            </p>
          )}
          <p className="mt-2 text-sm leading-relaxed text-ink-muted md:text-base">
            {c.rec}
          </p>
        </div>
      )}
      {c.liveLink && (
        <p className="mt-5 text-xs text-ink-muted/70">
          <Link
            href={c.liveLink.href}
            className="underline hover:text-gold"
          >
            {c.liveLink.label}
          </Link>
        </p>
      )}
    </div>
  );
}

export { CircleDollarSign };
