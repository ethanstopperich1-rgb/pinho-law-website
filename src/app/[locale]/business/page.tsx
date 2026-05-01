import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import {
  ServiceHubTemplate,
  type ServiceHubContent,
  type L,
} from "@/components/service/ServiceHubTemplate";
import type { Locale } from "@/i18n/routing";

const SLUG = "business";

const DATA: Record<L, ServiceHubContent> = {
  pt: {
    locale: "pt",
    slug: SLUG,
    breadcrumbLabel: "Direito Empresarial",
    eyebrow: "Prática",
    h1: "Direito Empresarial para Brasileiros na Flórida",
    lede:
      "Abertura de empresa, contratos, proteção patrimonial, tributação Brasil-EUA, planejamento sucessório. Dra. Izi Pinho: Stetson Law magna cum laude + Harvard Law School citation (Benefit Corporations).",
    stats: [
      { value: "Stetson", label: "Magna cum laude" },
      { value: "Harvard", label: "Citação acadêmica" },
      { value: "LLC", label: "Padrão brasileiro" },
      { value: "PT/EN/ES", label: "Contratos trilíngues" },
    ],
    groups: [
      {
        title: "Estruturas Societárias",
        intro:
          "Qual estrutura para seu negócio? Para brasileiros não-residentes, S-Corp não é opção — só LLC e C-Corp.",
        cards: [
          { title: "Abrir LLC na Flórida", body: "Articles, EIN sem SSN, Operating Agreement, conta bancária, BOI Report FinCEN. Processo 100% remoto.", href: "/business/llc-formation", featured: true },
          { title: "C-Corp vs S-Corp vs LLC", body: "Comparativo completo. S-Corp NÃO admite não-residentes. Para VC/IPO: C-Corp Delaware.", href: "/business/c-corp-s-corp" },
          { title: "Benefit Corporations", body: "Estrutura para empresas com propósito. Dra. Izi publicou 47 Stetson L. Rev. 333 (2018) — citada pelo Harvard Law School.", href: "/business/benefit-corporations", featured: true },
          { title: "Operating Agreements", body: "Documento essencial em LLC com múltiplos sócios. Em PT, EN ou bilíngue.", href: "/business/operating-agreements" },
        ],
      },
      {
        title: "Contratos, Proteção e Sucessão",
        intro: "Os documentos que constroem (ou destroem) patrimônio.",
        cards: [
          { title: "Contratos Empresariais", body: "Sócios, serviços, NDA, locação comercial, franquia, emprego vs contratado.", href: "/business/contracts" },
          { title: "Disputas Societárias", body: "Mediação e litígio: opressão minoritária, quebras de dever fiduciário, dissolução.", href: "/business/shareholder-disputes" },
          { title: "Proteção Patrimonial", body: "5 camadas: LLC por ativo, holding, Florida Homestead, DAPT, umbrella.", href: "/business/asset-protection" },
          { title: "Will & Trust nos EUA", body: "Testamento brasileiro NÃO rege bens nos EUA (lex situs). Revocable Living Trust evita probate.", href: "/business/will-and-trust" },
          { title: "Tributação Brasil-EUA", body: "FBAR, FATCA, Form 8938, Form 5471, CBE/SISBACEN. Brasil e EUA NÃO têm tratado ratificado.", href: "/business/brazil-us-taxation" },
        ],
      },
    ],
    faq: [
      {
        q: "Brasileiro pode abrir LLC nos EUA sem morar no país?",
        a: "Sim. Estrangeiros não-residentes podem abrir LLC na Flórida ou em Delaware sem visto, sem SSN e sem endereço americano. A LLC é pass-through por padrão; imposto federal americano só incide se houver Effectively Connected Income (ECI). Importante: desde janeiro de 2024, toda LLC deve registrar Beneficial Ownership Information (BOI) no FinCEN em até 90 dias da formação — multa de US$ 500/dia até US$ 10.000.",
      },
      {
        q: "Qual estrutura escolher: LLC, S-Corp ou C-Corp?",
        a: "S-Corp NÃO está disponível quando qualquer sócio é estrangeiro não-residente — eliminada para a maioria dos brasileiros. LLC é flexível para imobiliário e operações pequenas. C-Corp é exigida para captar investimento institucional e atende cenários E-2/L-1/EB-5. Avaliamos os 3 com simulação tributária na consulta.",
      },
      {
        q: "Existe tratado tributário Brasil–EUA?",
        a: "Não. O tratado foi NEGOCIADO em 1967 mas NUNCA RATIFICADO pelo Senado americano. Existe apenas o Acordo de Totalização Previdenciária (2018). Brasileiros usam crédito tributário unilateral (foreign tax credit) para evitar bitributação — a estrutura correta da LLC/Corp impacta diretamente esse cálculo.",
      },
      {
        q: "Benefit Corporation na Flórida — vale a pena?",
        a: "Para empresas de impacto (ESG, social enterprise), sim — Flórida codificou Benefit Corporations no §607.501+. Dra. Izi é autoridade publicada nesse tema (47 Stetson L. Rev. 333, citada por Harvard Law School Forum on Corporate Governance). Para negócios convencionais, LLC ou C-Corp comum é suficiente.",
      },
      {
        q: "Preciso de Will & Trust como brasileiro com bens nos EUA?",
        a: "Sim, especialmente com imóvel ou conta bancária. A isenção de imposto sobre herança (estate tax) para não-residentes é apenas US$ 60.000 — acima disso, taxação até 40% federal. Estrutura via LLC com §871(d) election + Trust offshore é a combinação padrão.",
      },
      {
        q: "Vocês registram a empresa E cuidam do visto E-2/L-1/EB-5 juntos?",
        a: "Sim. Em imigração baseada em investimento, a estrutura societária PRECISA sustentar a petição — escritórios separados nas duas áreas frequentemente criam conflitos (ex.: estrutura errada inviabiliza o L-1 ou EB-5). Trabalhamos as duas frentes em paralelo desde o primeiro dia.",
      },
    ],
    faqTitle: "Perguntas Frequentes — Direito Empresarial",
    ctaLabel: "Agendar Consulta Estratégica",
    ctaHref: "/consultation",
  },
  en: {
    locale: "en",
    slug: SLUG,
    breadcrumbLabel: "Business Law",
    eyebrow: "Practice",
    h1: "Business Law for Brazilians in Florida",
    lede:
      "Entity formation, contracts, asset protection, Brazil-US taxation, estate planning. Dra. Izi Pinho: Stetson Law magna cum laude + Harvard Law School citation (Benefit Corporations).",
    stats: [
      { value: "Stetson", label: "Magna cum laude" },
      { value: "Harvard", label: "Academic citation" },
      { value: "LLC", label: "Brazilian default" },
      { value: "PT/EN/ES", label: "Trilingual contracts" },
    ],
    groups: [
      {
        title: "Corporate Structures",
        intro:
          "Which structure for your business? For non-resident Brazilians, S-Corp is not an option — only LLC and C-Corp.",
        cards: [
          { title: "Florida LLC Formation", body: "Articles, EIN without SSN, Operating Agreement, bank account, FinCEN BOI Report. 100% remote process.", href: "/business/llc-formation", featured: true },
          { title: "C-Corp vs S-Corp vs LLC", body: "Full comparison. S-Corp does NOT accept non-residents. For VC/IPO: Delaware C-Corp.", href: "/business/c-corp-s-corp" },
          { title: "Benefit Corporations", body: "Purpose-driven entity structure. Dra. Izi authored 47 Stetson L. Rev. 333 (2018) — cited by Harvard Law School.", href: "/business/benefit-corporations", featured: true },
          { title: "Operating Agreements", body: "Essential document for multi-member LLCs. EN, PT, or bilingual.", href: "/business/operating-agreements" },
        ],
      },
      {
        title: "Contracts, Protection, Succession",
        intro: "The documents that build (or destroy) wealth.",
        cards: [
          { title: "Business Contracts", body: "Shareholder, services, NDA, commercial lease, franchise, employment vs IC.", href: "/business/contracts" },
          { title: "Shareholder Disputes", body: "Mediation and litigation: minority oppression, fiduciary breach, dissolution.", href: "/business/shareholder-disputes" },
          { title: "Asset Protection", body: "5 layers: LLC per asset, holding, Florida Homestead, DAPT, umbrella.", href: "/business/asset-protection" },
          { title: "Will & Trust in the US", body: "Brazilian will does NOT govern US assets (lex situs). Revocable Living Trust avoids probate.", href: "/business/will-and-trust" },
          { title: "Brazil-US Taxation", body: "FBAR, FATCA, Form 8938, Form 5471, CBE/SISBACEN. Brazil-US treaty was never ratified.", href: "/business/brazil-us-taxation" },
        ],
      },
    ],
    faq: [
      {
        q: "Can a Brazilian open a US LLC without living in the country?",
        a: "Yes. Non-resident foreigners can form a Florida or Delaware LLC without a visa, SSN, or US address. LLCs are pass-through by default; US federal tax only applies if the LLC has Effectively Connected Income (ECI). Important: since January 2024, every LLC must file a Beneficial Ownership Information (BOI) report with FinCEN within 90 days of formation — penalty $500/day up to $10,000.",
      },
      {
        q: "Which structure should I pick: LLC, S-Corp, or C-Corp?",
        a: "S-Corp is NOT available when any owner is a non-resident foreigner — ruled out for most Brazilians. LLC is flexible for real estate and small operations. C-Corp is required for institutional fundraising and works for E-2/L-1/EB-5 visa cases. We model all three with a tax simulation during the consultation.",
      },
      {
        q: "Is there a Brazil–US tax treaty?",
        a: "No comprehensive treaty in force. The bilateral treaty was NEGOTIATED in 1967 but NEVER RATIFIED by the US Senate. Only the 2018 Social Security Totalization Agreement exists. Brazilians use unilateral foreign tax credits to avoid double taxation — correct LLC/Corp structuring directly impacts that calculation.",
      },
      {
        q: "Florida Benefit Corporation — worth it?",
        a: "For impact-driven companies (ESG, social enterprise), yes — Florida codified Benefit Corporations at §607.501+. Dra. Izi is a published authority on this topic (47 Stetson L. Rev. 333, cited by Harvard Law School Forum on Corporate Governance). For conventional businesses, an LLC or standard C-Corp is sufficient.",
      },
      {
        q: "Do I need a Will & Trust as a Brazilian with US assets?",
        a: "Yes, especially with US real estate or a US bank account. The estate tax exemption for non-resident aliens is only $60,000 — anything above is taxed up to 40% federally. The standard combination is an LLC with §871(d) election + offshore Trust.",
      },
      {
        q: "Do you handle the company formation AND the E-2/L-1/EB-5 visa together?",
        a: "Yes. In investment-based immigration, the corporate structure MUST support the petition — separate firms on each side often create conflicts (e.g., the wrong LLC structure invalidates the L-1 or EB-5). We work both fronts in parallel from day one.",
      },
    ],
    faqTitle: "Frequently Asked Questions — Business Law",
    ctaLabel: "Book Strategic Consultation",
    ctaHref: "/consultation",
  },
  es: {
    locale: "es",
    slug: SLUG,
    breadcrumbLabel: "Derecho Empresarial",
    eyebrow: "Práctica",
    h1: "Derecho Empresarial para Brasileños en Florida",
    lede:
      "Formación de empresa, contratos, protección patrimonial, tributación Brasil-EE.UU. Dra. Izi Pinho: Stetson Law magna cum laude + cita de Harvard Law School.",
    stats: [
      { value: "Stetson", label: "Magna cum laude" },
      { value: "Harvard", label: "Cita académica" },
      { value: "LLC", label: "Estándar brasileño" },
      { value: "PT/EN/ES", label: "Contratos trilingües" },
    ],
    groups: [
      {
        title: "Estructuras Societarias",
        cards: [
          { title: "Formación de LLC en Florida", body: "Articles, EIN sin SSN, Operating Agreement, cuenta bancaria.", href: "/business/llc-formation", featured: true },
          { title: "C-Corp vs S-Corp vs LLC", body: "S-Corp NO admite no-residentes.", href: "/business/c-corp-s-corp" },
          { title: "Benefit Corporations", body: "Citada por Harvard Law School.", href: "/business/benefit-corporations", featured: true },
          { title: "Operating Agreements", body: "Esencial en LLC multi-miembro.", href: "/business/operating-agreements" },
        ],
      },
      {
        title: "Contratos, Protección y Sucesión",
        cards: [
          { title: "Contratos Empresariales", body: "Socios, servicios, NDA, franquicia.", href: "/business/contracts" },
          { title: "Protección Patrimonial", body: "5 capas.", href: "/business/asset-protection" },
          { title: "Will & Trust", body: "Testamento brasileño NO rige bienes en EE.UU.", href: "/business/will-and-trust" },
          { title: "Tributación Brasil-EE.UU.", body: "FBAR, FATCA, CBE.", href: "/business/brazil-us-taxation" },
        ],
      },
    ],
    faq: [
      {
        q: "¿Puede un brasileño abrir LLC en EE.UU. sin vivir allí?",
        a: "Sí. Extranjeros no residentes pueden formar LLC en Florida o Delaware sin visa, sin SSN y sin dirección estadounidense. La LLC es pass-through por defecto. Importante: desde enero 2024 toda LLC debe registrar BOI con FinCEN en 90 días — multa US$ 500/día hasta US$ 10.000.",
      },
      {
        q: "¿Qué estructura elegir: LLC, S-Corp o C-Corp?",
        a: "S-Corp NO está disponible cuando cualquier socio es extranjero no residente — descartada para la mayoría. LLC es flexible para inmobiliario; C-Corp es necesaria para captar inversión institucional y para casos de visa E-2/L-1/EB-5.",
      },
      {
        q: "¿Existe tratado tributario Brasil–EE.UU.?",
        a: "No hay tratado comprehensivo vigente. Fue negociado en 1967 pero nunca ratificado por el Senado estadounidense. Solo existe el Acuerdo de Totalización de Seguridad Social (2018). Brasileños usan crédito fiscal unilateral para evitar doble tributación.",
      },
      {
        q: "Benefit Corporation en Florida — ¿vale la pena?",
        a: "Para empresas de impacto (ESG, empresa social), sí — Florida codificó Benefit Corporations en §607.501+. La Abogada Izi es autoridad publicada en el tema (47 Stetson L. Rev. 333, citada por Harvard Law).",
      },
      {
        q: "¿Necesito Will & Trust como brasileño con bienes en EE.UU.?",
        a: "Sí, especialmente con inmueble o cuenta bancaria. La exención del impuesto de herencia para no residentes es solo US$ 60.000 — sobre eso, taxación hasta 40% federal. La estructura estándar combina LLC con §871(d) election + Trust offshore.",
      },
      {
        q: "¿Manejan la formación de la empresa Y la visa E-2/L-1/EB-5 juntas?",
        a: "Sí. En inmigración basada en inversión, la estructura societaria DEBE sostener la petición. Trabajamos ambos frentes en paralelo desde el primer día.",
      },
    ],
    faqTitle: "Preguntas Frecuentes — Derecho Empresarial",
    ctaLabel: "Agendar Consulta Estratégica",
    ctaHref: "/consultation",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = DATA[locale as L];
  return createPageMetadata({ title: `${c.h1} | Pinho Law`, description: c.lede, path: `/${SLUG}`, locale: locale as Locale });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ServiceHubTemplate content={DATA[locale as L]} />;
}
