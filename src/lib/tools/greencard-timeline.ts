// Green Card Timeline Estimator — end-to-end step-by-step timeline
// per pathway. Combines typical 2026 USCIS processing times with the
// priority-date backlog logic used in the Priority Date Tracker.
//
// Sources: USCIS case processing times (check tool, averaged across
// service centers) + DOS Visa Bulletin April 2026 + EB-5 Reform and
// Integrity Act timelines. All values are indicative — real cases vary.

import { computePriorityDate, type Country } from "./priority-date";

export type GcPathway =
  | "EB-1A"
  | "EB-2-NIW"
  | "EB-2-PERM"
  | "EB-3-PERM"
  | "EB-5-RC-Rural"
  | "EB-5-RC-Urban"
  | "Marriage-USC-AOS"
  | "Marriage-USC-Consular"
  | "Marriage-LPR-F2A"
  | "F4-Sibling";

export type FilingVenue = "adjustment" | "consular";

export interface GcTimelineInput {
  pathway: GcPathway;
  country: Country;
  premiumProcessing: boolean;
}

export interface TimelineStep {
  label: { pt: string; en: string; es: string };
  monthsLow: number;
  monthsHigh: number;
}

export interface GcTimelineResult {
  steps: TimelineStep[];
  totalLow: number;
  totalHigh: number;
  venue: FilingVenue;
  priorityWaitYears: number | null;
  priorityStatus: "current" | "limited" | "backlogged" | "severe_backlog";
  notes: { pt: readonly string[]; en: readonly string[]; es: readonly string[] };
}

interface PathwayTemplate {
  venue: FilingVenue;
  premiumEligible: boolean;
  steps: Array<{
    key: string;
    label: { pt: string; en: string; es: string };
    low: number;
    high: number;
    /** If true, this step is replaced by premium 0.5 mo when premium selected. */
    premiumReplaces?: boolean;
  }>;
  /** Category used to look up priority date backlog. */
  priorityCategory: Parameters<typeof computePriorityDate>[0]["category"];
  notes: GcTimelineResult["notes"];
}

function L(pt: string, en: string, es: string) {
  return { pt, en, es };
}

