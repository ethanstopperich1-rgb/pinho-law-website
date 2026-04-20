import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/business/contracts",
  titles: {
    pt: "Contratos Empresariais",
    en: "Business Contracts",
    es: "Contratos Empresariales",
  },
  descriptions: {
    pt: "Contratos de sócios, prestação de serviços, NDA, aluguel comercial, franquia, emprego vs contratado independente.",
    en: "Shareholder, services, NDA, commercial lease, franchise, employment vs independent contractor.",
    es: "Contratos de socios, servicios, NDA, arrendamiento comercial, franquicia.",
  },
});

export { generateMetadata };
export default Page;
