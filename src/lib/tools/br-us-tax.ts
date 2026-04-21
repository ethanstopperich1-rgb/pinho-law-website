// Brazil–US Tax Treaty Calculator — REALITY CHECK TOOL.
//
// CRITICAL FACT: The Brazil–US bilateral tax treaty was NEGOTIATED but
// NEVER RATIFIED. There is NO comprehensive tax treaty between Brazil
// and the US. Many Brazilians assume otherwise — this tool corrects that
// and computes actual double-taxation exposure under current law.
//
// What DOES exist:
//   - Totalization Agreement (Social Security only) — signed 2015,
//     effective Oct 1, 2018. Covers Social Security / INSS contributions.
//   - Reciprocal tax-credit recognition (informal, IRS Rev. Rul. 75-43
//     + Brazilian Declaração de Ajuste Anual credit mechanism). Both
//     countries credit each other's income tax unilaterally when claimed.
//
// Sources: IRS Pub. 901, RFB IN 208/2002, Brazil MRE negotiating record
// (treaty signed 1967 but never submitted to Senate), US Treasury model
// treaty diligence. Spec: website/content/spec-parts-2-5.md.

export type FlowDirection =
  | "us_to_br" // Brazilian tax resident receiving US-source income
  | "br_to_us"; // US tax resident receiving Brazil-source income

export type IncomeKind =
  | "wages"
  | "self_employment"
  | "dividends"
  | "interest"
  | "rental"
  | "capital_gains"
  | "social_security";

export interface BrUsTaxInput {
  direction: FlowDirection;
  incomeKind: IncomeKind;
  grossUsd: number;
}

export interface BrUsTaxResult {
  /** Source-country withholding/tax rate applied (percentage). */
  sourceRate: number;
  sourceTaxUsd: number;
  /** Residence-country tax rate applied to the same income (percentage). */
  residenceRate: number;
  residenceTaxBeforeCreditUsd: number;
  /** Foreign tax credit applied against residence tax. */
  creditApplied: number;
  /** Net total tax paid (source + residence net of credit). */
  totalTaxUsd: number;
  /** Effective combined rate (%). */
  effectiveRate: number;
  /** Treaty protection applies? (Always false — no ratified treaty.) */
  treatyProtection: boolean;
  /** Totalization Agreement applies to this income? */
  totalizationApplies: boolean;
  notes: { pt: string[]; en: string[]; es: string[] };
}

// Source-country rates applied at payment when no treaty reduces them.
// US statutory non-resident withholding = 30% on FDAP (dividends,
// interest, royalties) except portfolio interest exempt + capital
// gains exempt for non-residents (with FIRPTA exception for real estate).
// Brazilian withholding on cross-border payments varies: typically 15%
// on most items, 25% when paid to low-tax jurisdictions (US not listed).
// Capital gains in Brazil: 15–22.5% progressive (CGT).
function sourceRateForUsOrigin(k: IncomeKind): number {
  switch (k) {
    case "wages":
      return 22; // Approx effective federal bracket for mid-income wages.
    case "self_employment":
      return 25; // Federal + SE Tax 15.3% treated as separate; using approx.
    case "dividends":
      return 30; // FDAP non-resident withholding.
    case "interest":
      return 0; // Portfolio interest exemption for most interest to non-US.
    case "rental":
      return 30; // FDAP default; can elect net-basis at graduated rates.
    case "capital_gains":
      return 0; // Non-resident capital gains generally exempt (non-FIRPTA).
    case "social_security":
      return 0; // SS paid to Brazil residents — not withheld in US.
  }
}

function sourceRateForBrOrigin(k: IncomeKind): number {
  switch (k) {
    case "wages":
      return 27.5; // Top Brazilian IRPF bracket.
    case "self_employment":
      return 27.5;
    case "dividends":
      return 0; // Brazilian dividends exempt to individuals (pre-2024 reform; reform pending).
    case "interest":
      return 15; // IRRF on cross-border interest.
    case "rental":
      return 15;
    case "capital_gains":
      return 15; // Brazilian CGT baseline (up to 22.5% on gains >R$30M).
    case "social_security":
      return 11; // INSS employee baseline.
  }
}

function residenceRateFor(k: IncomeKind, direction: FlowDirection): number {
  // Residence = country the taxpayer lives in. Approximations.
  if (direction === "us_to_br") {
    // Brazilian tax resident: carne-leao for US-source income.
    switch (k) {
      case "dividends":
      case "interest":
      case "rental":
      case "capital_gains":
        return 15; // Monthly DARF on foreign income — 15% baseline.
      case "wages":
      case "self_employment":
        return 27.5;
      case "social_security":
        return 0; // Totalization + Brazilian exemption.
    }
  } else {
    // US tax resident: graduated federal + state.
    switch (k) {
      case "dividends":
        return 20; // Qualified div; 23.8% w/ NIIT.
      case "interest":
      case "rental":
        return 24;
      case "capital_gains":
        return 20;
      case "wages":
      case "self_employment":
        return 24;
      case "social_security":
        return 0;
    }
  }
  return 0;
}

