import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { CtaSection } from "@/components/sections/cta-section";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { createPageMetadata } from "@/lib/metadata";
import { FAQS } from "@/data/faqs";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { SITE } from "@/lib/constants";

type L = "pt" | "en" | "es";

export function generateStaticParams() {
  return FAQS.flatMap((faq) =>
    (routing.locales as readonly L[])
      .filter((l) => faq.question[l] && faq.slug[l])
      .map((locale) => ({ locale, slug: faq.slug[locale] })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const l = locale as L;
  const faq = FAQS.find((f) => f.slug[l] === slug);
  if (!faq) return {};
  return createPageMetadata({
    title: `${faq.question[l]} | Pinho Law`,
    description: faq.shortAnswer[l].slice(0, 155),
    path: `/perguntas/${slug}`,
    locale: locale as Locale,
  });
}

const COPY = {
  pt: {
    breadcrumb: "Perguntas",
    metaBy: "Por Dra. Izi Pinho, Esq. · Florida Bar #126610",
    publishedOn: "Publicado em",
    reviewedOn: "Revisado em",
    relatedH2: "Perguntas Relacionadas",
    disclaimer:
      "⚠️ Esta resposta é informativa e não constitui aconselhamento jurídico. Para orientação personalizada sobre sua situação, agende uma consulta com Dra. Izi Pinho.",
  },
  en: {
    breadcrumb: "Questions",
    metaBy: "By Attorney Izi Pinho, Esq. · Florida Bar #126610",
    publishedOn: "Published",
    reviewedOn: "Reviewed",
    relatedH2: "Related Questions",
    disclaimer:
      "⚠️ This answer is informational and does not constitute legal advice. For guidance on your specific situation, schedule a consultation with Attorney Izi Pinho.",
  },
  es: {
    breadcrumb: "Preguntas",
    metaBy: "Por Abogada Izi Pinho, Esq. · Florida Bar #126610",
    publishedOn: "Publicado",
    reviewedOn: "Revisado",
    relatedH2: "Preguntas Relacionadas",
    disclaimer:
      "⚠️ Esta respuesta es informativa y no constituye asesoría legal. Para orientación personalizada, agende consulta con la Dra. Izi Pinho.",
  },
} as const;

function formatDate(iso: string, locale: L) {
  const d = new Date(iso);
  const map = { pt: "pt-BR", en: "en-US", es: "es-419" } as const;
  return new Intl.DateTimeFormat(map[locale], {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(d);
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const l = locale as L;
  const faq = FAQS.find((f) => f.slug[l] === slug);
  if (!faq) notFound();
  const h = COPY[l];
  const url = `${SITE.url}/${l}/perguntas/${slug}`;
  const related = (faq.relatedQuestions ?? [])
    .map((id) => FAQS.find((f) => f.id === id))
    .filter((x): x is NonNullable<typeof x> => !!x);

  const faqPageSchema = faqSchema([
    { question: faq.question[l], answer: faq.shortAnswer[l] },
  ]);
  if (faq.speakable) {
    (faqPageSchema as unknown as { speakable: unknown }).speakable = {
      "@type": "SpeakableSpecification",
      cssSelector: [".answer-box"],
    };
  }

  return (
    <>
      <JsonLd data={faqPageSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Pinho Law", url: `${SITE.url}/${l}` },
          { name: h.breadcrumb, url: `${SITE.url}/${l}/perguntas` },
          { name: faq.question[l].slice(0, 50), url },
        ])}
      />

      <article className="bg-cream pt-20 pb-16 md:pt-28 md:pb-24">
        <Container>
          <FadeIn className="mx-auto max-w-3xl">
            <nav className="text-xs text-ink-muted">
              <Link href="/" className="hover:text-[#C9A961]">
                Pinho Law
              </Link>{" "}
              <span>/</span> <span>{h.breadcrumb}</span>{" "}
              <span>/</span>{" "}
              <span className="text-[#C9A961]">
                {faq.question[l].slice(0, 60)}
                {faq.question[l].length > 60 ? "…" : ""}
              </span>
            </nav>

            <h1 className="mt-5 font-heading text-3xl font-semibold leading-tight text-ink md:text-4xl">
              {faq.question[l]}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-ink-muted">
              <span>{h.metaBy}</span>
              <span>·</span>
              <span>
                {h.publishedOn} {formatDate(faq.publishedAt, l)}
              </span>
              <span>·</span>
              <span>
                {h.reviewedOn} {formatDate(faq.lastReviewedAt, l)}
              </span>
              {faq.visaLinked && (
                <>
                  <span>·</span>
                  <Link
                    href={`/immigration/${faq.visaLinked}`}
                    className="rounded-full border border-[#C9A961]/30 bg-[#C9A961]/5 px-2.5 py-0.5 font-medium text-[#C9A961] hover:bg-[#C9A961]/10"
                  >
                    {faq.visaLinked.toUpperCase()}
                  </Link>
                </>
              )}
            </div>

            <div className="answer-box mt-8 rounded-r-xl border-l-4 border-[#C9A961] bg-white p-6 shadow-sm md:p-8">
              <h2 className="sr-only">{l === "pt" ? "Resposta" : l === "es" ? "Respuesta" : "Answer"}</h2>
              <p className="text-base leading-relaxed text-ink md:text-lg">
                {faq.shortAnswer[l]}
              </p>
              {faq.longAnswer?.[l] && (
                <div className="mt-4 space-y-3 text-base leading-relaxed text-ink">
                  {faq.longAnswer[l]!.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-6 rounded-[var(--radius-md)] bg-[#0E1B2E] p-4 text-sm leading-relaxed text-white/85">
              {h.disclaimer}
            </div>

            {related.length > 0 && (
              <section className="mt-10">
                <h3 className="font-heading text-xl font-semibold text-ink">
                  {h.relatedH2}
                </h3>
                <ul className="mt-4 space-y-2">
                  {related.map((r) => (
                    <li key={r.id}>
                      <Link
                        href={`/perguntas/${r.slug[l]}`}
                        className="text-sm text-ink hover:text-[#C9A961]"
                      >
                        → {r.question[l]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </FadeIn>
        </Container>
      </article>

      <CtaSection />
    </>
  );
}
