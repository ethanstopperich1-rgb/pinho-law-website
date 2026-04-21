// Visa Cost Estimator — pure math.
// USCIS fees reflect the rule effective April 1, 2024 (still in force in 2026
// unless replaced). Attorney fees are typical market ranges for Orlando-area
// immigration firms and are clearly flagged as estimates. All figures in USD.

export type VisaType =
  | "EB-1A"
  | "EB-1B"
  | "EB-1C"
  | "EB-2-NIW"
  | "EB-2-PERM"
  | "EB-3"
  | "EB-5-RC"
  | "EB-5-Direct"
  | "E-2"
  | "L-1A"
  | "L-1B"
  | "O-1"
  | "H-1B"
  | "Marriage-USC"
  | "Marriage-LPR"
  | "Naturalization-N400";

export interface VisaCostInput {
  visa: VisaType;
  /** Whether to include premium processing (I-907) when available. */
  premiumProcessing: boolean;
  /** Number of dependents (spouse + children) filing together when applicable. */
  dependents: number;
}

export interface FeeLine {
  label: { pt: string; en: string; es: string };
  amount: number;
  note?: { pt: string; en: string; es: string };
}

export interface VisaCostResult {
  uscis: FeeLine[];
  attorney: FeeLine;
  other: FeeLine[];
  totalLow: number;
  totalHigh: number;
  premiumAvailable: boolean;
  notes: {
    pt: readonly string[];
    en: readonly string[];
    es: readonly string[];
  };
}

interface VisaSpec {
  uscis: FeeLine[];
  attorneyLow: number;
  attorneyHigh: number;
  other?: FeeLine[];
  premium?: number;
  dependentUscis?: number;
  notes: VisaCostResult["notes"];
}

const PREMIUM_I907 = 2805; // USCIS premium processing fee (April 2024 rule).

function f(label: string, amount: number, note?: string): FeeLine {
  return {
    label: { pt: label, en: label, es: label },
    amount,
    note: note ? { pt: note, en: note, es: note } : undefined,
  };
}

