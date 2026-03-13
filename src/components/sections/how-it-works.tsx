import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

export function HowItWorks() {
  const t = useTranslations("howItWorks");

  const steps = [0, 1, 2].map((i) => ({
    number: t(`steps.${i}.number`),
    title: t(`steps.${i}.title`),
    description: t(`steps.${i}.description`),
  }));

  return (
    <section className="py-24 md:py-32">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-xl text-center">
            <span className="gold-rule mx-auto" />
            <h2 className="mt-6 font-heading text-3xl font-semibold text-ink md:text-4xl lg:text-5xl">
              {t("headline")}
            </h2>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {steps.map((step, i) => (
            <FadeIn key={i} delay={0.15 * (i + 1)}>
              <div className="relative text-center md:text-left">
                <span className="font-heading text-6xl font-semibold text-gold/15 lg:text-7xl">
                  {step.number}
                </span>
                <h3 className="-mt-4 font-heading text-xl font-semibold text-ink lg:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
