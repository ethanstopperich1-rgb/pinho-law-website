import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/immigration/immigrant-visas/family-green-card",
  titles: {
    pt: "Green Card por Família",
    en: "Family-Based Green Card",
    es: "Green Card por Familia",
  },
  descriptions: {
    pt: "Petições familiares: cônjuge, pais, filhos e irmãos de cidadãos e residentes americanos.",
    en: "Family petitions: spouse, parents, children, and siblings of US citizens and LPRs.",
    es: "Peticiones familiares: cónyuge, padres, hijos y hermanos.",
  },
});

export { generateMetadata };
export default Page;
