import type { Article } from "./types";
import { trumpGoldCardVsEb2Niw2026 } from "./trump-gold-card-vs-eb2-niw-2026";
import { comprarImovelEuaViaLlcGuia } from "./comprar-imovel-eua-via-llc-guia";
import { abrirEmpresaEuaSendoBrasileiro } from "./abrir-empresa-eua-sendo-brasileiro";

// Ordered by datePublished DESC — most recent first.
export const ARTICLES: readonly Article[] = [
  abrirEmpresaEuaSendoBrasileiro,
  comprarImovelEuaViaLlcGuia,
  trumpGoldCardVsEb2Niw2026,
] as const;

export const ARTICLES_BY_SLUG: Readonly<Record<string, Article>> = Object.freeze(
  ARTICLES.reduce<Record<string, Article>>((acc, a) => {
    acc[a.slug] = a;
    return acc;
  }, {}),
);
