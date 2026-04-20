import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/immigration/immigrant-visas/marriage-us-citizen",
  titles: {
    pt: "Green Card por Casamento com Cidadão Americano",
    en: "Marriage Green Card — US Citizen Spouse",
    es: "Green Card por Matrimonio — Cónyuge Estadounidense",
  },
  descriptions: {
    pt: "Green card por casamento com cidadão(ã) americano(a): 10–13 meses, data de prioridade sempre CURRENT.",
    en: "Marriage to a US citizen: 10–13 months, priority date always CURRENT.",
    es: "Matrimonio con ciudadano estadounidense: 10–13 meses.",
  },
});

export { generateMetadata };
export default Page;
