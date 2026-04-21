import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { VisaCostCalculator } from "@/components/tools/VisaCostCalculator";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import type { Locale } from "@/i18n/routing";

type L = "pt" | "en" | "es";

const TITLES = {
  pt: "Calculadora de Custo de Visto 2026 — Taxas USCIS + Advogado | Pinho Law",
  en: "Visa Cost Estimator 2026 — USCIS + Attorney Fees | Pinho Law",
  es: "Calculadora de Costo de Visa 2026 — Tarifas USCIS + Abogado | Pinho Law",
} as const;

const DESCRIPTIONS = {
  pt: "Calcule o custo total do seu visto: EB-1, EB-2 NIW, EB-5, L-1, O-1, H-1B, casamento. Taxas USCIS 2024 + Premium + honorários. Gratuita.",
  en: "Estimate the full cost of your visa: EB-1, EB-2 NIW, EB-5, L-1, O-1, H-1B, marriage. 2024 USCIS fees + Premium + attorney. Free.",
  es: "Calcula el costo total de tu visa: EB-1, EB-2 NIW, EB-5, L-1, O-1, H-1B, matrimonio. Tarifas USCIS 2024 + Premium + honorarios.",
} as const;

const HEADINGS = {
  pt: {
    eyebrow: "Ferramenta gratuita",
    heading: "Calculadora de Custo de Visto — 2026",
    sub: "Veja taxas USCIS/DOS, Premium Processing e honorários típicos em Orlando para sua categoria. Valores refletem a regra de 1 de abril de 2024.",
  },
  en: {
    eyebrow: "Free tool",
    heading: "Visa Cost Estimator — 2026",
    sub: "See USCIS/DOS fees, Premium Processing, and typical Orlando attorney fees for your category. Figures reflect the April 1, 2024 fee rule.",
  },
  es: {
    eyebrow: "Herramienta gratuita",
    heading: "Calculadora de Costo de Visa — 2026",
    sub: "Tarifas USCIS/DOS, Premium Processing y honorarios típicos Orlando. Cifras de la regla del 1 de abril de 2024.",
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
    path: "/tools/visa-cost-estimator",
    locale: locale as Locale,
  });
}

export default async function VisaCostEstimatorPage({
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
      <VisaCostCalculator locale={key} />
    </>
  );
}