const SPECS: Record<VisaType, VisaSpec> = {
  "EB-1A": {
    uscis: [f("I-140 (EB-1A)", 2805), f("I-485 Adjustment of Status", 1440)],
    attorneyLow: 12_000,
    attorneyHigh: 18_000,
    premium: PREMIUM_I907,
    dependentUscis: 1440,
    notes: {
      pt: ["Self-petition: não precisa de empregador. Atenção para dossiê de evidências extraordinárias."],
      en: ["Self-petition: no employer needed. Heavy on extraordinary ability evidence portfolio."],
      es: ["Self-petition: sin empleador. Fuerte énfasis en evidencia de habilidad extraordinaria."],
    },
  },
  "EB-1B": {
    uscis: [f("I-140 (EB-1B)", 2805), f("I-485 Adjustment of Status", 1440)],
    attorneyLow: 10_000,
    attorneyHigh: 15_000,
    premium: PREMIUM_I907,
    dependentUscis: 1440,
    notes: {
      pt: ["Pesquisador/professor excepcional. Requer oferta de emprego permanente."],
      en: ["Outstanding researcher/professor. Requires permanent job offer."],
      es: ["Investigador/profesor excepcional. Requiere oferta permanente."],
    },
  },
  "EB-1C": {
    uscis: [f("I-140 (EB-1C)", 2805), f("I-485 Adjustment of Status", 1440)],
    attorneyLow: 12_000,
    attorneyHigh: 18_000,
    dependentUscis: 1440,
    notes: {
      pt: ["Transferência executiva/gerencial multinacional. Não tem premium processing."],
      en: ["Multinational manager/executive transfer. No premium processing available."],
      es: ["Transferencia de gerente/ejecutivo multinacional."],
    },
  },
  "EB-2-NIW": {
    uscis: [f("I-140 (NIW)", 2805), f("I-485 Adjustment of Status", 1440)],
    attorneyLow: 8_500,
    attorneyHigh: 14_000,
    premium: PREMIUM_I907,
    dependentUscis: 1440,
    notes: {
      pt: ["Self-petition sem empregador. Teste Dhanasar (3 prongs). Rota mais comum para profissionais brasileiros."],
      en: ["Self-petition with no employer. Dhanasar 3-prong test. Most common route for Brazilian professionals."],
      es: ["Self-petition sin empleador. Test Dhanasar de 3 puntos."],
    },
  },
  "EB-2-PERM": {
    uscis: [
      f("PERM Labor Certification (DOL)", 0, "Custo do empregador — recrutamento + advogado"),
      f("I-140", 2805),
      f("I-485 Adjustment of Status", 1440),
    ],
    attorneyLow: 9_000,
    attorneyHigh: 15_000,
    other: [f("Recruitment costs (paid by employer)", 5_000, "Jornais, job boards, Sunday ads")],
    premium: PREMIUM_I907,
    dependentUscis: 1440,
    notes: {
      pt: ["Requer PERM labor cert (6–18 meses). Empregador paga custos de recrutamento por lei."],
      en: ["Requires PERM labor cert (6–18 months). Employer by law must pay recruitment costs."],
      es: ["Requiere PERM labor cert. Empleador paga costos de reclutamiento."],
    },
  },
  "EB-3": {
    uscis: [f("PERM Labor Cert (DOL)", 0), f("I-140", 2805), f("I-485", 1440)],
    attorneyLow: 8_000,
    attorneyHigh: 13_000,
    other: [f("Recruitment (paid by employer)", 5_000)],
    dependentUscis: 1440,
    notes: {
      pt: ["Skilled (bacharelado) ou Other Workers. Fila mais longa que EB-2."],
      en: ["Skilled (bachelor's) or Other Workers. Longer queue than EB-2."],
      es: ["Skilled o Other Workers. Fila más larga que EB-2."],
    },
  },
  "EB-5-RC": {
    uscis: [
      f("I-526E (Regional Center)", 11_160),
      f("I-485 Adjustment of Status", 1440),
      f("I-829 Remove Conditions (after 2 yrs)", 3_750),
    ],
    attorneyLow: 25_000,
    attorneyHigh: 50_000,
    other: [
      f("Investment to Regional Center", 800_000, "Rural/Urban/Infra TEA mínimo"),
      f("Regional Center administration fee", 60_000, "~US$ 40–80K típico"),
    ],
    dependentUscis: 1440,
    notes: {
      pt: ["Valor mostrado é investimento + taxas. Você NÃO perde o investimento — ele é devolvido ao fim do projeto."],
      en: ["Amount shown is investment + fees. You do NOT lose the investment — it is returned at project end."],
      es: ["Monto mostrado es inversión + tarifas. NO pierdes la inversión — se devuelve al final del proyecto."],
    },
  },
  "EB-5-Direct": {
    uscis: [f("I-526 (Direct)", 11_160), f("I-485", 1440), f("I-829", 3_750)],
    attorneyLow: 30_000,
    attorneyHigh: 60_000,
    other: [f("Investment (Direct)", 1_050_000, "Padrão não-TEA — você opera o negócio")],
    dependentUscis: 1440,
    notes: {
      pt: ["Direct EB-5 tem aprovação histórica ~25%. Apenas empregos diretos contam."],
      en: ["Direct EB-5 has historical ~25% approval rate. Only direct jobs count."],
      es: ["Direct EB-5 tiene aprobación histórica ~25%."],
    },
  },
  "E-2": {
    uscis: [f("DS-160 + MRV application fee", 315, "Consular — não USCIS")],
    attorneyLow: 7_500,
    attorneyHigh: 12_000,
    other: [f("Minimum investment (substantial)", 100_000, "Não há mínimo legal; bar típico ~US$ 100K+")],
    notes: {
      pt: ["ATENÇÃO: Brasil NÃO é país de tratado E-2. Brasileiros precisam de segunda cidadania (Portugal, Grenada, etc.) para qualificar."],
      en: ["IMPORTANT: Brazil is NOT an E-2 treaty country. Brazilians need a second citizenship (Portugal, Grenada, etc.) to qualify."],
      es: ["IMPORTANTE: Brasil NO es país de tratado E-2. Brasileños necesitan segunda ciudadanía."],
    },
  },
  "L-1A": {
    uscis: [
      f("I-129 (L-1A)", 1385),
      f("Asylum Program Fee", 600, "Novo — 2024 rule"),
      f("Fraud Prevention & Detection", 500),
    ],
    attorneyLow: 6_500,
    attorneyHigh: 10_000,
    premium: PREMIUM_I907,
    dependentUscis: 0,
    notes: {
      pt: ["L-1A executivo/gerente. Empresa matriz no Brasil precisa ter 1+ ano de operação ativa."],
      en: ["L-1A executive/manager. Brazilian parent company needs 1+ year of active operations."],
      es: ["L-1A ejecutivo/gerente. Empresa matriz en Brasil necesita 1+ año de operación activa."],
    },
  },
  "L-1B": {
    uscis: [f("I-129 (L-1B)", 1385), f("Asylum Program Fee", 600), f("Fraud Prevention & Detection", 500)],
    attorneyLow: 6_500,
    attorneyHigh: 10_000,
    premium: PREMIUM_I907,
    dependentUscis: 0,
    notes: {
      pt: ["L-1B especialista. Precisa demonstrar conhecimento especializado único."],
      en: ["L-1B specialized knowledge. Must demonstrate unique specialized knowledge."],
      es: ["L-1B conocimiento especializado."],
    },
  },
  "O-1": {
    uscis: [f("I-129 (O-1)", 1055), f("Asylum Program Fee", 600)],
    attorneyLow: 7_500,
    attorneyHigh: 12_000,
    premium: PREMIUM_I907,
    dependentUscis: 0,
    notes: {
      pt: ["O-1 habilidade extraordinária. Válido 3 anos + extensões ilimitadas de 1 ano."],
      en: ["O-1 extraordinary ability. Valid 3 years + unlimited 1-year extensions."],
      es: ["O-1 habilidad extraordinaria. Válido 3 años + extensiones ilimitadas."],
    },
  },
  "H-1B": {
    uscis: [
      f("I-129 (H-1B)", 780),
      f("Asylum Program Fee", 600),
      f("ACWIA Training Fee", 1500, "Para empresas com 26+ funcionários"),
      f("Fraud Prevention & Detection", 500),
      f("Registration Fee (March lottery)", 215),
    ],
    attorneyLow: 5_500,
    attorneyHigh: 9_000,
    premium: PREMIUM_I907,
    dependentUscis: 0,
    notes: {
      pt: ["Loteria em março. Taxa de seleção ~25% para inscritos sem master's US."],
      en: ["March lottery. Selection rate ~25% for applicants without US master's."],
      es: ["Lotería en marzo. Tasa de selección ~25%."],
    },
  },
  "Marriage-USC": {
    uscis: [
      f("I-130 Petition for Alien Relative", 675),
      f("I-485 Adjustment of Status", 1440),
      f("I-765 EAD (included if filed concurrently)", 0),
      f("I-131 Advance Parole (included if filed concurrently)", 0),
    ],
    attorneyLow: 4_500,
    attorneyHigh: 8_000,
    dependentUscis: 1440,
    notes: {
      pt: ["Cônjuge de USC é ‘immediate relative’ — sem fila. Bona fide marriage é o ponto de atenção."],
      en: ["Spouse of USC is ‘immediate relative’ — no queue. Bona fide marriage is the focus."],
      es: ["Cónyuge de USC es ‘immediate relative’ — sin fila."],
    },
  },
  "Marriage-LPR": {
    uscis: [f("I-130", 675), f("I-485 (after PD current)", 1440)],
    attorneyLow: 4_500,
    attorneyHigh: 8_000,
    dependentUscis: 1440,
    notes: {
      pt: ["Cônjuge de LPR cai em F2A. Fila pode estar CURRENT ou com backlog curto."],
      en: ["Spouse of LPR falls in F2A. Queue may be CURRENT or short backlog."],
      es: ["Cónyuge de LPR cae en F2A."],
    },
  },
  "Naturalization-N400": {
    uscis: [f("N-400 Application for Naturalization", 710)],
    attorneyLow: 1_500,
    attorneyHigh: 3_500,
    notes: {
      pt: ["5 anos como LPR (ou 3 se casado com USC). Teste cívico + inglês."],
      en: ["5 years as LPR (or 3 if married to USC). Civics + English test."],
      es: ["5 años como LPR (o 3 si casado con USC). Examen cívico + inglés."],
    },
  },
};

