import { notFound } from "next/navigation";
import { GoogleAnalytics } from "@next/third-parties/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { dmSans, cormorantGaramond } from "@/lib/fonts";
import {
  iziPersonSchema,
  organizationSchema,
  webSiteSchema,
} from "@/lib/schema";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/ui/footer-section";
import { JsonLd } from "@/components/seo/json-ld";
import "@/styles/globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${dmSans.variable} ${cormorantGaramond.variable}`}
    >
      <body className="min-h-screen bg-warm-white text-ink antialiased">
        <NextIntlClientProvider messages={messages}>
          <JsonLd data={organizationSchema()} />
          <JsonLd data={webSiteSchema()} />
          <JsonLd data={iziPersonSchema()} />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </NextIntlClientProvider>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
