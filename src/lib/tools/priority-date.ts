// Priority Date Tracker — pure logic.
// Source: US Department of State Visa Bulletin (April 2026 indicative snapshot)
// + recent 12-month trend. Brazil charges to "All Chargeability Areas Except..."
// unless otherwise listed. Values are approximate and meant to orient
// Brazilian families — official bulletin is authoritative.

export type EmploymentCategory = "EB-1" | "EB-2" | "EB-3" | "EB-3-Other" | "EB-4" | "EB-5-Unreserved" | "EB-5-Set-Aside";
export type FamilyCategory = "F1" | "F2A" | "F2B" | "F3" | "F4";
export type PriorityCategory = EmploymentCategory | FamilyCategory;

export type Country =
  | "brazil"
  | "all_other"
  | "china"
  | "india"
  | "mexico"
  | "philippines";

export interface PriorityInput {
  category: PriorityCategory;
  country: Country;
}

export interface PriorityResult {
  /** Status label. */
  status: "current" | "limited" | "backlogged" | "severe_backlog";
  /** Approximate wait in years (null if current). */
  approxWaitYears: number | null;
  /** Indicative Final Action Date cutoff for April 2026 (null if current). */
  finalActionDate: string | null;
  /** Indicative Filing Date (Dates for Filing) for April 2026. */
  filingDate: string | null;
  /** Short explanation per locale. */
  notes: {
    pt: readonly string[];
    en: readonly string[];
    es: readonly string[];
  };
}

// Indicative April 2026 cutoffs. Brazil maps to all_other unless a
// category pulls it into a backlog. Format: "YYYY-MM" or "CURRENT".
const TABLE: Record<PriorityCategory, Partial<Record<Country, { final: string; filing: string }>>> = {
  "EB-1": {
    all_other: { final: "CURRENT", filing: "CURRENT" },
    brazil: { final: "CURRENT", filing: "CURRENT" },
    china: { final: "2022-11", filing: "2023-01" },
    india: { final: "2022-04", filing: "2022-06" },
  },
  "EB-2": {
    all_other: { final: "2023-09", filing: "2023-12" },
    brazil: { final: "2023-09", filing: "2023-12" },
    china: { final: "2020-10", filing: "2020-12" },
    india: { final: "2013-01", filing: "2013-04" },
  },
  "EB-3": {
    all_other: { final: "2023-05", filing: "2023-09" },
    brazil: { final: "2023-05", filing: "2023-09" },
    china: { final: "2020-08", filing: "2021-01" },
    india: { final: "2013-05", filing: "2013-08" },
  },
  "EB-3-Other": {
    all_other: { final: "2022-03", filing: "2022-06" },
    brazil: { final: "2022-03", filing: "2022-06" },
    china: { final: "2017-01", filing: "2017-04" },
    india: { final: "2013-05", filing: "2013-08" },
  },
  "EB-4": {
    all_other: { final: "2021-07", filing: "2021-10" },
    brazil: { final: "2021-07", filing: "2021-10" },
  },
  "EB-5-Unreserved": {
    all_other: { final: "CURRENT", filing: "CURRENT" },
    brazil: { final: "CURRENT", filing: "CURRENT" },
    china: { final: "2015-11", filing: "2017-01" },
    india: { final: "2022-01", filing: "2022-04" },
  },
  "EB-5-Set-Aside": {
    all_other: { final: "CURRENT", filing: "CURRENT" },
    brazil: { final: "CURRENT", filing: "CURRENT" },
  },
  F1: {
    all_other: { final: "2016-01", filing: "2016-09" },
    brazil: { final: "2016-01", filing: "2016-09" },
    mexico: { final: "2005-06", filing: "2005-12" },
    philippines: { final: "2012-06", filing: "2013-03" },
  },
  F2A: {
    all_other: { final: "2022-01", filing: "2025-01" },
    brazil: { final: "2022-01", filing: "2025-01" },
    mexico: { final: "2022-01", filing: "2025-01" },
  },
  F2B: {
    all_other: { final: "2016-06", filing: "2017-01" },
    brazil: { final: "2016-06", filing: "2017-01" },
    mexico: { final: "2006-01", filing: "2006-10" },
    philippines: { final: "2012-01", filing: "2013-01" },
  },
  F3: {
    all_other: { final: "2011-01", filing: "2011-06" },
    brazil: { final: "2011-01", filing: "2011-06" },
    mexico: { final: "2001-04", filing: "2001-09" },
    philippines: { final: "2003-07", filing: "2004-04" },
  },
  F4: {
    all_other: { final: "2008-01", filing: "2008-07" },
    brazil: { final: "2008-01", filing: "2008-07" },
    mexico: { final: "2001-04", filing: "2001-08" },
    philippines: { final: "2004-01", filing: "2004-07" },
    india: { final: "2006-07", filing: "2006-12" },
  },
};

