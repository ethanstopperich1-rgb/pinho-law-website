import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/real-estate",
  titles: {
    pt: "Direito Imobiliário na Flórida",
    en: "Florida Real Estate Law",
    es: "Derecho Inmobiliario en Florida",
  },
  descriptions: {
    pt: "Advocacia imobiliária para brasileiros na Flórida: FIRPTA, fechamento, LLC, investimento.",
    en: "Florida real estate counsel for Brazilians: FIRPTA, closing, LLC, investment.",
    es: "Asesoría inmobiliaria en Florida para brasileños.",
  },
});

export { generateMetadata };
export default Page;
