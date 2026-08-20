import type { Metadata, Viewport } from "next";
import { Geist, Space_Grotesk } from "next/font/google";
import { siteConfig } from "@/config/site.config";
import { buildThemeStyleTag } from "@/lib/theme";
import { JsonLd } from "@/components/schema/JsonLd";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const { business, seo } = siteConfig;

  return {
    metadataBase: new URL(business.url),
    title: {
      default: `${business.name} — ${business.tagline}`,
      template: `%s — ${business.name}`,
    },
    description: business.description,
    keywords: seo.keywords,
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      title: business.name,
      description: business.description,
      url: business.url,
      siteName: business.name,
      locale: business.locale.replace("-", "_"),
    },
    twitter: {
      card: "summary_large_image",
      title: business.name,
      description: business.description,
      ...(seo.twitterHandle ? { site: seo.twitterHandle } : {}),
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export const viewport: Viewport = {
  themeColor: siteConfig.theme.colors.background,
  colorScheme: "light dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const themeStyleTag = buildThemeStyleTag(siteConfig.theme);

  return (
    <html
      lang={siteConfig.business.locale.split("-")[0]}
      className={`${geistSans.variable} ${spaceGrotesk.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <style id="theme-tokens" dangerouslySetInnerHTML={{ __html: themeStyleTag }} />
      </head>
      <body className="flex min-h-dvh flex-col bg-background font-sans text-foreground">
        <a
          href="#main-content"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-[100] focus-visible:rounded-md focus-visible:bg-primary focus-visible:px-4 focus-visible:py-2 focus-visible:text-primary-foreground"
        >
          Zum Inhalt springen
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <JsonLd />
      </body>
    </html>
  );
}
