import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/team/gabriel-marinho",
  titles: {
    pt: "Gabriel Marinho — Case Manager",
    en: "Gabriel Marinho — Case Manager",
    es: "Gabriel Marinho — Case Manager",
  },
  descriptions: {
    pt: "Gabriel Marinho: Case Manager. Comunicação com o cliente, gestão de documentos, portal USCIS. Bilíngue PT/EN.",
    en: "Gabriel Marinho: Case Manager. Client communication, document management, USCIS portal. PT/EN.",
    es: "Gabriel Marinho: Case Manager bilingüe PT/EN.",
  },
});

export { generateMetadata };
export default Page;
