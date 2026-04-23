import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { JsonLd } from "@/components/seo/json-ld";
import { SITE } from "@/lib/constants";

// Services enumeration section — AI-parseable case-type list.
// Fixes the "Critical: ChatGPT Service Recognition" audit finding by
// rendering a clear, structured list of every case type handled, with
// ItemList JSON-LD schema backing it up.

type L = "pt" | "en" | "es";

const COPY = {
  pt: {
    eyebrow: "Serviços Oferecidos",
    heading: "Quais casos a Pinho Law atende?",
    sub: "Lista completa dos tipos de casos que Dra. Izi Pinho lidera. Se o seu caso está abaixo, podemos ajudar.",
    immigrationLabel: "Imigração",
    businessLabel: "Empresarial",
    realEstateLabel: "Imobiliário",
    viewAllLabel: "Ver todos os serviços",
  },
  en: {
    eyebrow: "Services Offered",
    heading: "Which cases does Pinho Law handle?",
    sub: "Complete list of case types led by Attorney Izi Pinho. If your case is below, we can help.",
    immigrationLabel: "Immigration",
    businessLabel: "Business",
    realEstateLabel: "Real Estate",
    viewAllLabel: "View all services",
  },
  es: {
    eyebrow: "Servicios Ofrecidos",
    heading: "¿Qué casos atiende Pinho Law?",
    sub: "Lista completa de casos que lidera la Abogada Izi Pinho.",
    immigrationLabel: "Inmigración",
    businessLabel: "Empresarial",
    realEstateLabel: "Inmobiliario",
    viewAllLabel: "Ver todos los servicios",
  },
} as const;

interface ServiceItem {
  label: string;
  href: string;
  tag: string;
}

