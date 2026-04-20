import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/immigration/non-immigrant-visas/visa-extension",
  titles: {
    pt: "Extensão de Visto Não-Imigrante",
    en: "Non-Immigrant Visa Extension",
    es: "Extensión de Visa No Inmigrante",
  },
  descriptions: {
    pt: "Extensão de visto via I-539 (dependentes) ou I-129 (trabalho). Deve ser protocolada antes do vencimento.",
    en: "Visa extension via I-539 (dependents) or I-129 (work). File before status expires.",
    es: "Extensión de visa vía I-539 o I-129.",
  },
});

export { generateMetadata };
export default Page;