export function computeBrUsTax(input: BrUsTaxInput): BrUsTaxResult {
  const isUsSource = input.direction === "us_to_br";
  const sourceRate = isUsSource
    ? sourceRateForUsOrigin(input.incomeKind)
    : sourceRateForBrOrigin(input.incomeKind);
  const residenceRate = residenceRateFor(input.incomeKind, input.direction);

  const sourceTax = (input.grossUsd * sourceRate) / 100;
  const residenceTaxBefore = (input.grossUsd * residenceRate) / 100;

  // Foreign tax credit: unilateral relief — residence country credits
  // source-country tax against residence tax up to residence-rate ceiling.
  const credit = Math.min(sourceTax, residenceTaxBefore);

  const totalTax = sourceTax + residenceTaxBefore - credit;
  const effectiveRate =
    input.grossUsd === 0 ? 0 : (totalTax / input.grossUsd) * 100;

  const totalizationApplies = input.incomeKind === "social_security";

  return {
    sourceRate,
    sourceTaxUsd: Math.round(sourceTax),
    residenceRate,
    residenceTaxBeforeCreditUsd: Math.round(residenceTaxBefore),
    creditApplied: Math.round(credit),
    totalTaxUsd: Math.round(totalTax),
    effectiveRate: Math.round(effectiveRate * 10) / 10,
    treatyProtection: false,
    totalizationApplies,
    notes: buildNotes(input, sourceTax, residenceTaxBefore, credit, totalizationApplies),
  };
}

function buildNotes(
  input: BrUsTaxInput,
  sourceTax: number,
  resTaxBefore: number,
  credit: number,
  totalization: boolean,
): BrUsTaxResult["notes"] {
  const out = { pt: [] as string[], en: [] as string[], es: [] as string[] };

  out.pt.push(
    "NÃO EXISTE tratado bilateral Brasil–EUA de dupla tributação ratificado. O texto de 1967 nunca foi aprovado pelo Senado. Proteção tributária vem apenas de créditos unilaterais.",
  );
  out.en.push(
    "There is NO ratified Brazil–US bilateral tax treaty. The 1967 draft was never ratified by the Senate. Tax relief comes only from unilateral foreign tax credits.",
  );
  out.es.push(
    "NO existe tratado bilateral Brasil–EE.UU. ratificado. El texto de 1967 nunca fue aprobado. Alivio viene solo de créditos unilaterales.",
  );

  if (sourceTax > 0 && resTaxBefore > 0 && credit < sourceTax) {
    const leak = sourceTax - credit;
    out.pt.push(
      `Vazamento de $${Math.round(leak)} USD: o imposto na fonte excedeu o crédito disponível no país de residência — este é o problema central de não haver tratado.`,
    );
    out.en.push(
      `$${Math.round(leak)} USD leakage: source-country tax exceeds available foreign tax credit at residence — the core problem of having no treaty.`,
    );
    out.es.push(
      `Fuga de $${Math.round(leak)} USD: el impuesto en la fuente excede el crédito disponible.`,
    );
  }

  if (totalization) {
    out.pt.push(
      "O Acordo de Totalização Brasil–EUA (vigor desde 1/out/2018) cobre Previdência Social/INSS. Evita pagar contribuição nos dois países simultaneamente.",
    );
    out.en.push(
      "The Brazil–US Totalization Agreement (in force since Oct 1, 2018) covers Social Security / INSS. Prevents paying contributions to both systems at once.",
    );
    out.es.push(
      "El Acuerdo de Totalización Brasil–EE.UU. (desde oct 2018) cubre Seguridad Social / INSS.",
    );
  }

  if (input.incomeKind === "dividends" && input.direction === "us_to_br") {
    out.pt.push(
      "Dividendos de empresas norte-americanas para brasileiros sofrem 30% de withholding nos EUA. Brasil concede crédito até 15% — sobram 15 pontos sem crédito. Estruturar via holding ou entidade dos EUA pode mitigar.",
    );
    out.en.push(
      "US dividends to Brazilian residents face 30% FDAP withholding. Brazil credits up to 15% — 15 pts of double tax remain. Structuring through a US holding may mitigate.",
    );
    out.es.push(
      "Dividendos de EE.UU. a residentes brasileños: 30% withholding. Brasil acredita hasta 15%. 15 pts sin crédito.",
    );
  }

  if (input.incomeKind === "capital_gains") {
    out.pt.push(
      "Ganhos de capital: não-residentes normalmente isentos nos EUA (exceto FIRPTA para imóveis). Brasil tributa ganhos em 15–22,5%.",
    );
    out.en.push(
      "Capital gains: non-residents generally exempt from US tax (FIRPTA for real estate is the exception). Brazil taxes gains at 15–22.5%.",
    );
    out.es.push(
      "Ganancias de capital: no residentes generalmente exentos en EE.UU. (excepto FIRPTA).",
    );
  }

  if (input.incomeKind === "rental" && input.direction === "us_to_br") {
    out.pt.push(
      "Aluguel de imóvel nos EUA: eleição 871(d) para tributar no modo 'net effectively connected' reduz de 30% bruto para rate graduada sobre lucro líquido — quase sempre vale a pena.",
    );
    out.en.push(
      "US rental income: §871(d) election to be taxed as effectively connected on net basis cuts the 30% gross rate to graduated rates on net income — almost always worth filing.",
    );
    out.es.push(
      "Alquiler EE.UU.: elección §871(d) reduce la tasa bruta del 30% a tasa graduada sobre neto.",
    );
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
