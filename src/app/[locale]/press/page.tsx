import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/press",
  titles: { pt: "Imprensa & Prêmios", en: "Press & Awards", es: "Prensa y Premios" },
  descriptions: {
    pt: "Best Lawyers 4× (2021–2024), Orlando Magazine Mulher do Ano 2022, Orlando Business Journal 40 Under 40 2023, e mais 11 reconhecimentos.",
    en: "Best Lawyers 4× (2021–2024), Orlando Magazine Woman of the Year 2022, Orlando Business Journal 40 Under 40 2023, and 11 more honors.",
    es: "Best Lawyers 4×, Orlando Magazine Mujer del Año 2022, Orlando Business Journal 40 Under 40 2023, y 11 reconocimientos más.",
  },
});

export { generateMetadata };
export default Page;
