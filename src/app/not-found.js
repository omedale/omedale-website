import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-stack">
      <section className="page-hero">
        <div>
          <span className="eyebrow">404</span>
          <h1 className="page-title">This page wandered off.</h1>
          <p className="page-intro">
            The page you are looking for is not here, but the rest of the site still is.
          </p>
          <div className="hero-actions">
            <Link href="/" className="button-link">
              Return home
            </Link>
            <Link href="/blog" className="ghost-link">
              Visit writing
            </Link>
          </div>
        </div>

        <div className="not-found-art">
          <svg
            width="180"
            height="180"
            viewBox="0 0 180 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle cx="90" cy="90" r="72" stroke="#728f84" strokeWidth="1" strokeDasharray="6 8" />
            <circle cx="90" cy="90" r="48" stroke="#d27b49" strokeWidth="0.8" strokeDasharray="3 6" />
            <circle cx="90" cy="90" r="24" stroke="#b89a6f" strokeWidth="0.6" opacity="0.6" />
            <line x1="18" y1="90" x2="162" y2="90" stroke="#728f84" strokeWidth="0.5" opacity="0.3" />
            <line x1="90" y1="18" x2="90" y2="162" stroke="#728f84" strokeWidth="0.5" opacity="0.3" />
            <circle cx="90" cy="18" r="3" fill="#d27b49" opacity="0.5" />
            <circle cx="162" cy="90" r="2.5" fill="#728f84" opacity="0.5" />
            <circle cx="90" cy="162" r="2" fill="#b89a6f" opacity="0.4" />
          </svg>
        </div>
      </section>
    </div>
  );
}
