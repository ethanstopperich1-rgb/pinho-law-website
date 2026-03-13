import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { ArrowRight } from "lucide-react";

export function AttorneySpotlight() {
  const t = useTranslations("attorney");

  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Attorney Photo */}
          <FadeIn>
            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[var(--radius-lg)] lg:aspect-[4/5]">
                <Image
                  src="/images/izi-pinho.jpg"
                  alt="Izi Pinho, Esq."
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 -z-10 aspect-[3/4] w-full rounded-[var(--radius-lg)] border border-gold/20 lg:aspect-[4/5]" />
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn delay={0.2}>
            <div className="space-y-6">
              <span className="gold-rule" />
              <h2 className="font-heading text-3xl font-semibold text-ink md:text-4xl lg:text-5xl">
                {t("headline")}
              </h2>
              <p className="font-heading text-xl font-medium text-gold">
                {t("name")}
              </p>
              <p className="text-sm font-medium uppercase tracking-widest text-ink-muted">
                {t("title")}
              </p>
              <p className="leading-relaxed text-ink-muted">{t("bio")}</p>
              <Link
                href="/about/attorney"
                className="inline-flex items-center gap-2 text-sm font-medium text-gold transition-all duration-300 hover:gap-3 hover:text-gold-dark"
              >
                {t("cta")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
