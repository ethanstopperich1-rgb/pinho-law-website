import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import {
  ServicePageTemplate,
  type ServicePageContent,
  type L,
} from "@/components/service/ServicePageTemplate";
import type { Locale } from "@/i18n/routing";

const SLUG = "business/will-and-trust";

const DATA: Record<L, ServicePageContent> = {
  pt: {
    locale: "pt",
    slug: SLUG,
    immigrationBreadcrumb: "Direito Empresarial",
    breadcrumbLabel: "Will & Trust",
    eyebrow: "Planejamento Sucessório",
    h1: "Will e Trust nos EUA para Brasileiros",
    lede:
      "Todo brasileiro com bens nos EUA precisa de um Will americano. Sem ele, seus imóveis, contas bancárias e participações empresariais passam pelo probate — processo público, lento (6–18 meses) e caro (3–7% do patrimônio).",
    stats: [
      { value: "6–18mo", label: "Probate (sem Trust)" },
      { value: "3–7%", label: "Custo do probate" },
      { value: "Público", label: "Registro judicial" },
      { value: "Lex situs", label: "Imóvel segue lei do local" },
    ],
    meta: {
      title: "Will & Trust nos EUA para Brasileiros 2026 | Pinho Law",
      description:
        "Testamento americano e Revocable Living Trust para brasileiros com bens nos EUA. Testamento brasileiro NÃO rege bens americanos (lex situs).",
    },
    sections: [
      {
        kind: "table",
        value: {
          heading: "Will vs Living Trust — qual você precisa?",
          headers: ["Item", "Last Will & Testament", "Revocable Living Trust"],
          rows: [
            ["Evita probate", "Não", "Sim"],
            ["Processo público", "Sim (fica público no tribunal)", "Não (privado)"],
            ["Custo de implementação", "Menor", "Maior"],
            ["Custo pós-morte", "Alto (probate 3–7%)", "Mínimo (sem probate)"],
            ["Eficácia imediata", "Só após validação judicial", "Imediata"],
            ["Revogável em vida", "Sim", "Sim"],
            ["Ideal para", "Patrimônio menor", "Patrimônio relevante"],
          ],
          note:
            "Recomendação para a maioria dos brasileiros com imóvel na Flórida: Revocable Living Trust + Pourover Will + Durable Power of Attorney + Health Care Surrogate.",
          noteStyle: "gold",
        },
      },
      {
        kind: "prose",
        heading: "O que acontece sem Will nos EUA",
        body:
          "Sem testamento americano, seus bens nos EUA passam pelo intestacy (sucessão legal padrão da Flórida): cônjuge sem filhos → cônjuge herda tudo; cônjuge + filhos do casal → cônjuge herda tudo; cônjuge + filhos de outro relacionamento → 50% cônjuge, 50% filhos; sem cônjuge → filhos em partes iguais; filhos menores → tribunal nomeia guardião (pode não ser quem você escolheria). E o processo: meses de tribunal em Orlando, custos de US$ 15.000–50.000+ para patrimônios médios, tudo público no registro do condado.",
      },
      {
        kind: "prose",
        heading: "Estrutura típica para família brasileira com imóvel nos EUA",
        body:
          "REVOCABLE LIVING TRUST (\"The Pinho Family Trust, dated...\"): Grantor/Trustee = você (controle total em vida); Successor Trustee = cônjuge ou filho adulto de confiança; Beneficiários = cônjuge → filhos em partes iguais. Bens transferidos ao Trust: imóvel em Orlando (via deed), conta bancária americana, cotas da LLC. POUROVER WILL: bens não transferidos em vida são vertidos ao trust na morte. DURABLE POWER OF ATTORNEY: permite que seu representante administre bens nos EUA se você ficar incapacitado. HEALTH CARE SURROGATE: decisões médicas se você estiver inconsciente nos EUA.",
      },
      {
        kind: "prose",
        heading: "Sobre o testamento brasileiro e os bens americanos",
        body:
          "Pergunta frequente: \"Já tenho testamento no Brasil — não é suficiente?\" Não. Testamento brasileiro NÃO governa bens localizados nos EUA. A lei americana aplica a lei do estado onde o bem está localizado para imóveis (lex situs). Seu imóvel em Orlando segue a lei da Flórida — não o testamento brasileiro, não o Código Civil brasileiro. Você precisa de ambos: testamento/trust americano para os bens nos EUA, e testamento/planejamento sucessório brasileiro para os bens no Brasil.",
      },
    ],
    faqTitle: "Perguntas frequentes",
    faq: [
      { q: "Quem pode ser Successor Trustee?", a: "Qualquer adulto capaz — cônjuge, filho adulto, irmão, advogado, banco ou trust company. Para beneficiários no Brasil, recomendamos nomear um co-trustee americano para facilitar operações locais." },
      { q: "Trust precisa ser registrado em cartório?", a: "Não. O Revocable Living Trust é um documento privado, não registrado. O que se registra é a escritura do imóvel transferindo-o ao trust." },
      { q: "Posso mudar o trust depois?", a: "Sim. Revocable significa que você pode alterá-lo ou revogá-lo a qualquer momento enquanto estiver vivo e capaz." },
      { q: "E meus filhos menores no Brasil?", a: "Para filhos menores, recomendamos nomear um guardião (guardian) no Will americano. Para bens de filhos menores no trust, estruturamos subtrusts que liberam os recursos em idades definidas (ex: 25% aos 25 anos, 50% aos 30, 100% aos 35) — evitando herança prematura." },
      { q: "Preciso atualizar se comprar novo imóvel?", a: "Sim. Todo imóvel novo deve ser transferido ao trust via nova deed. Fazemos esta transferência como serviço pós-estruturação." },
      { q: "Custa muito mais que um Will simples?", a: "Sim, em implementação inicial: Will simples US$ 800–1.500; estrutura Trust completa US$ 3.500–7.500. Mas economia pós-morte: US$ 15.000–50.000+ em custos de probate evitados." },
    ],
    relatedTitle: "Relacionado",
    related: [
      { label: "Proteção patrimonial", href: "/business/asset-protection" },
      { label: "Comprar imóvel via LLC (FIRPTA)", href: "/real-estate/foreign-buyer-firpta" },
      { label: "Tributação Brasil-EUA", href: "/business/brazil-us-taxation" },
    ],
  },
  en: {
    locale: "en",
    slug: SLUG,
    immigrationBreadcrumb: "Business Law",
    breadcrumbLabel: "Will & Trust",
    eyebrow: "Estate Planning",
    h1: "Will and Trust in the US for Brazilians",
    lede:
      "Every Brazilian with US assets needs a US will. Without one, your real estate, bank accounts, and business interests go through probate — public, slow (6–18 months), and expensive (3–7% of the estate).",
    stats: [
      { value: "6–18mo", label: "Probate (without Trust)" },
      { value: "3–7%", label: "Probate cost" },
      { value: "Public", label: "Court record" },
      { value: "Lex situs", label: "Real estate follows local law" },
    ],
    meta: {
      title: "Will & Trust in the US for Brazilians 2026 | Pinho Law",
      description:
        "US will and Revocable Living Trust for Brazilians with US assets. Brazilian testament does NOT govern US assets (lex situs).",
    },
    sections: [
      {
        kind: "table",
        value: {
          heading: "Will vs Living Trust — which do you need?",
          headers: ["Item", "Last Will & Testament", "Revocable Living Trust"],
          rows: [
            ["Avoids probate", "No", "Yes"],
            ["Public process", "Yes (filed in court)", "No (private)"],
            ["Implementation cost", "Lower", "Higher"],
            ["Post-death cost", "High (probate 3–7%)", "Minimal (no probate)"],
            ["Immediate effect", "Only after court validation", "Immediate"],
            ["Revocable while alive", "Yes", "Yes"],
            ["Best for", "Smaller estate", "Substantial estate"],
          ],
          note:
            "Recommendation for most Brazilians with Florida property: Revocable Living Trust + Pourover Will + Durable Power of Attorney + Health Care Surrogate.",
          noteStyle: "gold",
        },
      },
      {
        kind: "prose",
        heading: "What happens without a US Will",
        body:
          "Without a US will, your US assets go through Florida intestacy: spouse without kids → spouse inherits all; spouse + shared kids → spouse inherits all; spouse + kids from another relationship → 50% spouse, 50% kids; no spouse → kids equally; minor kids → court names a guardian (may not be your choice). And the process: months of court in Orlando, $15,000–50,000+ for average estates, all public in county records.",
      },
      {
        kind: "prose",
        heading: "Typical structure for Brazilian family with US property",
        body:
          'REVOCABLE LIVING TRUST ("The Pinho Family Trust, dated..."): Grantor/Trustee = you (full control while alive); Successor Trustee = spouse or trusted adult child; Beneficiaries = spouse → children equally. Assets transferred to the Trust: Orlando property (via deed), US bank account, LLC shares. POUROVER WILL: assets not transferred during life pour into the trust at death. DURABLE POWER OF ATTORNEY: lets your representative manage US assets if you become incapacitated. HEALTH CARE SURROGATE: medical decisions if you\'re unconscious in the US.',
      },
      {
        kind: "prose",
        heading: "Brazilian will and US assets",
        body:
          'Common question: "I already have a Brazilian will — isn\'t that enough?" No. A Brazilian testament does NOT govern US-located assets. US law applies the law of the state where the asset is located for real estate (lex situs). Your Orlando property follows Florida law — not the Brazilian will, not the Brazilian Civil Code. You need both: US will/trust for US assets, and Brazilian will/estate planning for Brazilian assets.',
      },
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      { q: "Who can be Successor Trustee?", a: "Any capable adult — spouse, adult child, sibling, attorney, bank, or trust company. For Brazilian beneficiaries, we recommend a US-based co-trustee to ease local operations." },
      { q: "Does the Trust need to be filed in court?", a: "No. The Revocable Living Trust is a private document, not filed. What's filed is the property deed transferring it to the trust." },
      { q: "Can I change the trust later?", a: "Yes. Revocable means you can change or revoke it anytime while alive and capable." },
      { q: "What about my minor kids in Brazil?", a: "For minors, we recommend naming a guardian in the US will. For minor beneficiaries' assets in the trust, we structure subtrusts that release funds at defined ages (e.g., 25% at 25, 50% at 30, 100% at 35) — avoiding premature inheritance." },
      { q: "Do I need to update if I buy a new property?", a: "Yes. Every new property must be transferred to the trust via a new deed. We handle this transfer as a post-structuring service." },
      { q: "Does it cost much more than a simple Will?", a: "Yes, at initial implementation: simple Will $800–1,500; full Trust structure $3,500–7,500. But post-death savings: $15,000–50,000+ in probate costs avoided." },
    ],
    relatedTitle: "Related",
    related: [
      { label: "Asset protection", href: "/business/asset-protection" },
      { label: "Buying real estate via LLC (FIRPTA)", href: "/real-estate/foreign-buyer-firpta" },
      { label: "Brazil-US taxation", href: "/business/brazil-us-taxation" },
    ],
  },
  es: {
    locale: "es",
    slug: SLUG,
    immigrationBreadcrumb: "Derecho Empresarial",
    breadcrumbLabel: "Will & Trust",
    eyebrow: "Planificación Sucesoria",
    h1: "Testamento y Trust en EE.UU. para Brasileños",
    lede:
      "Todo brasileño con bienes en EE.UU. necesita testamento estadounidense. Sin él, sus bienes pasan por probate — público, lento (6–18 meses) y caro (3–7% del patrimonio).",
    stats: [
      { value: "6–18m", label: "Probate (sin Trust)" },
      { value: "3–7%", label: "Costo del probate" },
      { value: "Público", label: "Registro judicial" },
      { value: "Lex situs", label: "Inmueble sigue ley local" },
    ],
    meta: {
      title: "Testamento y Trust en EE.UU. para Brasileños 2026 | Pinho Law",
      description:
        "Testamento estadounidense y Revocable Living Trust. Testamento brasileño NO rige bienes en EE.UU. (lex situs).",
    },
    sections: [
      {
        kind: "table",
        value: {
          heading: "Will vs Living Trust — ¿cuál necesitas?",
          headers: ["Item", "Last Will & Testament", "Revocable Living Trust"],
          rows: [
            ["Evita probate", "No", "Sí"],
            ["Proceso público", "Sí", "No (privado)"],
            ["Costo post-muerte", "Alto (3–7%)", "Mínimo"],
            ["Ideal para", "Patrimonio menor", "Patrimonio relevante"],
          ],
          note: "Recomendación para brasileños con propiedad en Florida: Revocable Living Trust + Pourover Will + DPOA + Health Care Surrogate.",
          noteStyle: "gold",
        },
      },
      {
        kind: "prose",
        heading: "Testamento brasileño y bienes en EE.UU.",
        body:
          "Testamento brasileño NO rige bienes en EE.UU. La ley estadounidense aplica lex situs — la ley del estado donde está el bien. Necesitas ambos: testamento/trust estadounidense + planificación brasileña.",
      },
    ],
    faqTitle: "Preguntas frecuentes",
    faq: [
      { q: "¿Quién puede ser Successor Trustee?", a: "Cualquier adulto capaz. Para beneficiarios en Brasil, recomendamos co-trustee estadounidense." },
      { q: "¿El Trust debe registrarse?", a: "No. Es documento privado." },
      { q: "¿Puedo cambiar el trust?", a: "Sí. Revocable = alterable mientras estés vivo y capaz." },
      { q: "¿Y mis hijos menores en Brasil?", a: "Recomendamos guardian en el will + subtrusts con liberación por edad." },
    ],
    relatedTitle: "Relacionado",
    related: [
      { label: "Protección patrimonial", href: "/business/asset-protection" },
      { label: "Comprar inmueble vía LLC (FIRPTA)", href: "/real-estate/foreign-buyer-firpta" },
      { label: "Tributación Brasil-EE.UU.", href: "/business/brazil-us-taxation" },
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
