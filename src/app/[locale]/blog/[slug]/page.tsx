import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { createArticleMetadata } from "@/lib/metadata";
import { ARTICLES, ARTICLES_BY_SLUG } from "@/content/blog";
import { ArticleTemplate } from "@/components/blog/ArticleTemplate";
import { routing, type Locale } from "@/i18n/routing";
import type { L } from "@/content/blog/types";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    ARTICLES.map((a) => ({ locale, slug: a.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const article = ARTICLES_BY_SLUG[slug];
  if (!article) return {};
  const c = article.content[locale as L];
  return createArticleMetadata({
    title: `${c.title} | Pinho Law`,
    description: c.description,
    path: `/blog/${slug}`,
    locale: locale as Locale,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    keywords: article.keywords,
    section: article.category[locale as L],
  });
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const article = ARTICLES_BY_SLUG[slug];
  if (!article) notFound();
  return <ArticleTemplate article={article} locale={locale as L} />;
}
