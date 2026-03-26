import "./globals.css";
import Link from "next/link";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import SiteHeader from "../components/site/SiteHeader";
import { siteData } from "../data/site";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-manrope",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-cormorant",
});

export const metadata = {
  metadataBase: new URL("https://omedale.com"),
  title: {
    default: siteData.name,
    template: `%s | ${siteData.name}`,
  },
  description: siteData.description,
  authors: [{ name: "Oluwafemi Medale", url: "https://omedale.com" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteData.name,
    description: siteData.description,
    type: "website",
    url: "https://omedale.com",
    siteName: siteData.name,
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteData.name} personal website`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.name,
    description: siteData.description,
    images: ["/opengraph-image"],
  },
};

export const viewport = {
  themeColor: "#151b22",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteData.name,
    url: "https://omedale.com",
    description: siteData.description,
    author: {
      "@type": "Person",
      name: "Oluwafemi Medale",
      url: "https://omedale.com/about",
      jobTitle: "Software Engineer",
      sameAs: [siteData.github, siteData.linkedin],
    },
  };

  return (
    <html lang="en" className={`${manrope.variable} ${cormorant.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <div className="site-shell">
          <SiteHeader />

          <main className="site-main">{children}</main>

          <footer className="site-footer">
            <div className="site-footer__inner">
              <span>{siteData.footerLine}</span>
              <div className="site-footer__links">
                <a href={siteData.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={siteData.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <Link href="/quotes">Quotes</Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
