import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { CtaSection } from "@/components/sections/cta-section";
import { JsonLd } from "@/components/seo/json-ld";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from "@/lib/schema";
import { SITE } from "@/lib/constants";
import { ServiceTable } from "@/components/service/ServiceTable";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

type L = "pt" | "en" | "es";

// Full copy + 2026 data from website/content/spec-parts-2-5.md §EB-2 NIW.
const COPY = {
  pt: {
    meta: {
      title: "EB-2 NIW para Brasileiros 2026 — Sem Patrocinador | Pinho Law Orlando",
      description:
        "Green card EB-2 NIW sem oferta de emprego e sem patrocinador. Brasileiros CURRENT em 2026. 500+ casos aprovados. Dra. Izi Pinho, Stetson Law magna cum laude.",
    },
    eyebrow: "Visto de Imigrante",
    h1: "Visto EB-2 NIW — National Interest Waiver",
    lede:
      "A rota mais estratégica de green card para profissionais brasileiros qualificados em 2026. Sem oferta de emprego. Sem PERM. Sem patrocinador. Auto-petição.",
    stats: [
      { value: "CURRENT", label: "Fila Brasil 2026" },
      { value: "8–14mo", label: "Com Premium" },
      { value: "75–85%", label: "Aprovação c/ advogado" },
      { value: "US$ 2.965", label: "Premium Processing" },
    ],
    s1Title: "Quem qualifica para EB-2 NIW?",
    s1Body:
      "Você precisa atender pelo menos um dos critérios EB-2: (1) mestrado ou superior; (2) bacharelado + 5 anos de experiência progressiva; ou (3) habilidade excepcional. E demonstrar, sob Matter of Dhanasar (2016), três pontos:",
    dhanasar: [
      "Mérito substancial e importância nacional da sua atuação proposta",
      "Você está bem posicionado para avançar essa atuação",
      "Beneficiaria os EUA dispensar os requisitos normais de oferta de emprego e PERM",
    ],
    s2Title: "Taxa de aprovação atual (dados 2026)",
    ratesTable: {
      headers: ["Métrica", "Valor", "Fonte"],
      rows: [
        ["Taxa geral (Q2 FY2025)", "67,3%", "USCIS"],
        ["Processamento regular (março 2026)", "44%", "AILA Lawfully"],
        ["Petições preparadas por advogado", "75–85%", "Beyond Border Global"],
        ["Auto-petição", "40–65%", "mesma fonte"],
      ],
    },
    s2Note:
      "Casos bem documentados sob o framework Dhanasar com advogado experiente têm taxa de sucesso quase 2× maior que auto-petições.",
    s3Title: "Prazo (2026)",
    timelineTable: {
      headers: ["Etapa", "Tempo"],
      rows: [
        ["I-140 regular", "14–19 meses"],
        ["I-140 com Premium Processing", "45 dias úteis"],
        ["I-485 (ajuste) ou consular", "+6–18 meses"],
        ["Total filing → green card", "12–30 meses"],
      ],
    },
    s3Note:
      "Brasileiros não têm backlog — data de prioridade current assim que I-140 aprova.",
    s4Title: "Custo",
    costTable: {
      headers: ["Item", "Valor"],
      rows: [
        ["Taxa USCIS I-140", "US$ 715"],
        ["Asylum Program Fee (com I-140)", "US$ 600"],
        ["Premium Processing", "US$ 2.965"],
        ["Taxa USCIS I-485", "US$ 1.440"],
        ["EAD (I-765) + Advance Parole (I-131)", "US$ 260 cada"],
        ["Honorários Pinho Law", "US$ 7.500–12.000"],
      ],
    },
    costNote: "Valor fechado após avaliação inicial. Sem cobrança por hora.",
    s5Title: "O que faz uma petição EB-2 NIW vencedora",
    winItems: [
      "Plano de Trabalho Proposto detalhado, específico, mensurável",
      "Dhanasar 1: artigos acadêmicos, citações, patentes, impacto setorial",
      "Dhanasar 2: histórico, formação, experiência, recomendações",
      "Dhanasar 3: argumento jurídico para dispensar o PERM",
      "Cartas: 5–8 de figuras independentes de alto nível",
      "Memorando jurídico citando jurisprudência atual da AAO",
      "Apresentação visual — adjudicators leem sob pressão de tempo",
    ],
    s6Title: "Política em 2026 — atenção",
    s6Body:
      'A administração Trump anunciou em 2025 o "Trump Gold Card" (US$ 1M individual / US$ 2M corporativo). Em janeiro 2026, o DHS sinalizou regra preliminar reformulando critérios de EB-1, EB-2 NIW, outstanding researcher e professor.',
    s6Rec:
      "Se você qualifica hoje, proteja sua data de prioridade protocolando antes de qualquer mudança de regra. Datas pré-mudança em geral são preservadas.",
    faqTitle: "Perguntas frequentes",
    faq: [
      {
        q: "Brasileiro pode tirar EB-2 NIW?",
        a: "Sim — e está entre os melhores posicionados globalmente: sem backlog na fila do EB-2 para nascidos no Brasil.",
      },
      {
        q: "Preciso ter doutorado para EB-2 NIW?",
        a: "Não. Mestrado é suficiente. Bacharelado + 5 anos de experiência progressiva também qualifica. Habilidade excepcional sem mestrado qualifica mediante 3 dos 6 critérios regulamentares.",
      },
      {
        q: "Posso me auto-petitionar?",
        a: "Tecnicamente sim. Estatisticamente, 40–65% aprovam, contra 75–85% com advogado experiente. Diferença está na construção do argumento Dhanasar.",
      },
      {
        q: "Vale a pena pagar Premium Processing?",
        a: "Para a maioria dos casos, sim. US$ 2.965 garante decisão em 45 dias úteis vs 14–19 meses padrão.",
      },
      {
        q: "Qual a taxa real em 2026?",
        a: "Março 2026 regular: 44% (AILA Lawfully). Geral: 67%. Casos preparados por advogado: 75–85%.",
      },
      {
        q: "Posso trazer minha família?",
        a: "Sim. Cônjuge e filhos solteiros <21 recebem green card como derivados. Cônjuges recebem EAD.",
      },
      {
        q: "Quanto tempo até me naturalizar?",
        a: "5 anos após green card permanente (3 se casado com cidadão americano).",
      },
    ],
    ctaLabel: "Avaliar meu caso para EB-2 NIW",
    relatedTitle: "Relacionado",
    related: [
      { label: "Comparar com EB-1A", href: "/immigration/immigrant-visas/eb-1" },
      { label: "O-1A como alternativa", href: "/immigration/non-immigrant-visas/o-1" },
      { label: "Motor de Decisão de Visto", href: "/tools/visa-decision-engine" },
    ],
    labels: {
      policyBadge: "Política 2026",
      important: "Recomendação",
      liveLink: "Acompanhe atualizações ao vivo →",
      immigrationBreadcrumb: "Imigração",
    },
  },
  en: {
    meta: {
      title: "EB-2 NIW 2026 — National Interest Waiver (No Sponsor) | Pinho Law",
      description:
        "EB-2 NIW green card with no job offer, no PERM, no sponsor. Brazilian priority date CURRENT in 2026. 500+ approvals. Dra. Izi Pinho, Stetson Law magna cum laude.",
    },
    eyebrow: "Immigrant Visa",
    h1: "EB-2 NIW — National Interest Waiver",
    lede:
      "The most strategic green-card route for qualified Brazilian professionals in 2026. No job offer. No PERM. No sponsor. Self-petition.",
    stats: [
      { value: "CURRENT", label: "Brazil queue 2026" },
      { value: "8–14mo", label: "With Premium" },
      { value: "75–85%", label: "Approval w/ attorney" },
      { value: "$2,965", label: "Premium Processing" },
    ],
    s1Title: "Who qualifies for EB-2 NIW?",
    s1Body:
      "You must meet one of the EB-2 criteria: (1) master's or higher; (2) bachelor's + 5 years of progressive experience; or (3) exceptional ability. And satisfy the three Matter of Dhanasar (2016) prongs:",
    dhanasar: [
      "Substantial merit and national importance of your proposed endeavor",
      "You are well-positioned to advance that endeavor",
      "It benefits the US to waive the job-offer and PERM requirements",
    ],
    s2Title: "Current approval rate (2026 data)",
    ratesTable: {
      headers: ["Metric", "Value", "Source"],
      rows: [
        ["Overall rate (Q2 FY2025)", "67.3%", "USCIS"],
        ["Regular processing (March 2026)", "44%", "AILA Lawfully"],
        ["Attorney-prepared petitions", "75–85%", "Beyond Border Global"],
        ["Self-petition", "40–65%", "same source"],
      ],
    },
    s2Note:
      "Well-documented Dhanasar cases with experienced counsel succeed at nearly 2× the rate of self-petitions.",
    s3Title: "Timeline (2026)",
    timelineTable: {
      headers: ["Step", "Time"],
      rows: [
        ["I-140 regular", "14–19 months"],
        ["I-140 with Premium Processing", "45 business days"],
        ["I-485 (adjustment) or consular", "+6–18 months"],
        ["Total filing → green card", "12–30 months"],
      ],
    },
    s3Note:
      "Brazilians have no backlog — priority date is current the moment I-140 is approved.",
    s4Title: "Cost",
    costTable: {
      headers: ["Item", "Amount"],
      rows: [
        ["USCIS I-140 fee", "$715"],
        ["Asylum Program Fee (with I-140)", "$600"],
        ["Premium Processing", "$2,965"],
        ["USCIS I-485 fee", "$1,440"],
        ["EAD (I-765) + Advance Parole (I-131)", "$260 each"],
        ["Pinho Law firm fees", "$7,500–12,000"],
      ],
    },
    costNote: "Fixed fee after initial assessment. No hourly billing.",
    s5Title: "What makes an EB-2 NIW petition win",
    winItems: [
      "Proposed Endeavor plan — detailed, specific, measurable",
      "Dhanasar prong 1: papers, citations, patents, sector impact",
      "Dhanasar prong 2: track record, education, experience, recommendations",
      "Dhanasar prong 3: legal argument for waiving PERM",
      "Letters: 5–8 from independent high-level figures",
      "Structured legal memo citing current AAO jurisprudence",
      "Visual presentation — adjudicators read under time pressure",
    ],
    s6Title: "2026 policy — heads up",
    s6Body:
      'The Trump administration announced the "Trump Gold Card" in 2025 ($1M individual / $2M corporate). January 2026, DHS signaled draft rulemaking reshaping EB-1, EB-2 NIW, outstanding researcher, and professor criteria.',
    s6Rec:
      "If you qualify today, lock your priority date by filing before any rule change. Pre-change priority dates are generally preserved.",
    faqTitle: "Frequently asked questions",
    faq: [
      { q: "Can a Brazilian get EB-2 NIW?", a: "Yes — among the best-positioned globally: no backlog for those born in Brazil." },
      { q: "Do I need a doctorate for EB-2 NIW?", a: "No. A master's is sufficient. Bachelor's + 5 years of progressive experience also qualifies. Exceptional-ability candidates without a master's qualify by meeting 3 of 6 regulatory criteria." },
      { q: "Can I self-petition?", a: "Technically yes. Statistically, 40–65% approve vs 75–85% with experienced counsel. The difference is in how the Dhanasar argument is constructed." },
      { q: "Is Premium Processing worth it?", a: "For most cases, yes. $2,965 guarantees a decision in 45 business days vs 14–19 months standard." },
      { q: "What is the real 2026 approval rate?", a: "March 2026 regular: 44% (AILA Lawfully). Overall: 67%. Attorney-prepared: 75–85%." },
      { q: "Can I bring my family?", a: "Yes. Spouse and unmarried children under 21 receive green card as derivatives. Spouses also receive EAD." },
      { q: "How long until I can naturalize?", a: "5 years after receiving permanent green card (3 if married to a US citizen)." },
    ],
    ctaLabel: "Evaluate my EB-2 NIW case",
    relatedTitle: "Related",
    related: [
      { label: "Compare with EB-1A", href: "/immigration/immigrant-visas/eb-1" },
      { label: "O-1A as an alternative", href: "/immigration/non-immigrant-visas/o-1" },
      { label: "Visa Decision Engine", href: "/tools/visa-decision-engine" },
    ],
    labels: { policyBadge: "2026 Policy", important: "Recommendation", liveLink: "See live updates →", immigrationBreadcrumb: "Immigration" },
  },
  es: {
    meta: {
      title: "EB-2 NIW 2026 — Exención de Interés Nacional | Pinho Law",
      description:
        "Green card EB-2 NIW sin oferta de empleo, sin PERM, sin patrocinador. Brasileños CURRENT en 2026. 500+ aprobaciones. Dra. Izi Pinho.",
    },
    eyebrow: "Visa de Inmigrante",
    h1: "EB-2 NIW — Exención de Interés Nacional",
    lede:
      "La ruta más estratégica de green card para profesionales calificados en 2026. Sin oferta de empleo, sin PERM, sin patrocinador. Auto-petición.",
    stats: [
      { value: "CURRENT", label: "Fila Brasil 2026" },
      { value: "8–14m", label: "Con Premium" },
      { value: "75–85%", label: "Aprobación c/ abogado" },
      { value: "US$ 2.965", label: "Premium Processing" },
    ],
    s1Title: "¿Quién califica para EB-2 NIW?",
    s1Body:
      "Debes cumplir uno de los criterios EB-2: (1) maestría o superior; (2) bachiller + 5 años de experiencia progresiva; o (3) habilidad excepcional. Y satisfacer los tres prongs de Matter of Dhanasar (2016):",
    dhanasar: [
      "Mérito sustancial e importancia nacional del proyecto propuesto",
      "Estás bien posicionado para avanzar ese proyecto",
      "Beneficia a EE.UU. eximir los requisitos de oferta de empleo y PERM",
    ],
    s2Title: "Tasa actual de aprobación (datos 2026)",
    ratesTable: {
      headers: ["Métrica", "Valor", "Fuente"],
      rows: [
        ["Tasa general (Q2 FY2025)", "67,3%", "USCIS"],
        ["Regular (marzo 2026)", "44%", "AILA Lawfully"],
        ["Preparadas por abogado", "75–85%", "Beyond Border Global"],
        ["Auto-petición", "40–65%", "misma fuente"],
      ],
    },
    s2Note:
      "Casos bien documentados con abogado aprueban casi 2× más que auto-peticiones.",
    s3Title: "Plazo (2026)",
    timelineTable: {
      headers: ["Etapa", "Tiempo"],
      rows: [
        ["I-140 regular", "14–19 meses"],
        ["I-140 con Premium Processing", "45 días hábiles"],
        ["I-485 (ajuste) o consular", "+6–18 meses"],
        ["Total filing → green card", "12–30 meses"],
      ],
    },
    s3Note: "Brasileños no tienen backlog — fecha de prioridad current al aprobarse el I-140.",
    s4Title: "Costo",
    costTable: {
      headers: ["Item", "Monto"],
      rows: [
        ["Tasa USCIS I-140", "US$ 715"],
        ["Asylum Program Fee (con I-140)", "US$ 600"],
        ["Premium Processing", "US$ 2.965"],
        ["Tasa USCIS I-485", "US$ 1.440"],
        ["EAD (I-765) + Advance Parole (I-131)", "US$ 260 c/u"],
        ["Honorarios Pinho Law", "US$ 7.500–12.000"],
      ],
    },
    costNote: "Valor fijo tras evaluación inicial. Sin cobro por hora.",
    s5Title: "Qué hace ganar una petición EB-2 NIW",
    winItems: [
      "Plan de Proyecto Propuesto detallado, específico, medible",
      "Prong 1 de Dhanasar: artículos, citas, patentes, impacto sectorial",
      "Prong 2 de Dhanasar: trayectoria, formación, experiencia, recomendaciones",
      "Prong 3 de Dhanasar: argumento legal para eximir PERM",
      "Cartas: 5–8 de figuras independientes de alto nivel",
      "Memorando legal citando jurisprudencia AAO actual",
      "Presentación visual — adjudicators leen bajo presión de tiempo",
    ],
    s6Title: "Política en 2026 — atención",
    s6Body:
      'La administración Trump anunció el "Trump Gold Card" en 2025 (US$ 1M individual / US$ 2M corporativo). Enero 2026, DHS señaló regla preliminar reformulando EB-1, EB-2 NIW.',
    s6Rec:
      "Si calificas hoy, protege tu fecha de prioridad peticionando antes de cambios de regla.",
    faqTitle: "Preguntas frecuentes",
    faq: [
      { q: "¿Un brasileño puede obtener EB-2 NIW?", a: "Sí — entre los mejor posicionados globalmente: sin backlog para nacidos en Brasil." },
      { q: "¿Necesito doctorado para EB-2 NIW?", a: "No. Maestría es suficiente. Bachiller + 5 años de experiencia progresiva también califica." },
      { q: "¿Puedo auto-peticionar?", a: "Técnicamente sí. Auto-peticiones: 40–65%. Con abogado experimentado: 75–85%." },
      { q: "¿Vale la pena Premium Processing?", a: "Para la mayoría de casos, sí. US$ 2.965 garantizan decisión en 45 días hábiles." },
      { q: "¿Cuál es la tasa real en 2026?", a: "Marzo 2026 regular: 44% (AILA Lawfully). General: 67%. Con abogado: 75–85%." },
      { q: "¿Puedo traer a mi familia?", a: "Sí. Cónyuge e hijos solteros menores de 21 reciben green card como derivados." },
      { q: "¿Cuánto tarda hasta naturalizarme?", a: "5 años tras green card permanente (3 si casado con ciudadano estadounidense)." },
    ],
    ctaLabel: "Evaluar mi caso EB-2 NIW",
    relatedTitle: "Relacionado",
    related: [
      { label: "Comparar con EB-1A", href: "/immigration/immigrant-visas/eb-1" },
      { label: "O-1A como alternativa", href: "/immigration/non-immigrant-visas/o-1" },
      { label: "Motor de Decisión de Visa", href: "/tools/visa-decision-engine" },
    ],
    labels: { policyBadge: "Política 2026", important: "Recomendación", liveLink: "Ver actualizaciones en vivo →", immigrationBreadcrumb: "Inmigración" },
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const c = COPY[locale as L];
  return createPageMetadata({
    title: c.meta.title,
    description: c.meta.description,
    path: "/immigration/immigrant-visas/eb-2-niw",
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
  const key = locale as L;
  const c = COPY[key];

  const faqLd = faqSchema(c.faq.map(({ q, a }) => ({ question: q, answer: a })));
  const breadcrumbLd = breadcrumbSchema([
    { name: "Home", url: `${SITE.url}/${key}` },
    { name: c.labels.immigrationBreadcrumb, url: `${SITE.url}/${key}/immigration` },
    { name: c.h1, url: `${SITE.url}/${key}/immigration/immigrant-visas/eb-2-niw` },
  ]);
  const serviceLd = serviceSchema({
    name: c.h1,
    description: c.meta.description,
    url: `${SITE.url}/${key}/immigration/immigrant-visas/eb-2-niw`,
  });

  return (
    <>
      <JsonLd data={faqLd} />
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={serviceLd} />

      {/* Hero + stats band */}
      <section className="bg-navy py-20 md:py-28">
        <Container>
          <FadeIn className="max-w-3xl">
            <span className="gold-rule" />
            <p className="mt-6 text-xs font-medium uppercase tracking-wider text-gold">{c.eyebrow}</p>
            <h1 className="mt-3 font-heading text-4xl font-semibold text-cream md:text-6xl">{c.h1}</h1>
            <p className="mt-5 text-lg leading-relaxed text-cream/70 md:text-xl">{c.lede}</p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {c.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-[var(--radius-md)] border border-gold/20 bg-navy-light/50 p-4 backdrop-blur-sm"
                >
                  <div className="font-heading text-xl font-semibold text-cream md:text-2xl">{s.value}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-cream/50">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Qualifies + Dhanasar */}
      <section className="bg-cream py-20">
        <Container>
          <FadeIn className="mx-auto max-w-3xl">
            <h2 className="font-heading text-3xl font-semibold text-ink md:text-4xl">{c.s1Title}</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">{c.s1Body}</p>
            <ol className="mt-6 space-y-3">
              {c.dhanasar.map((d, i) => (
                <li key={d} className="flex gap-3 text-base text-ink">
                  <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-xs font-semibold text-white">
                    {i + 1}
                  </span>
                  {d}
                </li>
              ))}
            </ol>
          </FadeIn>
        </Container>
      </section>

      {/* Rates */}
      <section className="border-t border-border bg-white py-20">
        <Container>
          <FadeIn className="mx-auto max-w-3xl">
            <h2 className="font-heading text-3xl font-semibold text-ink md:text-4xl">{c.s2Title}</h2>
            <ServiceTable headers={c.ratesTable.headers} rows={c.ratesTable.rows} className="mt-6" />
            <p className="mt-5 rounded-[var(--radius-md)] border border-gold/30 bg-gold/5 p-4 text-sm leading-relaxed text-ink">
              {c.s2Note}
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Timeline */}
      <section className="border-t border-border bg-cream py-20">
        <Container>
          <FadeIn className="mx-auto max-w-3xl">
            <h2 className="font-heading text-3xl font-semibold text-ink md:text-4xl">{c.s3Title}</h2>
            <ServiceTable headers={c.timelineTable.headers} rows={c.timelineTable.rows} className="mt-6" />
            <p className="mt-5 text-sm italic leading-relaxed text-ink-muted">{c.s3Note}</p>
          </FadeIn>
        </Container>
      </section>

      {/* Cost */}
      <section className="border-t border-border bg-white py-20">
        <Container>
          <FadeIn className="mx-auto max-w-3xl">
            <h2 className="font-heading text-3xl font-semibold text-ink md:text-4xl">{c.s4Title}</h2>
            <ServiceTable headers={c.costTable.headers} rows={c.costTable.rows} className="mt-6" />
            <p className="mt-5 text-sm italic leading-relaxed text-ink-muted">{c.costNote}</p>
          </FadeIn>
        </Container>
      </section>

      {/* Winning factors */}
      <section className="border-t border-border bg-cream py-20">
        <Container>
          <FadeIn className="mx-auto max-w-3xl">
            <h2 className="font-heading text-3xl font-semibold text-ink md:text-4xl">{c.s5Title}</h2>
            <ul className="mt-6 space-y-3">
              {c.winItems.map((item) => (
                <li key={item} className="flex gap-3 text-base text-ink-muted">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </Container>
      </section>

      {/* Policy callout */}
      <section className="border-t border-border bg-ink py-16 text-cream">
        <Container>
          <FadeIn className="mx-auto max-w-3xl rounded-[var(--radius-lg)] border border-alert/30 bg-alert/5 p-6 md:p-8">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-alert/40 bg-alert/10 px-3 py-1 text-[11px] font-medium text-alert">
              <AlertTriangle className="h-3.5 w-3.5" />
              {c.labels.policyBadge}
            </div>
            <h2 className="font-heading text-2xl font-semibold md:text-3xl">{c.s6Title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-cream/80 md:text-base">{c.s6Body}</p>
            <div className="mt-5 border-t border-cream/10 pt-4">
              <p className="text-xs font-medium uppercase tracking-wider text-gold">{c.labels.important}</p>
              <p className="mt-2 text-sm leading-relaxed text-cream/80 md:text-base">{c.s6Rec}</p>
            </div>
            <p className="mt-5 text-xs text-cream/50">
              <Link href="/immigration-live" className="underline hover:text-gold">
                {c.labels.liveLink}
              </Link>
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-cream py-20">
        <Container>
          <FadeIn className="mx-auto max-w-3xl">
            <h2 className="font-heading text-3xl font-semibold text-ink md:text-4xl">{c.faqTitle}</h2>
            <div className="mt-10 divide-y divide-border">
              {c.faq.map((item, i) => (
                <FadeIn key={item.q} delay={i * 0.03}>
                  <div className="py-6">
                    <h3 className="font-heading text-lg font-semibold text-ink">{item.q}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.a}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Related */}
      <section className="border-t border-border bg-white py-16">
        <Container>
          <FadeIn className="mx-auto max-w-3xl">
            <h2 className="font-heading text-xl font-semibold text-ink">{c.relatedTitle}</h2>
            <ul className="mt-4 space-y-2">
              {c.related.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:underline"
                  >
                    → {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
