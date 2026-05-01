import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import {
  ServicePageTemplate,
  type ServicePageContent,
  type L,
} from "@/components/service/ServicePageTemplate";
import type { Locale } from "@/i18n/routing";

const SLUG = "immigration/immigrant-visas/eb-2-niw/vs-eb-1a";

// Comparison page: EB-2 NIW vs EB-1A. High-intent search term —
// candidates frequently shopping between the two rotas. Captures
// "EB-1A vs EB-2 NIW", "qual visto escolher pesquisador", "national
// interest waiver vs extraordinary ability".

const DATA: Record<L, ServicePageContent> = {
  pt: {
    locale: "pt",
    slug: SLUG,
    immigrationBreadcrumb: "Imigração",
    breadcrumbLabel: "EB-2 NIW vs EB-1A",
    eyebrow: "Comparação · EB-1A vs EB-2 NIW",
    h1: "EB-2 NIW vs EB-1A — Qual Escolher em 2026",
    lede:
      "Os dois únicos vistos americanos de auto-petição (sem patrocinador, sem PERM). Mesma família EB, prazos parecidos, brasileiros CURRENT em ambos. A diferença está na exigência probatória — e em uma decisão estratégica que vale 1-2 anos de tempo total se errada.",
    stats: [
      { value: "Auto-petição", label: "Os dois" },
      { value: "CURRENT", label: "Brasil 2026 (ambos)" },
      { value: "EB-1A: 30%", label: "Aprovação geral" },
      { value: "EB-2 NIW: 67%", label: "Aprovação geral" },
    ],
    meta: {
      title:
        "EB-2 NIW vs EB-1A 2026 — Qual Escolher para Brasileiros | Pinho Law",
      description:
        "Comparação detalhada EB-1A vs EB-2 NIW: critérios de elegibilidade, taxa de aprovação, prazo, custo. Quando escolher cada um. Análise por perfil profissional brasileiro.",
    },
    sections: [
      {
        kind: "prose",
        heading: "Por que esta comparação importa",
        body: "EB-2 NIW e EB-1A são as duas únicas categorias de green card que permitem auto-petição (sem oferta de emprego, sem PERM, sem patrocinador). Para brasileiros qualificados em 2026 — com Brasil CURRENT em ambas — a escolha correta acelera o processo em 6-18 meses. A errada gasta 12-24 meses em uma rota que provavelmente vai negar (EB-1A com perfil insuficiente) ou aprova um caminho mais longo (EB-2 NIW quando EB-1A teria caído primeiro).",
      },
      {
        kind: "table",
        value: {
          heading: "Comparação direta",
          headers: ["Critério", "EB-1A — Habilidade Extraordinária", "EB-2 NIW"],
          rows: [
            [
              "Padrão probatório",
              "Aclamação sustentada nacional ou internacional. Topo absoluto do campo.",
              "Mestrado ou bacharelado + 5 anos. Habilidade excepcional aceita.",
            ],
            [
              "Critérios estatutários",
              "Atender 3 dos 10 critérios regulamentares (8 CFR §204.5(h)(3))",
              "Atender 3 prongs Dhanasar (Matter of Dhanasar, 2016)",
            ],
            [
              "Taxa de aprovação geral (FY2024)",
              "~30%",
              "~67%",
            ],
            [
              "Taxa com advogado experiente",
              "55–70%",
              "75–85%",
            ],
            [
              "Prazo I-140 regular",
              "8–14 meses",
              "14–19 meses",
            ],
            [
              "Premium Processing",
              "Sim — 45 dias úteis (US$ 2.965)",
              "Sim — 45 dias úteis (US$ 2.965)",
            ],
            [
              "Brasil — fila Visa Bulletin (Apr 2026)",
              "CURRENT",
              "CURRENT",
            ],
            [
              "Vantagem na fila se categoria retroceder",
              "1ª prioridade EB-1 (acima de EB-2)",
              "2ª prioridade",
            ],
            [
              "Premium Processing reduz risco de RFE?",
              "Não — só reduz tempo",
              "Não — só reduz tempo",
            ],
            [
              "I-485 concorrente disponível para brasileiros?",
              "Sim (Brasil CURRENT)",
              "Sim (Brasil CURRENT)",
            ],
          ],
          note:
            "Diferença de aprovação geral (30% vs 67%) reflete o padrão probatório, não exclusivamente perfil dos candidatos. EB-1A é a categoria mais exigente — adjudicators rotineiramente aplicam 'Kazarian two-step analysis' (cumprir critérios não é suficiente; é preciso demonstrar também aclamação sustentada).",
          noteStyle: "gold",
        },
      },
      {
        kind: "list",
        value: {
          heading: "Quando EB-1A é a escolha certa",
          intro:
            "Perfis típicos que aprovam consistentemente em EB-1A:",
          style: "check",
          items: [
            "Pesquisadores com 1.000+ citações no Google Scholar (ou área-específica equivalente — h-index ≥ 15-20 dependendo do campo)",
            "Cientistas com prêmios internacionais reconhecidos no campo (não apenas prêmios institucionais)",
            "Founders de empresas com tração comprovada (Series B+, métricas de impacto, cobertura de imprensa nacional)",
            "Atletas profissionais ou treinadores em times/seleções de alto nível",
            "Artistas com exposições em museus tier-1, prêmios internacionais, ou crítica em mídia tier-1",
            "Médicos com publicações em NEJM/JAMA/Lancet, posições de chefia em sociedades médicas internacionais",
            "Engenheiros líderes (CTO, VP Engineering, Distinguished Engineer) com patentes adotadas amplamente, palestras em conferências top-tier, mídia tech tier-1",
            "Empreendedores premiados (Forbes 30 Under 30, Endeavor, equivalentes), com saídas/exits notáveis",
          ],
        },
      },
      {
        kind: "list",
        value: {
          heading: "Quando EB-2 NIW é a escolha certa",
          intro:
            "EB-2 NIW é o caminho ideal quando:",
          style: "check",
          items: [
            "Você tem mestrado ou bacharelado + 5 anos, mas o histórico de impacto não atende o padrão 'aclamação sustentada' do EB-1A",
            "Sua atuação proposta tem importância nacional clara (saúde pública, IA, cyber, semicondutores, infraestrutura crítica, energia)",
            "Você consegue construir argumento Dhanasar prong 3 sólido (porque dispensar o PERM beneficia os EUA)",
            "Você é tech profissional sem h-index alto mas com produto/biblioteca de larga adoção",
            "Você é empreendedor sem 'exit' notável mas com plano de negócio que serve interesse nacional",
            "Você é médico com plano de servir área desatendida (Physician NIW estatutário)",
            "Você prefere taxa de aprovação maior (75-85%) sobre prazo mais curto (EB-1A é ~5 meses mais rápido)",
            "Você tem perfil 'forte mas não top do campo' — EB-2 NIW é construído justamente para esse intervalo",
          ],
        },
      },
      {
        kind: "list",
        value: {
          heading: "Estratégia híbrida: protocolar os dois em paralelo",
          intro:
            "Para perfis que estão na fronteira (talvez EB-1A, certamente EB-2 NIW), recomendamos com frequência protocolar os dois:",
          style: "check",
          items: [
            "Custos USCIS adicionais: ~US$ 4.500 (segunda I-140 + Premium para a primeira)",
            "Honorários adicionais Pinho Law: 50-70% do segundo caso (reaproveitamos pesquisa, cartas, evidência)",
            "Você usa a primeira que aprovar — segunda é cancelada se a primeira aprovar primeiro",
            "Reduz risco de denial atrasar todo o processo em 12-18 meses",
            "Especialmente recomendado se houver expectativa de regulamentação restritiva nas categorias EB",
          ],
        },
      },
      {
        kind: "callout",
        value: {
          badgeLabel: "Decisão prática",
          tone: "gold",
          heading: "Como decidir em 30 minutos na consulta",
          body: "Em consulta com a Dra. Izi, fazemos triagem em 4 perguntas: (1) Qual seu h-index ou métrica de impacto verificável? (2) Você tem prêmios internacionais ou apenas nacionais/institucionais? (3) Sua atuação proposta tem alinhamento direto com prioridade federal documentada (IA, healthcare, cyber)? (4) Qual urgência — preciso aprovar em 6, 12, ou 18 meses? As respostas decidem entre EB-1A solo, EB-2 NIW solo, ou híbrido. Sem 'avaliação especulativa' — análise baseada em jurisprudência recente da AAO.",
          recLabel: "Próximo passo",
          rec: "Agende uma consulta com seu CV técnico em PDF e portfólio em mão (papers, patentes, métricas, cartas potenciais). 60 minutos é suficiente para definir estratégia.",
          liveLink: { label: "Agendar consulta de avaliação", href: "/consultation" },
        },
      },
    ],
    faqTitle: "Perguntas frequentes — EB-2 NIW vs EB-1A",
    faq: [
      {
        q: "Posso aplicar para EB-1A primeiro e EB-2 NIW depois se for negado?",
        a: "Tecnicamente sim, mas perde-se 8-14 meses. EB-1A negado também levanta bandeira em adjudicação subsequente do EB-2 NIW (memoradum de denial fica no arquivo USCIS do beneficiário). Se há dúvida real sobre EB-1A, melhor estratégia é protocolar os dois em paralelo desde o início.",
      },
      {
        q: "EB-1A é mais valioso que EB-2 NIW depois de aprovado?",
        a: "Não. Após aprovação, ambos resultam no mesmo tipo de green card (residência permanente). A diferença é apenas a categoria de fila no Visa Bulletin — relevante somente se a categoria sofrer retrocesso futuro (improvável para Brasil em 2026, mas possível em mudança regulatória). EB-1 tem prioridade sobre EB-2 nesse cenário.",
      },
      {
        q: "Preciso de doutorado para EB-1A?",
        a: "Não. Doutorado ajuda mas não é exigido. EB-1A avalia 'aclamação sustentada' — você pode comprovar sem PhD via prêmios, mídia, contribuições originais de impacto significativo, alto salário, etc. Empresários, atletas, artistas e tech founders aprovam EB-1A sem PhD com regularidade.",
      },
      {
        q: "Trump Gold Card substitui EB-1A ou EB-2 NIW?",
        a: "Não em abril de 2026. O Trump Gold Card (proposto US$ 1M individual / US$ 2M corporativo) ainda não tem regulamentação final. Mesmo após implementado, será categoria distinta, com critério econômico (não meritocrático). EB-1A e EB-2 NIW continuam vigentes e são os caminhos mais previsíveis para profissionais brasileiros.",
      },
      {
        q: "Qual a estatística real de aprovação EB-1A para brasileiros?",
        a: "USCIS não publica taxa por nacionalidade. Estimativas de profissionais imigratórios: para brasileiros bem documentados com counsel, taxa similar à média de FMG (estrangeiros) — cerca de 55-70%. Para auto-petições brasileiras sem advogado: ~25-40%. EB-2 NIW para brasileiros: 75-85% com counsel, 40-65% sem.",
      },
      {
        q: "Vale a pena pagar Premium Processing para EB-1A?",
        a: "Sim, se o caso é forte e tempo importa. US$ 2.965 garante decisão (aprovação ou RFE/denial) em 45 dias úteis vs 8-14 meses regular. Premium NÃO aumenta chance de aprovação — só reduz tempo. Para casos no limite, alguns advogados recomendam regular para ter mais tempo de revisão antes de USCIS adjudicar.",
      },
    ],
    relatedTitle: "Veja também",
    related: [
      { label: "EB-2 NIW — Visão geral completa", href: "/immigration/immigrant-visas/eb-2-niw" },
      { label: "EB-1 (EB-1A, EB-1B, EB-1C) — Habilidade Extraordinária", href: "/immigration/immigrant-visas/eb-1" },
      { label: "EB-2 NIW para profissionais de Tech", href: "/immigration/immigrant-visas/eb-2-niw/for-tech-professionals" },
      { label: "EB-2 NIW para Médicos e Healthcare", href: "/immigration/immigrant-visas/eb-2-niw/for-doctors" },
      { label: "EB-2 com PERM (alternativa com empregador)", href: "/immigration/immigrant-visas/eb-2" },
    ],
  },
  en: {
    locale: "en",
    slug: SLUG,
    immigrationBreadcrumb: "Immigration",
    breadcrumbLabel: "EB-2 NIW vs EB-1A",
    eyebrow: "Comparison · EB-1A vs EB-2 NIW",
    h1: "EB-2 NIW vs EB-1A — Which to Pick in 2026",
    lede:
      "The only two US visas allowing self-petition (no sponsor, no PERM). Same EB family, similar timelines, Brazilians CURRENT in both. The difference is the evidentiary standard — and a strategic decision worth 1–2 years of total time if you get it wrong.",
    stats: [
      { value: "Self-petition", label: "Both" },
      { value: "CURRENT", label: "Brazil 2026 (both)" },
      { value: "EB-1A: 30%", label: "General approval rate" },
      { value: "EB-2 NIW: 67%", label: "General approval rate" },
    ],
    meta: {
      title: "EB-2 NIW vs EB-1A 2026 — Which to Choose for Brazilians | Pinho Law",
      description:
        "Detailed EB-1A vs EB-2 NIW comparison: eligibility, approval rate, timeline, cost. When to choose each. Analysis by Brazilian professional profile.",
    },
    sections: [
      {
        kind: "prose",
        heading: "Why this comparison matters",
        body: "EB-2 NIW and EB-1A are the only two green card categories allowing self-petition (no job offer, no PERM, no sponsor). For qualified Brazilians in 2026 — with Brazil CURRENT in both — the right choice accelerates the process by 6–18 months. The wrong one wastes 12–24 months on a path that will likely deny (EB-1A with insufficient profile) or approves a longer route (EB-2 NIW when EB-1A would have approved first).",
      },
      {
        kind: "table",
        value: {
          heading: "Direct comparison",
          headers: ["Criterion", "EB-1A — Extraordinary Ability", "EB-2 NIW"],
          rows: [
            ["Evidentiary standard", "Sustained national or international acclaim. Top of the field.", "Master's or bachelor's + 5 yrs. Exceptional ability accepted."],
            ["Statutory criteria", "Meet 3 of 10 regulatory criteria (8 CFR §204.5(h)(3))", "Meet 3 Dhanasar prongs (Matter of Dhanasar, 2016)"],
            ["General approval rate (FY2024)", "~30%", "~67%"],
            ["Rate w/ experienced counsel", "55–70%", "75–85%"],
            ["Regular I-140 timeline", "8–14 months", "14–19 months"],
            ["Premium Processing", "Yes — 45 business days ($2,965)", "Yes — 45 business days ($2,965)"],
            ["Brazil — Visa Bulletin (Apr 2026)", "CURRENT", "CURRENT"],
            ["Queue advantage if category retrogresses", "EB-1 first priority (above EB-2)", "Second priority"],
            ["Does Premium reduce RFE risk?", "No — only reduces time", "No — only reduces time"],
            ["Concurrent I-485 available for Brazilians?", "Yes (Brazil CURRENT)", "Yes (Brazil CURRENT)"],
          ],
          note:
            "The general approval gap (30% vs 67%) reflects evidentiary standard, not just candidate profile. EB-1A is the most demanding category — adjudicators routinely apply the 'Kazarian two-step analysis' (meeting criteria isn't enough; you must also demonstrate sustained acclaim).",
          noteStyle: "gold",
        },
      },
      {
        kind: "list",
        value: {
          heading: "When EB-1A is the right choice",
          intro: "Profiles that consistently approve in EB-1A:",
          style: "check",
          items: [
            "Researchers with 1,000+ Google Scholar citations (or field-equivalent — h-index ≥ 15–20 depending on field)",
            "Scientists with internationally recognized field-specific awards (not just institutional)",
            "Founders with proven traction (Series B+, impact metrics, national press)",
            "Professional athletes or coaches at top-tier teams/national selections",
            "Artists with tier-1 museum exhibitions, international awards, tier-1 media criticism",
            "Physicians with NEJM/JAMA/Lancet publications, leadership roles in international medical societies",
            "Lead engineers (CTO, VP Eng, Distinguished Engineer) with widely-adopted patents, top-tier conference talks, tier-1 tech press",
            "Award-winning entrepreneurs (Forbes 30 Under 30, Endeavor, equivalents) with notable exits",
          ],
        },
      },
      {
        kind: "list",
        value: {
          heading: "When EB-2 NIW is the right choice",
          intro: "EB-2 NIW is the ideal path when:",
          style: "check",
          items: [
            "You have a master's or bachelor's + 5 yrs, but track record doesn't meet EB-1A 'sustained acclaim' standard",
            "Your proposed endeavor has clear national importance (public health, AI, cyber, semis, critical infrastructure, energy)",
            "You can build a solid Dhanasar prong-3 argument (waiving PERM benefits the US)",
            "You're a tech professional without high h-index but with a widely-adopted product/library",
            "You're an entrepreneur without notable 'exit' but with a national-interest business plan",
            "You're a physician planning to serve an underserved area (statutory Physician NIW)",
            "You prefer higher approval rate (75–85%) over shorter timeline (EB-1A is ~5 months faster)",
            "You have a 'strong but not top of field' profile — EB-2 NIW was built precisely for that range",
          ],
        },
      },
      {
        kind: "list",
        value: {
          heading: "Hybrid strategy: file both in parallel",
          intro: "For borderline profiles (maybe EB-1A, certainly EB-2 NIW), we frequently recommend filing both:",
          style: "check",
          items: [
            "Additional USCIS costs: ~$4,500 (second I-140 + Premium for first)",
            "Additional Pinho Law fees: 50-70% of the second case (we reuse research, letters, evidence)",
            "You use whichever approves first — second is canceled if first approves first",
            "Reduces risk of denial delaying the entire process by 12–18 months",
            "Especially recommended if restrictive regulation is expected for EB categories",
          ],
        },
      },
      {
        kind: "callout",
        value: {
          badgeLabel: "Practical decision",
          tone: "gold",
          heading: "How to decide in 30 minutes at the consultation",
          body: "In a consultation with Dra. Izi, we triage with 4 questions: (1) What's your h-index or verifiable impact metric? (2) Do you have international awards or only national/institutional? (3) Does your proposed endeavor align directly with a documented federal priority (AI, healthcare, cyber)? (4) Urgency — do I need approval in 6, 12, or 18 months? Answers decide between solo EB-1A, solo EB-2 NIW, or hybrid. No 'speculative assessment' — analysis based on recent AAO case law.",
          recLabel: "Next step",
          rec: "Schedule a consultation with your technical CV in PDF and portfolio in hand (papers, patents, metrics, potential letters). 60 minutes is enough to define strategy.",
          liveLink: { label: "Book evaluation consultation", href: "/consultation" },
        },
      },
    ],
    faqTitle: "Frequently Asked Questions — EB-2 NIW vs EB-1A",
    faq: [
      {
        q: "Can I file EB-1A first and EB-2 NIW later if denied?",
        a: "Technically yes, but you lose 8–14 months. An EB-1A denial also raises a flag in subsequent EB-2 NIW adjudication (denial memo stays in the beneficiary's USCIS file). If there's real EB-1A doubt, the better strategy is to file both in parallel from the start.",
      },
      {
        q: "Is EB-1A more valuable than EB-2 NIW after approval?",
        a: "No. After approval, both result in the same green card type (permanent residence). The only difference is Visa Bulletin queue category — only relevant if the category retrogresses in the future (unlikely for Brazil in 2026 but possible in regulatory shifts). EB-1 has priority over EB-2 in that scenario.",
      },
      {
        q: "Do I need a PhD for EB-1A?",
        a: "No. PhD helps but is not required. EB-1A evaluates 'sustained acclaim' — you can prove it without a PhD via awards, media, original contributions of significant impact, high salary, etc. Entrepreneurs, athletes, artists, and tech founders regularly approve EB-1A without a PhD.",
      },
      {
        q: "Does the Trump Gold Card replace EB-1A or EB-2 NIW?",
        a: "No, as of April 2026. The proposed Trump Gold Card ($1M individual / $2M corporate) does not have final regulations yet. Even after implementation, it will be a separate category, with economic (not meritocratic) criteria. EB-1A and EB-2 NIW remain in force and are the most predictable paths for Brazilian professionals.",
      },
      {
        q: "What's the actual EB-1A approval rate for Brazilians?",
        a: "USCIS doesn't publish nationality-specific rates. Practitioner estimates: for well-documented Brazilians with counsel, approval similar to FMG (foreign) average — roughly 55-70%. For Brazilian self-petitions without counsel: ~25-40%. EB-2 NIW for Brazilians: 75-85% with counsel, 40-65% without.",
      },
      {
        q: "Is Premium Processing worth it for EB-1A?",
        a: "Yes if the case is strong and time matters. $2,965 guarantees a decision (approval or RFE/denial) in 45 business days vs 8–14 months regular. Premium does NOT increase approval chances — it only reduces time. For borderline cases, some attorneys recommend regular processing for more review time before USCIS adjudicates.",
      },
    ],
    relatedTitle: "See also",
    related: [
      { label: "EB-2 NIW — Full overview", href: "/immigration/immigrant-visas/eb-2-niw" },
      { label: "EB-1 (EB-1A, EB-1B, EB-1C) — Extraordinary Ability", href: "/immigration/immigrant-visas/eb-1" },
      { label: "EB-2 NIW for tech professionals", href: "/immigration/immigrant-visas/eb-2-niw/for-tech-professionals" },
      { label: "EB-2 NIW for doctors and healthcare", href: "/immigration/immigrant-visas/eb-2-niw/for-doctors" },
      { label: "EB-2 with PERM (employer-sponsored alternative)", href: "/immigration/immigrant-visas/eb-2" },
    ],
  },
  es: {
    locale: "es",
    slug: SLUG,
    immigrationBreadcrumb: "Inmigración",
    breadcrumbLabel: "EB-2 NIW vs EB-1A",
    eyebrow: "Comparación · EB-1A vs EB-2 NIW",
    h1: "EB-2 NIW vs EB-1A — Cuál Elegir en 2026",
    lede:
      "Las dos únicas visas estadounidenses de auto-petición. Misma familia EB, plazos similares, brasileños CURRENT en ambas. La diferencia está en el estándar probatorio.",
    stats: [
      { value: "Auto-petición", label: "Ambas" },
      { value: "CURRENT", label: "Brasil 2026 (ambas)" },
      { value: "EB-1A: 30%", label: "Aprobación general" },
      { value: "EB-2 NIW: 67%", label: "Aprobación general" },
    ],
    meta: {
      title: "EB-2 NIW vs EB-1A 2026 — Cuál Elegir para Brasileños | Pinho Law",
      description: "Comparación detallada EB-1A vs EB-2 NIW: elegibilidad, aprobación, plazo, costo.",
    },
    sections: [
      {
        kind: "prose",
        heading: "Por qué importa esta comparación",
        body: "EB-2 NIW y EB-1A son las únicas categorías de green card que permiten auto-petición. Para brasileños calificados en 2026 — con Brasil CURRENT en ambas — la elección correcta acelera el proceso en 6-18 meses.",
      },
      {
        kind: "table",
        value: {
          heading: "Comparación directa",
          headers: ["Criterio", "EB-1A", "EB-2 NIW"],
          rows: [
            ["Estándar", "Aclamación sostenida nacional o internacional", "Maestría o licenciatura + 5 años"],
            ["Tasa de aprobación", "~30%", "~67%"],
            ["Con counsel", "55–70%", "75–85%"],
            ["Plazo I-140", "8–14 meses", "14–19 meses"],
            ["Brasil queue", "CURRENT", "CURRENT"],
          ],
          noteStyle: "gold",
        },
      },
    ],
    faqTitle: "Preguntas Frecuentes — EB-2 NIW vs EB-1A",
    faq: [
      {
        q: "¿Puedo aplicar primero a EB-1A y luego EB-2 NIW si me niegan?",
        a: "Técnicamente sí, pero pierde 8-14 meses. Una negación EB-1A también levanta bandera en adjudicación EB-2 NIW posterior. Si hay duda real sobre EB-1A, mejor presentar ambas en paralelo desde el inicio.",
      },
      {
        q: "¿EB-1A es más valioso que EB-2 NIW después de aprobado?",
        a: "No. Ambos resultan en el mismo green card. La única diferencia es la prioridad de cola en el Visa Bulletin si hay retroceso futuro.",
      },
    ],
    relatedTitle: "Ver también",
    related: [
      { label: "EB-2 NIW — Visión general", href: "/immigration/immigrant-visas/eb-2-niw" },
      { label: "EB-1 — Habilidad Extraordinaria", href: "/immigration/immigrant-visas/eb-1" },
      { label: "EB-2 con PERM", href: "/immigration/immigrant-visas/eb-2" },
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
