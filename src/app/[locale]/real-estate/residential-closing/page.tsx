import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/real-estate/residential-closing",
  titles: {
    pt: "Fechamento Residencial na Flórida",
    en: "Florida Residential Closing",
    es: "Cierre Residencial en Florida",
  },
  descriptions: {
    pt: "Representação em fechamentos residenciais: revisão de contrato, title search, title insurance, closing disclosure, registro.",
    en: "Residential closing representation: contract review, title search, title insurance, recording.",
    es: "Representación en cierres residenciales.",
  },
});

export { generateMetadata };
export default Page;
