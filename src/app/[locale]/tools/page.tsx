import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { GoldGradientCard } from "@/components/ui/gold-gradient-card";
import {
  Calculator,
  ClipboardCheck,
  Clock,
  Coins,
  DollarSign,
  Globe,
  Scale,
} from "lucide-react";
import type { Locale } from "@/i18n/routing";

type L = "pt" | "en" | "es";

const TITLES = {
  pt: "Ferramentas gratuitas — Calculadoras de imigração, imóvel e negócio | Pinho Law",
  en: "Free tools — Immigration, Real Estate, and Business Calculators | Pinho Law",
  es: "Herramientas gratuitas — Calculadoras | Pinho Law",
} as const;

const DESCRIPTIONS = {
  pt: "8 ferramentas gratuitas para brasileiros: FIRPTA, EB-5, Priority Date, Timeline de green card, custo de visto, LLC vs Corp, Tratado Brasil-EUA. Em português.",
  en: "7 free calculators for Brazilians: FIRPTA, EB-5, Priority Date, Green Card Timeline, Visa Cost, LLC vs Corp, Brazil-US Tax. By Pinho Law.",
  es: "8 ferramentas gratuitas: FIRPTA, EB-5, Priority Date, Green Card Timeline, Costo de Visa, LLC vs Corp, Tratado Brasil-EE.UU.",
} as const;

const HEADINGS = {
  pt: {
    eyebrow: "Ferramentas Pinho Law",
    heading: "8 ferramentas para decisões honestas",
    sub: "Ferramentas construídas com as regras USCIS, IRS e Visa Bulletin de 2026. Cada uma responde a uma pergunta que brasileiros fazem toda semana no nosso escritório.",
  },
  en: {
    eyebrow: "Pinho Law Tools",
    heading: "8 tools for honest decisions",
    sub: "Tools built on 2026 USCIS, IRS, and Visa Bulletin rules. Each answers a question Brazilians ask us every week.",
  },
  es: {
    eyebrow: "Herramientas Pinho Law",
    heading: "8 ferramentas para decisiones honestas",
    sub: "Basadas en reglas USCIS, IRS y Visa Bulletin 2026.",
  },
} as const;

