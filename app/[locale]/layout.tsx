import type {Metadata} from "next";
import {Anton, Karla, Caveat} from "next/font/google";
import {NextIntlClientProvider, hasLocale} from "next-intl";
import {getTranslations, setRequestLocale} from "next-intl/server";
import {notFound} from "next/navigation";
import {routing} from "@/i18n/routing";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import RevealOnScroll from "@/components/RevealOnScroll";
import "../globals.css";

const anton = Anton({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  display: "swap",
  variable: "--font-anton",
});

const karla = Karla({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-karla",
});

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caveat",
  preload: false,
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: "meta"});
  return {
    title: t("title"),
    description: t("description"),
    metadataBase: new URL("https://carmenramirez.fit"),
    alternates: {
      canonical: locale === "es" ? "/" : `/${locale}`,
      languages: {
        es: "/",
        en: "/en",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${anton.variable} ${karla.variable} ${caveat.variable}`}
    >
      <body className="min-h-screen">
        <NextIntlClientProvider>
          <RevealOnScroll />
          <Nav />
          <main>{children}</main>
          <Footer />
          <FloatingCTA />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
