import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Pinho Law — Immigration & Business Law in Florida",
    template: "%s | Pinho Law",
  },
  description: SITE.description,
};

// Match the navy hero so mobile Chrome / Safari tab chrome tints
// to the brand color when the PWA is open.
export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0E1B2E" },
    { media: "(prefers-color-scheme: dark)", color: "#0E1B2E" },
  ],
  colorScheme: "light" as const,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
