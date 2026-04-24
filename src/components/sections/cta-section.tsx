import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/ui/border-beam";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
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
          <div className="relative mx-auto max-w-2xl overflow-hidden rounded-[var(--radius-lg)] border border-cream/10 bg-navy-light/30 px-6 py-12 text-center backdrop-blur-sm md:px-12 md:py-16">
            {/* 21st.dev BorderBeam — traces the CTA frame on every page */}
            <BorderBeam size={220} duration={14} colorFrom="#C9A961" colorTo="#F5F1E8" />
            <BorderBeam
              size={180}
              duration={14}
              delay={7}
              colorFrom="#F5F1E8"
              colorTo="#C9A961"
            />

            <span className="gold-rule mx-auto" />
            <h2 className="mt-6 font-heading text-3xl font-semibold text-cream md:text-4xl lg:text-5xl">
              {t("headline")}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-cream/60 md:text-lg">
              {t("description")}
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <MagneticButton distance={0.35}>
                <Link href="/consultation" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto">
                    {t("cta")}
                  </Button>
                </Link>
              </MagneticButton>
              <WhatsAppButton size="lg" className="w-full sm:w-auto">
                {t("ctaWhatsApp")}
              </WhatsAppButton>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
