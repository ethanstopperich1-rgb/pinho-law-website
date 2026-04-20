import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/american-dream",
  titles: {
    pt: "Quero me mudar para os EUA",
    en: "I want to move to the USA",
    es: "Quiero mudarme a EE.UU.",
  },
  descriptions: {
    pt: "Descubra o caminho de visto certo para você: EB-2 NIW, EB-5, L-1, E-2, Green Card por casamento. Avaliação gratuita em português.",
    en: "Find the right visa path for your situation: EB-2 NIW, EB-5, L-1, E-2, marriage green card. Free case review.",
    es: "Descubra la ruta de visa adecuada: EB-2 NIW, EB-5, L-1, E-2, Green Card por matrimonio. Evaluación gratuita.",
  },
});

export { generateMetadata };
export default Page;
