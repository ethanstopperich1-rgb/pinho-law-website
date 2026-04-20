import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/business/asset-protection",
  titles: {
    pt: "Proteção Patrimonial",
    en: "Asset Protection",
    es: "Protección Patrimonial",
  },
  descriptions: {
    pt: "Estrutura de proteção patrimonial em 5 camadas: LLC por ativo, holding, Florida Homestead, DAPT, umbrella insurance.",
    en: "5-layer asset protection: LLC per asset, holding, FL Homestead, DAPT, umbrella insurance.",
    es: "Protección patrimonial en 5 capas.",
  },
});

export { generateMetadata };
export default Page;
