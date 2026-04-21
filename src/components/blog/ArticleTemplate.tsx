import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { JsonLd } from "@/components/seo/json-ld";
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
} from "@/lib/schema";
import { SITE } from "@/lib/constants";
import { Link } from "@/i18n/navigation";
import { AlertTriangle, CheckCircle2, Info } from "lucide-react";
import type { Article, ArticleBlock, L } from "@/content/blog/types";

const LOCALE_MAP: Record<L, string> = {
  pt: "pt-BR",
  en: "en-US",
  es: "es-419",
};

const BACK_LABEL: Record<L, string> = {
  pt: "Todos os artigos",
  en: "All articles",
  es: "Todos los artículos",
};

const TABLE_OF_CONTENTS_LABEL: Record<L, string> = {
  pt: "Índice",
  en: "Contents",
  es: "Índice",
};

const READING_LABEL: Record<L, (m: number) => string> = {
  pt: (m) => `${m} min de leitura`,
  en: (m) => `${m} min read`,
  es: (m) => `${m} min de lectura`,
};

const FAQ_LABEL: Record<L, string> = {
  pt: "Perguntas frequentes",
  en: "Frequently asked questions",
  es: "Preguntas frecuentes",
};

const RELATED_LABEL: Record<L, string> = {
  pt: "Continue lendo",
  en: "Keep reading",
  es: "Sigue leyendo",
};

const AUTHORED_BY: Record<L, string> = {
  pt: "Revisado por Dra. Izi Pinho — Florida Bar #126610",
  en: "Reviewed by Dra. Izi Pinho — Florida Bar #126610",
  es: "Revisado por Dra. Izi Pinho — Florida Bar #126610",
};

interface Props {
  article: Article;
  locale: L;
}

