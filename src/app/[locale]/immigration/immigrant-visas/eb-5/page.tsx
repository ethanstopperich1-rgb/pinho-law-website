import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/immigration/immigrant-visas/eb-5",
  titles: {
    pt: "Visto EB-5 para Brasileiros — Investimento US$ 800K",
    en: "EB-5 Investor Green Card — $800K",
    es: "Visa EB-5 — Inversión US$ 800K",
  },
  descriptions: {
    pt: "EB-5 para brasileiros: investimento US$ 800K (Rural/TEA) ou US$ 1,05M. Brasil sem backlog em 2026.",
    en: "EB-5 for Brazilians: $800K (Rural/TEA) or $1.05M. Brazil priority-date CURRENT in 2026.",
    es: "EB-5 para brasileños: inversión US$ 800K o US$ 1,05M.",
  },
});

export { generateMetadata };
export default Page;
