import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import {
  ServicePageTemplate,
  type ServicePageContent,
  type L,
} from "@/components/service/ServicePageTemplate";
import type { Locale } from "@/i18n/routing";

const SLUG = "immigration/immigrant-visas/eb-3";

const DATA: Record<L, ServicePageContent> = {
  pt: {
    locale: "pt",
    slug: SLUG,
    immigrationBreadcrumb: "Imigração",
    breadcrumbLabel: "EB-3",
    eyebrow: "Visto de Imigrante",
    h1: "Visto EB-3 — Trabalhador Qualificado",
    lede:
      "EB-3 exige oferta de emprego americana + PERM (processo de certificação de trabalho no DOL). Três subcategorias: Skilled Workers (bacharelado + 2 anos exp.), Professionals (bacharelado), Other Workers (não qualificado). Brasileiros sem backlog. Menos preferível que EB-2 NIW para profissionais com mestrado.",
    stats: [
      { value: "CURRENT", label: "Brasil 2026" },
      { value: "Requer", label: "PERM + oferta" },
      { value: "2–5 anos", label: "Timeline total" },
      { value: "3", label: "Subcategorias" },
    ],
    meta: {
      title: "Visto EB-3 para Brasileiros — Skilled Worker + PERM | Pinho Law",
      description:
        "EB-3 green card: Skilled Workers, Professionals, Other Workers. Requer PERM (certificação DOL) + oferta de empregador. Brasil sem backlog.",
    },
    sections: [
      {
        kind: "table",
        value: {
          heading: "Três subcategorias EB-3",
          headers: ["Subcategoria", "Requisitos"],
          rows: [
            ["Skilled Workers", "Bacharelado + 2+ anos de experiência progressiva"],
            ["Professionals", "Bacharelado na área do cargo (sem experiência extra)"],
            ["Other Workers", "Não-qualificado (ex: limpeza, trabalho manual sem treinamento específico)"],
          ],
          note: "Other Workers tem backlog maior (mesmo para Brasil) e cotas limitadas — geralmente não recomendado.",
          noteStyle: "muted",
        },
      },
      {
        kind: "prose",
        heading: "Por que EB-2 NIW é frequentemente melhor",
        body:
          "Para profissionais brasileiros com mestrado ou com perfil de national interest, EB-2 NIW é normalmente preferível: não exige oferta de emprego, não exige PERM (economiza 6–12 meses), permite auto-petição, mantém flexibilidade de empregador. EB-3 faz sentido quando: (1) você tem apenas bacharelado, (2) não se qualifica para EB-2 NIW, e (3) tem empregador americano disposto a patrocinar.",
      },
      {
        kind: "list",
        value: {
          heading: "Processo EB-3 — passo a passo",
          style: "numbered",
          items: [
            "Empregador anuncia a vaga e testa o mercado de trabalho americano (PERM)",
            "Empregador protocola PERM no DOL (processo de 6–12 meses)",
            "Após aprovação do PERM, empregador protocola I-140 (US$ 715 + US$ 600 APF)",
            "Aprovação do I-140 + I-485 (ajuste de status) ou consular processing",
            "Green card condicional ou permanente (depende de outros fatores)",
          ],
        },
      },
      {
        kind: "table",
        value: {
          heading: "Custo",
          headers: ["Item", "Valor"],
          rows: [
            ["PERM (DOL — empregador arca)", "US$ 0 taxa DOL; custos de recrutamento $2K–5K"],
            ["Taxa USCIS I-140", "US$ 715 + US$ 600 APF"],
            ["Premium Processing I-140", "US$ 2.965"],
            ["Taxa USCIS I-485", "US$ 1.440/pessoa"],
            ["Honorários Pinho Law EB-3 (completo)", "US$ 8.500–12.500"],
          ],
          note: "Em EB-3, a lei exige que o empregador arque com o custo do PERM. Não pode ser repassado ao trabalhador.",
        },
      },
    ],
    faqTitle: "Perguntas frequentes",
    faq: [
      { q: "Brasileiro qualifica para EB-3?", a: "Sim. Brasileiros têm fila CURRENT no EB-3 (categoria Skilled Worker/Professional). A limitação é achar empregador americano disposto a patrocinar + passar por PERM." },
      { q: "Qual a diferença entre EB-2 e EB-3?", a: "EB-2: exige mestrado OU bacharelado + 5 anos; pode ser via NIW (auto-petição). EB-3: apenas bacharelado ou menos; sempre com oferta de emprego + PERM." },
      { q: "EB-3 garante o green card se eu tiver oferta?", a: "Não. Precisa: (1) PERM aprovado, (2) I-140 aprovado, (3) visa number disponível (Brasil CURRENT em 2026), (4) I-485 ou consular aprovado." },
      { q: "Posso mudar de empregador durante o processo?", a: "Depende do estágio. Após I-140 aprovado há 180 dias, você pode usar AC21 portability para mudar. Antes disso, mudança resetaria o processo." },
      { q: "EB-3 tem Premium Processing?", a: "Sim, para o I-140 (US$ 2.965). PERM em si não tem Premium Processing." },
      { q: "Posso trabalhar durante o I-485?", a: "Sim, com EAD (I-765). Advance Parole (I-131) permite viajar." },
    ],
    relatedTitle: "Relacionado",
    related: [
      { label: "EB-2 NIW (sem PERM, auto-petição)", href: "/immigration/immigrant-visas/eb-2-niw" },
      { label: "EB-1A (sem PERM, sem oferta)", href: "/immigration/immigrant-visas/eb-1" },
      { label: "H-1B (se o empregador quer patrocinar temporariamente)", href: "/immigration/non-immigrant-visas/h-1b" },
    ],
  },
  en: {
    locale: "en",
    slug: SLUG,
    immigrationBreadcrumb: "Immigration",
    breadcrumbLabel: "EB-3",
    eyebrow: "Immigrant Visa",
    h1: "EB-3 Visa — Skilled Worker",
    lede:
      "EB-3 requires US job offer + PERM (DOL labor certification). Three subcategories: Skilled Workers (bachelor's + 2 yrs exp.), Professionals (bachelor's), Other Workers (unskilled). Brazilians have no backlog. Less preferred than EB-2 NIW for advanced-degree professionals.",
    stats: [
      { value: "CURRENT", label: "Brazil 2026" },
      { value: "Requires", label: "PERM + offer" },
      { value: "2–5 yrs", label: "Total timeline" },
      { value: "3", label: "Subcategories" },
    ],
    meta: {
      title: "EB-3 Visa for Brazilians — Skilled Worker + PERM | Pinho Law",
      description:
        "EB-3 green card: Skilled Workers, Professionals, Other Workers. Requires PERM + employer sponsorship. Brazil no backlog.",
    },
    sections: [
      {
        kind: "table",
        value: {
          heading: "Three EB-3 subcategories",
          headers: ["Subcategory", "Requirements"],
          rows: [
            ["Skilled Workers", "Bachelor's + 2+ years of progressive experience"],
            ["Professionals", "Bachelor's in the role's field (no extra experience required)"],
            ["Other Workers", "Unskilled (e.g., cleaning, manual work without specific training)"],
          ],
          note: "Other Workers has a larger backlog (even for Brazil) and limited quotas — generally not recommended.",
          noteStyle: "muted",
        },
      },
      {
        kind: "prose",
        heading: "Why EB-2 NIW is often better",
        body:
          "For Brazilian professionals with a master's or national-interest profile, EB-2 NIW is typically preferable: no job offer, no PERM (saves 6–12 months), allows self-petition, keeps employer flexibility. EB-3 makes sense when: (1) you only have a bachelor's, (2) you don't qualify for EB-2 NIW, and (3) you have a US employer willing to sponsor.",
      },
      {
        kind: "list",
        value: {
          heading: "EB-3 process — step by step",
          style: "numbered",
          items: [
            "Employer advertises the role and tests the US labor market (PERM)",
            "Employer files PERM at DOL (6–12 month process)",
            "After PERM approval, employer files I-140 ($715 + $600 APF)",
            "I-140 approval + I-485 (adjustment of status) or consular processing",
            "Conditional or permanent green card (depending on factors)",
          ],
        },
      },
      {
        kind: "table",
        value: {
          heading: "Cost",
          headers: ["Item", "Amount"],
          rows: [
            ["PERM (DOL — employer pays)", "$0 DOL fee; recruiting costs $2K–5K"],
            ["USCIS I-140 fee", "$715 + $600 APF"],
            ["Premium Processing I-140", "$2,965"],
            ["USCIS I-485 fee", "$1,440/person"],
            ["Pinho Law EB-3 fees (full)", "$8,500–12,500"],
          ],
          note: "In EB-3, the law requires the employer to pay PERM costs. Cannot be passed to the worker.",
        },
      },
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      { q: "Do Brazilians qualify for EB-3?", a: "Yes. Brazilians have a CURRENT queue in EB-3 (Skilled Worker/Professional). The constraint is finding a US employer willing to sponsor + go through PERM." },
      { q: "What's the difference between EB-2 and EB-3?", a: "EB-2: requires master's OR bachelor's + 5 years; can use NIW (self-petition). EB-3: only bachelor's or less; always with job offer + PERM." },
      { q: "Does EB-3 guarantee the green card if I have an offer?", a: "No. You need: (1) approved PERM, (2) approved I-140, (3) available visa number (Brazil CURRENT in 2026), (4) approved I-485 or consular." },
      { q: "Can I change employers during the process?", a: "Depends on stage. After I-140 approved for 180 days, you can use AC21 portability to change. Before that, a change resets the process." },
      { q: "Does EB-3 have Premium Processing?", a: "Yes, for I-140 ($2,965). PERM itself has no Premium Processing." },
      { q: "Can I work during the I-485?", a: "Yes, with EAD (I-765). Advance Parole (I-131) allows travel." },
    ],
    relatedTitle: "Related",
    related: [
      { label: "EB-2 NIW (no PERM, self-petition)", href: "/immigration/immigrant-visas/eb-2-niw" },
      { label: "EB-1A (no PERM, no offer)", href: "/immigration/immigrant-visas/eb-1" },
      { label: "H-1B (temporary sponsorship)", href: "/immigration/non-immigrant-visas/h-1b" },
    ],
  },
  es: {
    locale: "es",
    slug: SLUG,
    immigrationBreadcrumb: "Inmigración",
    breadcrumbLabel: "EB-3",
    eyebrow: "Visa de Inmigrante",
    h1: "Visa EB-3 — Trabajador Calificado",
    lede:
      "EB-3 exige oferta de empleo estadounidense + PERM. Tres subcategorías: Skilled Workers, Professionals, Other Workers. Brasileños sin backlog.",
    stats: [
      { value: "CURRENT", label: "Brasil 2026" },
      { value: "Requiere", label: "PERM + oferta" },
      { value: "2–5 años", label: "Timeline total" },
      { value: "3", label: "Subcategorías" },
    ],
    meta: {
      title: "Visa EB-3 para Brasileños — Skilled Worker + PERM | Pinho Law",
      description:
        "Green card EB-3: Skilled Workers, Professionals, Other Workers. Requiere PERM + empleador patrocinador.",
    },
    sections: [
      {
        kind: "table",
        value: {
          heading: "Tres subcategorías",
          headers: ["Subcategoría", "Requisitos"],
          rows: [
            ["Skilled Workers", "Bachiller + 2+ años de experiencia"],
            ["Professionals", "Bachiller en el campo del rol"],
            ["Other Workers", "No calificado"],
          ],
        },
      },
      {
        kind: "prose",
        heading: "Por qué EB-2 NIW suele ser mejor",
        body:
          "Para profesionales con maestría o perfil de interés nacional, EB-2 NIW es preferible: sin oferta, sin PERM, auto-petición.",
      },
    ],
    faqTitle: "Preguntas frecuentes",
    faq: [
      { q: "¿Brasileños califican para EB-3?", a: "Sí. Brasileños tienen fila CURRENT en EB-3." },
      { q: "¿Diferencia EB-2 vs EB-3?", a: "EB-2 puede usar NIW (auto-petición). EB-3 siempre exige oferta + PERM." },
      { q: "¿Puedo cambiar de empleador durante el proceso?", a: "Tras I-140 aprobado 180 días, puedes usar AC21 portability." },
    ],
    relatedTitle: "Relacionado",
    related: [
      { label: "EB-2 NIW", href: "/immigration/immigrant-visas/eb-2-niw" },
      { label: "EB-1A", href: "/immigration/immigrant-visas/eb-1" },
      { label: "H-1B", href: "/immigration/non-immigrant-visas/h-1b" },
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const c = DATA[locale as L];
  return createPageMetadata({
    title: c.meta.title,
    description: c.meta.description,
    path: `/${SLUG}`,
    locale: locale as Locale,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ServicePageTemplate content={DATA[locale as L]} />;
}
