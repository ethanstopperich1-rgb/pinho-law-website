"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import {
  computeGcTimeline,
  formatMonths,
  type GcPathway,
} from "@/lib/tools/greencard-timeline";
import type { Country } from "@/lib/tools/priority-date";
import { FIRM } from "@/lib/constants";

type L = "pt" | "en" | "es";

const PATHWAYS: Array<{ group: { pt: string; en: string; es: string }; items: GcPathway[] }> = [
  {
    group: { pt: "Baseado em emprego", en: "Employment-based", es: "Basada en empleo" },
    items: ["EB-1A", "EB-2-NIW", "EB-2-PERM", "EB-3-PERM"],
  },
  {
    group: { pt: "Investidor", en: "Investor", es: "Inversionista" },
    items: ["EB-5-RC-Rural", "EB-5-RC-Urban"],
  },
  {
    group: { pt: "Família", en: "Family", es: "Familia" },
    items: ["Marriage-USC-AOS", "Marriage-USC-Consular", "Marriage-LPR-F2A", "F4-Sibling"],
  },
];

const PATHWAY_LABELS: Record<GcPathway, string> = {
  "EB-1A": "EB-1A (Extraordinary Ability)",
  "EB-2-NIW": "EB-2 NIW (self-petition)",
  "EB-2-PERM": "EB-2 via PERM",
  "EB-3-PERM": "EB-3 via PERM",
  "EB-5-RC-Rural": "EB-5 Regional Center — Rural TEA",
  "EB-5-RC-Urban": "EB-5 Regional Center — Urban TEA",
  "Marriage-USC-AOS": "Marriage to USC (AOS in US)",
  "Marriage-USC-Consular": "Marriage to USC (Consular)",
  "Marriage-LPR-F2A": "Marriage to LPR (F2A)",
  "F4-Sibling": "F4 — Sibling of USC",
};

const COPY = {
  pt: {
    pathwayLabel: "Caminho para green card",
    countryLabel: "País de nascimento",
    countries: {
      brazil: "Brasil",
      all_other: "Outro país",
      china: "China",
      india: "Índia",
      mexico: "México",
      philippines: "Filipinas",
    },
    premiumLabel: "Incluir Premium Processing (I-907)",
    premiumNote: "Reduz a etapa I-140 para ~15 dias úteis, quando disponível",
    totalLabel: "Tempo estimado do fim ao fim",
    totalRange: (low: number, high: number) => `${formatMonths(low)} – ${formatMonths(high)}`,
    stepsLabel: "Etapas do processo",
    venueLabel: "Venue",
    venues: { adjustment: "Adjustment of Status (dentro dos EUA)", consular: "Consular processing (no Brasil)" },
    notesLabel: "Observações",
    ctaTitle: "Quer mapear seu caminho?",
    ctaBody: `Cada caso tem variáveis (idade, educação, família). Consulta inicial gratuita para desenhar seu plano. WhatsApp ${FIRM.phone}.`,
    consultCta: "Agendar consulta",
    whatsappCta: "WhatsApp",
    disclaimer:
      "Indicativo — combina tempos médios USCIS 2026 + Visa Bulletin abril/2026. Casos reais variam por centro de serviço, carga de trabalho e perfil. Consulte um advogado.",
  },
  en: {
    pathwayLabel: "Green card pathway",
    countryLabel: "Country of birth",
    countries: {
      brazil: "Brazil",
      all_other: "All Other",
      china: "China",
      india: "India",
      mexico: "Mexico",
      philippines: "Philippines",
    },
    premiumLabel: "Include Premium Processing (I-907)",
    premiumNote: "Shortens I-140 step to ~15 business days when available",
    totalLabel: "Estimated end-to-end time",
    totalRange: (low: number, high: number) => `${formatMonths(low)} – ${formatMonths(high)}`,
    stepsLabel: "Process steps",
    venueLabel: "Venue",
    venues: { adjustment: "Adjustment of Status (inside US)", consular: "Consular processing (from Brazil)" },
    notesLabel: "Notes",
    ctaTitle: "Want to map your path?",
    ctaBody: `Every case has variables (age, education, family). Free initial consultation to scope your plan. WhatsApp ${FIRM.phone}.`,
    consultCta: "Book consultation",
    whatsappCta: "WhatsApp",
    disclaimer:
      "Indicative — combines 2026 USCIS processing averages + April 2026 Visa Bulletin. Real cases vary by service center, workload, and profile. Consult an attorney.",
  },
  es: {
    pathwayLabel: "Ruta al green card",
    countryLabel: "País de nacimiento",
    countries: {
      brazil: "Brasil",
      all_other: "Otro país",
      china: "China",
      india: "India",
      mexico: "México",
      philippines: "Filipinas",
    },
    premiumLabel: "Incluir Premium Processing (I-907)",
    premiumNote: "Reduce el paso I-140 a ~15 días hábiles",
    totalLabel: "Tiempo estimado de principio a fin",
    totalRange: (low: number, high: number) => `${formatMonths(low)} – ${formatMonths(high)}`,
    stepsLabel: "Etapas del proceso",
    venueLabel: "Venue",
    venues: { adjustment: "Adjustment of Status (dentro de EE.UU.)", consular: "Consular processing (desde Brasil)" },
    notesLabel: "Notas",
    ctaTitle: "¿Quieres mapear tu ruta?",
    ctaBody: `Cada caso tiene variables. Consulta inicial gratuita. WhatsApp ${FIRM.phone}.`,
    consultCta: "Agendar consulta",
    whatsappCta: "WhatsApp",
    disclaimer:
      "Indicativo — combina tiempos promedio USCIS 2026 + Visa Bulletin abril/2026. Consulta un abogado.",
  },
} as const;

