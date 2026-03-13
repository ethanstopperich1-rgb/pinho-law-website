import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { webPageSchema, faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { SITE } from "@/lib/constants";

import { Hero } from "@/components/sections/hero";
import { PracticeAreas } from "@/components/sections/practice-areas";
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
  const faqItems = [0, 1, 2, 3].map((i) => ({
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
        })}
      />
      <JsonLd data={faqSchema(faqItems)} />

      <Hero />
      <PracticeAreas />
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
