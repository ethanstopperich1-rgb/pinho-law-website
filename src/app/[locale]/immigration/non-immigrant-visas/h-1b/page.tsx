import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import {
  ServicePageTemplate,
  type ServicePageContent,
  type L,
} from "@/components/service/ServicePageTemplate";
import type { Locale } from "@/i18n/routing";

const SLUG = "immigration/non-immigrant-visas/h-1b";

const DATA: Record<L, ServicePageContent> = {
  pt: {
    locale: "pt",
    slug: SLUG,
    immigrationBreadcrumb: "Imigração",
    breadcrumbLabel: "H-1B",
    eyebrow: "Visto Não-Imigrante",
    h1: "Visto H-1B — Ocupação Especializada (2026)",
    lede:
      "H-1B em 2026 é um cenário difícil: taxa de US$ 100 mil para empregadores, seleção ponderada por salário, odds ~25–35% na loteria. Para brasileiros qualificados, o O-1A é frequentemente o melhor substituto — sem cap, sem loteria.",
    stats: [
      { value: "US$ 100K", label: "Taxa 2026 (empregador)" },
      { value: "25–35%", label: "Odds loteria" },
      { value: "65K + 20K", label: "Cap anual" },
      { value: "6 anos", label: "Máximo (3+3)" },
    ],
    meta: {
      title: "Visto H-1B 2026 para Brasileiros — Taxa $100K, Loteria | Pinho Law",
      description:
        "H-1B em 2026: US$ 100 mil em taxa empregador, seleção ponderada por salário, cap 65K + 20K master's. Alternativa: O-1A (sem cap, sem loteria).",
    },
    sections: [
      {
        kind: "callout",
        value: {
          tone: "alert",
          badgeLabel: "Política 2026",
          heading: "O que mudou no H-1B em 2026",
          body:
            "A administração Trump anunciou em setembro 2025 uma taxa de US$ 100.000 para empregadores de H-1B, além de seleção ponderada por salário (favorece candidatos com salários mais altos). Isso efetivamente fecha o H-1B para a maioria dos empregadores, especialmente startups e empresas menores.",
          recLabel: "Recomendação",
          rec:
            "Brasileiros qualificados devem considerar O-1A como primária: sem cap, sem loteria, aprovação em 45 dias úteis com Premium Processing. Para empresários: L-1A (se tiver empresa no Brasil) ou EB-2 NIW (se perfil justificar).",
        },
      },
      {
        kind: "list",
        value: {
          heading: "Requisitos H-1B",
          style: "check",
          items: [
            "Oferta de emprego de empregador americano disposto a patrocinar",
            "Cargo em \"ocupação especializada\" (exige bacharelado ou superior na área)",
            "Bacharelado (ou equivalente) na área específica do cargo",
            "Empregador passa pelo processo LCA (Labor Condition Application) no DOL",
            "Petição selecionada na loteria anual (odds ~25–35%)",
          ],
        },
      },
      {
        kind: "list",
        value: {
          heading: "Timeline anual H-1B",
          style: "numbered",
          items: [
            "Março: inscrição na loteria (registration period)",
            "Março/Abril: seleção aleatória — empregador notificado",
            "Abril 1: janela de protocolo de petição abre (para selecionados)",
            "Junho 30: janela fecha",
            "Outubro 1: início do ano fiscal federal — beneficiário pode começar a trabalhar",
          ],
        },
      },
      {
        kind: "prose",
        heading: "Alternativas ao H-1B para brasileiros qualificados",
        body:
          "Dada a combinação taxa $100K + loteria em 2026, brasileiros qualificados devem considerar: (1) O-1A — habilidade extraordinária, sem cap, auto-petição via agente; (2) L-1A — se tem empresa no Brasil com 1+ ano de operação; (3) EB-2 NIW — green card direto sem patrocinador; (4) TN — apenas se tiver dupla cidadania canadense ou mexicana; (5) J-1 ou F-1 OPT — caminhos alternativos para fase inicial nos EUA.",
      },
    ],
    faqTitle: "Perguntas frequentes",
    faq: [
      { q: "Brasileiro qualifica para H-1B?", a: "Sim, se tem bacharelado na área do cargo e empregador americano disposto a patrocinar + arcar com a taxa de US$ 100 mil em 2026." },
      { q: "Qual a chance real de ser selecionado na loteria?", a: "Em 2025, odds ficaram em ~25% para não-mestres, ~35% para mestres. Em 2026, com seleção ponderada por salário, candidatos com salários mais altos têm vantagem." },
      { q: "Posso passar de F-1 (estudante) para H-1B?", a: "Sim, é rota comum. OPT após graduação (12 meses) + STEM OPT (24 meses adicionais) dá janela de 3 anos para ser selecionado." },
      { q: "H-1B tem visto para família?", a: "Sim. Cônjuge recebe H-4. Cônjuges H-4 podem trabalhar apenas se o H-1B holder já tiver I-140 aprovado (caminho para green card)." },
      { q: "H-1B leva a green card?", a: "Sim, via patrocínio do empregador: EB-2 ou EB-3 com PERM, ou EB-1 se qualificar. Processo longo (3–5 anos tipicamente)." },
      { q: "Por que O-1A pode ser melhor que H-1B para brasileiros?", a: "O-1A: sem cap, sem loteria, aprovação rápida, pode ser auto-petitionada via agente. H-1B: taxa $100K, loteria, restrito a empregador patrocinador. Para quem atende critérios de O-1A, é significativamente superior." },
    ],
    relatedTitle: "Relacionado",
    related: [
      { label: "O-1A (alternativa sem cap)", href: "/immigration/non-immigrant-visas/o-1" },
      { label: "L-1A (se tem empresa no Brasil)", href: "/immigration/non-immigrant-visas/l-1" },
      { label: "EB-2 NIW (green card direto)", href: "/immigration/immigrant-visas/eb-2-niw" },
    ],
  },
  en: {
    locale: "en",
    slug: SLUG,
    immigrationBreadcrumb: "Immigration",
    breadcrumbLabel: "H-1B",
    eyebrow: "Non-Immigrant Visa",
    h1: "H-1B Visa — Specialty Occupation (2026)",
    lede:
      "H-1B in 2026 is tough: $100K employer fee, wage-weighted selection, ~25–35% lottery odds. For qualified Brazilians, O-1A is often the better substitute — no cap, no lottery.",
    stats: [
      { value: "$100K", label: "2026 fee (employer)" },
      { value: "25–35%", label: "Lottery odds" },
      { value: "65K + 20K", label: "Annual cap" },
      { value: "6 yrs", label: "Max (3+3)" },
    ],
    meta: {
      title: "H-1B Visa 2026 for Brazilians — $100K Fee, Lottery | Pinho Law",
      description:
        "H-1B in 2026: $100K employer fee, wage-weighted selection, 65K + 20K master's cap. Alternative: O-1A (no cap, no lottery).",
    },
    sections: [
      {
        kind: "callout",
        value: {
          tone: "alert",
          badgeLabel: "2026 Policy",
          heading: "What changed in H-1B in 2026",
          body:
            "The Trump administration announced a $100,000 employer fee for H-1B in September 2025, plus wage-weighted selection (favoring higher-paid candidates). This effectively closes H-1B for most employers, especially startups and smaller companies.",
          recLabel: "Recommendation",
          rec:
            "Qualified Brazilians should consider O-1A as primary: no cap, no lottery, 45-business-day approval with Premium Processing. For entrepreneurs: L-1A (if you have a Brazilian company) or EB-2 NIW (if profile qualifies).",
        },
      },
      {
        kind: "list",
        value: {
          heading: "H-1B requirements",
          style: "check",
          items: [
            "Job offer from US employer willing to sponsor",
            "Role in \"specialty occupation\" (requires bachelor's or higher in the field)",
            "Bachelor's (or equivalent) in the specific field of the role",
            "Employer clears LCA (Labor Condition Application) with DOL",
            "Petition selected in the annual lottery (~25–35% odds)",
          ],
        },
      },
      {
        kind: "list",
        value: {
          heading: "Annual H-1B timeline",
          style: "numbered",
          items: [
            "March: lottery registration period",
            "March/April: random selection — employer notified",
            "April 1: petition filing window opens (for selected)",
            "June 30: window closes",
            "October 1: federal fiscal-year start — beneficiary may begin work",
          ],
        },
      },
      {
        kind: "prose",
        heading: "H-1B alternatives for qualified Brazilians",
        body:
          "Given the 2026 combo ($100K fee + lottery), qualified Brazilians should consider: (1) O-1A — extraordinary ability, no cap, self-petition via agent; (2) L-1A — if you have a Brazilian company with 1+ year operation; (3) EB-2 NIW — direct green card, no sponsor; (4) TN — only with Canadian/Mexican dual citizenship; (5) J-1 or F-1 OPT — alternative entry paths.",
      },
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      { q: "Do Brazilians qualify for H-1B?", a: "Yes, if you have a bachelor's in the field of the role and a US employer willing to sponsor + cover the 2026 $100K fee." },
      { q: "What are the real lottery odds?", a: "In 2025, ~25% for non-masters, ~35% for masters. In 2026, wage-weighted selection favors higher-salaried candidates." },
      { q: "Can I go from F-1 (student) to H-1B?", a: "Yes, common route. Post-graduation OPT (12 months) + STEM OPT (24 additional months) gives a 3-year window for selection." },
      { q: "Does H-1B have a family visa?", a: "Yes. Spouse gets H-4. H-4 spouses can work only if the H-1B holder has approved I-140 (green-card path in progress)." },
      { q: "Does H-1B lead to a green card?", a: "Yes, via employer sponsorship: EB-2 or EB-3 with PERM, or EB-1 if qualifying. Long process (3–5 years typical)." },
      { q: "Why might O-1A be better than H-1B for Brazilians?", a: "O-1A: no cap, no lottery, fast approval, can self-petition via agent. H-1B: $100K fee, lottery, sponsor-tied. For those who meet O-1A criteria, it's significantly superior." },
    ],
    relatedTitle: "Related",
    related: [
      { label: "O-1A (no-cap alternative)", href: "/immigration/non-immigrant-visas/o-1" },
      { label: "L-1A (if you have a Brazilian company)", href: "/immigration/non-immigrant-visas/l-1" },
      { label: "EB-2 NIW (direct green card)", href: "/immigration/immigrant-visas/eb-2-niw" },
    ],
  },
  es: {
    locale: "es",
    slug: SLUG,
    immigrationBreadcrumb: "Inmigración",
    breadcrumbLabel: "H-1B",
    eyebrow: "Visa No Inmigrante",
    h1: "Visa H-1B — Ocupación Especializada (2026)",
    lede:
      "H-1B en 2026 es escenario difícil: tarifa de US$ 100K para empleadores, selección ponderada por salario, lotería ~25–35%. Para brasileños calificados, O-1A suele ser el mejor sustituto.",
    stats: [
      { value: "US$ 100K", label: "Tarifa 2026 (empleador)" },
      { value: "25–35%", label: "Probabilidad lotería" },
      { value: "65K + 20K", label: "Cap anual" },
      { value: "6 años", label: "Máximo" },
    ],
    meta: {
      title: "Visa H-1B 2026 para Brasileños — Tarifa $100K, Lotería | Pinho Law",
      description:
        "H-1B en 2026: tarifa US$ 100K empleador, selección ponderada por salario. Alternativa: O-1A (sin cupo, sin lotería).",
    },
    sections: [
      {
        kind: "callout",
        value: {
          tone: "alert",
          badgeLabel: "Política 2026",
          heading: "Qué cambió en H-1B en 2026",
          body:
            "Tarifa de US$ 100.000 para empleadores, selección ponderada por salario. Efectivamente cierra H-1B para la mayoría de empleadores.",
          recLabel: "Recomendación",
          rec: "Brasileños calificados deben considerar O-1A primero: sin cupo, sin lotería.",
        },
      },
      {
        kind: "list",
        value: {
          heading: "Requisitos H-1B",
          style: "check",
          items: [
            "Oferta de empleo de empleador estadounidense dispuesto a patrocinar",
            "Rol en ocupación especializada (requiere bachiller o superior)",
            "Bachiller en campo específico",
            "LCA aprobada por DOL",
            "Selección en lotería anual",
          ],
        },
      },
      {
        kind: "prose",
        heading: "Alternativas para brasileños",
        body:
          "O-1A (sin cupo), L-1A (empresa en Brasil), EB-2 NIW (green card directo), TN (solo con doble ciudadanía CA/MX).",
      },
    ],
    faqTitle: "Preguntas frecuentes",
    faq: [
      { q: "¿Brasileños califican para H-1B?", a: "Sí, con bachiller en el campo y empleador dispuesto a patrocinar + pagar US$ 100K." },
      { q: "¿Cuál es la probabilidad real de la lotería?", a: "2025: ~25% no-masters, ~35% masters. 2026: selección ponderada por salario." },
      { q: "¿H-1B lleva a green card?", a: "Sí, vía EB-2/EB-3 con PERM, o EB-1. 3–5 años típicamente." },
      { q: "¿Por qué O-1A puede ser mejor?", a: "Sin cupo, sin lotería, auto-petición vía agente." },
    ],
    relatedTitle: "Relacionado",
    related: [
      { label: "O-1A (alternativa sin cupo)", href: "/immigration/non-immigrant-visas/o-1" },
      { label: "L-1A", href: "/immigration/non-immigrant-visas/l-1" },
      { label: "EB-2 NIW", href: "/immigration/immigrant-visas/eb-2-niw" },
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
