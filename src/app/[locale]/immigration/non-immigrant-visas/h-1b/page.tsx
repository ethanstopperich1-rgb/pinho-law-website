import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/immigration/non-immigrant-visas/h-1b",
  titles: {
    pt: "Visto H-1B — Ocupação Especializada",
    en: "H-1B — Specialty Occupation",
    es: "Visa H-1B — Ocupación Especializada",
  },
  descriptions: {
    pt: "H-1B em 2026: taxa de US$ 100k, seleção por salário, loteria ~25–35%. Considere O-1 como alternativa.",
    en: "H-1B in 2026: $100K fee, wage-weighted selection, ~25–35% lottery. Consider O-1 alternative.",
    es: "H-1B en 2026: tarifa de US$ 100K, selección ponderada por salario.",
  },
});

export { generateMetadata };
export default Page;
