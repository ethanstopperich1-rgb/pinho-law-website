import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import {
  ServicePageTemplate,
  type ServicePageContent,
  type L,
} from "@/components/service/ServicePageTemplate";
import type { Locale } from "@/i18n/routing";

const SLUG = "immigration/immigrant-visas/marriage-us-citizen";

// Copy from website/content/spec-parts-2-5.md §Green Card por Casamento com Cidadão Americano.
const DATA: Record<L, ServicePageContent> = {
  pt: {
    locale: "pt",
    slug: SLUG,
    immigrationBreadcrumb: "Imigração",
    breadcrumbLabel: "Casamento com Cidadão Americano",
    eyebrow: "Visto de Imigrante",
    h1: "Green Card por Casamento com Cidadão Americano",
    lede:
      "A rota mais direta de green card permanente — quando bem feita. Casado(a) com cidadão(ã) americano(a): sem fila, sem cota, data de prioridade sempre CURRENT. 10–13 meses em média se protocolado corretamente.",
    stats: [
      { value: "10–13mo", label: "Ajuste de status" },
      { value: "12–16mo", label: "Consular processing" },
      { value: "CURRENT", label: "Data de prioridade" },
      { value: "4–8mo", label: "EAD + Advance Parole" },
    ],
    meta: {
      title: "Green Card por Casamento com Cidadão Americano 2026 | Pinho Law",
      description:
        "Green card por casamento com cidadão americano: prazo 10–13 meses, custo, AOS vs processamento consular, entrevista USCIS, evidência bona fide.",
    },
    sections: [
      {
        kind: "prose",
        heading: "Dois caminhos: dentro vs fora dos EUA",
        body:
          "Caminho 1 — Adjustment of Status (dentro dos EUA). Para quem já está nos EUA legalmente (turismo válido, visto válido, etc.). Forms: I-130 (petição) + I-485 (ajuste) protocolados juntos (concurrent filing). Inclui I-765 (autorização de trabalho) + I-131 (advance parole) sem custo adicional desde Apr/2024. Prazo: 10–13 meses até green card. Vantagem: você fica nos EUA durante todo o processo. Caminho 2 — Consular Processing (fora dos EUA). Para quem está no Brasil. Forms: I-130 → NVC (National Visa Center) → entrevista no consulado (São Paulo, Rio, Brasília, Recife, Porto Alegre). Prazo: 12–16 meses tipicamente. Final: você entra nos EUA já com visto de imigrante e vira green card holder ao chegar.",
      },
      {
        kind: "table",
        value: {
          heading: "Custo",
          headers: ["Item", "Valor"],
          rows: [
            ["I-130 (online)", "US$ 625"],
            ["I-130 (paper)", "US$ 675"],
            ["I-485 (ajuste de status)", "US$ 1.440"],
            ["I-765 (EAD)", "US$ 260 (concorrente com I-485)"],
            ["I-131 (advance parole)", "US$ 630"],
            ["Exame médico (civil surgeon)", "US$ 200–500"],
            ["Honorários Pinho Law (AOS completo)", "US$ 3.500–5.500"],
            ["Honorários Pinho Law (consular processing)", "US$ 4.000–6.500"],
          ],
        },
      },
      {
        kind: "prose",
        heading: "A entrevista — onde a maioria dos casos é decidida",
        body:
          "USCIS entrevista o casal pessoalmente. As perguntas vão de operacionais (\"como vocês se conheceram?\") a íntimas (\"qual o lado da cama em que ela dorme?\"). Em casos complexos, USCIS faz entrevistas separadas (Stokes interview) e compara respostas. Como preparamos: sessão de preparação com revisão de 100+ perguntas típicas; revisão de evidências de relacionamento bona fide (joint accounts, lease conjunto, fotos, viagens, declarações); coaching para perguntas-armadilha; acompanhamento legal na entrevista.",
      },
      {
        kind: "prose",
        heading: "Green card condicional vs permanente",
        body:
          "Se você se casou há menos de 2 anos quando o green card é aprovado, recebe green card condicional (CR-1) válido por 2 anos. 90 dias antes de vencer, vocês protocolam I-751 conjuntamente para remoção das condições. Se casaram há 2+ anos, recebe green card permanente (IR-1) direto, válido por 10 anos.",
      },
      {
        kind: "prose",
        heading: "Naturalização acelerada",
        body:
          "Casado(a) com cidadão(ã) americano(a) e com green card há 3 anos (vs 5 normais)? Você qualifica para naturalização acelerada via N-400. Custo: US$ 710 (online) ou US$ 760 (paper).",
      },
    ],
    faqTitle: "Perguntas frequentes",
    faq: [
      { q: "Quanto tempo leva o green card por casamento com cidadão americano em 2026?", a: "10–13 meses em média via adjustment of status (dentro dos EUA). 12–16 meses via consular processing (fora dos EUA)." },
      { q: "Posso trabalhar enquanto espero?", a: "Sim. O EAD é protocolado junto com o I-485 e tipicamente aprovado em 4–8 meses, antes do green card." },
      { q: "Posso viajar enquanto espero?", a: "Sim, com Advance Parole (Form I-131) protocolado junto com o I-485. Sair dos EUA sem AP aprovado abandona sua petição." },
      { q: "Casamento de pessoas do mesmo sexo qualifica?", a: "Sim. Desde 2013 (Windsor) o USCIS reconhece casamentos do mesmo sexo igualmente para fins de imigração." },
      { q: "O que conta como evidência bona fide do casamento?", a: "Lease/escritura conjunta, contas bancárias conjuntas, beneficiários em seguros e 401(k), fotos juntos ao longo do tempo, viagens, declarações juramentadas de amigos/familiares, filhos em comum, correspondência a ambos no mesmo endereço." },
      { q: "E se nos divorciarmos antes do green card permanente?", a: "Casos com green card condicional + divórcio podem manter elegibilidade via waiver do I-751, demonstrando que o casamento foi bona fide. Casos com I-485 ainda pendente são mais delicados — avaliação caso a caso." },
      { q: "Preciso falar inglês para a entrevista?", a: "Não. USCIS oferece intérprete (você pode levar o seu — tradutor juramentado preferível). A entrevista de naturalização (3–5 anos depois) exige inglês básico, com isenções por idade." },
    ],
    relatedTitle: "Relacionado",
    related: [
      { label: "Casamento com residente permanente (LPR)", href: "/immigration/immigrant-visas/marriage-lpr" },
      { label: "Naturalização americana (N-400)", href: "/immigration/immigrant-visas/us-citizenship" },
      { label: "Motor de Decisão de Visto", href: "/tools/visa-decision-engine" },
    ],
  },
  en: {
    locale: "en",
    slug: SLUG,
    immigrationBreadcrumb: "Immigration",
    breadcrumbLabel: "Marriage to US Citizen",
    eyebrow: "Immigrant Visa",
    h1: "Marriage Green Card — US Citizen Spouse",
    lede:
      "The most direct permanent green-card route — when done right. Married to a US citizen: no cap, no queue, priority date always CURRENT. 10–13 months on average with proper filing.",
    stats: [
      { value: "10–13mo", label: "Adjustment of status" },
      { value: "12–16mo", label: "Consular processing" },
      { value: "CURRENT", label: "Priority date" },
      { value: "4–8mo", label: "EAD + Advance Parole" },
    ],
    meta: {
      title: "Marriage Green Card (US Citizen Spouse) 2026 | Pinho Law",
      description:
        "Green card via marriage to a US citizen: 10–13 month average, cost, AOS vs consular processing, USCIS interview, bona-fide evidence.",
    },
    sections: [
      {
        kind: "prose",
        heading: "Two paths: in the US vs abroad",
        body:
          'Path 1 — Adjustment of Status (in the US). For those already in the US legally (valid tourist stamp, valid visa, etc.). Forms: I-130 (petition) + I-485 (adjustment) filed concurrently. Includes I-765 (work authorization) + I-131 (advance parole) at no added cost since April 2024. Timeline: 10–13 months to green card. Advantage: you stay in the US throughout. Path 2 — Consular Processing (abroad). For those in Brazil. Forms: I-130 → NVC (National Visa Center) → interview at the consulate (São Paulo, Rio, Brasília, Recife, Porto Alegre). Timeline: 12–16 months typical. End: you enter the US with an immigrant visa and become a green-card holder on arrival.',
      },
      {
        kind: "table",
        value: {
          heading: "Cost",
          headers: ["Item", "Amount"],
          rows: [
            ["I-130 (online)", "$625"],
            ["I-130 (paper)", "$675"],
            ["I-485 (adjustment of status)", "$1,440"],
            ["I-765 (EAD)", "$260 (concurrent with I-485)"],
            ["I-131 (advance parole)", "$630"],
            ["Medical exam (civil surgeon)", "$200–500"],
            ["Pinho Law fees (full AOS)", "$3,500–5,500"],
            ["Pinho Law fees (consular processing)", "$4,000–6,500"],
          ],
        },
      },
      {
        kind: "prose",
        heading: "The interview — where most cases are decided",
        body:
          'USCIS interviews the couple in person. Questions range from operational ("how did you meet?") to intimate ("which side of the bed does she sleep on?"). In complex cases, USCIS runs separate interviews (Stokes interview) and compares answers. How we prepare: prep session reviewing 100+ typical questions; review of bona-fide evidence (joint accounts, joint lease, photos, travel, declarations); coaching for trap questions; attorney attendance at the interview.',
      },
      {
        kind: "prose",
        heading: "Conditional vs permanent green card",
        body:
          "If you married less than 2 years before the green card is approved, you receive a conditional green card (CR-1) valid for 2 years. 90 days before expiry, you file I-751 jointly to remove conditions. If married 2+ years, you receive a permanent green card (IR-1) direct, valid for 10 years.",
      },
      {
        kind: "prose",
        heading: "Accelerated naturalization",
        body:
          "Married to a US citizen and holding green card for 3 years (vs 5 normally)? You qualify for accelerated naturalization via N-400. Cost: $710 (online) or $760 (paper).",
      },
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      { q: "How long does the marriage green card take in 2026?", a: "10–13 months average via adjustment of status (in US). 12–16 months via consular processing (abroad)." },
      { q: "Can I work while waiting?", a: "Yes. The EAD is filed with the I-485 and typically approved in 4–8 months, before the green card." },
      { q: "Can I travel while waiting?", a: "Yes, with Advance Parole (Form I-131) filed with the I-485. Leaving the US without approved AP abandons your petition." },
      { q: "Does same-sex marriage qualify?", a: "Yes. Since 2013 (Windsor), USCIS recognizes same-sex marriages equally for immigration purposes." },
      { q: "What counts as bona-fide marriage evidence?", a: "Joint lease/deed, joint bank accounts, beneficiaries on insurance and 401(k), photos together over time, travel, sworn declarations from friends/family, shared children, mail to both at the same address." },
      { q: "What if we divorce before the permanent green card?", a: "Conditional green-card cases + divorce may retain eligibility via I-751 waiver showing the marriage was bona fide. Pending I-485 cases are more delicate — case-by-case analysis." },
      { q: "Do I need to speak English for the interview?", a: "No. USCIS provides an interpreter (you may bring your own — certified translator preferred). The naturalization interview (3–5 years later) requires basic English, with age-based exemptions." },
    ],
    relatedTitle: "Related",
    related: [
      { label: "Marriage to permanent resident (LPR)", href: "/immigration/immigrant-visas/marriage-lpr" },
      { label: "US naturalization (N-400)", href: "/immigration/immigrant-visas/us-citizenship" },
      { label: "Visa Decision Engine", href: "/tools/visa-decision-engine" },
    ],
  },
  es: {
    locale: "es",
    slug: SLUG,
    immigrationBreadcrumb: "Inmigración",
    breadcrumbLabel: "Matrimonio con Ciudadano Estadounidense",
    eyebrow: "Visa de Inmigrante",
    h1: "Green Card por Matrimonio — Cónyuge Estadounidense",
    lede:
      "La ruta más directa al green card permanente — cuando se hace bien. Sin cupo, sin cola, fecha de prioridad siempre CURRENT. 10–13 meses en promedio.",
    stats: [
      { value: "10–13m", label: "Ajuste de estatus" },
      { value: "12–16m", label: "Procesamiento consular" },
      { value: "CURRENT", label: "Fecha de prioridad" },
      { value: "4–8m", label: "EAD + Advance Parole" },
    ],
    meta: {
      title: "Green Card por Matrimonio con Ciudadano Estadounidense 2026 | Pinho Law",
      description:
        "Green card por matrimonio con ciudadano estadounidense: plazo 10–13 meses, costo, AOS vs consular, entrevista USCIS.",
    },
    sections: [
      {
        kind: "prose",
        heading: "Dos caminos: dentro vs fuera de EE.UU.",
        body:
          "Camino 1 — Ajuste de Estatus (en EE.UU.): I-130 + I-485 concurrentes, 10–13 meses. Camino 2 — Procesamiento Consular (en Brasil): I-130 → NVC → entrevista consular, 12–16 meses.",
      },
      {
        kind: "table",
        value: {
          heading: "Costo",
          headers: ["Item", "Monto"],
          rows: [
            ["I-130 (online)", "US$ 625"],
            ["I-485 (ajuste de estatus)", "US$ 1.440"],
            ["I-765 (EAD)", "US$ 260 (concurrente con I-485)"],
            ["Examen médico", "US$ 200–500"],
            ["Honorarios Pinho Law (AOS completo)", "US$ 3.500–5.500"],
          ],
        },
      },
      {
        kind: "prose",
        heading: "La entrevista",
        body:
          "USCIS entrevista a la pareja en persona. Preparamos con 100+ preguntas típicas, revisión de evidencia bona fide, coaching y acompañamiento legal.",
      },
    ],
    faqTitle: "Preguntas frecuentes",
    faq: [
      { q: "¿Cuánto tarda el green card por matrimonio en 2026?", a: "10–13 meses vía AOS. 12–16 meses vía procesamiento consular." },
      { q: "¿Puedo trabajar mientras espero?", a: "Sí. El EAD se presenta con el I-485 y se aprueba típicamente en 4–8 meses." },
      { q: "¿Puedo viajar?", a: "Sí, con Advance Parole (I-131) presentado con el I-485." },
      { q: "¿El matrimonio del mismo sexo califica?", a: "Sí, desde 2013 (Windsor)." },
      { q: "¿Necesito inglés para la entrevista?", a: "No. USCIS provee intérprete." },
    ],
    relatedTitle: "Relacionado",
    related: [
      { label: "Matrimonio con residente permanente (LPR)", href: "/immigration/immigrant-visas/marriage-lpr" },
      { label: "Naturalización estadounidense (N-400)", href: "/immigration/immigrant-visas/us-citizenship" },
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
