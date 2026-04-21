import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import {
  ServicePageTemplate,
  type ServicePageContent,
  type L,
} from "@/components/service/ServicePageTemplate";
import type { Locale } from "@/i18n/routing";

const SLUG = "business/llc-formation";

// Copy per website/content/spec-part-7.md §LLC Formation.
const DATA: Record<L, ServicePageContent> = {
  pt: {
    locale: "pt",
    slug: SLUG,
    immigrationBreadcrumb: "Direito Empresarial",
    breadcrumbLabel: "Abrir LLC",
    eyebrow: "Direito Empresarial",
    h1: "Abrir LLC na Flórida para Brasileiros",
    lede:
      "LLC (Limited Liability Company) é a estrutura mais usada por brasileiros nos EUA: proteção patrimonial, tributação simplificada, abertura em 1–3 dias úteis. Para não-residentes, S-Corp NÃO é opção — só LLC e C-Corp funcionam.",
    stats: [
      { value: "US$ 125", label: "Filing fee FL" },
      { value: "1–3 dias", label: "Sunbiz approval" },
      { value: "US$ 138,75", label: "Annual report" },
      { value: "BOI", label: "FinCEN obrigatório" },
    ],
    meta: {
      title: "Abrir LLC na Flórida 2026 — Guia para Brasileiros | Pinho Law",
      description:
        "Abrir LLC na Flórida: Articles, EIN sem SSN, Operating Agreement bilíngue, conta bancária, BOI Report FinCEN. Para brasileiros não-residentes.",
    },
    sections: [
      {
        kind: "table",
        value: {
          heading: "Por que LLC e não Corporation?",
          headers: ["Item", "LLC", "C-Corp", "S-Corp"],
          rows: [
            ["Proteção patrimonial", "Sólida", "Sólida", "Sólida"],
            ["Dupla tributação", "Não (pass-through)", "Sim (dividendos)", "Não"],
            ["Abertura", "1–3 dias", "1–5 dias", "Requer S election"],
            ["Burocracia anual", "Mínima", "Atas, reuniões", "Moderada"],
            ["Ideal para", "Maioria dos negócios", "VC/IPO", "Profissionais americanos"],
            ["Estrangeiro como dono", "✅ Sim", "✅ Sim", "❌ Não"],
          ],
          note:
            "Para brasileiros: LLC é quase sempre a escolha certa. S-Corp não admite estrangeiro como acionista — armadilha comum para quem copia conselho genérico americano.",
          noteStyle: "gold",
        },
      },
      {
        kind: "list",
        value: {
          heading: "O que fazemos na abertura da sua LLC",
          style: "numbered",
          items: [
            "Consulta de nome — verificamos disponibilidade no Sunbiz e evitamos conflito com marcas registradas no USPTO",
            "Articles of Organization — protocolo no Florida DOS (1–3 dias úteis, ou 1 dia com expedited)",
            "EIN — Employer Identification Number via IRS Form SS-4 (obrigatório para conta bancária e contratações)",
            "Operating Agreement — documento que define regras, quotas, distribuições, direitos de saída dos sócios",
            "Registered Agent — obrigatório anualmente; fornecemos ou indicamos",
            "Conta bancária — orientamos na abertura (Chase, Bank of America, Mercury, Relay para estrangeiros)",
            "BOI Report (FinCEN) — desde 2024, toda LLC deve reportar Beneficial Ownership Information ao FinCEN",
          ],
        },
      },
      {
        kind: "table",
        value: {
          heading: "Custos de abertura de LLC na Flórida",
          headers: ["Item", "Custo"],
          rows: [
            ["Florida DOS filing fee", "US$ 125"],
            ["Expedited (1 dia útil)", "+ US$ 30"],
            ["Registered Agent (1 ano)", "US$ 50–150"],
            ["Annual Report (a partir do 2º ano)", "US$ 138,75/ano"],
            ["EIN (IRS)", "Gratuito"],
            ["Honorários Pinho Law (LLC simples)", "A partir de US$ 1.500"],
            ["Honorários LLC multi-membros / operating complexo", "US$ 3.500–6.000"],
          ],
        },
      },
      {
        kind: "prose",
        heading: "Operating Agreement — o documento que a maioria ignora",
        body:
          "O Operating Agreement não é obrigatório pela lei da Flórida, mas é essencial. Sem ele: em caso de saída de sócio, regras do Florida LLC Act se aplicam (podem forçar dissolução); banco pode recusar abertura de conta; conflitos entre sócios ficam sem solução contratual clara; comprador de imóvel pode exigir como parte do closing. Redigimos Operating Agreements de 15–40 páginas cobrindo: capital contributions, distributions, voting rights, manager vs member-managed, buy-sell provisions, dissolution, restrictions on transfer.",
      },
    ],
    faqTitle: "Perguntas frequentes",
    faq: [
      { q: "Brasileiro pode ser dono de LLC sem morar nos EUA?", a: "Sim, sem restrição. Não-residentes podem ser membros de LLC americana. Precisam apenas de ITIN ou passaporte estrangeiro para o EIN." },
      { q: "LLC protege meus bens pessoais?", a: "Sim, se mantida separada. A proteção pode ser \"perfurada\" (piercing the corporate veil) se você misturar contas pessoais e empresariais, não tiver Operating Agreement ou usar a LLC para fins fraudulentos." },
      { q: "Preciso de BOI Report? O que é isso?", a: "Sim. Desde 1º de janeiro de 2024, toda LLC/Corporation deve protocolar o Beneficial Ownership Information Report no FinCEN. LLCs criadas em 2025+ têm 90 dias após a criação. Cuidamos do protocolo." },
      { q: "Posso ter LLC aqui e empresa no Brasil ao mesmo tempo?", a: "Sim. Muitos clientes têm CNPJ no Brasil e LLC nos EUA operando em paralelo ou integrado. Trabalhamos a estruturação transnacional com parceiros tributaristas." },
      { q: "Quanto tempo até a conta bancária americana?", a: "LLC abre em 1–3 dias. EIN 4–6 semanas sem SSN. Conta bancária: mais 1–2 semanas após EIN. Total: 6–10 semanas do início à operação." },
      { q: "Preciso vir aos EUA para abrir?", a: "Não. Processo 100% remoto, incluindo abertura de conta em bancos online (Mercury, Relay) que aceitam não-residentes sem viagem aos EUA." },
    ],
    relatedTitle: "Relacionado",
    related: [
      { label: "C-Corp vs S-Corp vs LLC", href: "/business/c-corp-s-corp" },
      { label: "Operating Agreements", href: "/business/operating-agreements" },
      { label: "Benefit Corporations (Harvard citation)", href: "/business/benefit-corporations" },
      { label: "Comprar imóvel via LLC (FIRPTA)", href: "/real-estate/foreign-buyer-firpta" },
    ],
  },
  en: {
    locale: "en",
    slug: SLUG,
    immigrationBreadcrumb: "Business Law",
    breadcrumbLabel: "Form LLC",
    eyebrow: "Business Law",
    h1: "Florida LLC Formation for Brazilians",
    lede:
      "LLC (Limited Liability Company) is the most-used structure by Brazilians in the US: asset protection, simplified taxation, 1–3 business days to form. For non-residents, S-Corp is NOT available — only LLC and C-Corp work.",
    stats: [
      { value: "$125", label: "FL filing fee" },
      { value: "1–3 days", label: "Sunbiz approval" },
      { value: "$138.75", label: "Annual report" },
      { value: "BOI", label: "FinCEN required" },
    ],
    meta: {
      title: "Florida LLC Formation 2026 — Guide for Brazilians | Pinho Law",
      description:
        "Florida LLC formation: Articles, EIN without SSN, bilingual Operating Agreement, bank account, FinCEN BOI Report. For non-resident Brazilians.",
    },
    sections: [
      {
        kind: "table",
        value: {
          heading: "Why LLC and not Corporation?",
          headers: ["Item", "LLC", "C-Corp", "S-Corp"],
          rows: [
            ["Asset protection", "Solid", "Solid", "Solid"],
            ["Double taxation", "No (pass-through)", "Yes (dividends)", "No"],
            ["Formation", "1–3 days", "1–5 days", "Requires S election"],
            ["Annual admin", "Minimal", "Minutes, meetings", "Moderate"],
            ["Best for", "Most businesses", "VC/IPO", "US-citizen professionals"],
            ["Foreign owner", "✅ Yes", "✅ Yes", "❌ No"],
          ],
          note:
            "For Brazilians: LLC is almost always the right choice. S-Corp does not admit foreign shareholders — common trap for those copying generic US advice.",
          noteStyle: "gold",
        },
      },
      {
        kind: "list",
        value: {
          heading: "What we do when forming your LLC",
          style: "numbered",
          items: [
            "Name search — Sunbiz availability + USPTO trademark-conflict check",
            "Articles of Organization — Florida DOS filing (1–3 business days, or 1 day expedited)",
            "EIN — Employer Identification Number via IRS Form SS-4 (required for bank and hiring)",
            "Operating Agreement — defines rules, quotas, distributions, member exit rights",
            "Registered Agent — annually required; we provide or recommend",
            "Bank account — we guide opening (Chase, Bank of America, Mercury, Relay for foreigners)",
            "BOI Report (FinCEN) — since 2024, every LLC must file Beneficial Ownership Information with FinCEN",
          ],
        },
      },
      {
        kind: "table",
        value: {
          heading: "Florida LLC formation costs",
          headers: ["Item", "Cost"],
          rows: [
            ["Florida DOS filing fee", "$125"],
            ["Expedited (1 business day)", "+ $30"],
            ["Registered Agent (1 year)", "$50–150"],
            ["Annual Report (from year 2)", "$138.75/yr"],
            ["EIN (IRS)", "Free"],
            ["Pinho Law fees (simple LLC)", "From $1,500"],
            ["Multi-member / complex Operating", "$3,500–6,000"],
          ],
        },
      },
      {
        kind: "prose",
        heading: "Operating Agreement — the document most skip",
        body:
          "The Operating Agreement isn't mandatory under Florida law, but it's essential. Without it: in case of member exit, Florida LLC Act default rules apply (may force dissolution); bank may refuse to open an account; member conflicts have no contractual resolution; real-estate closings may demand it. We draft 15–40-page Operating Agreements covering capital contributions, distributions, voting rights, manager vs member-managed, buy-sell provisions, dissolution, transfer restrictions.",
      },
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      { q: "Can a Brazilian own an LLC without living in the US?", a: "Yes, no restriction. Non-residents can be LLC members. You need only an ITIN or foreign passport for the EIN." },
      { q: "Does LLC protect my personal assets?", a: 'Yes, if kept separate. Protection can be "pierced" (piercing the corporate veil) if you mix personal and business accounts, lack an Operating Agreement, or use the LLC for fraud.' },
      { q: "Do I need a BOI Report? What is it?", a: "Yes. Since January 1, 2024, every LLC/Corporation must file a Beneficial Ownership Information Report with FinCEN. LLCs created in 2025+ have 90 days. We handle the filing." },
      { q: "Can I have an LLC here and a Brazilian company at the same time?", a: "Yes. Many clients run CNPJ in Brazil and LLC in the US in parallel or integrated. We structure cross-border setup with tax partners." },
      { q: "How long until a US bank account?", a: "LLC opens in 1–3 days. EIN takes 4–6 weeks without SSN. Bank account: another 1–2 weeks after EIN. Total: 6–10 weeks from start to operating." },
      { q: "Do I need to come to the US to open?", a: "No. 100% remote process, including bank opening via online banks (Mercury, Relay) that accept non-residents without US travel." },
    ],
    relatedTitle: "Related",
    related: [
      { label: "C-Corp vs S-Corp vs LLC", href: "/business/c-corp-s-corp" },
      { label: "Operating Agreements", href: "/business/operating-agreements" },
      { label: "Benefit Corporations (Harvard citation)", href: "/business/benefit-corporations" },
      { label: "Buying real estate via LLC (FIRPTA)", href: "/real-estate/foreign-buyer-firpta" },
    ],
  },
  es: {
    locale: "es",
    slug: SLUG,
    immigrationBreadcrumb: "Derecho Empresarial",
    breadcrumbLabel: "Formar LLC",
    eyebrow: "Derecho Empresarial",
    h1: "Formación de LLC en Florida para Brasileños",
    lede:
      "LLC es la estructura más usada por brasileños en EE.UU.: protección patrimonial, tributación simplificada, formación en 1–3 días hábiles. Para no-residentes, S-Corp NO es opción.",
    stats: [
      { value: "US$ 125", label: "Filing fee FL" },
      { value: "1–3 días", label: "Aprobación Sunbiz" },
      { value: "US$ 138,75", label: "Annual report" },
      { value: "BOI", label: "FinCEN obligatorio" },
    ],
    meta: {
      title: "Formación de LLC en Florida 2026 — Guía para Brasileños | Pinho Law",
      description:
        "Formación de LLC en Florida: Articles, EIN sin SSN, Operating Agreement, cuenta bancaria, BOI Report FinCEN.",
    },
    sections: [
      {
        kind: "table",
        value: {
          heading: "¿Por qué LLC y no Corporation?",
          headers: ["Item", "LLC", "C-Corp", "S-Corp"],
          rows: [
            ["Protección patrimonial", "Sólida", "Sólida", "Sólida"],
            ["Doble tributación", "No (pass-through)", "Sí (dividendos)", "No"],
            ["Formación", "1–3 días", "1–5 días", "Requiere S election"],
            ["Propietario extranjero", "✅ Sí", "✅ Sí", "❌ No"],
          ],
          note: "Para brasileños: LLC casi siempre. S-Corp no admite accionistas extranjeros.",
          noteStyle: "gold",
        },
      },
      {
        kind: "list",
        value: {
          heading: "Qué hacemos en la formación",
          style: "numbered",
          items: [
            "Búsqueda de nombre en Sunbiz + USPTO",
            "Articles of Organization en Florida DOS",
            "EIN vía IRS Form SS-4",
            "Operating Agreement",
            "Registered Agent",
            "Cuenta bancaria (Mercury, Relay para extranjeros)",
            "BOI Report en FinCEN",
          ],
        },
      },
      {
        kind: "table",
        value: {
          heading: "Costos",
          headers: ["Item", "Costo"],
          rows: [
            ["Florida DOS filing fee", "US$ 125"],
            ["Registered Agent (1 año)", "US$ 50–150"],
            ["Annual Report", "US$ 138,75/año"],
            ["EIN (IRS)", "Gratis"],
            ["Honorarios Pinho Law (LLC simple)", "Desde US$ 1.500"],
          ],
        },
      },
    ],
    faqTitle: "Preguntas frecuentes",
    faq: [
      { q: "¿Brasileño puede ser dueño de LLC sin vivir en EE.UU.?", a: "Sí, sin restricción. Solo necesita ITIN o pasaporte extranjero para el EIN." },
      { q: "¿La LLC protege mis bienes personales?", a: "Sí, si se mantiene separada. Puede perforarse si mezcla cuentas o usa la LLC para fraude." },
      { q: "¿Necesito BOI Report?", a: "Sí. Desde enero 2024, toda LLC debe presentar Beneficial Ownership Information en FinCEN." },
      { q: "¿Cuánto tarda hasta tener cuenta bancaria?", a: "LLC en 1–3 días, EIN 4–6 semanas sin SSN, cuenta bancaria: 1–2 semanas tras EIN. Total: 6–10 semanas." },
    ],
    relatedTitle: "Relacionado",
    related: [
      { label: "C-Corp vs S-Corp vs LLC", href: "/business/c-corp-s-corp" },
      { label: "Operating Agreements", href: "/business/operating-agreements" },
      { label: "Benefit Corporations", href: "/business/benefit-corporations" },
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
