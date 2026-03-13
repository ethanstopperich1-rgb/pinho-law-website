import { Cormorant_Garamond, DM_Sans } from "next/font/google";

export const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

export const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
