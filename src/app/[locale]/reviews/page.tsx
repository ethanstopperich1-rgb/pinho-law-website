import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { Star } from "lucide-react";
import { CtaSection } from "@/components/sections/cta-section";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "reviewsPage" });

  return createPageMetadata({
    title: t("headline"),
    description: t("description"),
    path: "/reviews",
    locale: locale as Locale,
  });
}

export default async function ReviewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "reviewsPage" });
  const tt = await getTranslations({ locale, namespace: "testimonials" });

  const items = [0, 1, 2].map((i) => ({
    quote: tt(`items.${i}.quote`),
    author: tt(`items.${i}.author`),
    service: tt(`items.${i}.service`),
  }));

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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <article className="h-full rounded-[var(--radius-lg)] border border-border bg-white p-6 md:p-8">
                  <div className="mb-4 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        className="h-4 w-4 fill-gold text-gold"
                      />
                    ))}
                  </div>
                  <blockquote className="text-sm leading-relaxed text-ink-muted">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <div className="mt-6 border-t border-border pt-4">
                    <p className="font-heading text-sm font-semibold text-ink">
                      {item.author}
                    </p>
                    <p className="text-xs text-ink-muted">{item.service}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
