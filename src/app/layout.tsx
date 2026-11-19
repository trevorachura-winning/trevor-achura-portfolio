import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { portfolio } from "@/content/portfolio";
import { personJsonLd } from "@/lib/structured-data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
  variable: "--font-inter",
});

const { site, profile } = portfolio;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s · ${profile.name}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  authors: [{ name: profile.name, url: site.url }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: site.url,
    siteName: profile.name,
    title: site.title,
    description: site.description,
    locale: site.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}
        <script
          type="application/ld+json"
          // Built from typed, verified content only — no user input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd(portfolio)).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
