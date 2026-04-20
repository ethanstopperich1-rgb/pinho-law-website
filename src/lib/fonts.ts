import { Newsreader } from "next/font/google";

// Newsreader — Production Type.
// Variable serif with optical sizes designed for long-form screen reading.
// Single family for the entire site (per brand direction 2026-04-20).
//
// We instantiate next/font twice so each call wires a distinct CSS var
// (--font-heading and --font-body). Next.js dedupes the actual woff2
// files behind the scenes, so there is no download penalty for calling
// the same family under two variable names — it's just two aliases
// pointing at the same file.

export const cormorantGaramond = Newsreader({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-heading",
});

export const dmSans = Newsreader({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-body",
});
