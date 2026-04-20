import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/blog",
  titles: {
    pt: "Blog — Imigração, Empresarial e Imobiliário",
    en: "Blog — Immigration, Business, Real Estate",
    es: "Blog — Inmigración, Empresarial e Inmobiliario",
  },
  descriptions: {
    pt: "Artigos sobre imigração, direito empresarial e imobiliário nos EUA para brasileiros — por Dra. Izi Pinho.",
    en: "Articles on US immigration, business, and real estate law by Dra. Izi Pinho.",
    es: "Artículos sobre inmigración, derecho empresarial e inmobiliario en EE.UU.",
  },
});

export { generateMetadata };
export default Page;
