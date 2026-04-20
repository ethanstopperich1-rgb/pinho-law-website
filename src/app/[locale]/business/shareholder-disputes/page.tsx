import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/business/shareholder-disputes",
  titles: {
    pt: "Disputas Societárias",
    en: "Shareholder Disputes",
    es: "Disputas Societarias",
  },
  descriptions: {
    pt: "Mediação e litígio de disputas entre sócios: opressão minoritária, quebras de dever fiduciário, dissolução forçada.",
    en: "Mediation and litigation: minority oppression, fiduciary-duty breaches, forced dissolution.",
    es: "Mediación y litigio de disputas societarias.",
  },
});

export { generateMetadata };
export default Page;
