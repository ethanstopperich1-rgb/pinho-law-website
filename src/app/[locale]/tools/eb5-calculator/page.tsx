import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { Eb5Calculator } from "@/components/tools/Eb5Calculator";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import type { Locale } from "@/i18n/routing";

type L = "pt" | "en" | "es";

const TITLES = {
  pt: "Calculadora EB-5 2026 — Investimento Green Card | Pinho Law",
  en: "EB-5 Investment Calculator 2026 — Green Card Tiers | Pinho Law",
  es: "Calculadora EB-5 2026 — Inversión Green Card | Pinho Law",
} as const;

const DESCRIPTIONS = {
  pt: "Calcule investimento EB-5 2026: Rural TEA (US$ 800K), Urban TEA, Infraestrutura, Padrão (US$ 1,05M). Brasil sem backlog. Gratuita, em português.",
  en: "Calculate EB-5 2026 investment: Rural TEA ($800K), Urban TEA, Infrastructure, Standard ($1.05M). Brazil no backlog. Free, by Pinho Law.",
  es: "Calcula la inversión EB-5 2026: Rural TEA (US$ 800K), Urban TEA, Infraestructura, Estándar (US$ 1,05M).",
} as const;

const HEADINGS = {
  pt: {
    eyebrow: "Ferramenta gratuita",
    heading: "Calculadora EB-5 — Investimento 2026",
    sub: "Veja seu investimento, prazo e aprovação por tier (Rural TEA, Urban TEA, Infraestrutura, Padrão). Baseada no EB-5 Reform and Integrity Act (2022).",
  },
  en: {
    eyebrow: "Free tool",
    heading: "EB-5 Investment Calculator 2026",
    sub: "See your investment, timeline, and approval signal by tier (Rural TEA, Urban TEA, Infrastructure, Standard). Based on the EB-5 Reform and Integrity Act (2022).",
  },
  es: {
    eyebrow: "Herramienta gratuita",
    heading: "Calculadora EB-5 — Inversión 2026",
    sub: "Ve tu inversión, plazo y señal de aprobación por tier (Rural TEA, Urban TEA, Infraestructura, Estándar).",
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
    path: "/tools/eb5-calculator",
    locale: locale as Locale,
  });
}

export default async function Eb5CalculatorPage({
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
      <Eb5Calculator locale={key} />
    </>
  );
}
