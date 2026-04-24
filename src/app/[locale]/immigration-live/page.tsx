import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { BeamsBackground } from "@/components/ui/beams-background";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { Link } from "@/i18n/navigation";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { FIRM } from "@/lib/constants";
import type { Locale } from "@/i18n/routing";

type L = "pt" | "en" | "es";

const TITLES = {
  pt: "Imigração ao Vivo — USCIS, AILA, DOS | Pinho Law",
  en: "Immigration Live — USCIS, AILA, DOS Updates | Pinho Law",
  es: "Inmigración en Vivo — Actualizaciones USCIS | Pinho Law",
} as const;

const DESCRIPTIONS = {
  pt: "Atualizações em tempo real de USCIS, AILA, DOS Visa Bulletin e Federal Register — traduzidas e contextualizadas para brasileiros.",
  en: "Real-time updates from USCIS, AILA, DOS Visa Bulletin, and Federal Register — translated and contextualized for Brazilians in the US.",
  es: "Actualizaciones en tiempo real de USCIS, AILA, DOS — traducidas para latinoamericanos.",
} as const;

const COPY = {
  pt: {
    eyebrow: "EM BREVE",
    heading: "Imigração ao Vivo",
    sub: "Um feed curado de USCIS, AILA, DOS Visa Bulletin e Federal Register — traduzido para português e contextualizado para brasileiros. Em desenvolvimento ativo.",
    sources: ["USCIS", "AILA Lawfully", "DOS Visa Bulletin", "Federal Register"],
    cta: "Agendar Consulta Agora",
    wa: "WhatsApp",
    meanwhile:
      "Enquanto isso, siga nosso blog para análises em profundidade dos principais movimentos regulatórios.",
    blogCta: "Ler blog",
  },
  en: {
    eyebrow: "COMING SOON",
    heading: "Immigration Live",
    sub: "A curated feed from USCIS, AILA, DOS Visa Bulletin, and Federal Register — translated and contextualized. In active development.",
    sources: ["USCIS", "AILA Lawfully", "DOS Visa Bulletin", "Federal Register"],
    cta: "Book Consultation Now",
    wa: "WhatsApp",
    meanwhile:
      "Meanwhile, follow our blog for in-depth analyses of major regulatory movements.",
    blogCta: "Read blog",
  },
  es: {
    eyebrow: "PRONTO",
    heading: "Inmigración en Vivo",
    sub: "Feed curado de USCIS, AILA, DOS Visa Bulletin y Federal Register — traducido y contextualizado. En desarrollo activo.",
    sources: ["USCIS", "AILA Lawfully", "DOS Visa Bulletin", "Federal Register"],
    cta: "Agendar Consulta",
    wa: "WhatsApp",
    meanwhile:
      "Mientras tanto, sigue nuestro blog para análisis en profundidad.",
    blogCta: "Leer blog",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l = locale as L;
  return createPageMetadata({
    title: TITLES[l],
    description: DESCRIPTIONS[l],
    path: "/immigration-live",
    locale: locale as Locale,
  });
}

export default async function ImmigrationLivePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as L;
  const h = COPY[l];

  return (
    <BeamsBackground intensity="medium" className="min-h-[92vh]">
      <div className="flex min-h-[92vh] w-full items-center justify-center px-4 py-20 md:py-28">
        <Container>
          <FadeIn className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center justify-center rounded-full border border-[#C9A961]/40 bg-[#C9A961]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#C9A961] backdrop-blur-sm">
              ● {h.eyebrow}
            </p>
            <h1 className="mt-6 font-heading text-4xl font-semibold leading-[1.05] tracking-tighter text-white sm:text-5xl md:text-7xl lg:text-8xl">
              {h.heading}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-xl">
              {h.sub}
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-2 md:gap-3">
              {h.sources.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm md:text-sm"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <MagneticButton distance={0.3}>
                <Link
                  href="/consultation"
                  className="inline-flex w-full items-center justify-center rounded-[var(--radius-md)] bg-[#C9A961] px-6 py-3 text-sm font-semibold text-[#0E1B2E] transition-colors hover:bg-[#C9A961]/90 sm:w-auto md:text-base"
                >
                  {h.cta}
                </Link>
              </MagneticButton>
              <WhatsAppButton size="lg">WhatsApp</WhatsAppButton>
            </div>

            <p className="mt-10 text-sm leading-relaxed text-white/55 md:text-base">
              {h.meanwhile}
            </p>
            <Link
              href="/blog"
              className="mt-2 inline-block text-sm font-medium text-[#C9A961] hover:underline"
            >
              {h.blogCta} →
            </Link>
          </FadeIn>
        </Container>
      </div>
    </BeamsBackground>
  );
}
