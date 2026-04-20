import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { CtaSection } from "@/components/sections/cta-section";
import { FIRM } from "@/lib/constants";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";
import { JsonLd } from "@/components/seo/json-ld";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { ArrowRight, AlertCircle } from "lucide-react";

type L = "pt" | "en" | "es";

// Full publication-ready PT copy from spec-parts-2-5.md §7.3.
// EN/ES summaries for cross-locale SEO; fuller translations pending
// the bilingual legal terminology glossary pass.
const COPY = {
  pt: {
    meta: {
      title: "Quero me mudar para os EUA — Qual visto é o certo para você? | Pinho Law",
      description:
        "Descubra o caminho de visto certo para sua situação. EB-2 NIW, EB-5, L-1, O-1, E-2, green card por casamento. Avaliação gratuita em português com Dra. Izi Pinho.",
    },
    eyebrow: "Jornada 1",
    headline: '"Quero me mudar para os Estados Unidos."',
    lede:
      "Ótimo. A primeira pergunta certa não é *como tirar visto* — é *qual visto tirar*. A maioria dos brasileiros chega aqui com uma ideia fixa (geralmente o EB-5 ou o E-2) e descobre tarde demais que havia um caminho melhor, mais barato e mais rápido para a situação específica deles. **Visto de imigração não é catálogo. É estratégia.**",
    section1: "Os caminhos mais comuns para brasileiros",
    paths: [
      {
        title: "EB-2 NIW (National Interest Waiver)",
        body: "Para profissionais com qualificação avançada cuja atuação beneficia os Estados Unidos. Não exige oferta de emprego. Permite auto-petição. É o caminho preferido de cientistas, engenheiros, médicos, empreendedores tecnológicos, pesquisadores e profissionais com histórico comprovado.",
        stats: [
          "Taxa de aprovação atual (USCIS 2025–2026): ~44% regular / 67% geral",
          "Prazo médio: 12–18 meses (Premium Processing disponível)",
          "Custo governamental: US$ 2.805 (I-140 + Premium)",
        ],
        href: "/immigration/immigrant-visas/eb-2-niw",
      },
      {
        title: "EB-5 (Investidor)",
        body: "Para quem pode investir US$ 800 mil (áreas rurais/TEA) ou US$ 1,05 milhão (áreas urbanas). Cria pelo menos 10 empregos nos EUA.",
        stats: [
          "Brasileiros: fila atual, sem backlog — 1,4 anos em média",
          "Retorno do investimento: 5–7 anos tipicamente",
        ],
        href: "/immigration/immigrant-visas/eb-5",
      },
      {
        title: "L-1 (Transferência Intra-empresa)",
        body: "Para empresários que já têm uma empresa no Brasil com pelo menos 1 ano de operação e querem abrir filial nos EUA. O caminho L-1 → EB-1C é frequentemente o mais barato para virar green card para empresários brasileiros que não têm dupla cidadania.",
        stats: [],
        href: "/immigration/non-immigrant-visas/l-1",
      },
      {
        title: "E-2 (Investidor Tratado) — só com dupla cidadania",
        body: "⚠️ O Brasil não é país signatário do tratado E-2. Brasileiros só conseguem E-2 se tiverem dupla cidadania com um país tratado (Itália, Portugal, Espanha, França, entre outros). Se você tem passaporte italiano ou português, o E-2 é uma das melhores rotas.",
        stats: [],
        href: "/immigration/non-immigrant-visas/e-2",
        warning: true,
      },
      {
        title: "Green Card por Casamento",
        body: "Se você é casado(a) com cidadão(ã) americano(a) ou residente permanente, esse é geralmente o caminho mais direto.",
        stats: [
          "Com cidadão americano: 10–13 meses em média (ajuste de status dentro dos EUA)",
          "Com residente permanente: prazos variam conforme o Visa Bulletin",
        ],
        href: "/immigration/immigrant-visas/marriage-us-citizen",
      },
      {
        title: "O-1 (Habilidade Extraordinária)",
        body: "Para artistas, atletas, cientistas, executivos e profissionais com reconhecimento comprovado na sua área. Requer evidência substancial (prêmios, imprensa, etc.).",
        stats: [],
        href: "/immigration/non-immigrant-visas/o-1",
      },
    ],
    toolTitle: "Ferramenta: Descubra seu caminho em 5 minutos",
    toolBody:
      "Nossa ferramenta com IA analisa sua situação (cidadania, orçamento, histórico profissional, família, prazo) e devolve uma recomendação personalizada com os caminhos mais viáveis — incluindo custo estimado e prazo.",
    toolCta: "Usar a ferramenta gratuitamente",
    toolHref: "/tools/visa-decision-engine",
    faqTitle: "Perguntas frequentes",
    faq: [
      {
        q: "Brasileiro pode tirar visto E-2?",
        a: "Não diretamente. O Brasil não é país signatário do tratado E-2. Brasileiros só podem aplicar ao E-2 se tiverem dupla cidadania com um país tratado (por exemplo: Itália, Portugal, Espanha, França, Argentina, Paraguai, Japão).",
      },
      {
        q: "Quanto custa uma petição de green card?",
        a: "Depende do caminho. Honorários do escritório para EB-2 NIW variam de US$ 7.500 a US$ 12.000. Para casamento com cidadão americano, de US$ 3.500 a US$ 5.500. Taxas governamentais são adicionais. Apresentamos valor fechado após a avaliação inicial.",
      },
      {
        q: "Preciso falar inglês para tirar green card?",
        a: "Não no momento da petição. O requisito de inglês existe apenas no momento da naturalização (cidadania), 3–5 anos após o green card, e há isenções por idade e tempo de residência.",
      },
      {
        q: "Quanto tempo leva para tirar green card em 2026?",
        a: "Depende inteiramente do caminho: casamento com cidadão 10–13 meses, EB-2 NIW 12–18 meses, EB-5 24–48 meses, EB-3 (patrocínio empregador) 2–5 anos. Nosso papel na avaliação é dizer qual é o caminho mais rápido para o seu caso específico.",
      },
      {
        q: "Posso começar o processo morando no Brasil?",
        a: "Sim. A maioria das petições é iniciada com o cliente no Brasil. Dependendo do visto, a etapa final é no Consulado Americano em São Paulo, Rio, Brasília, Recife ou Porto Alegre (consular processing) ou dentro dos EUA (adjustment of status).",
      },
      {
        q: "O que acontece se meu pedido for negado?",
        a: "Dependendo do caso, há três caminhos: Motion to Reopen, Motion to Reconsider, ou Appeal ao Administrative Appeals Office (AAO). Avaliamos cada negativa para identificar o caminho com maior chance de reversão.",
      },
    ],
    ctaFooter: "Agendar Avaliação Gratuita de Caso",
    breadcrumb: [
      { name: "Home", url: `${SITE.url}/pt` },
      { name: "Sonho Americano", url: `${SITE.url}/pt/american-dream` },
    ],
  },
  en: {
    meta: {
      title: "I Want to Move to the USA — Which Visa Is Right for You? | Pinho Law",
      description:
        "Find the right visa path for your situation. EB-2 NIW, EB-5, L-1, O-1, E-2, marriage green card. Free case review with Dra. Izi Pinho in Orlando.",
    },
    eyebrow: "Journey 1",
    headline: '"I want to move to the United States."',
    lede:
      "Good. The right first question isn't *how do I get a visa* — it's *which visa*. Most Brazilians arrive fixated on one path (usually EB-5 or E-2) and discover too late there was a better, faster, cheaper route for their specific situation. **Immigration visas aren't a catalog. They're strategy.**",
    section1: "Most common paths for Brazilians",
    paths: [
      {
        title: "EB-2 NIW (National Interest Waiver)",
        body: "For advanced-degree professionals whose work benefits the United States. No job offer required. Self-petition allowed. The preferred path for scientists, engineers, physicians, tech founders, researchers, and professionals with a documented track record.",
        stats: [
          "Current approval rate (USCIS 2025–2026): ~44% regular / 67% overall",
          "Average timeline: 12–18 months (Premium Processing available)",
          "Government fees: $2,805 (I-140 + Premium)",
        ],
        href: "/immigration/immigrant-visas/eb-2-niw",
      },
      {
        title: "EB-5 (Investor)",
        body: "For those who can invest $800K (rural/TEA) or $1.05M (urban). Must create at least 10 US jobs.",
        stats: [
          "Brazilians: priority date CURRENT, no backlog — 1.4 years average",
          "Investment return horizon: typically 5–7 years",
        ],
        href: "/immigration/immigrant-visas/eb-5",
      },
      {
        title: "L-1 (Intracompany Transfer)",
        body: "For founders with an existing Brazilian company (1+ year of operation) opening a US branch. The L-1 → EB-1C path is often the cheapest green-card route for Brazilian entrepreneurs WITHOUT dual citizenship.",
        stats: [],
        href: "/immigration/non-immigrant-visas/l-1",
      },
      {
        title: "E-2 (Treaty Investor) — dual citizenship only",
        body: "⚠️ Brazil is NOT an E-2 treaty country. Brazilians can only apply via dual citizenship with a treaty country (Italy, Portugal, Spain, France, etc.). If you hold an Italian or Portuguese passport, E-2 is one of the best routes.",
        stats: [],
        href: "/immigration/non-immigrant-visas/e-2",
        warning: true,
      },
      {
        title: "Marriage Green Card",
        body: "If you're married to a US citizen or permanent resident, this is typically the most direct path.",
        stats: [
          "With US citizen: 10–13 months average (adjustment of status in US)",
          "With permanent resident: timelines vary per Visa Bulletin",
        ],
        href: "/immigration/immigrant-visas/marriage-us-citizen",
      },
      {
        title: "O-1 (Extraordinary Ability)",
        body: "For artists, athletes, scientists, executives, and professionals with documented recognition in their field. Requires substantial evidence (awards, press, etc.).",
        stats: [],
        href: "/immigration/non-immigrant-visas/o-1",
      },
    ],
    toolTitle: "Tool: Find your path in 5 minutes",
    toolBody:
      "Our AI-powered tool analyzes your situation (citizenship, budget, professional history, family, timeline) and returns a personalized recommendation with the most viable paths — including estimated cost and timeline.",
    toolCta: "Use the free tool",
    toolHref: "/tools/visa-decision-engine",
    faqTitle: "Frequently asked questions",
    faq: [
      {
        q: "Can a Brazilian get an E-2 visa?",
        a: "Not directly. Brazil is not a signatory to the E-2 treaty. Brazilians can only apply via dual citizenship with a treaty country (e.g. Italy, Portugal, Spain, France, Argentina, Paraguay, Japan).",
      },
      {
        q: "How much does a green card petition cost?",
        a: "Depends on the path. Firm fees for EB-2 NIW range $7,500–$12,000. For marriage to a US citizen, $3,500–$5,500. Government fees are additional. We provide a fixed quote after initial assessment.",
      },
      {
        q: "Do I need to speak English for a green card?",
        a: "Not at petition time. English is required at naturalization (citizenship), 3–5 years after green card — with exemptions based on age and residency time.",
      },
      {
        q: "How long does a green card take in 2026?",
        a: "Depends entirely on path: USC marriage 10–13 months, EB-2 NIW 12–18 months, EB-5 24–48 months, EB-3 (employer sponsorship) 2–5 years. Our job in the assessment is telling you the fastest path for your specific case.",
      },
      {
        q: "Can I start the process while living in Brazil?",
        a: "Yes. Most petitions start with the client in Brazil. Depending on the visa, the final step is either at a US Consulate in São Paulo, Rio, Brasília, Recife, or Porto Alegre (consular processing) or within the US (adjustment of status).",
      },
      {
        q: "What happens if my petition is denied?",
        a: "Depending on the case, three paths: Motion to Reopen, Motion to Reconsider, or Appeal to the Administrative Appeals Office (AAO). We evaluate each denial to identify the path with the highest reversal probability.",
      },
    ],
    ctaFooter: "Book free case review",
    breadcrumb: [
      { name: "Home", url: `${SITE.url}/en` },
      { name: "American Dream", url: `${SITE.url}/en/american-dream` },
    ],
  },
  es: {
    meta: {
      title: "Quiero Mudarme a EE.UU. — ¿Qué Visa Es la Correcta? | Pinho Law",
      description:
        "Descubre la ruta de visa adecuada para tu situación. EB-2 NIW, EB-5, L-1, O-1, E-2, Green Card por matrimonio. Evaluación gratuita con Dra. Izi Pinho.",
    },
    eyebrow: "Jornada 1",
    headline: '"Quiero mudarme a Estados Unidos."',
    lede:
      "Perfecto. La primera pregunta correcta no es *cómo consigo una visa* — es *cuál visa*. La mayoría llega con una idea fija (usualmente EB-5 o E-2) y descubre tarde que había una ruta mejor, más rápida y barata. **La inmigración no es un catálogo. Es estrategia.**",
    section1: "Rutas más comunes para brasileños",
    paths: [
      {
        title: "EB-2 NIW (Exención de Interés Nacional)",
        body: "Para profesionales de grado avanzado cuyo trabajo beneficia a EE.UU. No requiere oferta de empleo. Permite auto-petición.",
        stats: [
          "Tasa actual de aprobación: ~44% regular / 67% general",
          "Plazo medio: 12–18 meses (Premium disponible)",
        ],
        href: "/immigration/immigrant-visas/eb-2-niw",
      },
      {
        title: "EB-5 (Inversionista)",
        body: "Para quienes pueden invertir US$ 800K (rural/TEA) o US$ 1,05M (urbano). Debe crear al menos 10 empleos en EE.UU.",
        stats: ["Brasileños: fecha de prioridad CURRENT, sin backlog"],
        href: "/immigration/immigrant-visas/eb-5",
      },
      {
        title: "L-1 (Transferencia Intraempresa)",
        body: "Para empresarios con empresa brasileña (1+ año). L-1 → EB-1C es la ruta más económica al green card para empresarios SIN doble ciudadanía.",
        stats: [],
        href: "/immigration/non-immigrant-visas/l-1",
      },
      {
        title: "E-2 (Inversionista Tratado) — requiere doble ciudadanía",
        body: "⚠️ Brasil NO es país signatario del tratado E-2. Los brasileños solo pueden aplicar vía doble ciudadanía (Italia, Portugal, España, Francia, etc.).",
        stats: [],
        href: "/immigration/non-immigrant-visas/e-2",
        warning: true,
      },
      {
        title: "Green Card por Matrimonio",
        body: "Casado(a) con ciudadano o residente de EE.UU.: ruta más directa.",
        stats: [
          "Con ciudadano: 10–13 meses promedio",
          "Con residente: plazos varían según Visa Bulletin",
        ],
        href: "/immigration/immigrant-visas/marriage-us-citizen",
      },
      {
        title: "O-1 (Habilidad Extraordinaria)",
        body: "Para artistas, atletas, científicos y profesionales con reconocimiento documentado.",
        stats: [],
        href: "/immigration/non-immigrant-visas/o-1",
      },
    ],
    toolTitle: "Herramienta: Encuentra tu ruta en 5 minutos",
    toolBody:
      "Nuestra herramienta con IA analiza tu situación (ciudadanía, presupuesto, historial, familia, plazo) y devuelve una recomendación personalizada.",
    toolCta: "Usar la herramienta gratis",
    toolHref: "/tools/visa-decision-engine",
    faqTitle: "Preguntas frecuentes",
    faq: [
      {
        q: "¿Un brasileño puede obtener visa E-2?",
        a: "No directamente. Brasil no es país signatario del tratado E-2. Solo vía doble ciudadanía con país tratado (Italia, Portugal, España, Francia, Argentina, Paraguay, Japón).",
      },
      {
        q: "¿Cuánto cuesta una petición de green card?",
        a: "Depende de la ruta. EB-2 NIW: US$ 7.500–12.000. Matrimonio con ciudadano: US$ 3.500–5.500. Tasas gubernamentales adicionales.",
      },
      {
        q: "¿Necesito inglés para el green card?",
        a: "No al momento de la petición. El inglés se requiere en la naturalización (3–5 años después), con exenciones por edad y residencia.",
      },
      {
        q: "¿Cuánto tarda un green card en 2026?",
        a: "Matrimonio con ciudadano: 10–13 meses. EB-2 NIW: 12–18 meses. EB-5: 24–48 meses. EB-3: 2–5 años.",
      },
      {
        q: "¿Puedo iniciar el proceso desde Brasil?",
        a: "Sí. La mayoría de peticiones inician con el cliente en Brasil. Paso final: consulado (SP/RJ/BSB/REC/POA) o ajuste de estatus en EE.UU.",
      },
      {
        q: "¿Qué pasa si niegan mi petición?",
        a: "Tres rutas: Motion to Reopen, Motion to Reconsider, o Appeal al AAO. Evaluamos cada negativa para identificar la ruta con mayor probabilidad de reversión.",
      },
    ],
    ctaFooter: "Agendar evaluación gratuita",
    breadcrumb: [
      { name: "Home", url: `${SITE.url}/es` },
      { name: "Sueño Americano", url: `${SITE.url}/es/american-dream` },
    ],
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
    path: "/american-dream",
    locale: locale as Locale,
  });
}

