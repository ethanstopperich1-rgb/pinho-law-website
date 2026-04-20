import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/publications",
  titles: {
    pt: "Publicações Acadêmicas",
    en: "Published Scholarship",
    es: "Publicaciones Académicas",
  },
  descriptions: {
    pt: "Dra. Izi Pinho: The Advent of Benefit Corporations in Florida, 47 Stetson L. Rev. 333 (2018). Citado por Harvard Law School.",
    en: "Dra. Izi Pinho: The Advent of Benefit Corporations in Florida, 47 Stetson L. Rev. 333 (2018). Cited by Harvard Law School.",
    es: "Dra. Izi Pinho: The Advent of Benefit Corporations in Florida, 47 Stetson L. Rev. 333 (2018). Citada por Harvard Law School.",
  },
});

export { generateMetadata };
export default Page;
