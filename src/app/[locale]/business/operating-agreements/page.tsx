import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/business/operating-agreements",
  titles: {
    pt: "Operating Agreements Multilíngues",
    en: "Multilingual Operating Agreements",
    es: "Acuerdos Operativos Multilingües",
  },
  descriptions: {
    pt: "Operating Agreements em português, inglês ou bilíngues. Capital, distribuições, vesting, buy-sell, dissolução.",
    en: "Operating Agreements in EN, PT, or bilingual. Capital, distributions, vesting, buy-sell, dissolution.",
    es: "Acuerdos Operativos en ES, EN o bilingües.",
  },
});

export { generateMetadata };
export default Page;
