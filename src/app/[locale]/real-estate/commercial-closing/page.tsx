import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import {
  ServicePageTemplate,
  type ServicePageContent,
  type L,
} from "@/components/service/ServicePageTemplate";
import type { Locale } from "@/i18n/routing";

const SLUG = "real-estate/commercial-closing";

const DATA: Record<L, ServicePageContent> = {
  pt: {
    locale: "pt",
    slug: SLUG,
    immigrationBreadcrumb: "Imobiliário",
    breadcrumbLabel: "Fechamento Comercial",
    eyebrow: "Direito Imobiliário",
    h1: "Fechamento Comercial e Imóveis para Investimento",
    lede:
      "Transações comerciais têm complexidade jurídica significativamente maior que residenciais: zoning, environmental assessments, due diligence de locatários, revisão de contratos de locação existentes, CAP rate analysis e estruturação de entidade compradora.",
    stats: [
      { value: "2+", label: "Multifamily" },
      { value: "NNN", label: "Commercial lease" },
      { value: "1031", label: "Exchange diferimento" },
      { value: "LLC/asset", label: "Estrutura recomendada" },
    ],
    meta: {
      title: "Fechamento Comercial e Investimento Imobiliário — Brasileiros | Pinho Law",
      description:
        "Transações comerciais na Flórida: multifamily, offices, STR portfolios, terreno e desenvolvimento. LLC holding + subsidiárias por imóvel + 1031 exchange.",
    },
    sections: [
      {
        kind: "list",
        value: {
          heading: "Tipos de transações comerciais que atendemos",
          style: "check",
          items: [
            "Multifamily (2–50 unidades): revisão de rent rolls, contratos de locação existentes, estoppel certificates",
            "Escritórios e espaços comerciais: NNN lease review, direito de preferência, cláusulas de renovação",
            "Terrenos e desenvolvimento: zoning verification, land use, viabilidade de construção",
            "Short-term rental portfolios: estruturação via LLC holding + subsidiárias por propriedade",
            "Imóveis mistos (residencial + comercial): análise combinada de title e zoning",
          ],
        },
      },
      {
        kind: "prose",
        heading: "Estruturação para investidores brasileiros",
        body:
          "Investidores com múltiplos imóveis nos EUA devem estruturar LLC holding + LLC subsidiária por imóvel. Estrutura típica: LLC Holding (Florida) — propriedade do investidor brasileiro; → LLC Subsidiária 1 — imóvel A (Orlando); → LLC Subsidiária 2 — imóvel B (Miami); → LLC Subsidiária 3 — imóvel C (Tampa). Esta estrutura: isola riscos (processo em um imóvel não alcança os demais); facilita venda de imóvel individual (cede LLC, não transfere escritura); simplifica tributação e distribuição de renda por propriedade; compatível com 1031 exchange (diferimento de ganho de capital).",
      },
    ],
    faqTitle: "Perguntas frequentes",
    faq: [
      { q: "O que é NNN lease?", a: "Triple-Net lease: locatário paga base rent + (1) impostos, (2) seguros, (3) manutenção. Padrão para investimentos comerciais. Atenção a cláusulas de cap em CAM charges." },
      { q: "O que é 1031 exchange?", a: "Section 1031 do IRC permite diferir imposto sobre ganho de capital ao trocar imóvel por outro de tipo similar, seguindo regras rigorosas de timing (45 dias para identificar / 180 para fechar) e intermediário qualificado." },
      { q: "Preciso de EIN para LLC holding?", a: "Sim. Cada LLC precisa de EIN separado, ainda que única dona seja a LLC holding." },
      { q: "Posso morar em imóvel comprado via LLC comercial?", a: "Tecnicamente sim, mas quebra a estrutura de proteção (piercing the corporate veil). Para residência, use LLC separada ou Revocable Living Trust." },
      { q: "Quanto custa fechamento comercial?", a: "Depende do valor e complexidade. Honorários Pinho Law típicos: 0,4–0,8% do preço de compra para transações acima de US$ 1M." },
    ],
    relatedTitle: "Relacionado",
    related: [
      { label: "Estruturação de investimento imobiliário", href: "/real-estate/investment-structuring" },
      { label: "Comprador estrangeiro (FIRPTA)", href: "/real-estate/foreign-buyer-firpta" },
      { label: "Abrir LLC na Flórida", href: "/business/llc-formation" },
    ],
  },
  en: {
    locale: "en",
    slug: SLUG,
    immigrationBreadcrumb: "Real Estate",
    breadcrumbLabel: "Commercial Closing",
    eyebrow: "Real Estate Law",
    h1: "Commercial Closings + Investment Real Estate",
    lede:
      "Commercial transactions are significantly more complex than residential: zoning, environmental assessments, tenant due diligence, existing-lease review, CAP rate analysis, and buyer-entity structuring.",
    stats: [
      { value: "2+", label: "Multifamily" },
      { value: "NNN", label: "Commercial lease" },
      { value: "1031", label: "Exchange deferral" },
      { value: "LLC/asset", label: "Recommended structure" },
    ],
    meta: {
      title: "Commercial Closing + Investment Real Estate for Brazilians | Pinho Law",
      description:
        "Florida commercial transactions: multifamily, offices, STR portfolios, land and development. LLC holding + property subsidiaries + 1031 exchange.",
    },
    sections: [
      {
        kind: "list",
        value: {
          heading: "Commercial transaction types we handle",
          style: "check",
          items: [
            "Multifamily (2–50 units): rent-roll review, existing-lease audit, estoppel certificates",
            "Offices and commercial spaces: NNN lease review, ROFR, renewal clauses",
            "Land and development: zoning verification, land use, build-out feasibility",
            "Short-term rental portfolios: structuring via LLC holding + property-level subsidiaries",
            "Mixed-use (residential + commercial): combined title and zoning analysis",
          ],
        },
      },
      {
        kind: "prose",
        heading: "Structuring for Brazilian investors",
        body:
          "Investors with multiple US properties should structure LLC holding + subsidiary LLC per property. Typical structure: LLC Holding (Florida) — owned by the Brazilian investor; → Subsidiary LLC 1 — property A (Orlando); → Subsidiary LLC 2 — property B (Miami); → Subsidiary LLC 3 — property C (Tampa). This structure: isolates risk (lawsuit on one property doesn't reach others); enables sale of individual property (transfer LLC, not deed); simplifies taxation and income distribution per property; compatible with 1031 exchange (capital-gain deferral).",
      },
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      { q: "What is an NNN lease?", a: "Triple-Net lease: tenant pays base rent + (1) taxes, (2) insurance, (3) maintenance. Standard for commercial investments. Watch for CAM-charge cap clauses." },
      { q: "What is a 1031 exchange?", a: "IRC Section 1031 allows deferring capital-gains tax when exchanging like-kind property, following strict timing rules (45 days to identify / 180 to close) and a qualified intermediary." },
      { q: "Does each LLC holding need its own EIN?", a: "Yes. Each LLC needs a separate EIN, even if the sole owner is the LLC holding." },
      { q: "Can I live in a property bought via commercial LLC?", a: "Technically yes, but it breaks the protection structure (piercing the corporate veil). For residence, use separate LLC or Revocable Living Trust." },
      { q: "How much does a commercial closing cost?", a: "Depends on value and complexity. Typical Pinho Law fees: 0.4–0.8% of purchase price for transactions above $1M." },
    ],
    relatedTitle: "Related",
    related: [
      { label: "Investment real-estate structuring", href: "/real-estate/investment-structuring" },
      { label: "Foreign buyer (FIRPTA)", href: "/real-estate/foreign-buyer-firpta" },
      { label: "Florida LLC formation", href: "/business/llc-formation" },
    ],
  },
  es: {
    locale: "es",
    slug: SLUG,
    immigrationBreadcrumb: "Inmobiliario",
    breadcrumbLabel: "Cierre Comercial",
    eyebrow: "Derecho Inmobiliario",
    h1: "Cierre Comercial y Inmuebles de Inversión",
    lede:
      "Transacciones comerciales son significativamente más complejas: zoning, due diligence de inquilinos, revisión de contratos de arrendamiento existentes.",
    stats: [
      { value: "2+", label: "Multifamily" },
      { value: "NNN", label: "Arrendamiento comercial" },
      { value: "1031", label: "Exchange diferimiento" },
      { value: "LLC/activo", label: "Estructura recomendada" },
    ],
    meta: {
      title: "Cierre Comercial e Inmueble de Inversión para Brasileños | Pinho Law",
      description: "Transacciones comerciales en Florida: multifamily, oficinas, STR, terreno y desarrollo.",
    },
    sections: [
      {
        kind: "list",
        value: {
          heading: "Tipos de transacciones comerciales",
          style: "check",
          items: [
            "Multifamily (2–50 unidades)",
            "Oficinas y espacios comerciales (NNN lease review)",
            "Terrenos y desarrollo (zoning verification)",
            "STR portfolios",
            "Mixto (residencial + comercial)",
          ],
        },
      },
      {
        kind: "prose",
        heading: "Estructuración para inversores",
        body: "LLC Holding (Florida) + subsidiarias por propiedad = aísla riesgo + facilita venta + compatible con 1031 exchange.",
      },
    ],
    faqTitle: "Preguntas frecuentes",
    faq: [
      { q: "¿Qué es NNN lease?", a: "Triple-Net: inquilino paga base rent + impuestos + seguros + mantenimiento." },
      { q: "¿Qué es 1031 exchange?", a: "Section 1031 permite diferir impuesto sobre ganancia de capital al intercambiar like-kind property." },
      { q: "¿Cuánto cuesta un cierre comercial?", a: "Honorarios típicos: 0,4–0,8% del precio de compra." },
    ],
    relatedTitle: "Relacionado",
    related: [
      { label: "Estructuración de inversión", href: "/real-estate/investment-structuring" },
      { label: "FIRPTA comprador extranjero", href: "/real-estate/foreign-buyer-firpta" },
    ],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = DATA[locale as L];
  return createPageMetadata({ title: c.meta.title, description: c.meta.description, path: `/${SLUG}`, locale: locale as Locale });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ServicePageTemplate content={DATA[locale as L]} />;
}