const TOOLS = [
  {
    slug: "visa-decision-engine",
    icon: Scale,
    category: { pt: "Imigração", en: "Immigration", es: "Inmigración" },
    title: {
      pt: "Visa Decision Engine",
      en: "Visa Decision Engine",
      es: "Visa Decision Engine",
    },
    body: {
      pt: "Responda 6 perguntas e veja quais vistos se encaixam no seu perfil — EB-1A, EB-2 NIW, EB-5, L-1, O-1, H-1B e mais.",
      en: "Answer 6 questions and see which visas fit your profile — EB-1A, EB-2 NIW, EB-5, L-1, O-1, H-1B, and more.",
      es: "Responde 6 preguntas y ve qué visas calzan con tu perfil.",
    },
  },
  {
    slug: "priority-date-tracker",
    icon: Clock,
    category: { pt: "Imigração", en: "Immigration", es: "Inmigración" },
    title: {
      pt: "Priority Date Tracker",
      en: "Priority Date Tracker",
      es: "Priority Date Tracker",
    },
    body: {
      pt: "Status da sua fila no Visa Bulletin abril/2026 por categoria e país. Brasil CURRENT em EB-1 e EB-5.",
      en: "Your Visa Bulletin queue status by category + country. Brazil CURRENT in EB-1 and EB-5.",
      es: "Tu estado en el Visa Bulletin por categoría y país.",
    },
  },
  {
    slug: "green-card-timeline",
    icon: ClipboardCheck,
    category: { pt: "Imigração", en: "Immigration", es: "Inmigración" },
    title: {
      pt: "Simulador de tempo para Green Card",
      en: "Green Card Timeline Estimator",
      es: "Simulador de tiempo Green Card",
    },
    body: {
      pt: "Tempo end-to-end por caminho: EB-1A, EB-2 NIW, EB-5, casamento USC/LPR. Combina tempos USCIS + Visa Bulletin.",
      en: "End-to-end time per pathway: EB-1A, EB-2 NIW, EB-5, marriage USC/LPR. Combines USCIS + Visa Bulletin.",
      es: "Tiempo end-to-end por ruta.",
    },
  },
  {
    slug: "visa-cost-estimator",
    icon: DollarSign,
    category: { pt: "Imigração", en: "Immigration", es: "Inmigración" },
    title: {
      pt: "Calculadora de custo de visto",
      en: "Visa Cost Estimator",
      es: "Calculadora de costo de visa",
    },
    body: {
      pt: "Taxas USCIS + Premium Processing + honorários típicos Orlando para 16 categorias de visto.",
      en: "USCIS fees + Premium Processing + typical Orlando attorney fees for 16 visa categories.",
      es: "Tarifas USCIS + Premium + honorarios típicos.",
    },
  },
  {
    slug: "eb5-calculator",
    icon: Coins,
    category: { pt: "Imigração", en: "Immigration", es: "Inmigración" },
    title: {
      pt: "Calculadora EB-5",
      en: "EB-5 Investment Calculator",
      es: "Calculadora EB-5",
    },
    body: {
      pt: "Rural TEA, Urban TEA, Infraestrutura, Padrão. Investimento, prazos I-526E e aprovação por tier.",
      en: "Rural TEA, Urban TEA, Infrastructure, Standard. Investment, I-526E timelines, approval signals by tier.",
      es: "Rural TEA, Urban TEA, Infraestructura, Estándar.",
    },
  },
  {
    slug: "firpta-calculator",
    icon: Calculator,
    category: { pt: "Imobiliário", en: "Real Estate", es: "Inmobiliario" },
    title: {
      pt: "Calculadora FIRPTA",
      en: "FIRPTA Calculator",
      es: "Calculadora FIRPTA",
    },
    body: {
      pt: "Retenção FIRPTA em venda de imóvel por estrangeiro. Incide sobre preço bruto, não sobre lucro.",
      en: "FIRPTA withholding on sale by foreign seller. Applies to gross price, not gain.",
      es: "Retención FIRPTA en venta por extranjero.",
    },
  },
  {
    slug: "llc-vs-corp",
    icon: Scale,
    category: { pt: "Empresarial", en: "Business", es: "Empresarial" },
    title: {
      pt: "LLC vs Corp — Decisão de entidade",
      en: "LLC vs Corp — Entity Decision",
      es: "LLC vs Corp",
    },
    body: {
      pt: "Ranqueamento LLC / S-Corp / C-Corp / B-Corp por status migratório, capital, receita e plano de crescimento.",
      en: "Ranks LLC / S-Corp / C-Corp / B-Corp by immigration status, capital, revenue, and growth plan.",
      es: "Ranquea LLC / S-Corp / C-Corp / B-Corp.",
    },
  },
  {
    slug: "br-us-tax",
    icon: Globe,
    category: { pt: "Tributário", en: "Tax", es: "Tributario" },
    title: {
      pt: "Calculadora Tratado Brasil–EUA",
      en: "Brazil–US Tax Treaty Calculator",
      es: "Calculadora Tratado Brasil–EE.UU.",
    },
    body: {
      pt: "Revela a verdade: o tratado nunca foi ratificado. Calcule sua dupla tributação real por tipo de rendimento.",
      en: "Reveals the truth: the treaty was never ratified. Calculate your real double-tax exposure by income type.",
      es: "Revela la verdad: el tratado nunca fue ratificado.",
    },
  },
] as const;

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
    path: "/tools",
    locale: locale as Locale,
  });
}

export default async function ToolsIndexPage({
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
      <section className="bg-cream pt-20 pb-12 md:pt-28 md:pb-16">
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

      <section className="bg-cream pb-24">
        <Container>
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TOOLS.map((tool) => {
              const Icon = tool.icon;
              return (
                <GoldGradientCard
                  key={tool.slug}
                  href={`/${key}/tools/${tool.slug}`}
                >
                  <div className="flex h-full flex-col">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] border border-gold/30 bg-gold/5 text-gold">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-medium uppercase tracking-wider text-gold">
                        {tool.category[key]}
                      </span>
                    </div>
                    <h2 className="mt-4 font-heading text-xl font-semibold text-ink">
                      {tool.title[key]}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                      {tool.body[key]}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-gold">
                      <span>
                        {key === "pt" ? "Abrir" : key === "es" ? "Abrir" : "Open"}
                      </span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </GoldGradientCard>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
