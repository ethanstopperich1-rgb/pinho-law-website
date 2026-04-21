import type { Article } from "./types";
import { trumpGoldCardVsEb2Niw2026 } from "./trump-gold-card-vs-eb2-niw-2026";
import { comprarImovelEuaViaLlcGuia } from "./comprar-imovel-eua-via-llc-guia";
import { abrirEmpresaEuaSendoBrasileiro } from "./abrir-empresa-eua-sendo-brasileiro";
import { eb5Brasileiros2026SemFila } from "./eb5-brasileiros-2026-sem-fila";
import { naturalizacaoAmericanaQuandoComo } from "./naturalizacao-americana-quando-como";
import { l1aExecutivosBrasileirosGuia } from "./l-1a-executivos-brasileiros-guia";

// Ordered by datePublished DESC — most recent first.
export const ARTICLES: readonly Article[] = [
  l1aExecutivosBrasileirosGuia,
  naturalizacaoAmericanaQuandoComo,
  eb5Brasileiros2026SemFila,
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
