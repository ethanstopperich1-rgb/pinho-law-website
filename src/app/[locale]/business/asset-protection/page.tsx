import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import {
  ServicePageTemplate,
  type ServicePageContent,
  type L,
} from "@/components/service/ServicePageTemplate";
import type { Locale } from "@/i18n/routing";

const SLUG = "business/asset-protection";

const DATA: Record<L, ServicePageContent> = {
  pt: {
    locale: "pt",
    slug: SLUG,
    immigrationBreadcrumb: "Direito Empresarial",
    breadcrumbLabel: "Proteção Patrimonial",
    eyebrow: "Patrimônio",
    h1: "Proteção Patrimonial para Brasileiros nos EUA",
    lede:
      "Médicos, dentistas, advogados, empresários e profissionais expostos a processos precisam de estrutura jurídica que proteja patrimônio ANTES de qualquer demanda. Feito depois do processo começar, é fraude (fraudulent transfer). 5 camadas para blindar dentro da lei.",
    stats: [
      { value: "5", label: "Camadas" },
      { value: "Ilimitada", label: "Homestead FL" },
      { value: "US$ 1–5M", label: "Umbrella insurance" },
      { value: "Pré-demanda", label: "Obrigatório" },
    ],
    meta: {
      title: "Proteção Patrimonial para Brasileiros nos EUA 2026 | Pinho Law",
      description:
        "Estrutura de proteção patrimonial em 5 camadas: LLC por ativo, holding, Florida Homestead, DAPT, umbrella insurance. Para médicos, empresários, profissionais.",
    },
    sections: [
      {
        kind: "list",
        value: {
          heading: "As camadas de proteção",
          style: "numbered",
          items: [
            "Camada 1 — LLC por ativo: cada imóvel de investimento em LLC separada. Processo em um imóvel não alcança o outro em LLC separada.",
            "Camada 2 — LLC Holding: LLC holding acima das LLCs de imóvel. Dono é a holding; holding é seu. Barreira adicional + simplifica distribuição de renda.",
            "Camada 3 — Homestead Exemption (Flórida): residência principal é ilimitadamente protegida de credores (exceto hipoteca e IPTU). Médico com processo milionário não pode perder a casa na Flórida — desde que corretamente homesteaded.",
            "Camada 4 — Asset Protection Trust: Domestic Asset Protection Trust (DAPT) em Nevada ou Delaware. Você pode ser beneficiário do próprio trust com proteção contra credores.",
            "Camada 5 — Umbrella Insurance: política de US$ 1–5 milhões é a proteção mais barata e deve ser a PRIMEIRA linha — não a última.",
          ],
        },
      },
      {
        kind: "prose",
        heading: "Para profissionais de saúde brasileiros",
        body:
          "Médicos brasileiros com clínica nos EUA enfrentam risco específico de malpractice. Estrutura recomendada: Clínica em LLC (ou PA — Professional Association, exigida para profissionais licenciados em FL) + Imóvel do consultório em LLC separada da clínica + Bens pessoais (casa, investimentos) FORA da LLC da clínica + Medical malpractice insurance robusta + Umbrella policy pessoal.",
      },
      {
        kind: "callout",
        value: {
          tone: "alert",
          badgeLabel: "Atenção",
          heading: "Proteção pós-demanda = fraude",
          body:
            "Transferir ativos depois de receber demanda judicial = fraudulent transfer (transferência fraudulenta). Juízes podem reverter transferências e penalizar quem fez. A proteção patrimonial precisa ser implementada ANTES de qualquer processo ou reclamação séria.",
        },
      },
    ],
    faqTitle: "Perguntas frequentes",
    faq: [
      { q: "Homestead Exemption da Flórida protege 100% da casa?", a: "Em termos de valor: sim, ilimitadamente. Em termos de área: sim até 0,5 acre dentro de município ou 160 acres fora. Você precisa ter declarado homestead (Form DR-501)." },
      { q: "Quando começar?", a: "Imediatamente ao comprar o imóvel ou começar a atividade profissional. Ou AGORA se você ainda não começou — e não há demanda pendente." },
      { q: "Credor brasileiro pode atingir bens nos EUA?", a: "Depende de como foi estruturado. LLC + trust bem desenhados em Florida/Nevada/Delaware oferecem barreiras significativas contra credores brasileiros que buscam execução nos EUA." },
      { q: "Umbrella insurance é suficiente?", a: "Como primeira linha, sim. Mas para patrimônios de US$ 1M+, combine com LLCs + Trust. Umbrella cobre até o limite da apólice; LLCs/Trust protegem acima." },
      { q: "Quanto custa implementar?", a: "Estrutura básica (LLC + umbrella): US$ 2.000–4.000. Completa (LLC holding + DAPT + trust sucessório): US$ 8.000–20.000." },
    ],
    relatedTitle: "Relacionado",
    related: [
      { label: "Will & Trust", href: "/business/will-and-trust" },
      { label: "Abrir LLC na Flórida", href: "/business/llc-formation" },
      { label: "Comprar imóvel via LLC (FIRPTA)", href: "/real-estate/foreign-buyer-firpta" },
    ],
  },
  en: {
    locale: "en",
    slug: SLUG,
    immigrationBreadcrumb: "Business Law",
    breadcrumbLabel: "Asset Protection",
    eyebrow: "Wealth",
    h1: "Asset Protection for Brazilians in the US",
    lede:
      "Doctors, dentists, attorneys, entrepreneurs, and lawsuit-exposed professionals need structure that shields wealth BEFORE any claim. Done after a lawsuit starts, it's fraudulent transfer. 5 layers to shield legally.",
    stats: [
      { value: "5", label: "Layers" },
      { value: "Unlimited", label: "FL Homestead" },
      { value: "$1–5M", label: "Umbrella insurance" },
      { value: "Pre-claim", label: "Mandatory" },
    ],
    meta: {
      title: "Asset Protection for Brazilians in the US 2026 | Pinho Law",
      description:
        "5-layer asset protection: LLC per asset, holding, Florida Homestead, DAPT, umbrella insurance. For doctors, entrepreneurs, professionals.",
    },
    sections: [
      {
        kind: "list",
        value: {
          heading: "The protection layers",
          style: "numbered",
          items: [
            "Layer 1 — LLC per asset: each investment property in a separate LLC. A lawsuit on property A doesn't reach property B in a different LLC.",
            "Layer 2 — Holding LLC: holding LLC above the property LLCs. Owner = holding; holding = you. Additional barrier + simplifies income distribution.",
            "Layer 3 — Florida Homestead Exemption: primary residence is unlimited-value protected from creditors (except mortgage and property tax). A doctor with a million-dollar judgment cannot lose the Florida house — if properly homesteaded.",
            "Layer 4 — Asset Protection Trust: Domestic Asset Protection Trust (DAPT) in Nevada or Delaware. You can be a beneficiary of your own trust with creditor protection.",
            "Layer 5 — Umbrella Insurance: $1–5M policy is the cheapest protection and should be FIRST line — not last.",
          ],
        },
      },
      {
        kind: "prose",
        heading: "For Brazilian healthcare professionals",
        body:
          "Brazilian doctors operating a US clinic face specific malpractice risk. Recommended structure: Clinic in LLC (or PA — Professional Association, required for FL-licensed professionals) + Clinic real estate in a separate LLC from the clinic + Personal assets (home, investments) OUTSIDE the clinic LLC + Robust medical malpractice insurance + Personal umbrella policy.",
      },
      {
        kind: "callout",
        value: {
          tone: "alert",
          badgeLabel: "Heads up",
          heading: "Post-claim protection = fraud",
          body:
            "Transferring assets after receiving a legal claim = fraudulent transfer. Judges can reverse transfers and penalize the transferor. Asset protection must be implemented BEFORE any lawsuit or serious complaint.",
        },
      },
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      { q: "Does Florida Homestead protect 100% of the home?", a: "Value: yes, unlimited. Area: yes, up to 0.5 acre inside a municipality or 160 acres outside. You must have filed homestead (Form DR-501)." },
      { q: "When should I start?", a: "Immediately when you buy property or start professional practice. Or NOW if you haven't yet — and no claim is pending." },
      { q: "Can a Brazilian creditor reach US assets?", a: "Depends on structure. Well-designed LLCs + Trust in Florida/Nevada/Delaware offer significant barriers against Brazilian creditors pursuing US enforcement." },
      { q: "Is umbrella insurance enough?", a: "As first line, yes. For estates $1M+, combine with LLCs + Trust. Umbrella covers up to policy limit; LLCs/Trust protect above." },
      { q: "How much does implementation cost?", a: "Basic (LLC + umbrella): $2,000–4,000. Full (holding LLC + DAPT + estate trust): $8,000–20,000." },
    ],
    relatedTitle: "Related",
    related: [
      { label: "Will & Trust", href: "/business/will-and-trust" },
      { label: "Florida LLC formation", href: "/business/llc-formation" },
      { label: "Buying real estate via LLC (FIRPTA)", href: "/real-estate/foreign-buyer-firpta" },
    ],
  },
  es: {
    locale: "es",
    slug: SLUG,
    immigrationBreadcrumb: "Derecho Empresarial",
    breadcrumbLabel: "Protección Patrimonial",
    eyebrow: "Patrimonio",
    h1: "Protección Patrimonial para Brasileños en EE.UU.",
    lede:
      "Médicos, dentistas, abogados, empresarios y profesionales expuestos a demandas necesitan estructura jurídica que proteja el patrimonio ANTES de cualquier demanda. 5 capas para blindar legalmente.",
    stats: [
      { value: "5", label: "Capas" },
      { value: "Ilimitada", label: "Homestead FL" },
      { value: "US$ 1–5M", label: "Umbrella insurance" },
      { value: "Pre-demanda", label: "Obligatorio" },
    ],
    meta: {
      title: "Protección Patrimonial para Brasileños en EE.UU. 2026 | Pinho Law",
      description:
        "5 capas: LLC por activo, holding, Florida Homestead, DAPT, umbrella insurance.",
    },
    sections: [
      {
        kind: "list",
        value: {
          heading: "Las capas de protección",
          style: "numbered",
          items: [
            "Capa 1 — LLC por activo",
            "Capa 2 — LLC Holding",
            "Capa 3 — Homestead Exemption (Florida): residencia principal ilimitada contra acreedores",
            "Capa 4 — Asset Protection Trust (Nevada/Delaware)",
            "Capa 5 — Umbrella Insurance US$ 1–5M",
          ],
        },
      },
      {
        kind: "callout",
        value: {
          tone: "alert",
          badgeLabel: "Atención",
          heading: "Protección post-demanda = fraude",
          body: "Transferir activos tras demanda = fraudulent transfer. Implementar ANTES.",
        },
      },
    ],
    faqTitle: "Preguntas frecuentes",
    faq: [
      { q: "¿Homestead de Florida protege 100%?", a: "Valor: sí, ilimitado. Área: hasta 0,5 acre en municipio." },
      { q: "¿Cuándo empezar?", a: "Inmediatamente. O AHORA si no hay demanda pendiente." },
      { q: "¿Cuánto cuesta implementar?", a: "Básico: US$ 2.000–4.000. Completo: US$ 8.000–20.000." },
    ],
    relatedTitle: "Relacionado",
    related: [
      { label: "Will & Trust", href: "/business/will-and-trust" },
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
