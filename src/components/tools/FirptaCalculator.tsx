"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import {
  computeFirpta,
  formatUsd,
  type BuyerUse,
  type SellerType,
} from "@/lib/tools/firpta";
import { FIRM } from "@/lib/constants";

type L = "pt" | "en" | "es";

const COPY = {
  pt: {
    salePriceLabel: "Preço de venda do imóvel",
    salePricePlaceholder: "Ex: 850000",
    buyerUseLabel: "Uso pelo comprador",
    buyerUseResidence: "Residência própria",
    buyerUseInvestment: "Investimento (aluguel, STR, flip)",
    sellerTypeLabel: "Tipo de vendedor",
    sellerIndividual: "Pessoa física estrangeira",
    sellerForeignCorp: "Pessoa jurídica estrangeira",
    resultTitle: "Retenção FIRPTA estimada",
    rateLabel: "Alíquota aplicada",
    bracketLabel: "Faixa",
    importantLabel: "Importante",
    grossWarning:
      "FIRPTA retém sobre o preço bruto — não sobre o lucro. O vendedor recupera o excedente via declaração de IR americana (Form 1040-NR), em média 6-12 meses após o fechamento.",
    llcEscape:
      "Estruturar a compra via LLC americana (disregarded entity) pode reduzir ou eliminar a retenção na venda futura.",
    ctaTitle: "Quer estruturar sua compra antes do fechamento?",
    ctaBody: `Conversamos em português, inglês ou espanhol. WhatsApp ${FIRM.phone}.`,
    consultCta: "Agendar consulta gratuita",
    whatsappCta: "Falar no WhatsApp",
    disclaimer:
      "Esta ferramenta oferece estimativa educacional. Não constitui assessoria jurídica ou tributária. Consulte um advogado licenciado para análise do seu caso.",
  },
  en: {
    salePriceLabel: "Property sale price",
    salePricePlaceholder: "e.g. 850000",
    buyerUseLabel: "Buyer use",
    buyerUseResidence: "Personal residence",
    buyerUseInvestment: "Investment (rental, STR, flip)",
    sellerTypeLabel: "Seller type",
    sellerIndividual: "Foreign individual",
    sellerForeignCorp: "Foreign corporation",
    resultTitle: "Estimated FIRPTA withholding",
    rateLabel: "Rate applied",
    bracketLabel: "Bracket",
    importantLabel: "Important",
    grossWarning:
      "FIRPTA withholds on gross price — not profit. Seller recovers the excess via US tax return (Form 1040-NR), typically 6-12 months after closing.",
    llcEscape:
      "Structuring the purchase via US LLC (disregarded entity) may reduce or eliminate withholding on future sale.",
    ctaTitle: "Want to structure your purchase before closing?",
    ctaBody: `We work in Portuguese, English, and Spanish. WhatsApp ${FIRM.phone}.`,
    consultCta: "Book a free consultation",
    whatsappCta: "Chat on WhatsApp",
    disclaimer:
      "This tool provides an educational estimate. Not legal or tax advice. Consult a licensed attorney for case-specific analysis.",
  },
  es: {
    salePriceLabel: "Precio de venta de la propiedad",
    salePricePlaceholder: "Ej: 850000",
    buyerUseLabel: "Uso por el comprador",
    buyerUseResidence: "Residencia propia",
    buyerUseInvestment: "Inversión (alquiler, STR, flip)",
    sellerTypeLabel: "Tipo de vendedor",
    sellerIndividual: "Persona física extranjera",
    sellerForeignCorp: "Persona jurídica extranjera",
    resultTitle: "Retención FIRPTA estimada",
    rateLabel: "Tasa aplicada",
    bracketLabel: "Tramo",
    importantLabel: "Importante",
    grossWarning:
      "FIRPTA retiene sobre el precio bruto — no sobre la ganancia. El vendedor recupera el excedente vía declaración de impuestos de EE.UU. (Form 1040-NR), típicamente 6-12 meses después del cierre.",
    llcEscape:
      "Estructurar la compra vía LLC estadounidense (disregarded entity) puede reducir o eliminar la retención en la venta futura.",
    ctaTitle: "¿Quieres estructurar tu compra antes del cierre?",
    ctaBody: `Trabajamos en portugués, inglés y español. WhatsApp ${FIRM.phone}.`,
    consultCta: "Agendar consulta gratuita",
    whatsappCta: "Chatear por WhatsApp",
    disclaimer:
      "Esta herramienta ofrece una estimación educativa. No constituye asesoría legal o tributaria. Consulta a un abogado licenciado para análisis de tu caso.",
  },
} as const;

const EXAMPLES = [275_000, 475_000, 850_000, 1_500_000];