export function computeVisaCost(input: VisaCostInput): VisaCostResult {
  const spec = SPECS[input.visa];
  const uscis = [...spec.uscis];

  // Dependents: add I-485 fee per dependent when relevant.
  if (spec.dependentUscis && input.dependents > 0) {
    uscis.push({
      label: {
        pt: `I-485 para ${input.dependents} dependente${input.dependents > 1 ? "s" : ""}`,
        en: `I-485 for ${input.dependents} dependent${input.dependents > 1 ? "s" : ""}`,
        es: `I-485 para ${input.dependents} dependiente${input.dependents > 1 ? "s" : ""}`,
      },
      amount: spec.dependentUscis * input.dependents,
    });
  }

  const premiumAvailable = spec.premium !== undefined;
  if (input.premiumProcessing && spec.premium) {
    uscis.push(f("I-907 Premium Processing", spec.premium));
  }

  const uscisTotal = uscis.reduce((s, l) => s + l.amount, 0);
  const otherTotal = (spec.other ?? []).reduce((s, l) => s + l.amount, 0);

  const totalLow = uscisTotal + otherTotal + spec.attorneyLow;
  const totalHigh = uscisTotal + otherTotal + spec.attorneyHigh;

  return {
    uscis,
    attorney: {
      label: {
        pt: "Honorários advocatícios (estimativa)",
        en: "Attorney fees (estimate)",
        es: "Honorarios legales (estimado)",
      },
      amount: spec.attorneyLow,
      note: {
        pt: `Faixa típica Orlando: $${spec.attorneyLow.toLocaleString()}–$${spec.attorneyHigh.toLocaleString()}`,
        en: `Typical Orlando range: $${spec.attorneyLow.toLocaleString()}–$${spec.attorneyHigh.toLocaleString()}`,
        es: `Rango típico Orlando: $${spec.attorneyLow.toLocaleString()}–$${spec.attorneyHigh.toLocaleString()}`,
      },
    },
    other: spec.other ?? [],
    totalLow,
    totalHigh,
    premiumAvailable,
    notes: spec.notes,
  };
}

export function formatUsd(n: number, locale = "en-US"): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}
