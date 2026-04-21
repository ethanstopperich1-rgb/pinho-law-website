import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import {
  ServicePageTemplate,
  type ServicePageContent,
  type L,
} from "@/components/service/ServicePageTemplate";
import type { Locale } from "@/i18n/routing";

const SLUG = "business/c-corp-s-corp";

const DATA: Record<L, ServicePageContent> = {
  pt: {
    locale: "pt",
    slug: SLUG,
    immigrationBreadcrumb: "Direito Empresarial",
    breadcrumbLabel: "C-Corp vs S-Corp vs LLC",
    eyebrow: "Estrutura Societária",
    h1: "C-Corp vs S-Corp vs LLC — Qual para o Empresário Brasileiro?",
    lede:
      "Para brasileiros, a escolha é quase sempre entre LLC e C-Corp. S-Corp está OFF a menos que você se naturalize americano — ela exige acionistas cidadãos/residentes dos EUA.",
    stats: [
      { value: "LLC", label: "Maioria dos casos" },
      { value: "C-Corp", label: "VC / IPO / stock options" },
      { value: "S-Corp ❌", label: "Exclui não-residentes" },
      { value: "21%", label: "C-Corp flat tax (2026)" },
    ],
    meta: {
      title: "C-Corp vs S-Corp vs LLC para Brasileiros 2026 | Pinho Law",
      description:
        "Escolha de estrutura para brasileiros: LLC (passa-through), C-Corp (VC/IPO), S-Corp (não disponível a não-residentes). Implicações fiscais 2026.",
    },
    sections: [
      {
        kind: "table",
        value: {
          heading: "Comparação",
          headers: ["Item", "LLC", "C-Corp", "S-Corp"],
          rows: [
            ["Tributação", "Pass-through (padrão)", "21% corporate + dividendos", "Pass-through"],
            ["Dupla tributação", "Não", "Sim (empresa + dividendos)", "Não"],
            ["Acionistas/Membros", "Sem limite de nacionalidade", "Sem limite", "Apenas cidadãos/residentes EUA"],
            ["Classes de ações", "Flexível", "Múltiplas (Preferred, Common)", "Apenas uma classe"],
            ["Limite de membros", "Sem limite", "Sem limite", "Máximo 100"],
            ["VC-friendly", "Raramente", "Padrão", "Não"],
            ["IPO-possible", "Não", "Sim", "Não"],
            ["Payroll tax (sócio ativo)", "Self-employment (15,3%)", "FICA (7,65% + 7,65%)", "Apenas em salário razoável"],
            ["Stock options / vesting", "Profits interests", "Qualified Stock Options (ISOs)", "Limitado"],
          ],
          note: "Para brasileiros não-residentes: S-Corp está OFF. Para empresários com plano de VC: C-Corp Delaware. Para a maioria dos casos: LLC Florida.",
          noteStyle: "gold",
        },
      },
      {
        kind: "prose",
        heading: "Por que S-Corp não é opção para brasileiros",
        body:
          "S-Corporation tem requisitos específicos sob o Subchapter S do IRC: (1) máximo 100 acionistas; (2) todos devem ser cidadãos americanos ou residentes permanentes (green card holders); (3) apenas uma classe de ações; (4) não pode ser subsidiária de outra corporação. Ponto (2) exclui brasileiros não-residentes. Se um brasileiro comprar ações de S-Corp, a S election é automaticamente revogada.",
      },
      {
        kind: "prose",
        heading: "Quando escolher C-Corp em vez de LLC",
        body:
          "C-Corp é a estrutura padrão dos EUA para: (1) empresas captando venture capital — VCs preferem preferred stock em C-Corp Delaware; (2) empresas planejando IPO; (3) empresas com plano de stock options (ISOs, NSOs) para funcionários; (4) casos onde a dupla tributação não é um problema (ex: reinvestindo lucros). Taxa corporativa federal: 21% (2026).",
      },
      {
        kind: "prose",
        heading: "Por que LLC é o padrão para brasileiros",
        body:
          "LLC combina proteção de corporação com flexibilidade tributária de parceria. Pass-through evita dupla tributação. Sem exigência de reuniões formais, atas, ou resoluções do conselho. Aceita membros estrangeiros sem restrição. Pode eleger tributação como partnership (padrão), single-member disregarded, ou até C-Corp se quiser. Florida DOS filing: US$ 125.",
      },
    ],
    faqTitle: "Perguntas frequentes",
    faq: [
      { q: "Brasileiro não-residente pode ser sócio de S-Corp?", a: "Não. S-Corp requer que todos os acionistas sejam cidadãos americanos ou residentes permanentes (green card holders). Um brasileiro não-residente invalida a S election." },
      { q: "Posso começar como LLC e converter depois?", a: "Sim. LLC → C-Corp é conversão comum (via statutory conversion ou merger) quando startup brasileira planeja captação de VC. Consequências tributárias devem ser analisadas." },
      { q: "Delaware é melhor para incorporar?", a: "Para C-Corp com plano VC, geralmente sim — Delaware tem lei societária madura, tribunal especializado (Court of Chancery), e VCs esperam Delaware. Para LLC operativa na Flórida, Florida é melhor (evita obrigações duplas)." },
      { q: "Preciso ter funcionários para C-Corp?", a: "Não. Pode ter 1 único acionista e sem empregados. Estrutura tributária continua corporate (21% + dividendos)." },
      { q: "Tributação de lucros retidos em C-Corp?", a: "Lucros retidos na C-Corp pagam apenas 21% corporate federal. Só quando distribuídos como dividendos é que há segunda tributação (até 20% LTCG ou 37% ordinary, dependendo)." },
    ],
    relatedTitle: "Relacionado",
    related: [
      { label: "Abrir LLC na Flórida (recomendado)", href: "/business/llc-formation" },
      { label: "Benefit Corporations", href: "/business/benefit-corporations" },
      { label: "Tributação Brasil-EUA", href: "/business/brazil-us-taxation" },
    ],
  },
  en: {
    locale: "en",
    slug: SLUG,
    immigrationBreadcrumb: "Business Law",
    breadcrumbLabel: "C-Corp vs S-Corp vs LLC",
    eyebrow: "Entity Choice",
    h1: "C-Corp vs S-Corp vs LLC — Which for the Brazilian Founder?",
    lede:
      "For Brazilians, the choice is almost always LLC vs C-Corp. S-Corp is OFF unless you naturalize — it requires US-citizen or LPR shareholders.",
    stats: [
      { value: "LLC", label: "Most cases" },
      { value: "C-Corp", label: "VC / IPO / stock options" },
      { value: "S-Corp ❌", label: "Excludes non-residents" },
      { value: "21%", label: "C-Corp flat tax (2026)" },
    ],
    meta: {
      title: "C-Corp vs S-Corp vs LLC for Brazilians 2026 | Pinho Law",
      description:
        "Entity choice for Brazilians: LLC (pass-through), C-Corp (VC/IPO), S-Corp (not available to non-residents). 2026 tax implications.",
    },
    sections: [
      {
        kind: "table",
        value: {
          heading: "Comparison",
          headers: ["Item", "LLC", "C-Corp", "S-Corp"],
          rows: [
            ["Taxation", "Pass-through (default)", "21% corporate + dividends", "Pass-through"],
            ["Double taxation", "No", "Yes (company + dividends)", "No"],
            ["Shareholders/Members", "Nationality unrestricted", "Unrestricted", "US citizens/LPRs only"],
            ["Share classes", "Flexible", "Multiple (Preferred, Common)", "Single class only"],
            ["Member cap", "None", "None", "Max 100"],
            ["VC-friendly", "Rarely", "Standard", "No"],
            ["IPO-possible", "No", "Yes", "No"],
            ["Payroll tax (active owner)", "Self-employment (15.3%)", "FICA (7.65% + 7.65%)", "Only on reasonable salary"],
            ["Stock options / vesting", "Profits interests", "Qualified Stock Options (ISOs)", "Limited"],
          ],
          note: "For non-resident Brazilians: S-Corp is OFF. For VC-planning founders: Delaware C-Corp. For most cases: Florida LLC.",
          noteStyle: "gold",
        },
      },
      {
        kind: "prose",
        heading: "Why S-Corp isn't an option for Brazilians",
        body:
          "S-Corporation has specific requirements under Subchapter S of the IRC: (1) max 100 shareholders; (2) all must be US citizens or permanent residents (green-card holders); (3) only one class of stock; (4) cannot be a subsidiary of another corporation. Point (2) excludes non-resident Brazilians. If a Brazilian buys S-Corp shares, the S election is automatically revoked.",
      },
      {
        kind: "prose",
        heading: "When to choose C-Corp over LLC",
        body:
          "C-Corp is the US default for: (1) VC-raising companies — VCs prefer preferred stock in a Delaware C-Corp; (2) IPO-planning companies; (3) companies with stock-option plans (ISOs, NSOs) for employees; (4) cases where double taxation isn't a problem (e.g., reinvesting profits). Federal corporate rate: 21% (2026).",
      },
      {
        kind: "prose",
        heading: "Why LLC is the default for Brazilians",
        body:
          "LLC combines corporate protection with partnership tax flexibility. Pass-through avoids double taxation. No formal meetings, minutes, or board resolutions required. Accepts foreign members without restriction. Can elect partnership (default), single-member disregarded, or even C-Corp taxation if desired. Florida DOS filing: $125.",
      },
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      { q: "Can a non-resident Brazilian own S-Corp shares?", a: "No. S-Corp requires all shareholders to be US citizens or permanent residents. A non-resident Brazilian invalidates the S election." },
      { q: "Can I start as LLC and convert later?", a: "Yes. LLC → C-Corp is a common conversion (via statutory conversion or merger) when a Brazilian startup plans VC raising. Tax consequences should be analyzed." },
      { q: "Is Delaware better for incorporation?", a: "For VC-planning C-Corps, generally yes — mature corporate law, specialized Court of Chancery, and VCs expect Delaware. For operating LLCs in Florida, Florida is better (avoids duplicate obligations)." },
      { q: "Do I need employees for a C-Corp?", a: "No. Can have 1 shareholder and no employees. Tax structure stays corporate (21% + dividends)." },
      { q: "How are retained earnings taxed in C-Corp?", a: "Retained earnings pay only 21% federal corporate. Second tax happens only when distributed as dividends (up to 20% LTCG or 37% ordinary, depending on holding period)." },
    ],
    relatedTitle: "Related",
    related: [
      { label: "Florida LLC formation (recommended)", href: "/business/llc-formation" },
      { label: "Benefit Corporations", href: "/business/benefit-corporations" },
      { label: "Brazil-US taxation", href: "/business/brazil-us-taxation" },
    ],
  },
  es: {
    locale: "es",
    slug: SLUG,
    immigrationBreadcrumb: "Derecho Empresarial",
    breadcrumbLabel: "C-Corp vs S-Corp vs LLC",
    eyebrow: "Estructura",
    h1: "C-Corp vs S-Corp vs LLC — ¿Cuál para el Empresario Brasileño?",
    lede:
      "Para brasileños, la elección es casi siempre LLC vs C-Corp. S-Corp NO está disponible — exige accionistas ciudadanos/residentes estadounidenses.",
    stats: [
      { value: "LLC", label: "Mayoría de casos" },
      { value: "C-Corp", label: "VC / IPO / stock options" },
      { value: "S-Corp ❌", label: "Excluye no-residentes" },
      { value: "21%", label: "C-Corp flat tax (2026)" },
    ],
    meta: {
      title: "C-Corp vs S-Corp vs LLC para Brasileños 2026 | Pinho Law",
      description:
        "Elección de estructura: LLC, C-Corp, S-Corp (no disponible a no-residentes).",
    },
    sections: [
      {
        kind: "table",
        value: {
          heading: "Comparación",
          headers: ["Item", "LLC", "C-Corp", "S-Corp"],
          rows: [
            ["Tributación", "Pass-through", "21% + dividendos", "Pass-through"],
            ["Accionistas/Miembros", "Sin restricción", "Sin restricción", "Solo ciudadanos/LPRs EE.UU."],
            ["VC-friendly", "Raramente", "Estándar", "No"],
            ["IPO posible", "No", "Sí", "No"],
          ],
          note: "Para brasileños no-residentes: S-Corp NO. Para planes de VC: C-Corp Delaware. Mayoría: LLC Florida.",
          noteStyle: "gold",
        },
      },
      {
        kind: "prose",
        heading: "Por qué S-Corp no es opción",
        body:
          "Subchapter S del IRC exige que todos los accionistas sean ciudadanos/LPRs estadounidenses. Un brasileño no-residente invalida la S election.",
      },
    ],
    faqTitle: "Preguntas frecuentes",
    faq: [
      { q: "¿Brasileño no-residente puede ser accionista de S-Corp?", a: "No. S-Corp exige ciudadanos/LPRs estadounidenses." },
      { q: "¿Puedo empezar como LLC y convertir después?", a: "Sí. LLC → C-Corp es conversión común al planear VC." },
      { q: "¿Delaware es mejor?", a: "Para C-Corp con plan VC, sí. Para LLC operativa en Florida, Florida es mejor." },
    ],
    relatedTitle: "Relacionado",
    related: [
      { label: "Formación de LLC", href: "/business/llc-formation" },
      { label: "Benefit Corporations", href: "/business/benefit-corporations" },
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
