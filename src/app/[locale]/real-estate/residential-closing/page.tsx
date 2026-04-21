import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import {
  ServicePageTemplate,
  type ServicePageContent,
  type L,
} from "@/components/service/ServicePageTemplate";
import type { Locale } from "@/i18n/routing";

const SLUG = "real-estate/residential-closing";

const DATA: Record<L, ServicePageContent> = {
  pt: {
    locale: "pt",
    slug: SLUG,
    immigrationBreadcrumb: "Imobiliário",
    breadcrumbLabel: "Fechamento Residencial",
    eyebrow: "Direito Imobiliário",
    h1: "Fechamento Residencial na Flórida — Brasileiros",
    lede:
      "Na Flórida, o fechamento imobiliário é conduzido por advogado ou title company. Representamos compradores e vendedores brasileiros em todo o processo — da revisão do contrato ao registro da escritura. Title company representa a transação, NÃO seus interesses. Nós representamos você.",
    stats: [
      { value: "1,5–2,5%", label: "Custo total fechamento" },
      { value: "30–45d", label: "Timeline financiado" },
      { value: "15–21d", label: "Timeline cash" },
      { value: "RON", label: "Remote notarization" },
    ],
    meta: {
      title: "Fechamento Residencial na Flórida 2026 — Brasileiros | Pinho Law",
      description:
        "Advocacia em fechamento residencial na Flórida: revisão de contrato, title search 30–60 anos, title insurance, closing disclosure, registro. PT/EN/ES.",
    },
    sections: [
      {
        kind: "list",
        value: {
          heading: "O que fazemos no seu fechamento",
          style: "check",
          items: [
            "Revisão do contrato (Purchase and Sale Agreement): contingencies (financiamento, inspeção, avaliação), cláusulas desfavoráveis antes da assinatura, negociação de termos",
            "Due diligence: title search 30–60 anos, identificação de liens, hipotecas, servidões, restrições de uso; revisão do HOA (documentos, taxas, restrições, litígios pendentes)",
            "Title Insurance: owner's title policy + lender's policy (quando há financiamento) — protege contra defeitos de título não identificados",
            "Closing Disclosure review: revisamos HUD-1 / Closing Disclosure linha por linha; identificamos cobranças incorretas (comum em fechamentos de compradores não-americanos)",
            "Registro: registramos a escritura (deed) no condado; emitimos comprovante de propriedade",
          ],
        },
      },
      {
        kind: "table",
        value: {
          heading: "Custos típicos de fechamento na Flórida",
          headers: ["Item", "Quem paga", "Valor típico"],
          rows: [
            ["Doc stamps na escritura", "Vendedor", "0,70% do preço"],
            ["Doc stamps na hipoteca", "Comprador", "0,35% do valor financiado"],
            ["Intangible tax", "Comprador", "0,20% do valor financiado"],
            ["Title insurance (owner)", "Negociável (FL: vendedor paga na maioria dos condados)", "0,50–0,57%"],
            ["Title insurance (lender)", "Comprador", "~US$ 25–100 acima do owner"],
            ["Honorários de fechamento", "Comprador + Vendedor (dividido)", "US$ 500–1.500"],
            ["Recording fees", "Comprador", "US$ 10–50"],
            ["Total fechamento (comprador sem financiamento)", "", "1,5–2,5% do preço"],
          ],
        },
      },
    ],
    faqTitle: "Perguntas frequentes",
    faq: [
      { q: "Preciso de advogado no fechamento da Flórida?", a: "Não é obrigatório, mas fortemente recomendado — especialmente para compradores estrangeiros. A title company representa a transação, não seus interesses. Nós representamos você." },
      { q: "Posso fechar remotamente estando no Brasil?", a: "Sim. Trabalhamos com Remote Online Notarization (RON) da Flórida e apostilamento de documentos para clientes que não podem estar presentes fisicamente." },
      { q: "Quanto tempo leva um fechamento típico?", a: "30–45 dias após contrato assinado em compras financiadas. 15–21 dias em cash closing." },
      { q: "Quem paga title insurance na Flórida?", a: "Depende do condado. Na maioria dos condados da Flórida, vendedor paga owner's policy. Comprador sempre paga lender's policy quando há financiamento." },
      { q: "O que é FIRPTA e me afeta?", a: "FIRPTA afeta você se estiver vendendo (não comprando) como estrangeiro — retenção de 10–15% sobre preço bruto. Use nossa Calculadora FIRPTA." },
    ],
    relatedTitle: "Relacionado",
    related: [
      { label: "Comprador estrangeiro (FIRPTA)", href: "/real-estate/foreign-buyer-firpta" },
      { label: "Calculadora FIRPTA", href: "/tools/firpta-calculator" },
      { label: "Abrir LLC para comprar imóvel", href: "/business/llc-formation" },
    ],
  },
  en: {
    locale: "en",
    slug: SLUG,
    immigrationBreadcrumb: "Real Estate",
    breadcrumbLabel: "Residential Closing",
    eyebrow: "Real Estate Law",
    h1: "Florida Residential Closing — Brazilian Clients",
    lede:
      "In Florida, real estate closing is conducted by an attorney or title company. We represent Brazilian buyers and sellers through the entire process — contract review to deed recording. Title companies represent the transaction, NOT your interests. We represent you.",
    stats: [
      { value: "1.5–2.5%", label: "Total closing cost" },
      { value: "30–45d", label: "Financed timeline" },
      { value: "15–21d", label: "Cash timeline" },
      { value: "RON", label: "Remote notarization" },
    ],
    meta: {
      title: "Florida Residential Closing 2026 for Brazilians | Pinho Law",
      description:
        "Attorney representation in Florida residential closings: contract review, 30–60 yr title search, title insurance, closing disclosure, recording. PT/EN/ES.",
    },
    sections: [
      {
        kind: "list",
        value: {
          heading: "What we do in your closing",
          style: "check",
          items: [
            "Contract review (Purchase and Sale Agreement): contingencies, unfavorable clauses before signing, term negotiation",
            "Due diligence: 30–60 yr title search, liens, mortgages, easements, use restrictions; HOA review (docs, fees, restrictions, pending litigation)",
            "Title Insurance: owner's title policy + lender's policy (if financing) — protects against unidentified title defects",
            "Closing Disclosure review: line-by-line HUD-1 / CD review; catch incorrect charges (common for non-US buyers)",
            "Recording: deed filed with county; ownership proof issued",
          ],
        },
      },
      {
        kind: "table",
        value: {
          heading: "Typical Florida closing costs",
          headers: ["Item", "Who pays", "Typical amount"],
          rows: [
            ["Doc stamps on deed", "Seller", "0.70% of price"],
            ["Doc stamps on mortgage", "Buyer", "0.35% of financed amount"],
            ["Intangible tax", "Buyer", "0.20% of financed amount"],
            ["Title insurance (owner)", "Negotiable (FL: seller typically pays)", "0.50–0.57%"],
            ["Title insurance (lender)", "Buyer", "~$25–100 above owner"],
            ["Closing fees", "Buyer + Seller (split)", "$500–1,500"],
            ["Recording fees", "Buyer", "$10–50"],
            ["Total closing (cash buyer)", "", "1.5–2.5% of price"],
          ],
        },
      },
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      { q: "Do I need an attorney for Florida closing?", a: "Not required by law, but strongly recommended — especially for foreign buyers. The title company represents the transaction, not your interests." },
      { q: "Can I close remotely from Brazil?", a: "Yes. We use Florida Remote Online Notarization (RON) and apostille for clients who can't be physically present." },
      { q: "How long does a typical closing take?", a: "30–45 days after signed contract for financed purchases. 15–21 days for cash closings." },
      { q: "Who pays title insurance in Florida?", a: "Depends on the county. In most Florida counties, seller pays owner's policy. Buyer always pays lender's policy when financing." },
      { q: "What is FIRPTA and does it affect me?", a: "FIRPTA affects you when selling (not buying) as a foreigner — 10–15% withholding on gross price. Use our FIRPTA Calculator." },
    ],
    relatedTitle: "Related",
    related: [
      { label: "Foreign buyer (FIRPTA)", href: "/real-estate/foreign-buyer-firpta" },
      { label: "FIRPTA Calculator", href: "/tools/firpta-calculator" },
      { label: "Form LLC to buy property", href: "/business/llc-formation" },
    ],
  },
  es: {
    locale: "es",
    slug: SLUG,
    immigrationBreadcrumb: "Inmobiliario",
    breadcrumbLabel: "Cierre Residencial",
    eyebrow: "Derecho Inmobiliario",
    h1: "Cierre Residencial en Florida — Brasileños",
    lede:
      "En Florida, el cierre inmobiliario es conducido por abogado o title company. Representamos compradores y vendedores brasileños en todo el proceso.",
    stats: [
      { value: "1,5–2,5%", label: "Costo total cierre" },
      { value: "30–45d", label: "Timeline financiado" },
      { value: "15–21d", label: "Timeline cash" },
      { value: "RON", label: "Remote notarization" },
    ],
    meta: {
      title: "Cierre Residencial en Florida 2026 para Brasileños | Pinho Law",
      description:
        "Cierre residencial en Florida: revisión de contrato, title search, title insurance, Closing Disclosure.",
    },
    sections: [
      {
        kind: "list",
        value: {
          heading: "Qué hacemos en tu cierre",
          style: "check",
          items: [
            "Revisión de contrato (Purchase and Sale Agreement)",
            "Due diligence: title search, liens, HOA",
            "Title Insurance (owner + lender)",
            "Revisión línea por línea del Closing Disclosure",
            "Registro de escritura en el condado",
          ],
        },
      },
      {
        kind: "table",
        value: {
          heading: "Costos típicos de cierre en Florida",
          headers: ["Item", "Quién paga", "Monto típico"],
          rows: [
            ["Doc stamps escritura", "Vendedor", "0,70% del precio"],
            ["Doc stamps hipoteca", "Comprador", "0,35% financiado"],
            ["Intangible tax", "Comprador", "0,20% financiado"],
            ["Title insurance (owner)", "Negociable", "0,50–0,57%"],
            ["Honorarios de cierre", "Compartido", "US$ 500–1.500"],
            ["Total (cash buyer)", "", "1,5–2,5% del precio"],
          ],
        },
      },
    ],
    faqTitle: "Preguntas frecuentes",
    faq: [
      { q: "¿Necesito abogado en el cierre de Florida?", a: "No obligatorio, pero fuertemente recomendado — especialmente para compradores extranjeros." },
      { q: "¿Puedo cerrar remotamente desde Brasil?", a: "Sí, vía RON + apóstille." },
      { q: "¿Cuánto tarda un cierre típico?", a: "30–45 días financiado. 15–21 días cash." },
    ],
    relatedTitle: "Relacionado",
    related: [
      { label: "Comprador extranjero (FIRPTA)", href: "/real-estate/foreign-buyer-firpta" },
      { label: "Calculadora FIRPTA", href: "/tools/firpta-calculator" },
      { label: "Formación de LLC", href: "/business/llc-formation" },
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
