import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { GreenCardTimelineCalculator } from "@/components/tools/GreenCardTimelineCalculator";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import type { Locale } from "@/i18n/routing";

type L = "pt" | "en" | "es";

const TITLES = {
  pt: "Simulador de Tempo para Green Card 2026 | Pinho Law",
  en: "Green Card Timeline Estimator 2026 | Pinho Law",
  es: "Simulador de Tiempo para Green Card 2026 | Pinho Law",
} as const;

const DESCRIPTIONS = {
  pt: "Calcule o tempo end-to-end do seu green card: EB-1A, EB-2 NIW, EB-5, casamento USC/LPR. Etapas USCIS + Visa Bulletin abril/2026. Gratuita.",
  en: "Estimate your full green card timeline: EB-1A, EB-2 NIW, EB-5, marriage USC/LPR. USCIS steps + April 2026 Visa Bulletin. Free.",
  es: "Calcula el tiempo completo de tu green card: EB-1A, EB-2 NIW, EB-5, matrimonio.",
} as const;

const HEADINGS = {
  pt: {
    eyebrow: "Ferramenta gratuita",
    heading: "Simulador de Tempo para Green Card",
    sub: "Veja etapa por etapa quanto tempo seu caminho deve levar — combinando tempos médios USCIS 2026 com a fila atual do Visa Bulletin.",
  },
  en: {
    eyebrow: "Free tool",
    heading: "Green Card Timeline Estimator",
    sub: "Step-by-step estimate for your pathway — combining 2026 USCIS processing averages with current Visa Bulletin backlog.",
  },
  es: {
    eyebrow: "Herramienta gratuita",
    heading: "Simulador de Tiempo para Green Card",
    sub: "Estimación paso a paso de tu ruta — tiempos USCIS 2026 + Visa Bulletin.",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const key = locale as L;
  return createPageMetadata({
    title: TITLES[key],
    description: DESCRIPTIONS[key],
    path: "/tools/green-card-timeline",
    locale: locale as Locale,
  });
}

export default async function GreenCardTimelinePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const key = locale as L;
  const h = HEADINGS[key];
  return (
    <>
      <section className="bg-cream pt-20 pb-10 md:pt-28 md:pb-12">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <span className="gold-rule mx-auto" />
            <p className="mt-6 text-xs font-medium uppercase tracking-wider text-gold">
              {h.eyebrow}
            </p>
            <h1 className="mt-3 font-heading text-3xl font-semibold text-ink md:text-5xl">
              {h.heading}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-muted md:text-base">
              {h.sub}
            </p>
          </FadeIn>
        </Container>
      </section>
      <GreenCardTimelineCalculator locale={key} />
    </>
  );
}
