import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FIRM } from "@/lib/constants";
import { FadeIn } from "@/components/ui/fade-in";

export function CtaSection() {
  const t = useTranslations("ctaSection");

  return (
    <section className="relative bg-navy py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(196,162,101,0.06)_0%,_transparent_70%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <Container className="relative z-10">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <span className="gold-rule mx-auto" />
            <h2 className="mt-6 font-heading text-3xl font-semibold text-cream md:text-4xl lg:text-5xl">
              {t("headline")}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-cream/60">
              {t("description")}
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
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
                  {t("ctaWhatsApp")}
                </Button>
              </a>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
