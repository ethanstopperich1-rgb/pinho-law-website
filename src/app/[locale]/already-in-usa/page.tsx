import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/already-in-usa",
  titles: {
    pt: "Já estou nos EUA",
    en: "I'm already in the USA",
    es: "Ya estoy en EE.UU.",
  },
  descriptions: {
    pt: "Green Card, cidadania, compra de imóvel, Will & Trust, proteção patrimonial. Escritório brasileiro em Orlando para sua vida americana.",
    en: "Green card, citizenship, home purchase, Will & Trust, asset protection. Brazilian-led firm in Orlando for your American life.",
    es: "Green Card, ciudadanía, compra de vivienda, Will & Trust, protección patrimonial. Despacho brasileño en Orlando.",
  },
});

export { generateMetadata };
export default Page;
