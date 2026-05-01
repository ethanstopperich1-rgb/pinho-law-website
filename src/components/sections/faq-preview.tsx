"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function FaqPreview() {
  const t = useTranslations("faq");

  // Surface 6 of 8 high-intent questions on the homepage; full set lives at
  // /resources/faq. Order is review-driven: language first, timelines next,
  // RFE recovery, the business+immigration combo, family/veterans, then
  // consultation logistics. Pricing and "where is the office" are saved
  // for the dedicated FAQ page.
  const items = [0, 1, 2, 3, 4, 5].map((i) => ({
    question: t(`items.${i}.question`),
    answer: t(`items.${i}.answer`),
  }));

  return (
    <section className="py-24 md:py-32">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-xl text-center">
            <span className="gold-rule mx-auto" />
            <h2 className="mt-6 font-heading text-3xl font-semibold text-ink md:text-4xl lg:text-5xl">
              {t("headline")}
            </h2>
          </div>
        </FadeIn>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {items.map((item, i) => (
            <FadeIn key={i} delay={0.08 * (i + 1)}>
              <AccordionItem
                question={item.question}
                answer={item.answer}
              />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-10 text-center">
            <Link
              href="/resources/faq"
              className="inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-gold-dark"
            >
              {t("cta")} <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

function AccordionItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "rounded-[var(--radius-md)] border transition-colors duration-300",
        open ? "border-gold/30 bg-gold-wash/50" : "border-border bg-white"
      )}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="pr-4 font-heading text-base font-semibold text-ink md:text-lg">
          {question}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-gold transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-300",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-5">
            <p className="text-sm leading-relaxed text-ink-muted">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
