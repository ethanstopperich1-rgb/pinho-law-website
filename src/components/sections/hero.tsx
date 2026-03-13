import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FIRM } from "@/lib/constants";
import { FadeIn } from "@/components/ui/fade-in";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden bg-navy py-24 md:py-32 lg:py-40">
      {/* Layered gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light/40 to-navy" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(196,162,101,0.08)_0%,_transparent_60%)]" />

      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <div className="max-w-xl space-y-8">
            <FadeIn>
              <span className="gold-rule" />
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="font-heading text-5xl font-semibold leading-[1.1] text-cream md:text-6xl lg:text-7xl">
                {t("headline")}
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg leading-relaxed text-cream/60 md:text-xl">
                {t("subheadline")}
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Link href="/consultation">
                  <Button size="lg">{t("cta")}</Button>
                </Link>
                <a
                  href={`https://wa.me/${FIRM.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="secondary"
                    size="lg"
                    className="border-cream/20 text-cream hover:bg-cream hover:text-navy"
                  >
                    {t("ctaSecondary", { phone: FIRM.phone })}
                  </Button>
                </a>
              </div>
            </FadeIn>

            {/* Trust Bar */}
            <FadeIn delay={0.4}>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 text-sm text-cream/40">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  Florida Bar Member
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  5-Star Reviews
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  3 Languages
                </span>
              </div>
            </FadeIn>
          </div>

          {/* Attorney Photo */}
          <FadeIn delay={0.2} className="hidden lg:block">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/izi-pinho.jpg"
                alt="Izi Pinho, Esq. — Founder of Pinho Law"
                fill
                className="rounded-[var(--radius-lg)] object-cover object-top"
                sizes="(min-width: 1024px) 50vw, 0vw"
                priority
              />
              <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-[var(--radius-lg)] border border-gold/20" />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
