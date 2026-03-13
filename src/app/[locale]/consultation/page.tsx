import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { IntakeAgent } from "@/components/intake/intake-agent";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "consultationPage" });

  return createPageMetadata({
    title: t("headline"),
    description: t("description"),
    path: "/consultation",
    locale: locale as Locale,
  });
}

export default async function ConsultationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "consultationPage" });

  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-16 md:py-24">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <span className="gold-rule mx-auto" />
              <h1 className="mt-6 font-heading text-3xl font-semibold text-ink md:text-5xl">
                {t("headline")}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-ink-muted">
                {t("description")}
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Intake Agent */}
      <section className="py-16 md:py-20">
        <Container>
          <FadeIn>
            <IntakeAgent />
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