export default async function AmericanDreamPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const key = locale as L;
  const c = COPY[key];

  const faqLd = faqSchema(
    c.faq.map((item) => ({ question: item.q, answer: item.a })),
  );
  const breadcrumbLd = breadcrumbSchema([...c.breadcrumb]);

  return (
    <>
      <JsonLd data={faqLd} />
      <JsonLd data={breadcrumbLd} />

      {/* Hero */}
      <section className="bg-navy py-20 md:py-28">
        <Container>
          <FadeIn className="max-w-3xl">
            <span className="gold-rule" />
            <p className="mt-6 text-xs font-medium uppercase tracking-wider text-gold">
              {c.eyebrow}
            </p>
            <h1 className="mt-3 font-heading text-4xl font-semibold text-cream md:text-6xl">
              {c.headline}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-cream/70">
              {c.lede}
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Path cards */}
      <section className="bg-cream py-20">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-semibold text-ink md:text-4xl">
              {c.section1}
            </h2>
          </FadeIn>
          <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
            {c.paths.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.05}>
                <article
                  className={`group flex h-full flex-col rounded-[var(--radius-lg)] border bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:p-8 ${
                    "warning" in p && p.warning
                      ? "border-alert/40"
                      : "border-gold/20"
                  }`}
                >
                  {"warning" in p && p.warning && (
                    <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-alert/30 bg-alert/5 px-2.5 py-0.5 text-[11px] font-medium text-alert">
                      <AlertCircle className="h-3 w-3" />
                      {key === "pt" ? "Atenção" : key === "es" ? "Atención" : "Heads up"}
                    </div>
                  )}
                  <h3 className="font-heading text-xl font-semibold text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {p.body}
                  </p>
                  {p.stats.length > 0 && (
                    <ul className="mt-4 space-y-1.5 border-t border-border pt-4">
                      {p.stats.map((s) => (
                        <li
                          key={s}
                          className="flex gap-2 text-xs leading-relaxed text-ink-muted"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-auto pt-5">
                    <Link
                      href={p.href}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:gap-2"
                    >
                      {key === "pt"
                        ? "Ver detalhes"
                        : key === "es"
                          ? "Ver detalles"
                          : "Learn more"}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Tool teaser */}
      <section className="bg-ink py-20 text-cream">
        <Container>
          <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2 md:items-center">
            <FadeIn>
              <span className="gold-rule" />
              <h2 className="mt-6 font-heading text-3xl font-semibold md:text-4xl">
                {c.toolTitle}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-cream/70">
                {c.toolBody}
              </p>
            </FadeIn>
            <FadeIn delay={0.1} className="md:text-right">
              <Link
                href={c.toolHref}
                className="inline-flex items-center justify-center rounded-[var(--radius-md)] bg-gold px-6 py-3 text-sm font-medium text-white hover:bg-gold/90"
              >
                {c.toolCta} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-20">
        <Container>
          <FadeIn className="mx-auto max-w-2xl">
            <span className="gold-rule" />
            <h2 className="mt-6 font-heading text-3xl font-semibold text-ink md:text-4xl">
              {c.faqTitle}
            </h2>
          </FadeIn>
          <div className="mx-auto mt-12 max-w-3xl divide-y divide-border">
            {c.faq.map((item, i) => (
              <FadeIn key={item.q} delay={i * 0.03}>
                <div className="py-6">
                  <h3 className="font-heading text-lg font-semibold text-ink">
                    {item.q}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {item.a}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <div className="mt-14 text-center">
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center rounded-[var(--radius-md)] bg-gold px-6 py-3 text-sm font-medium text-white hover:bg-gold/90"
              >
                {c.ctaFooter}
              </Link>
              <p className="mt-3 text-xs text-ink-muted/70">
                WhatsApp {FIRM.phone} · {FIRM.email}
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
