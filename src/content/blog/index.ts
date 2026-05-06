import type { Article } from "./types";
import { trumpGoldCardVsEb2Niw2026 } from "./trump-gold-card-vs-eb2-niw-2026";
import { comprarImovelEuaViaLlcGuia } from "./comprar-imovel-eua-via-llc-guia";
import { abrirEmpresaEuaSendoBrasileiro } from "./abrir-empresa-eua-sendo-brasileiro";
import { eb5Brasileiros2026SemFila } from "./eb5-brasileiros-2026-sem-fila";
import { naturalizacaoAmericanaQuandoComo } from "./naturalizacao-americana-quando-como";
import { l1aExecutivosBrasileirosGuia } from "./l-1a-executivos-brasileiros-guia";
import { h1b2026Taxa100milSelecaoPonderada } from "./h-1b-2026-taxa-100mil-selecao-ponderada";
import { greenCardCasamentoGuia2026 } from "./green-card-casamento-guia-2026";
import { eb2NiwVsEb1a2026 } from "./eb-2-niw-vs-eb-1a-2026";
import { fbarFatcaBrasileirosEua } from "./fbar-fatca-brasileiros-eua";
import { duplaCidadaniaE2Brasileiros } from "./dupla-cidadania-e-2-brasileiros";
import { fimExtensaoAutomaticaEad2026 } from "./fim-extensao-automatica-ead-2026";

// Ordered by datePublished DESC — most recent first.
export const ARTICLES: readonly Article[] = [
  duplaCidadaniaE2Brasileiros,
  fimExtensaoAutomaticaEad2026,
  eb2NiwVsEb1a2026,
  fbarFatcaBrasileirosEua,
  greenCardCasamentoGuia2026,
  h1b2026Taxa100milSelecaoPonderada,
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