export function FirptaCalculator({ locale }: { locale: L }) {
  const copy = COPY[locale];
  const [salePrice, setSalePrice] = useState<string>("850000");
  const [buyerUse, setBuyerUse] = useState<BuyerUse>("residence");
  const [sellerType, setSellerType] = useState<SellerType>("individual");

  const result = useMemo(() => {
    const n = Number(salePrice.replace(/[^0-9.]/g, ""));
    return computeFirpta({
      salePrice: Number.isFinite(n) ? n : 0,
      buyerUse,
      sellerType,
    });
  }, [salePrice, buyerUse, sellerType]);

  const intlLocale =
    locale === "pt" ? "pt-BR" : locale === "es" ? "es-419" : "en-US";

  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <div className="grid gap-8 md:grid-cols-5">
          {/* Input panel */}
          <div className="md:col-span-2">
            <div className="rounded-[var(--radius-lg)] border border-gold/20 bg-white p-6 shadow-sm">
              <h2 className="font-heading text-lg font-semibold text-ink">
                {copy.salePriceLabel}
              </h2>

              <label className="mt-3 block">
                <div className="relative">
                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-ink-muted">
                    $
                  </span>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={salePrice}
                    onChange={(e) => setSalePrice(e.target.value)}
                    placeholder={copy.salePricePlaceholder}
                    className="w-full rounded-[var(--radius-md)] border border-border bg-white py-2.5 pl-7 pr-3 text-base font-medium text-ink outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                  />
                </div>
              </label>

              <div className="mt-3 flex flex-wrap gap-2">
                {EXAMPLES.map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setSalePrice(String(v))}
                    className={cn(
                      "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
                      Number(salePrice) === v
                        ? "border-gold bg-gold/10 text-gold"
                        : "border-border text-ink-muted hover:border-gold/40 hover:text-ink",
                    )}
                  >
                    {formatUsd(v, intlLocale)}
                  </button>
                ))}
              </div>

              <fieldset className="mt-6 space-y-2">
                <legend className="text-sm font-medium text-ink">
                  {copy.buyerUseLabel}
                </legend>
                <RadioOption
                  name="buyerUse"
                  value="residence"
                  current={buyerUse}
                  onChange={(v) => setBuyerUse(v as BuyerUse)}
                  label={copy.buyerUseResidence}
                />
                <RadioOption
                  name="buyerUse"
                  value="investment"
                  current={buyerUse}
                  onChange={(v) => setBuyerUse(v as BuyerUse)}
                  label={copy.buyerUseInvestment}
                />
              </fieldset>

              <fieldset className="mt-6 space-y-2">
                <legend className="text-sm font-medium text-ink">
                  {copy.sellerTypeLabel}
                </legend>
                <RadioOption
                  name="sellerType"
                  value="individual"
                  current={sellerType}
                  onChange={(v) => setSellerType(v as SellerType)}
                  label={copy.sellerIndividual}
                />
                <RadioOption
                  name="sellerType"
                  value="foreign_corporation"
                  current={sellerType}
                  onChange={(v) => setSellerType(v as SellerType)}
                  label={copy.sellerForeignCorp}
                />
              </fieldset>
            </div>
          </div>

          {/* Result panel */}
          <div className="md:col-span-3">
            <div className="rounded-[var(--radius-lg)] bg-ink p-6 text-cream shadow-xl md:p-8">
              <p className="text-xs font-medium uppercase tracking-wider text-gold">
                {copy.resultTitle}
              </p>
              <div className="mt-2 font-heading text-4xl font-semibold text-cream md:text-5xl">
                {formatUsd(result.withholdingAmount, intlLocale)}
              </div>
              <div className="mt-4 flex items-center gap-4 border-t border-cream/10 pt-4 text-sm">
                <div>
                  <div className="text-xs uppercase tracking-wider text-cream/50">
                    {copy.rateLabel}
                  </div>
                  <div className="mt-0.5 text-base font-semibold text-cream">
                    {(result.withholdingRate * 100).toFixed(0)}%
                  </div>
                </div>
                <div className="h-10 w-px bg-cream/10" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-cream/50">
                    {copy.bracketLabel}
                  </div>
                  <div className="mt-0.5 text-sm text-cream">
                    {result.bracketLabel[locale]}
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-[var(--radius-md)] border border-gold/30 bg-gold/10 p-4">
                <div className="text-xs font-medium uppercase tracking-wider text-gold">
                  {copy.importantLabel}
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-cream">
                  {result.note[locale]}
                </p>
              </div>

              <ul className="mt-4 space-y-2 text-xs leading-relaxed text-cream/70">
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {copy.grossWarning}
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {copy.llcEscape}
                </li>
              </ul>
            </div>

            {/* CTA block */}
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

function RadioOption({
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
