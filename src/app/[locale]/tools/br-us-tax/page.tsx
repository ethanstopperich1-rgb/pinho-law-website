import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { BrUsTaxCalculator } from "@/components/tools/BrUsTaxCalculator";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import type { Locale } from "@/i18n/routing";

type L = "pt" | "en" | "es";

const TITLES = {
  pt: "Calculadora Tratado Brasil–EUA 2026 — A Verdade Sobre Dupla Tributação | Pinho Law",
  en: "Brazil–US Tax Treaty Calculator 2026 — The Truth About Double Tax | Pinho Law",
  es: "Calculadora Tratado Brasil–EE.UU. 2026 | Pinho Law",
} as const;

const DESCRIPTIONS = {
  pt: "O tratado Brasil–EUA nunca foi ratificado. Calcule sua dupla tributação real por tipo de rendimento: dividendos, salário, aluguel, ganho de capital. Gratuita.",
  en: "The Brazil–US tax treaty was never ratified. Calculate your real double-tax exposure by income type: dividends, wages, rent, capital gains. Free.",
  es: "El tratado Brasil–EE.UU. nunca fue ratificado. Calcula tu exposición real por tipo de ingreso.",
} as const;

const HEADINGS = {
  pt: {
    eyebrow: "Ferramenta gratuita",
    heading: "Calculadora Tratado Brasil–EUA",
    sub: "Calcule sua exposição real à dupla tributação — Brasil e EUA NÃO têm tratado ratificado. Veja por tipo de rendimento quanto de imposto realmente fica na mesa.",
  },
  en: {
    eyebrow: "Free tool",
    heading: "Brazil–US Tax Treaty Calculator",
    sub: "Calculate your real double-tax exposure — Brazil and the US have NO ratified tax treaty. See by income type how much tax actually leaks.",
  },
  es: {
    eyebrow: "Herramienta gratuita",
    heading: "Calculadora Tratado Brasil–EE.UU.",
    sub: "Calcula tu exposición real a doble tributación — NO hay tratado ratificado.",
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
    path: "/tools/br-us-tax",
    locale: locale as Locale,
  });
}

export default async function BrUsTaxPage({
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
      <BrUsTaxCalculator locale={key} />
    </>
  );
}
