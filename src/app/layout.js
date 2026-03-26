import "./globals.css";
import Link from "next/link";
import SiteHeader from "../components/site/SiteHeader";
import { siteData } from "../data/site";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: siteData.name,
    template: `%s | ${siteData.name}`,
  },
  description: siteData.description,
  openGraph: {
    title: siteData.name,
    description: siteData.description,
    type: "website",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
