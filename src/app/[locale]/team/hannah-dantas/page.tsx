import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/team/hannah-dantas",
  titles: {
    pt: "Hannah Dantas — Case Manager",
    en: "Hannah Dantas — Case Manager",
    es: "Hannah Dantas — Case Manager",
  },
  descriptions: {
    pt: "Hannah Dantas: Case Manager. Comunicação com o cliente, gestão de documentos, portal USCIS. Bilíngue PT/EN.",
    en: "Hannah Dantas: Case Manager. Client communication, document management, USCIS portal. PT/EN.",
    es: "Hannah Dantas: Case Manager bilingüe PT/EN.",
  },
});

export { generateMetadata };
export default Page;
