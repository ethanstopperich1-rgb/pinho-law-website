import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { PriorityDateCalculator } from "@/components/tools/PriorityDateCalculator";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import type { Locale } from "@/i18n/routing";

type L = "pt" | "en" | "es";

const TITLES = {
  pt: "Priority Date Tracker 2026 — Visa Bulletin Brasil | Pinho Law",
  en: "Priority Date Tracker 2026 — Visa Bulletin Brazil | Pinho Law",
  es: "Priority Date Tracker 2026 — Visa Bulletin Brasil | Pinho Law",
} as const;

const DESCRIPTIONS = {
  pt: "Veja sua fila EB-1/EB-2/EB-3/EB-5/Família por país. Cortes indicativos abril/2026. Brasil CURRENT em EB-1 e EB-5. Gratuita, em português.",
  en: "Track your EB-1/EB-2/EB-3/EB-5/Family queue by country. Indicative April 2026 cutoffs. Brazil CURRENT in EB-1 and EB-5. Free, by Pinho Law.",
  es: "Rastrea tu fila EB-1/EB-2/EB-3/EB-5/Familia por país. Cortes indicativos abril/2026. Brasil CURRENT en EB-1 y EB-5.",
} as const;

const HEADINGS = {
  pt: {
    eyebrow: "Ferramenta gratuita",
    heading: "Priority Date Tracker — Visa Bulletin 2026",
    sub: "Veja o status da sua categoria no Visa Bulletin de abril/2026 por país. Brasil entra em ‘All Other’ — para brasileiros, as principais filas são EB-2, EB-3 e família.",
  },
  en: {
    eyebrow: "Free tool",
    heading: "Priority Date Tracker — Visa Bulletin 2026",
    sub: "See your category’s status in the April 2026 Visa Bulletin by country. Brazil falls under ‘All Other’ — the main backlogs Brazilians face are EB-2, EB-3, and family-sponsored.",
  },
  es: {
    eyebrow: "Herramienta gratuita",
    heading: "Priority Date Tracker — Visa Bulletin 2026",
    sub: "Revisa el estado de tu categoría en el Visa Bulletin de abril/2026 por país.",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const key = locale as L;
  return createPageMetadata({
    title: TITLES[key],
    description: DESCRIPTIONS[key],
    path: "/tools/priority-date-tracker",
    locale: locale as Locale,
  });
}

export default async function PriorityDateTrackerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const key = locale as L;
  const h = HEADINGS[key];
  return (
    <>
      <section className="bg-cream pt-20 pb-10 md:pt-28 md:pb-12">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <span className="gold-rule mx-auto" />
            <p className="mt-6 text-xs font-medium uppercase tracking-wider text-gold">
              {h.eyebrow}
            </p>
            <h1 className="mt-3 font-heading text-3xl font-semibold text-ink md:text-5xl">
              {h.heading}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-muted md:text-base">
              {h.sub}
            </p>
          </FadeIn>
        </Container>
      </section>
      <PriorityDateCalculator locale={key} />
    </>
  );
}
