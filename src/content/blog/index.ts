import type { Article } from "./types";
import { trumpGoldCardVsEb2Niw2026 } from "./trump-gold-card-vs-eb2-niw-2026";

// Ordered by datePublished DESC — most recent first.
export const ARTICLES: readonly Article[] = [
  trumpGoldCardVsEb2Niw2026,
] as const;

export const ARTICLES_BY_SLUG: Readonly<Record<string, Article>> = Object.freeze(
  ARTICLES.reduce<Record<string, Article>>((acc, a) => {
    acc[a.slug] = a;
    return acc;
  }, {}),
);
