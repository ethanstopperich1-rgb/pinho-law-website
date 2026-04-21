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
