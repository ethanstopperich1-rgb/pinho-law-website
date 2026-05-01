import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { webPageSchema, faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { SITE } from "@/lib/constants";

import { Hero } from "@/components/sections/hero";
import { PracticeAreas } from "@/components/sections/practice-areas";
import { IntentPicker } from "@/components/sections/intent-picker";
import { ServicesEnumeration } from "@/components/sections/services-enumeration";
import { WhyPinho } from "@/components/sections/why-pinho";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Testimonials } from "@/components/sections/testimonials";
import { AttorneySpotlight } from "@/components/sections/attorney-spotlight";
import { MultilingualPromise } from "@/components/sections/multilingual-promise";
import { FaqPreview } from "@/components/sections/faq-preview";
import { FirmVideo } from "@/components/sections/firm-video";
import { CtaSection } from "@/components/sections/cta-section";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return createPageMetadata({
    title: t("siteTitle"),
    description: t("siteDescription"),
    path: "",
    locale: locale as Locale,
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "faq" });
  // Emit all 8 FAQ Q/A pairs into FAQPage JSON-LD even though the homepage
  // accordion shows the top 6 — gives AI engines (ChatGPT, Perplexity,
  // Gemini, AIO) the full extractable Q&A surface in one place.
  const faqItems = [0, 1, 2, 3, 4, 5, 6, 7].map((i) => ({
    question: t(`items.${i}.question`),
    answer: t(`items.${i}.answer`),
  }));

  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Pinho Law — Immigration & Business Law in Florida",
          description: SITE.description,
          url: `${SITE.url}/${locale}`,
          locale,
          dateModified: "2026-04-30",
        })}
      />
      <JsonLd data={faqSchema(faqItems)} />

      <Hero />
      <IntentPicker />
      <PracticeAreas />
      <ServicesEnumeration />
      <WhyPinho />
      <FirmVideo />
      <HowItWorks />
      <Testimonials />
      <AttorneySpotlight />
      <MultilingualPromise />
      <FaqPreview />
      <CtaSection />
    </>
  );
}
