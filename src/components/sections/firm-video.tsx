"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { FIRM } from "@/lib/constants";

export function FirmVideo() {
  const t = useTranslations("firmVideo");

  return (
    <section className="bg-cream py-24 md:py-32">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-xl text-center">
            <span className="gold-rule mx-auto" />
            <h2 className="mt-6 font-heading text-3xl font-semibold text-ink md:text-4xl lg:text-5xl">
              {t("headline")}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              {t("description")}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mx-auto mt-12 max-w-4xl">
            <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-border shadow-xl">
              {/* Gold accent bar at top */}
              <div className="absolute top-0 left-0 right-0 z-10 h-1 bg-gradient-to-r from-gold/60 via-gold to-gold/60" />
              <div className="relative aspect-video bg-navy">
                <iframe
                  src={`https://www.youtube.com/embed/${FIRM.youtubeVideoId}?rel=0&modestbranding=1`}
                  title={t("videoTitle")}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
