import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { PlaceholderPage } from "@/components/sections/placeholder-page";
import type { Locale } from "@/i18n/routing";

type LocaleKey = "pt" | "en" | "es";

export type PlaceholderRouteSpec = {
  path: string;
  titles: Record<LocaleKey, string>;
  descriptions: Record<LocaleKey, string>;
};

export function makePlaceholderRoute(spec: PlaceholderRouteSpec) {
  async function generateMetadata({
    params,
  }: {
    params: Promise<{ locale: string }>;
  }) {
    const { locale } = await params;
    const key = locale as LocaleKey;
    return createPageMetadata({
      title: spec.titles[key],
      description: spec.descriptions[key],
      path: spec.path,
      locale: locale as Locale,
    });
  }

  async function Page({
    params,
  }: {
    params: Promise<{ locale: string }>;
  }) {
    const { locale } = await params;
    setRequestLocale(locale);
    const key = locale as LocaleKey;
    return <PlaceholderPage locale={key} title={spec.titles[key]} />;
  }

  return { generateMetadata, Page };
}
