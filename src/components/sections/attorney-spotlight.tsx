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
          {/* Attorney Photo — navy gradient frame + radial vignette
              so the studio white in the source photo blends into the
              page instead of sitting as a hard edge. */}
          <FadeIn>
            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[var(--radius-lg)] bg-gradient-to-br from-navy via-navy-light to-navy shadow-2xl lg:aspect-[4/5]">
                <Image
                  src="/images/izi-pinho.jpg"
                  alt="Izi Pinho, Esq."
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                {/* Edge-only vignette — keeps the subject in full color;
                    only the outer ring of studio-white fades to navy. */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_75%_at_50%_45%,_transparent_0%,_transparent_55%,_rgba(14,27,46,0.85)_100%)]" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,169,97,0.12)_0%,_transparent_60%)] mix-blend-screen" />
              </div>
              <div className="absolute -bottom-4 -right-4 -z-10 aspect-[3/4] w-full rounded-[var(--radius-lg)] border border-gold/30 lg:aspect-[4/5]" />
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
