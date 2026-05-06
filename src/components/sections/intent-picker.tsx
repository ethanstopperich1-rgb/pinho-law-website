import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import {
  Home,
  Briefcase,
  TrendingUp,
  Users,
  Building2,
  Scale,
  Shield,
} from "lucide-react";

// Intent-based entry point. Users don't shop by legal category
// ("Immigration" vs "Business") — they shop by outcome ("I want
// to move my family"). This routes them to the right service at
// the right depth, immediately above the fold on mobile.

type L = "pt" | "en" | "es";

const COPY = {
  pt: {
    eyebrow: "Por onde começar",
    heading: "Onde começar",
    sub: "Escolha o caminho que melhor descreve sua situação. Chegamos direto à resposta.",
    items: [
      {
        icon: Users,
        title: "Quero imigrar",
        body: "Green card, visto de trabalho, naturalização.",
        href: "/american-dream",
      },
      {
        icon: Home,
        title: "Quero trazer minha família",
        body: "Casamento, noivos, pais, filhos menores.",
        href: "/immigration/k-1",
      },
      {
        icon: TrendingUp,
        title: "Quero investir ou expandir nos EUA",
        body: "E-2, EB-5, L-1A, abertura de empresa, estruturação de capital estrangeiro.",
        href: "/expand-business-usa",
      },
      {
        icon: Briefcase,
        title: "Quero abrir ou estruturar minha empresa",
        body: "LLC, C-Corp, contratos, tributação Brasil-EUA, proteção patrimonial.",
        href: "/business",
      },
      {
        icon: Building2,
        title: "Quero comprar imóvel nos EUA",
        body: "FIRPTA, LLC para imóvel, fechamento residencial/comercial.",
        href: "/real-estate",
      },
      {
        icon: Scale,
        title: "Já estou nos EUA — preciso regularizar",
        body: "Ajuste de status, renovação, fora de status.",
        href: "/already-in-usa",
      },
      {
        icon: Shield,
        title: "Preciso de suporte jurídico para minha empresa",
        body: "Contratos, disputas societárias, proteção patrimonial, tributação Brasil-EUA.",
        href: "/business",
      },
    ],
  },
  en: {
    eyebrow: "Where to start",
    heading: "Where to Start",
    sub: "Pick the path that best describes your situation. We'll get you to the right answer fast.",
    items: [
      { icon: Users, title: "I want to immigrate", body: "Green card, work visa, naturalization.", href: "/american-dream" },
      { icon: Home, title: "I want to bring my family", body: "Marriage, fiancé(e), parents, minor children.", href: "/immigration/k-1" },
      { icon: TrendingUp, title: "I want to invest or expand in the U.S.", body: "E-2, EB-5, L-1A, company formation, foreign capital structuring.", href: "/expand-business-usa" },
      { icon: Briefcase, title: "I want to open or structure my business", body: "LLC, C-Corp, contracts, Brazil-U.S. taxation, asset protection.", href: "/business" },
      { icon: Building2, title: "I want to buy real estate in the U.S.", body: "FIRPTA, LLC for property, residential/commercial closing.", href: "/real-estate" },
      { icon: Scale, title: "I'm already in the U.S. — need to regularize", body: "Adjustment of status, renewal, out of status.", href: "/already-in-usa" },
      { icon: Shield, title: "I need legal support for my business", body: "Contracts, shareholder disputes, asset protection, Brazil-U.S. taxation.", href: "/business" },
    ],
  },
  es: {
    eyebrow: "Por dónde empezar",
    heading: "Por Dónde Empezar",
    sub: "Elige el camino que mejor describe tu situación.",
    items: [
      { icon: Users, title: "Quiero inmigrar", body: "Green card, visa de trabajo, naturalización.", href: "/american-dream" },
      { icon: Home, title: "Quiero traer a mi familia", body: "Matrimonio, prometido(a), padres, hijos.", href: "/immigration/k-1" },
      { icon: TrendingUp, title: "Quiero invertir o expandir en EE.UU.", body: "E-2, EB-5, L-1A, formación de empresa, estructuración de capital.", href: "/expand-business-usa" },
      { icon: Briefcase, title: "Quiero abrir o estructurar mi empresa", body: "LLC, C-Corp, contratos, tributación Brasil-EE.UU., protección patrimonial.", href: "/business" },
      { icon: Building2, title: "Quiero comprar inmueble en EE.UU.", body: "FIRPTA, LLC, cierres residenciales/comerciales.", href: "/real-estate" },
      { icon: Scale, title: "Ya estoy en EE.UU. — regularizar", body: "Ajuste de estatus, renovación, fuera de estatus.", href: "/already-in-usa" },
      { icon: Shield, title: "Necesito soporte legal para mi empresa", body: "Contratos, disputas societarias, protección patrimonial, tributación Brasil-EE.UU.", href: "/business" },
    ],
  },
} as const;

export function IntentPicker() {
  const locale = useLocale() as L;
  const c = COPY[locale];

  return (
    <section className="relative bg-cream py-20 md:py-28">
      <Container>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="gold-rule mx-auto" />
          <p className="mt-6 text-xs font-medium uppercase tracking-wider text-gold">
            {c.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-ink md:text-4xl lg:text-5xl">
            {c.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
            {c.sub}
          </p>
        </FadeIn>

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {c.items.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={Math.min(i * 0.05, 0.3)}>
                <Link
                  href={item.href}
                  className="group flex h-full flex-col rounded-[var(--radius-lg)] border border-ink/8 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-lg md:p-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] border border-gold/25 bg-gold/5 text-gold transition-colors group-hover:bg-gold group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-ink md:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted md:text-[15px]">
                    {item.body}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gold transition-transform group-hover:translate-x-0.5">
                    {locale === "pt" ? "Ver opções" : locale === "es" ? "Ver opciones" : "Explore"} →
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
