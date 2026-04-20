import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/real-estate/commercial-closing",
  titles: {
    pt: "Fechamento Comercial",
    en: "Commercial Closing",
    es: "Cierre Comercial",
  },
  descriptions: {
    pt: "Fechamento de imóveis comerciais: multifamily, offices, short-term rentals, terreno e desenvolvimento.",
    en: "Commercial closings: multifamily, offices, STR portfolios, land and development.",
    es: "Cierre comercial: multifamily, oficinas, STR, terreno.",
  },
});

export { generateMetadata };
export default Page;
