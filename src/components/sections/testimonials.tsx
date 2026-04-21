import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SpinningLogos } from "@/components/ui/spinning-logos";

// Homepage social-proof section. 21st.dev SpinningLogos adapted to
// orbit real client initials around a live Google rating badge.
// The full written-testimonial deep-dive lives at /reviews.

export function Testimonials() {
  const t = useTranslations("testimonials");

  return (
    <section className="relative overflow-hidden bg-navy py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(196,162,101,0.08)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(196,162,101,0.05)_0%,_transparent_55%)]" />

      <Container className="relative z-10">
        <FadeIn>
          <div className="mx-auto max-w-xl text-center">
            <span className="gold-rule mx-auto" />
            <h2 className="mt-6 font-heading text-3xl font-semibold text-cream md:text-4xl lg:text-5xl">
              {t("headline")}
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-16 flex justify-center md:mt-20">
            {/* Responsive: smaller orbit on mobile to avoid overflow */}
            <div className="hidden md:block">
              <SpinningLogos radius={180} iconSize={56} />
            </div>
            <div className="block md:hidden">
              <SpinningLogos radius={120} iconSize={44} ringPadding={28} count={7} />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-12 text-center md:mt-16">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-gold-light md:text-base"
            >
              {t("cta")} <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
