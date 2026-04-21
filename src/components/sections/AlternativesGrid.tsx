import { GoldGradientCard } from "@/components/ui/gold-gradient-card";
import { Link } from "@/i18n/navigation";
import { VISAS } from "@/data/visas";
import type { Locale } from "@/types/data";

const COPY = {
  pt: {
    seeDetails: "Ver detalhes →",
  },
  en: {
    seeDetails: "See details →",
  },
  es: {
    seeDetails: "Ver detalles →",
  },
} as const;

export function AlternativesGrid({
  alternativeIds,
  currentVisaId,
  locale,
}: {
  alternativeIds: string[];
  currentVisaId: string;
  locale: Locale;
}) {
  const alternatives = alternativeIds
    .map((id) => VISAS[id])
    .filter((v): v is NonNullable<typeof v> => !!v && v.id !== currentVisaId);

  if (alternatives.length === 0) return null;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {alternatives.map((visa) => (
        <Link
          key={visa.id}
          href={`/immigration/${visa.slugs[locale]}`}
          className="block h-full focus:outline-none"
        >
          <GoldGradientCard className="h-full">
            <div className="flex h-full flex-col">
              <div className="flex items-center gap-2">
                <span className="rounded-full border border-[#C9A961]/30 bg-[#C9A961]/5 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[#C9A961]">
                  {visa.classification === "immigrant"
                    ? locale === "pt"
                      ? "Imigrante"
                      : locale === "es"
                        ? "Inmigrante"
                        : "Immigrant"
                    : locale === "pt"
                      ? "Não-imigrante"
                      : locale === "es"
                        ? "No inmigrante"
                        : "Non-immigrant"}
                </span>
              </div>
              <h3 className="mt-3 font-heading text-xl font-semibold text-ink">
                {visa.names[locale].short}
              </h3>
              <p className="mt-1 text-sm text-ink-muted">
                {visa.names[locale].full}
              </p>
              <div className="mt-3 text-xs text-ink-muted">
                ⏱ {visa.timeline.standardMonths.min}–
                {visa.timeline.standardMonths.max}{" "}
                {locale === "pt" ? "meses" : locale === "es" ? "meses" : "months"}
              </div>
              <div className="mt-4 text-sm font-medium text-[#C9A961]">
                {COPY[locale].seeDetails}
              </div>
            </div>
          </GoldGradientCard>
        </Link>
      ))}
    </div>
  );
}
