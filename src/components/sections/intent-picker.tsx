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
} from "lucide-react";

// Intent-based entry point. Users don't shop by legal category
// ("Immigration" vs "Business") — they shop by outcome ("I want
// to move my family"). This routes them to the right service at
// the right depth, immediately above the fold on mobile.

type L = "pt" | "en" | "es";

const COPY = {
  pt: {
    eyebrow: "Onde começar",
    heading: "O que você quer resolver?",
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
        title: "Quero investir nos EUA",
        body: "EB-5, E-2, estruturação de capital estrangeiro.",
        href: "/immigration/eb-5",
      },
      {
        icon: Briefcase,
        title: "Quero abrir ou estruturar empresa",
        body: "LLC, C-Corp, Benefit Corp, contratos, tributação.",
        href: "/expand-business-usa",
      },
      {
        icon: Building2,
        title: "Quero comprar imóvel",
        body: "FIRPTA, LLC para imóvel, fechamento residencial/comercial.",
        href: "/real-estate",
      },
      {
        icon: Scale,
        title: "Já estou nos EUA — preciso regularizar",
        body: "Ajuste de status, renovação, fora de status.",
        href: "/already-in-usa",
      },
    ],
  },
  en: {
    eyebrow: "Where to start",
    heading: "What do you want to solve?",
    sub: "Pick the path that best describes your situation. We route you straight to the answer.",
    items: [
      { icon: Users, title: "I want to immigrate", body: "Green card, work visa, naturalization.", href: "/american-dream" },
      { icon: Home, title: "I want to reunite my family", body: "Marriage, fiancé, parents, minor children.", href: "/immigration/k-1" },
      { icon: TrendingUp, title: "I want to invest in the US", body: "EB-5, E-2, foreign capital structuring.", href: "/immigration/eb-5" },
      { icon: Briefcase, title: "I want to open or structure a company", body: "LLC, C-Corp, Benefit Corp, contracts, tax.", href: "/expand-business-usa" },
      { icon: Building2, title: "I want to buy real estate", body: "FIRPTA, LLC-held property, closings.", href: "/real-estate" },
      { icon: Scale, title: "I'm already in the US — need to regularize", body: "Status adjustment, renewal, out of status.", href: "/already-in-usa" },
    ],
  },
  es: {
    eyebrow: "Por dónde empezar",
    heading: "¿Qué quieres resolver?",
    sub: "Elige el camino que mejor describe tu situación.",
    items: [
      { icon: Users, title: "Quiero inmigrar", body: "Green card, visa de trabajo, naturalización.", href: "/american-dream" },
      { icon: Home, title: "Quiero reunir a mi familia", body: "Matrimonio, prometido(a), padres, hijos.", href: "/immigration/k-1" },
      { icon: TrendingUp, title: "Quiero invertir en EE.UU.", body: "EB-5, E-2, estructuración de capital.", href: "/immigration/eb-5" },
      { icon: Briefcase, title: "Quiero abrir o estructurar empresa", body: "LLC, C-Corp, Benefit Corp, contratos.", href: "/expand-business-usa" },
      { icon: Building2, title: "Quiero comprar inmueble", body: "FIRPTA, LLC, cierres residenciales.", href: "/real-estate" },
      { icon: Scale, title: "Ya estoy en EE.UU. — regularizar", body: "Ajuste de estatus, renovación.", href: "/already-in-usa" },
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
