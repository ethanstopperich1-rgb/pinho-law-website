"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/ui/magnetic-button";
import {
  computeEb5,
  formatUsd,
  type Eb5Tier,
  type InvestorMode,
} from "@/lib/tools/eb5";
import { FIRM } from "@/lib/constants";

type L = "pt" | "en" | "es";

const COPY = {
  pt: {
    tierLabel: "Tier de investimento",
    tiers: {
      rural_tea: "Rural TEA (US$ 800K, reservado 20%)",
      urban_tea: "Urban TEA (US$ 800K, reservado 10%)",
      infrastructure: "Infraestrutura (US$ 800K, reservado 2%)",
      standard: "Padrão (US$ 1,05M, sem reserva)",
    },
    modeLabel: "Modo de investimento",
    modes: {
      regional_center: "Regional Center (passivo — recomendado)",
      direct: "Direct EB-5 (você opera)",
    },
    investmentLabel: "Investimento",
    reservedLabel: "Visas reservadas",
    jobsLabel: "Empregos exigidos",
    timelineLabel: "I-526E",
    brazilLabel: "Brasil",
    currentLabel: "CURRENT (sem backlog)",
    approvalLabel: "Aprovação do setor",
    approvalSignal: {
      high: "Alta (Rural TEA + Regional Center)",
      mixed: "Mista — depende do projeto",
      low: "Histórico ~25% (Direct EB-5)",
    },
    highlightsLabel: "Pontos-chave",
    ctaTitle: "Quer avaliar seu projeto EB-5?",
    ctaBody: `Fonte de fundos é onde a maioria das petições brasileiras é negada. Trabalhamos com contadores brasileiros integrados desde o dia 1. WhatsApp ${FIRM.phone}.`,
    consultCta: "Agendar consulta EB-5",
    whatsappCta: "Falar no WhatsApp",
    disclaimer:
      "Esta ferramenta oferece estimativa educacional baseada nas regras EB-5 Reform and Integrity Act (2022). Não constitui assessoria jurídica. Consulte um advogado de imigração para análise do seu caso.",
  },
  en: {
    tierLabel: "Investment tier",
    tiers: {
      rural_tea: "Rural TEA ($800K, 20% reserved)",
      urban_tea: "Urban TEA ($800K, 10% reserved)",
      infrastructure: "Infrastructure ($800K, 2% reserved)",
      standard: "Standard ($1.05M, no set-aside)",
    },
    modeLabel: "Investment mode",
    modes: {
      regional_center: "Regional Center (passive — recommended)",
      direct: "Direct EB-5 (you operate)",
    },
    investmentLabel: "Investment",
    reservedLabel: "Reserved visa allocation",
    jobsLabel: "Jobs required",
    timelineLabel: "I-526E",
    brazilLabel: "Brazil queue",
    currentLabel: "CURRENT (no backlog)",
    approvalLabel: "Sector approval",
    approvalSignal: {
      high: "High (Rural TEA + Regional Center)",
      mixed: "Mixed — project-dependent",
      low: "Historical ~25% (Direct EB-5)",
    },
    highlightsLabel: "Key points",
    ctaTitle: "Want to evaluate your EB-5 project?",
    ctaBody: `Source of funds is where most Brazilian petitions get denied. We work with integrated Brazilian accountants from day 1. WhatsApp ${FIRM.phone}.`,
    consultCta: "Book EB-5 consultation",
    whatsappCta: "Chat on WhatsApp",
    disclaimer:
      "This tool provides an educational estimate based on the EB-5 Reform and Integrity Act (2022). Not legal advice. Consult an immigration attorney for case-specific analysis.",
  },
  es: {
    tierLabel: "Tier de inversión",
    tiers: {
      rural_tea: "Rural TEA (US$ 800K, 20% reservado)",
      urban_tea: "Urban TEA (US$ 800K, 10% reservado)",
      infrastructure: "Infraestructura (US$ 800K, 2% reservado)",
      standard: "Estándar (US$ 1,05M, sin reserva)",
    },
    modeLabel: "Modo de inversión",
    modes: {
      regional_center: "Regional Center (pasivo — recomendado)",
      direct: "Direct EB-5 (operas el negocio)",
    },
    investmentLabel: "Inversión",
    reservedLabel: "Asignación reservada",
    jobsLabel: "Empleos requeridos",
    timelineLabel: "I-526E",
    brazilLabel: "Fila Brasil",
    currentLabel: "CURRENT (sin backlog)",
    approvalLabel: "Aprobación del sector",
    approvalSignal: {
      high: "Alta (Rural TEA + Regional Center)",
      mixed: "Mixta — depende del proyecto",
      low: "Histórica ~25% (Direct EB-5)",
    },
    highlightsLabel: "Puntos clave",
    ctaTitle: "¿Quieres evaluar tu proyecto EB-5?",
    ctaBody: `El source of funds es donde se niegan la mayoría de peticiones brasileñas. Trabajamos con contadores integrados desde el día 1. WhatsApp ${FIRM.phone}.`,
    consultCta: "Agendar consulta EB-5",
    whatsappCta: "Chatear por WhatsApp",
    disclaimer:
      "Esta herramienta ofrece estimación educativa basada en el EB-5 Reform and Integrity Act (2022). No constituye asesoría legal.",
  },
} as const;

