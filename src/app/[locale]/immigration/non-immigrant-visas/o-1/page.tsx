import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/immigration/non-immigrant-visas/o-1",
  titles: {
    pt: "Visto O-1 — Habilidade Extraordinária",
    en: "O-1 — Extraordinary Ability Visa",
    es: "Visa O-1 — Habilidad Extraordinaria",
  },
  descriptions: {
    pt: "O-1A e O-1B para artistas, atletas, cientistas e executivos com reconhecimento excepcional. Sem cap, sem loteria.",
    en: "O-1A and O-1B for artists, athletes, scientists, executives. No cap, no lottery.",
    es: "O-1A y O-1B para artistas, atletas, científicos y ejecutivos.",
  },
});

export { generateMetadata };
export default Page;
