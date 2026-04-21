import type { Locale, Visa } from "@/types/data";

const COPY = {
  pt: {
    steps: [
      { t: "Consulta + Análise de Elegibilidade", d: "2–4 semanas" },
      { t: "Coleta de Documentos", d: "4–8 semanas" },
      { t: "Redação da Petição", d: "6–12 semanas" },
      { t: "Submissão ao USCIS", d: "" },
      { t: "Decisão USCIS", d: "" },
      { t: "Adjustment of Status ou Processo Consular", d: "" },
    ],
    standard: "Padrão",
    premium: "Com Premium Processing",
    aos: "Adjustment of Status",
    consular: "Processo Consular",
    months: (lo: number, hi: number) => `${lo}–${hi} meses`,
  },
  en: {
    steps: [
      { t: "Consultation + Eligibility Assessment", d: "2–4 weeks" },
      { t: "Document Collection", d: "4–8 weeks" },
      { t: "Petition Drafting", d: "6–12 weeks" },
      { t: "USCIS Submission", d: "" },
      { t: "USCIS Decision", d: "" },
      { t: "Adjustment of Status or Consular Processing", d: "" },
    ],
    standard: "Standard",
    premium: "With Premium Processing",
    aos: "Adjustment of Status",
    consular: "Consular Processing",
    months: (lo: number, hi: number) => `${lo}–${hi} months`,
  },
  es: {
    steps: [
      { t: "Consulta + Análisis de Elegibilidad", d: "2–4 semanas" },
      { t: "Recolección de Documentos", d: "4–8 semanas" },
      { t: "Redacción de la Petición", d: "6–12 semanas" },
      { t: "Envío al USCIS", d: "" },
      { t: "Decisión USCIS", d: "" },
      { t: "Adjustment of Status o Proceso Consular", d: "" },
    ],
    standard: "Estándar",
    premium: "Con Premium Processing",
    aos: "Adjustment of Status",
    consular: "Proceso Consular",
    months: (lo: number, hi: number) => `${lo}–${hi} meses`,
  },
} as const;

export function VisaTimeline({ visa, locale }: { visa: Visa; locale: Locale }) {
  const c = COPY[locale];
  const steps = visa.properties.leadsToGreenCard ? c.steps : c.steps.slice(0, 5);

  return (
    <ol className="relative space-y-5 border-l-2 border-[#C9A961] pl-6">
      {steps.map((s, i) => {
        const isDecision = i === 4;
        const isFinal = i === 5;
        return (
          <li key={i} className="relative">
            <span className="absolute -left-9 flex h-6 w-6 items-center justify-center rounded-full bg-[#C9A961] text-xs font-bold text-[#0E1B2E]">
              {i + 1}
            </span>
            <div className="rounded-[var(--radius-md)] bg-[#0E1B2E] p-4 text-white">
              <h3 className="font-heading text-base font-semibold text-white">
                {s.t}
              </h3>
              {s.d && <p className="mt-1 text-sm text-white/60">{s.d}</p>}
              {isDecision && (
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  <div className="rounded-[var(--radius-sm)] border border-white/10 bg-white/5 p-2.5">
                    <div className="text-[10px] font-medium uppercase tracking-wider text-white/50">
                      {c.standard}
                    </div>
                    <div className="mt-0.5 text-sm font-semibold text-[#C9A961]">
                      {c.months(
                        visa.timeline.standardMonths.min,
                        visa.timeline.standardMonths.max,
                      )}
                    </div>
                  </div>
                  {visa.timeline.premiumMonths && (
                    <div className="rounded-[var(--radius-sm)] border border-[#C9A961]/30 bg-[#C9A961]/10 p-2.5">
                      <div className="text-[10px] font-medium uppercase tracking-wider text-[#C9A961]">
                        {c.premium}
                      </div>
                      <div className="mt-0.5 text-sm font-semibold text-[#C9A961]">
                        {c.months(
                          visa.timeline.premiumMonths.min,
                          visa.timeline.premiumMonths.max,
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
              {isFinal && (
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {visa.timeline.toGreenCardAOSMonths && (
                    <div className="rounded-[var(--radius-sm)] border border-white/10 bg-white/5 p-2.5">
                      <div className="text-[10px] font-medium uppercase tracking-wider text-white/50">
                        {c.aos}
                      </div>
                      <div className="mt-0.5 text-sm font-semibold text-[#C9A961]">
                        {c.months(
                          visa.timeline.toGreenCardAOSMonths.min,
                          visa.timeline.toGreenCardAOSMonths.max,
                        )}
                      </div>
                    </div>
                  )}
                  {visa.timeline.toGreenCardConsularMonths && (
                    <div className="rounded-[var(--radius-sm)] border border-white/10 bg-white/5 p-2.5">
                      <div className="text-[10px] font-medium uppercase tracking-wider text-white/50">
                        {c.consular}
                      </div>
                      <div className="mt-0.5 text-sm font-semibold text-[#C9A961]">
                        {c.months(
                          visa.timeline.toGreenCardConsularMonths.min,
                          visa.timeline.toGreenCardConsularMonths.max,
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
