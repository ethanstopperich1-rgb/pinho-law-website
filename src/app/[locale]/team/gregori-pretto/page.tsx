import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/team/gregori-pretto",
  titles: {
    pt: "Gregori Pretto — Senior Immigration Law Clerk",
    en: "Gregori Pretto — Senior Immigration Law Clerk",
    es: "Gregori Pretto — Senior Immigration Law Clerk",
  },
  descriptions: {
    pt: "Gregori Pretto: 8+ anos de experiência em imigração empresarial e familiar. Na Pinho Law desde 2019. Fluente em PT/EN.",
    en: "Gregori Pretto: 8+ years in business and family immigration. At Pinho Law since 2019. PT/EN.",
    es: "Gregori Pretto: 8+ años en inmigración empresarial y familiar.",
  },
});

export { generateMetadata };
export default Page;
