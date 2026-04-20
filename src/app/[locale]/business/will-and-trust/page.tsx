import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/business/will-and-trust",
  titles: {
    pt: "Will e Trust nos EUA para Brasileiros",
    en: "Will & Trust for Brazilians in the US",
    es: "Testamento y Trust en EE.UU. para Brasileños",
  },
  descriptions: {
    pt: "Testamento americano e Revocable Living Trust. Testamento brasileiro NÃO rege bens nos EUA — sucessão segue lex situs.",
    en: "US will and Revocable Living Trust. Brazilian testament does NOT govern US assets (lex situs).",
    es: "Testamento estadounidense y Revocable Living Trust.",
  },
});

export { generateMetadata };
export default Page;
