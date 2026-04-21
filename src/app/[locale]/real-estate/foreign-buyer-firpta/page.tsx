import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import {
  ServicePageTemplate,
  type ServicePageContent,
  type L,
} from "@/components/service/ServicePageTemplate";
import type { Locale } from "@/i18n/routing";

const SLUG = "real-estate/foreign-buyer-firpta";

// Full copy from website/content/spec-part-7.md §FIRPTA foreign-buyer.
// 2025 Florida foreign-buyer market: 16,401 homes, +50% YoY, $10.4B,
// Brazil = 7% of foreign purchases, median $475K.
const DATA: Record<L, ServicePageContent> = {
  pt: {
    locale: "pt",
    slug: SLUG,
    immigrationBreadcrumb: "Imobiliário",
    breadcrumbLabel: "Comprador Estrangeiro (FIRPTA)",
    eyebrow: "Direito Imobiliário",
    h1: "Compra de Imóvel nos EUA para Brasileiros — Guia FIRPTA 2026",
    lede:
      "O Brasil é um dos maiores mercados de compradores internacionais na Flórida: 7% de todas as compras estrangeiras em 2025, volume total US$ 10,4 bilhões. Comprar imóvel sendo estrangeiro envolve regras que diferem radicalmente do Brasil — especialmente FIRPTA, LLC, ITIN e sucessão.",
    stats: [
      { value: "7%", label: "Brasil/compras FL 2025" },
      { value: "US$ 10,4B", label: "Volume estrangeiro FL 2025" },
      { value: "US$ 475K", label: "Preço mediano estrangeiro" },
      { value: "+50%", label: "YoY compras estrangeiras" },
    ],
    meta: {
      title: "Brasileiro Comprando Imóvel nos EUA 2026 — FIRPTA, LLC, ITIN | Pinho Law",
      description:
        "Guia 2026 para brasileiros comprando imóvel nos EUA: FIRPTA, LLC, ITIN, financiamento não-residente, BACEN, planejamento sucessório. Calculadora FIRPTA gratuita.",
    },
    sections: [
      {
        kind: "prose",
        heading: "FIRPTA — o que todo comprador brasileiro precisa saber",
        body:
          "FIRPTA (Foreign Investment in Real Property Tax Act) é a lei federal americana que exige retenção de imposto na venda de imóvel por estrangeiro. Ela afeta a venda futura do seu imóvel, não a compra — mas estruturar errado agora cria o problema depois.",
      },
      {
        kind: "table",
        value: {
          heading: "Tabela de retenção FIRPTA 2026",
          headers: ["Uso pelo comprador", "Preço de venda", "Retenção"],
          rows: [
            ["Residência do comprador", "Até US$ 300.000", "0%"],
            ["Residência do comprador", "US$ 300K – US$ 1M", "10%"],
            ["Residência do comprador", "Acima de US$ 1M", "15%"],
            ["Investimento (qualquer preço)", "Qualquer", "15%"],
            ["Vendedor pessoa jurídica estrangeira", "Qualquer", "21%"],
          ],
          note:
            "A retenção é sobre o preço bruto, não sobre o lucro. Comprou por US$ 500K, valorizou para US$ 850K e vende como investimento → US$ 127.500 retidos (mesmo que o lucro real seja menor). Restituição via declaração de IR, 6–12 meses. Use a nossa Calculadora FIRPTA gratuita para ver o impacto exato.",
          noteStyle: "gold",
        },
      },
      {
        kind: "prose",
        heading: "Como estruturar para minimizar FIRPTA",
        body:
          "A solução mais eficaz é comprar via LLC americana de membro único (tratada como disregarded entity para fins federais). A LLC americana não é \"estrangeira\" perante o FIRPTA quando estruturada corretamente — eliminando ou reduzindo drasticamente a retenção. Estruturamos LLC + compra de imóvel de forma integrada, garantindo que a entidade esteja correta desde o fechamento.",
      },
      {
        kind: "table",
        value: {
          heading: "Estruturas de compra para brasileiros",
          headers: ["Estrutura", "Quando usar"],
          rows: [
            ["Compra direta (pessoa física)", "Residência primária de baixo valor; uso da isenção de residência"],
            ["LLC Florida membro único (recomendada)", "Imóvel de investimento, aluguel de temporada, proteção patrimonial"],
            ["LLC multi-member", "Imóvel familiar, investimento compartilhado, planejamento sucessório"],
            ["Revocable Living Trust", "Residência principal de alto valor, planejamento sucessório Brasil-EUA"],
          ],
        },
      },
      {
        kind: "table",
        value: {
          heading: "Financiamento — residente vs não-residente",
          headers: ["Item", "Residente (GC/EAD)", "Não-residente"],
          rows: [
            ["Down payment mínimo", "10–20%", "30–40%"],
            ["Documentação de renda", "Holerites EUA", "Declaração IR Brasil + extratos"],
            ["ITIN ou SSN", "SSN preferido", "ITIN obrigatório"],
            ["Taxa de juros", "Rate padrão", "+0.5–1.0% sobre padrão"],
            ["Bancos disponíveis", "Ampla escolha", "Internacionais especializados"],
          ],
          note:
            "ITIN (Individual Taxpayer Identification Number) é o número fiscal americano para quem não tem SSN. Abrimos antes do fechamento. Auxiliamos no processo completo de ITIN (Form W-7).",
        },
      },
      {
        kind: "list",
        value: {
          heading: "Processo de compra — passo a passo",
          style: "numbered",
          items: [
            "Estruturação jurídica — decidir pessoa física vs LLC vs Trust; abrimos a entidade antes da oferta",
            "ITIN / EIN — obtemos número fiscal federal para você e/ou a LLC",
            "Conta bancária americana — necessária para o fechamento",
            "Oferta e contrato — revisamos o purchase agreement, contingencies, prazos e obrigações",
            "Due diligence — inspeção (10 dias), title search, title insurance",
            "Closing — assinatura remota possível via apostila ou procuração para fechar no Brasil",
            "Registro — escritura registrada no condado; LLC como titular fica no registro público",
            "Pós-fechamento — FBAR e FATCA se necessário, seguros, declaração de bens ao BACEN (CBE) se acima de US$ 1M",
          ],
        },
      },
      {
        kind: "prose",
        heading: "Declaração ao BACEN (obrigação brasileira)",
        body:
          "Brasileiros residentes no Brasil com bens no exterior acima de US$ 1 milhão têm obrigação de declarar ao Banco Central via CBE (Capitais Brasileiros no Exterior), anualmente. A omissão sujeita a multas de até R$ 250.000. Trabalhamos integrados com contadores brasileiros especializados para garantir compliance total Brasil-EUA.",
      },
    ],
    faqTitle: "Perguntas frequentes",
    faq: [
      { q: "Posso comprar imóvel nos EUA sem morar lá?", a: "Sim, sem restrição. Estrangeiros não-residentes podem comprar qualquer tipo de imóvel nos EUA sem limitação legal." },
      { q: "Preciso estar presente no fechamento?", a: "Não. O closing pode ser feito remotamente com documentos enviados via apostila ou com procuração (Power of Attorney) para um representante assinar em seu nome." },
      { q: "LLC abre rápido?", a: "Sim. LLC Florida é aberta em 1–3 dias úteis online via sunbiz.org. O Operating Agreement, FEIN/EIN e abertura de conta bancária levam mais 1–2 semanas." },
      { q: "Meu imóvel americano entra no inventário brasileiro?", a: "Não automaticamente. O imóvel nos EUA segue a lei americana — sem Will americano, passa pelo probate da Flórida. Com um Trust ou LLC bem estruturada, passa fora do probate nos EUA e pode ser integrado ao seu planejamento sucessório brasileiro." },
      { q: "Posso alugar meu imóvel (Airbnb, VRBO)?", a: "Sim. A Flórida é um dos estados mais favoráveis para aluguel de temporada. Municípios como Orlando, Kissimmee e Davenport permitem aluguel de curta temporada. Via LLC, a renda é declarada como renda empresarial americana (e você recebe W-8BEN como estrangeiro)." },
    ],
    relatedTitle: "Relacionado",
    related: [
      { label: "Calculadora FIRPTA gratuita", href: "/tools/firpta-calculator" },
      { label: "Fechamento residencial na Flórida", href: "/real-estate/residential-closing" },
      { label: "Abrir LLC na Flórida", href: "/business/llc-formation" },
      { label: "Will & Trust para brasileiros", href: "/business/will-and-trust" },
    ],
  },
  en: {
    locale: "en",
    slug: SLUG,
    immigrationBreadcrumb: "Real Estate",
    breadcrumbLabel: "Foreign Buyer (FIRPTA)",
    eyebrow: "Real Estate Law",
    h1: "Foreign-Buyer US Real Estate 2026 — FIRPTA Guide",
    lede:
      "Brazil is one of the top international real-estate markets in Florida: 7% of all foreign purchases in 2025, $10.4B total volume. Buying as a foreigner involves rules that differ radically from Brazil — especially FIRPTA, LLC, ITIN, and estate planning.",
    stats: [
      { value: "7%", label: "Brazil / FL foreign 2025" },
      { value: "$10.4B", label: "FL foreign volume 2025" },
      { value: "$475K", label: "Median foreign price" },
      { value: "+50%", label: "YoY foreign purchases" },
    ],
    meta: {
      title: "Foreign Buyer US Real Estate 2026 — FIRPTA, LLC, ITIN | Pinho Law",
      description:
        "2026 guide for Brazilians buying US real estate: FIRPTA, LLC, ITIN, non-resident financing, BACEN, estate planning. Free FIRPTA calculator.",
    },
    sections: [
      {
        kind: "prose",
        heading: "FIRPTA — what every foreign buyer needs to know",
        body:
          "FIRPTA (Foreign Investment in Real Property Tax Act) is the US federal law requiring tax withholding on real-estate sale by a foreign seller. It affects future sale of your property, not purchase — but wrong structure now creates the problem later.",
      },
      {
        kind: "table",
        value: {
          heading: "2026 FIRPTA withholding table",
          headers: ["Buyer use", "Sale price", "Withholding"],
          rows: [
            ["Buyer as residence", "Up to $300,000", "0%"],
            ["Buyer as residence", "$300K – $1M", "10%"],
            ["Buyer as residence", "Above $1M", "15%"],
            ["Investment (any price)", "Any", "15%"],
            ["Foreign corporation seller", "Any", "21%"],
          ],
          note:
            "Withholding is on gross price, not profit. Bought $500K, now worth $850K, selling as investment → $127,500 withheld (even if actual gain is less). Refund via tax return, 6–12 months. Use our free FIRPTA Calculator to see the exact impact.",
          noteStyle: "gold",
        },
      },
      {
        kind: "prose",
        heading: "Structuring to minimize FIRPTA",
        body:
          'The most effective solution is to buy via single-member US LLC (treated as a disregarded entity for federal purposes). The US LLC is not "foreign" for FIRPTA when structured correctly — dramatically reducing or eliminating withholding. We structure LLC + real-estate purchase together, ensuring the entity is correct from closing.',
      },
      {
        kind: "table",
        value: {
          heading: "Ownership structures for Brazilians",
          headers: ["Structure", "Best for"],
          rows: [
            ["Direct purchase (individual)", "Low-value primary residence using homestead exemption"],
            ["Single-member Florida LLC (recommended)", "Investment property, short-term rental, asset protection"],
            ["Multi-member LLC", "Family property, shared investment, estate planning"],
            ["Revocable Living Trust", "High-value primary residence, Brazil-US estate planning"],
          ],
        },
      },
      {
        kind: "table",
        value: {
          heading: "Financing — resident vs non-resident",
          headers: ["Item", "Resident (GC/EAD)", "Non-resident"],
          rows: [
            ["Minimum down payment", "10–20%", "30–40%"],
            ["Income documentation", "US pay stubs", "Brazilian tax return + statements"],
            ["ITIN or SSN", "SSN preferred", "ITIN required"],
            ["Interest rate", "Standard rate", "+0.5–1.0% over standard"],
            ["Available banks", "Wide choice", "Specialized international"],
          ],
          note:
            "ITIN (Individual Taxpayer Identification Number) is the US tax number for those without SSN. We open it before closing (Form W-7).",
        },
      },
      {
        kind: "list",
        value: {
          heading: "Purchase process — step by step",
          style: "numbered",
          items: [
            "Legal structuring — decide individual vs LLC vs Trust; open the entity before offer",
            "ITIN / EIN — federal tax number for you and/or the LLC",
            "US bank account — needed for closing",
            "Offer and contract — review purchase agreement, contingencies, deadlines",
            "Due diligence — inspection (10 days), title search, title insurance",
            "Closing — remote signature via apostille or Power of Attorney for in-Brazil signing",
            "Recording — deed recorded with the county; LLC holder appears in public record",
            "Post-closing — FBAR and FATCA if needed, insurance, BACEN CBE filing if >$1M",
          ],
        },
      },
      {
        kind: "prose",
        heading: "BACEN reporting (Brazilian obligation)",
        body:
          "Brazilian residents with foreign assets over $1 million must file annually with the Central Bank via CBE (Brazilian Capital Abroad). Non-filing subjects to fines up to R$ 250,000. We work with Brazilian accountants to ensure full Brazil-US compliance.",
      },
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      { q: "Can I buy US real estate without living there?", a: "Yes, without restriction. Non-resident foreigners can buy any type of US real estate without legal limitation." },
      { q: "Do I need to be present at closing?", a: "No. Closing can be done remotely with documents sent via apostille or with a Power of Attorney." },
      { q: "Does the LLC open quickly?", a: "Yes. Florida LLC is opened in 1–3 business days online via sunbiz.org. Operating Agreement, FEIN/EIN, and bank account take another 1–2 weeks." },
      { q: "Does my US property go through Brazilian probate?", a: "Not automatically. US property follows US law — without a US will, it goes through Florida probate. With a Trust or well-structured LLC, it bypasses US probate and can be integrated with your Brazilian succession plan." },
      { q: "Can I rent my property (Airbnb, VRBO)?", a: "Yes. Florida is one of the most favorable states for short-term rental. Via LLC, income is declared as US business income (and you receive W-8BEN as foreigner)." },
    ],
    relatedTitle: "Related",
    related: [
      { label: "Free FIRPTA Calculator", href: "/tools/firpta-calculator" },
      { label: "Florida residential closing", href: "/real-estate/residential-closing" },
      { label: "Florida LLC formation", href: "/business/llc-formation" },
      { label: "Will & Trust for Brazilians", href: "/business/will-and-trust" },
    ],
  },
  es: {
    locale: "es",
    slug: SLUG,
    immigrationBreadcrumb: "Inmobiliario",
    breadcrumbLabel: "Comprador Extranjero (FIRPTA)",
    eyebrow: "Derecho Inmobiliario",
    h1: "Comprador Extranjero de Inmueble en EE.UU. — Guía FIRPTA 2026",
    lede:
      "Brasil es uno de los mayores mercados de compradores internacionales en Florida: 7% de compras extranjeras en 2025, volumen US$ 10,4 mil millones.",
    stats: [
      { value: "7%", label: "Brasil / compras FL 2025" },
      { value: "US$ 10,4B", label: "Volumen extranjero FL" },
      { value: "US$ 475K", label: "Precio mediano" },
      { value: "+50%", label: "YoY compras extranjeras" },
    ],
    meta: {
      title: "Comprador Extranjero de Inmueble en EE.UU. 2026 — FIRPTA, LLC, ITIN | Pinho Law",
      description:
        "Guía 2026 para compra de inmueble en EE.UU. por extranjeros: FIRPTA, LLC, ITIN, BACEN.",
    },
    sections: [
      {
        kind: "table",
        value: {
          heading: "Tabla de retención FIRPTA 2026",
          headers: ["Uso por el comprador", "Precio", "Retención"],
          rows: [
            ["Residencia del comprador", "Hasta US$ 300.000", "0%"],
            ["Residencia del comprador", "US$ 300K – US$ 1M", "10%"],
            ["Residencia del comprador", "Sobre US$ 1M", "15%"],
            ["Inversión (cualquier precio)", "Cualquiera", "15%"],
            ["Vendedor persona jurídica extranjera", "Cualquiera", "21%"],
          ],
          note:
            "La retención es sobre el precio bruto, no sobre la ganancia. Usa nuestra Calculadora FIRPTA gratuita.",
          noteStyle: "gold",
        },
      },
      {
        kind: "prose",
        heading: "Estructurar para minimizar FIRPTA",
        body:
          "La solución más efectiva es comprar vía LLC estadounidense de miembro único (disregarded entity). Estructuramos LLC + compra de inmueble integradamente.",
      },
      {
        kind: "list",
        value: {
          heading: "Proceso de compra",
          style: "numbered",
          items: [
            "Estructuración jurídica — LLC vs Trust antes de la oferta",
            "ITIN / EIN",
            "Cuenta bancaria estadounidense",
            "Oferta y contrato",
            "Due diligence — inspección, title search, title insurance",
            "Cierre remoto posible vía apóstille o poder notarial",
            "Registro en el condado",
            "Post-cierre — FBAR, FATCA, BACEN si >US$ 1M",
          ],
        },
      },
    ],
    faqTitle: "Preguntas frecuentes",
    faq: [
      { q: "¿Puedo comprar inmueble en EE.UU. sin vivir allí?", a: "Sí, sin restricción." },
      { q: "¿Necesito estar presente en el cierre?", a: "No. Puede hacerse remotamente vía apóstille o poder notarial." },
      { q: "¿Puedo alquilar mi propiedad (Airbnb)?", a: "Sí. Vía LLC, la renta es declarada como renta empresarial estadounidense." },
    ],
    relatedTitle: "Relacionado",
    related: [
      { label: "Calculadora FIRPTA gratuita", href: "/tools/firpta-calculator" },
      { label: "Cierre residencial en Florida", href: "/real-estate/residential-closing" },
      { label: "Formación de LLC", href: "/business/llc-formation" },
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const c = DATA[locale as L];
  return createPageMetadata({
    title: c.meta.title,
    description: c.meta.description,
    path: `/${SLUG}`,
    locale: locale as Locale,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ServicePageTemplate content={DATA[locale as L]} />;
}
