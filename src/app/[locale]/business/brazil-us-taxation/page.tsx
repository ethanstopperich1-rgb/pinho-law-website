import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import {
  ServicePageTemplate,
  type ServicePageContent,
  type L,
} from "@/components/service/ServicePageTemplate";
import type { Locale } from "@/i18n/routing";

const SLUG = "business/brazil-us-taxation";

const DATA: Record<L, ServicePageContent> = {
  pt: {
    locale: "pt",
    slug: SLUG,
    immigrationBreadcrumb: "Direito Empresarial",
    breadcrumbLabel: "Tributação Brasil-EUA",
    eyebrow: "Tributação",
    h1: "Tributação Brasil-EUA para Brasileiros nos EUA",
    lede:
      "A tributação transnacional Brasil-EUA é uma das áreas mais complexas e mais ignoradas. Obrigações existem nos DOIS países simultaneamente, e omissões resultam em multas que chegam a 50% do saldo da conta não declarada. Trabalhamos integrados com CPAs americanos e contadores brasileiros especializados em cross-border.",
    stats: [
      { value: "FBAR", label: "> US$ 10K contas" },
      { value: "FATCA", label: "Form 8938" },
      { value: "CBE", label: "> US$ 1M Brasil" },
      { value: "50%", label: "Multa máxima willful" },
    ],
    meta: {
      title: "Tributação Brasil-EUA — FBAR, FATCA, 5471, CBE | Pinho Law",
      description:
        "Obrigações fiscais Brasil-EUA: Form 1040, FBAR, FATCA/Form 8938, Form 5471, CBE/SISBACEN. Brasil e EUA não têm tratado de não-bitributação ratificado.",
    },
    sections: [
      {
        kind: "table",
        value: {
          heading: "Obrigações fiscais nos EUA (se você é US Person)",
          headers: ["Obrigação", "Formulário", "Multa por omissão"],
          rows: [
            ["Declaração de IR americana", "Form 1040", "Variável"],
            ["FBAR (contas estrangeiras > US$ 10K)", "FinCEN 114", "Até US$ 10.000/ano (willful: 50% do saldo)"],
            ["FATCA (ativos estrangeiros > US$ 50K)", "Form 8938", "US$ 10.000–50.000"],
            ["Participação em empresa estrangeira (>10%)", "Form 5471", "US$ 10.000+"],
            ["Passive Foreign Investment Company", "Form 8621", "Pesadas"],
            ["Transferência para empresa estrangeira", "Form 926", "10% do valor"],
          ],
          note: "US Person = cidadão americano, green card holder, ou quem passou o Substantial Presence Test.",
          noteStyle: "gold",
        },
      },
      {
        kind: "prose",
        heading: "Substantial Presence Test — cuidado",
        body:
          "Se você passou 183 dias nos EUA nos últimos 3 anos (fórmula ponderada: dias do ano atual + 1/3 do ano anterior + 1/6 do ano anteanterior), é considerado residente fiscal americano para fins do IRS — mesmo sem green card. Isso ativa todas as obrigações acima.",
      },
      {
        kind: "list",
        value: {
          heading: "Obrigações fiscais no Brasil",
          style: "check",
          items: [
            "Se mora no Brasil: Declaração de Bens e Direitos no Exterior (DIRPF código 71)",
            "CBE (SISBACEN): obrigatória se total de ativos no exterior > US$ 1M (anual em abril) ou > US$ 100M (trimestral)",
            "GCAP: apuração de ganho de capital na venda de bem no exterior, no mês da venda",
            "Se mora nos EUA com GC/cidadania: deveria ter feito Comunicação de Saída Definitiva; senão, ainda é residente fiscal no Brasil e deve declarar",
          ],
        },
      },
      {
        kind: "callout",
        value: {
          tone: "alert",
          badgeLabel: "Ponto crítico",
          heading: "Brasil e EUA NÃO têm tratado de não-bitributação ratificado",
          body:
            "O tratado foi negociado mas nunca ratificado pelo Senado americano. O mecanismo disponível é o Foreign Tax Credit (abater imposto pago no Brasil do devido nos EUA ou vice-versa) — mas tem limitações e não elimina todas as situações de dupla tributação.",
        },
      },
    ],
    faqTitle: "Perguntas frequentes",
    faq: [
      { q: "Preciso declarar conta no Brasil se tenho green card?", a: "Sim. Como US person, se o saldo agregado de contas estrangeiras passou US$ 10.000 em qualquer momento do ano, deve protocolar FBAR (FinCEN 114)." },
      { q: "Quando CBE é obrigatória?", a: "CBE anual se total de ativos no exterior ≥ US$ 1 milhão em 31/dez. Trimestral se ≥ US$ 100 milhões. Omissão: multa até R$ 250.000." },
      { q: "Brasil e EUA têm tratado de bitributação?", a: "Não. Foi negociado mas nunca ratificado. Você usa Foreign Tax Credit para evitar dupla tributação em algumas situações." },
      { q: "Preciso declarar aluguel de imóvel brasileiro ao IRS?", a: "Sim, se é US person. Renda mundial é tributável nos EUA. Impostos pagos no Brasil podem ser creditados via Foreign Tax Credit." },
      { q: "O que é PFIC e por que me preocupar?", a: "Passive Foreign Investment Company — muitos fundos brasileiros (FII, fundos de ações, etc.) são classificados como PFIC e têm tributação americana altamente desfavorável. Análise caso a caso é essencial." },
    ],
    relatedTitle: "Relacionado",
    related: [
      { label: "Proteção patrimonial", href: "/business/asset-protection" },
      { label: "Will & Trust (estrutura sucessória)", href: "/business/will-and-trust" },
      { label: "Comprar imóvel via LLC", href: "/real-estate/foreign-buyer-firpta" },
    ],
  },
  en: {
    locale: "en",
    slug: SLUG,
    immigrationBreadcrumb: "Business Law",
    breadcrumbLabel: "Brazil-US Taxation",
    eyebrow: "Taxation",
    h1: "Brazil-US Taxation for Brazilians in the US",
    lede:
      "Brazil-US cross-border taxation is among the most complex and most ignored areas. Obligations exist in BOTH countries simultaneously, and omissions result in fines up to 50% of the undeclared account balance. We work integrated with US CPAs and Brazilian tax accountants specialized in cross-border.",
    stats: [
      { value: "FBAR", label: "> $10K accounts" },
      { value: "FATCA", label: "Form 8938" },
      { value: "CBE", label: "> $1M Brazil" },
      { value: "50%", label: "Max willful penalty" },
    ],
    meta: {
      title: "Brazil-US Taxation — FBAR, FATCA, 5471, CBE | Pinho Law",
      description:
        "Brazil-US tax obligations: Form 1040, FBAR, FATCA/Form 8938, Form 5471, CBE/SISBACEN. Brazil-US tax treaty was negotiated but never ratified.",
    },
    sections: [
      {
        kind: "table",
        value: {
          heading: "US tax obligations (if you're a US Person)",
          headers: ["Obligation", "Form", "Penalty for omission"],
          rows: [
            ["US income tax return", "Form 1040", "Variable"],
            ["FBAR (foreign accounts > $10K)", "FinCEN 114", "Up to $10,000/yr (willful: 50% of balance)"],
            ["FATCA (foreign assets > $50K)", "Form 8938", "$10,000–50,000"],
            ["Foreign company participation (>10%)", "Form 5471", "$10,000+"],
            ["Passive Foreign Investment Company", "Form 8621", "Heavy"],
            ["Transfer to foreign company", "Form 926", "10% of value"],
          ],
          note: "US Person = US citizen, green-card holder, or someone who passed the Substantial Presence Test.",
          noteStyle: "gold",
        },
      },
      {
        kind: "prose",
        heading: "Substantial Presence Test — watch out",
        body:
          "If you spent 183 days in the US over the last 3 years (weighted formula: current-year days + 1/3 prior year + 1/6 two-years-ago), you're a US tax resident for IRS purposes — even without a green card. This activates all the obligations above.",
      },
      {
        kind: "list",
        value: {
          heading: "Brazilian tax obligations",
          style: "check",
          items: [
            "If living in Brazil: Foreign Assets Declaration (DIRPF code 71)",
            "CBE (SISBACEN): mandatory if foreign assets total > $1M (annual in April) or > $100M (quarterly)",
            "GCAP: capital gain on sale of foreign asset, in the sale month",
            "If living in US with GC/citizenship: should have filed Communicação de Saída Definitiva; if not, you're still a Brazilian tax resident and must declare",
          ],
        },
      },
      {
        kind: "callout",
        value: {
          tone: "alert",
          badgeLabel: "Critical point",
          heading: "Brazil and US do NOT have a ratified tax treaty",
          body:
            "The treaty was negotiated but never ratified by the US Senate. The available mechanism is the Foreign Tax Credit (credit tax paid in Brazil against US tax owed, or vice versa) — but with limitations, and it doesn't eliminate all double-taxation situations.",
        },
      },
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      { q: "Do I need to declare my Brazilian account if I have a green card?", a: "Yes. As a US person, if aggregate foreign account balance exceeded $10,000 at any point in the year, you must file FBAR (FinCEN 114)." },
      { q: "When is CBE mandatory?", a: "Annual CBE if foreign asset total ≥ $1M on 12/31. Quarterly if ≥ $100M. Omission penalty: up to R$ 250,000." },
      { q: "Do Brazil and the US have a tax treaty?", a: "No. It was negotiated but never ratified. You use the Foreign Tax Credit to avoid double taxation in some situations." },
      { q: "Do I need to declare Brazilian rental income to the IRS?", a: "Yes, if you're a US person. Global income is US-taxable. Taxes paid in Brazil may be credited via Foreign Tax Credit." },
      { q: "What's a PFIC and why worry?", a: "Passive Foreign Investment Company — many Brazilian funds (FII, stock funds, etc.) are classified as PFIC and face highly unfavorable US taxation. Case-by-case analysis is essential." },
    ],
    relatedTitle: "Related",
    related: [
      { label: "Asset protection", href: "/business/asset-protection" },
      { label: "Will & Trust (succession structure)", href: "/business/will-and-trust" },
      { label: "Buying real estate via LLC", href: "/real-estate/foreign-buyer-firpta" },
    ],
  },
  es: {
    locale: "es",
    slug: SLUG,
    immigrationBreadcrumb: "Derecho Empresarial",
    breadcrumbLabel: "Tributación Brasil-EE.UU.",
    eyebrow: "Tributación",
    h1: "Tributación Brasil-EE.UU. para Brasileños",
    lede:
      "La tributación Brasil-EE.UU. es compleja. Obligaciones existen en AMBOS países. Omisiones = multas hasta 50% del saldo no declarado.",
    stats: [
      { value: "FBAR", label: "> US$ 10K cuentas" },
      { value: "FATCA", label: "Form 8938" },
      { value: "CBE", label: "> US$ 1M Brasil" },
      { value: "50%", label: "Multa máxima willful" },
    ],
    meta: {
      title: "Tributación Brasil-EE.UU. — FBAR, FATCA, CBE | Pinho Law",
      description:
        "Obligaciones fiscales Brasil-EE.UU.: FBAR, FATCA/Form 8938, Form 5471, CBE/SISBACEN.",
    },
    sections: [
      {
        kind: "table",
        value: {
          heading: "Obligaciones fiscales en EE.UU.",
          headers: ["Obligación", "Formulario", "Multa"],
          rows: [
            ["FBAR (cuentas > $10K)", "FinCEN 114", "Hasta $10K/año (willful: 50%)"],
            ["FATCA (activos > $50K)", "Form 8938", "$10–50K"],
            ["Participación empresa extranjera", "Form 5471", "$10K+"],
          ],
        },
      },
      {
        kind: "callout",
        value: {
          tone: "alert",
          badgeLabel: "Punto crítico",
          heading: "Brasil y EE.UU. NO tienen tratado ratificado",
          body: "El tratado fue negociado pero nunca ratificado. Se usa Foreign Tax Credit con limitaciones.",
        },
      },
    ],
    faqTitle: "Preguntas frecuentes",
    faq: [
      { q: "¿Debo declarar cuenta brasileña con green card?", a: "Sí, FBAR si saldo agregado > $10K." },
      { q: "¿Brasil y EE.UU. tienen tratado tributario?", a: "No, nunca ratificado." },
      { q: "¿Qué es PFIC?", a: "Muchos fondos brasileños son PFIC con tributación desfavorable en EE.UU." },
    ],
    relatedTitle: "Relacionado",
    related: [
      { label: "Protección patrimonial", href: "/business/asset-protection" },
      { label: "Will & Trust", href: "/business/will-and-trust" },
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
