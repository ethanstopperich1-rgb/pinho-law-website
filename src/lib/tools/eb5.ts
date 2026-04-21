// EB-5 investment calculator — pure math.
// Thresholds locked in the EB-5 Reform and Integrity Act (2022):
//   Rural TEA: $800,000, with reserved 20% visa allocation
//   Urban TEA: $800,000, reserved 10%
//   Infrastructure: $800,000, reserved 2%
//   Standard (non-TEA): $1,050,000
// Source: USCIS Policy Manual + website/content/spec-parts-2-5.md.

export type Eb5Tier = "rural_tea" | "urban_tea" | "infrastructure" | "standard";
export type InvestorMode = "regional_center" | "direct";

export interface Eb5Input {
  tier: Eb5Tier;
  mode: InvestorMode;
}

export interface Eb5Result {
  investmentUsd: number;
  reservedPct: number;
  /** Expected I-526E processing months (low/high). */
  i526eMonths: { low: number; high: number };
  /** Approval rate signal — qualitative, Direct vs RC per spec. */
  approvalSignal: "high" | "mixed" | "low";
  jobsRequired: number;
  backlogForBrazil: "current" | "limited";
  qualitativeNotes: {
    pt: readonly string[];
    en: readonly string[];
    es: readonly string[];
  };
}

const TIERS: Record<
  Eb5Tier,
  { investmentUsd: number; reservedPct: number; i526eLow: number; i526eHigh: number }
> = {
  rural_tea: { investmentUsd: 800_000, reservedPct: 20, i526eLow: 5, i526eHigh: 10 },
  urban_tea: { investmentUsd: 800_000, reservedPct: 10, i526eLow: 18, i526eHigh: 30 },
  infrastructure: { investmentUsd: 800_000, reservedPct: 2, i526eLow: 12, i526eHigh: 24 },
  standard: { investmentUsd: 1_050_000, reservedPct: 68, i526eLow: 24, i526eHigh: 36 },
};

export function computeEb5(input: Eb5Input): Eb5Result {
  const t = TIERS[input.tier];
  const approvalSignal: Eb5Result["approvalSignal"] =
    input.mode === "direct" ? "low" : input.tier === "rural_tea" ? "high" : "mixed";

  return {
    investmentUsd: t.investmentUsd,
    reservedPct: t.reservedPct,
    i526eMonths: { low: t.i526eLow, high: t.i526eHigh },
    approvalSignal,
    jobsRequired: 10,
    backlogForBrazil: "current",
    qualitativeNotes: notes(input, approvalSignal),
  };
}

function notes(
  { tier, mode }: Eb5Input,
  signal: Eb5Result["approvalSignal"],
): Eb5Result["qualitativeNotes"] {
  const out = { pt: [] as string[], en: [] as string[], es: [] as string[] };

  if (tier === "rural_tea") {
    out.pt.push("Rural TEA: processamento prioritário I-526E (~5–10 meses). Mais rápido que qualquer outro tier.");
    out.en.push("Rural TEA: priority I-526E processing (~5–10 months). Fastest of any tier.");
    out.es.push("Rural TEA: I-526E prioritario (~5–10 meses). Más rápido de todos los tiers.");
  } else if (tier === "urban_tea") {
    out.pt.push("Urban TEA: 10% de visas reservadas. Processamento mais lento que Rural.");
    out.en.push("Urban TEA: 10% reserved visa allocation. Slower than Rural.");
    out.es.push("Urban TEA: 10% reservado. Más lento que Rural.");
  } else if (tier === "infrastructure") {
    out.pt.push("Infraestrutura: set-aside de 2%. Projetos são escassos e costumam ser estaduais/municipais.");
    out.en.push("Infrastructure: 2% set-aside. Projects are scarce and tend to be state/municipal.");
    out.es.push("Infraestructura: set-aside de 2%. Proyectos escasos.");
  } else {
    out.pt.push("Padrão (não-TEA): mínimo US$ 1,05M. Sem reservado; competição global por visas.");
    out.en.push("Standard (non-TEA): $1.05M minimum. No set-aside; global visa competition.");
    out.es.push("Estándar (no-TEA): US$ 1,05M mínimo. Sin set-aside.");
  }

  if (mode === "regional_center") {
    out.pt.push("Regional Center: investimento passivo, empregos diretos + indiretos + induzidos contam. Aprovação do setor significativamente maior que Direct.");
    out.en.push("Regional Center: passive investment, direct + indirect + induced jobs count. Approval rate significantly higher than Direct.");
    out.es.push("Regional Center: inversión pasiva, empleos directos + indirectos + inducidos cuentan.");
  } else {
    out.pt.push("Direct EB-5: você opera o negócio. Apenas empregos diretos contam. Aprovação histórica do setor: ~25%.");
    out.en.push("Direct EB-5: you operate the business. Only direct jobs count. Historical approval rate: ~25%.");
    out.es.push("Direct EB-5: operas el negocio. Solo empleos directos cuentan. Aprobación histórica: ~25%.");
  }

  if (signal === "high") {
    out.pt.push("Brasil: fila CURRENT, sem backlog. Tempo médio investidor brasileiro: ~1,4 anos do I-526E ao green card condicional.");
    out.en.push("Brazil: CURRENT queue, no backlog. Average Brazilian timeline: ~1.4 years from I-526E to conditional green card.");
    out.es.push("Brasil: fila CURRENT, sin backlog. Tiempo medio: ~1,4 años.");
  }

  return out;
}

export function formatUsd(n: number, locale = "en-US"): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}
