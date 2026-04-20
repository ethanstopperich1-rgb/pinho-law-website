import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/immigration/non-immigrant-visas",
  titles: {
    pt: "Vistos Não-Imigrantes",
    en: "Non-Immigrant Visas",
    es: "Visas de No Inmigrante",
  },
  descriptions: {
    pt: "Vistos de trabalho e estudo nos EUA: E-2, L-1, O-1, H-1B, F-1 e mais.",
    en: "US work and study visas: E-2, L-1, O-1, H-1B, F-1 and more.",
    es: "Visas de trabajo y estudio en EE.UU.: E-2, L-1, O-1, H-1B, F-1 y más.",
  },
});

export { generateMetadata };
export default Page;
