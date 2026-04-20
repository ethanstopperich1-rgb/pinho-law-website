import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/immigration/non-immigrant-visas/l-1",
  titles: {
    pt: "Visto L-1 — Transferência Intra-empresa",
    en: "L-1 — Intracompany Transfer",
    es: "Visa L-1 — Transferencia Intraempresa",
  },
  descriptions: {
    pt: "L-1A e L-1B: transferência de executivos, gerentes e especialistas de empresa brasileira para filial americana.",
    en: "L-1A and L-1B: executive, manager, and specialized-knowledge transfer.",
    es: "L-1A y L-1B: transferencia intraempresa a filial estadounidense.",
  },
});

export { generateMetadata };
export default Page;
