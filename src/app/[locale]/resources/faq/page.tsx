import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { FaqPreview } from "@/components/sections/faq-preview";
import { Container } from "@/components/ui/container";
import { CtaSection } from "@/components/sections/cta-section";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return createPageMetadata({
    title: locale === "pt" ? "Perguntas Frequentes" : locale === "es" ? "Preguntas Frecuentes" : "Frequently Asked Questions",
    description: "Find answers to common questions about immigration law, business law, consultations, and working with Pinho Law.",
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
  const faqItems = [0, 1, 2, 3].map((i) => ({
    question: t(`items.${i}.question`),
    answer: t(`items.${i}.answer`),
  }));

  return (
    <>
      <JsonLd data={faqSchema(faqItems)} />
      <section className="bg-cream py-16 md:py-24">
        <Container>
          <h1 className="font-heading text-3xl font-bold text-ink md:text-5xl">
            {t("headline")}
          </h1>
        </Container>
      </section>
      <FaqPreview />
      <CtaSection />
    </>
  );
}
