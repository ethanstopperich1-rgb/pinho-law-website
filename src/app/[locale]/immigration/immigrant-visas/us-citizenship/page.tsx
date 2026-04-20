import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/immigration/immigrant-visas/us-citizenship",
  titles: {
    pt: "Naturalização Americana (N-400)",
    en: "US Citizenship (N-400)",
    es: "Ciudadanía Estadounidense (N-400)",
  },
  descriptions: {
    pt: "Naturalização americana: 3 anos (casado com cidadão) ou 5 anos. Brasil permite dupla cidadania.",
    en: "US citizenship by naturalization: 3 yrs (USC spouse) or 5 yrs. Brazil allows dual citizenship.",
    es: "Ciudadanía estadounidense por naturalización.",
  },
});

export { generateMetadata };
export default Page;
