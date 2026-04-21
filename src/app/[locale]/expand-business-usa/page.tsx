import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { CtaSection } from "@/components/sections/cta-section";
import { FIRM, SITE } from "@/lib/constants";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { ArrowRight, Scale } from "lucide-react";

type L = "pt" | "en" | "es";

// Full copy from website/content/spec-parts-2-5.md §Jornada 2.
// 5-step integrated plan. Benefit Corporations differentiator.
const COPY = {
  pt: {
    meta: {
      title: "Expandir Seu Negócio para os EUA — Visto + Empresa + Proteção | Pinho Law",
      description:
        "Estratégia integrada para empresários brasileiros: abertura de empresa nos EUA, visto L-1 ou E-2, proteção patrimonial e tributação Brasil-EUA.",
    },
    eyebrow: "Jornada 2",
    headline: '"Quero expandir meu negócio para os Estados Unidos."',
    lede:
      "Aqui, visto e empresa são um único plano — não duas coisas separadas. A maioria dos empresários brasileiros comete o mesmo erro: abrem a LLC primeiro, descobrem o visto depois, e chegam na entrevista do consulado com uma estrutura que não sustenta a petição. A ordem importa. A estrutura importa. A integração entre visto e empresa é o que faz o caso passar.",
    subhead:
      "O Pinho Law é um dos poucos escritórios brasileiros em Orlando que atua nas três frentes ao mesmo tempo: imigração, direito empresarial e patrimônio. Isso significa que seu caminho de visto é desenhado olhando para sua empresa, e sua empresa é estruturada olhando para seu visto, seus impostos e seu patrimônio — como um plano único.",
    planTitle: "O plano integrado",
    steps: [
      {
        title: "1. Diagnóstico (avaliação gratuita)",
        body: "Conversa inicial onde mapeamos: seu negócio no Brasil (faturamento, equipe, histórico), orçamento disponível nos EUA, cidadania (BR apenas vs BR + UE), família envolvida, prazo desejado.",
        output: "Saída: recomendação de visto + estrutura societária + tributação ideal.",
      },
      {
        title: "2. Visto",
        body: "Caminhos mais comuns para empresários brasileiros:",
        items: [
          "L-1A (Executivo/Gerente) — se você já tem empresa no Brasil com 1+ ano de operação. Custo acessível, conversão para EB-1C em 1–2 anos.",
          "E-2 — se você tem dupla cidadania com país tratado (Itália, Portugal, Espanha etc.). Renovável indefinidamente.",
          "EB-5 — se tem US$ 800k+ para investir em projeto TEA.",
          "EB-2 NIW — se seu perfil profissional justifica o national interest (tecnologia, saúde, pesquisa).",
          "O-1 — se você tem reconhecimento público relevante (imprensa, prêmios, palestras).",
        ],
      },
      {
        title: "3. Empresa",
        body: "",
        items: [
          "LLC vs C-Corp vs S-Corp (S-Corp não é acessível para não-residentes)",
          "Operating Agreement multilíngue, prevendo dinâmica Brasil-EUA",
          "EIN (Employer Identification Number) sem SSN",
          "Conta bancária (relacionamentos com bancos que aceitam empresários estrangeiros)",
          "Estrutura de proteção patrimonial desde o dia 1",
        ],
      },
      {
        title: "4. Tributação Brasil-EUA",
        body: "",
        items: [
          "Tratado de não-bitributação (Brasil NÃO tem tratado amplo com EUA, mas há regras específicas)",
          "FBAR, FATCA, 8938 — compliance obrigatório",
          "Estrutura para otimizar carga tributária legal entre os dois países",
        ],
      },
      {
        title: "5. Patrimônio",
        body: "",
        items: [
          "Proteção patrimonial (asset protection) — escudos contra processos",
          "Will & Trust estruturado entre Brasil e EUA",
          "Planejamento sucessório para evitar inventário americano (probate)",
        ],
      },
    ],
    diffTitle: "Nosso diferencial técnico: Benefit Corporations",
    diffBody:
      "A Dra. Izi Pinho é autora do artigo acadêmico The Advent of Benefit Corporations in Florida, publicado na Stetson Law Review e citado pelo Harvard Law School Corporate Governance Forum. Para empresários brasileiros cujos negócios têm propósito socioambiental, a Benefit Corporation da Flórida pode ser uma estrutura com vantagens únicas — e há poucos advogados em Orlando com profundidade técnica comprovada nessa estrutura.",
    diffCta: "Ler sobre Benefit Corporations →",
    diffHref: "/business/benefit-corporations",
    faqTitle: "Perguntas frequentes",
    faq: [
      {
        q: "Qual é o melhor visto para empresário brasileiro em 2026?",
        a: "Depende de três coisas: (1) dupla cidadania com país tratado do E-2, (2) empresa operando no Brasil há 1+ ano, (3) quanto pode investir. Para o empresário típico sem dupla cidadania, com empresa no Brasil, o caminho mais eficiente costuma ser L-1A → EB-1C. Com dupla cidadania: E-2. Com US$ 800k+ disponíveis: EB-5.",
      },
      {
        q: "Preciso abrir empresa nos EUA antes de pedir o visto?",
        a: "Para L-1 e E-2, sim — a empresa americana precisa existir e ter substância (endereço, operação, plano de negócios) no momento da petição. Para EB-2 NIW, não. Por isso a ordem e o timing importam.",
      },
      {
        q: "LLC ou C-Corp para empresário brasileiro na Flórida?",
        a: "LLC na maioria dos casos, especialmente para pequenas operações de serviços, e-commerce ou imóveis. C-Corp quando o plano é captar investimento ou escalar para IPO. S-Corp NÃO é uma opção para não-residentes porque exige acionistas americanos.",
      },
      {
        q: "Consigo EIN sem SSN?",
        a: "Sim. Como não-residente, você pode obter o EIN preenchendo o Form SS-4 e protocolando por fax ou correio. Processo leva 4–6 semanas tipicamente. Fazemos isso como parte do pacote de abertura de empresa.",
      },
      {
        q: "Quanto custa abrir uma empresa na Flórida sendo brasileiro?",
        a: "Taxas oficiais: cerca de US$ 125 para LLC. Honorários do escritório para abertura completa (LLC + Operating Agreement bilíngue + EIN + abertura de conta): US$ 2.500–4.500 dependendo da complexidade. Não inclui visto.",
      },
      {
        q: "Posso usar a mesma empresa para o visto do meu sócio?",
        a: "Em regra, sim — múltiplos executivos/gerentes podem ser transferidos via L-1 de uma mesma empresa. A estrutura societária precisa ser desenhada para suportar isso desde o início.",
      },
    ],
    cta: "Agendar Consulta Estratégica",
    breadcrumb: [
      { name: "Home", url: `${SITE.url}/pt` },
      { name: "Expandir Negócio", url: `${SITE.url}/pt/expand-business-usa` },
    ],
  },
  en: {
    meta: {
      title: "Expand Your Business to the USA — Visa + Entity + Protection | Pinho Law",
      description:
        "Integrated strategy for Brazilian entrepreneurs: US entity formation, L-1 or E-2 visa, asset protection, cross-border taxation.",
    },
    eyebrow: "Journey 2",
    headline: '"I want to expand my business to the United States."',
    lede:
      "Here, visa and entity are a single plan — not two separate things. Most Brazilian entrepreneurs make the same mistake: form the LLC first, figure out the visa later, and arrive at the consulate interview with a structure that doesn't support the petition. Order matters. Structure matters. Integration between visa and entity is what gets the case approved.",
    subhead:
      "Pinho Law is one of few Brazilian-led firms in Orlando that works all three fronts simultaneously: immigration, business law, and wealth. Your visa path is designed looking at your entity, and your entity is structured looking at your visa, taxes, and wealth — as one plan.",
    planTitle: "The integrated plan",
    steps: [
      {
        title: "1. Diagnostic (free assessment)",
        body: "Initial conversation mapping: your business in Brazil (revenue, team, track record), US budget, citizenship (BR only vs BR + EU), family involved, desired timeline.",
        output: "Output: visa recommendation + corporate structure + optimal tax setup.",
      },
      {
        title: "2. Visa",
        body: "Most common paths for Brazilian entrepreneurs:",
        items: [
          "L-1A (Exec/Manager) — if your Brazilian company has 1+ year of operation. Lowest cost, L-1A → EB-1C in 1–2 years.",
          "E-2 — if you have dual citizenship with a treaty country (Italy, Portugal, Spain, etc.). Renewable indefinitely.",
          "EB-5 — if you have $800k+ for a TEA project.",
          "EB-2 NIW — if your professional profile justifies national interest (tech, healthcare, research).",
          "O-1 — if you have documented public recognition (press, awards, speaking).",
        ],
      },
      {
        title: "3. Entity",
        body: "",
        items: [
          "LLC vs C-Corp vs S-Corp (S-Corp not available to non-residents)",
          "Multilingual Operating Agreement covering Brazil-US dynamics",
          "EIN (Employer Identification Number) without SSN",
          "Bank account (relationships with banks that accept foreign entrepreneurs)",
          "Asset protection structure from day 1",
        ],
      },
      {
        title: "4. Brazil-US Taxation",
        body: "",
        items: [
          "Double-taxation treaty (Brazil does NOT have a ratified comprehensive treaty with the US — specific rules apply)",
          "FBAR, FATCA, Form 8938 — mandatory compliance",
          "Structure to legally optimize tax burden between both countries",
        ],
      },
      {
        title: "5. Wealth",
        body: "",
        items: [
          "Asset protection — shields against lawsuits",
          "Will & Trust structured across Brazil and the US",
          "Estate planning to avoid US probate",
        ],
      },
    ],
    diffTitle: "Our technical edge: Benefit Corporations",
    diffBody:
      "Dra. Izi Pinho authored The Advent of Benefit Corporations in Florida, published in the Stetson Law Review and cited by the Harvard Law School Forum on Corporate Governance. For Brazilian entrepreneurs whose businesses have social/environmental purpose, the Florida Benefit Corporation can be a uniquely advantageous structure — and few Orlando attorneys have documented technical depth in this form.",
    diffCta: "Read about Benefit Corporations →",
    diffHref: "/business/benefit-corporations",
    faqTitle: "Frequently asked questions",
    faq: [
      { q: "Which visa is best for a Brazilian entrepreneur in 2026?", a: "Depends on three things: (1) dual citizenship with an E-2 treaty country, (2) existing Brazilian company 1+ year old, (3) how much you can invest. For typical founder without dual citizenship but with a Brazilian company, L-1A → EB-1C is usually most efficient. With dual citizenship: E-2. With $800k+ available: EB-5." },
      { q: "Do I need to open the US entity before filing for the visa?", a: "For L-1 and E-2, yes — the US company must exist and have substance (address, operation, business plan) at petition time. For EB-2 NIW, no. That's why order and timing matter." },
      { q: "LLC or C-Corp for Brazilian entrepreneur in Florida?", a: "LLC in most cases, especially small services, e-commerce, or real estate. C-Corp when planning to raise VC or scale to IPO. S-Corp is NOT available to non-residents — requires US-citizen shareholders." },
      { q: "Can I get an EIN without an SSN?", a: "Yes. As non-resident, you obtain EIN via Form SS-4 filed by fax or mail. Process takes 4–6 weeks typically. We handle this as part of the entity package." },
      { q: "How much does it cost to form a Florida company as a Brazilian?", a: "Official fees: about $125 for LLC. Firm fees for full formation (LLC + bilingual Operating Agreement + EIN + bank opening): $2,500–4,500 depending on complexity. Visa not included." },
      { q: "Can I use the same entity for my partner's visa?", a: "Generally yes — multiple executives/managers can be transferred via L-1 from the same company. The corporate structure must be designed to support this from the start." },
    ],
    cta: "Book Strategic Consultation",
    breadcrumb: [
      { name: "Home", url: `${SITE.url}/en` },
      { name: "Expand Business", url: `${SITE.url}/en/expand-business-usa` },
    ],
  },
  es: {
    meta: {
      title: "Expandir Tu Negocio a EE.UU. — Visa + Empresa + Protección | Pinho Law",
      description:
        "Estrategia integrada para empresarios: formación de empresa en EE.UU., visa L-1 o E-2, protección patrimonial y tributación transfronteriza.",
    },
    eyebrow: "Jornada 2",
    headline: '"Quiero expandir mi negocio a Estados Unidos."',
    lede:
      "Aquí, visa y empresa son un solo plan, no dos cosas separadas. La mayoría comete el mismo error: abren la LLC primero, descubren la visa después, y llegan a la entrevista consular con una estructura que no sostiene la petición.",
    subhead:
      "Pinho Law trabaja los tres frentes simultáneamente: inmigración, derecho empresarial y patrimonio — como un plan único.",
    planTitle: "El plan integrado",
    steps: [
      {
        title: "1. Diagnóstico (evaluación gratuita)",
        body: "Mapeamos: tu negocio en Brasil, presupuesto en EE.UU., ciudadanía, familia, plazo.",
        output: "Salida: recomendación de visa + estructura societaria + tributación ideal.",
      },
      {
        title: "2. Visa",
        body: "Rutas más comunes:",
        items: [
          "L-1A — si tienes empresa brasileña 1+ año",
          "E-2 — con doble ciudadanía país tratado",
          "EB-5 — US$ 800k+ en proyecto TEA",
          "EB-2 NIW — si tu perfil justifica interés nacional",
          "O-1 — con reconocimiento público documentado",
        ],
      },
      {
        title: "3. Empresa",
        body: "",
        items: [
          "LLC vs C-Corp (S-Corp no disponible a no-residentes)",
          "Operating Agreement multilingüe",
          "EIN sin SSN",
          "Cuenta bancaria con banco que acepta extranjeros",
          "Estructura de protección patrimonial desde día 1",
        ],
      },
      {
        title: "4. Tributación Brasil-EE.UU.",
        body: "",
        items: [
          "Brasil NO tiene tratado de no-bitributación amplio con EE.UU. — reglas específicas aplican",
          "FBAR, FATCA, 8938 — compliance obligatorio",
          "Estructura para optimizar carga tributaria legalmente",
        ],
      },
      {
        title: "5. Patrimonio",
        body: "",
        items: [
          "Protección patrimonial",
          "Will & Trust Brasil-EE.UU.",
          "Planificación sucesoria para evitar probate",
        ],
      },
    ],
    diffTitle: "Nuestra ventaja técnica: Benefit Corporations",
    diffBody:
      "Dra. Izi Pinho es autora del artículo académico de referencia sobre Benefit Corporations en Florida, citado por el Harvard Law School Forum on Corporate Governance.",
    diffCta: "Leer sobre Benefit Corporations →",
    diffHref: "/business/benefit-corporations",
    faqTitle: "Preguntas frecuentes",
    faq: [
      { q: "¿Qué visa es mejor para empresario brasileño en 2026?", a: "Depende de: (1) doble ciudadanía, (2) empresa brasileña 1+ año, (3) capital disponible." },
      { q: "¿Debo abrir la empresa en EE.UU. antes de la visa?", a: "Para L-1 y E-2, sí. Para EB-2 NIW, no." },
      { q: "¿LLC o C-Corp?", a: "LLC en la mayoría de casos. S-Corp no disponible a no-residentes." },
      { q: "¿Puedo obtener EIN sin SSN?", a: "Sí, vía Form SS-4 por fax o correo. 4–6 semanas." },
      { q: "¿Cuánto cuesta formar empresa en Florida siendo brasileño?", a: "Tasas oficiales: ~US$ 125 para LLC. Honorarios de formación completa: US$ 2.500–4.500." },
      { q: "¿Puedo usar la misma empresa para la visa de mi socio?", a: "Generalmente sí vía L-1." },
    ],
    cta: "Agendar Consulta Estratégica",
    breadcrumb: [
      { name: "Home", url: `${SITE.url}/es` },
      { name: "Expandir Negocio", url: `${SITE.url}/es/expand-business-usa` },
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
    path: "/expand-business-usa",
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
            <p className="mt-6 text-lg leading-relaxed text-cream/70">{c.lede}</p>
            <p className="mt-4 text-base leading-relaxed text-cream/60">
              {c.subhead}
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* 5-step plan */}
      <section className="bg-cream py-20">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-semibold text-ink md:text-4xl">
              {c.planTitle}
            </h2>
          </FadeIn>
          <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
            {c.steps.map((step, i) => (
              <FadeIn key={step.title} delay={i * 0.05}>
                <article className="flex h-full flex-col rounded-[var(--radius-lg)] border border-gold/20 bg-white p-6 shadow-sm md:p-8">
                  <h3 className="font-heading text-xl font-semibold text-ink">
                    {step.title}
                  </h3>
                  {step.body && (
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                      {step.body}
                    </p>
                  )}
                  {"items" in step && step.items && (
                    <ul className="mt-4 space-y-2">
                      {step.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-sm leading-relaxed text-ink-muted"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {"output" in step && step.output && (
                    <p className="mt-auto rounded-[var(--radius-md)] border border-gold/30 bg-gold/5 p-3 pt-3 text-xs font-medium text-ink">
                      {step.output}
                    </p>
                  )}
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefit Corps differentiator */}
      <section className="bg-ink py-20 text-cream">
        <Container>
          <FadeIn className="mx-auto max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[11px] font-medium text-gold">
              <Scale className="h-3.5 w-3.5" />
              Harvard · Stetson L. Rev.
            </div>
            <h2 className="font-heading text-3xl font-semibold md:text-4xl">
              {c.diffTitle}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-cream/70 md:text-lg">
              {c.diffBody}
            </p>
            <Link
              href={c.diffHref}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold hover:underline"
            >
              {c.diffCta}
            </Link>
          </FadeIn>
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
                {c.cta} <ArrowRight className="ml-2 h-4 w-4" />
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
