import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import {
  ServicePageTemplate,
  type ServicePageContent,
  type L,
} from "@/components/service/ServicePageTemplate";
import type { Locale } from "@/i18n/routing";

const SLUG = "business/contracts";

const DATA: Record<L, ServicePageContent> = {
  pt: {
    locale: "pt",
    slug: SLUG,
    immigrationBreadcrumb: "Direito Empresarial",
    breadcrumbLabel: "Contratos",
    eyebrow: "Contratos",
    h1: "Contratos Empresariais para Brasileiros nos EUA",
    lede:
      "Contrato mal redigido é pior que nenhum contrato — cria expectativas incorretas, omite proteções essenciais e pode ser interpretado contra quem o redigiu. Redigimos em inglês, português ou bilíngues — pensados para serem executados, não só assinados.",
    stats: [
      { value: "PT/EN/ES", label: "Trilíngue" },
      { value: "6", label: "Contratos mais demandados" },
      { value: "15–40pg", label: "Operating Agreement típico" },
      { value: "14 dias", label: "FDD franquia FL" },
    ],
    meta: {
      title: "Contratos Empresariais para Brasileiros nos EUA 2026 | Pinho Law",
      description:
        "Contratos de sócios, prestação de serviços, NDA, locação comercial, franquia, emprego vs contratado independente. PT/EN/ES, para serem executados.",
    },
    sections: [
      {
        kind: "list",
        value: {
          heading: "Contratos mais demandados",
          style: "check",
          items: [
            "Contratos de Sócios (Operating / Shareholder Agreement) — o documento mais crítico de qualquer empresa com mais de um sócio. Capital contributions, distribuição de lucros, poderes de gestão, vesting, drag-along/tag-along, dissolução, saída de sócio. Custo de não ter: disputas chegam a US$ 50–500K+ em honorários advocatícios.",
            "Contratos de Prestação de Serviços — freelancers, consultores, empresas de serviços. Escopo, entregáveis, prazo, pagamento, IP, limitação de responsabilidade, foro e lei aplicável.",
            "NDA (Non-Disclosure Agreement) — unilateral ou mútuo. Para negociações com parceiros, investidores, fornecedores ou contratados.",
            "Contratos de Locação Comercial — revisão de NNN lease, gross lease e modified gross lease. Identificamos cláusulas desfavoráveis: ausência de cap em CAM charges, personal guarantee desproporcional, cláusulas de exclusividade mal definidas.",
            "Contratos de Franquia — revisão do FDD (Franchise Disclosure Document) e contrato de franquia. Flórida exige entrega do FDD 14 dias antes da assinatura — analisamos cada item material.",
            "Contratos de Employment / Independent Contractor — distinção correta é crítica. Errar resulta em multas do IRS e Department of Labor. Redigimos ambos.",
          ],
        },
      },
    ],
    faqTitle: "Perguntas frequentes",
    faq: [
      { q: "Posso usar templates online?", a: "Templates genéricos resolvem 60–70% dos casos simples. Para contratos com valor material significativo, sócios ou estrutura transnacional Brasil-EUA, template genérico cria risco e falhas contratuais." },
      { q: "Contrato em português é válido nos EUA?", a: "Sim, se partes entenderem. Mas tribunais americanos exigem tradução juramentada para executar. Recomendamos bilíngues com cláusula de prevalência (\"em caso de conflito, versão inglesa prevalece\" ou vice-versa)." },
      { q: "Quanto custa redigir contrato de sócios?", a: "Operating Agreement simples (2–3 sócios, LLC básica): US$ 1.500–3.000. Complexo (vesting, múltiplas classes, saída estruturada): US$ 4.000–8.000." },
      { q: "NDA antes ou depois de conversar com investidor?", a: "Antes. Investidores experientes assinam NDAs. Os que não assinam frequentemente são red flags. Use NDA mútuo." },
      { q: "Franquia é contrato negociável?", a: "Muito pouco. FDD é padrão pelo franqueador. Mas anexos, prazos, territórios e taxas de renovação frequentemente têm margem — vale a revisão." },
    ],
    relatedTitle: "Relacionado",
    related: [
      { label: "Abrir LLC na Flórida", href: "/business/llc-formation" },
      { label: "Operating Agreements", href: "/business/operating-agreements" },
      { label: "Disputas societárias", href: "/business/shareholder-disputes" },
    ],
  },
  en: {
    locale: "en",
    slug: SLUG,
    immigrationBreadcrumb: "Business Law",
    breadcrumbLabel: "Contracts",
    eyebrow: "Contracts",
    h1: "Business Contracts for Brazilians in the US",
    lede:
      "A poorly drafted contract is worse than none — creates wrong expectations, omits essential protections, and can be interpreted against the drafter. We draft in English, Portuguese, or bilingual — designed to be executed, not just signed.",
    stats: [
      { value: "PT/EN/ES", label: "Trilingual" },
      { value: "6", label: "Most-demanded types" },
      { value: "15–40pg", label: "Typical Operating Agreement" },
      { value: "14 days", label: "FL franchise FDD" },
    ],
    meta: {
      title: "Business Contracts for Brazilians in the US 2026 | Pinho Law",
      description:
        "Shareholder, services, NDA, commercial lease, franchise, employment vs independent contractor. PT/EN/ES, drafted for execution.",
    },
    sections: [
      {
        kind: "list",
        value: {
          heading: "Most-demanded contracts",
          style: "check",
          items: [
            "Shareholder / Operating Agreements — the most critical document for any multi-member company. Capital contributions, distributions, governance, vesting, drag-along/tag-along, dissolution, member exit. Cost of not having: disputes reach $50–500K+ in attorney fees.",
            "Services Agreements — freelancers, consultants, service companies. Scope, deliverables, timeline, payment, IP, liability limitation, forum and governing law.",
            "NDA (Non-Disclosure Agreement) — unilateral or mutual. For negotiations with partners, investors, vendors, or contractors.",
            "Commercial Leases — NNN lease, gross lease, modified gross lease review. We flag unfavorable clauses: no CAM-charge cap, disproportionate personal guarantees, poorly defined exclusivity.",
            "Franchise Agreements — FDD (Franchise Disclosure Document) and franchise contract review. Florida requires FDD delivery 14 days before signing — we analyze every material item.",
            "Employment / Independent Contractor — correct classification is critical. Misclassification triggers IRS and DOL penalties. We draft both.",
          ],
        },
      },
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      { q: "Can I use online templates?", a: "Generic templates cover 60–70% of simple cases. For contracts with material value, multi-member structures, or cross-border Brazil-US, generic templates create risk and contractual failures." },
      { q: "Is a Portuguese contract valid in the US?", a: 'Yes, if parties understand. But US courts require sworn translation to enforce. We recommend bilingual with a prevalence clause ("in case of conflict, English version prevails" or vice versa).' },
      { q: "How much to draft a shareholder agreement?", a: "Simple Operating Agreement (2–3 members, basic LLC): $1,500–3,000. Complex (vesting, multiple classes, structured exit): $4,000–8,000." },
      { q: "NDA before or after investor conversation?", a: "Before. Experienced investors sign NDAs. Those who won't are often red flags. Use mutual NDA." },
      { q: "Is a franchise contract negotiable?", a: "Very little. FDD is standardized by franchisor. But schedules, terms, territories, and renewal fees often have margin — review pays off." },
    ],
    relatedTitle: "Related",
    related: [
      { label: "Florida LLC formation", href: "/business/llc-formation" },
      { label: "Operating Agreements", href: "/business/operating-agreements" },
      { label: "Shareholder disputes", href: "/business/shareholder-disputes" },
    ],
  },
  es: {
    locale: "es",
    slug: SLUG,
    immigrationBreadcrumb: "Derecho Empresarial",
    breadcrumbLabel: "Contratos",
    eyebrow: "Contratos",
    h1: "Contratos Empresariales para Brasileños en EE.UU.",
    lede:
      "Contrato mal redactado es peor que ninguno. Redactamos en inglés, portugués o bilingües — pensados para ejecutarse.",
    stats: [
      { value: "PT/EN/ES", label: "Trilingüe" },
      { value: "6", label: "Tipos más demandados" },
      { value: "15–40pg", label: "Operating Agreement típico" },
      { value: "14 días", label: "FDD franquicia FL" },
    ],
    meta: {
      title: "Contratos Empresariales para Brasileños en EE.UU. 2026 | Pinho Law",
      description:
        "Socios, servicios, NDA, arrendamiento comercial, franquicia, empleo vs contratista.",
    },
    sections: [
      {
        kind: "list",
        value: {
          heading: "Contratos más demandados",
          style: "check",
          items: [
            "Acuerdos de Socios / Operating Agreement",
            "Contratos de Servicios",
            "NDA (Non-Disclosure Agreement)",
            "Arrendamiento Comercial (NNN lease)",
            "Franquicia (FDD review, 14 días FL)",
            "Empleo vs Independent Contractor",
          ],
        },
      },
    ],
    faqTitle: "Preguntas frecuentes",
    faq: [
      { q: "¿Puedo usar templates online?", a: "Cubren 60–70% de casos simples. Para estructuras transfronterizas, requiere customización." },
      { q: "¿Contrato en portugués es válido en EE.UU.?", a: "Sí, si partes entienden. Tribunales exigen traducción jurada. Recomendamos bilingües." },
      { q: "¿Cuánto cuesta acuerdo de socios?", a: "Simple: US$ 1.500–3.000. Complejo: US$ 4.000–8.000." },
    ],
    relatedTitle: "Relacionado",
    related: [
      { label: "Formación de LLC", href: "/business/llc-formation" },
      { label: "Operating Agreements", href: "/business/operating-agreements" },
    ],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = DATA[locale as L];
  return createPageMetadata({ title: c.meta.title, description: c.meta.description, path: `/${SLUG}`, locale: locale as Locale });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ServicePageTemplate content={DATA[locale as L]} />;
}
