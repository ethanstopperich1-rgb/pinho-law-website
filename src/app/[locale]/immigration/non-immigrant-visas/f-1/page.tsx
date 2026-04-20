import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/immigration/non-immigrant-visas/f-1",
  titles: {
    pt: "Visto F-1 — Estudante",
    en: "F-1 Student Visa",
    es: "Visa F-1 — Estudiante",
  },
  descriptions: {
    pt: "F-1: visto de estudante em escola certificada SEVP. OPT 12 meses + STEM OPT 24 meses após a formatura.",
    en: "F-1 student visa at SEVP-certified schools. 12-month OPT + 24-month STEM OPT.",
    es: "Visa F-1 de estudiante en escuelas SEVP. OPT de 12 meses + STEM OPT de 24 meses.",
  },
});

export { generateMetadata };
export default Page;
