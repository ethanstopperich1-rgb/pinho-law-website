import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { Link } from "@/i18n/navigation";
import { ArrowRight, BookOpen, HelpCircle } from "lucide-react";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "resourcesPage" });

  return createPageMetadata({
    title: t("headline"),
    description: t("description"),
    path: "/resources",
    locale: locale as Locale,
  });
}

export default async function ResourcesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "resourcesPage" });

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
          <div className="grid gap-6 md:grid-cols-2">
            <FadeIn>
              <Link
                href="/resources/faq"
                className="group block h-full rounded-[var(--radius-lg)] border border-border bg-white p-8 transition-all hover:border-gold/40 hover:shadow-md"
              >
                <HelpCircle className="h-8 w-8 text-gold" />
                <h2 className="mt-4 font-heading text-xl font-semibold text-ink">
                  {t("faqTitle")}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {t("faqDescription")}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gold">
                  {t("faqCta")}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="h-full rounded-[var(--radius-lg)] border border-border bg-cream p-8">
                <BookOpen className="h-8 w-8 text-ink-muted" />
                <h2 className="mt-4 font-heading text-xl font-semibold text-ink">
                  {t("blogTitle")}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {t("blogDescription")}
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
