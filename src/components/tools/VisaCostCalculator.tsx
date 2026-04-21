"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/ui/magnetic-button";
import {
  computeVisaCost,
  formatUsd,
  type VisaType,
} from "@/lib/tools/visa-cost";
import { FIRM } from "@/lib/constants";

type L = "pt" | "en" | "es";

const VISA_GROUPS: Array<{ heading: { pt: string; en: string; es: string }; items: VisaType[] }> = [
  {
    heading: { pt: "Green Card — Emprego", en: "Green Card — Employment", es: "Green Card — Empleo" },
    items: ["EB-1A", "EB-1B", "EB-1C", "EB-2-NIW", "EB-2-PERM", "EB-3"],
  },
  {
    heading: { pt: "Investidor", en: "Investor", es: "Inversionista" },
    items: ["EB-5-RC", "EB-5-Direct", "E-2"],
  },
  {
    heading: { pt: "Trabalho temporário", en: "Temporary work", es: "Trabajo temporal" },
    items: ["L-1A", "L-1B", "O-1", "H-1B"],
  },
  {
    heading: { pt: "Família + Naturalização", en: "Family + Naturalization", es: "Familia + Naturalización" },
    items: ["Marriage-USC", "Marriage-LPR", "Naturalization-N400"],
  },
];

const COPY = {
  pt: {
    visaLabel: "Tipo de visto",
    premiumLabel: "Incluir Premium Processing (I-907)",
    premiumNote: "+$2.805 — aprovação em 15 dias úteis quando disponível",
    dependentsLabel: "Dependentes filiados juntos",
    uscisLabel: "Taxas USCIS/DOS",
    attorneyLabel: "Honorários advocatícios",
    otherLabel: "Outros custos",
    totalLabel: "Total estimado",
    totalRange: (low: number, high: number) =>
      `${formatUsd(low, "pt-BR")} – ${formatUsd(high, "pt-BR")}`,
    notesLabel: "Observações",
    ctaTitle: "Quer uma cotação precisa?",
    ctaBody: `Honorários variam pelo perfil. Oferecemos consulta inicial gratuita para estimar seu caso. WhatsApp ${FIRM.phone}.`,
    consultCta: "Agendar consulta",
    whatsappCta: "WhatsApp",
    disclaimer:
      "Taxas USCIS refletem a regra de 1 de abril de 2024. Honorários advocatícios são estimativas de mercado Orlando e variam por complexidade. Investimento EB-5/E-2 é devolvido ao fim do projeto — não é custo. Consulte um advogado.",
  },
  en: {
    visaLabel: "Visa type",
    premiumLabel: "Include Premium Processing (I-907)",
    premiumNote: "+$2,805 — 15 business day adjudication when available",
    dependentsLabel: "Dependents filing together",
    uscisLabel: "USCIS/DOS fees",
    attorneyLabel: "Attorney fees",
    otherLabel: "Other costs",
    totalLabel: "Estimated total",
    totalRange: (low: number, high: number) =>
      `${formatUsd(low)} – ${formatUsd(high)}`,
    notesLabel: "Notes",
    ctaTitle: "Want an exact quote?",
    ctaBody: `Fees vary by profile. Free initial consultation to scope your case. WhatsApp ${FIRM.phone}.`,
    consultCta: "Book consultation",
    whatsappCta: "WhatsApp",
    disclaimer:
      "USCIS fees reflect the April 1, 2024 rule. Attorney fees are Orlando market estimates and vary by complexity. EB-5/E-2 investment is returned at project end — it is not a cost. Consult an attorney.",
  },
  es: {
    visaLabel: "Tipo de visa",
    premiumLabel: "Incluir Premium Processing (I-907)",
    premiumNote: "+US$ 2.805 — aprobación en 15 días hábiles",
    dependentsLabel: "Dependientes filiados juntos",
    uscisLabel: "Tarifas USCIS/DOS",
    attorneyLabel: "Honorarios legales",
    otherLabel: "Otros costos",
    totalLabel: "Total estimado",
    totalRange: (low: number, high: number) =>
      `${formatUsd(low, "es-419")} – ${formatUsd(high, "es-419")}`,
    notesLabel: "Notas",
    ctaTitle: "¿Quieres cotización exacta?",
    ctaBody: `Honorarios varían. Consulta inicial gratis. WhatsApp ${FIRM.phone}.`,
    consultCta: "Agendar consulta",
    whatsappCta: "WhatsApp",
    disclaimer:
      "Tarifas USCIS reflejan la regla del 1 de abril de 2024. Honorarios son estimados de mercado Orlando. Inversión EB-5/E-2 se devuelve — no es costo.",
  },
} as const;

const VISA_LABELS: Record<VisaType, string> = {
  "EB-1A": "EB-1A — Extraordinary Ability",
  "EB-1B": "EB-1B — Outstanding Researcher",
  "EB-1C": "EB-1C — Multinational Manager",
  "EB-2-NIW": "EB-2 NIW",
  "EB-2-PERM": "EB-2 (via PERM)",
  "EB-3": "EB-3",
  "EB-5-RC": "EB-5 Regional Center",
  "EB-5-Direct": "EB-5 Direct",
  "E-2": "E-2 (Treaty Investor)",
  "L-1A": "L-1A Executive/Manager",
  "L-1B": "L-1B Specialized Knowledge",
  "O-1": "O-1 Extraordinary Ability",
  "H-1B": "H-1B Specialty Occupation",
  "Marriage-USC": "Marriage to USC",
  "Marriage-LPR": "Marriage to LPR",
  "Naturalization-N400": "Naturalization (N-400)",
};

