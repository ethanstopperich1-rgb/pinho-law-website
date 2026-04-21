import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import {
  ServiceHubTemplate,
  type ServiceHubContent,
  type L,
} from "@/components/service/ServiceHubTemplate";
import type { Locale } from "@/i18n/routing";

const SLUG = "immigration";

const DATA: Record<L, ServiceHubContent> = {
  pt: {
    locale: "pt",
    slug: SLUG,
    breadcrumbLabel: "Imigração",
    eyebrow: "Prática",
    h1: "Advocacia de Imigração nos EUA para Brasileiros",
    lede:
      "500+ casos aprovados, 90% de taxa de sucesso, 9 anos em Orlando. Atendemos em português, inglês e espanhol — do primeiro visto à cidadania.",
    stats: [
      { value: "500+", label: "Casos aprovados" },
      { value: "90%", label: "Aprovação" },
      { value: "CURRENT", label: "Fila Brasil (EB-1/2/3)" },
      { value: "PT/EN/ES", label: "Trilíngue" },
    ],
    groups: [
      {
        title: "Vistos de Imigrante (Green Cards)",
        intro:
          "Caminhos permanentes de residência: baseados em emprego, investimento, família, casamento ou cidadania.",
        cards: [
          { title: "EB-2 NIW — National Interest Waiver", body: "Sem oferta de emprego, sem PERM, sem patrocinador. Brasileiros CURRENT em 2026.", href: "/immigration/immigrant-visas/eb-2-niw", featured: true },
          { title: "EB-1 — Habilidade Extraordinária", body: "EB-1A (auto-petição), EB-1B (pesquisador), EB-1C (executivo multinacional).", href: "/immigration/immigrant-visas/eb-1" },
          { title: "EB-3 — Trabalhador Qualificado", body: "Com PERM e patrocínio de empregador.", href: "/immigration/immigrant-visas/eb-3" },
          { title: "EB-5 — Green Card por Investimento", body: "US$ 800K (Rural/TEA) ou US$ 1,05M. Brasileiros 1,4 anos em média.", href: "/immigration/immigrant-visas/eb-5" },
          { title: "Casamento com Cidadão Americano", body: "10–13 meses. Data de prioridade sempre CURRENT.", href: "/immigration/immigrant-visas/marriage-us-citizen" },
          { title: "Casamento com Residente Permanente (LPR)", body: "Categoria F-2A. Prazos conforme Visa Bulletin.", href: "/immigration/immigrant-visas/marriage-lpr" },
          { title: "Green Card Familiar", body: "Cônjuge, pais, filhos, irmãos.", href: "/immigration/immigrant-visas/family-green-card" },
          { title: "Cidadania Americana (N-400)", body: "3 anos (casado com USC) ou 5 anos. Brasil permite dupla cidadania.", href: "/immigration/immigrant-visas/us-citizenship" },
        ],
      },
      {
        title: "Vistos Não-Imigrantes",
        intro: "Vistos temporários de trabalho, investimento e estudo.",
        cards: [
          { title: "L-1 — Transferência Intra-Empresa", body: "L-1A para executivo/gerente. Rota direta ao EB-1C (sem PERM).", href: "/immigration/non-immigrant-visas/l-1" },
          { title: "E-2 — Investidor Tratado", body: "⚠️ Brasil NÃO é país signatário. Só com dupla cidadania.", href: "/immigration/non-immigrant-visas/e-2" },
          { title: "O-1 — Habilidade Extraordinária", body: "Sem cap, sem loteria.", href: "/immigration/non-immigrant-visas/o-1" },
          { title: "H-1B — Ocupação Especializada (2026)", body: "Taxa US$ 100K + loteria. Considere O-1A como alternativa.", href: "/immigration/non-immigrant-visas/h-1b" },
          { title: "F-1 — Estudante", body: "SEVP + OPT + STEM OPT.", href: "/immigration/non-immigrant-visas/f-1" },
          { title: "Extensão e Mudança de Status", body: "I-539 / I-129.", href: "/immigration/non-immigrant-visas/visa-extension" },
        ],
      },
    ],
    ctaLabel: "Agendar Avaliação Gratuita",
    ctaHref: "/consultation",
  },
  en: {
    locale: "en",
    slug: SLUG,
    breadcrumbLabel: "Immigration",
    eyebrow: "Practice",
    h1: "US Immigration Law for Brazilians",
    lede:
      "500+ cases approved, 90% success rate, 9 years in Orlando. Counsel in Portuguese, English, and Spanish — first visa to citizenship.",
    stats: [
      { value: "500+", label: "Cases approved" },
      { value: "90%", label: "Success rate" },
      { value: "CURRENT", label: "Brazil queue" },
      { value: "PT/EN/ES", label: "Trilingual" },
    ],
    groups: [
      {
        title: "Immigrant Visas (Green Cards)",
        intro: "Permanent residence paths.",
        cards: [
          { title: "EB-2 NIW", body: "No job offer, no PERM, no sponsor. Brazilians CURRENT in 2026.", href: "/immigration/immigrant-visas/eb-2-niw", featured: true },
          { title: "EB-1 — Extraordinary Ability", body: "EB-1A / EB-1B / EB-1C.", href: "/immigration/immigrant-visas/eb-1" },
          { title: "EB-3 — Skilled Worker", body: "With PERM and employer sponsorship.", href: "/immigration/immigrant-visas/eb-3" },
          { title: "EB-5 — Investor Green Card", body: "$800K Rural/TEA or $1.05M. Brazilians 1.4-year avg.", href: "/immigration/immigrant-visas/eb-5" },
          { title: "Marriage to US Citizen", body: "10–13 months. Priority date CURRENT.", href: "/immigration/immigrant-visas/marriage-us-citizen" },
          { title: "Marriage to LPR", body: "F-2A category.", href: "/immigration/immigrant-visas/marriage-lpr" },
          { title: "Family-Based Green Card", body: "Spouse, parents, children, siblings.", href: "/immigration/immigrant-visas/family-green-card" },
          { title: "US Citizenship (N-400)", body: "3 or 5 years. Brazil allows dual citizenship.", href: "/immigration/immigrant-visas/us-citizenship" },
        ],
      },
      {
        title: "Non-Immigrant Visas",
        intro: "Temporary work, investment, and study visas.",
        cards: [
          { title: "L-1 — Intracompany Transfer", body: "Direct EB-1C route (no PERM).", href: "/immigration/non-immigrant-visas/l-1" },
          { title: "E-2 — Treaty Investor", body: "⚠️ Brazil NOT treaty country.", href: "/immigration/non-immigrant-visas/e-2" },
          { title: "O-1 — Extraordinary Ability", body: "No cap, no lottery.", href: "/immigration/non-immigrant-visas/o-1" },
          { title: "H-1B — Specialty Occupation 2026", body: "$100K fee + lottery.", href: "/immigration/non-immigrant-visas/h-1b" },
          { title: "F-1 — Student", body: "OPT + STEM OPT.", href: "/immigration/non-immigrant-visas/f-1" },
          { title: "Visa Extension + Change of Status", body: "I-539 / I-129.", href: "/immigration/non-immigrant-visas/visa-extension" },
        ],
      },
    ],
    ctaLabel: "Book Free Evaluation",
    ctaHref: "/consultation",
  },
  es: {
    locale: "es",
    slug: SLUG,
    breadcrumbLabel: "Inmigración",
    eyebrow: "Práctica",
    h1: "Derecho de Inmigración en EE.UU. para Brasileños",
    lede: "500+ casos aprobados, 90% éxito, 9 años en Orlando. Portugués, inglés, español.",
    stats: [
      { value: "500+", label: "Casos aprobados" },
      { value: "90%", label: "Tasa de éxito" },
      { value: "CURRENT", label: "Fila Brasil" },
      { value: "PT/EN/ES", label: "Trilingüe" },
    ],
    groups: [
      {
        title: "Visas de Inmigrante (Green Cards)",
        cards: [
          { title: "EB-2 NIW", body: "Sin oferta, sin PERM.", href: "/immigration/immigrant-visas/eb-2-niw", featured: true },
          { title: "EB-1", body: "EB-1A / EB-1B / EB-1C.", href: "/immigration/immigrant-visas/eb-1" },
          { title: "EB-3", body: "Con PERM.", href: "/immigration/immigrant-visas/eb-3" },
          { title: "EB-5", body: "US$ 800K Rural/TEA.", href: "/immigration/immigrant-visas/eb-5" },
          { title: "Matrimonio con USC", body: "10–13 meses.", href: "/immigration/immigrant-visas/marriage-us-citizen" },
          { title: "Ciudadanía (N-400)", body: "3 o 5 años.", href: "/immigration/immigrant-visas/us-citizenship" },
        ],
      },
      {
        title: "Visas No Inmigrantes",
        cards: [
          { title: "L-1", body: "Ruta directa EB-1C.", href: "/immigration/non-immigrant-visas/l-1" },
          { title: "E-2", body: "⚠️ Brasil NO signatario.", href: "/immigration/non-immigrant-visas/e-2" },
          { title: "O-1", body: "Sin cupo, sin lotería.", href: "/immigration/non-immigrant-visas/o-1" },
          { title: "H-1B 2026", body: "Tarifa US$ 100K + lotería.", href: "/immigration/non-immigrant-visas/h-1b" },
          { title: "F-1", body: "OPT + STEM OPT.", href: "/immigration/non-immigrant-visas/f-1" },
        ],
      },
    ],
    ctaLabel: "Agendar Evaluación Gratuita",
    ctaHref: "/consultation",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = DATA[locale as L];
  return createPageMetadata({ title: `${c.h1} | Pinho Law`, description: c.lede, path: `/${SLUG}`, locale: locale as Locale });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ServiceHubTemplate content={DATA[locale as L]} />;
}
