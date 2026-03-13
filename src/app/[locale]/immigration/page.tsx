import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { CtaSection } from "@/components/sections/cta-section";
import type { Locale } from "@/i18n/routing";

const serviceSlugs = [
  "family-based",
  "marriage-based",
  "green-cards",
  "adjustment-of-status",
  "citizenship",
  "work-visas",
  "investor-visas",
  "eb-visas",
  "change-of-status",
  "visa-extensions",
  "family-petitions",
] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "immigrationPage" });

  return createPageMetadata({
    title: t("headline"),
    description: t("description"),
    path: "/immigration",
    locale: locale as Locale,
  });
}

export default async function ImmigrationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "immigrationPage" });

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
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceSlugs.map((slug, i) => (
              <FadeIn key={slug} delay={i * 0.05}>
                <Link
                  href={`/immigration/${slug}`}
                  className="group flex items-center justify-between rounded-[var(--radius-md)] border border-border bg-white p-5 transition-all duration-300 hover:border-gold/40 hover:shadow-md"
                >
                  <span className="font-heading text-sm font-semibold text-ink md:text-base">
                    {t(`services.${slug}`)}
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-ink-muted transition-all group-hover:translate-x-1 group-hover:text-gold" />
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