export function VisaCostCalculator({ locale }: { locale: L }) {
  const copy = COPY[locale];
  const [visa, setVisa] = useState<VisaType>("EB-2-NIW");
  const [premium, setPremium] = useState(false);
  const [dependents, setDependents] = useState(0);

  const result = useMemo(
    () => computeVisaCost({ visa, premiumProcessing: premium, dependents }),
    [visa, premium, dependents],
  );
  const intlLocale =
    locale === "pt" ? "pt-BR" : locale === "es" ? "es-419" : "en-US";

  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid gap-8 md:grid-cols-5">
          {/* Input panel */}
          <div className="md:col-span-2 space-y-6">
            <div className="rounded-[var(--radius-lg)] border border-gold/20 bg-white p-6 shadow-sm">
              <p className="text-xs font-medium uppercase tracking-wider text-gold">
                {copy.visaLabel}
              </p>

              <div className="mt-3 space-y-5">
                {VISA_GROUPS.map((group) => (
                  <div key={group.heading.en}>
                    <div className="text-xs font-medium text-ink">
                      {group.heading[locale]}
                    </div>
                    <div className="mt-2 space-y-1.5">
                      {group.items.map((v) => (
                        <label
                          key={v}
                          className={cn(
                            "flex cursor-pointer items-center gap-3 rounded-[var(--radius-md)] border p-2.5 text-xs transition-colors",
                            visa === v
                              ? "border-gold bg-gold/5 text-ink"
                              : "border-border text-ink hover:border-gold/40",
                          )}
                        >
                          <input
                            type="radio"
                            name="visa"
                            value={v}
                            checked={visa === v}
                            onChange={() => setVisa(v)}
                            className="h-4 w-4 accent-gold"
                          />
                          <span>{VISA_LABELS[v]}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-3 border-t border-border pt-5">
                <label className="flex items-start gap-3 text-xs">
                  <input
                    type="checkbox"
                    checked={premium}
                    disabled={!result.premiumAvailable}
                    onChange={(e) => setPremium(e.target.checked)}
                    className="mt-0.5 h-4 w-4 accent-gold disabled:opacity-40"
                  />
                  <span className={cn(!result.premiumAvailable && "text-ink-muted/60")}>
                    <span className="font-medium text-ink">{copy.premiumLabel}</span>
                    <br />
                    <span className="text-ink-muted">{copy.premiumNote}</span>
                  </span>
                </label>

                <label className="block">
                  <span className="text-xs font-medium text-ink">
                    {copy.dependentsLabel}
                  </span>
                  <input
                    type="number"
                    min={0}
                    max={8}
                    value={dependents}
                    onChange={(e) =>
                      setDependents(Math.max(0, Math.min(8, Number(e.target.value))))
                    }
                    className="mt-1.5 w-20 rounded-[var(--radius-md)] border border-border bg-white px-3 py-1.5 text-sm text-ink focus:border-gold focus:outline-none"
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Result panel */}
          <div className="md:col-span-3">
            <div className="rounded-[var(--radius-lg)] bg-ink p-6 text-cream shadow-xl md:p-8">
              <p className="text-xs font-medium uppercase tracking-wider text-gold">
                {copy.totalLabel}
              </p>
              <div className="mt-2 font-heading text-3xl font-semibold text-cream md:text-4xl">
                {copy.totalRange(result.totalLow, result.totalHigh)}
              </div>

              <div className="mt-6 space-y-4 border-t border-cream/10 pt-4">
                <FeeBlock
                  heading={copy.uscisLabel}
                  lines={result.uscis.map((l) => ({
                    label: l.label[locale],
                    amount: l.amount,
                    note: l.note?.[locale],
                  }))}
                  locale={intlLocale}
                />
                <FeeBlock
                  heading={copy.attorneyLabel}
                  lines={[
                    {
                      label: result.attorney.label[locale],
                      amount: result.attorney.amount,
                      note: result.attorney.note?.[locale],
                    },
                  ]}
                  locale={intlLocale}
                  isRange
                />
                {result.other.length > 0 && (
                  <FeeBlock
                    heading={copy.otherLabel}
                    lines={result.other.map((l) => ({
                      label: l.label[locale],
                      amount: l.amount,
                      note: l.note?.[locale],
                    }))}
                    locale={intlLocale}
                  />
                )}
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

function FeeBlock({
  heading,
  lines,
  locale,
  isRange,
}: {
  heading: string;
  lines: Array<{ label: string; amount: number; note?: string }>;
  locale: string;
  isRange?: boolean;
}) {
  const total = lines.reduce((s, l) => s + l.amount, 0);
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <div className="text-xs font-medium uppercase tracking-wider text-cream/60">
          {heading}
        </div>
        <div className="text-sm font-semibold text-cream">
          {isRange ? "" : formatUsd(total, locale)}
        </div>
      </div>
      <ul className="mt-2 space-y-1.5">
        {lines.map((l, i) => (
          <li key={`${l.label}-${i}`} className="flex items-baseline justify-between gap-4 text-xs">
            <span className="text-cream/75">
              {l.label}
              {l.note && (
                <span className="block text-cream/50"> {l.note}</span>
              )}
            </span>
            <span className="shrink-0 font-medium text-cream/90">
              {l.amount === 0 ? "—" : formatUsd(l.amount, locale)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
