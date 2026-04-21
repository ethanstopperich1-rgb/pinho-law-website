import type { Locale, Visa } from "@/types/data";

interface Props {
  visa: Visa;
  locale: Locale;
}

const COPY = {
  pt: {
    greenCard: "✅ Leva ao Green Card",
    premium: "⚡ Premium Processing",
    dual: "🔄 Dupla Intenção",
    citizenship: (y: number) => `🇺🇸 Cidadania em ${y} anos`,
    months: (min: number, max: number) => `⏱ ${min}-${max} meses`,
  },
  en: {
    greenCard: "✅ Leads to Green Card",
    premium: "⚡ Premium Processing",
    dual: "🔄 Dual Intent",
    citizenship: (y: number) => `🇺🇸 Citizenship in ${y} years`,
    months: (min: number, max: number) => `⏱ ${min}-${max} months`,
  },
  es: {
    greenCard: "✅ Lleva al Green Card",
    premium: "⚡ Premium Processing",
    dual: "🔄 Doble Intención",
    citizenship: (y: number) => `🇺🇸 Ciudadanía en ${y} años`,
    months: (min: number, max: number) => `⏱ ${min}-${max} meses`,
  },
} as const;

export function VisaPropertiesBar({ visa, locale }: Props) {
  const c = COPY[locale];
  const chips: string[] = [];
  if (visa.properties.leadsToGreenCard) chips.push(c.greenCard);
  if (visa.properties.allowsPremiumProcessing) chips.push(c.premium);
  if (visa.properties.dualIntent) chips.push(c.dual);
  if (
    visa.properties.pathToCitizenship &&
    visa.properties.citizenshipEligibleYears
  ) {
    chips.push(c.citizenship(visa.properties.citizenshipEligibleYears));
  }
  chips.push(c.months(visa.timeline.standardMonths.min, visa.timeline.standardMonths.max));

  return (
    <div className="flex flex-wrap gap-2 overflow-x-auto md:justify-start">
      {chips.map((chip) => (
        <span
          key={chip}
          className="inline-flex items-center whitespace-nowrap rounded-full border border-[#C9A961] bg-[#C9A961]/10 px-3 py-1 text-sm text-[#C9A961]"
        >
          {chip}
        </span>
      ))}
    </div>
  );
}
