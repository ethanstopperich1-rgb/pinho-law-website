import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import {
  ServicePageTemplate,
  type ServicePageContent,
  type L,
} from "@/components/service/ServicePageTemplate";
import type { Locale } from "@/i18n/routing";

const SLUG = "immigration/immigrant-visas/eb-1";

// Copy per website/content/spec-part-7.md §EB-1.
const DATA: Record<L, ServicePageContent> = {
  pt: {
    locale: "pt",
    slug: SLUG,
    immigrationBreadcrumb: "Imigração",
    breadcrumbLabel: "EB-1",
    eyebrow: "Visto de Imigrante",
    h1: "Visto EB-1 — Habilidade Extraordinária",
    lede:
      "EB-1A (habilidade extraordinária, sem oferta de emprego, sem PERM, auto-petição), EB-1B (pesquisador/professor outstanding) e EB-1C (executivo multinacional). Brasileiros sem backlog. Premium Processing disponível.",
    stats: [
      { value: "CURRENT", label: "Brasil 2026" },
      { value: "Sem PERM", label: "Direta" },
      { value: "3 de 10", label: "Critérios EB-1A" },
      { value: "45d", label: "Premium" },
    ],
    meta: {
      title: "Visto EB-1 para Brasileiros — EB-1A, EB-1B, EB-1C | Pinho Law",
      description:
        "Green card EB-1 para brasileiros: habilidade extraordinária (EB-1A), pesquisador outstanding (EB-1B), executivo multinacional (EB-1C). Sem PERM, sem backlog.",
    },
    sections: [
      {
        kind: "table",
        value: {
          heading: "As três subcategorias EB-1",
          headers: ["Categoria", "Para quem", "Oferta de emprego"],
          rows: [
            ["EB-1A — Habilidade Extraordinária", "Cientistas, artistas, atletas, executivos com reconhecimento excepcional", "Não exigida (auto-petição)"],
            ["EB-1B — Outstanding Professor/Researcher", "Pesquisador ou professor com 3+ anos + reconhecimento internacional", "Sim, por instituição acadêmica"],
            ["EB-1C — Executivo Multinacional", "Executivo/gerente com 1+ ano na empresa estrangeira, vinculada à americana", "Sim, pela empresa patrocinadora"],
          ],
          note: "Brasileiros: todos três CURRENT em 2026. EB-1C não exige PERM — rota direta após L-1A.",
          noteStyle: "gold",
        },
      },
      {
        kind: "list",
        value: {
          heading: "EB-1A: 10 critérios (atender 3)",
          intro: "USCIS avalia se você atende pelo menos 3 dos 10 critérios:",
          style: "check",
          items: [
            "Prêmios reconhecidos nacional ou internacionalmente",
            "Membership em associações que exigem excelência",
            "Publicações sobre você em mídia especializada ou de massa",
            "Papel como juiz do trabalho de outros no seu campo",
            "Contribuições originais científicas/acadêmicas/de negócios de importância significativa",
            "Artigos acadêmicos publicados em revistas de prestígio",
            "Exposição do seu trabalho em eventos/shows artísticos",
            "Papel crítico ou líder em organizações de distinção",
            "Salário alto comparado a outros no seu campo",
            "Sucesso comercial nas artes performáticas",
          ],
        },
      },
      {
        kind: "prose",
        heading: "EB-1C — a rota direta do L-1A",
        body:
          "Para executivos brasileiros detentores de L-1A, o EB-1C é a rota mais eficiente para green card: mesmo empregador, sem PERM, aprovação 6–12 meses com Premium Processing. Brasileiros têm fila CURRENT — total 18–36 meses do L-1A inicial ao green card permanente.",
      },
      {
        kind: "table",
        value: {
          heading: "Custo",
          headers: ["Item", "Valor"],
          rows: [
            ["Taxa USCIS I-140", "US$ 715"],
            ["Asylum Program Fee", "US$ 600"],
            ["Premium Processing", "US$ 2.965"],
            ["Taxa USCIS I-485", "US$ 1.440/pessoa"],
            ["Honorários Pinho Law EB-1A", "US$ 10.000–15.000"],
            ["Honorários Pinho Law EB-1C", "US$ 8.500–13.500"],
          ],
        },
      },
    ],
    faqTitle: "Perguntas frequentes",
    faq: [
      { q: "Preciso de Prêmio Nobel para EB-1A?", a: "Não. EB-1A tem dois caminhos: (1) um único prêmio internacional importantíssimo (\"Nobel-equivalent\"), OU (2) três dos 10 critérios. A grande maioria usa a rota dos 10 critérios." },
      { q: "Qual a diferença entre EB-1A e EB-2 NIW?", a: "EB-1A exige \"habilidade extraordinária\" (~top da área). EB-2 NIW exige profissional com mestrado ou superior e atuação de interesse nacional. EB-1A é mais rigoroso, mas EB-1 fila pode ser mais rápida." },
      { q: "Posso auto-petitionar EB-1A?", a: "Sim. EB-1A é uma das duas categorias que permitem auto-petição (a outra é EB-2 NIW)." },
      { q: "EB-1C exige PERM?", a: "Não. Esta é a vantagem do EB-1C sobre EB-2/EB-3 para executivos — economiza 12–18 meses e evita vínculo com o empregador." },
      { q: "Quanto tempo leva EB-1 para brasileiros?", a: "Com Premium Processing: 45 dias úteis para I-140. Total até green card: 10–16 meses via AOS, 12–18 meses via consular." },
      { q: "Posso usar L-1A como ponte para EB-1C?", a: "Sim, e é a rota mais comum. Entra com L-1A, estabelece operação americana 6–12 meses, protocola EB-1C com o mesmo empregador." },
    ],
    relatedTitle: "Relacionado",
    related: [
      { label: "EB-2 NIW (critérios mais flexíveis)", href: "/immigration/immigrant-visas/eb-2-niw" },
      { label: "L-1A (rota para EB-1C)", href: "/immigration/non-immigrant-visas/l-1" },
      { label: "O-1 (similar critério, não-imigrante)", href: "/immigration/non-immigrant-visas/o-1" },
    ],
  },
  en: {
    locale: "en",
    slug: SLUG,
    immigrationBreadcrumb: "Immigration",
    breadcrumbLabel: "EB-1",
    eyebrow: "Immigrant Visa",
    h1: "EB-1 — Extraordinary Ability / Outstanding / Executive",
    lede:
      "EB-1A (extraordinary ability, no job offer, no PERM, self-petition), EB-1B (outstanding researcher/professor), and EB-1C (multinational executive). Brazilians have no backlog. Premium Processing available.",
    stats: [
      { value: "CURRENT", label: "Brazil 2026" },
      { value: "No PERM", label: "Direct" },
      { value: "3 of 10", label: "EB-1A criteria" },
      { value: "45d", label: "Premium Processing" },
    ],
    meta: {
      title: "EB-1 Visa for Brazilians — EB-1A, EB-1B, EB-1C | Pinho Law",
      description:
        "EB-1 green card for Brazilians: extraordinary ability (EB-1A), outstanding researcher (EB-1B), multinational executive (EB-1C). No PERM, no backlog.",
    },
    sections: [
      {
        kind: "table",
        value: {
          heading: "The three EB-1 subcategories",
          headers: ["Category", "For whom", "Job offer"],
          rows: [
            ["EB-1A — Extraordinary Ability", "Scientists, artists, athletes, executives with exceptional recognition", "Not required (self-petition)"],
            ["EB-1B — Outstanding Researcher/Professor", "3+ years + international recognition", "Yes, by academic institution"],
            ["EB-1C — Multinational Executive", "Exec/manager 1+ year at foreign entity tied to US entity", "Yes, by sponsoring company"],
          ],
          note: "Brazilians: all three CURRENT in 2026. EB-1C doesn't require PERM — direct route after L-1A.",
          noteStyle: "gold",
        },
      },
      {
        kind: "list",
        value: {
          heading: "EB-1A: 10 criteria (meet 3)",
          intro: "USCIS evaluates whether you meet at least 3 of the 10 criteria:",
          style: "check",
          items: [
            "Nationally or internationally recognized awards",
            "Membership in associations requiring outstanding achievement",
            "Published material about you in specialized or mainstream media",
            "Judging the work of others in your field",
            "Original scientific/academic/business contributions of major significance",
            "Scholarly articles in prestigious journals",
            "Display of your work at artistic exhibitions or showcases",
            "Leading or critical role in distinguished organizations",
            "High salary compared to others in your field",
            "Commercial success in the performing arts",
          ],
        },
      },
      {
        kind: "prose",
        heading: "EB-1C — the direct L-1A route",
        body:
          "For Brazilian L-1A executives, EB-1C is the most efficient green-card route: same employer, no PERM, 6–12 months with Premium Processing. Brazilians have CURRENT queue — total 18–36 months from initial L-1A to permanent green card.",
      },
      {
        kind: "table",
        value: {
          heading: "Cost",
          headers: ["Item", "Amount"],
          rows: [
            ["USCIS I-140 fee", "$715"],
            ["Asylum Program Fee", "$600"],
            ["Premium Processing", "$2,965"],
            ["USCIS I-485 fee", "$1,440/person"],
            ["Pinho Law EB-1A fees", "$10,000–15,000"],
            ["Pinho Law EB-1C fees", "$8,500–13,500"],
          ],
        },
      },
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      { q: "Do I need a Nobel Prize for EB-1A?", a: 'No. EB-1A has two paths: (1) a single internationally acclaimed award ("Nobel-equivalent"), OR (2) three of the 10 criteria. The vast majority use the 10-criteria route.' },
      { q: "What's the difference between EB-1A and EB-2 NIW?", a: 'EB-1A requires "extraordinary ability" (top of field). EB-2 NIW requires advanced-degree professional with national-interest work. EB-1A is stricter, but EB-1 queue can be faster.' },
      { q: "Can I self-petition for EB-1A?", a: "Yes. EB-1A is one of two categories that allow self-petition (the other is EB-2 NIW)." },
      { q: "Does EB-1C require PERM?", a: "No. This is EB-1C's advantage over EB-2/EB-3 for executives — saves 12–18 months and avoids employer tie-in." },
      { q: "How long does EB-1 take for Brazilians?", a: "With Premium Processing: 45 business days for I-140. Total to green card: 10–16 months via AOS, 12–18 months via consular." },
      { q: "Can I use L-1A as a bridge to EB-1C?", a: "Yes, and it's the most common route. Enter on L-1A, establish US operation 6–12 months, file EB-1C with the same employer." },
    ],
    relatedTitle: "Related",
    related: [
      { label: "EB-2 NIW (more flexible criteria)", href: "/immigration/immigrant-visas/eb-2-niw" },
      { label: "L-1A (path to EB-1C)", href: "/immigration/non-immigrant-visas/l-1" },
      { label: "O-1 (similar criterion, non-immigrant)", href: "/immigration/non-immigrant-visas/o-1" },
    ],
  },
  es: {
    locale: "es",
    slug: SLUG,
    immigrationBreadcrumb: "Inmigración",
    breadcrumbLabel: "EB-1",
    eyebrow: "Visa de Inmigrante",
    h1: "Visa EB-1 — Habilidad Extraordinaria",
    lede:
      "EB-1A (habilidad extraordinaria, sin PERM, auto-petición), EB-1B (investigador outstanding) y EB-1C (ejecutivo multinacional). Brasileños sin backlog.",
    stats: [
      { value: "CURRENT", label: "Brasil 2026" },
      { value: "Sin PERM", label: "Directa" },
      { value: "3 de 10", label: "Criterios EB-1A" },
      { value: "45d", label: "Premium" },
    ],
    meta: {
      title: "Visa EB-1 para Brasileños — EB-1A, EB-1B, EB-1C | Pinho Law",
      description:
        "Green card EB-1 para brasileños: habilidad extraordinaria, investigador outstanding, ejecutivo multinacional. Sin PERM, sin backlog.",
    },
    sections: [
      {
        kind: "table",
        value: {
          heading: "Las tres subcategorías EB-1",
          headers: ["Categoría", "Para quién", "Oferta de empleo"],
          rows: [
            ["EB-1A — Habilidad Extraordinaria", "Científicos, artistas, atletas, ejecutivos con reconocimiento excepcional", "No requerida (auto-petición)"],
            ["EB-1B — Outstanding Researcher/Professor", "3+ años + reconocimiento internacional", "Sí, por institución académica"],
            ["EB-1C — Ejecutivo Multinacional", "Ejecutivo/gerente 1+ año en entidad extranjera vinculada a EE.UU.", "Sí, por empresa patrocinadora"],
          ],
          note: "Brasileños: los tres CURRENT en 2026. EB-1C no requiere PERM.",
          noteStyle: "gold",
        },
      },
      {
        kind: "prose",
        heading: "EB-1A: 10 criterios (cumplir 3)",
        body:
          "USCIS evalúa si cumples al menos 3 de 10: premios reconocidos, membresías de excelencia, publicaciones sobre ti, juez del trabajo de otros, contribuciones originales, artículos académicos, exposición en eventos, rol crítico en organizaciones, salario alto, éxito comercial en artes.",
      },
      {
        kind: "prose",
        heading: "EB-1C — la ruta directa del L-1A",
        body:
          "Para ejecutivos brasileños con L-1A, EB-1C es la ruta más eficiente al green card: mismo empleador, sin PERM, 6–12 meses con Premium.",
      },
    ],
    faqTitle: "Preguntas frecuentes",
    faq: [
      { q: "¿Necesito un Premio Nobel para EB-1A?", a: "No. EB-1A tiene dos caminos: un premio internacional aclamado, o tres de los 10 criterios." },
      { q: "¿Diferencia entre EB-1A y EB-2 NIW?", a: "EB-1A exige habilidad extraordinaria (top del campo). EB-2 NIW exige profesional de maestría + interés nacional." },
      { q: "¿Puedo auto-peticionar EB-1A?", a: "Sí." },
      { q: "¿EB-1C requiere PERM?", a: "No. Ventaja sobre EB-2/EB-3 para ejecutivos." },
      { q: "¿Cuánto tarda EB-1 para brasileños?", a: "Con Premium: 45 días hábiles para I-140. Total: 10–16 meses via AOS." },
    ],
    relatedTitle: "Relacionado",
    related: [
      { label: "EB-2 NIW (criterios más flexibles)", href: "/immigration/immigrant-visas/eb-2-niw" },
      { label: "L-1A (ruta a EB-1C)", href: "/immigration/non-immigrant-visas/l-1" },
      { label: "O-1", href: "/immigration/non-immigrant-visas/o-1" },
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
