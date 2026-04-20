import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/real-estate/title-review",
  titles: {
    pt: "Revisão de Título Imobiliário",
    en: "Title Review",
    es: "Revisión de Título",
  },
  descriptions: {
    pt: "Revisão de histórico de título (30–60 anos), identificação de liens, servidões, restrições e emissão de title insurance.",
    en: "30–60 year title history review, liens, easements, restrictions, title insurance issuance.",
    es: "Revisión de historial de título e identificación de gravámenes.",
  },
});

export { generateMetadata };
export default Page;
