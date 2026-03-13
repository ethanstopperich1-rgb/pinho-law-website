import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

export function MultilingualPromise() {
  const t = useTranslations("multilingual");

  return (
    <section className="bg-gold-wash py-24 md:py-32">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <span className="gold-rule mx-auto" />
            <h2 className="mt-6 font-heading text-3xl font-semibold text-ink md:text-4xl lg:text-5xl">
              {t("headline")}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              {t("description")}
            </p>
            <div className="mt-10 flex items-center justify-center gap-8">
              <span className="font-heading text-lg font-medium text-gold">
                English
              </span>
              <span
                className="h-6 w-px bg-gold/30"
                aria-hidden="true"
              />
              <span className="font-heading text-lg font-medium text-gold">
                Português
              </span>
              <span
                className="h-6 w-px bg-gold/30"
                aria-hidden="true"
              />
              <span className="font-heading text-lg font-medium text-gold">
                Español
              </span>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