export function computePriorityDate(input: PriorityInput): PriorityResult {
  const row = TABLE[input.category];
  const cell = row[input.country] ?? row.all_other;
  if (!cell) {
    return {
      status: "limited",
      approxWaitYears: null,
      finalActionDate: null,
      filingDate: null,
      notes: nullNotes(),
    };
  }

  if (cell.final === "CURRENT") {
    return {
      status: "current",
      approxWaitYears: null,
      finalActionDate: "CURRENT",
      filingDate: cell.filing,
      notes: currentNotes(input),
    };
  }

  const years = yearsSince(cell.final);
  const status: PriorityResult["status"] =
    years < 2 ? "limited" : years < 6 ? "backlogged" : "severe_backlog";

  return {
    status,
    approxWaitYears: Math.round(years * 10) / 10,
    finalActionDate: cell.final,
    filingDate: cell.filing,
    notes: backlogNotes(input, years),
  };
}

function yearsSince(ym: string): number {
  const [y, m] = ym.split("-").map(Number);
  const ref = new Date(y, (m ?? 1) - 1, 1).getTime();
  const now = new Date("2026-04-01").getTime();
  return (now - ref) / (1000 * 60 * 60 * 24 * 365.25);
}

function nullNotes(): PriorityResult["notes"] {
  return { pt: [], en: [], es: [] };
}

function currentNotes(input: PriorityInput): PriorityResult["notes"] {
  const out = { pt: [] as string[], en: [] as string[], es: [] as string[] };
  if (input.country === "brazil") {
    out.pt.push("Brasil está CURRENT nesta categoria — sem fila. Você pode protocolar I-485 (Adjustment of Status) ou consular processing imediatamente.");
    out.en.push("Brazil is CURRENT in this category — no backlog. You can file I-485 (Adjustment of Status) or pursue consular processing immediately.");
    out.es.push("Brasil está CURRENT — sin fila. Puedes presentar I-485 o consular processing de inmediato.");
  } else {
    out.pt.push("Categoria CURRENT — sem fila para esta combinação.");
    out.en.push("Category CURRENT — no backlog for this combination.");
    out.es.push("Categoría CURRENT — sin fila.");
  }
  return out;
}

function backlogNotes(input: PriorityInput, years: number): PriorityResult["notes"] {
  const out = { pt: [] as string[], en: [] as string[], es: [] as string[] };
  const yrs = Math.round(years * 10) / 10;

  out.pt.push(`Data de corte indicativa (abril/2026): ${input.category} ${labelCountryPT(input.country)}. Fila aproximada: ${yrs} anos.`);
  out.en.push(`Indicative April 2026 cutoff: ${input.category} ${labelCountryEN(input.country)}. Approximate backlog: ${yrs} years.`);
  out.es.push(`Corte indicativo (abril/2026): ${input.category}. Fila aprox.: ${yrs} años.`);

  if (input.country === "brazil" && input.category === "EB-2") {
    out.pt.push("EB-2 NIW com self-petition é uma das rotas mais rápidas para brasileiros quando há caso forte — mas depende da força do perfil (NIW Dhanasar).");
    out.en.push("EB-2 NIW self-petition is one of the fastest routes for Brazilians with strong profiles (NIW Dhanasar test).");
    out.es.push("EB-2 NIW self-petition es una de las rutas más rápidas para perfiles fuertes.");
  }

  if (years >= 10) {
    out.pt.push("Fila severa — considere categorias alternativas (EB-2 NIW, EB-5) ou vistos de trabalho (L-1, O-1) como ponte.");
    out.en.push("Severe backlog — consider alternative categories (EB-2 NIW, EB-5) or work visas (L-1, O-1) as a bridge.");
    out.es.push("Backlog severo — considera EB-2 NIW, EB-5, o visas de trabajo como puente.");
  }

  return out;
}

function labelCountryPT(c: Country): string {
  return {
    brazil: "(Brasil)",
    all_other: "(demais países)",
    china: "(China)",
    india: "(Índia)",
    mexico: "(México)",
    philippines: "(Filipinas)",
  }[c];
}
function labelCountryEN(c: Country): string {
  return {
    brazil: "(Brazil)",
    all_other: "(All Other)",
    china: "(China)",
    india: "(India)",
    mexico: "(Mexico)",
    philippines: "(Philippines)",
  }[c];
}

export function formatCutoff(ym: string | null): string {
  if (!ym) return "—";
  if (ym === "CURRENT") return "CURRENT";
  const [y, m] = ym.split("-").map(Number);
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  return `${monthNames[(m ?? 1) - 1]} ${y}`;
}
