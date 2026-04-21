"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import {
  computePriorityDate,
  formatCutoff,
  type PriorityCategory,
  type Country,
} from "@/lib/tools/priority-date";
import { FIRM } from "@/lib/constants";

type L = "pt" | "en" | "es";

const COPY = {
  pt: {
    categoryLabel: "Categoria de visto",
    employmentHeading: "Baseado em emprego",
    familyHeading: "Família (Family-Sponsored)",
    countryLabel: "País de nascimento",
    countries: {
      brazil: "Brasil",
      all_other: "Outro país",
      china: "China",
      india: "Índia",
      mexico: "México",
      philippines: "Filipinas",
    },
    statusLabel: "Status para Brasil (abril/2026)",
    status: {
      current: "CURRENT — sem fila",
      limited: "Fila curta",
      backlogged: "Com fila",
      severe_backlog: "Fila severa",
    },
    waitLabel: "Espera aproximada",
    waitValue: (y: number) => `~${y} anos`,
    finalActionLabel: "Final Action Date (indicativo)",
    filingDateLabel: "Filing Date (indicativo)",
    notesLabel: "Leitura estratégica",
    ctaTitle: "Quer analisar sua categoria?",
    ctaBody: `Os cortes mudam todo mês no Visa Bulletin do Departamento de Estado. Se Brasil está em fila, EB-2 NIW e EB-5 podem ser atalhos. WhatsApp ${FIRM.phone}.`,
    consultCta: "Agendar consulta",
    whatsappCta: "WhatsApp",
    disclaimer:
      "Indicativo — baseado no Visa Bulletin abril/2026 e tendência dos 12 meses anteriores. Cortes mudam mensalmente. Consulte o Visa Bulletin oficial (travel.state.gov) e um advogado para análise do seu caso.",
    categoryNames: {
      "EB-1": "EB-1 (pesquisadores, executivos, habilidade extraordinária)",
      "EB-2": "EB-2 (mestrado/PhD + NIW)",
      "EB-3": "EB-3 Skilled (bacharelado + 2 anos exp.)",
      "EB-3-Other": "EB-3 Other Workers (não-qualificado)",
      "EB-4": "EB-4 (religiosos + casos especiais)",
      "EB-5-Unreserved": "EB-5 Unreserved (padrão US$ 1,05M)",
      "EB-5-Set-Aside": "EB-5 Set-Aside (Rural/Urban/Infraestrutura TEA)",
      F1: "F1 (filhos solteiros adultos de USC)",
      F2A: "F2A (cônjuge/filhos menores de LPR)",
      F2B: "F2B (filhos solteiros adultos de LPR)",
      F3: "F3 (filhos casados de USC)",
      F4: "F4 (irmãos de USC)",
    },
  },
  en: {
    categoryLabel: "Visa category",
    employmentHeading: "Employment-based",
    familyHeading: "Family-sponsored",
    countryLabel: "Country of chargeability",
    countries: {
      brazil: "Brazil",
      all_other: "All Other",
      china: "China",
      india: "India",
      mexico: "Mexico",
      philippines: "Philippines",
    },
    statusLabel: "Status (April 2026)",
    status: {
      current: "CURRENT — no backlog",
      limited: "Minor backlog",
      backlogged: "Backlogged",
      severe_backlog: "Severe backlog",
    },
    waitLabel: "Approximate wait",
    waitValue: (y: number) => `~${y} years`,
    finalActionLabel: "Final Action Date (indicative)",
    filingDateLabel: "Filing Date (indicative)",
    notesLabel: "Strategic read",
    ctaTitle: "Want to map your category?",
    ctaBody: `Cutoffs move every month on the DOS Visa Bulletin. If Brazil is backlogged, EB-2 NIW and EB-5 are often faster. WhatsApp ${FIRM.phone}.`,
    consultCta: "Book consultation",
    whatsappCta: "WhatsApp",
    disclaimer:
      "Indicative — based on April 2026 Visa Bulletin and 12-month trend. Cutoffs change monthly. Check travel.state.gov and consult an attorney for case-specific analysis.",
    categoryNames: {
      "EB-1": "EB-1 (extraordinary ability, researchers, executives)",
      "EB-2": "EB-2 (advanced degree + NIW)",
      "EB-3": "EB-3 Skilled (bachelor's + 2 yrs exp.)",
      "EB-3-Other": "EB-3 Other Workers (unskilled)",
      "EB-4": "EB-4 (religious + special cases)",
      "EB-5-Unreserved": "EB-5 Unreserved ($1.05M standard)",
      "EB-5-Set-Aside": "EB-5 Set-Aside (Rural/Urban/Infra TEA)",
      F1: "F1 (adult unmarried children of USC)",
      F2A: "F2A (spouses/minor children of LPRs)",
      F2B: "F2B (adult unmarried children of LPRs)",
      F3: "F3 (married children of USC)",
      F4: "F4 (siblings of USC)",
    },
  },
  es: {
    categoryLabel: "Categoría de visa",
    employmentHeading: "Basada en empleo",
    familyHeading: "Familia",
    countryLabel: "País de imputación",
    countries: {
      brazil: "Brasil",
      all_other: "Otro país",
      china: "China",
      india: "India",
      mexico: "México",
      philippines: "Filipinas",
    },
    statusLabel: "Estado (abril/2026)",
    status: {
      current: "CURRENT — sin fila",
      limited: "Fila corta",
      backlogged: "Con fila",
      severe_backlog: "Fila severa",
    },
    waitLabel: "Espera aproximada",
    waitValue: (y: number) => `~${y} años`,
    finalActionLabel: "Final Action Date (indicativo)",
    filingDateLabel: "Filing Date (indicativo)",
    notesLabel: "Lectura estratégica",
    ctaTitle: "¿Quieres mapear tu categoría?",
    ctaBody: `Los cortes cambian cada mes en el Visa Bulletin. EB-2 NIW y EB-5 suelen ser más rápidos si hay fila. WhatsApp ${FIRM.phone}.`,
    consultCta: "Agendar consulta",
    whatsappCta: "WhatsApp",
    disclaimer:
      "Indicativo — basado en Visa Bulletin de abril/2026 y tendencia. Consulta travel.state.gov y un abogado.",
    categoryNames: {
      "EB-1": "EB-1 (habilidad extraordinaria, investigadores, ejecutivos)",
      "EB-2": "EB-2 (grado avanzado + NIW)",
      "EB-3": "EB-3 Skilled (licenciatura + 2 años exp.)",
      "EB-3-Other": "EB-3 Other Workers (no calificado)",
      "EB-4": "EB-4 (religiosos + casos especiales)",
      "EB-5-Unreserved": "EB-5 Unreserved (US$ 1,05M estándar)",
      "EB-5-Set-Aside": "EB-5 Set-Aside (Rural/Urban/Infra TEA)",
      F1: "F1 (hijos solteros adultos de USC)",
      F2A: "F2A (cónyuges/hijos menores de LPR)",
      F2B: "F2B (hijos solteros adultos de LPR)",
      F3: "F3 (hijos casados de USC)",
      F4: "F4 (hermanos de USC)",
    },
  },
} as const;

