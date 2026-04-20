// Visa Decision Engine — decision tree data.
// Authoritative structure; full branch logic per spec-parts-8-9.md §Step 3.
// Results object is the source of truth for Step 4 result card content.
// Components consume these as typed constants — no free-form rewrites.

import type { Intent, Question, VisaResult } from "./types";

/** Step 2 card grid — locale-aware icons + labels. */
export const INTENT_CARDS: Array<{
  intent: Intent;
  icon: string;
  label: { pt: string; en: string; es: string };
}> = [
  {
    intent: "PERMANENT_RESIDENCE",
    icon: "🌎",
    label: {
      pt: "Morar permanentemente",
      en: "Live permanently in the US",
      es: "Vivir permanentemente en EE.UU.",
    },
  },
  {
    intent: "WORK_VISA",
    icon: "💼",
    label: {
      pt: "Trabalhar nos EUA",
      en: "Work in the US",
      es: "Trabajar en EE.UU.",
    },
  },
  {
    intent: "MARRIAGE",
    icon: "💑",
    label: {
      pt: "Casar com americano(a)",
      en: "Marry a US citizen",
      es: "Casarme con estadounidense",
    },
  },
  {
    intent: "BUSINESS_EXPANSION",
    icon: "🏢",
    label: {
      pt: "Expandir meu negócio",
      en: "Expand my business",
      es: "Expandir mi negocio",
    },
  },
  {
    intent: "INVESTMENT",
    icon: "💰",
    label: {
      pt: "Investir nos EUA",
      en: "Invest in the US",
      es: "Invertir en EE.UU.",
    },
  },
  {
    intent: "STUDENT",
    icon: "🎓",
    label: {
      pt: "Estudar nos EUA",
      en: "Study in the US",
      es: "Estudiar en EE.UU.",
    },
  },
];

/**
 * Results keyed by id. Each key maps to a visa or an outcome (e.g. "consult").
 * Full copy from the master spec. Service pages are the canonical EN slugs.
 */
