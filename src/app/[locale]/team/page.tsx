import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/team",
  titles: { pt: "Nossa Equipe", en: "Our Team", es: "Nuestro Equipo" },
  descriptions: {
    pt: "Equipe do Pinho Law: Dra. Izi Pinho, Gregori Pretto (Senior Immigration Law Clerk, 8+ anos), Hannah Dantas e Gabriel Marinho.",
    en: "The Pinho Law team: Izi Pinho (founder), Gregori Pretto (Senior Immigration Law Clerk, 8+ yrs), Hannah Dantas, Gabriel Marinho.",
    es: "El equipo de Pinho Law: Izi Pinho (fundadora), Gregori Pretto (Senior Immigration Law Clerk), Hannah Dantas, Gabriel Marinho.",
  },
});

export { generateMetadata };
export default Page;
