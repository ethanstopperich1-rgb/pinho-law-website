import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import {
  ServicePageTemplate,
  type ServicePageContent,
  type L,
} from "@/components/service/ServicePageTemplate";
import type { Locale } from "@/i18n/routing";

const SLUG = "real-estate/investment-structuring";

const DATA: Record<L, ServicePageContent> = {
  pt: {
    locale: "pt",
    slug: SLUG,
    immigrationBreadcrumb: "Imobiliário",
    breadcrumbLabel: "Estruturação de Investimento",
    eyebrow: "Direito Imobiliário",
    h1: "Estruturação de Investimento Imobiliário para Brasileiros",
    lede:
      "LLC holding + LLC subsidiária por imóvel é o padrão para investidores com múltiplas propriedades. Isola riscos, facilita venda individual, simplifica tributação e permite 1031 exchange.",
    stats: [
      { value: "LLC/ativo", label: "Estrutura" },
      { value: "1031", label: "Exchange" },
      { value: "Orlando", label: "STR capital" },
      { value: "FIRPTA", label: "Planejamento" },
    ],
    meta: {
      title: "Estruturação de Investimento Imobiliário nos EUA | Pinho Law",
      description:
        "LLC holding + subsidiárias por imóvel, 1031 exchange, estrutura de STR em Orlando, planejamento FIRPTA para investidores brasileiros.",
    },
    sections: [
      {
        kind: "prose",
        heading: "Arquitetura recomendada",
        body:
          "LLC Holding (Florida) — propriedade do investidor brasileiro; → LLC Subsidiária 1 — Imóvel A; → LLC Subsidiária 2 — Imóvel B; → LLC Subsidiária 3 — Imóvel C. Cada imóvel em sua própria LLC + tudo sob uma holding. Processo em um imóvel não alcança os demais. Venda individual cede cotas da LLC, não transfere escritura. Tributação simplificada: pass-through até o investidor final.",
      },
      {
        kind: "list",
        value: {
          heading: "1031 Exchange — diferimento de ganho de capital",
          intro: "Section 1031 do IRC permite diferir imposto ao trocar imóvel por outro de tipo similar (like-kind). Regras rigorosas:",
          style: "numbered",
          items: [
            "45 dias do fechamento da venda para IDENTIFICAR o imóvel de reposição",
            "180 dias do fechamento da venda para FECHAR o imóvel de reposição",
            "Mesmo tipo de propriedade (comercial ↔ comercial, ou real estate em geral para real estate em geral)",
            "Qualified Intermediary (QI) obrigatório — você nunca pode tocar nos recursos",
            "Valor e dívida do imóvel novo ≥ valor e dívida do imóvel vendido (para diferimento total)",
          ],
        },
      },
      {
        kind: "prose",
        heading: "Short-Term Rental (Airbnb/VRBO) em Orlando",
        body:
          "Orlando é um dos mercados STR mais rentáveis dos EUA. Municipalities como Orlando, Kissimmee e Davenport permitem aluguel de curta temporada. Via LLC, a renda é renda empresarial americana (Schedule C / Form 1065 dependendo). Como estrangeiro, você recebe W-8BEN. Planejamos: zoning/HOA review, licença STR local, gestão remota, LLC de gestão separada da LLC de propriedade, insurance STR-specific.",
      },
    ],
    faqTitle: "Perguntas frequentes",
    faq: [
      { q: "Preciso de uma LLC por imóvel mesmo para casas de US$ 200K?", a: "Para proteção patrimonial, sim. Custo adicional por imóvel: ~US$ 150/ano (Annual Report + Registered Agent). Vale o risco isolado." },
      { q: "1031 exchange funciona entre tipos de imóvel?", a: "Sim, se ambos são 'real property held for productive use in business or investment'. Residencial de aluguel ↔ comercial é permitido; residência primária não qualifica." },
      { q: "LLC holding precisa ser na Flórida?", a: "Não necessariamente. Delaware é comum por lei societária madura. Florida se operação principal é na Flórida (evita double filing)." },
      { q: "Como gerencio STR do Brasil?", a: "Via property manager local (cobra 15–25% da renda) + Airbnb/VRBO platform + systems automáticos (smart locks, etc). A LLC recebe renda; você recebe distribuições." },
      { q: "Seguros recomendados para STR?", a: "STR-specific commercial liability (R$ 1–2M coverage), property insurance, optional umbrella acima. Proprietários sem seguro STR específico ficam expostos." },
    ],
    relatedTitle: "Relacionado",
    related: [
      { label: "Comprador estrangeiro (FIRPTA)", href: "/real-estate/foreign-buyer-firpta" },
      { label: "Fechamento comercial", href: "/real-estate/commercial-closing" },
      { label: "Abrir LLC na Flórida", href: "/business/llc-formation" },
      { label: "Calculadora FIRPTA", href: "/tools/firpta-calculator" },
    ],
  },
  en: {
    locale: "en",
    slug: SLUG,
    immigrationBreadcrumb: "Real Estate",
    breadcrumbLabel: "Investment Structuring",
    eyebrow: "Real Estate Law",
    h1: "Real Estate Investment Structuring for Brazilians",
    lede:
      "LLC holding + per-property subsidiary LLC is standard for investors with multiple properties. Isolates risk, enables individual-property sale, simplifies taxation, and enables 1031 exchange.",
    stats: [
      { value: "LLC/asset", label: "Structure" },
      { value: "1031", label: "Exchange" },
      { value: "Orlando", label: "STR capital" },
      { value: "FIRPTA", label: "Planning" },
    ],
    meta: {
      title: "Real Estate Investment Structuring for Brazilians | Pinho Law",
      description:
        "LLC holding + per-property subsidiaries, 1031 exchange, STR structure in Orlando, FIRPTA planning for Brazilian investors.",
    },
    sections: [
      {
        kind: "prose",
        heading: "Recommended architecture",
        body:
          "LLC Holding (Florida) — owned by Brazilian investor; → Subsidiary LLC 1 — Property A; → Subsidiary LLC 2 — Property B; → Subsidiary LLC 3 — Property C. Each property in its own LLC, all under a holding. A lawsuit on one property doesn't reach others. Individual sale transfers LLC membership, not deed. Taxation: pass-through to the ultimate investor.",
      },
      {
        kind: "list",
        value: {
          heading: "1031 Exchange — capital-gains deferral",
          intro: "IRC Section 1031 allows deferring tax when exchanging like-kind property. Strict rules:",
          style: "numbered",
          items: [
            "45 days from sale close to IDENTIFY replacement property",
            "180 days from sale close to CLOSE replacement property",
            "Same property type (commercial ↔ commercial, or generally real estate for real estate)",
            "Qualified Intermediary (QI) required — you can never touch the funds",
            "New property value and debt ≥ sold property's (for full deferral)",
          ],
        },
      },
      {
        kind: "prose",
        heading: "Short-Term Rental (Airbnb/VRBO) in Orlando",
        body:
          "Orlando is one of the most profitable STR markets in the US. Orlando, Kissimmee, and Davenport allow short-term rentals. Via LLC, income is US business income (Schedule C / Form 1065 depending). As a foreigner, you receive W-8BEN. We plan: zoning/HOA review, local STR license, remote management, separate management LLC from property LLC, STR-specific insurance.",
      },
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      { q: "Do I need an LLC per property even for $200K homes?", a: "For asset protection, yes. Additional per-property cost: ~$150/yr (Annual Report + Registered Agent). Worth the isolated risk." },
      { q: "Does 1031 exchange work between property types?", a: "Yes, as long as both are 'real property held for productive use in business or investment'. Rental residential ↔ commercial is allowed; primary residence doesn't qualify." },
      { q: "Does the holding LLC need to be in Florida?", a: "Not necessarily. Delaware is common for mature corporate law. Florida if primary operation is in Florida (avoids double filing)." },
      { q: "How do I manage STR from Brazil?", a: "Via local property manager (15–25% of revenue) + Airbnb/VRBO platform + automated systems (smart locks, etc). The LLC receives income; you receive distributions." },
      { q: "Recommended insurance for STR?", a: "STR-specific commercial liability ($1–2M coverage), property insurance, optional umbrella on top. Owners without STR-specific coverage are exposed." },
    ],
    relatedTitle: "Related",
    related: [
      { label: "Foreign buyer (FIRPTA)", href: "/real-estate/foreign-buyer-firpta" },
      { label: "Commercial closing", href: "/real-estate/commercial-closing" },
      { label: "Florida LLC formation", href: "/business/llc-formation" },
      { label: "FIRPTA Calculator", href: "/tools/firpta-calculator" },
    ],
  },
  es: {
    locale: "es",
    slug: SLUG,
    immigrationBreadcrumb: "Inmobiliario",
    breadcrumbLabel: "Estructuración de Inversión",
    eyebrow: "Derecho Inmobiliario",
    h1: "Estructuración de Inversión Inmobiliaria para Brasileños",
    lede:
      "LLC holding + LLC subsidiaria por propiedad. Aísla riesgo, facilita venta individual, habilita 1031 exchange.",
    stats: [
      { value: "LLC/activo", label: "Estructura" },
      { value: "1031", label: "Exchange" },
      { value: "Orlando", label: "STR capital" },
      { value: "FIRPTA", label: "Planificación" },
    ],
    meta: {
      title: "Estructuración de Inversión Inmobiliaria para Brasileños | Pinho Law",
      description: "LLC holding + subsidiarias, 1031 exchange, STR en Orlando, FIRPTA.",
    },
    sections: [
      {
        kind: "prose",
        heading: "Arquitectura recomendada",
        body: "LLC Holding (Florida) + subsidiarias por propiedad. Cada propiedad en su propia LLC, todas bajo una holding.",
      },
      {
        kind: "list",
        value: {
          heading: "1031 Exchange",
          intro: "Section 1031 permite diferir impuesto al intercambiar like-kind property:",
          style: "numbered",
          items: [
            "45 días para IDENTIFICAR propiedad de reemplazo",
            "180 días para CERRAR la propiedad de reemplazo",
            "Qualified Intermediary (QI) obligatorio",
            "Valor y deuda nueva ≥ valor y deuda vendida",
          ],
        },
      },
    ],
    faqTitle: "Preguntas frecuentes",
    faq: [
      { q: "¿Necesito LLC por propiedad?", a: "Para protección patrimonial, sí. Costo: ~US$ 150/año por propiedad." },
      { q: "¿1031 exchange entre tipos?", a: "Sí, si ambas son real property held for productive use or investment." },
      { q: "¿Cómo gestiono STR desde Brasil?", a: "Vía property manager local (15–25% de ingresos)." },
    ],
    relatedTitle: "Relacionado",
    related: [
      { label: "FIRPTA comprador extranjero", href: "/real-estate/foreign-buyer-firpta" },
      { label: "Cierre comercial", href: "/real-estate/commercial-closing" },
      { label: "Formación de LLC", href: "/business/llc-formation" },
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
