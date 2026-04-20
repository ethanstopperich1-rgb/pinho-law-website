import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/contact",
  titles: { pt: "Contato", en: "Contact", es: "Contacto" },
  descriptions: {
    pt: "Fale com o Pinho Law: WhatsApp +1 (407) 385-4144, e-mail izi@pinholaw.com, 6965 Piazza Grande Ave, Suite 401, Orlando, FL 32835.",
    en: "Contact Pinho Law: WhatsApp +1 (407) 385-4144, izi@pinholaw.com, 6965 Piazza Grande Ave, Suite 401, Orlando, FL 32835.",
    es: "Contacte a Pinho Law: WhatsApp +1 (407) 385-4144, izi@pinholaw.com, 6965 Piazza Grande Ave, Suite 401, Orlando, FL 32835.",
  },
});

export { generateMetadata };
export default Page;
