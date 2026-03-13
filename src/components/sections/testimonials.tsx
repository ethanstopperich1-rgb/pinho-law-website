import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { Star } from "lucide-react";

export function Testimonials() {
  const t = useTranslations("testimonials");

  const items = [0, 1, 2].map((i) => ({
    quote: t(`items.${i}.quote`),
    author: t(`items.${i}.author`),
    service: t(`items.${i}.service`),
    rating: 5,
  }));

  return (
    <section className="relative bg-navy py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(196,162,101,0.06)_0%,_transparent_60%)]" />

      <Container className="relative z-10">
        <FadeIn>
          <div className="mx-auto max-w-xl text-center">
            <span className="gold-rule mx-auto" />
            <h2 className="mt-6 font-heading text-3xl font-semibold text-cream md:text-4xl lg:text-5xl">
              {t("headline")}
            </h2>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
          {items.map((item, i) => (
            <FadeIn key={i} delay={0.1 * (i + 1)}>
              <article className="rounded-[var(--radius-lg)] border border-cream/8 bg-cream/5 p-8 backdrop-blur-sm">
                {/* Stars */}
                <div className="mb-6 flex gap-1">
                  {Array.from({ length: item.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-gold text-gold"
                    />
                  ))}
                </div>

                <blockquote className="font-heading text-lg font-normal italic leading-relaxed text-cream/80">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>

                <div className="mt-8 border-t border-cream/10 pt-4">
                  <p className="text-sm font-medium text-cream">
                    {item.author}
                  </p>
                  <p className="text-xs text-cream/40">{item.service}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-12 text-center">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-gold-light"
            >
              {t("cta")} <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