const TEMPLATES: Record<GcPathway, PathwayTemplate> = {
  "EB-1A": {
    venue: "adjustment",
    premiumEligible: true,
    priorityCategory: "EB-1",
    steps: [
      { key: "evidence", label: L("Montagem do dossiê de evidências", "Evidence portfolio assembly", "Armado de dossier"), low: 3, high: 6 },
      { key: "i140", label: L("I-140 adjudicação USCIS", "I-140 USCIS adjudication", "I-140 adjudicación USCIS"), low: 6, high: 14, premiumReplaces: true },
      { key: "i485", label: L("I-485 Adjustment of Status", "I-485 Adjustment of Status", "I-485 Adjustment of Status"), low: 10, high: 16 },
    ],
    notes: {
      pt: ["Brasil CURRENT em EB-1. Premium Processing acelera I-140 para ~15 dias úteis."],
      en: ["Brazil CURRENT in EB-1. Premium Processing moves I-140 to ~15 business days."],
      es: ["Brasil CURRENT en EB-1. Premium Processing acelera I-140."],
    },
  },
  "EB-2-NIW": {
    venue: "adjustment",
    premiumEligible: true,
    priorityCategory: "EB-2",
    steps: [
      { key: "evidence", label: L("Montagem Dhanasar (3 prongs)", "Dhanasar 3-prong brief", "Armado Dhanasar"), low: 2, high: 4 },
      { key: "i140", label: L("I-140 NIW adjudicação USCIS", "I-140 NIW USCIS adjudication", "I-140 NIW adjudicación"), low: 5, high: 12, premiumReplaces: true },
      { key: "wait", label: L("Espera Final Action Date (se backlog)", "Final Action Date wait (if backlog)", "Espera Final Action Date"), low: 0, high: 0 },
      { key: "i485", label: L("I-485 Adjustment of Status", "I-485 Adjustment of Status", "I-485 Adjustment of Status"), low: 10, high: 18 },
    ],
    notes: {
      pt: ["Self-petition: não precisa de empregador. Se Brasil EB-2 está com fila, entra no passo de espera."],
      en: ["Self-petition: no employer needed. If EB-2 Brazil is backlogged, the wait step activates."],
      es: ["Self-petition sin empleador. Si hay fila, se activa el paso de espera."],
    },
  },
  "EB-2-PERM": {
    venue: "adjustment",
    premiumEligible: true,
    priorityCategory: "EB-2",
    steps: [
      { key: "pwd", label: L("Prevailing Wage Determination (DOL)", "Prevailing Wage Determination (DOL)", "Prevailing Wage Determination"), low: 4, high: 8 },
      { key: "recruit", label: L("Recrutamento + ETA-9089", "Recruitment + ETA-9089", "Reclutamiento + ETA-9089"), low: 3, high: 6 },
      { key: "perm", label: L("PERM certificação DOL", "PERM DOL certification", "PERM certificación DOL"), low: 6, high: 14 },
      { key: "i140", label: L("I-140 adjudicação", "I-140 adjudication", "I-140 adjudicación"), low: 6, high: 12, premiumReplaces: true },
      { key: "wait", label: L("Espera Final Action Date", "Final Action Date wait", "Espera Final Action Date"), low: 0, high: 0 },
      { key: "i485", label: L("I-485 Adjustment of Status", "I-485 Adjustment of Status", "I-485 Adjustment of Status"), low: 10, high: 18 },
    ],
    notes: {
      pt: ["Caminho longo — 2–4+ anos mesmo sem backlog. PERM é onde empregadores abandonam."],
      en: ["Long path — 2–4+ years even without backlog. PERM is where employers often give up."],
      es: ["Camino largo — 2–4+ años. PERM es el paso crítico."],
    },
  },
  "EB-3-PERM": {
    venue: "adjustment",
    premiumEligible: false,
    priorityCategory: "EB-3",
    steps: [
      { key: "pwd", label: L("Prevailing Wage Determination", "Prevailing Wage Determination", "Prevailing Wage Determination"), low: 4, high: 8 },
      { key: "recruit", label: L("Recrutamento + ETA-9089", "Recruitment + ETA-9089", "Reclutamiento + ETA-9089"), low: 3, high: 6 },
      { key: "perm", label: L("PERM certificação", "PERM certification", "PERM certificación"), low: 6, high: 14 },
      { key: "i140", label: L("I-140 adjudicação (sem premium)", "I-140 adjudication (no premium)", "I-140 adjudicación"), low: 8, high: 16 },
      { key: "wait", label: L("Espera Final Action Date", "Final Action Date wait", "Espera Final Action Date"), low: 0, high: 0 },
      { key: "i485", label: L("I-485 Adjustment of Status", "I-485 Adjustment of Status", "I-485 Adjustment of Status"), low: 10, high: 18 },
    ],
    notes: {
      pt: ["EB-3 fila ligeiramente pior que EB-2. Se você qualifica para EB-2 NIW, geralmente vale trocar."],
      en: ["EB-3 queue slightly worse than EB-2. If you qualify for EB-2 NIW, usually worth switching."],
      es: ["EB-3 fila peor que EB-2. Si calificas para EB-2 NIW, vale cambiar."],
    },
  },
  "EB-5-RC-Rural": {
    venue: "adjustment",
    premiumEligible: false,
    priorityCategory: "EB-5-Set-Aside",
    steps: [
      { key: "due_diligence", label: L("Due diligence projeto + source of funds", "Project DD + source of funds", "Due diligence + source of funds"), low: 3, high: 6 },
      { key: "i526e", label: L("I-526E (Rural TEA prioritário)", "I-526E (Rural TEA priority)", "I-526E (Rural TEA prioritario)"), low: 5, high: 10 },
      { key: "i485", label: L("I-485 Adjustment of Status", "I-485 Adjustment of Status", "I-485 Adjustment of Status"), low: 10, high: 16 },
      { key: "i829", label: L("I-829 remove conditions (após 2 anos de GC condicional)", "I-829 remove conditions (after 2-yr conditional)", "I-829 remover condiciones"), low: 24, high: 60 },
    ],
    notes: {
      pt: ["Rural TEA é o tier mais rápido. Brasil CURRENT. Source of funds é o ponto que mais derruba petição brasileira."],
      en: ["Rural TEA is the fastest tier. Brazil CURRENT. Source of funds is the #1 denial cause for Brazilians."],
      es: ["Rural TEA es el tier más rápido. Brasil CURRENT. Source of funds es el punto crítico."],
    },
  },
  "EB-5-RC-Urban": {
    venue: "adjustment",
    premiumEligible: false,
    priorityCategory: "EB-5-Set-Aside",
    steps: [
      { key: "due_diligence", label: L("Due diligence + source of funds", "Project DD + source of funds", "Due diligence + source of funds"), low: 3, high: 6 },
      { key: "i526e", label: L("I-526E (Urban TEA)", "I-526E (Urban TEA)", "I-526E (Urban TEA)"), low: 18, high: 30 },
      { key: "i485", label: L("I-485 Adjustment of Status", "I-485 Adjustment of Status", "I-485 Adjustment of Status"), low: 10, high: 16 },
      { key: "i829", label: L("I-829 remove conditions", "I-829 remove conditions", "I-829 remover condiciones"), low: 24, high: 60 },
    ],
    notes: {
      pt: ["Urban TEA: processamento ~2x mais lento que Rural. Brasil CURRENT em set-aside."],
      en: ["Urban TEA: ~2x slower than Rural. Brazil CURRENT in set-aside."],
      es: ["Urban TEA: más lento que Rural."],
    },
  },
  "Marriage-USC-AOS": {
    venue: "adjustment",
    premiumEligible: false,
    priorityCategory: "EB-1", // placeholder — immediate relative, no queue
    steps: [
      { key: "i130_485", label: L("I-130 + I-485 concurrentes", "I-130 + I-485 concurrent filing", "I-130 + I-485 concurrentes"), low: 1, high: 2 },
      { key: "ead_ap", label: L("EAD + Advance Parole emissão", "EAD + Advance Parole issuance", "EAD + Advance Parole"), low: 3, high: 6 },
      { key: "interview", label: L("Entrevista AOS + green card", "AOS interview + green card", "Entrevista AOS + green card"), low: 6, high: 14 },
    ],
    notes: {
      pt: ["Cônjuge de USC é immediate relative — sem fila. Bona fide marriage é o ponto central."],
      en: ["Spouse of USC is immediate relative — no queue. Bona fide marriage is the focus."],
      es: ["Cónyuge de USC es immediate relative — sin fila."],
    },
  },
  "Marriage-USC-Consular": {
    venue: "consular",
    premiumEligible: false,
    priorityCategory: "EB-1",
    steps: [
      { key: "i130", label: L("I-130 adjudicação", "I-130 adjudication", "I-130 adjudicación"), low: 10, high: 18 },
      { key: "nvc", label: L("NVC processing + DS-260", "NVC processing + DS-260", "NVC processing + DS-260"), low: 2, high: 6 },
      { key: "interview", label: L("Entrevista consular (Rio/SP)", "Consular interview (Rio/SP)", "Entrevista consular"), low: 2, high: 6 },
    ],
    notes: {
      pt: ["Consular: você entra nos EUA já como LPR. Útil se cônjuge está no Brasil."],
      en: ["Consular: you enter the US already as LPR. Useful when spouse is in Brazil."],
      es: ["Consular: entras a EE.UU. ya como LPR."],
    },
  },
  "Marriage-LPR-F2A": {
    venue: "adjustment",
    premiumEligible: false,
    priorityCategory: "F2A",
    steps: [
      { key: "i130", label: L("I-130 Petition for Alien Relative", "I-130 Petition for Alien Relative", "I-130"), low: 10, high: 20 },
      { key: "wait", label: L("Espera Final Action Date F2A", "F2A Final Action Date wait", "Espera Final Action Date F2A"), low: 0, high: 0 },
      { key: "i485", label: L("I-485 Adjustment of Status", "I-485 Adjustment of Status", "I-485 Adjustment of Status"), low: 10, high: 16 },
    ],
    notes: {
      pt: ["F2A (cônjuge de LPR) tem fila curta — frequentemente current ou quase. Se LPR virar USC, caso converte para immediate relative."],
      en: ["F2A (LPR spouse) queue is short — often current or near. If LPR naturalizes, case upgrades to immediate relative."],
      es: ["F2A suele estar current o cerca."],
    },
  },
  "F4-Sibling": {
    venue: "consular",
    premiumEligible: false,
    priorityCategory: "F4",
    steps: [
      { key: "i130", label: L("I-130 adjudicação", "I-130 adjudication", "I-130 adjudicación"), low: 12, high: 28 },
      { key: "wait", label: L("Espera F4 (fila severa)", "F4 wait (severe backlog)", "Espera F4 (fila severa)"), low: 0, high: 0 },
      { key: "nvc", label: L("NVC + DS-260", "NVC + DS-260", "NVC + DS-260"), low: 2, high: 6 },
      { key: "interview", label: L("Entrevista consular", "Consular interview", "Entrevista consular"), low: 2, high: 6 },
    ],
    notes: {
      pt: ["F4 tem fila de ~18 anos para Brasil. Considere rotas de emprego como atalho."],
      en: ["F4 queue is ~18 years for Brazil. Consider employment routes as a shortcut."],
      es: ["F4 tiene ~18 años de fila. Considera rutas de empleo."],
    },
  },
};

