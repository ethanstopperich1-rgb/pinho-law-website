import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { CtaSection } from "@/components/sections/cta-section";
import { VisaPropertiesBar } from "@/components/sections/VisaPropertiesBar";
import { VisaCostsTable } from "@/components/sections/VisaCostsTable";
import { VisaTimeline } from "@/components/sections/VisaTimeline";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { AlternativesGrid } from "@/components/sections/AlternativesGrid";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { AuthorByline } from "@/components/seo/AuthorByline";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { createPageMetadata } from "@/lib/metadata";
import { Link } from "@/i18n/navigation";
import { VISAS, getAllVisaIds } from "@/data/visas";
import { getFaqsByVisa } from "@/data/faqs";
import { routing, type Locale } from "@/i18n/routing";
import { FIRM, SITE } from "@/lib/constants";
import type { L } from "@/content/blog/types";

export function generateStaticParams() {
  return getAllVisaIds().flatMap((visaId) =>
    (routing.locales as readonly L[]).map((locale) => ({
      locale,
      visa: VISAS[visaId].slugs[locale],
    })),
  );
}

function findVisa(locale: L, slug: string) {
  return Object.values(VISAS).find((v) => v.slugs[locale] === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; visa: string }>;
}) {
  const { locale, visa: slug } = await params;
  const l = locale as L;
  const visa = findVisa(l, slug);
  if (!visa) return {};
  return createPageMetadata({
    title: `${visa.names[l].short} — ${visa.names[l].full} | Pinho Law`,
    description:
      visa.names[l].formal +
      (l === "pt"
        ? " — Dra. Izi Pinho, Florida Bar #126610. Orlando, FL."
        : l === "es"
          ? " — Abogada Izi Pinho, Florida Bar #126610. Orlando, FL."
          : " — Attorney Izi Pinho, Florida Bar #126610. Orlando, FL."),
    path: `/immigration/${slug}`,
    locale: locale as Locale,
  });
}

const COPY = {
  pt: {
    immigration: "Imigração",
    eligibilityH2: "Quem Pode Aplicar?",
    eduLabel: "Educação mínima",
    expLabel: "Experiência",
    extLabel: "Habilidade extraordinária exigida",
    dhanasarH3: "O Teste dos 3 Fatores (Matter of Dhanasar)",
    costsH2: "Investimento Estimado",
    timelineH2: "Cronograma do Processo",
    faqH2: "Perguntas Frequentes",
    altH2: "Compare com Outras Opções",
    reviewedBy: "Revisado por Dra. Izi Pinho, Esq. · Atualizado em",
    yes: "Sim",
    no: "Não",
    bookCta: "Agendar Consulta Gratuita",
  },
  en: {
    immigration: "Immigration",
    eligibilityH2: "Who Can Apply?",
    eduLabel: "Minimum education",
    expLabel: "Experience",
    extLabel: "Extraordinary ability required",
    dhanasarH3: "The 3-Prong Test (Matter of Dhanasar)",
    costsH2: "Estimated Investment",
    timelineH2: "Process Timeline",
    faqH2: "Frequently Asked Questions",
    altH2: "Compare Your Options",
    reviewedBy: "Reviewed by Attorney Izi Pinho, Esq. · Updated",
    yes: "Yes",
    no: "No",
    bookCta: "Book Free Consultation",
  },
  es: {
    immigration: "Inmigración",
    eligibilityH2: "¿Quién Puede Aplicar?",
    eduLabel: "Educación mínima",
    expLabel: "Experiencia",
    extLabel: "Habilidad extraordinaria requerida",
    dhanasarH3: "El Test de los 3 Factores (Matter of Dhanasar)",
    costsH2: "Inversión Estimada",
    timelineH2: "Cronograma del Proceso",
    faqH2: "Preguntas Frecuentes",
    altH2: "Compara Tus Opciones",
    reviewedBy: "Revisado por Abogada Izi Pinho, Esq. · Actualizado",
    yes: "Sí",
    no: "No",
    bookCta: "Agendar Consulta Gratuita",
  },
} as const;