export function GreenCardTimelineCalculator({ locale }: { locale: L }) {
  const copy = COPY[locale];
  const [pathway, setPathway] = useState<GcPathway>("EB-2-NIW");
  const [country, setCountry] = useState<Country>("brazil");
  const [premium, setPremium] = useState(false);

  const result = useMemo(
    () => computeGcTimeline({ pathway, country, premiumProcessing: premium }),
    [pathway, country, premium],
  );

  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid gap-8 md:grid-cols-5">
          {/* Inputs */}
          <div className="md:col-span-2">
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

              <div className="mt-6">
                <p className="text-xs font-medium uppercase tracking-wider text-gold">
                  {copy.pathwayLabel}
                </p>
                <div className="mt-3 space-y-5">
                  {PATHWAYS.map((g) => (
                    <div key={g.group.en}>
                      <div className="text-xs font-medium text-ink">
                        {g.group[locale]}
                      </div>
                      <div className="mt-2 space-y-1.5">
                        {g.items.map((p) => (
                          <label
                            key={p}
                            className={cn(
                              "flex cursor-pointer items-center gap-3 rounded-[var(--radius-md)] border p-2.5 text-xs transition-colors",
                              pathway === p
                                ? "border-gold bg-gold/5 text-ink"
                                : "border-border text-ink hover:border-gold/40",
                            )}
                          >
                            <input
                              type="radio"
                              name="pathway"
                              value={p}
                              checked={pathway === p}
                              onChange={() => setPathway(p)}
                              className="h-4 w-4 accent-gold"
                            />
                            <span>{PATHWAY_LABELS[p]}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <label className="mt-6 flex items-start gap-3 border-t border-border pt-5 text-xs">
                <input
                  type="checkbox"
                  checked={premium}
                  onChange={(e) => setPremium(e.target.checked)}
                  className="mt-0.5 h-4 w-4 accent-gold"
                />
                <span>
                  <span className="font-medium text-ink">{copy.premiumLabel}</span>
                  <br />
                  <span className="text-ink-muted">{copy.premiumNote}</span>
                </span>
              </label>
            </div>
          </div>

          {/* Result */}
          <div className="md:col-span-3">
            <div className="rounded-[var(--radius-lg)] bg-ink p-6 text-cream shadow-xl md:p-8">
              <p className="text-xs font-medium uppercase tracking-wider text-gold">
                {copy.totalLabel}
              </p>
              <div className="mt-2 font-heading text-3xl font-semibold text-cream md:text-4xl">
                {copy.totalRange(result.totalLow, result.totalHigh)}
              </div>
              <div className="mt-3 text-xs text-cream/60">
                {copy.venueLabel}: <span className="text-cream/90">{copy.venues[result.venue]}</span>
              </div>

              <div className="mt-6 border-t border-cream/10 pt-5">
                <div className="text-xs font-medium uppercase tracking-wider text-cream/50">
                  {copy.stepsLabel}
                </div>
                <ol className="mt-3 space-y-3">
                  {result.steps.map((s, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/20 text-xs font-semibold text-gold">
                        {i + 1}
                      </div>
                      <div className="flex-1 border-b border-cream/5 pb-2">
                        <div className="text-sm text-cream">{s.label[locale]}</div>
                        <div className="text-xs text-cream/60">
                          {formatMonths(s.monthsLow)} – {formatMonths(s.monthsHigh)}
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
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
