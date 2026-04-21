import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { Link } from "@/i18n/navigation";
import { ARTICLES } from "@/content/blog";
import type { Locale } from "@/i18n/routing";
import type { L } from "@/content/blog/types";

const TITLES = {
  pt: "Blog — Imigração, Empresarial e Imobiliário | Pinho Law",
  en: "Blog — Immigration, Business, Real Estate | Pinho Law",
  es: "Blog — Inmigración, Empresarial, Inmobiliario | Pinho Law",
} as const;

const DESCRIPTIONS = {
  pt: "Análises e guias da Pinho Law sobre imigração, direito empresarial e imobiliário para brasileiros nos EUA. Revisado por Dra. Izi Pinho.",
  en: "Analyses and guides from Pinho Law on immigration, business, and real estate for Brazilians in the US. Reviewed by Dra. Izi Pinho.",
  es: "Análisis y guías de Pinho Law sobre inmigración, derecho empresarial e inmobiliario.",
} as const;

const HEADINGS = {
  pt: {
    eyebrow: "Blog Pinho Law",
    heading: "Análises honestas, em português",
    sub: "Guias, comparações e decisões práticas para brasileiros navegando o sistema jurídico americano. Cada artigo é revisado por Dra. Izi Pinho.",
  },
  en: {
    eyebrow: "Pinho Law Blog",
    heading: "Honest analysis, in plain language",
    sub: "Guides, comparisons, and practical decisions for Brazilians navigating the US legal system. Every article reviewed by Dra. Izi Pinho.",
  },
  es: {
    eyebrow: "Blog Pinho Law",
    heading: "Análisis honesto",
    sub: "Guías y decisiones prácticas para brasileños.",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const key = locale as L;
  return createPageMetadata({
    title: TITLES[key],
    description: DESCRIPTIONS[key],
    path: "/blog",
    locale: locale as Locale,
  });
}

export default async function BlogIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const key = locale as L;
  const h = HEADINGS[key];

  return (
    <>
      <section className="bg-cream pt-20 pb-12 md:pt-28 md:pb-16">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <span className="gold-rule mx-auto" />
            <p className="mt-6 text-xs font-medium uppercase tracking-wider text-gold">
              {h.eyebrow}
            </p>
            <h1 className="mt-3 font-heading text-3xl font-semibold text-ink md:text-5xl">
              {h.heading}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-muted md:text-base">
              {h.sub}
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-cream pb-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <ul className="space-y-6">
              {ARTICLES.map((a) => {
                const c = a.content[key];
                return (
                  <li key={a.slug}>
                    <Link
                      href={`/blog/${a.slug}`}
                      className="block rounded-[var(--radius-lg)] border border-border bg-white p-6 shadow-sm transition-all hover:border-gold hover:shadow-md md:p-8"
                    >
                      <div className="flex flex-wrap items-center gap-3 text-xs text-ink-muted">
                        <span className="inline-flex items-center rounded-full border border-gold/30 bg-gold/5 px-2.5 py-0.5 font-medium text-gold">
                          {a.category[key]}
                        </span>
                        <time dateTime={a.datePublished}>
                          {new Intl.DateTimeFormat(
                            key === "pt" ? "pt-BR" : key === "es" ? "es-419" : "en-US",
                            { year: "numeric", month: "short", day: "numeric" },
                          ).format(new Date(a.datePublished))}
                        </time>
                        <span>·</span>
                        <span>{c.readingMinutes} min</span>
                      </div>
                      <h2 className="mt-3 font-heading text-xl font-semibold text-ink md:text-2xl">
                        {c.title}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted md:text-base">
                        {c.dek}
                      </p>
                      <div className="mt-4 text-sm font-medium text-gold">
                        {key === "pt" ? "Ler artigo →" : key === "es" ? "Leer artículo →" : "Read article →"}
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
