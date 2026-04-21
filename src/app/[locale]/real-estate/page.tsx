import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import {
  ServiceHubTemplate,
  type ServiceHubContent,
  type L,
} from "@/components/service/ServiceHubTemplate";
import type { Locale } from "@/i18n/routing";

const SLUG = "real-estate";

const DATA: Record<L, ServiceHubContent> = {
  pt: {
    locale: "pt",
    slug: SLUG,
    breadcrumbLabel: "Direito Imobiliário",
    eyebrow: "Prática",
    h1: "Direito Imobiliário na Flórida para Brasileiros",
    lede:
      "Brasil = 7% das compras estrangeiras de imóveis na Flórida em 2025, volume total US$ 10,4 bilhões. Representamos brasileiros em fechamentos residenciais, comerciais, estruturação via LLC e planejamento FIRPTA.",
    stats: [
      { value: "7%", label: "Brasil/compras FL 2025" },
      { value: "US$ 10,4B", label: "Volume estrangeiro FL" },
      { value: "US$ 475K", label: "Preço mediano estrangeiro" },
      { value: "+50%", label: "YoY compras estrangeiras" },
    ],
    groups: [
      {
        title: "Transações Imobiliárias",
        intro: "Representação do comprador ou vendedor — não da title company.",
        cards: [
          { title: "Comprador Estrangeiro (FIRPTA)", body: "Guia completo 2026: FIRPTA, LLC, ITIN, financiamento não-residente, BACEN. Inclui Calculadora FIRPTA gratuita.", href: "/real-estate/foreign-buyer-firpta", featured: true },
          { title: "Fechamento Residencial", body: "Revisão de contrato, title search 30–60 anos, title insurance, closing disclosure, registro.", href: "/real-estate/residential-closing" },
          { title: "Fechamento Comercial", body: "Multifamily, offices, STR portfolios, terreno e desenvolvimento.", href: "/real-estate/commercial-closing" },
          { title: "Estruturação de Investimento", body: "LLC holding + subsidiárias por imóvel + 1031 exchange.", href: "/real-estate/investment-structuring" },
          { title: "Revisão de Título", body: "Histórico 30–60 anos, liens, servidões, title insurance.", href: "/real-estate/title-review" },
        ],
      },
      {
        title: "Ferramentas",
        intro: "Calculadoras gratuitas para planejar antes do fechamento.",
        cards: [
          { title: "Calculadora FIRPTA", body: "Calcule a retenção FIRPTA estimada em segundos — para compradores e vendedores brasileiros.", href: "/tools/firpta-calculator" },
          { title: "Calculadora EB-5", body: "Veja investimento, prazo e tier EB-5 (Rural TEA, Urban TEA, Infraestrutura, Padrão).", href: "/tools/eb5-calculator" },
        ],
      },
    ],
    ctaLabel: "Consultar sobre Imóvel",
    ctaHref: "/consultation",
  },
  en: {
    locale: "en",
    slug: SLUG,
    breadcrumbLabel: "Real Estate",
    eyebrow: "Practice",
    h1: "Florida Real Estate Law for Brazilians",
    lede:
      "Brazil = 7% of Florida foreign real-estate purchases in 2025, $10.4B total volume. We represent Brazilians in residential closings, commercial closings, LLC structuring, and FIRPTA planning.",
    stats: [
      { value: "7%", label: "Brazil / FL foreign 2025" },
      { value: "$10.4B", label: "FL foreign volume" },
      { value: "$475K", label: "Median foreign price" },
      { value: "+50%", label: "YoY foreign purchases" },
    ],
    groups: [
      {
        title: "Real Estate Transactions",
        intro: "Buyer or seller representation — not title-company representation.",
        cards: [
          { title: "Foreign Buyer (FIRPTA)", body: "Full 2026 guide: FIRPTA, LLC, ITIN, non-resident financing, BACEN. Includes free FIRPTA Calculator.", href: "/real-estate/foreign-buyer-firpta", featured: true },
          { title: "Residential Closing", body: "Contract review, 30–60 yr title search, title insurance, closing disclosure, recording.", href: "/real-estate/residential-closing" },
          { title: "Commercial Closing", body: "Multifamily, offices, STR portfolios, land and development.", href: "/real-estate/commercial-closing" },
          { title: "Investment Structuring", body: "LLC holding + per-property subsidiaries + 1031 exchange.", href: "/real-estate/investment-structuring" },
          { title: "Title Review", body: "30–60 yr title history, liens, easements, title insurance.", href: "/real-estate/title-review" },
        ],
      },
      {
        title: "Tools",
        intro: "Free calculators to plan before closing.",
        cards: [
          { title: "FIRPTA Calculator", body: "Calculate FIRPTA withholding in seconds — for Brazilian buyers and sellers.", href: "/tools/firpta-calculator" },
          { title: "EB-5 Calculator", body: "See investment, timeline, and tier (Rural TEA, Urban TEA, Infrastructure, Standard).", href: "/tools/eb5-calculator" },
        ],
      },
    ],
    ctaLabel: "Consult about Real Estate",
    ctaHref: "/consultation",
  },
  es: {
    locale: "es",
    slug: SLUG,
    breadcrumbLabel: "Derecho Inmobiliario",
    eyebrow: "Práctica",
    h1: "Derecho Inmobiliario en Florida para Brasileños",
    lede:
      "Brasil = 7% de compras extranjeras de inmuebles en Florida en 2025, US$ 10,4 mil millones de volumen.",
    stats: [
      { value: "7%", label: "Brasil / compras FL 2025" },
      { value: "US$ 10,4B", label: "Volumen extranjero FL" },
      { value: "US$ 475K", label: "Precio mediano" },
      { value: "+50%", label: "YoY compras extranjeras" },
    ],
    groups: [
      {
        title: "Transacciones Inmobiliarias",
        cards: [
          { title: "Comprador Extranjero (FIRPTA)", body: "Guía 2026: FIRPTA, LLC, ITIN. Calculadora FIRPTA gratuita.", href: "/real-estate/foreign-buyer-firpta", featured: true },
          { title: "Cierre Residencial", body: "Revisión de contrato, title search, title insurance.", href: "/real-estate/residential-closing" },
          { title: "Cierre Comercial", body: "Multifamily, oficinas, STR, terreno.", href: "/real-estate/commercial-closing" },
          { title: "Estructuración de Inversión", body: "LLC holding + subsidiarias.", href: "/real-estate/investment-structuring" },
        ],
      },
      {
        title: "Herramientas",
        cards: [
          { title: "Calculadora FIRPTA", body: "Calcula la retención FIRPTA estimada.", href: "/tools/firpta-calculator" },
          { title: "Calculadora EB-5", body: "Inversión, plazo y tier EB-5.", href: "/tools/eb5-calculator" },
        ],
      },
    ],
    ctaLabel: "Consultar sobre Inmueble",
    ctaHref: "/consultation",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = DATA[locale as L];
  return createPageMetadata({ title: `${c.h1} | Pinho Law`, description: c.lede, path: `/${SLUG}`, locale: locale as Locale });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ServiceHubTemplate content={DATA[locale as L]} />;
}
