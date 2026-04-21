import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import {
  ServicePageTemplate,
  type ServicePageContent,
  type L,
} from "@/components/service/ServicePageTemplate";
import type { Locale } from "@/i18n/routing";

const SLUG = "immigration/non-immigrant-visas/o-1";

const DATA: Record<L, ServicePageContent> = {
  pt: {
    locale: "pt",
    slug: SLUG,
    immigrationBreadcrumb: "Imigração",
    breadcrumbLabel: "O-1",
    eyebrow: "Visto Não-Imigrante",
    h1: "Visto O-1 — Habilidade Extraordinária",
    lede:
      "Sem limite anual, sem loteria. Pode auto-petitionar com agente. Renovável indefinidamente. Rota ideal para artistas, atletas, cientistas, empreendedores e executivos brasileiros com reconhecimento documentado.",
    stats: [
      { value: "Sem cap", label: "Anual" },
      { value: "Sem loteria", label: "100% mérito" },
      { value: "3 anos", label: "Inicial + 1-ano ext." },
      { value: "3 de 8", label: "Critérios O-1A/O-1B" },
    ],
    meta: {
      title: "Visto O-1 para Brasileiros — Artistas, Atletas, Empreendedores | Pinho Law",
      description:
        "O-1A e O-1B para brasileiros com reconhecimento excepcional: sem cap, sem loteria, renovável. Rota para EB-1A após estabelecer trajetória nos EUA.",
    },
    sections: [
      {
        kind: "table",
        value: {
          heading: "O-1A vs O-1B",
          headers: ["Categoria", "Para quem"],
          rows: [
            ["O-1A", "Ciências, educação, negócios, atletismo"],
            ["O-1B", "Artes, cinema, TV"],
          ],
          note: "Critério: habilidade extraordinária (topo da área) demonstrada por 3 de 8 critérios, ou prêmio único aclamado internacionalmente (Oscar, Grammy, Pulitzer, etc.).",
        },
      },
      {
        kind: "list",
        value: {
          heading: "8 critérios O-1A (atender 3)",
          style: "check",
          items: [
            "Prêmios reconhecidos por excelência",
            "Membership em associações que exigem mérito extraordinário",
            "Publicações sobre você em mídia profissional ou de massa",
            "Papel como juiz do trabalho de outros",
            "Contribuições originais de importância significativa",
            "Artigos acadêmicos publicados",
            "Papel crítico em organizações de distinção",
            "Salário alto comparado a outros no seu campo",
          ],
        },
      },
      {
        kind: "prose",
        heading: "Rota O-1 → EB-1A",
        body:
          "Muitos detentores de O-1 protocolam EB-1A após 1–3 anos estabelecidos nos EUA. Os critérios são similares, mas EB-1A exige evidência mais robusta. O tempo nos EUA com O-1 permite construir imprensa americana, papel crítico em organizações locais, recomendações de líderes do setor — exatamente o que o EB-1A requer.",
      },
      {
        kind: "table",
        value: {
          heading: "Custo",
          headers: ["Item", "Valor"],
          rows: [
            ["Taxa USCIS I-129 (O-1)", "varia"],
            ["Premium Processing", "US$ 2.965"],
            ["Taxa consular (se aplicável)", "US$ 190 DS-160"],
            ["Honorários Pinho Law", "US$ 6.500–9.500"],
          ],
        },
      },
    ],
    faqTitle: "Perguntas frequentes",
    faq: [
      { q: "O-1 tem loteria como H-1B?", a: "Não. O-1 não tem cap anual nem loteria. Aprovação é 100% baseada em mérito documentado." },
      { q: "Posso auto-petitionar O-1?", a: "Não diretamente — precisa de empregador ou agente. Mas um agente pode representar você (categoria comum para artistas, atletas freelance, empreendedores)." },
      { q: "Quanto tempo posso ficar nos EUA com O-1?", a: "3 anos inicial + extensões anuais enquanto o trabalho continuar. Sem limite máximo absoluto (diferente do L-1A que é 7 anos)." },
      { q: "Cônjuge pode trabalhar com O-3?", a: "Não. Cônjuge O-3 não tem autorização de trabalho automática. Precisa de visto próprio se quiser trabalhar." },
      { q: "O-1 leva a green card?", a: "Indiretamente. Via conversão para EB-1A (critérios similares), EB-2 NIW, ou casamento. Muitos detentores de O-1 já estão construindo o case para EB-1A desde o início." },
      { q: "Brasileiros em tecnologia podem tirar O-1?", a: "Sim, se tiverem histórico excepcional: patentes, contribuições open-source significativas, palestras em conferências internacionais, press coverage, salários altos." },
    ],
    relatedTitle: "Relacionado",
    related: [
      { label: "EB-1A (conversão para green card)", href: "/immigration/immigrant-visas/eb-1" },
      { label: "EB-2 NIW (alternativa com menor rigor)", href: "/immigration/immigrant-visas/eb-2-niw" },
      { label: "H-1B (patrocínio empregador)", href: "/immigration/non-immigrant-visas/h-1b" },
    ],
  },
  en: {
    locale: "en",
    slug: SLUG,
    immigrationBreadcrumb: "Immigration",
    breadcrumbLabel: "O-1",
    eyebrow: "Non-Immigrant Visa",
    h1: "O-1 — Extraordinary Ability Visa",
    lede:
      "No annual cap, no lottery. Can self-petition via agent. Renewable indefinitely. Ideal route for Brazilian artists, athletes, scientists, entrepreneurs, and executives with documented recognition.",
    stats: [
      { value: "No cap", label: "Annual" },
      { value: "No lottery", label: "100% merit" },
      { value: "3 yrs", label: "Initial + 1-yr ext." },
      { value: "3 of 8", label: "O-1A/O-1B criteria" },
    ],
    meta: {
      title: "O-1 Visa for Brazilians — Artists, Athletes, Entrepreneurs | Pinho Law",
      description:
        "O-1A and O-1B for Brazilians with exceptional recognition: no cap, no lottery, renewable. Route to EB-1A after establishing US track record.",
    },
    sections: [
      {
        kind: "table",
        value: {
          heading: "O-1A vs O-1B",
          headers: ["Category", "For whom"],
          rows: [
            ["O-1A", "Sciences, education, business, athletics"],
            ["O-1B", "Arts, film, TV"],
          ],
          note: "Criterion: extraordinary ability (top of field) demonstrated by 3 of 8 criteria, or a single internationally acclaimed award (Oscar, Grammy, Pulitzer, etc.).",
        },
      },
      {
        kind: "list",
        value: {
          heading: "8 O-1A criteria (meet 3)",
          style: "check",
          items: [
            "Nationally or internationally recognized awards",
            "Membership in associations requiring extraordinary achievement",
            "Published material about you in professional or mainstream media",
            "Judging the work of others",
            "Original contributions of major significance",
            "Scholarly articles published",
            "Leading or critical role in distinguished organizations",
            "High salary compared to others in your field",
          ],
        },
      },
      {
        kind: "prose",
        heading: "O-1 → EB-1A path",
        body:
          "Many O-1 holders file EB-1A after 1–3 years established in the US. Criteria are similar but EB-1A requires more robust evidence. Time in the US on O-1 lets you build American press, critical roles in local organizations, recommendations from industry leaders — exactly what EB-1A requires.",
      },
      {
        kind: "table",
        value: {
          heading: "Cost",
          headers: ["Item", "Amount"],
          rows: [
            ["USCIS I-129 (O-1) fee", "varies"],
            ["Premium Processing", "$2,965"],
            ["Consular fee (if applicable)", "$190 DS-160"],
            ["Pinho Law fees", "$6,500–9,500"],
          ],
        },
      },
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      { q: "Does O-1 have a lottery like H-1B?", a: "No. O-1 has no annual cap and no lottery. Approval is 100% based on documented merit." },
      { q: "Can I self-petition for O-1?", a: "Not directly — you need an employer or agent. But an agent can represent you (common for freelance artists, athletes, entrepreneurs)." },
      { q: "How long can I stay in the US on O-1?", a: "3 years initial + annual extensions while the work continues. No absolute max (unlike L-1A's 7-year ceiling)." },
      { q: "Can my spouse work on O-3?", a: "No. O-3 spouses don't get automatic work authorization. Need their own visa to work." },
      { q: "Does O-1 lead to a green card?", a: "Indirectly. Via conversion to EB-1A (similar criteria), EB-2 NIW, or marriage. Many O-1 holders build the EB-1A case from day one." },
      { q: "Can Brazilian tech professionals get O-1?", a: "Yes, with exceptional track record: patents, significant open-source contributions, international conference talks, press coverage, high salary." },
    ],
    relatedTitle: "Related",
    related: [
      { label: "EB-1A (green-card conversion)", href: "/immigration/immigrant-visas/eb-1" },
      { label: "EB-2 NIW (lower-threshold alternative)", href: "/immigration/immigrant-visas/eb-2-niw" },
      { label: "H-1B (employer sponsorship)", href: "/immigration/non-immigrant-visas/h-1b" },
    ],
  },
  es: {
    locale: "es",
    slug: SLUG,
    immigrationBreadcrumb: "Inmigración",
    breadcrumbLabel: "O-1",
    eyebrow: "Visa No Inmigrante",
    h1: "Visa O-1 — Habilidad Extraordinaria",
    lede:
      "Sin cupo anual, sin lotería. Renovable indefinidamente. Ideal para artistas, atletas, científicos, emprendedores brasileños con reconocimiento documentado.",
    stats: [
      { value: "Sin cupo", label: "Anual" },
      { value: "Sin lotería", label: "100% mérito" },
      { value: "3 años", label: "Inicial + 1-año ext." },
      { value: "3 de 8", label: "Criterios" },
    ],
    meta: {
      title: "Visa O-1 para Brasileños | Pinho Law",
      description:
        "O-1A y O-1B para brasileños con reconocimiento excepcional. Sin cupo, sin lotería, renovable.",
    },
    sections: [
      {
        kind: "table",
        value: {
          heading: "O-1A vs O-1B",
          headers: ["Categoría", "Para quién"],
          rows: [
            ["O-1A", "Ciencias, educación, negocios, atletismo"],
            ["O-1B", "Artes, cine, TV"],
          ],
        },
      },
      {
        kind: "prose",
        heading: "Ruta O-1 → EB-1A",
        body:
          "Muchos titulares de O-1 peticionan EB-1A tras 1–3 años establecidos en EE.UU.",
      },
    ],
    faqTitle: "Preguntas frecuentes",
    faq: [
      { q: "¿O-1 tiene lotería como H-1B?", a: "No. Sin cupo, sin lotería." },
      { q: "¿Puedo auto-peticionar?", a: "No directamente — necesitas empleador o agente." },
      { q: "¿Cuánto puedo quedarme con O-1?", a: "3 años inicial + extensiones anuales sin máximo absoluto." },
      { q: "¿O-1 lleva a green card?", a: "Indirectamente, vía EB-1A o EB-2 NIW." },
    ],
    relatedTitle: "Relacionado",
    related: [
      { label: "EB-1A", href: "/immigration/immigrant-visas/eb-1" },
      { label: "EB-2 NIW", href: "/immigration/immigrant-visas/eb-2-niw" },
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
