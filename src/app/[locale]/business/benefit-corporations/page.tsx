import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import {
  ServicePageTemplate,
  type ServicePageContent,
  type L,
} from "@/components/service/ServicePageTemplate";
import { JsonLd } from "@/components/seo/json-ld";
import { iziScholarlyArticleSchema } from "@/lib/schema";
import { IZI } from "@/lib/constants";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import type { Locale } from "@/i18n/routing";
import type { ReactNode } from "react";

const SLUG = "business/benefit-corporations";

// The E-E-A-T crown jewel. Dra. Izi authored 47 Stetson L. Rev. 333
// (2018), cited by Harvard Law School Forum on Corporate Governance.
// Scholarly citation wall lives on this page + the /publications hub.
// ScholarlyArticle schema is injected in addition to the service schema.
const DATA: Record<L, ServicePageContent> = {
  pt: {
    locale: "pt",
    slug: SLUG,
    immigrationBreadcrumb: "Direito Empresarial",
    breadcrumbLabel: "Benefit Corporations",
    eyebrow: "Direito Empresarial — Publicação Acadêmica",
    h1: "Benefit Corporations na Flórida",
    lede:
      "A estrutura societária para empresas com propósito — explicada por quem publicou o artigo de referência sobre o tema. Dra. Izi Pinho é autora de 47 Stetson L. Rev. 333 (2018), citada pelo Harvard Law School Forum on Corporate Governance.",
    stats: [
      { value: "2014", label: "Lei da Flórida" },
      { value: "35+", label: "Estados americanos" },
      { value: "Harvard", label: "Citou o artigo" },
      { value: "4", label: "Revistas jurídicas citantes" },
    ],
    meta: {
      title: "Benefit Corporations na Flórida 2026 — Artigo citado por Harvard | Pinho Law",
      description:
        "Estrutura jurídica para empresas com propósito socioambiental na Flórida. Dra. Izi Pinho: 47 Stetson L. Rev. 333 (2018), citada pelo Harvard Law School Forum on Corporate Governance.",
    },
    sections: [
      {
        kind: "prose",
        heading: "O que é uma Benefit Corporation?",
        body:
          "Uma Benefit Corporation é um tipo de pessoa jurídica reconhecido pela legislação da Flórida desde 2014 (e adotado por mais de 35 estados americanos). Diferente de uma corporação comum, ela: (1) persegue propósito público definido em seus atos constitutivos, adicional ao lucro; (2) considera stakeholders (funcionários, comunidade, meio ambiente) nas decisões dos diretores — não apenas acionistas; (3) reporta publicamente seu impacto, conforme padrão terceirizado; (4) protege diretores de processos de acionistas que aleguem decisão \"não-maximizadora de lucro\". Não confundir com B Corp (certificação privada da B Lab) ou com 501(c)(3) (organização sem fins lucrativos).",
      },
      {
        kind: "prose",
        heading: "Por que isso importa para o empresário brasileiro",
        body:
          "Se você está construindo um negócio com missão socioambiental nos EUA — tecnologia limpa, food tech sustentável, fintech de inclusão, marca de moda ética — a estrutura societária comum (C-Corp ou LLC tradicional) cria um conflito legal: diretores devem maximizar valor para acionistas. Quando uma decisão socialmente positiva reduz lucro, você está juridicamente exposto. A Benefit Corporation resolve isso: a missão é protegida em lei. Investidores que entram sabem disso. Exits respeitam isso. Decisões controversas têm cobertura legal.",
      },
      {
        kind: "list",
        value: {
          heading: "Quando faz sentido",
          style: "check",
          items: [
            "Sua empresa tem missão socioambiental central, não apenas marketing",
            "Você planeja captar investimento e quer proteger a missão de pressão de short-term",
            "Sua geração de receita pode ser otimizada com clientela e talento que valoriza propósito",
            "Você está estruturando uma empresa nova, pode adotar a forma desde o início",
          ],
        },
      },
      {
        kind: "list",
        value: {
          heading: "Quando NÃO faz sentido",
          style: "check",
          items: [
            "Sua missão socioambiental é discurso, não execução",
            "Você não vai reportar impacto publicamente (obrigação legal)",
            "Você está convertendo uma empresa existente sem alinhar acionistas (custos de conversão e risco de litígio)",
          ],
        },
      },
      {
        kind: "list",
        value: {
          heading: "Como estruturamos",
          style: "numbered",
          items: [
            "Diagnóstico — definição clara da missão pública estatutária",
            "Articles of Incorporation com cláusula de Benefit Corporation (Capítulo 607 dos Estatutos da Flórida)",
            "Bylaws integrados com framework de stakeholder consideration",
            "Padrão de impacto terceirizado (B Lab Impact Assessment, GRI, ou outro)",
            "Compliance reporting anual estruturado",
            "Documentação para investidores explicando proteções legais e expectativas",
          ],
        },
      },
    ],
    faqTitle: "Perguntas frequentes",
    faq: [
      { q: "Benefit Corporation é o mesmo que B Corp?", a: "Não. Benefit Corporation é uma forma jurídica criada por estatuto estadual (Flórida desde 2014). B Corp é uma certificação privada da B Lab. Você pode ser uma sem ser a outra; idealmente, é as duas." },
      { q: "Posso converter minha LLC em Benefit Corporation?", a: "Sim, mediante alteração dos Articles of Organization para Articles of Incorporation com cláusula de benefit. Conversão exige aprovação dos sócios e cuidado com obrigações tributárias (LLC → C-Corp tem implicações fiscais)." },
      { q: "Tenho proteção legal se um acionista me processar por decisão não-maximizadora?", a: "Sim. A legislação da Flórida explicitamente protege diretores de Benefit Corporations que decidam considerando stakeholders, mesmo que reduzam lucro de curto prazo, desde que coerente com a missão estatutária." },
      { q: "Preciso publicar relatório anual?", a: "Sim. Benefit Corporations precisam publicar relatório anual de impacto, avaliado contra padrão terceirizado reconhecido (B Lab é o mais comum)." },
      { q: "Custa mais que uma C-Corp comum?", a: "Em estruturação inicial, um pouco mais — pelo trabalho extra de definição de missão, escolha de padrão e bylaws customizados. Em manutenção anual, custo similar à C-Corp + custo de relatório de impacto." },
      { q: "Investidores VC investem em Benefit Corporations?", a: "Sim, e crescentemente. Fundos focados em impacto (Impact Capital, Calvert) priorizam BCs. Fundos generalistas também aceitam, com alguma due diligence adicional." },
    ],
    relatedTitle: "Relacionado",
    related: [
      { label: "Abrir LLC na Flórida", href: "/business/llc-formation" },
      { label: "C-Corp vs S-Corp vs LLC", href: "/business/c-corp-s-corp" },
      { label: "Publicações acadêmicas da Dra. Izi", href: "/publications" },
    ],
  },
  en: {
    locale: "en",
    slug: SLUG,
    immigrationBreadcrumb: "Business Law",
    breadcrumbLabel: "Benefit Corporations",
    eyebrow: "Business Law — Scholarly Publication",
    h1: "Florida Benefit Corporations",
    lede:
      "The corporate form for purpose-driven companies — explained by the attorney who authored the reference article on it. Dra. Izi Pinho: 47 Stetson L. Rev. 333 (2018), cited by the Harvard Law School Forum on Corporate Governance.",
    stats: [
      { value: "2014", label: "FL statute" },
      { value: "35+", label: "US states adopted" },
      { value: "Harvard", label: "Cited the article" },
      { value: "4", label: "Law reviews citing" },
    ],
    meta: {
      title: "Florida Benefit Corporations — Harvard-Cited Scholarship | Pinho Law",
      description:
        "Corporate form for purpose-driven companies in Florida. Dra. Izi Pinho: 47 Stetson L. Rev. 333 (2018), cited by the Harvard Law School Forum on Corporate Governance.",
    },
    sections: [
      {
        kind: "prose",
        heading: "What is a Benefit Corporation?",
        body:
          'A Benefit Corporation is a corporate form recognized under Florida law since 2014 (and adopted by 35+ US states). Unlike an ordinary corporation, it: (1) pursues a public purpose defined in its organizational documents, additional to profit; (2) considers stakeholders (employees, community, environment) in director decisions — not only shareholders; (3) publicly reports its impact against a third-party standard; (4) protects directors from shareholder suits alleging "non-maximizing" decisions. Not to be confused with B Corp (a B Lab private certification) or 501(c)(3) (non-profit).',
      },
      {
        kind: "prose",
        heading: "Why this matters for Brazilian founders",
        body:
          "If you're building a purpose-driven business in the US — clean tech, sustainable food tech, inclusive fintech, ethical fashion brand — the ordinary corporate form (C-Corp or LLC) creates a legal conflict: directors must maximize value for shareholders. When a socially positive decision reduces profit, you're legally exposed. The Benefit Corporation resolves this: the mission is protected by law. Investors entering know this. Exits respect it. Controversial decisions have legal cover.",
      },
      {
        kind: "list",
        value: {
          heading: "When it makes sense",
          style: "check",
          items: [
            "Your company has a central social/environmental mission, not just marketing",
            "You plan to raise capital and want to protect the mission from short-term pressure",
            "Your revenue benefits from customers and talent who value purpose",
            "You're forming a new company and can adopt the form from inception",
          ],
        },
      },
      {
        kind: "list",
        value: {
          heading: "When it doesn't make sense",
          style: "check",
          items: [
            "Your social/environmental mission is rhetoric, not execution",
            "You won't publicly report impact (it's a legal obligation)",
            "You're converting an existing company without aligning shareholders (conversion costs and litigation risk)",
          ],
        },
      },
      {
        kind: "list",
        value: {
          heading: "How we structure it",
          style: "numbered",
          items: [
            "Diagnostic — clear definition of the statutory public purpose",
            "Articles of Incorporation with Benefit Corporation clause (FL Statutes Ch. 607)",
            "Bylaws integrated with stakeholder-consideration framework",
            "Third-party impact standard (B Lab Impact Assessment, GRI, or other)",
            "Structured annual compliance reporting",
            "Investor documentation explaining legal protections and expectations",
          ],
        },
      },
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      { q: "Is Benefit Corporation the same as B Corp?", a: "No. Benefit Corporation is a legal form created by state statute (Florida since 2014). B Corp is a private certification by B Lab. You can be one without the other; ideally, you're both." },
      { q: "Can I convert my LLC to a Benefit Corporation?", a: "Yes, by amending Articles of Organization to Articles of Incorporation with a benefit clause. Conversion requires member approval and attention to tax consequences (LLC → C-Corp has tax implications)." },
      { q: "Am I legally protected if a shareholder sues me for a non-maximizing decision?", a: "Yes. Florida law explicitly protects Benefit Corporation directors who decide considering stakeholders, even if it reduces short-term profit, as long as coherent with the statutory mission." },
      { q: "Do I have to publish an annual report?", a: "Yes. Benefit Corporations must publish an annual impact report, assessed against a recognized third-party standard (B Lab is most common)." },
      { q: "Does it cost more than a regular C-Corp?", a: "At initial formation, slightly more — due to mission definition, standard selection, and custom bylaws. Annual maintenance cost is similar to a C-Corp + impact reporting cost." },
      { q: "Do VC investors invest in Benefit Corporations?", a: "Yes, increasingly. Impact-focused funds (Impact Capital, Calvert) prioritize BCs. Generalist funds also accept with some additional diligence." },
    ],
    relatedTitle: "Related",
    related: [
      { label: "Florida LLC Formation", href: "/business/llc-formation" },
      { label: "C-Corp vs S-Corp vs LLC", href: "/business/c-corp-s-corp" },
      { label: "Dra. Izi's Published Scholarship", href: "/publications" },
    ],
  },
  es: {
    locale: "es",
    slug: SLUG,
    immigrationBreadcrumb: "Derecho Empresarial",
    breadcrumbLabel: "Benefit Corporations",
    eyebrow: "Derecho Empresarial — Publicación Académica",
    h1: "Benefit Corporations en Florida",
    lede:
      "La estructura societaria para empresas con propósito — explicada por quien publicó el artículo de referencia. Dra. Izi Pinho: 47 Stetson L. Rev. 333 (2018), citada por el Harvard Law School Forum on Corporate Governance.",
    stats: [
      { value: "2014", label: "Ley de Florida" },
      { value: "35+", label: "Estados adoptantes" },
      { value: "Harvard", label: "Citó el artículo" },
      { value: "4", label: "Revistas jurídicas citantes" },
    ],
    meta: {
      title: "Benefit Corporations en Florida — Citada por Harvard | Pinho Law",
      description:
        "Estructura jurídica para empresas con propósito socioambiental en Florida. Dra. Izi Pinho: 47 Stetson L. Rev. 333 (2018).",
    },
    sections: [
      {
        kind: "prose",
        heading: "¿Qué es una Benefit Corporation?",
        body:
          "Tipo de persona jurídica reconocido por Florida desde 2014 y adoptado por 35+ estados. Diferente de una corporación común: persigue propósito público estatutario, considera stakeholders, reporta impacto anualmente, protege a directores de demandas por decisiones \"no maximizadoras\".",
      },
      {
        kind: "prose",
        heading: "Por qué importa para el empresario brasileño",
        body:
          "Si construyes un negocio con misión social/ambiental en EE.UU., la estructura común (C-Corp o LLC) crea conflicto legal: los directores deben maximizar valor para accionistas. La Benefit Corporation resuelve esto protegiendo la misión por ley.",
      },
      {
        kind: "list",
        value: {
          heading: "Cómo la estructuramos",
          style: "numbered",
          items: [
            "Diagnóstico — definición clara del propósito público estatutario",
            "Articles of Incorporation con cláusula de Benefit Corporation",
            "Bylaws con framework de consideración de stakeholders",
            "Estándar de impacto terceirizado (B Lab, GRI, u otro)",
            "Reporte anual de compliance",
            "Documentación para inversores",
          ],
        },
      },
    ],
    faqTitle: "Preguntas frecuentes",
    faq: [
      { q: "¿Benefit Corporation es lo mismo que B Corp?", a: "No. Benefit Corporation es forma jurídica estatal. B Corp es certificación privada de B Lab." },
      { q: "¿Puedo convertir mi LLC a Benefit Corporation?", a: "Sí, enmendando los Articles. Tiene implicaciones tributarias." },
      { q: "¿Tengo protección legal por decisiones no maximizadoras?", a: "Sí, bajo ley de Florida si coherente con la misión estatutaria." },
      { q: "¿Debo publicar reporte anual?", a: "Sí, evaluado contra estándar terceirizado reconocido." },
      { q: "¿Cuesta más que una C-Corp?", a: "Un poco más en estructuración inicial; mantenimiento similar + costo del reporte de impacto." },
      { q: "¿Invierten VCs en Benefit Corporations?", a: "Sí, cada vez más. Fondos de impacto las priorizan." },
    ],
    relatedTitle: "Relacionado",
    related: [
      { label: "Formación de LLC en Florida", href: "/business/llc-formation" },
      { label: "C-Corp vs S-Corp vs LLC", href: "/business/c-corp-s-corp" },
      { label: "Publicaciones de Dra. Izi", href: "/publications" },
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
  const key = locale as L;
  return (
    <>
      {/* ScholarlyArticle JSON-LD lives specifically on this page —
          the Harvard citation wall it generates is the E-E-A-T moat. */}
      <JsonLd data={iziScholarlyArticleSchema()} />
      <ServicePageTemplate
        content={DATA[key]}
        beforeFaq={<ScholarlyCitationWall locale={key} />}
      />
    </>
  );
}

function ScholarlyCitationWall({ locale }: { locale: L }): ReactNode {
  const labels = {
    pt: {
      eyebrow: "Referência Acadêmica",
      heading: "O artigo que define Benefit Corporations na Flórida",
      citationLabel: "Citação",
      citedByLabel: "Citada em",
      readArticle: "Ler artigo completo →",
      year: "2018",
    },
    en: {
      eyebrow: "Scholarly Reference",
      heading: "The article defining Florida Benefit Corporations",
      citationLabel: "Citation",
      citedByLabel: "Cited by",
      readArticle: "Read the full article →",
      year: "2018",
    },
    es: {
      eyebrow: "Referencia Académica",
      heading: "El artículo que define Benefit Corporations en Florida",
      citationLabel: "Citación",
      citedByLabel: "Citado en",
      readArticle: "Leer artículo completo →",
      year: "2018",
    },
  }[locale];

  return (
    <section className="border-t border-border bg-ink py-20 text-cream">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-5 lg:gap-16">
          <FadeIn className="lg:col-span-2">
            <span className="gold-rule" />
            <p className="mt-6 text-xs font-medium uppercase tracking-wider text-gold">
              {labels.eyebrow}
            </p>
            <h2 className="mt-3 font-heading text-2xl font-semibold md:text-3xl">
              {labels.heading}
            </h2>
          </FadeIn>
          <FadeIn delay={0.15} className="lg:col-span-3">
            <article className="rounded-[var(--radius-lg)] border border-gold/30 bg-ink p-8">
              <p className="text-xs font-medium uppercase tracking-wider text-gold">
                {labels.citationLabel}: {IZI.scholarlyArticle.citation} ({labels.year})
              </p>
              <h3 className="mt-3 font-heading text-xl font-semibold leading-snug md:text-2xl">
                <a
                  href={IZI.scholarlyArticle.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  {IZI.scholarlyArticle.name}
                </a>
              </h3>
              <div className="mt-6 space-y-3 border-t border-cream/10 pt-6">
                <p className="text-xs font-medium uppercase tracking-wider text-cream/50">
                  {labels.citedByLabel}
                </p>
                <ul className="space-y-2 text-sm">
                  {IZI.scholarlyArticle.citedBy.map((c) => (
                    <li key={c.name}>
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cream/80 hover:text-gold"
                      >
                        {c.name} ↗
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-6 border-t border-cream/10 pt-4 text-sm">
                <a
                  href={IZI.scholarlyArticle.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline"
                >
                  {labels.readArticle}
                </a>
              </p>
            </article>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