const EMPLOYMENT: PriorityCategory[] = [
  "EB-1",
  "EB-2",
  "EB-3",
  "EB-3-Other",
  "EB-4",
  "EB-5-Unreserved",
  "EB-5-Set-Aside",
];
const FAMILY: PriorityCategory[] = ["F1", "F2A", "F2B", "F3", "F4"];

export function PriorityDateCalculator({ locale }: { locale: L }) {
  const copy = COPY[locale];
  const [category, setCategory] = useState<PriorityCategory>("EB-2");
  const [country, setCountry] = useState<Country>("brazil");
  const result = useMemo(
    () => computePriorityDate({ category, country }),
    [category, country],
  );

  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid gap-8 md:grid-cols-5">
          {/* Input panel */}
          <div className="md:col-span-2 space-y-6">
            <div className="rounded-[var(--radius-lg)] border border-gold/20 bg-white p-6 shadow-sm">
              <p className="text-xs font-medium uppercase tracking-wider text-gold">
                {copy.countryLabel}
              </p>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value as Country)}
                className="mt-2 w-full rounded-[var(--radius-md)] border border-border bg-white px-3 py-2.5 text-sm text-ink focus:border-gold focus:outline-none"
              >
                {(Object.keys(copy.countries) as Country[]).map((c) => (
                  <option key={c} value={c}>
                    {copy.countries[c]}
                  </option>
                ))}
              </select>

              <fieldset className="mt-6 space-y-2">
                <legend className="text-xs font-medium uppercase tracking-wider text-gold">
                  {copy.categoryLabel}
                </legend>
                <div className="mt-3 text-xs font-medium text-ink">
                  {copy.employmentHeading}
                </div>
                {EMPLOYMENT.map((c) => (
                  <CategoryOption
                    key={c}
                    value={c}
                    current={category}
                    onChange={setCategory}
                    label={copy.categoryNames[c]}
                  />
                ))}
                <div className="mt-4 text-xs font-medium text-ink">
                  {copy.familyHeading}
                </div>
                {FAMILY.map((c) => (
                  <CategoryOption
                    key={c}
                    value={c}
                    current={category}
                    onChange={setCategory}
                    label={copy.categoryNames[c]}
                  />
                ))}
              </fieldset>
            </div>
          </div>

          {/* Result panel */}
          <div className="md:col-span-3">
            <div className="rounded-[var(--radius-lg)] bg-ink p-6 text-cream shadow-xl md:p-8">
              <p className="text-xs font-medium uppercase tracking-wider text-gold">
                {copy.statusLabel}
              </p>
              <div
                className={cn(
                  "mt-2 font-heading text-3xl font-semibold md:text-4xl",
                  result.status === "current" ? "text-emerald-300" : "text-cream",
                )}
              >
                {copy.status[result.status]}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-cream/10 pt-4 text-sm">
                <div>
                  <div className="text-xs uppercase tracking-wider text-cream/50">
                    {copy.waitLabel}
                  </div>
                  <div className="mt-0.5 text-base font-semibold text-cream">
                    {result.approxWaitYears === null
                      ? "—"
                      : copy.waitValue(result.approxWaitYears)}
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-cream/50">
                    {copy.finalActionLabel}
                  </div>
                  <div className="mt-0.5 text-base font-semibold text-cream">
                    {formatCutoff(result.finalActionDate)}
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="text-xs uppercase tracking-wider text-cream/50">
                    {copy.filingDateLabel}
                  </div>
                  <div className="mt-0.5 text-base font-semibold text-cream">
                    {formatCutoff(result.filingDate)}
                  </div>
                </div>
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
                <a
                  href={`/${locale}/consultation`}
                  className="inline-flex items-center justify-center rounded-[var(--radius-md)] bg-gold px-5 py-2.5 text-sm font-medium text-white hover:bg-gold/90"
                >
                  {copy.consultCta}
                </a>
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

function CategoryOption({
  value,
  current,
  onChange,
  label,
}: {
  value: PriorityCategory;
  current: PriorityCategory;
  onChange: (v: PriorityCategory) => void;
  label: string;
}) {
  const selected = current === value;
  return (
    <label
      className={cn(
        "flex cursor-pointer items-center gap-3 rounded-[var(--radius-md)] border p-2.5 text-xs transition-colors",
        selected
          ? "border-gold bg-gold/5 text-ink"
          : "border-border text-ink hover:border-gold/40",
      )}
    >
      <input
        type="radio"
        name="category"
        value={value}
        checked={selected}
        onChange={() => onChange(value)}
        className="h-4 w-4 accent-gold"
      />
      <span>{label}</span>
    </label>
  );
}
