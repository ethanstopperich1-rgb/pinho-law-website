import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { EntityChoiceCalculator } from "@/components/tools/EntityChoiceCalculator";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import type { Locale } from "@/i18n/routing";

type L = "pt" | "en" | "es";

const TITLES = {
  pt: "LLC vs Corp — Qual Estrutura Escolher? | Pinho Law",
  en: "LLC vs Corp — Which Structure to Choose? | Pinho Law",
  es: "LLC vs Corp — ¿Qué Estructura Elegir? | Pinho Law",
} as const;

const DESCRIPTIONS = {
  pt: "Compare LLC, S-Corp, C-Corp e Benefit Corp para seu negócio nos EUA. Ferramenta para brasileiros, com regras migratórias, tributárias e de capital. Gratuita.",
  en: "Compare LLC, S-Corp, C-Corp, and Benefit Corp for your US business. Tool for Brazilians with immigration, tax, and capital rules. Free.",
  es: "Compara LLC, S-Corp, C-Corp y Benefit Corp. Herramienta para brasileños con reglas migratorias y tributarias.",
} as const;

const HEADINGS = {
  pt: {
    eyebrow: "Ferramenta gratuita",
    heading: "LLC vs S-Corp vs C-Corp vs B-Corp",
    sub: "Ranqueamos as 4 estruturas com base no seu contexto migratório, capital, receita, e plano de crescimento. Autoridade em Benefit Corps: Dra. Izi (citada por Harvard).",
  },
  en: {
    eyebrow: "Free tool",
    heading: "LLC vs S-Corp vs C-Corp vs B-Corp",
    sub: "We rank the 4 structures by your immigration status, capital plan, revenue, and growth trajectory. Benefit Corp authority: Dra. Izi (Harvard-cited).",
  },
  es: {
    eyebrow: "Herramienta gratuita",
    heading: "LLC vs S-Corp vs C-Corp vs B-Corp",
    sub: "Ranqueamos las 4 estructuras según tu contexto migratorio, capital e ingresos.",
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
    path: "/tools/llc-vs-corp",
    locale: locale as Locale,
  });
}

export default async function LlcVsCorpPage({
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
      <EntityChoiceCalculator locale={key} />
    </>
  );
}
