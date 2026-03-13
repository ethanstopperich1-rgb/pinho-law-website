import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { CtaSection } from "@/components/sections/cta-section";
import Image from "next/image";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "attorney" });

  return createPageMetadata({
    title: t("name"),
    description: t("bio"),
    path: "/about/attorney",
    locale: locale as Locale,
  });
}

export default async function AttorneyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "attorney" });
  const tp = await getTranslations({ locale, namespace: "attorneyPage" });

  return (
    <>
      <section className="bg-cream py-20 md:py-28">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Photo */}
            <FadeIn className="lg:col-span-2">
              <div className="relative">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[var(--radius-lg)]">
                  <Image
                    src="/images/izi-pinho.jpg"
                    alt={t("name")}
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 -z-10 aspect-[3/4] w-full rounded-[var(--radius-lg)] border border-gold/20" />
              </div>
            </FadeIn>

            {/* Bio */}
            <FadeIn delay={0.15} className="space-y-8 lg:col-span-3">
              <div>
                <span className="gold-rule" />
                <h1 className="mt-6 font-heading text-3xl font-semibold text-ink md:text-4xl">
                  {t("name")}
                </h1>
                <p className="mt-2 text-sm font-medium uppercase tracking-wider text-gold">
                  {t("title")}
                </p>
              </div>

              <p className="text-lg leading-relaxed text-ink-muted">
                {t("bio")}
              </p>

              <p className="leading-relaxed text-ink-muted">
                {tp("extendedBio")}
              </p>

              {/* Credentials */}
              <div className="space-y-4 border-t border-border pt-8">
                <h2 className="font-heading text-lg font-semibold text-ink">
                  {tp("credentialsTitle")}
                </h2>
                <ul className="space-y-3 text-sm text-ink-muted">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {tp("credential1")}
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {tp("credential2")}
                  </li>
                </ul>
              </div>

              {/* Languages */}
              <div className="space-y-4 border-t border-border pt-8">
                <h2 className="font-heading text-lg font-semibold text-ink">
                  {tp("languagesTitle")}
                </h2>
                <div className="flex gap-4 text-sm text-ink-muted">
                  <span>English</span>
                  <span className="text-border">|</span>
                  <span>Português</span>
                  <span className="text-border">|</span>
                  <span>Español</span>
                </div>
              </div>

              {/* Education & Background */}
              <div className="space-y-4 border-t border-border pt-8">
                <h2 className="font-heading text-lg font-semibold text-ink">
                  {tp("educationTitle")}
                </h2>
                <p className="text-sm leading-relaxed text-ink-muted">
                  {tp("educationDescription")}
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
