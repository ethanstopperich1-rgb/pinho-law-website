"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/ui/magnetic-button";
import {
  computeBrUsTax,
  formatUsd,
  type FlowDirection,
  type IncomeKind,
} from "@/lib/tools/br-us-tax";
import { FIRM } from "@/lib/constants";

type L = "pt" | "en" | "es";

const COPY = {
  pt: {
    treatyAlert: {
      tag: "Verdade que surpreende",
      title: "O tratado Brasil–EUA NUNCA foi ratificado",
      body: "O texto negociado em 1967 nunca foi aprovado pelo Senado. Não há tratado bilateral de dupla tributação em vigor entre Brasil e EUA. O único acordo vigente é o de Totalização (Previdência), de 2018. Esta calculadora mostra sua exposição real.",
    },
    directionLabel: "Direção do rendimento",
    directions: {
      us_to_br: "Residente no Brasil recebendo dos EUA",
      br_to_us: "Residente nos EUA recebendo do Brasil",
    },
    incomeLabel: "Tipo de rendimento",
    incomes: {
      wages: "Salário",
      self_employment: "Autônomo / profissional liberal",
      dividends: "Dividendos",
      interest: "Juros",
      rental: "Aluguel",
      capital_gains: "Ganho de capital",
      social_security: "Previdência Social / INSS",
    },
    grossLabel: "Valor bruto (USD, anual)",
    sourceRateLabel: "Imposto na fonte",
    residenceRateLabel: "Imposto no país de residência",
    creditLabel: "Crédito aplicado",
    totalLabel: "Imposto total líquido",
    effectiveLabel: "Alíquota efetiva",
    totalizationBadge: "Acordo de Totalização aplicável",
    noTreatyBadge: "SEM proteção de tratado",
    notesLabel: "Observações",
    ctaTitle: "Quer estruturar para minimizar?",
    ctaBody: `Sem tratado, estruturar corretamente muda tudo. Trabalhamos com contadores brasileiros e americanos integrados. WhatsApp ${FIRM.phone}.`,
    consultCta: "Agendar consulta",
    whatsappCta: "WhatsApp",
    disclaimer:
      "Ferramenta educacional — alíquotas refletem IRS + RFB 2026 mas casos reais dependem de estado (nos EUA), deduções, elegibilidade §871(d), status de non-qualified dividend, FEIE, etc. Não constitui assessoria tributária. Consulte contador em ambos os países.",
  },
  en: {
    treatyAlert: {
      tag: "Surprising truth",
      title: "The Brazil–US treaty was NEVER ratified",
      body: "The 1967 negotiated draft was never approved by the Senate. There is NO bilateral tax treaty in force between Brazil and the US. The only existing agreement is the 2018 Totalization (Social Security) pact. This calculator shows your real exposure.",
    },
    directionLabel: "Income flow",
    directions: {
      us_to_br: "Brazil-resident receiving US income",
      br_to_us: "US-resident receiving Brazil income",
    },
    incomeLabel: "Income type",
    incomes: {
      wages: "Wages / salary",
      self_employment: "Self-employment / freelance",
      dividends: "Dividends",
      interest: "Interest",
      rental: "Rental",
      capital_gains: "Capital gains",
      social_security: "Social Security / INSS",
    },
    grossLabel: "Annual gross (USD)",
    sourceRateLabel: "Source-country tax",
    residenceRateLabel: "Residence-country tax",
    creditLabel: "Credit applied",
    totalLabel: "Net total tax",
    effectiveLabel: "Effective rate",
    totalizationBadge: "Totalization Agreement applies",
    noTreatyBadge: "NO treaty protection",
    notesLabel: "Notes",
    ctaTitle: "Want to structure to minimize?",
    ctaBody: `With no treaty, structuring matters. We work with integrated Brazilian + US accountants. WhatsApp ${FIRM.phone}.`,
    consultCta: "Book consultation",
    whatsappCta: "WhatsApp",
    disclaimer:
      "Educational tool — rates reflect 2026 IRS + RFB but real cases depend on state (US), deductions, §871(d) election, NQ dividend status, FEIE, etc. Not tax advice. Consult accountants in both countries.",
  },
  es: {
    treatyAlert: {
      tag: "Verdad sorprendente",
      title: "El tratado Brasil–EE.UU. NUNCA fue ratificado",
      body: "El texto de 1967 nunca fue aprobado por el Senado. No hay tratado bilateral de doble tributación vigente. El único acuerdo es el de Totalización (2018).",
    },
    directionLabel: "Dirección del ingreso",
    directions: {
      us_to_br: "Residente en Brasil recibiendo de EE.UU.",
      br_to_us: "Residente en EE.UU. recibiendo de Brasil",
    },
    incomeLabel: "Tipo de ingreso",
    incomes: {
      wages: "Salario",
      self_employment: "Autónomo",
      dividends: "Dividendos",
      interest: "Intereses",
      rental: "Alquiler",
      capital_gains: "Ganancia de capital",
      social_security: "Seguridad Social / INSS",
    },
    grossLabel: "Bruto anual (USD)",
    sourceRateLabel: "Impuesto en la fuente",
    residenceRateLabel: "Impuesto residencia",
    creditLabel: "Crédito aplicado",
    totalLabel: "Impuesto neto total",
    effectiveLabel: "Tasa efectiva",
    totalizationBadge: "Totalización aplica",
    noTreatyBadge: "SIN tratado",
    notesLabel: "Notas",
    ctaTitle: "¿Estructurar para minimizar?",
    ctaBody: `Sin tratado, estructurar cambia todo. WhatsApp ${FIRM.phone}.`,
    consultCta: "Agendar consulta",
    whatsappCta: "WhatsApp",
    disclaimer:
      "Herramienta educativa. No es asesoría tributaria. Consulta contadores en ambos países.",
  },
} as const;

