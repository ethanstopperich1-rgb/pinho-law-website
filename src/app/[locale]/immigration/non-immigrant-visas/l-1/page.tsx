import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import {
  ServicePageTemplate,
  type ServicePageContent,
  type L,
} from "@/components/service/ServicePageTemplate";
import type { Locale } from "@/i18n/routing";

const SLUG = "immigration/non-immigrant-visas/l-1";

// Copy from website/content/spec-parts-2-5.md §L-1.
const DATA: Record<L, ServicePageContent> = {
  pt: {
    locale: "pt",
    slug: SLUG,
    immigrationBreadcrumb: "Imigração",
    breadcrumbLabel: "L-1",
    eyebrow: "Visto Não-Imigrante",
    h1: "Visto L-1 — Transferência Intra-Empresa",
    lede:
      "O caminho mais estratégico para o empresário brasileiro SEM dupla cidadania que quer green card. L-1A → EB-1C é direto, sem PERM, com Brasil CURRENT em 2026.",
    stats: [
      { value: "7 anos", label: "L-1A máximo" },
      { value: "1 ano+", label: "Empresa BR exigida" },
      { value: "CURRENT", label: "Fila EB-1C Brasil" },
      { value: "18–36mo", label: "L-1A → green card" },
    ],
    meta: {
      title: "Visto L-1 para Brasileiros 2026 — L-1A + EB-1C | Pinho Law",
      description:
        "L-1A e L-1B: transferência de executivos, gerentes e especialistas de empresa brasileira para filial americana. Rota L-1A → EB-1C.",
    },
    sections: [
      {
        kind: "table",
        value: {
          heading: "L-1A vs L-1B",
          headers: ["Item", "L-1A (Executivo/Gerente)", "L-1B (Especializado)"],
          rows: [
            ["Período máximo total", "7 anos", "5 anos"],
            ["Conversão a green card", "EB-1C (sem PERM)", "EB-2/EB-3 (com PERM)"],
            ["Prazo típico até green card", "18–36 meses", "24–48 meses"],
            ["Critério", "Função executiva ou gerencial", "Conhecimento proprietário"],
          ],
          note: "Para empresários donos do negócio: quase sempre L-1A.",
          noteStyle: "gold",
        },
      },
      {
        kind: "list",
        value: {
          heading: "Requisitos para a empresa",
          style: "check",
          items: [
            "Empresa no Brasil com 1+ ano de operação contínua e genuína",
            "Empresa nos EUA (pode ser nova — new office L-1) com relação qualificada",
            "Beneficiário trabalhou na empresa do Brasil em função executiva/gerencial/especializada por 1 dos últimos 3 anos",
            "Empresa americana terá função real, espaço físico, plano de negócios sólido",
          ],
        },
      },
      {
        kind: "list",
        value: {
          heading: "New Office L-1 — para abrir do zero",
          intro:
            "Se sua empresa americana ainda não existe, você pode aplicar como New Office L-1. Aprovação inicial por 1 ano (não 3). Após esse ano, demonstrar operação real, equipe, faturamento → estende por mais 2–3 anos. Pontos críticos:",
          style: "check",
          items: [
            "Plano de negócios com projeções de 3 anos",
            "Espaço físico contratado (lease assinado)",
            "Capital adequado depositado em conta americana",
            "Plano de contratação de funcionários americanos",
            "Estrutura societária clara",
          ],
        },
      },
      {
        kind: "prose",
        heading: "L-1A → EB-1C: a rota estratégica para green card",
        body:
          "A maioria dos detentores de L-1A protocola EB-1C 6-12 meses após a aprovação do L-1A, depois que a operação americana tem rastro real. EB-1C não exige PERM — economiza 12–18 meses comparado a outras rotas. Brasileiros não enfrentam backlog na fila do EB-1, então a data de prioridade fica CURRENT logo após I-140. Timeline típica: L-1A aprovado em 2–4 meses → operação rodando 0–6 meses → filing EB-1C I-140 meses 6–12 → I-140 aprovado 6–12 meses → I-485 ou consular 6–18 meses. Total: 18–36 meses do L-1A ao green card permanente.",
      },
      {
        kind: "table",
        value: {
          heading: "Custo",
          headers: ["Item", "Valor"],
          rows: [
            ["Taxa USCIS I-129 (L-1)", "varia"],
            ["Premium Processing I-129", "US$ 2.965"],
            ["Taxa USCIS I-140 (EB-1C)", "US$ 715 + US$ 600 APF"],
            ["Premium Processing I-140", "US$ 2.965"],
            ["Taxa USCIS I-485", "US$ 1.440/pessoa"],
            ["Honorários L-1 (petição completa)", "US$ 6.500–9.500"],
            ["Honorários EB-1C (conversão)", "US$ 8.500–13.500"],
            ["Pacote integrado L-1A + EB-1C", "desconto vs separados"],
          ],
        },
      },
      {
        kind: "prose",
        heading: "Por que L-1 com Pinho Law",
        body:
          "A Dra. Izi Pinho publicou na Stetson Law Review sobre estruturas societárias na Flórida — artigo citado pelo Harvard Law School Forum on Corporate Governance. Para empresários brasileiros, isto significa que sua estrutura empresarial nos EUA é desenhada por um escritório com profundidade técnica acadêmica comprovada em direito societário americano — não apenas imigração. L-1 ruim falha porque a empresa nos EUA é mal estruturada. Estruturamos os dois ao mesmo tempo.",
      },
    ],
    faqTitle: "Perguntas frequentes",
    faq: [
      { q: "Brasileiro precisa de dupla cidadania para L-1?", a: "Não. L-1 não exige tratado bilateral. Qualquer brasileiro com empresa qualificada no Brasil e estrutura nos EUA pode aplicar." },
      { q: "Por quanto tempo posso ficar nos EUA com L-1?", a: "L-1A: até 7 anos. L-1B: até 5 anos. Aprovação inicial geralmente 3 anos (1 ano para new office), com extensões." },
      { q: "Posso trazer minha família?", a: "Sim. Cônjuge e filhos solteiros <21 recebem L-2. Cônjuges L-2 recebem autorização de trabalho automaticamente." },
      { q: "Quando devo protocolar EB-1C?", a: "6–12 meses após L-1A aprovado, com operação americana com rastro real. Para new office L-1, espere até depois da primeira extensão." },
      { q: "E se minha empresa no Brasil tiver menos de 1 ano?", a: "L-1 não qualifica. Alternativas: E-2 (com dupla cidadania país tratado), EB-5 (se tiver capital), ou aguardar a empresa brasileira completar 1 ano." },
      { q: "Preciso de plano de negócios para L-1?", a: "Para new office L-1, sim, exigência prática. Para L-1 em filial existente, ajuda muito mas não é estritamente exigido." },
    ],
    relatedTitle: "Relacionado",
    related: [
      { label: "E-2 (dupla cidadania país tratado)", href: "/immigration/non-immigrant-visas/e-2" },
      { label: "EB-5 (investimento direto)", href: "/immigration/immigrant-visas/eb-5" },
      { label: "Abrir LLC na Flórida", href: "/business/llc-formation" },
    ],
  },
  en: {
    locale: "en",
    slug: SLUG,
    immigrationBreadcrumb: "Immigration",
    breadcrumbLabel: "L-1",
    eyebrow: "Non-Immigrant Visa",
    h1: "L-1 — Intracompany Transfer",
    lede:
      "The most strategic route for Brazilian founders WITHOUT dual citizenship who want a green card. L-1A → EB-1C is direct, no PERM, with Brazil queue CURRENT in 2026.",
    stats: [
      { value: "7 yrs", label: "L-1A max" },
      { value: "1+ yr", label: "Brazil company req'd" },
      { value: "CURRENT", label: "Brazil EB-1C queue" },
      { value: "18–36mo", label: "L-1A → green card" },
    ],
    meta: {
      title: "L-1 Visa for Brazilians 2026 — L-1A + EB-1C Path | Pinho Law",
      description:
        "L-1A and L-1B: transfer executives, managers, and specialized employees from a Brazilian company to a US branch. Direct L-1A → EB-1C path.",
    },
    sections: [
      {
        kind: "table",
        value: {
          heading: "L-1A vs L-1B",
          headers: ["Item", "L-1A (Exec/Manager)", "L-1B (Specialized)"],
          rows: [
            ["Max total stay", "7 years", "5 years"],
            ["Green-card conversion", "EB-1C (no PERM)", "EB-2/EB-3 (with PERM)"],
            ["Typical timeline to GC", "18–36 months", "24–48 months"],
            ["Criterion", "Executive or managerial", "Proprietary knowledge"],
          ],
          note: "For owner-operators: almost always L-1A.",
          noteStyle: "gold",
        },
      },
      {
        kind: "list",
        value: {
          heading: "Company requirements",
          style: "check",
          items: [
            "Brazilian company with 1+ year of continuous genuine operation",
            "US company (can be new — new-office L-1) with qualifying relationship",
            "Beneficiary worked at the Brazilian entity in exec/manager/specialized role 1 of the last 3 years",
            "US company will have real function, physical space, robust business plan",
          ],
        },
      },
      {
        kind: "list",
        value: {
          heading: "New Office L-1 — opening from scratch",
          intro:
            "If your US company doesn't exist yet, apply as New Office L-1. Initial approval only 1 year (not 3). After that year, demonstrate real operation, team, revenue → extend 2–3 years. Critical points:",
          style: "check",
          items: [
            "Business plan with 3-year projections",
            "Physical space (signed lease)",
            "Adequate capital in a US account",
            "Plan to hire US employees",
            "Clear corporate structure",
          ],
        },
      },
      {
        kind: "prose",
        heading: "L-1A → EB-1C: the strategic green-card route",
        body:
          "Most L-1A holders file EB-1C 6–12 months after L-1A approval, once the US operation has real traction. EB-1C doesn't require PERM — saves 12–18 months vs other routes. Brazilians have no EB-1 backlog, so priority date is CURRENT right after I-140. Typical timeline: L-1A approved months 0–2 → operation running 0–6 months → EB-1C I-140 months 6–12 → I-140 approved 6–12 months → I-485 or consular 6–18 months. Total: 18–36 months from L-1A to permanent green card.",
      },
      {
        kind: "table",
        value: {
          heading: "Cost",
          headers: ["Item", "Amount"],
          rows: [
            ["USCIS I-129 fee (L-1)", "varies"],
            ["Premium Processing I-129", "$2,965"],
            ["USCIS I-140 (EB-1C)", "$715 + $600 APF"],
            ["Premium Processing I-140", "$2,965"],
            ["USCIS I-485", "$1,440/person"],
            ["L-1 firm fees", "$6,500–9,500"],
            ["EB-1C firm fees (conversion)", "$8,500–13,500"],
            ["Integrated L-1A + EB-1C package", "discounted vs separate"],
          ],
        },
      },
      {
        kind: "prose",
        heading: "Why L-1 with Pinho Law",
        body:
          "Dra. Izi Pinho published in the Stetson Law Review on Florida corporate structures — article cited by Harvard Law School Forum on Corporate Governance. For Brazilian founders, this means your US corporate structure is designed by a firm with documented academic depth in American business law — not just immigration. Bad L-1 cases fail because the US entity is poorly structured. We structure both at the same time.",
      },
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      { q: "Does a Brazilian need dual citizenship for L-1?", a: "No. L-1 doesn't require a bilateral treaty. Any Brazilian with a qualifying Brazilian company and US structure can apply." },
      { q: "How long can I stay in the US on L-1?", a: "L-1A: up to 7 years. L-1B: up to 5 years. Initial approval typically 3 years (1 year for new office), with extensions." },
      { q: "Can I bring my family?", a: "Yes. Spouse and unmarried children under 21 get L-2. L-2 spouses receive automatic work authorization." },
      { q: "When should I file EB-1C?", a: "6–12 months after L-1A approval, once US operation has real traction. For new-office L-1, wait until after the first extension." },
      { q: "What if my Brazilian company has less than 1 year?", a: "L-1 doesn't qualify. Alternatives: E-2 (with treaty-country dual citizenship), EB-5 (if you have capital), or wait until Brazilian company hits 1 year." },
      { q: "Do I need a business plan for L-1?", a: "For new-office L-1, yes — a practical requirement. For L-1 at existing branch, strongly helpful but not strictly required." },
    ],
    relatedTitle: "Related",
    related: [
      { label: "E-2 (dual-citizenship treaty country)", href: "/immigration/non-immigrant-visas/e-2" },
      { label: "EB-5 (direct investment)", href: "/immigration/immigrant-visas/eb-5" },
      { label: "Form Florida LLC", href: "/business/llc-formation" },
    ],
  },
  es: {
    locale: "es",
    slug: SLUG,
    immigrationBreadcrumb: "Inmigración",
    breadcrumbLabel: "L-1",
    eyebrow: "Visa No Inmigrante",
    h1: "Visa L-1 — Transferencia Intraempresa",
    lede:
      "La ruta más estratégica para el empresario brasileño SIN doble ciudadanía que quiere green card. L-1A → EB-1C es directo, sin PERM, Brasil CURRENT en 2026.",
    stats: [
      { value: "7 años", label: "L-1A máximo" },
      { value: "1+ año", label: "Empresa BR requerida" },
      { value: "CURRENT", label: "Fila EB-1C Brasil" },
      { value: "18–36m", label: "L-1A → green card" },
    ],
    meta: {
      title: "Visa L-1 para Brasileños 2026 — L-1A + EB-1C | Pinho Law",
      description:
        "L-1A y L-1B: transferencia intraempresa a filial estadounidense. Ruta L-1A → EB-1C sin PERM.",
    },
    sections: [
      {
        kind: "table",
        value: {
          heading: "L-1A vs L-1B",
          headers: ["Item", "L-1A (Ejecutivo/Gerente)", "L-1B (Especializado)"],
          rows: [
            ["Estadía máxima total", "7 años", "5 años"],
            ["Conversión a green card", "EB-1C (sin PERM)", "EB-2/EB-3 (con PERM)"],
            ["Plazo típico a green card", "18–36 meses", "24–48 meses"],
          ],
          note: "Para dueños del negocio: casi siempre L-1A.",
          noteStyle: "gold",
        },
      },
      {
        kind: "list",
        value: {
          heading: "Requisitos para la empresa",
          style: "check",
          items: [
            "Empresa en Brasil con 1+ año de operación genuina",
            "Empresa en EE.UU. (puede ser nueva — new-office L-1)",
            "Beneficiario trabajó en la entidad brasileña en rol exec/gerente/especializado 1 de los últimos 3 años",
            "Empresa estadounidense tendrá función real, espacio físico, plan de negocios",
          ],
        },
      },
      {
        kind: "prose",
        heading: "L-1A → EB-1C: la ruta estratégica al green card",
        body:
          "La mayoría de titulares de L-1A peticiona EB-1C 6–12 meses tras la aprobación del L-1A. EB-1C no requiere PERM. Brasileños sin backlog en EB-1. Total: 18–36 meses del L-1A al green card permanente.",
      },
      {
        kind: "table",
        value: {
          heading: "Costo",
          headers: ["Item", "Monto"],
          rows: [
            ["Tasa USCIS I-129 (L-1)", "varía"],
            ["Premium Processing", "US$ 2.965"],
            ["Tasa USCIS I-140 (EB-1C)", "US$ 715 + US$ 600 APF"],
            ["Tasa USCIS I-485", "US$ 1.440/persona"],
            ["Honorarios L-1 Pinho Law", "US$ 6.500–9.500"],
            ["Honorarios EB-1C (conversión)", "US$ 8.500–13.500"],
          ],
        },
      },
    ],
    faqTitle: "Preguntas frecuentes",
    faq: [
      { q: "¿Un brasileño necesita doble ciudadanía para L-1?", a: "No. L-1 no exige tratado bilateral." },
      { q: "¿Cuánto tiempo puedo quedarme con L-1?", a: "L-1A: hasta 7 años. L-1B: hasta 5 años." },
      { q: "¿Puedo traer a mi familia?", a: "Sí. Cónyuge e hijos solteros <21 reciben L-2. Cónyuges L-2 reciben autorización de trabajo automática." },
      { q: "¿Cuándo debo peticionar EB-1C?", a: "6–12 meses tras aprobación del L-1A, con operación con trayectoria real." },
      { q: "¿Y si mi empresa brasileña tiene menos de 1 año?", a: "L-1 no califica. Alternativas: E-2, EB-5, o esperar a que la empresa cumpla 1 año." },
    ],
    relatedTitle: "Relacionado",
    related: [
      { label: "E-2 (doble ciudadanía país tratado)", href: "/immigration/non-immigrant-visas/e-2" },
      { label: "EB-5 (inversión directa)", href: "/immigration/immigrant-visas/eb-5" },
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
