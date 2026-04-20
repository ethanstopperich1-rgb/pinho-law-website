import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/expand-business-usa",
  titles: {
    pt: "Quero expandir meu negócio para os EUA",
    en: "Expanding my business to the USA",
    es: "Expandir mi negocio a EE.UU.",
  },
  descriptions: {
    pt: "Estratégia integrada para empresários brasileiros: abertura de empresa nos EUA, visto L-1 ou E-2, proteção patrimonial e tributação Brasil-EUA.",
    en: "Integrated strategy for Brazilian entrepreneurs: US entity formation, L-1 or E-2 visa, asset protection, and cross-border taxation.",
    es: "Estrategia integrada para empresarios: formación de empresa en EE.UU., visa L-1 o E-2, protección patrimonial y tributación transfronteriza.",
  },
});

export { generateMetadata };
export default Page;
