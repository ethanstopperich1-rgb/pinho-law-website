import Image from "next/image";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { TEAM } from "@/lib/constants";

// Homepage condensed team strip — Block 2.12 of the May 2026 PLwebsite
// audit. Renders the 4 current Pinho Law team members with photo + name
// + title in a horizontal grid, with "Meet the full team →" link to /team.
// Full version with bios lives at /team and /about.

type L = "pt" | "en" | "es";

const COPY = {
  pt: {
    eyebrow: "Equipe",
    heading: "Conheça quem vai cuidar do seu caso",
    sub: "Uma equipe construída para atender com atenção, competência e respeito pela sua história.",
    cta: "Conhecer a equipe completa",
  },
  en: {
    eyebrow: "Team",
    heading: "Meet the People Who Will Handle Your Case",
    sub: "A team built to serve with attention, competence, and respect for your story.",
    cta: "Meet the full team",
  },
  es: {
    eyebrow: "Equipo",
    heading: "Conozca a quien cuidará de su caso",
    sub: "Un equipo construido para servir con atención, competencia y respeto por su historia.",
    cta: "Conocer al equipo completo",
  },
} as const;

export function TeamStrip() {
  const locale = useLocale() as L;
  const c = COPY[locale];

  return (
    <section className="border-t border-border/40 bg-white py-20 md:py-24">
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

        <div className="mx-auto mt-14 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member, i) => (
            <FadeIn key={member.id} delay={0.08 * (i + 1)}>
              <div className="flex flex-col items-center text-center">
                <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-gold/30 bg-gradient-to-br from-navy to-navy-light shadow-md transition-transform hover:scale-105">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="128px"
                  />
                </div>
                <h3 className="mt-5 font-heading text-base font-semibold text-ink md:text-lg">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs leading-snug text-ink-muted md:text-sm">
                  {member.title}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <div className="mt-12 text-center">
            <Link
              href="/team"
              className="inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-gold-dark md:text-base"
            >
              {c.cta} <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
