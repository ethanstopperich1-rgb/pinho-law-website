"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import {
  computeEntityChoice,
  type CapitalNeed,
  type EntityType,
  type IncomeTier,
  type OwnerCount,
  type OwnerStatus,
} from "@/lib/tools/entity-choice";
import { FIRM } from "@/lib/constants";

type L = "pt" | "en" | "es";

const COPY = {
  pt: {
    heading: "Qual estrutura para seu negócio?",
    ownerStatus: {
      label: "Status migratório dos sócios",
      options: {
        usc_lpr: "Todos USC ou Green Card holder",
        nonresident: "Ao menos 1 sócio não-residente (ex: brasileiro no Brasil)",
        mixed: "Misto — alguns USC/LPR, alguns não-residentes",
      },
    },
    ownerCount: {
      label: "Quantos sócios?",
      options: {
        solo: "Sozinho (single-member)",
        "2_5": "2 a 5 sócios",
        "6_plus": "6+ sócios",
      },
    },
    capital: {
      label: "Plano de capital",
      options: {
        bootstrap: "Bootstrap (eu financio)",
        angel_seed: "Friends & family / anjo / seed",
        vc_scale: "Série A+ / VC institucional",
      },
    },
    income: {
      label: "Receita anual esperada (ano 2)",
      options: {
        under_100k: "Até $100K",
        "100k_250k": "$100K – $250K",
        "250k_1m": "$250K – $1M",
        over_1m: "Acima de $1M",
      },
    },
    mission: "Negócio de missão pública (benefit / impact)?",
    plansVc: "Pretende levantar rodadas de VC?",
    holdsAssets: "Vai deter imóveis ou IP que valorizam?",
    recommendedLabel: "Recomendação",
    blockersLabel: "Bloqueios",
    prosLabel: "A favor",
    consLabel: "Contra",
    ctaTitle: "Quer validar a decisão?",
    ctaBody: `Dra. Izi é autoridade em Benefit Corporations (citada por Harvard). Toda estrutura é reversível mas a primeira escolha importa. WhatsApp ${FIRM.phone}.`,
    consultCta: "Agendar consulta",
    whatsappCta: "WhatsApp",
    disclaimer:
      "Ferramenta educacional. Escolha de entidade depende de contexto tributário, migratório e societário — consulte um advogado e um contador. Não constitui assessoria jurídica.",
  },
  en: {
    heading: "Which structure for your business?",
    ownerStatus: {
      label: "Owner immigration status",
      options: {
        usc_lpr: "All USC or Green Card holders",
        nonresident: "At least 1 non-resident owner (e.g., Brazilian abroad)",
        mixed: "Mixed — some USC/LPR, some non-resident",
      },
    },
    ownerCount: {
      label: "How many owners?",
      options: {
        solo: "Solo (single-member)",
        "2_5": "2 to 5 owners",
        "6_plus": "6+ owners",
      },
    },
    capital: {
      label: "Capital plan",
      options: {
        bootstrap: "Bootstrap (I fund it)",
        angel_seed: "Friends & family / angel / seed",
        vc_scale: "Series A+ / institutional VC",
      },
    },
    income: {
      label: "Expected annual revenue (year 2)",
      options: {
        under_100k: "Under $100K",
        "100k_250k": "$100K – $250K",
        "250k_1m": "$250K – $1M",
        over_1m: "Over $1M",
      },
    },
    mission: "Mission-driven business (benefit / impact)?",
    plansVc: "Planning to raise VC rounds?",
    holdsAssets: "Will hold appreciating real estate or IP?",
    recommendedLabel: "Recommendation",
    blockersLabel: "Blockers",
    prosLabel: "For",
    consLabel: "Against",
    ctaTitle: "Want to validate the call?",
    ctaBody: `Dra. Izi is a Harvard-cited authority on Benefit Corporations. Every structure is reversible but the first choice matters. WhatsApp ${FIRM.phone}.`,
    consultCta: "Book consultation",
    whatsappCta: "WhatsApp",
    disclaimer:
      "Educational tool. Entity choice depends on tax, immigration, and corporate context — consult an attorney and accountant. Not legal advice.",
  },
  es: {
    heading: "¿Qué estructura para tu negocio?",
    ownerStatus: {
      label: "Estatus migratorio de los socios",
      options: {
        usc_lpr: "Todos USC o Green Card holder",
        nonresident: "Al menos 1 socio no residente",
        mixed: "Mixto — algunos USC/LPR, algunos no residentes",
      },
    },
    ownerCount: {
      label: "¿Cuántos socios?",
      options: {
        solo: "Solo (single-member)",
        "2_5": "2 a 5 socios",
        "6_plus": "6+ socios",
      },
    },
    capital: {
      label: "Plan de capital",
      options: {
        bootstrap: "Bootstrap (yo financio)",
        angel_seed: "Friends & family / ángel / seed",
        vc_scale: "Serie A+ / VC institucional",
      },
    },
    income: {
      label: "Ingresos anuales esperados (año 2)",
      options: {
        under_100k: "Hasta $100K",
        "100k_250k": "$100K – $250K",
        "250k_1m": "$250K – $1M",
        over_1m: "Más de $1M",
      },
    },
    mission: "¿Negocio de misión pública?",
    plansVc: "¿Planeas levantar rondas de VC?",
    holdsAssets: "¿Tendrás inmuebles o IP que se aprecian?",
    recommendedLabel: "Recomendación",
    blockersLabel: "Bloqueos",
    prosLabel: "A favor",
    consLabel: "En contra",
    ctaTitle: "¿Quieres validar la decisión?",
    ctaBody: `Dra. Izi es autoridad en Benefit Corporations (citada por Harvard). WhatsApp ${FIRM.phone}.`,
    consultCta: "Agendar consulta",
    whatsappCta: "WhatsApp",
    disclaimer:
      "Herramienta educativa. La elección depende de contexto tributario, migratorio y societario. Consulta abogado y contador.",
  },
} as const;

