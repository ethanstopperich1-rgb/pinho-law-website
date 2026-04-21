"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { JsonLd } from "@/components/seo/json-ld";
import { faqSchema } from "@/lib/schema";
import type { Faq, Locale } from "@/types/data";
import { FAQS } from "@/data/faqs";

const RELATED_LABEL: Record<Locale, string> = {
  pt: "Veja também",
  en: "See also",
  es: "Véase también",
};

export function FaqAccordion({
  faqs,
  locale,
}: {
  faqs: Faq[];
  locale: Locale;
}) {
  const [open, setOpen] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <>
      <JsonLd
        data={faqSchema(
          faqs.map((f) => ({
            question: f.question[locale],
            answer: f.shortAnswer[locale],
          })),
        )}
      />
      <div className="space-y-3">
        {faqs.map((f) => {
          const isOpen = open === f.id;
          return (
            <div
              key={f.id}
              className={`rounded-[var(--radius-md)] border bg-white transition-all ${
                isOpen
                  ? "border-l-4 border-[#C9A961] shadow-md"
                  : "border-border"
              }`}
            >
              <button
                onClick={() => setOpen(isOpen ? null : f.id)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-heading text-base font-semibold text-ink hover:text-[#C9A961]"
                aria-expanded={isOpen}
              >
                <span>{f.question[locale]}</span>
                {isOpen ? (
                  <Minus className="h-5 w-5 shrink-0 text-[#C9A961]" />
                ) : (
                  <Plus className="h-5 w-5 shrink-0 text-[#C9A961]" />
                )}
              </button>
              {isOpen && (
                <div className="border-t border-border px-5 py-4">
                  <p className="text-sm leading-relaxed text-ink-muted md:text-base">
                    {f.shortAnswer[locale]}
                  </p>
                  {f.relatedQuestions && f.relatedQuestions.length > 0 && (
                    <div className="mt-4 border-t border-border pt-3">
                      <div className="text-xs font-medium uppercase tracking-wider text-[#C9A961]">
                        {RELATED_LABEL[locale]}
                      </div>
                      <ul className="mt-2 space-y-1">
                        {f.relatedQuestions
                          .map((id) => FAQS.find((x) => x.id === id))
                          .filter(Boolean)
                          .map((r) => (
                            <li key={r!.id}>
                              <Link
                                href={`/perguntas/${r!.slug[locale]}`}
                                className="text-xs text-ink hover:text-[#C9A961]"
                              >
                                → {r!.question[locale]}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
