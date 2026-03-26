import { quotes } from "../../data/quotes";

export const metadata = {
  title: "Quotes I Love",
  description:
    "A small collection of favorite quotes on work, life, clarity, time, courage, and interior steadiness.",
  alternates: {
    canonical: "/quotes",
  },
};

export default function QuotesPage() {
  return (
    <div className="page-stack">
      <section className="page-hero">
        <div>
          <span className="eyebrow">Quotes</span>
          <h1 className="page-title">A small collection of lines that have stayed with me.</h1>
          <p className="page-intro">
            Some quotes are just memorable. Others become companions. These are the ones I keep
            returning to when I need perspective, restraint, courage, or light.
          </p>
        </div>

        <aside className="aside-card aside-card--offset">
          <span className="small-caps">Why keep a quotes page?</span>
          <p className="detail-text">
            Because the lines we keep close often reveal more than a polished summary ever could.
          </p>
        </aside>
      </section>

      <div className="quote-grid">
        {quotes.map((quote) => (
          <article key={quote.id} className="quote-card">
            <p className="quote-text">&ldquo;{quote.text}&rdquo;</p>
            <div className="quote-card__footer">
              <strong className="quote-source">{quote.source}</strong>
              <p className="quote-note">{quote.note}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
