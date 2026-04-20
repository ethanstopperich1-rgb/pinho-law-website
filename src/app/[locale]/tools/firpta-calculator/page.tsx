import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { FirptaCalculator } from "@/components/tools/FirptaCalculator";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import type { Locale } from "@/i18n/routing";

const TITLES = {
  pt: "Calculadora FIRPTA 2026 — Retenção na Venda de Imóvel por Estrangeiro | Pinho Law",
  en: "FIRPTA Withholding Calculator 2026 — Foreign Seller Tax | Pinho Law",
  es: "Calculadora FIRPTA 2026 — Retención en Venta por Extranjero | Pinho Law",
} as const;

const DESCRIPTIONS = {
  pt: "Calcule a retenção FIRPTA sobre a venda de imóvel nos EUA por estrangeiro. Gratuito, em português, com tabela 2026 completa. Dra. Izi Pinho.",
  en: "Calculate FIRPTA withholding on US real estate sold by foreign sellers. Free, with full 2026 rate table. By Dra. Izi Pinho, Pinho Law Orlando.",
  es: "Calcula la retención FIRPTA en la venta de inmueble en EE.UU. por extranjero. Gratis, con tabla 2026 completa. Dra. Izi Pinho.",
} as const;

const HEADINGS = {
  pt: {
    eyebrow: "Ferramenta gratuita",
    heading: "Calculadora FIRPTA 2026",
    sub: "Quanto o comprador retém na venda do seu imóvel? Calcule em segundos — com base na tabela oficial FIRPTA 2026 (individuais e pessoas jurídicas estrangeiras).",
  },
  en: {
    eyebrow: "Free tool",
    heading: "FIRPTA Withholding Calculator 2026",
    sub: "How much will the buyer withhold when selling your US property? Calculate instantly — based on the official 2026 FIRPTA table (individuals and foreign corporations).",
  },
  es: {
    eyebrow: "Herramienta gratuita",
    heading: "Calculadora FIRPTA 2026",
    sub: "¿Cuánto retendrá el comprador al vender tu inmueble en EE.UU.? Calcula al instante — basado en la tabla oficial FIRPTA 2026.",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const key = locale as keyof typeof TITLES;
  return createPageMetadata({
    title: TITLES[key],
    description: DESCRIPTIONS[key],
    path: "/tools/firpta-calculator",
    locale: locale as Locale,
  });
}

export default async function FirptaCalculatorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const key = locale as keyof typeof HEADINGS;
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

      <FirptaCalculator locale={key} />
    </>
  );
}