export const RESULTS: Record<string, VisaResult> = {
  "eb-2-niw": {
    id: "eb-2-niw",
    visaCode: "EB-2 NIW",
    titles: {
      pt: "EB-2 NIW — National Interest Waiver",
      en: "EB-2 NIW — National Interest Waiver",
      es: "EB-2 NIW — Exención de Interés Nacional",
    },
    reasons: {
      pt: [
        "Sem oferta de emprego necessária",
        "Sem patrocinador necessário",
        "Sem loteria",
        "Brasileiros: fila atual CURRENT em 2026",
        "Premium Processing disponível",
      ],
      en: [
        "No job offer required",
        "No sponsor required",
        "No lottery",
        "Brazilians: priority date CURRENT in 2026",
        "Premium Processing available",
      ],
      es: [
        "No requiere oferta de empleo",
        "No requiere patrocinador",
        "Sin lotería",
        "Brasileños: fecha de prioridad CURRENT en 2026",
        "Premium Processing disponible",
      ],
    },
    timeline: {
      pt: "8–14 meses com Premium Processing",
      en: "8–14 months with Premium Processing",
      es: "8–14 meses con Premium Processing",
    },
    complexity: "high",
    servicePage: "/immigration/immigrant-visas/eb-2-niw",
    badgeColor: "bg-gold text-ink",
  },
  "eb-1a": {
    id: "eb-1a",
    visaCode: "EB-1A",
    titles: {
      pt: "EB-1A — Habilidade Extraordinária",
      en: "EB-1A — Extraordinary Ability",
      es: "EB-1A — Habilidad Extraordinaria",
    },
    reasons: {
      pt: [
        "Auto-petição — sem patrocinador",
        "Sem PERM — processo mais rápido",
        "Brasileiros: fila atual CURRENT",
        "Premium Processing disponível",
      ],
      en: [
        "Self-petition — no sponsor needed",
        "No PERM — faster process",
        "Brazilians: priority date CURRENT",
        "Premium Processing available",
      ],
      es: [
        "Auto-petición — sin patrocinador",
        "Sin PERM — proceso más rápido",
        "Brasileños: fecha de prioridad CURRENT",
        "Premium Processing disponible",
      ],
    },
    timeline: {
      pt: "10–16 meses",
      en: "10–16 months",
      es: "10–16 meses",
    },
    complexity: "high",
    servicePage: "/immigration/immigrant-visas/eb-1",
    badgeColor: "bg-gold text-ink",
  },
  "eb-3": {
    id: "eb-3",
    visaCode: "EB-3",
    titles: {
      pt: "EB-3 — Trabalhador Qualificado (com PERM)",
      en: "EB-3 — Skilled Worker (requires PERM)",
      es: "EB-3 — Trabajador Calificado (requiere PERM)",
    },
    reasons: {
      pt: [
        "Requer oferta de emprego + PERM",
        "Processo longo — 2 a 5 anos totais",
        "Vínculo com o empregador patrocinador",
      ],
      en: [
        "Requires job offer + PERM labor certification",
        "Long process — 2 to 5 years total",
        "Tied to sponsoring employer",
      ],
      es: [
        "Requiere oferta de empleo + PERM",
        "Proceso largo — 2 a 5 años en total",
        "Vinculado al empleador patrocinador",
      ],
    },
    timeline: {
      pt: "24–60 meses",
      en: "24–60 months",
      es: "24–60 meses",
    },
    complexity: "high",
    servicePage: "/immigration/immigrant-visas/eb-3",
    badgeColor: "bg-slate text-white",
  },
  "eb-5": {
    id: "eb-5",
    visaCode: "EB-5",
    titles: {
      pt: "EB-5 — Green Card por Investimento",
      en: "EB-5 — Investor Green Card",
      es: "EB-5 — Green Card por Inversión",
    },
    reasons: {
      pt: [
        "US$ 800k (Rural/TEA) ou US$ 1,05M (padrão)",
        "Brasileiros: fila atual sem backlog",
        "Green card condicional em ~1,4 anos",
        "Família incluída (cônjuge + filhos < 21)",
      ],
      en: [
        "US$ 800k (Rural/TEA) or US$ 1.05M (standard)",
        "Brazilians: no backlog — uniquely fast",
        "Conditional green card in ~1.4 years",
        "Family included (spouse + children under 21)",
      ],
      es: [
        "US$ 800k (Rural/TEA) o US$ 1.05M (estándar)",
        "Brasileños: sin backlog — excepcional",
        "Green card condicional en ~1.4 años",
        "Familia incluida (cónyuge + hijos menores de 21)",
      ],
    },
    timeline: {
      pt: "14–18 meses até green card condicional",
      en: "14–18 months to conditional green card",
      es: "14–18 meses hasta green card condicional",
    },
    complexity: "high",
    servicePage: "/immigration/immigrant-visas/eb-5",
    badgeColor: "bg-gold text-ink",
  },
  "l-1a": {
    id: "l-1a",
    visaCode: "L-1A",
    titles: {
      pt: "L-1A — Transferência Intra-Empresa (Executivo/Gerente)",
      en: "L-1A — Intracompany Transfer (Executive/Manager)",
      es: "L-1A — Transferencia Intraempresa (Ejecutivo/Gerente)",
    },
    reasons: {
      pt: [
        "Transfere executivo/gerente de empresa brasileira",
        "Caminho direto para EB-1C (green card sem PERM)",
        "Brasileiros: fila atual CURRENT para EB-1C",
        "Ideal para empresário SEM dupla cidadania",
      ],
      en: [
        "Transfer executive/manager from Brazilian company",
        "Direct path to EB-1C (green card without PERM)",
        "Brazilians: priority date CURRENT for EB-1C",
        "Best path for founders WITHOUT dual citizenship",
      ],
      es: [
        "Traslada ejecutivo/gerente desde empresa brasileña",
        "Ruta directa a EB-1C (green card sin PERM)",
        "Brasileños: fecha de prioridad CURRENT para EB-1C",
        "Ideal para empresarios SIN doble ciudadanía",
      ],
    },
    timeline: {
      pt: "L-1A em 2–4 meses; EB-1C em 18–36 meses total",
      en: "L-1A in 2–4 months; EB-1C in 18–36 months total",
      es: "L-1A en 2–4 meses; EB-1C en 18–36 meses total",
    },
    complexity: "medium",
    servicePage: "/immigration/non-immigrant-visas/l-1",
    badgeColor: "bg-gold text-ink",
  },
  "l-1b": {
    id: "l-1b",
    visaCode: "L-1B",
    titles: {
      pt: "L-1B — Conhecimento Especializado",
      en: "L-1B — Specialized Knowledge",
      es: "L-1B — Conocimiento Especializado",
    },
    reasons: {
      pt: [
        "Funcionário com conhecimento proprietário da empresa",
        "Duração máxima 5 anos",
        "Conversão para EB-2/EB-3 (com PERM)",
      ],
      en: [
        "Employee with proprietary company knowledge",
        "Maximum duration 5 years",
        "Converts via EB-2/EB-3 (with PERM)",
      ],
      es: [
        "Empleado con conocimiento propietario de la empresa",
        "Duración máxima 5 años",
        "Conversión vía EB-2/EB-3 (con PERM)",
      ],
    },
    timeline: {
      pt: "2–4 meses para o L-1B",
      en: "2–4 months for L-1B",
      es: "2–4 meses para L-1B",
    },
    complexity: "medium",
    servicePage: "/immigration/non-immigrant-visas/l-1",
    badgeColor: "bg-slate text-white",
  },
  "e-2": {
    id: "e-2",
    visaCode: "E-2",
    titles: {
      pt: "E-2 — Investidor Tratado (requer dupla cidadania)",
      en: "E-2 — Treaty Investor (requires dual citizenship)",
      es: "E-2 — Inversionista Tratado (requiere doble ciudadanía)",
    },
    reasons: {
      pt: [
        "⚠️ Brasil NÃO é país signatário — precisa dupla cidadania",
        "Itália, Portugal, Espanha, França: qualificados",
        "Renovável indefinidamente",
        "Cônjuge recebe autorização de trabalho",
      ],
      en: [
        "⚠️ Brazil is NOT a treaty country — dual citizenship required",
        "Italy, Portugal, Spain, France: qualifying",
        "Renewable indefinitely",
        "Spouse receives open work authorization",
      ],
      es: [
        "⚠️ Brasil NO es país signatario — requiere doble ciudadanía",
        "Italia, Portugal, España, Francia: califican",
        "Renovable indefinidamente",
        "Cónyuge recibe autorización de trabajo",
      ],
    },
    timeline: {
      pt: "3–8 semanas no consulado",
      en: "3–8 weeks at consulate",
      es: "3–8 semanas en consulado",
    },
    complexity: "medium",
    servicePage: "/immigration/non-immigrant-visas/e-2",
    badgeColor: "bg-gold text-ink",
  },
  "o-1a": {
    id: "o-1a",
    visaCode: "O-1A",
    titles: {
      pt: "O-1A — Habilidade Extraordinária",
      en: "O-1A — Extraordinary Ability",
      es: "O-1A — Habilidad Extraordinaria",
    },
    reasons: {
      pt: [
        "Sem limite anual (cap), sem loteria",
        "Pode auto-petitionar com agente",
        "Renovável indefinidamente (extensões anuais)",
        "Caminho para EB-1A após estabelecer trajetória nos EUA",
      ],
      en: [
        "No annual cap, no lottery",
        "Can self-petition with agent",
        "Renewable indefinitely (1-year extensions)",
        "Path to EB-1A once US record is established",
      ],
      es: [
        "Sin cupo anual, sin lotería",
        "Puede auto-peticionar con agente",
        "Renovable indefinidamente (extensiones anuales)",
        "Ruta a EB-1A tras establecer trayectoria en EE.UU.",
      ],
    },
    timeline: {
      pt: "2–4 meses com Premium Processing",
      en: "2–4 months with Premium Processing",
      es: "2–4 meses con Premium Processing",
    },
    complexity: "medium",
    servicePage: "/immigration/non-immigrant-visas/o-1",
    badgeColor: "bg-gold text-ink",
  },
  "h-1b": {
    id: "h-1b",
    visaCode: "H-1B",
    titles: {
      pt: "H-1B — Ocupação Especializada (loteria)",
      en: "H-1B — Specialty Occupation (lottery)",
      es: "H-1B — Ocupación Especializada (lotería)",
    },
    reasons: {
      pt: [
        "Taxa de US$100k para empregadores em 2026",
        "Seleção ponderada por salário",
        "Odds ~25–35% na loteria",
        "Considere O-1A como alternativa",
      ],
      en: [
        "$100k employer fee as of 2026",
        "Wage-weighted selection",
        "~25–35% lottery odds",
        "Consider O-1A as alternative",
      ],
      es: [
        "Tarifa de US$100k para empleadores desde 2026",
        "Selección ponderada por salario",
        "Probabilidad ~25–35% en la lotería",
        "Considere O-1A como alternativa",
      ],
    },
    timeline: {
      pt: "Início do fiscal federal em outubro (após loteria de março)",
      en: "Fiscal year start October (after March lottery)",
      es: "Inicio del año fiscal en octubre (tras lotería de marzo)",
    },
    complexity: "medium",
    servicePage: "/immigration/non-immigrant-visas/h-1b",
    badgeColor: "bg-slate text-white",
  },
  "cr-1-ir-1": {
    id: "cr-1-ir-1",
    visaCode: "CR-1 / IR-1",
    titles: {
      pt: "Green Card por Casamento (cônjuge de cidadão americano)",
      en: "Marriage Green Card (US citizen spouse)",
      es: "Green Card por Matrimonio (cónyuge ciudadano estadounidense)",
    },
    reasons: {
      pt: [
        "Sem cota anual — data de prioridade sempre CURRENT",
        "10–13 meses em média (ajuste de status nos EUA)",
        "12–16 meses via processamento consular no Brasil",
        "EAD + Advance Parole durante o processo",
      ],
      en: [
        "No annual cap — always CURRENT priority date",
        "10–13 months average (US adjustment of status)",
        "12–16 months via consular processing in Brazil",
        "EAD + Advance Parole during processing",
      ],
      es: [
        "Sin cupo anual — fecha de prioridad siempre CURRENT",
        "10–13 meses en promedio (ajuste de estatus en EE.UU.)",
        "12–16 meses vía procesamiento consular en Brasil",
        "EAD + Advance Parole durante el proceso",
      ],
    },
    timeline: {
      pt: "10–16 meses",
      en: "10–16 months",
      es: "10–16 meses",
    },
    complexity: "medium",
    servicePage: "/immigration/immigrant-visas/marriage-us-citizen",
    badgeColor: "bg-gold text-ink",
  },
  "k-1": {
    id: "k-1",
    visaCode: "K-1",
    titles: {
      pt: "K-1 — Visto de Noivo(a)",
      en: "K-1 — Fiancé(e) Visa",
      es: "K-1 — Visa de Prometido(a)",
    },
    reasons: {
      pt: [
        "Entrada no EUA → casamento em 90 dias → ajuste de status",
        "Melhor rota para noivo(a) que está no Brasil",
        "Processamento 8–12 meses",
      ],
      en: [
        "Enter US → marry within 90 days → adjust status",
        "Best route when fiancé(e) is in Brazil",
        "Processing 8–12 months",
      ],
      es: [
        "Entrar a EE.UU. → casarse en 90 días → ajustar estatus",
        "Mejor ruta si el prometido(a) está en Brasil",
        "Procesamiento 8–12 meses",
      ],
    },
    timeline: {
      pt: "8–12 meses até entrada nos EUA",
      en: "8–12 months to US entry",
      es: "8–12 meses hasta entrada a EE.UU.",
    },
    complexity: "medium",
    servicePage: "/immigration/immigrant-visas/marriage-us-citizen",
    badgeColor: "bg-gold text-ink",
  },
  "f-1": {
    id: "f-1",
    visaCode: "F-1",
    titles: {
      pt: "F-1 — Visto de Estudante",
      en: "F-1 — Student Visa",
      es: "F-1 — Visa de Estudiante",
    },
    reasons: {
      pt: [
        "Estudo em tempo integral em escola certificada SEVP",
        "OPT — 12 meses de trabalho pós-formatura",
        "STEM OPT — +24 meses para diplomas STEM",
        "Caminho F-1 → OPT → H-1B/O-1 → EB-2 NIW",
      ],
      en: [
        "Full-time enrollment at SEVP-certified school",
        "OPT — 12 months post-graduation work authorization",
        "STEM OPT — +24 months for STEM degrees",
        "Path: F-1 → OPT → H-1B/O-1 → EB-2 NIW",
      ],
      es: [
        "Matrícula de tiempo completo en escuela SEVP",
        "OPT — 12 meses de autorización de trabajo post-grado",
        "STEM OPT — +24 meses para títulos STEM",
        "Ruta: F-1 → OPT → H-1B/O-1 → EB-2 NIW",
      ],
    },
    timeline: {
      pt: "2–6 meses para emissão consular",
      en: "2–6 months for consular issuance",
      es: "2–6 meses para emisión consular",
    },
    complexity: "low",
    servicePage: "/immigration/non-immigrant-visas/f-1",
    badgeColor: "bg-slate text-white",
  },
  "adjust-status": {
    id: "adjust-status",
    visaCode: "I-485 AOS",
    titles: {
      pt: "Ajuste de Status (I-485) — já nos EUA com status válido",
      en: "Adjustment of Status (I-485) — already in US with valid status",
      es: "Ajuste de Estatus (I-485) — ya en EE.UU. con estatus válido",
    },
    reasons: {
      pt: [
        "Casamento → I-130 + I-485 concorrentes",
        "Fica nos EUA durante todo o processo",
        "EAD + Advance Parole em 4–8 meses",
      ],
      en: [
        "Marry → file I-130 + I-485 concurrently",
        "Stay in US throughout processing",
        "EAD + Advance Parole in 4–8 months",
      ],
      es: [
        "Casarse → I-130 + I-485 concurrentes",
        "Permanecer en EE.UU. durante el proceso",
        "EAD + Advance Parole en 4–8 meses",
      ],
    },
    timeline: {
      pt: "10–13 meses até green card",
      en: "10–13 months to green card",
      es: "10–13 meses hasta green card",
    },
    complexity: "medium",
    servicePage: "/immigration/immigrant-visas/marriage-us-citizen",
    badgeColor: "bg-gold text-ink",
  },
  consult: {
    id: "consult",
    visaCode: "CONSULT",
    titles: {
      pt: "Situação complexa — consulte Dra. Izi",
      en: "Complex situation — consult Dra. Izi",
      es: "Situación compleja — consultar con Dra. Izi",
    },
    reasons: {
      pt: [
        "Status expirado, múltiplos caminhos possíveis, ou situação fora do padrão",
        "Recomendamos uma avaliação gratuita com a advogada",
        "Respondemos em até 24 horas úteis",
      ],
      en: [
        "Expired status, multiple overlapping paths, or non-standard situation",
        "We recommend a free evaluation with the attorney",
        "We respond within 24 business hours",
      ],
      es: [
        "Estatus expirado, múltiples rutas posibles, o situación atípica",
        "Recomendamos una evaluación gratuita con la abogada",
        "Respondemos en menos de 24 horas hábiles",
      ],
    },
    timeline: {
      pt: "Consulta agendada em até 24h úteis",
      en: "Consult scheduled within 24 business hours",
      es: "Consulta programada en menos de 24 horas hábiles",
    },
    complexity: "high",
    servicePage: "/consultation",
    badgeColor: "bg-alert text-white",
    requiresConsult: true,
  },
};

/**
 * Minimal question set — the entry question plus the representative
 * leaf questions per branch that lead directly to a result. Full
 * branch-level detail per the spec is rendered by the client component
 * based on answers (keeps this file a stable data contract while the
 * UI layer evolves).
 */
export const QUESTIONS: Question[] = [
  {
    id: "entry",
    branch: "ENTRY",
    prompt: {
      pt: "Qual situação descreve melhor o seu caso?",
      en: "Which situation best describes your case?",
      es: "¿Qué situación describe mejor tu caso?",
    },
    answers: INTENT_CARDS.map((c) => ({
      id: c.intent,
      label: c.label,
      // next points to the branch's first question (filled in by UI)
      next: `${c.intent}_q1`,
    })),
  },
];
