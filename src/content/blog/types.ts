// Blog article content types. Articles are typed data objects; the
// ArticleTemplate reads them and renders trilingual markup + schema.

export type L = "pt" | "en" | "es";

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string; id?: string }
  | { type: "list"; items: string[]; style?: "bullet" | "number" }
  | { type: "quote"; text: string; cite?: string }
  | { type: "callout"; tone: "alert" | "info" | "success"; title: string; body: string }
  | { type: "table"; headers: string[]; rows: string[][]; note?: string };

export interface ArticleFaq {
  q: string;
  a: string;
}

export interface ArticleRelatedLink {
  label: string;
  /** Locale-agnostic canonical EN path starting with `/`. */
  href: string;
}

export interface ArticleLocaleContent {
  title: string;
  description: string;
  /** Short hook shown on the blog index. */
  dek: string;
  readingMinutes: number;
  body: ArticleBlock[];
  faq: ArticleFaq[];
  related: ArticleRelatedLink[];
  /** Optional labeled breadcrumb for the article. Defaults to "Blog". */
  breadcrumbLabel?: string;
}

export interface Article {
  slug: string;
  datePublished: string; // YYYY-MM-DD
  dateModified?: string;
  keywords: string[];
  /** Hero image relative to /public. Defaults to /images/og/default.jpg. */
  image?: string;
  /** Article category pill. */
  category: { pt: string; en: string; es: string };
  content: Record<L, ArticleLocaleContent>;
}
