import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

export function WhyPinho() {
  const t = useTranslations("whyPinho");

  const items = [0, 1, 2, 3].map((i) => ({
    title: t(`items.${i}.title`),
    description: t(`items.${i}.description`),
  }));

  return (
    <section className="bg-cream py-24 md:py-32">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-xl text-center">
            <span className="gold-rule mx-auto" />
            <h2 className="mt-6 font-heading text-3xl font-semibold text-ink md:text-4xl lg:text-5xl">
              {t("headline")}
            </h2>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {items.map((item, i) => (
            <FadeIn key={i} delay={0.1 * (i + 1)}>
              <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-gold/30">
                <h3 className="font-heading text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
