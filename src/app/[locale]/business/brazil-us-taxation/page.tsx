import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/business/brazil-us-taxation",
  titles: {
    pt: "Tributação Brasil-EUA — FBAR, FATCA, 5471",
    en: "Brazil–US Cross-Border Taxation",
    es: "Tributación Brasil-EE.UU.",
  },
  descriptions: {
    pt: "Declarações FBAR, FATCA, 8938, 5471, 8621, CBE/SISBACEN. Brasil e EUA NÃO têm tratado de não-bitributação ratificado.",
    en: "FBAR, FATCA, 8938, 5471, 8621, BACEN CBE. Brazil–US tax treaty was negotiated but never ratified.",
    es: "FBAR, FATCA, 8938, 5471, 8621, CBE/SISBACEN.",
  },
});

export { generateMetadata };
export default Page;
