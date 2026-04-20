import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/immigration/non-immigrant-visas/change-of-status",
  titles: {
    pt: "Mudança de Status — Change of Status",
    en: "Change of Status",
    es: "Cambio de Estatus",
  },
  descriptions: {
    pt: "Mudança de status dentro dos EUA: de turismo para estudante, de estudante para trabalho, e outras combinações válidas.",
    en: "Change of status within the US: tourist to student, student to work, and other valid transitions.",
    es: "Cambio de estatus dentro de EE.UU.",
  },
});

export { generateMetadata };
export default Page;
