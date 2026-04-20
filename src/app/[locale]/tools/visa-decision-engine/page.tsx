import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { VisaEngine } from "@/components/visa-engine/VisaEngine";
import type { Locale } from "@/i18n/routing";
import type { EngineLocale } from "@/lib/visa-engine/types";

const TITLES = {
  pt: "Motor de Decisão de Visto — Qual visto é o certo para você? | Pinho Law",
  en: "Visa Decision Engine — Which visa is right for you? | Pinho Law",
  es: "Motor de Decisión de Visa — ¿Qué visa es correcta para ti? | Pinho Law",
} as const;

const DESCRIPTIONS = {
  pt: "Ferramenta gratuita com IA que analisa sua situação e recomenda o visto ideal em menos de 2 minutos — EB-2 NIW, EB-5, L-1, E-2, Green Card por casamento.",
  en: "Free AI-powered tool that analyzes your situation and recommends the right visa in under 2 minutes — EB-2 NIW, EB-5, L-1, E-2, marriage green card.",
  es: "Herramienta gratuita con IA que analiza tu situación y recomienda la visa correcta en menos de 2 minutos — EB-2 NIW, EB-5, L-1, E-2, Green Card por matrimonio.",
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const key = locale as keyof typeof TITLES;
  return createPageMetadata({
    title: TITLES[key],
    description: DESCRIPTIONS[key],
    path: "/tools/visa-decision-engine",
    locale: locale as Locale,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <VisaEngine locale={locale as EngineLocale} />;
}
