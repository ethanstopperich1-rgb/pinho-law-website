// FIRPTA withholding calculator — pure math.
// Source of truth: FIRPTA Withholding table 2026 captured in
// website/content/spec-parts-2-5.md §Research Addendum, originally
// verified against IRS Topic No. 700 / terms.law FIRPTA breakdown.
// Buyer-as-residence exemptions apply only when buyer signs an
// affidavit of intent; otherwise investment rates apply.

export type BuyerUse = "residence" | "investment";
export type SellerType = "individual" | "foreign_corporation";

export interface FirptaInput {
  salePrice: number;
  buyerUse: BuyerUse;
  sellerType: SellerType;
}

export interface FirptaResult {
  withholdingAmount: number;
  withholdingRate: number; // 0, 0.1, 0.15, 0.21
  bracket:
    | "exempt-under-300k"
    | "residence-under-1m"
    | "residence-over-1m"
    | "investment"
    | "foreign-corp";
  bracketLabel: { pt: string; en: string; es: string };
  note: { pt: string; en: string; es: string };
}

/**
 * Compute FIRPTA withholding per the 2026 schedule.
 *
 * Foreign-corp sellers: flat 21% (corporate rate), overrides buyer-use brackets.
 * Individuals:
 *   residence ≤ $300k   → 0%
 *   residence $300k-1M  → 10%
 *   residence > $1M     → 15%
 *   investment (any)    → 15%
 */
export function computeFirpta(input: FirptaInput): FirptaResult {
  const { salePrice, buyerUse, sellerType } = input;
  if (!Number.isFinite(salePrice) || salePrice < 0) {
    return {
      withholdingAmount: 0,
      withholdingRate: 0,
      bracket: "exempt-under-300k",
      bracketLabel: { pt: "Preço inválido", en: "Invalid price", es: "Precio inválido" },
      note: {
        pt: "Informe um preço de venda válido.",
        en: "Enter a valid sale price.",
        es: "Ingresa un precio de venta válido.",
      },
    };
  }

  if (sellerType === "foreign_corporation") {
    return {
      withholdingAmount: salePrice * 0.21,
      withholdingRate: 0.21,
      bracket: "foreign-corp",
      bracketLabel: {
        pt: "Vendedor pessoa jurídica estrangeira",
        en: "Foreign corporation seller",
        es: "Vendedor persona jurídica extranjera",
      },
      note: {
        pt: "Pessoa jurídica estrangeira vendendo imóvel nos EUA: retenção corporativa de 21% sobre o preço bruto, independente do uso pelo comprador.",
        en: "Foreign corporation selling US real estate: 21% corporate withholding on gross price regardless of buyer use.",
        es: "Persona jurídica extranjera vendiendo inmueble en EE.UU.: retención corporativa del 21% sobre el precio bruto.",
      },
    };
  }

  if (buyerUse === "residence" && salePrice <= 300_000) {
    return {
      withholdingAmount: 0,
      withholdingRate: 0,
      bracket: "exempt-under-300k",
      bracketLabel: {
        pt: "Isento — residência até US$ 300.000",
        en: "Exempt — residence under $300,000",
        es: "Exento — residencia hasta US$ 300.000",
      },
      note: {
        pt: "Comprador atesta uso como residência e preço ≤ US$ 300.000: isenção FIRPTA. Requer affidavit de boa-fé do comprador.",
        en: "Buyer attests residence use and price ≤ $300K: FIRPTA exempt. Requires buyer good-faith affidavit.",
        es: "Comprador atesta uso residencial y precio ≤ US$ 300.000: exento de FIRPTA. Requiere affidávit del comprador.",
      },
    };
  }

  if (buyerUse === "residence" && salePrice <= 1_000_000) {
    return {
      withholdingAmount: salePrice * 0.1,
      withholdingRate: 0.1,
      bracket: "residence-under-1m",
      bracketLabel: {
        pt: "Residência — US$ 300.000 a US$ 1M",
        en: "Residence — $300K to $1M",
        es: "Residencia — US$ 300.000 a US$ 1M",
      },
      note: {
        pt: "Uso como residência entre US$ 300K e US$ 1M: retenção de 10% sobre o preço bruto.",
        en: "Residence use between $300K and $1M: 10% withholding on gross price.",
        es: "Uso residencial entre US$ 300K y US$ 1M: retención del 10% sobre el precio bruto.",
      },
    };
  }

  if (buyerUse === "residence") {
    return {
      withholdingAmount: salePrice * 0.15,
      withholdingRate: 0.15,
      bracket: "residence-over-1m",
      bracketLabel: {
        pt: "Residência acima de US$ 1M",
        en: "Residence over $1M",
        es: "Residencia superior a US$ 1M",
      },
      note: {
        pt: "Residência acima de US$ 1M: retenção de 15% sobre o preço bruto.",
        en: "Residence over $1M: 15% withholding on gross price.",
        es: "Residencia superior a US$ 1M: retención del 15% sobre el precio bruto.",
      },
    };
  }

  // investment, any price
  return {
    withholdingAmount: salePrice * 0.15,
    withholdingRate: 0.15,
    bracket: "investment",
    bracketLabel: {
      pt: "Imóvel de investimento",
      en: "Investment property",
      es: "Inmueble de inversión",
    },
    note: {
      pt: "Imóvel usado como investimento (aluguel, STR, flip): retenção de 15% sobre o preço bruto.",
      en: "Property used as investment (rental, STR, flip): 15% withholding on gross price.",
      es: "Propiedad usada como inversión (alquiler, STR, flip): retención del 15% sobre el precio bruto.",
    },
  };
}

export function formatUsd(n: number, locale = "en-US"): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}
