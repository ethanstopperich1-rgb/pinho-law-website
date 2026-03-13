import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { CtaSection } from "@/components/sections/cta-section";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "aboutPage" });

  return createPageMetadata({
    title: t("headline"),
    description: t("description"),
    path: "/about",
    locale: locale as Locale,
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "aboutPage" });

  return (
    <>
      <section className="bg-cream py-20 md:py-28">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl">
              <span className="gold-rule" />
              <h1 className="mt-6 font-heading text-3xl font-semibold text-ink md:text-5xl">
                {t("headline")}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-ink-muted">
                {t("description")}
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl space-y-16">
            <FadeIn>
              <div>
                <h2 className="font-heading text-2xl font-semibold text-ink">
                  {t("approachTitle")}
                </h2>
                <p className="mt-4 leading-relaxed text-ink-muted">
                  {t("approachDescription")}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div>
                <h2 className="font-heading text-2xl font-semibold text-ink">
                  {t("differenceTitle")}
                </h2>
                <ul className="mt-6 space-y-4 text-ink-muted">
                  {(["difference1", "difference2", "difference3", "difference4"] as const).map(
                    (key, i) => (
                      <li key={key} className="flex gap-4">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        <span className="leading-relaxed">{t(key)}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
