import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/real-estate/foreign-buyer-firpta",
  titles: {
    pt: "Brasileiro Comprando Imóvel nos EUA — FIRPTA",
    en: "Brazilian Buying US Real Estate — FIRPTA",
    es: "Brasileño Comprando Inmueble en EE.UU. — FIRPTA",
  },
  descriptions: {
    pt: "Guia 2026: FIRPTA, LLC, ITIN, financiamento para não-residentes, BACEN, planejamento sucessório. Calculadora FIRPTA gratuita.",
    en: "2026 guide: FIRPTA, LLC, ITIN, non-resident financing, BACEN, estate planning. Free FIRPTA calculator.",
    es: "Guía 2026: FIRPTA, LLC, ITIN, financiamiento, BACEN.",
  },
});

export { generateMetadata };
export default Page;
