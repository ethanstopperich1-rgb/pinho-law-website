import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/immigration/immigrant-visas",
  titles: {
    pt: "Vistos de Imigrante (Green Cards)",
    en: "Immigrant Visas (Green Cards)",
    es: "Visas de Inmigrante (Green Cards)",
  },
  descriptions: {
    pt: "Green Cards e vistos de imigrante para brasileiros: EB-1, EB-2 NIW, EB-3, EB-5, casamento, família, cidadania.",
    en: "Green Cards and immigrant visas: EB-1, EB-2 NIW, EB-3, EB-5, marriage, family, citizenship.",
    es: "Green Cards y visas de inmigrante: EB-1, EB-2 NIW, EB-3, EB-5, matrimonio, familia, ciudadanía.",
  },
});

export { generateMetadata };
export default Page;