export function computeGcTimeline(input: GcTimelineInput): GcTimelineResult {
  const tpl = TEMPLATES[input.pathway];
  const pd = computePriorityDate({
    category: tpl.priorityCategory,
    country: input.country,
  });

  const steps: TimelineStep[] = [];
  for (const s of tpl.steps) {
    // premium shortens a replaceable step to 0.5 mo.
    if (s.premiumReplaces && input.premiumProcessing && tpl.premiumEligible) {
      steps.push({ label: s.label, monthsLow: 0.5, monthsHigh: 0.5 });
      continue;
    }
    // wait step fed by priority-date backlog.
    if (s.key === "wait") {
      const waitMo = pd.approxWaitYears === null ? 0 : pd.approxWaitYears * 12;
      if (waitMo > 0) {
        steps.push({
          label: s.label,
          monthsLow: Math.round(waitMo * 0.85),
          monthsHigh: Math.round(waitMo * 1.15),
        });
      }
      continue;
    }
    steps.push({ label: s.label, monthsLow: s.low, monthsHigh: s.high });
  }

  const totalLow = steps.reduce((s, st) => s + st.monthsLow, 0);
  const totalHigh = steps.reduce((s, st) => s + st.monthsHigh, 0);

  return {
    steps,
    totalLow,
    totalHigh,
    venue: tpl.venue,
    priorityWaitYears: pd.approxWaitYears,
    priorityStatus: pd.status,
    notes: tpl.notes,
  };
}

export function formatMonths(months: number): string {
  if (months < 1) return "~2 wk";
  if (months < 12) return `${Math.round(months)} mo`;
  const yr = months / 12;
  return `${yr.toFixed(1)} yr`;
}
