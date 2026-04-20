import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/real-estate/investment-structuring",
  titles: {
    pt: "Estruturação de Investimento Imobiliário",
    en: "Real Estate Investment Structuring",
    es: "Estructuración de Inversión Inmobiliaria",
  },
  descriptions: {
    pt: "LLC por imóvel + LLC holding + 1031 exchange + estrutura de STR em Orlando para investidores brasileiros.",
    en: "LLC per property + holding LLC + 1031 exchange + Orlando STR structure.",
    es: "LLC por propiedad + LLC holding + 1031 exchange.",
  },
});

export { generateMetadata };
export default Page;