const ENTITY_COLORS: Record<EntityType, string> = {
  LLC: "bg-emerald-500/10 text-emerald-700 border-emerald-500/30",
  "S-Corp": "bg-blue-500/10 text-blue-700 border-blue-500/30",
  "C-Corp": "bg-purple-500/10 text-purple-700 border-purple-500/30",
  "B-Corp": "bg-gold/10 text-gold border-gold/30",
};

export function EntityChoiceCalculator({ locale }: { locale: L }) {
  const copy = COPY[locale];
  const [ownerStatus, setOwnerStatus] = useState<OwnerStatus>("nonresident");
  const [ownerCount, setOwnerCount] = useState<OwnerCount>("solo");
  const [capital, setCapital] = useState<CapitalNeed>("bootstrap");
  const [income, setIncome] = useState<IncomeTier>("100k_250k");
  const [mission, setMission] = useState(false);
  const [plansVc, setPlansVc] = useState(false);
  const [holdsAssets, setHoldsAssets] = useState(false);

  const result = useMemo(
    () =>
      computeEntityChoice({
        ownerStatus,
        ownerCount,
        capitalNeed: capital,
        incomeTier: income,
        missionDriven: mission,
        plansVcRaise: plansVc,
        holdsAppreciatingAssets: holdsAssets,
      }),
    [ownerStatus, ownerCount, capital, income, mission, plansVc, holdsAssets],
  );

  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-5">
          {/* Inputs */}
          <div className="md:col-span-2">
            <div className="rounded-[var(--radius-lg)] border border-gold/20 bg-white p-6 shadow-sm space-y-6">
              <RadioGroup
                label={copy.ownerStatus.label}
                options={copy.ownerStatus.options}
                current={ownerStatus}
                onChange={setOwnerStatus}
              />
              <RadioGroup
                label={copy.ownerCount.label}
                options={copy.ownerCount.options}
                current={ownerCount}
                onChange={setOwnerCount}
              />
              <RadioGroup
                label={copy.capital.label}
                options={copy.capital.options}
                current={capital}
                onChange={setCapital}
              />
              <RadioGroup
                label={copy.income.label}
                options={copy.income.options}
                current={income}
                onChange={setIncome}
              />

              <div className="border-t border-border pt-4 space-y-2.5">
                <Checkbox label={copy.mission} checked={mission} onChange={setMission} />
                <Checkbox label={copy.plansVc} checked={plansVc} onChange={setPlansVc} />
                <Checkbox label={copy.holdsAssets} checked={holdsAssets} onChange={setHoldsAssets} />
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="md:col-span-3 space-y-4">
            <div className="rounded-[var(--radius-lg)] bg-ink p-6 text-cream shadow-xl md:p-8">
              <p className="text-xs font-medium uppercase tracking-wider text-gold">
                {copy.recommendedLabel}
              </p>
              <div className="mt-2 font-heading text-4xl font-semibold text-cream md:text-5xl">
                {result.top}
              </div>

              {result.blockers[locale].length > 0 && (
                <div className="mt-6 rounded-[var(--radius-md)] border border-red-500/30 bg-red-500/10 p-4">
                  <div className="text-xs font-medium uppercase tracking-wider text-red-300">
                    {copy.blockersLabel}
                  </div>
                  <ul className="mt-1.5 space-y-1 text-xs text-red-100">
                    {result.blockers[locale].map((b) => (
                      <li key={b}>• {b}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Ranked comparison */}
            <div className="space-y-3">
              {result.ranked.map((r, i) => (
                <div
                  key={r.entity}
                  className={cn(
                    "rounded-[var(--radius-md)] border bg-white p-5 shadow-sm transition-all",
                    i === 0
                      ? "border-gold shadow-md ring-1 ring-gold/20"
                      : "border-border opacity-90",
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span
                        className={cn(
                          "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
                          ENTITY_COLORS[r.entity],
                        )}
                      >
                        #{i + 1} {r.entity}
                      </span>
                      {i === 0 && (
                        <span className="text-xs font-medium uppercase tracking-wider text-gold">
                          {copy.recommendedLabel}
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-ink-muted">
                      {r.score > 0 ? `+${r.score}` : r.score}
                    </span>
                  </div>

                  {r.pros[locale].length > 0 && (
                    <div className="mt-3">
                      <div className="text-xs font-medium uppercase tracking-wider text-emerald-700">
                        {copy.prosLabel}
                      </div>
                      <ul className="mt-1 space-y-1">
                        {r.pros[locale].map((p) => (
                          <li key={p} className="flex gap-2 text-xs leading-relaxed text-ink-muted">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-500" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {r.cons[locale].length > 0 && (
                    <div className="mt-3">
                      <div className="text-xs font-medium uppercase tracking-wider text-red-700">
                        {copy.consLabel}
                      </div>
                      <ul className="mt-1 space-y-1">
                        {r.cons[locale].map((c) => (
                          <li key={c} className="flex gap-2 text-xs leading-relaxed text-ink-muted">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-red-500" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="rounded-[var(--radius-md)] border border-gold/20 bg-white p-6 shadow-sm">
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

            <p className="text-xs leading-relaxed text-ink-muted/70">
              {copy.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function RadioGroup<T extends string>({
  label,
  options,
  current,
  onChange,
}: {
  label: string;
  options: Record<T, string>;
  current: T;
  onChange: (v: T) => void;
}) {
  return (
    <fieldset className="space-y-1.5">
      <legend className="text-xs font-medium uppercase tracking-wider text-gold">
        {label}
      </legend>
      {(Object.keys(options) as T[]).map((k) => (
        <label
          key={k}
          className={cn(
            "mt-1.5 flex cursor-pointer items-center gap-3 rounded-[var(--radius-md)] border p-2.5 text-xs transition-colors",
            current === k
              ? "border-gold bg-gold/5 text-ink"
              : "border-border text-ink hover:border-gold/40",
          )}
        >
          <input
            type="radio"
            checked={current === k}
            onChange={() => onChange(k)}
            className="h-4 w-4 accent-gold"
          />
          <span>{options[k]}</span>
        </label>
      ))}
    </fieldset>
  );
}

function Checkbox({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-3 text-xs text-ink">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 accent-gold"
      />
      <span>{label}</span>
    </label>
  );
}
