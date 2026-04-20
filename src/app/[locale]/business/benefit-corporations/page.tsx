import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/business/benefit-corporations",
  titles: {
    pt: "Benefit Corporations na Flórida — Citada por Harvard",
    en: "Florida Benefit Corporations — Harvard-Cited Scholarship",
    es: "Benefit Corporations en Florida — Citada por Harvard",
  },
  descriptions: {
    pt: "Estrutura para empresas com propósito. Dra. Izi publicou 47 Stetson L. Rev. 333 (2018), citada pelo Harvard Law School Forum on Corporate Governance.",
    en: "Purpose-driven entity structure. Dra. Izi authored 47 Stetson L. Rev. 333 (2018), cited by Harvard Law School Forum on Corporate Governance.",
    es: "Estructura para empresas con propósito. Dra. Izi publicó 47 Stetson L. Rev. 333 (2018).",
  },
});

export { generateMetadata };
export default Page;
