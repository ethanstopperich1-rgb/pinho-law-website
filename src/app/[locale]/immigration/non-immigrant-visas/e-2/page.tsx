import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import {
  ServicePageTemplate,
  type ServicePageContent,
  type L,
} from "@/components/service/ServicePageTemplate";
import type { Locale } from "@/i18n/routing";

const SLUG = "immigration/non-immigrant-visas/e-2";

// Copy from website/content/spec-parts-2-5.md §E-2.
// CRITICAL: lead with "Brazil NOT an E-2 treaty country" — trust move.
const DATA: Record<L, ServicePageContent> = {
  pt: {
    locale: "pt",
    slug: SLUG,
    immigrationBreadcrumb: "Imigração",
    breadcrumbLabel: "E-2",
    eyebrow: "Visto Não-Imigrante",
    h1: "Visto E-2 — Investidor Tratado",
    lede:
      "⚠️ Brasil NÃO é país signatário do tratado E-2. Brasileiros só conseguem E-2 com dupla cidadania (Itália, Portugal, Espanha, França, etc.). Com o passaporte certo, é uma das melhores rotas — renovável indefinidamente, cônjuge trabalha, filhos estudam.",
    stats: [
      { value: "US$ 100K+", label: "Investimento típico" },
      { value: "3–8sem", label: "Consulado" },
      { value: "2 anos", label: "Validade inicial" },
      { value: "∞", label: "Renovações" },
    ],
    meta: {
      title: "Visto E-2 para Brasileiros 2026 — Dupla Cidadania Obrigatória | Pinho Law",
      description:
        "Brasil NÃO é país tratado E-2. Brasileiros precisam de dupla cidadania (Itália, Portugal, Espanha, França) para aplicar. Guia completo 2026.",
    },
    sections: [
      {
        kind: "callout",
        value: {
          tone: "alert",
          badgeLabel: "Atenção",
          heading: "Brasil não é país signatário do tratado E-2",
          body:
            "Esta é a primeira informação que você precisa entender — e a que a maioria dos sites em português esconde para te vender consultoria. Brasileiros não conseguem E-2 com passaporte brasileiro apenas.",
          recLabel: "A boa notícia",
          rec: "Se você tem dupla cidadania com um país signatário (Itália, Portugal, Espanha, França, Argentina, Paraguai, Japão e outros), o caminho é aberto. Muitos brasileiros descendentes de italianos, portugueses, espanhóis, japoneses ou alemães qualificam.",
        },
      },
      {
        kind: "list",
        value: {
          heading: "Países tratado E-2 com fluxo relevante para brasileiros",
          style: "check",
          items: [
            "Itália (jus sanguinis brasileiro→italiano comum)",
            "Portugal (lei sefardita, lei de naturalização simplificada)",
            "Espanha (lei de memória democrática, descendência sefardita)",
            "Argentina (Mercosul + descendência)",
            "Paraguai (binacionais frequentes em fronteira)",
            "Japão (descendência nipo-brasileira)",
            "Alemanha (descendência alemã, casos seletos)",
            "Suíça, França, Holanda, Reino Unido (raros mas possíveis)",
          ],
        },
      },
      {
        kind: "list",
        value: {
          heading: "Requisitos do E-2",
          style: "numbered",
          items: [
            "Cidadania de país tratado (precisa apresentar passaporte, não apenas certidão)",
            "Investimento substancial em empresa americana — sem mínimo legal, tipicamente US$ 100k+",
            "Investimento at risk — recursos efetivamente comprometidos, não promessa",
            "Empresa não-marginal — capacidade de gerar mais que sustento próprio (empregar americanos)",
            "Posição de direção e desenvolvimento — você dirige o negócio, não é empregado",
            "Intenção de partir ao fim do E-2 (não-imigrante — embora renovável indefinidamente)",
          ],
        },
      },
      {
        kind: "list",
        value: {
          heading: "Por que o E-2 é poderoso (para quem pode usá-lo)",
          style: "check",
          items: [
            "Renovável indefinidamente enquanto o negócio operar",
            "Cônjuge recebe autorização de trabalho (categoria E-2S) sem restrição",
            "Filhos podem estudar em escola pública",
            "Aprovação rápida (consular 2–4 meses tipicamente)",
            "Investimento menor que EB-5",
          ],
        },
      },
      {
        kind: "callout",
        value: {
          tone: "alert",
          badgeLabel: "Limitação importante",
          heading: "E-2 não vira green card direto",
          body:
            "E-2 é não-imigrante. Para virar green card depois, você precisa converter: EB-5 (US$ 800k+), EB-1C (se a empresa qualificar), EB-2 NIW (se perfil profissional justificar), ou casamento com cidadão americano.",
          recLabel: "Por isso",
          rec: "Planejar a saída do E-2 desde o dia 1 é parte da estratégia que entregamos.",
        },
      },
      {
        kind: "table",
        value: {
          heading: "Custo",
          headers: ["Item", "Valor"],
          rows: [
            ["Investimento mínimo prático", "US$ 100.000+"],
            ["Taxa consular E-2 (DS-160 + entrevista)", "US$ 315"],
            ["Honorários Pinho Law (E-2 completo)", "US$ 5.500–8.500"],
            ["Estruturação da empresa americana", "adicional, integrado"],
          ],
        },
      },
    ],
    faqTitle: "Perguntas frequentes",
    faq: [
      { q: "Brasileiro pode tirar E-2?", a: "Apenas com dupla cidadania de país signatário do tratado E-2 (Itália, Portugal, Espanha, Japão, França, Alemanha e outros). Com passaporte brasileiro apenas, não." },
      { q: "Como descubro se tenho direito a passaporte italiano/português?", a: "Italianos: jus sanguinis sem limite de gerações se a linha não foi interrompida por naturalização. Portugueses: lei sefardita (suspensa em 2024 com restrições) ou lei de descendência simplificada para netos. Trabalhamos com escritórios parceiros no Brasil e Europa." },
      { q: "Quanto preciso investir?", a: "Sem mínimo legal, mas tipicamente US$ 100k+. Investimentos menores aprovam, mas exigem documentação extra. Maiores reduzem risco de RFE." },
      { q: "E-2 vira green card?", a: "Não diretamente. Você precisa converter para EB-5, EB-1C, EB-2 NIW ou casamento. Planejamos essa rota desde o início." },
      { q: "Posso renovar o E-2 para sempre?", a: "Sim, enquanto o negócio operar genuinamente, gerar empregos americanos e você mantiver papel de direção/desenvolvimento." },
      { q: "Meu cônjuge pode trabalhar no E-2?", a: "Sim. Cônjuges E-2 (categoria E-2S) recebem autorização de trabalho aberta, podendo trabalhar para qualquer empregador." },
    ],
    relatedTitle: "Relacionado",
    related: [
      { label: "L-1 (sem dupla cidadania)", href: "/immigration/non-immigrant-visas/l-1" },
      { label: "EB-5 (investimento maior, caminho para green card)", href: "/immigration/immigrant-visas/eb-5" },
      { label: "Motor de Decisão de Visto", href: "/tools/visa-decision-engine" },
    ],
  },
  en: {
    locale: "en",
    slug: SLUG,
    immigrationBreadcrumb: "Immigration",
    breadcrumbLabel: "E-2",
    eyebrow: "Non-Immigrant Visa",
    h1: "E-2 — Treaty Investor",
    lede:
      "⚠️ Brazil is NOT an E-2 treaty country. Brazilians can only apply via dual citizenship (Italy, Portugal, Spain, France, etc.). With the right passport, it's one of the best routes — renewable indefinitely, spouse works, kids go to school.",
    stats: [
      { value: "$100K+", label: "Typical investment" },
      { value: "3–8wk", label: "Consulate" },
      { value: "2 yrs", label: "Initial validity" },
      { value: "∞", label: "Renewals" },
    ],
    meta: {
      title: "E-2 Visa for Brazilians 2026 — Dual Citizenship Required | Pinho Law",
      description:
        "Brazil is NOT an E-2 treaty country. Brazilians need dual citizenship (Italy, Portugal, Spain, France) to apply. Complete 2026 guide.",
    },
    sections: [
      {
        kind: "callout",
        value: {
          tone: "alert",
          badgeLabel: "Heads up",
          heading: "Brazil is not an E-2 treaty country",
          body:
            "This is the first thing you need to understand — and what most Portuguese-language sites hide to sell you consulting. Brazilians can't get E-2 with a Brazilian passport alone.",
          recLabel: "The good news",
          rec: "If you hold dual citizenship with a treaty country (Italy, Portugal, Spain, France, Argentina, Paraguay, Japan, and others), the path is open. Many Brazilians of Italian, Portuguese, Spanish, Japanese, or German descent qualify.",
        },
      },
      {
        kind: "list",
        value: {
          heading: "E-2 treaty countries with relevant flow for Brazilians",
          style: "check",
          items: [
            "Italy (Brazil→Italy jus sanguinis is common)",
            "Portugal (Sephardic law; simplified naturalization)",
            "Spain (democratic memory law, Sephardic descent)",
            "Argentina (Mercosur + descent)",
            "Paraguay (border dual nationals are common)",
            "Japan (Japanese-Brazilian descent)",
            "Germany (German descent, select cases)",
            "Switzerland, France, Netherlands, UK (rare but possible)",
          ],
        },
      },
      {
        kind: "list",
        value: {
          heading: "E-2 requirements",
          style: "numbered",
          items: [
            "Treaty-country citizenship (must show passport, not just birth record)",
            "Substantial investment — no legal minimum, typically $100k+",
            "Investment at risk — funds actually committed, not promised",
            "Non-marginal enterprise — capacity to employ Americans beyond yourself",
            "Direction/development role — you run the business, not employed by it",
            "Intent to depart at end of E-2 (non-immigrant, though indefinitely renewable)",
          ],
        },
      },
      {
        kind: "list",
        value: {
          heading: "Why E-2 is powerful (for those who can use it)",
          style: "check",
          items: [
            "Renewable indefinitely while the business operates",
            "Spouse receives open work authorization (E-2S category)",
            "Children may attend public school",
            "Fast approval (consular 2–4 months typical)",
            "Smaller investment than EB-5",
          ],
        },
      },
      {
        kind: "callout",
        value: {
          tone: "alert",
          badgeLabel: "Important limitation",
          heading: "E-2 does not lead directly to a green card",
          body:
            "E-2 is non-immigrant. To transition to a green card later: EB-5 ($800k+), EB-1C (if company qualifies and you're exec/manager), EB-2 NIW (if professional profile fits), or marriage to a US citizen.",
          recLabel: "Therefore",
          rec: "Planning the exit from E-2 from day one is part of the strategy we deliver.",
        },
      },
      {
        kind: "table",
        value: {
          heading: "Cost",
          headers: ["Item", "Amount"],
          rows: [
            ["Practical minimum investment", "$100,000+"],
            ["E-2 consular fee (DS-160 + interview)", "$315"],
            ["Pinho Law firm fees (full E-2)", "$5,500–8,500"],
            ["US entity structuring", "additional, integrated"],
          ],
        },
      },
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      { q: "Can a Brazilian get E-2?", a: "Only with dual citizenship from a treaty country (Italy, Portugal, Spain, Japan, France, Germany, and others). Not with a Brazilian passport alone." },
      { q: "How do I find out if I'm eligible for Italian/Portuguese citizenship?", a: "Italians: jus sanguinis with no generational limit if the line isn't broken by naturalization. Portuguese: Sephardic law (restricted since 2024) or simplified descent law for grandchildren. We partner with firms in Brazil and Europe." },
      { q: "How much do I need to invest?", a: "No legal minimum, but typically $100k+. Smaller investments get approved but require extra documentation. Larger investments reduce RFE risk." },
      { q: "Does E-2 lead to a green card?", a: "Not directly. You convert via EB-5, EB-1C, EB-2 NIW, or marriage. We plan that route from the start." },
      { q: "Can I renew E-2 forever?", a: "Yes, as long as the business genuinely operates, employs Americans, and you retain direction/development role." },
      { q: "Can my spouse work on E-2?", a: "Yes. E-2 spouses (E-2S category) get open work authorization and can work for any employer." },
    ],
    relatedTitle: "Related",
    related: [
      { label: "L-1 (no dual citizenship required)", href: "/immigration/non-immigrant-visas/l-1" },
      { label: "EB-5 (larger investment, direct green card)", href: "/immigration/immigrant-visas/eb-5" },
      { label: "Visa Decision Engine", href: "/tools/visa-decision-engine" },
    ],
  },
  es: {
    locale: "es",
    slug: SLUG,
    immigrationBreadcrumb: "Inmigración",
    breadcrumbLabel: "E-2",
    eyebrow: "Visa No Inmigrante",
    h1: "Visa E-2 — Inversionista Tratado",
    lede:
      "⚠️ Brasil NO es país signatario del tratado E-2. Brasileños solo pueden aplicar con doble ciudadanía (Italia, Portugal, España, Francia, etc.). Con el pasaporte correcto, es una de las mejores rutas.",
    stats: [
      { value: "US$ 100K+", label: "Inversión típica" },
      { value: "3–8sem", label: "Consulado" },
      { value: "2 años", label: "Validez inicial" },
      { value: "∞", label: "Renovaciones" },
    ],
    meta: {
      title: "Visa E-2 para Brasileños 2026 — Doble Ciudadanía Obligatoria | Pinho Law",
      description:
        "Brasil NO es país tratado E-2. Brasileños requieren doble ciudadanía (Italia, Portugal, España, Francia) para aplicar.",
    },
    sections: [
      {
        kind: "callout",
        value: {
          tone: "alert",
          badgeLabel: "Atención",
          heading: "Brasil no es país signatario del tratado E-2",
          body:
            "Esta es la primera información que necesitas saber. Brasileños no pueden obtener E-2 solo con pasaporte brasileño.",
          recLabel: "La buena noticia",
          rec: "Con doble ciudadanía de país signatario (Italia, Portugal, España, Francia, Argentina, Paraguay, Japón), la ruta está abierta.",
        },
      },
      {
        kind: "list",
        value: {
          heading: "Requisitos del E-2",
          style: "numbered",
          items: [
            "Ciudadanía de país tratado (pasaporte, no solo certificado)",
            "Inversión sustancial — típicamente US$ 100k+",
            "Inversión at risk — fondos efectivamente comprometidos",
            "Empresa no marginal — capacidad de emplear estadounidenses",
            "Posición de dirección y desarrollo",
            "Intención de partir al fin del E-2 (aunque renovable indefinidamente)",
          ],
        },
      },
      {
        kind: "callout",
        value: {
          tone: "alert",
          badgeLabel: "Limitación importante",
          heading: "E-2 no lleva directo a green card",
          body: "E-2 es no inmigrante. Para transicionar: EB-5, EB-1C, EB-2 NIW, o matrimonio con ciudadano estadounidense.",
        },
      },
      {
        kind: "table",
        value: {
          heading: "Costo",
          headers: ["Item", "Monto"],
          rows: [
            ["Inversión mínima práctica", "US$ 100.000+"],
            ["Tasa consular E-2", "US$ 315"],
            ["Honorarios Pinho Law (E-2 completo)", "US$ 5.500–8.500"],
          ],
        },
      },
    ],
    faqTitle: "Preguntas frecuentes",
    faq: [
      { q: "¿Un brasileño puede obtener E-2?", a: "Solo con doble ciudadanía de país signatario (Italia, Portugal, España, Japón, Francia, Alemania)." },
      { q: "¿Cuánto necesito invertir?", a: "Sin mínimo legal, típicamente US$ 100k+." },
      { q: "¿E-2 lleva a green card?", a: "No directamente. Hay que convertir vía EB-5, EB-1C, EB-2 NIW o matrimonio." },
      { q: "¿Puedo renovar E-2 indefinidamente?", a: "Sí, mientras el negocio opere genuinamente." },
      { q: "¿Mi cónyuge puede trabajar con E-2?", a: "Sí. Cónyuges E-2 (categoría E-2S) reciben autorización de trabajo abierta." },
    ],
    relatedTitle: "Relacionado",
    related: [
      { label: "L-1 (sin doble ciudadanía)", href: "/immigration/non-immigrant-visas/l-1" },
      { label: "EB-5 (green card directo)", href: "/immigration/immigrant-visas/eb-5" },
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
