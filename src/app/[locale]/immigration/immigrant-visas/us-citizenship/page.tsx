import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import {
  ServicePageTemplate,
  type ServicePageContent,
  type L,
} from "@/components/service/ServicePageTemplate";
import type { Locale } from "@/i18n/routing";

const SLUG = "immigration/immigrant-visas/us-citizenship";

const DATA: Record<L, ServicePageContent> = {
  pt: {
    locale: "pt",
    slug: SLUG,
    immigrationBreadcrumb: "Imigração",
    breadcrumbLabel: "Cidadania Americana",
    eyebrow: "Visto de Imigrante",
    h1: "Naturalização Americana (N-400) para Brasileiros",
    lede:
      "5 anos de green card (3 se casado com cidadão americano), presença física, bons antecedentes, inglês básico e noções de civismo. Brasil permite dupla cidadania — você NÃO perde a brasileira ao se naturalizar americano.",
    stats: [
      { value: "5 anos", label: "GC (3 se casado c/ USC)" },
      { value: "30 meses", label: "Presença física dos últimos 60" },
      { value: "US$ 710", label: "N-400 online" },
      { value: "100 perguntas", label: "Civics (acertar 6 de 10)" },
    ],
    meta: {
      title: "Naturalização Americana 2026 — Cidadania para Brasileiros | Pinho Law",
      description:
        "Naturalização americana (N-400): 3 anos de GC se casado com cidadão, 5 anos demais casos. Brasil permite dupla cidadania. Preparação para entrevista de civismo + inglês.",
    },
    sections: [
      {
        kind: "list",
        value: {
          heading: "Requisitos para naturalização",
          style: "check",
          items: [
            "Green card há 5 anos (ou 3 anos se casado com cidadão americano e morando juntos)",
            "Presença física nos EUA por 30 dos últimos 60 meses (25 dos últimos 36 para spouse cases)",
            "Residência contínua — sem viagens de 6+ meses sem explicação",
            "Bons antecedentes (sem crimes sérios; DUIs e pequenas infrações são analisáveis)",
            "Inglês básico: leitura, escrita e fala — com isenções para maiores de 50 anos com 20+ anos de GC, ou 55 com 15+",
            "Conhecimento de civismo americano: 100 perguntas possíveis, precisa acertar 6 de 10 sorteadas",
            "Juramento de fidelidade aos EUA",
          ],
        },
      },
      {
        kind: "list",
        value: {
          heading: "Processo N-400 — passo a passo",
          style: "numbered",
          items: [
            "Protocolo do Form N-400 online (US$ 710) ou paper (US$ 760)",
            "Biometria em Application Support Center — 1–3 meses após protocolo",
            "Entrevista em USCIS — 6–12 meses após biometria (varia por escritório)",
            "Teste de inglês + civismo na entrevista",
            "Decisão: aprovado / recomendado aprovar / continuado / negado",
            "Cerimônia de juramento (Oath Ceremony) — geralmente no mesmo dia (decisão rápida) ou semanas depois",
          ],
        },
      },
      {
        kind: "prose",
        heading: "Dupla cidadania Brasil-EUA",
        body:
          "Tanto o Brasil quanto os Estados Unidos permitem dupla cidadania. Você NÃO perde a cidadania brasileira ao se naturalizar americano (a Constituição Federal brasileira, Art. 12, §4º, só cassa a cidadania brasileira em situações muito específicas — não pela mera naturalização voluntária em outro país). Você continua podendo entrar no Brasil com passaporte brasileiro, exercer direitos políticos no Brasil, etc.",
      },
      {
        kind: "table",
        value: {
          heading: "Custo",
          headers: ["Item", "Valor"],
          rows: [
            ["N-400 online", "US$ 710"],
            ["N-400 paper", "US$ 760"],
            ["Taxa reduzida (income ≤ 400% FPG)", "US$ 380"],
            ["Isenção total", "Possível para renda muito baixa ou benefícios federais"],
            ["Honorários Pinho Law (N-400 + preparação)", "US$ 2.000–3.500"],
          ],
        },
      },
      {
        kind: "prose",
        heading: "Nosso serviço",
        body:
          "Preparamos N-400 + sessão de prática de inglês + banco de 100 perguntas de civismo em inglês/português + revisão de histórico de viagens para garantir presença física + revisão de antecedentes para detectar qualquer ponto sensível antes do protocolo. Após aprovação, orientamos sobre passaporte americano e obrigações continuadas (declaração de IR global, etc.).",
      },
    ],
    faqTitle: "Perguntas frequentes",
    faq: [
      { q: "Brasil permite dupla cidadania com EUA?", a: "Sim. Você mantém a cidadania brasileira ao se naturalizar americano. A Constituição brasileira (Art. 12) permite expressamente dupla cidadania." },
      { q: "Preciso falar inglês fluente para naturalização?", a: "Não fluente — básico. Precisa ler, escrever e falar frases comuns sobre o dia-a-dia e resposta a perguntas sobre o N-400. Há isenções para maiores de 50 anos com 20+ anos de GC." },
      { q: "Quantas viagens ao Brasil posso fazer?", a: "Sem limite de número, mas viagens de 6+ meses podem quebrar a residência contínua. Viagens de 12+ meses a quebram automaticamente (a menos que você pré-autorize com Form N-470)." },
      { q: "DUI ou outras infrações impedem naturalização?", a: "Depende. DUIs simples normalmente não impedem após 5 anos. Múltiplos DUIs, crimes envolvendo moral, ou crimes agravados podem impedir ou até levar a deportação. Avaliação caso a caso." },
      { q: "Se meu N-400 for negado, perco o green card?", a: "Não automaticamente. Negação de N-400 não cassa o green card, a menos que seja por fraude ou outros fundamentos removíveis. Nesses casos, pode levar a procedimentos de deportação." },
      { q: "Preciso estar presente na entrevista?", a: "Sim. A entrevista é pessoal em escritório USCIS. Você deve ir sozinho (advogado pode acompanhar). Duração: 20–45 minutos." },
    ],
    relatedTitle: "Relacionado",
    related: [
      { label: "Casamento com cidadão americano (3 anos)", href: "/immigration/immigrant-visas/marriage-us-citizen" },
      { label: "Green card familiar", href: "/immigration/immigrant-visas/family-green-card" },
      { label: "Will & Trust (pós-cidadania)", href: "/business/will-and-trust" },
    ],
  },
  en: {
    locale: "en",
    slug: SLUG,
    immigrationBreadcrumb: "Immigration",
    breadcrumbLabel: "US Citizenship",
    eyebrow: "Immigrant Visa",
    h1: "US Naturalization (N-400) for Brazilians",
    lede:
      "5 years of green card (3 if married to US citizen), physical presence, good moral character, basic English, and civics knowledge. Brazil allows dual citizenship — you do NOT lose Brazilian citizenship by naturalizing as American.",
    stats: [
      { value: "5 yrs", label: "GC (3 if married to USC)" },
      { value: "30 mo", label: "Physical presence of last 60" },
      { value: "$710", label: "N-400 online" },
      { value: "100 q", label: "Civics (6 of 10 correct)" },
    ],
    meta: {
      title: "US Naturalization 2026 — Citizenship for Brazilians | Pinho Law",
      description:
        "US naturalization (N-400): 3 years GC if married to USC, 5 years otherwise. Brazil allows dual citizenship. Civics + English interview prep.",
    },
    sections: [
      {
        kind: "list",
        value: {
          heading: "Naturalization requirements",
          style: "check",
          items: [
            "Green card for 5 years (or 3 years if married to US citizen and living together)",
            "Physical presence in US for 30 of the last 60 months (25 of 36 for spouse cases)",
            "Continuous residence — no unexplained trips of 6+ months",
            "Good moral character (no serious crimes; DUIs and minor infractions are analyzable)",
            "Basic English: reading, writing, speaking — with exemptions for 50+ yrs with 20+ yrs GC, or 55+ with 15+",
            "US civics knowledge: 100 possible questions, answer 6 of 10 correctly",
            "Oath of allegiance to the US",
          ],
        },
      },
      {
        kind: "list",
        value: {
          heading: "N-400 process — step by step",
          style: "numbered",
          items: [
            "File Form N-400 online ($710) or paper ($760)",
            "Biometrics at Application Support Center — 1–3 months after filing",
            "USCIS interview — 6–12 months after biometrics (varies by office)",
            "English + civics test at interview",
            "Decision: approved / recommend approval / continued / denied",
            "Oath Ceremony — often same day (fast decision) or weeks later",
          ],
        },
      },
      {
        kind: "prose",
        heading: "Brazil-US dual citizenship",
        body:
          "Both Brazil and the US allow dual citizenship. You do NOT lose Brazilian citizenship by naturalizing as American (Brazilian Federal Constitution, Art. 12, §4 only strips Brazilian citizenship in very specific situations — not by mere voluntary naturalization). You continue to enter Brazil with a Brazilian passport, exercise political rights there, etc.",
      },
      {
        kind: "table",
        value: {
          heading: "Cost",
          headers: ["Item", "Amount"],
          rows: [
            ["N-400 online", "$710"],
            ["N-400 paper", "$760"],
            ["Reduced fee (income ≤ 400% FPG)", "$380"],
            ["Full waiver", "Possible with very low income or federal benefits"],
            ["Pinho Law fees (N-400 + prep)", "$2,000–3,500"],
          ],
        },
      },
      {
        kind: "prose",
        heading: "What we do",
        body:
          "Prepare N-400 + English practice session + 100-question civics bank in English/Portuguese + travel-history review to ensure physical presence + background review to catch any sensitive points before filing. After approval, we guide on US passport and ongoing obligations (global tax return, etc.).",
      },
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      { q: "Does Brazil allow dual citizenship with the US?", a: "Yes. You keep Brazilian citizenship when you naturalize as American. The Brazilian Constitution (Art. 12) expressly allows dual citizenship." },
      { q: "Do I need fluent English for naturalization?", a: "Not fluent — basic. You need to read, write, and speak common phrases about daily life and answer questions about the N-400. Exemptions exist for 50+ with 20+ yrs GC." },
      { q: "How many trips to Brazil can I take?", a: "No number limit, but 6+ month trips may break continuous residence. 12+ month trips automatically do (unless pre-authorized via Form N-470)." },
      { q: "Do DUIs or other infractions block naturalization?", a: "Depends. Simple DUIs usually don't block after 5 years. Multiple DUIs, crimes of moral turpitude, or aggravated felonies may block or even lead to deportation. Case-by-case." },
      { q: "If my N-400 is denied, do I lose my green card?", a: "Not automatically. N-400 denial doesn't strip the green card unless it's for fraud or other removable grounds. In those cases, deportation proceedings can follow." },
      { q: "Do I need to attend the interview in person?", a: "Yes. In-person interview at USCIS office. You go alone (attorney may attend). Duration: 20–45 minutes." },
    ],
    relatedTitle: "Related",
    related: [
      { label: "Marriage to US citizen (3-year path)", href: "/immigration/immigrant-visas/marriage-us-citizen" },
      { label: "Family-based green card", href: "/immigration/immigrant-visas/family-green-card" },
      { label: "Will & Trust (post-citizenship)", href: "/business/will-and-trust" },
    ],
  },
  es: {
    locale: "es",
    slug: SLUG,
    immigrationBreadcrumb: "Inmigración",
    breadcrumbLabel: "Ciudadanía Estadounidense",
    eyebrow: "Visa de Inmigrante",
    h1: "Naturalización Estadounidense (N-400) para Brasileños",
    lede:
      "5 años de green card (3 si casado con ciudadano estadounidense), presencia física, buen carácter moral, inglés básico, civismo. Brasil permite doble ciudadanía.",
    stats: [
      { value: "5 años", label: "GC (3 si casado c/ USC)" },
      { value: "30 meses", label: "Presencia física de 60" },
      { value: "US$ 710", label: "N-400 online" },
      { value: "100 preg.", label: "Civismo (6 de 10)" },
    ],
    meta: {
      title: "Naturalización Estadounidense 2026 — Ciudadanía para Brasileños | Pinho Law",
      description:
        "Naturalización (N-400): 3 años de GC si casado con USC, 5 años otros casos. Brasil permite doble ciudadanía.",
    },
    sections: [
      {
        kind: "list",
        value: {
          heading: "Requisitos para naturalización",
          style: "check",
          items: [
            "Green card por 5 años (3 si casado con ciudadano estadounidense)",
            "Presencia física: 30 de los últimos 60 meses",
            "Residencia continua — sin viajes de 6+ meses sin explicación",
            "Buen carácter moral",
            "Inglés básico — con exenciones para 50+ años con 20+ de GC",
            "Civismo: 100 preguntas posibles, acertar 6 de 10",
            "Juramento de fidelidad a EE.UU.",
          ],
        },
      },
      {
        kind: "prose",
        heading: "Doble ciudadanía Brasil-EE.UU.",
        body:
          "Ambos países permiten doble ciudadanía. NO pierdes la brasileña al naturalizarte estadounidense.",
      },
      {
        kind: "table",
        value: {
          heading: "Costo",
          headers: ["Item", "Monto"],
          rows: [
            ["N-400 online", "US$ 710"],
            ["N-400 paper", "US$ 760"],
            ["Tasa reducida (ingreso ≤ 400% FPG)", "US$ 380"],
            ["Honorarios Pinho Law (N-400 + preparación)", "US$ 2.000–3.500"],
          ],
        },
      },
    ],
    faqTitle: "Preguntas frecuentes",
    faq: [
      { q: "¿Brasil permite doble ciudadanía con EE.UU.?", a: "Sí. Mantienes la ciudadanía brasileña al naturalizarte." },
      { q: "¿Necesito inglés fluido?", a: "No, básico. Hay exenciones para 50+ años con 20+ de GC." },
      { q: "¿Cuántos viajes a Brasil puedo hacer?", a: "Sin límite de número, pero 6+ meses puede romper residencia continua." },
    ],
    relatedTitle: "Relacionado",
    related: [
      { label: "Matrimonio con ciudadano estadounidense", href: "/immigration/immigrant-visas/marriage-us-citizen" },
      { label: "Will & Trust", href: "/business/will-and-trust" },
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