export function BrUsTaxCalculator({ locale }: { locale: L }) {
  const copy = COPY[locale];
  const [direction, setDirection] = useState<FlowDirection>("us_to_br");
  const [incomeKind, setIncomeKind] = useState<IncomeKind>("dividends");
  const [gross, setGross] = useState(100_000);

  const result = useMemo(
    () => computeBrUsTax({ direction, incomeKind, grossUsd: gross }),
    [direction, incomeKind, gross],
  );
  const intlLocale =
    locale === "pt" ? "pt-BR" : locale === "es" ? "es-419" : "en-US";

  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        {/* Treaty reality alert — always visible */}
        <div className="mb-8 rounded-[var(--radius-lg)] border border-red-500/40 bg-red-50 p-5 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-700 text-lg font-bold">
              !
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-red-700">
                {copy.treatyAlert.tag}
              </div>
              <h2 className="mt-1 font-heading text-lg font-semibold text-ink md:text-xl">
                {copy.treatyAlert.title}
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                {copy.treatyAlert.body}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-5">
          {/* Inputs */}
          <div className="md:col-span-2">
            <div className="rounded-[var(--radius-lg)] border border-gold/20 bg-white p-6 shadow-sm space-y-6">
              <fieldset className="space-y-1.5">
                <legend className="text-xs font-medium uppercase tracking-wider text-gold">
                  {copy.directionLabel}
                </legend>
                {(Object.keys(copy.directions) as FlowDirection[]).map((d) => (
                  <label
                    key={d}
                    className={cn(
                      "mt-1.5 flex cursor-pointer items-center gap-3 rounded-[var(--radius-md)] border p-2.5 text-xs transition-colors",
                      direction === d
                        ? "border-gold bg-gold/5 text-ink"
                        : "border-border text-ink hover:border-gold/40",
                    )}
                  >
                    <input
                      type="radio"
                      checked={direction === d}
                      onChange={() => setDirection(d)}
                      className="h-4 w-4 accent-gold"
                    />
                    <span>{copy.directions[d]}</span>
                  </label>
                ))}
              </fieldset>

              <fieldset className="space-y-1.5">
                <legend className="text-xs font-medium uppercase tracking-wider text-gold">
                  {copy.incomeLabel}
                </legend>
                {(Object.keys(copy.incomes) as IncomeKind[]).map((k) => (
                  <label
                    key={k}
                    className={cn(
                      "mt-1.5 flex cursor-pointer items-center gap-3 rounded-[var(--radius-md)] border p-2.5 text-xs transition-colors",
                      incomeKind === k
                        ? "border-gold bg-gold/5 text-ink"
                        : "border-border text-ink hover:border-gold/40",
                    )}
                  >
                    <input
                      type="radio"
                      checked={incomeKind === k}
                      onChange={() => setIncomeKind(k)}
                      className="h-4 w-4 accent-gold"
                    />
                    <span>{copy.incomes[k]}</span>
                  </label>
                ))}
              </fieldset>

              <label className="block">
                <span className="text-xs font-medium uppercase tracking-wider text-gold">
                  {copy.grossLabel}
                </span>
                <input
                  type="number"
                  min={0}
                  step={1000}
                  value={gross}
                  onChange={(e) => setGross(Math.max(0, Number(e.target.value)))}
                  className="mt-1.5 w-full rounded-[var(--radius-md)] border border-border bg-white px-3 py-2 text-sm text-ink focus:border-gold focus:outline-none"
                />
              </label>
            </div>
          </div>

          {/* Result */}
          <div className="md:col-span-3">
            <div className="rounded-[var(--radius-lg)] bg-ink p-6 text-cream shadow-xl md:p-8">
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full border border-red-400/50 bg-red-500/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-red-200">
                  {copy.noTreatyBadge}
                </span>
                {result.totalizationApplies && (
                  <span className="inline-flex items-center rounded-full border border-emerald-400/50 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-emerald-200">
                    {copy.totalizationBadge}
                  </span>
                )}
              </div>

              <p className="mt-4 text-xs font-medium uppercase tracking-wider text-gold">
                {copy.totalLabel}
              </p>
              <div className="mt-2 font-heading text-4xl font-semibold text-cream md:text-5xl">
                {formatUsd(result.totalTaxUsd, intlLocale)}
              </div>
              <div className="mt-1.5 text-sm text-cream/70">
                {copy.effectiveLabel}: <span className="text-cream">{result.effectiveRate}%</span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-cream/10 pt-4 text-sm">
                <Stat label={copy.sourceRateLabel} rate={result.sourceRate} amount={result.sourceTaxUsd} locale={intlLocale} />
                <Stat label={copy.residenceRateLabel} rate={result.residenceRate} amount={result.residenceTaxBeforeCreditUsd} locale={intlLocale} />
                <Stat label={copy.creditLabel} rate={-1} amount={-result.creditApplied} locale={intlLocale} variant="credit" />
              </div>

              <div className="mt-6">
                <div className="text-xs font-medium uppercase tracking-wider text-cream/50">
                  {copy.notesLabel}
                </div>
                <ul className="mt-2 space-y-2">
                  {result.notes[locale].map((n) => (
                    <li key={n} className="flex gap-2 text-xs leading-relaxed text-cream/80">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 rounded-[var(--radius-md)] border border-gold/20 bg-white p-6 shadow-sm">
              <h3 className="font-heading text-lg font-semibold text-ink">
                {copy.ctaTitle}
              </h3>
              <p className="mt-1.5 text-sm text-ink-muted">{copy.ctaBody}</p>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <MagneticButton distance={0.3}>
                  <a
                  href={`/${locale}/consultation`}
                  className="inline-flex items-center justify-center rounded-[var(--radius-md)] bg-gold px-5 py-2.5 text-sm font-medium text-white hover:bg-gold/90"
                >
                  {copy.consultCta}
                </a>
                </MagneticButton>
                <a
                  href={`https://wa.me/${FIRM.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-[var(--radius-md)] border border-gold bg-white px-5 py-2.5 text-sm font-medium text-gold hover:bg-gold/5"
                >
                  {copy.whatsappCta}
                </a>
              </div>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-ink-muted/70">
              {copy.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  label,
  rate,
  amount,
  locale,
  variant,
}: {
  label: string;
  rate: number;
  amount: number;
  locale: string;
  variant?: "credit";
}) {
  return (
    <div>
      <div className="text-xs uppercase tracking-wider text-cream/50">{label}</div>
      <div className={cn("mt-0.5 text-base font-semibold", variant === "credit" ? "text-emerald-300" : "text-cream")}>
        {formatUsd(amount, locale)}
      </div>
      {rate >= 0 && (
        <div className="text-xs text-cream/50">@ {rate}%</div>
      )}
    </div>
  );
}
