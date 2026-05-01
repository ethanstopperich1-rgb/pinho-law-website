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
    faq: [
      {
        q: "O que é FIRPTA e quanto retém na venda de imóvel por brasileiro?",
        a: "FIRPTA (Foreign Investment in Real Property Tax Act) retém 15% do preço de venda quando o vendedor é estrangeiro não-residente. Em vendas residenciais entre US$ 300K e US$ 1M onde o comprador vai morar no imóvel, retém 10%. Acima de US$ 1M, sempre 15%. A retenção é antecipação de imposto — o ganho real pode ser menor; é possível pedir Withholding Certificate ao IRS para reduzir a retenção antes do closing.",
      },
      {
        q: "Brasileiro deve comprar imóvel via LLC ou em nome próprio?",
        a: "Quase sempre via LLC (estrutura mais comum: LLC Flórida holding + LLC Delaware por imóvel). Razões: (1) proteção patrimonial — credor de um imóvel não atinge os outros, (2) §871(d) election — converte renda de aluguel para tributação em lucro líquido (não 30% sobre o bruto), (3) imposto sobre herança — sem LLC, a isenção é apenas US$ 60K para não-residente, com taxação até 40% federal acima disso.",
      },
      {
        q: "Brasileiros podem financiar imóvel nos EUA sem SSN?",
        a: "Sim, via Foreign National Loans (também chamado ITIN loans). Bancos especializados aceitam ITIN no lugar do SSN. Down payment típico: 30 a 40% (vs 20% para residentes), juros 1 a 2 pontos acima da prime. Documentação requer prova de renda e carta de imposto brasileira traduzida. Atendemos a documentação jurídica do closing — o financiamento em si é tratado pelo banco.",
      },
      {
        q: "Quanto custa um closing residencial na Flórida?",
        a: "Para o comprador: aproximadamente 2 a 3% do preço (title insurance, taxes prorratados, recording fees, advogado). Para o vendedor: 6 a 8% (comissão do corretor 5 a 6%, doc stamps no deed, settlement fees). Em Flórida, taxa de transferência (doc stamps) é US$ 0,70 por US$ 100 de preço — sai do vendedor por padrão.",
      },
      {
        q: "Como declaro à BACEN o imóvel comprado nos EUA?",
        a: "Brasileiros com bens fora do Brasil acima de US$ 1.000.000 (em 31/dez) declaram CBE (Capital Brasileiro no Exterior) anualmente ao Banco Central. Acima de US$ 100M é trimestral. Multas por não-declaração começam em R$ 25.000. Não fazemos a declaração CBE diretamente — coordenamos com o contador brasileiro do cliente para alinhar a estrutura LLC à declaração.",
      },
      {
        q: "Vocês representam comprador, vendedor, ou title company?",
        a: "Representamos exclusivamente comprador OU vendedor — não a title company. A title company é parte neutra do processo (emite seguro de título, faz recording); o advogado próprio garante que seu lado da transação está protegido. Em Flórida, o uso de advogado é OPCIONAL para closings residenciais, mas obrigatório para a maioria dos comerciais. Recomendado em todos os casos para estrangeiros.",
      },
    ],
    faqTitle: "Perguntas Frequentes — Imobiliário",
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
    faq: [
      {
        q: "What is FIRPTA and how much is withheld when a Brazilian sells US property?",
        a: "FIRPTA (Foreign Investment in Real Property Tax Act) withholds 15% of the gross sale price when the seller is a non-resident foreigner. For residential sales between $300K and $1M where the buyer will occupy the property, the rate drops to 10%. Above $1M, always 15%. The withholding is a prepayment of tax — actual gain may be lower; you can apply for a Withholding Certificate from the IRS to reduce the withholding before closing.",
      },
      {
        q: "Should a Brazilian buy US property in their own name or via LLC?",
        a: "Almost always via LLC (most common structure: a Florida holding LLC with a Delaware LLC per property). Reasons: (1) asset protection — a creditor on one property cannot reach the others, (2) §871(d) election — converts rental income to net taxation instead of 30% on gross, (3) estate tax — without an LLC, the non-resident exemption is only $60K, with up to 40% federal tax above that.",
      },
      {
        q: "Can Brazilians finance US property without an SSN?",
        a: "Yes, via Foreign National Loans (also called ITIN loans). Specialized lenders accept ITINs in place of SSNs. Typical down payment: 30–40% (vs 20% for residents), rates 1–2 points above prime. Documentation requires proof of income and a translated Brazilian tax letter.",
      },
      {
        q: "How much does a Florida residential closing cost?",
        a: "For the buyer: approximately 2–3% of the purchase price (title insurance, prorated taxes, recording fees, attorney). For the seller: 6–8% (broker commission 5–6%, doc stamps on deed, settlement fees). In Florida, doc stamps are $0.70 per $100 of price — paid by the seller by default.",
      },
      {
        q: "How do I report a US property purchase to Brazil's BACEN?",
        a: "Brazilians with foreign assets above $1,000,000 (as of Dec 31) file CBE (Capital Brasileiro no Exterior) annually with the Central Bank of Brazil. Above $100M, quarterly. Penalties for non-filing start at R$ 25,000. We do not file CBE directly — we coordinate with the client's Brazilian accountant to align the LLC structure to the report.",
      },
      {
        q: "Do you represent buyer, seller, or title company?",
        a: "We represent buyer OR seller exclusively — not the title company. The title company is a neutral party (issues title insurance, records the deed); your own attorney makes sure your side of the deal is protected. In Florida, attorney use is OPTIONAL for residential closings but required for most commercial. Recommended in every case for foreign buyers.",
      },
    ],
    faqTitle: "Frequently Asked Questions — Real Estate",
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
    faq: [
      {
        q: "¿Qué es FIRPTA y cuánto retiene cuando un brasileño vende inmueble en EE.UU.?",
        a: "FIRPTA retiene 15% del precio de venta cuando el vendedor es extranjero no residente. Entre US$ 300K y US$ 1M con comprador que vaya a habitar el inmueble, retiene 10%. Sobre US$ 1M, siempre 15%. La retención es anticipo de impuesto — se puede pedir Withholding Certificate al IRS para reducirla antes del closing.",
      },
      {
        q: "¿Brasileño debe comprar inmueble en EE.UU. vía LLC o a nombre propio?",
        a: "Casi siempre vía LLC (estructura típica: LLC holding en Florida + LLC Delaware por inmueble). Razones: protección patrimonial, §871(d) election (renta de alquiler tributada sobre lucro neto), e impuesto de herencia — sin LLC, la exención para no residente es solo US$ 60.000.",
      },
      {
        q: "¿Pueden los brasileños financiar inmueble en EE.UU. sin SSN?",
        a: "Sí, vía Foreign National Loans (también llamados ITIN loans). Down payment típico 30–40%, tasa 1–2 puntos sobre prime.",
      },
      {
        q: "¿Cuánto cuesta un closing residencial en Florida?",
        a: "Comprador: ~2–3% del precio. Vendedor: 6–8% (comisión 5–6% + doc stamps + settlement fees).",
      },
      {
        q: "¿Cómo declaro a BACEN el inmueble comprado en EE.UU.?",
        a: "Brasileños con bienes fuera de Brasil sobre US$ 1.000.000 declaran CBE anualmente al Banco Central. Sobre US$ 100M, trimestral. Coordinamos con el contador brasileño del cliente.",
      },
      {
        q: "¿Representan al comprador, vendedor o title company?",
        a: "Representamos exclusivamente comprador O vendedor — no a la title company. En Florida, el uso de abogado es OPCIONAL para closings residenciales pero recomendado para extranjeros.",
      },
    ],
    faqTitle: "Preguntas Frecuentes — Inmobiliario",
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
