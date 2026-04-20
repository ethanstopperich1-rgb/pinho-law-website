import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/immigration/non-immigrant-visas/p",
  titles: {
    pt: "Visto P — Artistas e Atletas",
    en: "P Visa — Artists and Athletes",
    es: "Visa P — Artistas y Atletas",
  },
  descriptions: {
    pt: "P-1, P-2, P-3 para grupos musicais, atletas e artistas culturais em turnê pelos EUA.",
    en: "P-1, P-2, P-3 for music groups, athletes, and cultural performers touring the US.",
    es: "P-1, P-2, P-3 para grupos musicales, atletas y artistas culturales.",
  },
});

export { generateMetadata };
export default Page;
