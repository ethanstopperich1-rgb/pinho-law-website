import type { Locale, Visa } from "@/types/data";

const COPY = {
  pt: {
    lineUscis: "Taxas USCIS",
    lineLegal: "Honorários advocatícios",
    lineTranslation: "Traduções juramentadas",
    lineMedical: "Exame médico",
    lineTotal: "TOTAL estimado",
    disclaimer:
      "Valores estimados em USD. Sujeitos a alteração pelo USCIS. Consulte para precificação personalizada.",
  },
  en: {
    lineUscis: "USCIS filing fees",
    lineLegal: "Attorney fees",
    lineTranslation: "Certified translations",
    lineMedical: "Medical exam",
    lineTotal: "Estimated TOTAL",
    disclaimer:
      "Estimated values in USD. Subject to change by USCIS. Consult for personalized pricing.",
  },
  es: {
    lineUscis: "Tarifas USCIS",
    lineLegal: "Honorarios legales",
    lineTranslation: "Traducciones certificadas",
    lineMedical: "Examen médico",
    lineTotal: "TOTAL estimado",
    disclaimer:
      "Valores estimados en USD. Sujetos a cambio por USCIS. Consulte para precios personalizados.",
  },
} as const;

function fmt(n: number) {
  return `$${n.toLocaleString("en-US")}`;
}

export function VisaCostsTable({ visa, locale }: { visa: Visa; locale: Locale }) {
  const c = COPY[locale];
  const uscisTotal = Object.values(visa.costs.uscisFiling).reduce(
    (s, v) => s + v,
    0,
  );
  return (
    <div className="overflow-hidden rounded-[var(--radius-md)] border border-[#C9A961]/30 bg-[#0E1B2E]">
      <table className="w-full text-left text-sm text-white">
        <thead>
          <tr className="bg-[#C9A961]/20 text-[#C9A961]">
            <th className="px-4 py-3 font-heading text-xs font-semibold uppercase tracking-wider">
              {locale === "pt" ? "Item" : locale === "es" ? "Ítem" : "Item"}
            </th>
            <th className="px-4 py-3 text-right font-heading text-xs font-semibold uppercase tracking-wider">
              USD
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(visa.costs.uscisFiling).map(([k, v], i) => (
            <tr
              key={k}
              className={i % 2 ? "bg-white/[0.02]" : "bg-white/[0.05]"}
            >
              <td className="px-4 py-2.5 text-white/80">
                {k.replace(/([A-Z0-9])/g, " $1").replace(/^./, (ch) => ch.toUpperCase())}
              </td>
              <td className="px-4 py-2.5 text-right text-white">{fmt(v)}</td>
            </tr>
          ))}
          <tr className="bg-white/[0.08] font-medium">
            <td className="px-4 py-2.5 text-white/90">{c.lineUscis}</td>
            <td className="px-4 py-2.5 text-right text-white">{fmt(uscisTotal)}</td>
          </tr>
          <tr className="bg-white/[0.02]">
            <td className="px-4 py-2.5 text-white/80">{c.lineLegal}</td>
            <td className="px-4 py-2.5 text-right text-white">
              {fmt(visa.costs.legalRange.min)} – {fmt(visa.costs.legalRange.max)}
            </td>
          </tr>
          {visa.costs.translationEstimate > 0 && (
            <tr className="bg-white/[0.05]">
              <td className="px-4 py-2.5 text-white/80">{c.lineTranslation}</td>
              <td className="px-4 py-2.5 text-right text-white">
                {fmt(visa.costs.translationEstimate)}
              </td>
            </tr>
          )}
          {visa.costs.medicalExam > 0 && (
            <tr className="bg-white/[0.02]">
              <td className="px-4 py-2.5 text-white/80">{c.lineMedical}</td>
              <td className="px-4 py-2.5 text-right text-white">
                {fmt(visa.costs.medicalExam)}
              </td>
            </tr>
          )}
          <tr className="border-t-2 border-[#C9A961] bg-[#C9A961]/10">
            <td className="px-4 py-3 font-heading text-base font-bold text-[#C9A961]">
              {c.lineTotal}
            </td>
            <td className="px-4 py-3 text-right font-heading text-base font-bold text-[#C9A961]">
              {fmt(visa.costs.total.min)} – {fmt(visa.costs.total.max)}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="border-t border-[#C9A961]/20 bg-[#0E1B2E] px-4 py-2.5 text-xs italic text-white/55">
        {c.disclaimer}
      </div>
    </div>
  );
}