export function Eb5Calculator({ locale }: { locale: L }) {
  const copy = COPY[locale];
  const [tier, setTier] = useState<Eb5Tier>("rural_tea");
  const [mode, setMode] = useState<InvestorMode>("regional_center");
  const result = useMemo(() => computeEb5({ tier, mode }), [tier, mode]);
  const intlLocale =
    locale === "pt" ? "pt-BR" : locale === "es" ? "es-419" : "en-US";

  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <div className="grid gap-8 md:grid-cols-5">
          {/* Input panel */}
          <div className="md:col-span-2">
            <div className="rounded-[var(--radius-lg)] border border-gold/20 bg-white p-6 shadow-sm">
              <fieldset className="space-y-2">
                <legend className="text-sm font-medium text-ink">
                  {copy.tierLabel}
                </legend>
                {(Object.keys(copy.tiers) as Eb5Tier[]).map((t) => (
                  <TierOption
                    key={t}
                    name="tier"
                    value={t}
                    current={tier}
                    onChange={(v) => setTier(v as Eb5Tier)}
                    label={copy.tiers[t]}
                  />
                ))}
              </fieldset>

              <fieldset className="mt-6 space-y-2">
                <legend className="text-sm font-medium text-ink">
                  {copy.modeLabel}
                </legend>
                {(Object.keys(copy.modes) as InvestorMode[]).map((m) => (
                  <TierOption
                    key={m}
                    name="mode"
                    value={m}
                    current={mode}
                    onChange={(v) => setMode(v as InvestorMode)}
                    label={copy.modes[m]}
                  />
                ))}
              </fieldset>
            </div>
          </div>

          {/* Result panel */}
          <div className="md:col-span-3">
            <div className="rounded-[var(--radius-lg)] bg-ink p-6 text-cream shadow-xl md:p-8">
              <p className="text-xs font-medium uppercase tracking-wider text-gold">
                {copy.investmentLabel}
              </p>
              <div className="mt-2 font-heading text-4xl font-semibold text-cream md:text-5xl">
                {formatUsd(result.investmentUsd, intlLocale)}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-cream/10 pt-4 text-sm">
                <div>
                  <div className="text-xs uppercase tracking-wider text-cream/50">
                    {copy.reservedLabel}
                  </div>
                  <div className="mt-0.5 text-base font-semibold text-cream">
                    {result.reservedPct}%
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-cream/50">
                    {copy.jobsLabel}
                  </div>
                  <div className="mt-0.5 text-base font-semibold text-cream">
                    {result.jobsRequired}
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-cream/50">
                    {copy.timelineLabel}
                  </div>
                  <div className="mt-0.5 text-base font-semibold text-cream">
                    {result.i526eMonths.low}–{result.i526eMonths.high} mo
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-cream/50">
                    {copy.brazilLabel}
                  </div>
                  <div className="mt-0.5 text-sm text-cream">
                    {copy.currentLabel}
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-[var(--radius-md)] border border-gold/30 bg-gold/10 p-4">
                <div className="text-xs font-medium uppercase tracking-wider text-gold">
                  {copy.approvalLabel}
                </div>
                <p className="mt-1.5 text-sm text-cream">
                  {copy.approvalSignal[result.approvalSignal]}
                </p>
              </div>

              <div className="mt-6">
                <div className="text-xs font-medium uppercase tracking-wider text-cream/50">
                  {copy.highlightsLabel}
                </div>
                <ul className="mt-2 space-y-2">
                  {result.qualitativeNotes[locale].map((n) => (
                    <li key={n} className="flex gap-2 text-xs leading-relaxed text-cream/70">
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

function TierOption({
  name,
  value,
  current,
  onChange,
  label,
}: {
  name: string;
  value: string;
  current: string;
  onChange: (v: string) => void;
  label: string;
}) {
  const selected = current === value;
  return (
    <label
      className={cn(
        "flex cursor-pointer items-center gap-3 rounded-[var(--radius-md)] border p-3 text-sm transition-colors",
        selected
          ? "border-gold bg-gold/5 text-ink"
          : "border-border text-ink hover:border-gold/40",
      )}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={selected}
        onChange={(e) => onChange(e.target.value)}
        className="h-4 w-4 accent-gold"
      />
      <span>{label}</span>
    </label>
  );
}