export function ArticleTemplate({ article, locale }: Props) {
  const content = article.content[locale];
  const url = `${SITE.url}/${locale}/blog/${article.slug}`;
  const h2Items = content.body
    .filter((b): b is Extract<ArticleBlock, { type: "h2" }> => b.type === "h2")
    .map((b) => ({ text: b.text, id: slugify(b.id ?? b.text) }));

  return (
    <>
      <JsonLd
        data={articleSchema({
          headline: content.title,
          description: content.description,
          url,
          datePublished: article.datePublished,
          dateModified: article.dateModified,
          locale: LOCALE_MAP[locale],
          keywords: article.keywords,
          wordCount: content.body
            .map((b) => ("text" in b ? b.text : "items" in b ? b.items.join(" ") : ""))
            .join(" ")
            .split(/\s+/).length,
          articleSection: article.category[locale],
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Pinho Law", url: `${SITE.url}/${locale}` },
          { name: "Blog", url: `${SITE.url}/${locale}/blog` },
          { name: content.title, url },
        ])}
      />
      {content.faq.length > 0 && (
        <JsonLd
          data={faqSchema(
            content.faq.map((f) => ({ question: f.q, answer: f.a })),
          )}
        />
      )}

      <article className="bg-cream pt-20 pb-24 md:pt-28 md:pb-32">
        <Container>
          <FadeIn className="mx-auto max-w-3xl">
            <nav className="flex items-center gap-2 text-xs text-ink-muted">
              <Link href="/blog" className="hover:text-gold">
                {BACK_LABEL[locale]}
              </Link>
              <span>·</span>
              <span className="text-gold">{article.category[locale]}</span>
            </nav>

            <h1 className="mt-5 font-heading text-3xl font-semibold leading-tight text-ink md:text-5xl">
              {content.title}
            </h1>
            <p className="mt-4 text-base text-ink-muted md:text-lg">
              {content.dek}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-ink-muted">
              <span>{AUTHORED_BY[locale]}</span>
              <span>·</span>
              <time dateTime={article.datePublished}>
                {formatDate(article.datePublished, locale)}
              </time>
              <span>·</span>
              <span>{READING_LABEL[locale](content.readingMinutes)}</span>
            </div>

            {h2Items.length >= 3 && (
              <nav
                aria-label={TABLE_OF_CONTENTS_LABEL[locale]}
                className="mt-8 rounded-[var(--radius-md)] border border-gold/20 bg-white p-5 text-sm"
              >
                <div className="text-xs font-medium uppercase tracking-wider text-gold">
                  {TABLE_OF_CONTENTS_LABEL[locale]}
                </div>
                <ul className="mt-2 space-y-1">
                  {h2Items.map((item) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="text-ink hover:text-gold">
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            <div className="mt-10 space-y-6">
              {content.body.map((b, i) => (
                <BodyBlock key={i} block={b} />
              ))}
            </div>

            {content.faq.length > 0 && (
              <section className="mt-14">
                <h2 className="font-heading text-2xl font-semibold text-ink md:text-3xl">
                  {FAQ_LABEL[locale]}
                </h2>
                <dl className="mt-6 space-y-5">
                  {content.faq.map((f, i) => (
                    <div
                      key={i}
                      className="rounded-[var(--radius-md)] border border-border bg-white p-5"
                    >
                      <dt className="font-heading text-base font-semibold text-ink">
                        {f.q}
                      </dt>
                      <dd className="mt-2 text-sm leading-relaxed text-ink-muted">
                        {f.a}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}

            {content.related.length > 0 && (
              <section className="mt-14">
                <h2 className="font-heading text-2xl font-semibold text-ink md:text-3xl">
                  {RELATED_LABEL[locale]}
                </h2>
                <ul className="mt-6 space-y-2">
                  {content.related.map((r) => (
                    <li key={r.href}>
                      <Link
                        href={r.href}
                        className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-gold"
                      >
                        <span className="text-gold">→</span>
                        {r.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </FadeIn>
        </Container>
      </article>
    </>
  );
}

function BodyBlock({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "p":
      return <p className="text-base leading-relaxed text-ink md:text-lg">{block.text}</p>;
    case "h2":
      return (
        <h2
          id={slugify(block.id ?? block.text)}
          className="scroll-mt-28 pt-4 font-heading text-2xl font-semibold text-ink md:text-3xl"
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3
          id={slugify(block.id ?? block.text)}
          className="scroll-mt-28 pt-2 font-heading text-xl font-semibold text-ink md:text-2xl"
        >
          {block.text}
        </h3>
      );
    case "list": {
      const Tag = block.style === "number" ? "ol" : "ul";
      return (
        <Tag
          className={
            block.style === "number"
              ? "ml-5 list-decimal space-y-2 text-base leading-relaxed text-ink md:text-lg"
              : "space-y-2 text-base leading-relaxed text-ink md:text-lg"
          }
        >
          {block.items.map((it, i) => (
            <li key={i} className="flex gap-3">
              {block.style !== "number" && (
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              )}
              <span>{it}</span>
            </li>
          ))}
        </Tag>
      );
    }
    case "quote":
      return (
        <blockquote className="border-l-4 border-gold bg-white px-5 py-3 italic text-ink">
          {block.text}
          {block.cite && (
            <footer className="mt-2 text-xs not-italic text-ink-muted">
              — {block.cite}
            </footer>
          )}
        </blockquote>
      );
    case "callout": {
      const tone = block.tone;
      const Icon = tone === "alert" ? AlertTriangle : tone === "success" ? CheckCircle2 : Info;
      const styles =
        tone === "alert"
          ? "border-red-500/30 bg-red-50 text-red-900"
          : tone === "success"
            ? "border-emerald-500/30 bg-emerald-50 text-emerald-900"
            : "border-gold/30 bg-gold/5 text-ink";
      const iconStyles =
        tone === "alert" ? "text-red-600" : tone === "success" ? "text-emerald-600" : "text-gold";
      return (
        <div className={`rounded-[var(--radius-md)] border p-5 ${styles}`}>
          <div className="flex items-start gap-3">
            <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${iconStyles}`} />
            <div>
              <div className="font-heading text-base font-semibold">{block.title}</div>
              <p className="mt-1 text-sm leading-relaxed">{block.body}</p>
            </div>
          </div>
        </div>
      );
    }
    case "table":
      return (
        <div className="overflow-x-auto rounded-[var(--radius-md)] border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-ink/5">
              <tr>
                {block.headers.map((h, i) => (
                  <th
                    key={i}
                    className="px-4 py-3 font-heading text-xs font-semibold uppercase tracking-wider text-ink"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className="border-t border-border">
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-3 align-top text-ink">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {block.note && (
            <div className="border-t border-border bg-cream px-4 py-2 text-xs italic text-ink-muted">
              {block.note}
            </div>
          )}
        </div>
      );
  }
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function formatDate(iso: string, locale: L): string {
  const d = new Date(iso);
  const map = { pt: "pt-BR", en: "en-US", es: "es-419" } as const;
  return new Intl.DateTimeFormat(map[locale], {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(d);
}