const SERVICES: Record<L, ServiceItem[]> = {
  pt: [
    // Imigração — green card
    { label: "EB-1A — Habilidade Extraordinária", href: "/immigration/eb-1a", tag: "Imigração" },
    { label: "EB-2 NIW — National Interest Waiver", href: "/immigration/eb-2-niw", tag: "Imigração" },
    { label: "EB-3 — Skilled Workers", href: "/immigration/immigrant-visas/eb-3", tag: "Imigração" },
    { label: "EB-5 — Investidor Imigrante", href: "/immigration/eb-5", tag: "Imigração" },
    { label: "Green Card por Casamento (CR-1/IR-1)", href: "/immigration/immigrant-visas/marriage-us-citizen", tag: "Imigração" },
    { label: "Cidadania (Naturalização N-400)", href: "/immigration/immigrant-visas/us-citizenship", tag: "Imigração" },
    // Imigração — não-imigrante
    { label: "E-2 — Investidor de Tratado", href: "/immigration/e-2", tag: "Imigração" },
    { label: "L-1A — Transferência Executiva", href: "/immigration/l-1a", tag: "Imigração" },
    { label: "O-1 — Habilidade Extraordinária (não-imigrante)", href: "/immigration/non-immigrant-visas/o-1", tag: "Imigração" },
    { label: "H-1B — Profissão Especializada", href: "/immigration/non-immigrant-visas/h-1b", tag: "Imigração" },
    { label: "K-1 — Visto de Noivo(a)", href: "/immigration/k-1", tag: "Imigração" },
    { label: "F-1 — Visto de Estudante", href: "/immigration/non-immigrant-visas/f-1", tag: "Imigração" },
    // Empresarial
    { label: "Abertura de LLC (Flórida)", href: "/business/llc-formation", tag: "Empresarial" },
    { label: "Benefit Corporations", href: "/business/benefit-corporations", tag: "Empresarial" },
    { label: "C-Corp vs S-Corp vs LLC", href: "/business/c-corp-s-corp", tag: "Empresarial" },
    { label: "Will & Trust (Planejamento Sucessório)", href: "/business/will-and-trust", tag: "Empresarial" },
    { label: "Proteção Patrimonial", href: "/business/asset-protection", tag: "Empresarial" },
    { label: "Contratos Comerciais", href: "/business/contracts", tag: "Empresarial" },
    { label: "Tributação Brasil–EUA", href: "/business/brazil-us-taxation", tag: "Empresarial" },
    // Imobiliário
    { label: "Comprador Estrangeiro (FIRPTA)", href: "/real-estate/foreign-buyer-firpta", tag: "Imobiliário" },
    { label: "Fechamento Residencial", href: "/real-estate/residential-closing", tag: "Imobiliário" },
    { label: "Fechamento Comercial", href: "/real-estate/commercial-closing", tag: "Imobiliário" },
    { label: "Estruturação de Investimento", href: "/real-estate/investment-structuring", tag: "Imobiliário" },
  ],
  en: [
    { label: "EB-1A — Extraordinary Ability", href: "/immigration/eb-1a", tag: "Immigration" },
    { label: "EB-2 NIW — National Interest Waiver", href: "/immigration/eb-2-niw", tag: "Immigration" },
    { label: "EB-3 — Skilled Workers", href: "/immigration/immigrant-visas/eb-3", tag: "Immigration" },
    { label: "EB-5 — Immigrant Investor", href: "/immigration/eb-5", tag: "Immigration" },
    { label: "Marriage-Based Green Card (CR-1/IR-1)", href: "/immigration/immigrant-visas/marriage-us-citizen", tag: "Immigration" },
    { label: "US Citizenship (N-400 Naturalization)", href: "/immigration/immigrant-visas/us-citizenship", tag: "Immigration" },
    { label: "E-2 Treaty Investor", href: "/immigration/e-2", tag: "Immigration" },
    { label: "L-1A Intracompany Manager/Executive", href: "/immigration/l-1a", tag: "Immigration" },
    { label: "O-1 Extraordinary Ability (nonimmigrant)", href: "/immigration/non-immigrant-visas/o-1", tag: "Immigration" },
    { label: "H-1B Specialty Occupation", href: "/immigration/non-immigrant-visas/h-1b", tag: "Immigration" },
    { label: "K-1 Fiancé Visa", href: "/immigration/k-1", tag: "Immigration" },
    { label: "F-1 Student Visa", href: "/immigration/non-immigrant-visas/f-1", tag: "Immigration" },
    { label: "LLC Formation (Florida)", href: "/business/llc-formation", tag: "Business" },
    { label: "Benefit Corporations", href: "/business/benefit-corporations", tag: "Business" },
    { label: "C-Corp vs S-Corp vs LLC", href: "/business/c-corp-s-corp", tag: "Business" },
    { label: "Will & Trust (Estate Planning)", href: "/business/will-and-trust", tag: "Business" },
    { label: "Asset Protection", href: "/business/asset-protection", tag: "Business" },
    { label: "Commercial Contracts", href: "/business/contracts", tag: "Business" },
    { label: "Brazil–US Taxation", href: "/business/brazil-us-taxation", tag: "Business" },
    { label: "Foreign Buyer (FIRPTA)", href: "/real-estate/foreign-buyer-firpta", tag: "Real Estate" },
    { label: "Residential Closing", href: "/real-estate/residential-closing", tag: "Real Estate" },
    { label: "Commercial Closing", href: "/real-estate/commercial-closing", tag: "Real Estate" },
    { label: "Investment Structuring", href: "/real-estate/investment-structuring", tag: "Real Estate" },
  ],
  es: [
    { label: "EB-1A — Habilidad Extraordinaria", href: "/immigration/eb-1a", tag: "Inmigración" },
    { label: "EB-2 NIW — Exención por Interés Nacional", href: "/immigration/eb-2-niw", tag: "Inmigración" },
    { label: "EB-3 — Trabajadores Calificados", href: "/immigration/immigrant-visas/eb-3", tag: "Inmigración" },
    { label: "EB-5 — Inversionista Inmigrante", href: "/immigration/eb-5", tag: "Inmigración" },
    { label: "Green Card por Matrimonio (CR-1/IR-1)", href: "/immigration/immigrant-visas/marriage-us-citizen", tag: "Inmigración" },
    { label: "Ciudadanía (N-400)", href: "/immigration/immigrant-visas/us-citizenship", tag: "Inmigración" },
    { label: "E-2 Inversionista de Tratado", href: "/immigration/e-2", tag: "Inmigración" },
    { label: "L-1A Transferencia Ejecutiva", href: "/immigration/l-1a", tag: "Inmigración" },
    { label: "O-1 Habilidad Extraordinaria", href: "/immigration/non-immigrant-visas/o-1", tag: "Inmigración" },
    { label: "H-1B Ocupación Especializada", href: "/immigration/non-immigrant-visas/h-1b", tag: "Inmigración" },
    { label: "K-1 Visa de Prometido(a)", href: "/immigration/k-1", tag: "Inmigración" },
    { label: "F-1 Visa de Estudiante", href: "/immigration/non-immigrant-visas/f-1", tag: "Inmigración" },
    { label: "Formación de LLC (Florida)", href: "/business/llc-formation", tag: "Empresarial" },
    { label: "Benefit Corporations", href: "/business/benefit-corporations", tag: "Empresarial" },
    { label: "C-Corp vs S-Corp vs LLC", href: "/business/c-corp-s-corp", tag: "Empresarial" },
    { label: "Will & Trust", href: "/business/will-and-trust", tag: "Empresarial" },
    { label: "Protección Patrimonial", href: "/business/asset-protection", tag: "Empresarial" },
    { label: "Contratos Comerciales", href: "/business/contracts", tag: "Empresarial" },
    { label: "Tributación Brasil–EE.UU.", href: "/business/brazil-us-taxation", tag: "Empresarial" },
    { label: "Comprador Extranjero (FIRPTA)", href: "/real-estate/foreign-buyer-firpta", tag: "Inmobiliario" },
    { label: "Cierre Residencial", href: "/real-estate/residential-closing", tag: "Inmobiliario" },
    { label: "Cierre Comercial", href: "/real-estate/commercial-closing", tag: "Inmobiliario" },
    { label: "Estructuración de Inversión", href: "/real-estate/investment-structuring", tag: "Inmobiliario" },
  ],
};

