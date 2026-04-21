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
import { ArrowRight } from "lucide-react";

type L = "pt" | "en" | "es";

// Full copy from website/content/spec-parts-2-5.md §Jornada 3 + remainder
// in website/content/spec-part-7.md.
const COPY = {
  pt: {
    meta: {
      title: "Já Estou nos EUA — Green Card, Cidadania, Imóveis, Patrimônio | Pinho Law",
      description:
        "Para brasileiros já na Flórida: green card por casamento, cidadania, compra de imóvel, Will & Trust, proteção patrimonial. Escritório brasileiro em Orlando.",
    },
    eyebrow: "Jornada 3",
    headline: '"Já estou nos Estados Unidos."',
    lede:
      "A partir daqui, cada decisão legal constrói (ou destrói) patrimônio. Você já fez a parte mais difícil: chegar. Agora vem a parte que a maioria dos brasileiros adia ou resolve errado — green card, cidadania, compra de casa, contratos, proteção patrimonial, Will & Trust. Decisões que, tomadas com antecedência e com o profissional certo, economizam dezenas de milhares de dólares e evitam brigas de família.",
    sectionTitle: "O que normalmente está no seu radar",
    areas: [
      {
        title: "Green Card por Casamento",
        body: "Se você é casado(a) com cidadão(ã) americano(a), o caminho é direto — em média 10–13 meses do protocolo ao green card condicional. Se você é casado(a) com portador(a) de green card, o prazo depende do Visa Bulletin.",
        links: [
          { label: "Green card por casamento com cidadão", href: "/immigration/immigrant-visas/marriage-us-citizen" },
          { label: "Green card por casamento com residente", href: "/immigration/immigrant-visas/marriage-lpr" },
        ],
      },
      {
        title: "Cidadania Americana",
        body: "3 anos de green card (casado com cidadão) ou 5 anos (demais casos) + presença física + bons antecedentes + inglês + noções cívicas. Brasileiros podem ter dupla cidadania Brasil-EUA sem perder a brasileira.",
        links: [{ label: "Cidadania americana (N-400)", href: "/immigration/immigrant-visas/us-citizenship" }],
      },
      {
        title: "Compra de Imóvel",
        body: "Residencial, comercial ou investimento. Revisamos contrato, conduzimos o fechamento com atenção a title insurance, FIRPTA (se vendedor estrangeiro), impostos de transferência e estruturação via LLC quando faz sentido.",
        links: [
          { label: "Fechamento residencial", href: "/real-estate/residential-closing" },
          { label: "Calculadora FIRPTA", href: "/tools/firpta-calculator" },
        ],
      },
      {
        title: "Will & Trust (Testamento e Trust)",
        body: "Brasileiros com bens nos EUA precisam de um Will americano — sem ele, seu patrimônio passa pelo probate (inventário americano), processo lento, caro e público. Um Living Trust bem estruturado evita probate e protege seus filhos no Brasil.",
        links: [{ label: "Will & Trust", href: "/business/will-and-trust" }],
      },
      {
        title: "Proteção Patrimonial",
        body: "Médicos, empresários e profissionais expostos a processos precisam de estrutura. Trabalhamos com LLCs, holdings, asset protection trusts e estruturação Brasil-EUA para blindar patrimônio dentro da lei.",
        links: [{ label: "Proteção patrimonial", href: "/business/asset-protection" }],
      },
      {
        title: "Contratos",
        body: "Aluguel comercial, contrato de prestação de serviços, NDAs, contratos de sócios, contratos de vesting. Em inglês, em português, ou bilíngues — escritos para serem executados, não só assinados.",
        links: [{ label: "Contratos", href: "/business/contracts" }],
      },
      {
        title: "Tributação Brasil-EUA",
        body: "FBAR, FATCA, Form 8938, Form 5471, declaração de imóvel estrangeiro à Receita Federal brasileira, tratado de não-bitributação. Trabalhamos com CPAs especializados em casos cross-border.",
        links: [{ label: "Tributação Brasil-EUA", href: "/business/brazil-us-taxation" }],
      },
    ],
    faqTitle: "Perguntas frequentes",
    faq: [
      { q: "Brasileiro pode ter dupla cidadania com EUA?", a: "Sim. Tanto o Brasil quanto os Estados Unidos permitem dupla cidadania. Você não perde a brasileira ao se naturalizar americano." },
      { q: "Quando posso pedir cidadania americana?", a: "Após 3 anos de green card se casado(a) com cidadão(ã) americano(a), ou 5 anos nas demais situações — desde que mantida presença física suficiente nos EUA, bons antecedentes e domínio básico de inglês e civismo americano." },
      { q: "Preciso de Will americano se já tenho testamento no Brasil?", a: "Sim. Testamento brasileiro NÃO rege bens nos EUA. Sem Will americano, seus bens nos EUA passam pelo probate (inventário) sob lei estadual da Flórida — processo público, caro e demorado." },
      { q: "O que é probate e por que evitar?", a: "Probate é o processo judicial de inventário nos EUA. Pode levar 6–18 meses, custar 3–7% do patrimônio em taxas, e é público. Um Living Trust bem estruturado evita probate completamente." },
      { q: "Posso comprar imóvel nos EUA via LLC?", a: "Sim. Comprar via LLC oferece proteção patrimonial, anonimato no registro público e simplificação tributária. Estruturamos LLC + compra integradas." },
      { q: "Preciso reportar conta no Brasil ao IRS?", a: "Sim, se você é US person (cidadão, residente permanente, ou ultrapassou limite de presença física). Obrigações: FBAR (FinCEN 114) se saldo agregado de contas estrangeiras passou US$ 10.000 em qualquer momento do ano, e Form 8938 (FATCA) acima de limites maiores." },
    ],
    cta: "Agendar Consulta",
    breadcrumb: [
      { name: "Home", url: `${SITE.url}/pt` },
      { name: "Já Estou nos EUA", url: `${SITE.url}/pt/already-in-usa` },
    ],
  },
  en: {
    meta: {
      title: "I'm Already in the USA — Green Card, Citizenship, Real Estate | Pinho Law",
      description:
        "For Brazilians already in Florida: marriage green card, citizenship, home purchase, Will & Trust, asset protection. Brazilian-led firm in Orlando.",
    },
    eyebrow: "Journey 3",
    headline: '"I\'m already in the United States."',
    lede:
      "From here, every legal decision builds (or destroys) wealth. You've done the hard part: getting here. Now comes the part most Brazilians delay or handle wrong — green card, citizenship, buying a home, contracts, asset protection, Will & Trust. Decisions that, taken early with the right professional, save tens of thousands of dollars and prevent family disputes.",
    sectionTitle: "What's usually on your radar",
    areas: [
      {
        title: "Marriage Green Card",
        body: "Married to a US citizen: direct path — 10–13 months on average from filing to conditional green card. Married to a green-card holder: timing depends on the Visa Bulletin.",
        links: [
          { label: "Marriage to US citizen", href: "/immigration/immigrant-visas/marriage-us-citizen" },
          { label: "Marriage to LPR", href: "/immigration/immigrant-visas/marriage-lpr" },
        ],
      },
      {
        title: "US Citizenship",
        body: "3 years of green card (married to USC) or 5 years (other cases) + physical presence + good moral character + English + civics. Brazil allows Brazil-US dual citizenship without losing Brazilian.",
        links: [{ label: "US citizenship (N-400)", href: "/immigration/immigrant-visas/us-citizenship" }],
      },
      {
        title: "Home Purchase",
        body: "Residential, commercial, or investment. We review contracts, conduct closing with attention to title insurance, FIRPTA (if foreign seller), transfer taxes, and LLC structuring when appropriate.",
        links: [
          { label: "Residential closing", href: "/real-estate/residential-closing" },
          { label: "FIRPTA Calculator", href: "/tools/firpta-calculator" },
        ],
      },
      {
        title: "Will & Trust",
        body: "Brazilians with US assets need a US will — without it, your estate goes through probate (slow, expensive, public). A well-structured Living Trust avoids probate and protects your children in Brazil.",
        links: [{ label: "Will & Trust", href: "/business/will-and-trust" }],
      },
      {
        title: "Asset Protection",
        body: "Doctors, entrepreneurs, and lawsuit-exposed professionals need structure. We work with LLCs, holdings, asset-protection trusts, and Brazil-US structuring to shield wealth legally.",
        links: [{ label: "Asset protection", href: "/business/asset-protection" }],
      },
      {
        title: "Contracts",
        body: "Commercial leases, services agreements, NDAs, shareholder agreements, vesting contracts. In English, Portuguese, or bilingual — written to be executed, not just signed.",
        links: [{ label: "Business contracts", href: "/business/contracts" }],
      },
      {
        title: "Brazil-US Taxation",
        body: "FBAR, FATCA, Form 8938, Form 5471, foreign-property declaration to Brazilian Receita Federal, double-taxation rules. We work with CPAs specialized in cross-border cases.",
        links: [{ label: "Brazil-US taxation", href: "/business/brazil-us-taxation" }],
      },
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      { q: "Can Brazilians have US-Brazil dual citizenship?", a: "Yes. Both Brazil and the US allow dual citizenship. You don't lose Brazilian citizenship by naturalizing as American." },
      { q: "When can I apply for US citizenship?", a: "After 3 years of green card if married to a USC, or 5 years otherwise — provided physical presence, good moral character, basic English, and civics knowledge." },
      { q: "Do I need a US Will if I already have a Brazilian one?", a: "Yes. Brazilian wills do NOT govern US assets. Without a US will, your US assets go through Florida probate — public, expensive, slow." },
      { q: "What is probate and why avoid it?", a: "Probate is the US judicial estate process. Takes 6–18 months, costs 3–7% of the estate in fees, and is public. A well-structured Living Trust avoids probate entirely." },
      { q: "Can I buy US real estate through an LLC?", a: "Yes. Purchasing through LLC offers asset protection, anonymity in public records, and tax simplification. We structure LLC + purchase together." },
      { q: "Do I need to report my Brazilian account to the IRS?", a: "Yes, if you're a US person (citizen, permanent resident, or exceeded substantial presence). Obligations: FBAR (FinCEN 114) if aggregate foreign account balance exceeded $10,000 at any point in the year, and Form 8938 (FATCA) above higher thresholds." },
    ],
    cta: "Book Consultation",
    breadcrumb: [
      { name: "Home", url: `${SITE.url}/en` },
      { name: "Already in USA", url: `${SITE.url}/en/already-in-usa` },
    ],
  },
  es: {
    meta: {
      title: "Ya Estoy en EE.UU. — Green Card, Ciudadanía, Inmuebles | Pinho Law",
      description:
        "Para brasileños ya en Florida: Green Card por matrimonio, ciudadanía, compra de inmueble, Will & Trust, protección patrimonial.",
    },
    eyebrow: "Jornada 3",
    headline: '"Ya estoy en Estados Unidos."',
    lede:
      "Desde aquí, cada decisión legal construye (o destruye) patrimonio. Green card, ciudadanía, compra de casa, contratos, protección patrimonial, Will & Trust — decisiones que, tomadas a tiempo, ahorran decenas de miles de dólares.",
    sectionTitle: "Lo que normalmente está en tu radar",
    areas: [
      {
        title: "Green Card por Matrimonio",
        body: "Casado(a) con ciudadano(a) estadounidense: ruta directa — 10–13 meses promedio.",
        links: [
          { label: "Matrimonio con ciudadano estadounidense", href: "/immigration/immigrant-visas/marriage-us-citizen" },
          { label: "Matrimonio con LPR", href: "/immigration/immigrant-visas/marriage-lpr" },
        ],
      },
      {
        title: "Ciudadanía Estadounidense",
        body: "3 años de green card (casado con USC) o 5 años. Brasil permite doble ciudadanía.",
        links: [{ label: "Ciudadanía estadounidense (N-400)", href: "/immigration/immigrant-visas/us-citizenship" }],
      },
      {
        title: "Compra de Inmueble",
        body: "Revisamos contratos, conducimos cierre con atención a title insurance, FIRPTA, estructuración LLC.",
        links: [
          { label: "Cierre residencial", href: "/real-estate/residential-closing" },
          { label: "Calculadora FIRPTA", href: "/tools/firpta-calculator" },
        ],
      },
      {
        title: "Will & Trust",
        body: "Brasileños con activos en EE.UU. necesitan testamento estadounidense — sin él, pasa por probate.",
        links: [{ label: "Will & Trust", href: "/business/will-and-trust" }],
      },
      {
        title: "Protección Patrimonial",
        body: "LLCs, holdings, asset-protection trusts, estructuración Brasil-EE.UU.",
        links: [{ label: "Protección patrimonial", href: "/business/asset-protection" }],
      },
      {
        title: "Contratos",
        body: "Arrendamientos, servicios, NDAs, acuerdos de socios — en inglés, portugués o bilingües.",
        links: [{ label: "Contratos empresariales", href: "/business/contracts" }],
      },
      {
        title: "Tributación Brasil-EE.UU.",
        body: "FBAR, FATCA, Form 8938, Form 5471, declaración de inmueble extranjero a Receita Federal.",
        links: [{ label: "Tributación Brasil-EE.UU.", href: "/business/brazil-us-taxation" }],
      },
    ],
    faqTitle: "Preguntas frecuentes",
    faq: [
      { q: "¿Brasileños pueden tener doble ciudadanía EE.UU.-Brasil?", a: "Sí. Ambos países permiten doble ciudadanía." },
      { q: "¿Cuándo puedo pedir ciudadanía estadounidense?", a: "3 años de green card si casado con USC, 5 años en otros casos." },
      { q: "¿Necesito Will estadounidense si tengo testamento brasileño?", a: "Sí. Testamento brasileño NO rige bienes en EE.UU." },
      { q: "¿Qué es el probate y por qué evitarlo?", a: "Proceso judicial sucesorio estadounidense: 6–18 meses, 3–7% del patrimonio en tasas, público." },
      { q: "¿Puedo comprar inmueble vía LLC?", a: "Sí. Protección patrimonial + anonimato + simplificación tributaria." },
      { q: "¿Debo reportar mi cuenta brasileña al IRS?", a: "Sí, si eres US person. FBAR sobre US$ 10.000 agregado. Form 8938 sobre umbrales mayores." },
    ],
    cta: "Agendar Consulta",
    breadcrumb: [
      { name: "Home", url: `${SITE.url}/es` },
      { name: "Ya Estoy en EE.UU.", url: `${SITE.url}/es/already-in-usa` },
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
    path: "/already-in-usa",
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
          </FadeIn>
        </Container>
      </section>

      {/* Areas */}
      <section className="bg-cream py-20">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-semibold text-ink md:text-4xl">
              {c.sectionTitle}
            </h2>
          </FadeIn>
          <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
            {c.areas.map((area, i) => (
              <FadeIn key={area.title} delay={i * 0.04}>
                <article className="flex h-full flex-col rounded-[var(--radius-lg)] border border-gold/20 bg-white p-6 shadow-sm md:p-8">
                  <h3 className="font-heading text-xl font-semibold text-ink">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {area.body}
                  </p>
                  <ul className="mt-4 space-y-1.5 border-t border-border pt-4">
                    {area.links.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:underline"
                        >
                          → {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
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
