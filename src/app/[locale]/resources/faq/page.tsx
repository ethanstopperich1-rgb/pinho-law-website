import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import { CtaSection } from "@/components/sections/cta-section";
import { CASE_STATS } from "@/lib/constants";
import type { Locale } from "@/i18n/routing";

// Full FAQ index (8 items, GBP-review-grounded) rendered as a semantic
// <dl> definition list. Perplexity + ChatGPT extract dt/dd pairs cleanly,
// and FAQPage JSON-LD with SpeakableSpecification covers the same surface
// for engines that lean on schema (Gemini, Bing Copilot).

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return createPageMetadata({
    title:
      locale === "pt"
        ? "Perguntas Frequentes — Imigração e Direito Empresarial"
        : locale === "es"
          ? "Preguntas Frecuentes — Inmigración y Derecho Empresarial"
          : "Frequently Asked Questions — Immigration & Business Law",
    description:
      locale === "pt"
        ? "Respostas diretas sobre prazos, custos, RFE, mudança de status e atendimento trilíngue na Pinho Law em Orlando."
        : locale === "es"
          ? "Respuestas directas sobre plazos, costos, RFE, cambio de estatus y atención trilingüe en Pinho Law en Orlando."
          : "Direct answers on timelines, fees, RFE recovery, status changes, and trilingual service at Pinho Law in Orlando.",
    path: "/resources/faq",
    locale: locale as Locale,
  });
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "faq" });
  const indices = [0, 1, 2, 3, 4, 5, 6, 7];
  const items = indices.map((i) => ({
    question: t(`items.${i}.question`),
    answer: t(`items.${i}.answer`),
  }));

  const lastReviewedLabel =
    locale === "pt"
      ? "Última revisão"
      : locale === "es"
        ? "Última revisión"
        : "Last reviewed";

  return (
    <>
      <JsonLd data={faqSchema(items)} />

      <section className="bg-cream py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <span className="gold-rule" />
            <h1 className="mt-6 font-heading text-3xl font-bold text-ink md:text-5xl">
              {t("headline")}
            </h1>
            <p className="mt-3 text-[11px] uppercase tracking-wider text-ink-muted/70">
              {lastReviewedLabel}{" "}
              <time dateTime={CASE_STATS.asOf}>
                {CASE_STATS.asOfLabel[
                  locale as "pt" | "en" | "es"
                ] ?? CASE_STATS.asOfLabel.en}
              </time>
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <dl className="mx-auto max-w-3xl divide-y divide-border">
            {items.map((item, i) => (
              <div key={i} className="py-7">
                <dt className="font-heading text-lg font-semibold text-ink md:text-xl">
                  {item.question}
                </dt>
                <dd className="mt-3 text-base leading-relaxed text-ink-muted">
                  {item.answer}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
