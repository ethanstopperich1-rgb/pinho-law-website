import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import {
  ServicePageTemplate,
  type ServicePageContent,
  type L,
} from "@/components/service/ServicePageTemplate";
import type { Locale } from "@/i18n/routing";

const SLUG = "immigration/immigrant-visas/eb-5";

// Data-only. Structure lives in ServicePageTemplate.
// Copy from website/content/spec-parts-2-5.md §EB-5 + 2026 research addendum.
const DATA: Record<L, ServicePageContent> = {
  pt: {
    locale: "pt",
    slug: SLUG,
    immigrationBreadcrumb: "Imigração",
    breadcrumbLabel: "EB-5",
    eyebrow: "Visto de Imigrante",
    h1: "Visto EB-5 — Green Card por Investimento",
    lede:
      "Brasileiros estão entre os investidores mais bem posicionados do mundo para EB-5 em 2026 — sem backlog, 1,4 anos em média. Investe, cria 10 empregos americanos, recebe green card.",
    stats: [
      { value: "US$ 800K", label: "Mínimo (Rural/TEA)" },
      { value: "1,4 ano", label: "Prazo Brasil" },
      { value: "CURRENT", label: "Fila Brasil" },
      { value: "10 jobs", label: "Criação mínima" },
    ],
    meta: {
      title: "EB-5 para Brasileiros 2026 — Investimento US$ 800K | Pinho Law",
      description:
        "EB-5 para brasileiros: US$ 800K (TEA/Rural) ou US$ 1,05M padrão. Brasil sem backlog, 1,4 anos. Fonte de fundos, Regional Center vs Direct, I-526E, I-829.",
    },
    sections: [
      {
        kind: "table",
        value: {
          heading: "Os números do EB-5 em 2026",
          headers: ["Item", "TEA / Rural / Infraestrutura", "Não-TEA"],
          rows: [
            ["Investimento mínimo", "US$ 800.000", "US$ 1.050.000"],
            ["Empregos exigidos (full-time americanos)", "10", "10"],
            ["Visa allocation reservada", "Rural 20% / TEA 10% / Infra 2%", "Standard 68%"],
            ["Processamento I-526E (rural prioritário)", "~5 meses", "24–36 meses"],
          ],
          note:
            "Brasil: visa CURRENT, sem backlog. Processamento médio Brasil: 1,4 anos (I-526E até green card condicional).",
          noteStyle: "gold",
        },
      },
      {
        kind: "list",
        value: {
          heading: "As três etapas",
          style: "numbered",
          items: [
            "I-526E — Petição do Investidor (5–36 meses): investimento comprovado, fonte lícita (source of funds), plano de 10 empregos, projeto qualificado.",
            "Green Card Condicional (2 anos) — ajuste de status ou consular após aprovação do I-526E.",
            "I-829 — Remoção de Condições: 90 dias antes do vencimento, demonstrar investimento mantido + 10 empregos criados. Resultado: green card permanente (10 anos, renovável).",
          ],
        },
      },
      {
        kind: "table",
        value: {
          heading: "Direct EB-5 vs Regional Center",
          headers: ["Item", "Direct EB-5", "Regional Center"],
          rows: [
            ["Controle do negócio", "Você", "Investidor passivo"],
            ["Empregos contam", "Apenas diretos", "Diretos + indiretos + induzidos"],
            ["Aprovação I-526 (setor)", "~25%", "Significativamente maior"],
            ["Risco operacional", "Você assume", "Distribuído"],
            ["Adequação", "Empresário operacional", "Investidor financeiro"],
          ],
          note:
            "Para a maioria dos investidores brasileiros, Regional Center (especialmente projetos Rural TEA) é o caminho mais eficiente — combina menor risco, processamento prioritário e maior taxa de aprovação.",
          noteStyle: "muted",
        },
      },
      {
        kind: "list",
        value: {
          heading: "Source of funds — o ponto crítico",
          intro:
            "USCIS exige documentação completa da origem lícita dos US$ 800 mil. Para brasileiros, pontos sensíveis:",
          style: "check",
          items: [
            "Câmbio e remessa dentro das regras do BACEN",
            "Comprovação de imposto pago sobre os recursos no Brasil",
            "Origem documentada: venda de empresa (contrato, DRE auditado), venda de imóvel (escritura, IR), salário (holerites, IR), herança (inventário, partilha)",
            "Rastreio bancário completo do Brasil até a escrow account nos EUA",
            "Esta é a etapa onde a maioria das petições EB-5 brasileiras é negada. Trabalhamos com contadores integrados desde o dia 1.",
          ],
        },
      },
      {
        kind: "table",
        value: {
          heading: "Custo total estimado",
          headers: ["Item", "Valor"],
          rows: [
            ["Investimento (TEA)", "US$ 800.000"],
            ["Taxa do projeto Regional Center", "US$ 50.000–80.000 (típico)"],
            ["Taxa USCIS I-526E", "varia"],
            ["Taxa USCIS I-485", "US$ 1.440/pessoa"],
            ["Honorários Pinho Law (EB-5 completo)", "US$ 25.000–45.000"],
          ],
        },
      },
    ],
    faqTitle: "Perguntas frequentes",
    faq: [
      {
        q: "Quanto tempo leva para um brasileiro tirar EB-5?",
        a: "Em 2026, brasileiros ficam em ~1,4 anos do I-526E ao green card condicional (fila CURRENT). Projetos rurais TEA têm I-526E em ~5 meses.",
      },
      {
        q: "Posso recuperar meu investimento depois?",
        a: "Sim, tipicamente 5–7 anos, dependendo do projeto. Após I-829 aprovado e período de sustentação, o capital pode ser devolvido conforme estrutura do projeto.",
      },
      {
        q: "Preciso morar perto do investimento?",
        a: "Não. Você pode morar em qualquer lugar dos EUA. A maioria escolhe Flórida, Califórnia ou Nova York independentemente de onde está o projeto.",
      },
      {
        q: "O que é TEA?",
        a: "Targeted Employment Area — área de alto desemprego ou rural designada por critérios federais. Permite investimento mínimo reduzido de US$ 800k vs US$ 1,05M padrão.",
      },
      {
        q: "I-526E vs I-526?",
        a: "Após o RIA (Reform and Integrity Act, 2022), investidores em Regional Centers usam I-526E. Investidores diretos continuam usando I-526. Taxas e prazos diferem.",
      },
      {
        q: "Meu cônjuge precisa de visto separado?",
        a: "Não. Cônjuge e filhos solteiros <21 recebem green card como derivados na mesma petição.",
      },
    ],
    relatedTitle: "Relacionado",
    related: [
      { label: "EB-2 NIW (sem investimento)", href: "/immigration/immigrant-visas/eb-2-niw" },
      { label: "E-2 (investimento menor, requer dupla cidadania)", href: "/immigration/non-immigrant-visas/e-2" },
      { label: "Calculadora FIRPTA (para imóveis no EB-5)", href: "/tools/firpta-calculator" },
    ],
  },
  en: {
    locale: "en",
    slug: SLUG,
    immigrationBreadcrumb: "Immigration",
    breadcrumbLabel: "EB-5",
    eyebrow: "Immigrant Visa",
    h1: "EB-5 — Investor Green Card",
    lede:
      "Brazilians are among the best-positioned EB-5 investors globally in 2026 — no backlog, 1.4-year average. Invest, create 10 US jobs, receive a green card.",
    stats: [
      { value: "$800K", label: "Minimum (Rural/TEA)" },
      { value: "1.4 yrs", label: "Brazil timeline" },
      { value: "CURRENT", label: "Brazil queue" },
      { value: "10 jobs", label: "Minimum created" },
    ],
    meta: {
      title: "EB-5 for Brazilians 2026 — $800K Investment | Pinho Law Orlando",
      description:
        "EB-5 for Brazilians: $800K (TEA/Rural) or $1.05M standard. Brazil no backlog, 1.4 yrs. Source of funds, Regional Center vs Direct, I-526E, I-829.",
    },
    sections: [
      {
        kind: "table",
        value: {
          heading: "EB-5 numbers in 2026",
          headers: ["Item", "TEA / Rural / Infrastructure", "Non-TEA"],
          rows: [
            ["Minimum investment", "$800,000", "$1,050,000"],
            ["Jobs required (US full-time)", "10", "10"],
            ["Reserved visa allocation", "Rural 20% / TEA 10% / Infra 2%", "Standard 68%"],
            ["I-526E processing (rural priority)", "~5 months", "24–36 months"],
          ],
          note:
            "Brazil: visa CURRENT, no backlog. Average Brazilian processing: 1.4 years (I-526E to conditional green card).",
          noteStyle: "gold",
        },
      },
      {
        kind: "list",
        value: {
          heading: "The three steps",
          style: "numbered",
          items: [
            "I-526E — Investor Petition (5–36 months): documented investment, lawful source of funds, 10-job plan, qualifying project.",
            "Conditional Green Card (2 years) — adjustment of status or consular after I-526E approval.",
            "I-829 — Removal of Conditions: 90 days before expiry, prove investment maintained + 10 jobs created. Result: permanent green card (10 years, renewable).",
          ],
        },
      },
      {
        kind: "table",
        value: {
          heading: "Direct EB-5 vs Regional Center",
          headers: ["Item", "Direct EB-5", "Regional Center"],
          rows: [
            ["Control of business", "You", "Passive investor"],
            ["Job counting", "Direct only", "Direct + indirect + induced"],
            ["I-526 approval rate (sector)", "~25%", "Significantly higher"],
            ["Operational risk", "You assume", "Distributed"],
            ["Best for", "Operating entrepreneur", "Financial investor"],
          ],
          note:
            "For most Brazilian investors, Regional Center (especially Rural TEA projects) is the most efficient route — lower risk, priority processing, higher approval rate.",
          noteStyle: "muted",
        },
      },
      {
        kind: "list",
        value: {
          heading: "Source of funds — the critical point",
          intro:
            "USCIS requires full documentation of the lawful origin of the $800K. For Brazilians, sensitive points:",
          style: "check",
          items: [
            "FX + remittance under Brazilian BACEN rules",
            "Proof of tax paid on the funds in Brazil",
            "Documented origin: business sale (contract, audited statements), real estate sale, salary, inheritance",
            "Complete bank trace from Brazil to US escrow account",
            "This is where most Brazilian EB-5 petitions are denied. We work with integrated accountants from day 1.",
          ],
        },
      },
      {
        kind: "table",
        value: {
          heading: "Estimated total cost",
          headers: ["Item", "Amount"],
          rows: [
            ["Investment (TEA)", "$800,000"],
            ["Regional Center admin fee", "$50,000–80,000 typical"],
            ["USCIS I-526E fee", "varies"],
            ["USCIS I-485 fee", "$1,440/person"],
            ["Pinho Law firm fees (full EB-5)", "$25,000–45,000"],
          ],
        },
      },
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      { q: "How long does EB-5 take for a Brazilian?", a: "In 2026, Brazilians average ~1.4 years from I-526E to conditional green card (CURRENT queue). Rural TEA I-526E runs ~5 months." },
      { q: "Can I recover my investment later?", a: "Yes, typically 5–7 years depending on the project. After I-829 approval and sustainment period, capital can be returned per project structure." },
      { q: "Do I need to live near the investment?", a: "No. You can live anywhere in the US. Most investors pick Florida, California, or New York regardless of project location." },
      { q: "What is a TEA?", a: "Targeted Employment Area — high-unemployment or rural area designated by federal criteria. Allows reduced $800K minimum vs $1.05M standard." },
      { q: "I-526E vs I-526?", a: "Post-RIA (Reform and Integrity Act, 2022), Regional Center investors use I-526E. Direct investors continue with I-526. Fees and timelines differ." },
      { q: "Does my spouse need a separate visa?", a: "No. Spouse and unmarried children under 21 get green card as derivatives on the same petition." },
    ],
    relatedTitle: "Related",
    related: [
      { label: "EB-2 NIW (no investment required)", href: "/immigration/immigrant-visas/eb-2-niw" },
      { label: "E-2 (smaller investment, requires dual citizenship)", href: "/immigration/non-immigrant-visas/e-2" },
      { label: "FIRPTA Calculator (for EB-5 real estate)", href: "/tools/firpta-calculator" },
    ],
  },
  es: {
    locale: "es",
    slug: SLUG,
    immigrationBreadcrumb: "Inmigración",
    breadcrumbLabel: "EB-5",
    eyebrow: "Visa de Inmigrante",
    h1: "EB-5 — Green Card por Inversión",
    lede:
      "Brasileños están entre los inversionistas mejor posicionados para EB-5 en 2026 — sin backlog, 1,4 años en promedio. Invierte, crea 10 empleos en EE.UU., recibe green card.",
    stats: [
      { value: "US$ 800K", label: "Mínimo (Rural/TEA)" },
      { value: "1,4 año", label: "Plazo Brasil" },
      { value: "CURRENT", label: "Fila Brasil" },
      { value: "10 empleos", label: "Creación mínima" },
    ],
    meta: {
      title: "EB-5 para Brasileños 2026 — Inversión US$ 800K | Pinho Law",
      description:
        "EB-5 para brasileños: US$ 800K (TEA/Rural) o US$ 1,05M estándar. Brasil sin backlog, 1,4 años.",
    },
    sections: [
      {
        kind: "table",
        value: {
          heading: "Números EB-5 en 2026",
          headers: ["Item", "TEA / Rural / Infraestructura", "No-TEA"],
          rows: [
            ["Inversión mínima", "US$ 800.000", "US$ 1.050.000"],
            ["Empleos requeridos (full-time EE.UU.)", "10", "10"],
            ["Asignación reservada", "Rural 20% / TEA 10% / Infra 2%", "Estándar 68%"],
            ["I-526E (rural prioritario)", "~5 meses", "24–36 meses"],
          ],
          note:
            "Brasil: visa CURRENT, sin backlog. Procesamiento medio Brasil: 1,4 años.",
          noteStyle: "gold",
        },
      },
      {
        kind: "list",
        value: {
          heading: "Las tres etapas",
          style: "numbered",
          items: [
            "I-526E — Petición del Inversor (5–36 meses): inversión documentada, origen lícito de fondos, plan de 10 empleos.",
            "Green Card Condicional (2 años) — ajuste de estatus o consular tras aprobación del I-526E.",
            "I-829 — Remoción de Condiciones: 90 días antes del vencimiento, demostrar inversión + 10 empleos. Resultado: green card permanente.",
          ],
        },
      },
      {
        kind: "table",
        value: {
          heading: "Direct EB-5 vs Regional Center",
          headers: ["Item", "Direct EB-5", "Regional Center"],
          rows: [
            ["Control del negocio", "Tú", "Inversor pasivo"],
            ["Conteo de empleos", "Solo directos", "Directos + indirectos + inducidos"],
            ["Aprobación I-526 (sector)", "~25%", "Significativamente mayor"],
            ["Adecuado para", "Empresario operativo", "Inversor financiero"],
          ],
          noteStyle: "muted",
          note: "Para la mayoría de inversores brasileños, Regional Center (Rural TEA) es la ruta más eficiente.",
        },
      },
      {
        kind: "list",
        value: {
          heading: "Source of funds — el punto crítico",
          intro: "USCIS exige documentación completa del origen lícito:",
          style: "check",
          items: [
            "FX y remesa bajo reglas del BACEN brasileño",
            "Comprobación de impuestos pagados en Brasil",
            "Origen documentado: venta de empresa, venta de inmueble, salario, herencia",
            "Rastreo bancario completo de Brasil a la cuenta escrow en EE.UU.",
          ],
        },
      },
      {
        kind: "table",
        value: {
          heading: "Costo total estimado",
          headers: ["Item", "Monto"],
          rows: [
            ["Inversión (TEA)", "US$ 800.000"],
            ["Tarifa Regional Center", "US$ 50–80K típico"],
            ["Tasa USCIS I-485", "US$ 1.440/persona"],
            ["Honorarios Pinho Law (EB-5 completo)", "US$ 25–45K"],
          ],
        },
      },
    ],
    faqTitle: "Preguntas frecuentes",
    faq: [
      { q: "¿Cuánto tarda el EB-5 para un brasileño?", a: "En 2026, ~1,4 años de I-526E a green card condicional. Rural TEA I-526E en ~5 meses." },
      { q: "¿Puedo recuperar mi inversión después?", a: "Sí, típicamente 5–7 años dependiendo del proyecto." },
      { q: "¿Debo vivir cerca de la inversión?", a: "No. Puedes vivir en cualquier parte de EE.UU." },
      { q: "¿Qué es un TEA?", a: "Targeted Employment Area — área de alto desempleo o rural. Permite mínimo reducido de US$ 800K." },
      { q: "I-526E vs I-526?", a: "Post-RIA (2022), Regional Center usa I-526E; directos siguen con I-526." },
      { q: "¿Mi cónyuge necesita visa separada?", a: "No. Cónyuge e hijos solteros <21 reciben green card como derivados." },
    ],
    relatedTitle: "Relacionado",
    related: [
      { label: "EB-2 NIW (sin inversión)", href: "/immigration/immigrant-visas/eb-2-niw" },
      { label: "E-2 (inversión menor, requiere doble ciudadanía)", href: "/immigration/non-immigrant-visas/e-2" },
      { label: "Calculadora FIRPTA", href: "/tools/firpta-calculator" },
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