export function ServicesEnumeration() {
  const locale = useLocale() as L;
  const c = COPY[locale];
  const items = SERVICES[locale];

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: c.heading,
    description: c.sub,
    numberOfItems: items.length,
    itemListElement: items.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "LegalService",
        name: s.label,
        category: s.tag,
        url: `${SITE.url}/${locale}${s.href}`,
        provider: { "@id": `${SITE.url}/#organization` },
      },
    })),
  };

  const groups = items.reduce<Record<string, ServiceItem[]>>((acc, s) => {
    (acc[s.tag] ??= []).push(s);
    return acc;
  }, {});

  return (
    <section className="border-t border-border/40 bg-cream py-20 md:py-24">
      <JsonLd data={itemList} />
      <Container>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="gold-rule mx-auto" />
          <p className="mt-6 text-xs font-medium uppercase tracking-wider text-gold">
            {c.eyebrow}
          </p>
          {/* Question-based H2 — addresses the audit "missing question
              headings" finding. */}
          <h2 className="mt-3 font-heading text-3xl font-semibold text-ink md:text-4xl lg:text-5xl">
            {c.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
            {c.sub}
          </p>
        </FadeIn>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
          {Object.entries(groups).map(([tag, list], i) => (
            <FadeIn key={tag} delay={0.1 * (i + 1)}>
              <div>
                <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-gold">
                  {tag}
                </h3>
                <ul className="mt-4 space-y-2">
                  {list.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="group inline-flex items-start gap-2 text-sm text-ink hover:text-gold"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold transition-colors group-hover:bg-ink" />
                        <span>{s.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