function formatDate(iso: string, locale: L) {
  const d = new Date(iso);
  const map = { pt: "pt-BR", en: "en-US", es: "es-419" } as const;
  return new Intl.DateTimeFormat(map[locale], {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(d);
}

export default async function VisaHubPage({
  params,
}: {
  params: Promise<{ locale: string; visa: string }>;
}) {
  const { locale, visa: slug } = await params;
  setRequestLocale(locale);
  const l = locale as L;
  const visa = findVisa(l, slug);
  if (!visa) notFound();
  const h = COPY[l];
  const faqs = getFaqsByVisa(visa.id).slice(0, 8);
  const url = `${SITE.url}/${l}/immigration/${visa.slugs[l]}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: visa.names[l].full,
    description: visa.names[l].formal,
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: "Florida, United States",
    priceRange: `$${visa.costs.total.min.toLocaleString()} – $${visa.costs.total.max.toLocaleString()}`,
    url,
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Pinho Law", url: `${SITE.url}/${l}` },
          { name: h.immigration, url: `${SITE.url}/${l}/immigration` },
          { name: visa.names[l].short, url },
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
            <span>/</span>{" "}
            <Link href="/immigration" className="hover:text-[#C9A961]">
              {h.immigration}
            </Link>{" "}
            <span>/</span>{" "}
            <span className="text-[#C9A961]">{visa.names[l].short}</span>
          </nav>
          <FadeIn className="mt-5 max-w-3xl">
            {visa.hero?.badgeText && (
              <p className="inline-flex items-center rounded-full border border-[#C9A961] bg-[#C9A961]/20 px-4 py-1 text-sm font-semibold text-[#C9A961]">
                {visa.hero.badgeText[l]}
              </p>
            )}
            <h1 className="mt-4 font-heading text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              {visa.names[l].full}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-white/75 md:text-xl">
              {visa.names[l].formal}
            </p>
            {visa.hero?.stats && (
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {visa.hero.stats.map((s, i) => (
                  <div
                    key={i}
                    className="rounded-[var(--radius-md)] border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                  >
                    <div className="font-heading text-2xl font-semibold text-[#C9A961] md:text-3xl">
                      {s.value}
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-wider text-white/60">
                      {s.label[l]}
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <MagneticButton distance={0.3}>
                <Link
                  href="/consultation"
                  className="inline-flex items-center justify-center rounded-[var(--radius-md)] bg-[#C9A961] px-6 py-3 font-semibold text-[#0E1B2E] hover:bg-[#C9A961]/90"
                >
                  {h.bookCta}
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
            <p className="mt-6 text-xs italic text-white/55">
              {h.reviewedBy} {formatDate(visa.lastReviewedAt, l)}
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Properties bar */}
      <section className="bg-cream py-8">
        <Container>
          <VisaPropertiesBar visa={visa} locale={l} />
        </Container>
      </section>

      {/* Author byline + freshness (AEO E-E-A-T) */}
      <section className="border-y border-border/40 bg-cream pb-6">
        <Container>
          <div className="mx-auto max-w-3xl">
            <AuthorByline
              locale={l as Locale}
              role="reviewer"
              reviewedAt={visa.lastReviewedAt}
            />
          </div>
        </Container>
      </section>

      {/* Eligibility */}
      <section className="bg-cream py-16">
        <Container>
          <FadeIn className="mx-auto max-w-4xl">
            <h2 className="font-heading text-3xl font-semibold text-ink md:text-4xl">
              {h.eligibilityH2}
            </h2>
            <ul className="mt-6 space-y-2 text-base text-ink md:text-lg">
              <li>
                <span className="font-medium">{h.eduLabel}:</span>{" "}
                {visa.eligibility.preferredEducation}
              </li>
              <li>
                <span className="font-medium">{h.expLabel}:</span>{" "}
                {visa.eligibility.requiresExperience
                  ? `${visa.eligibility.minExperienceYears}+ ${l === "pt" || l === "es" ? "anos" : "years"}`
                  : h.no}
              </li>
              <li>
                <span className="font-medium">{h.extLabel}:</span>{" "}
                {visa.eligibility.requiresExceptionalAbility ? h.yes : h.no}
              </li>
            </ul>
            {visa.eligibility.threeProngTest && (
              <>
                <h3 className="mt-10 font-heading text-2xl font-semibold text-ink">
                  {h.dhanasarH3}
                </h3>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {visa.eligibility.threeProngTest.map((prong) => (
                    <div
                      key={prong.id}
                      className="rounded-[var(--radius-md)] border border-[#C9A961] bg-[#0E1B2E] p-5 text-white"
                    >
                      <h4 className="font-heading text-base font-semibold text-[#C9A961]">
                        {prong.names[l]}
                      </h4>
                      <p className="mt-3 text-sm leading-relaxed text-white/80">
                        {prong.description[l]}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </FadeIn>
        </Container>
      </section>

      {/* Costs */}
      <section className="bg-cream py-16">
        <Container>
          <FadeIn className="mx-auto max-w-3xl">
            <h2 className="font-heading text-3xl font-semibold text-ink md:text-4xl">
              {h.costsH2}
            </h2>
            <div className="mt-8">
              <VisaCostsTable visa={visa} locale={l} />
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Timeline */}
      <section className="bg-[#0E1B2E] py-16">
        <Container>
          <FadeIn className="mx-auto max-w-3xl">
            <h2 className="font-heading text-3xl font-semibold text-white md:text-4xl">
              {h.timelineH2}
            </h2>
            <div className="mt-8">
              <VisaTimeline visa={visa} locale={l} />
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="bg-cream py-16">
          <Container>
            <FadeIn className="mx-auto max-w-3xl">
              <h2 className="font-heading text-3xl font-semibold text-ink md:text-4xl">
                {h.faqH2}
              </h2>
              <div className="mt-8">
                <FaqAccordion faqs={faqs} locale={l} />
              </div>
            </FadeIn>
          </Container>
        </section>
      )}

      {/* Alternatives */}
      {visa.alternatives.length > 0 && (
        <section className="bg-[#0E1B2E] py-16">
          <Container>
            <FadeIn className="mx-auto max-w-5xl">
              <h2 className="font-heading text-3xl font-semibold text-white md:text-4xl">
                {h.altH2}
              </h2>
              <div className="mt-8">
                <AlternativesGrid
                  alternativeIds={visa.alternatives}
                  currentVisaId={visa.id}
                  locale={l}
                />
              </div>
            </FadeIn>
          </Container>
        </section>
      )}

      <CtaSection />
    </>
  );
}
