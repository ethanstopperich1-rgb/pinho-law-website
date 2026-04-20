import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/business/llc-formation",
  titles: {
    pt: "Abertura de LLC na Flórida para Brasileiros",
    en: "Florida LLC Formation for Brazilians",
    es: "Formación de LLC en Florida para Brasileños",
  },
  descriptions: {
    pt: "Abertura de LLC na Flórida: Articles, EIN, Operating Agreement, conta bancária, BOI Report. Para não-residentes.",
    en: "Florida LLC formation: Articles, EIN, Operating Agreement, bank, BOI Report. For non-residents.",
    es: "Formación de LLC en Florida para no-residentes.",
  },
});

export { generateMetadata };
export default Page;
