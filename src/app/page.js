import Link from "next/link";
import OrbitArtwork from "../components/site/OrbitArtwork";
import { quotes } from "../data/quotes";
import { siteData } from "../data/site";
import { getFeaturedPost, writingPosts } from "../data/writing";

export const metadata = {
  title: "Home",
  description:
    "Writing, favorite quotes, and reflective notes from Oluwafemi Medale on software, discipline, and a quieter kind of ambition.",
};

export default function HomePage() {
  const featuredPost = getFeaturedPost();
  const recentPosts = writingPosts.filter((post) => post.slug !== featuredPost.slug).slice(0, 2);
  const homeQuotes = quotes.slice(0, 3);

  return (
    <div className="page-stack">
      <section className="hero-card">
        <div className="hero-grid">
          <div>
            <span className="eyebrow">{siteData.location}</span>
            <h1 className="hero-title">A quieter kind of ambition.</h1>
            <p className="lead">
              I am {siteData.shortName}, a software engineer who cares about thoughtful systems,
              clear writing, and the inner work required to stay grounded while building a life.
            </p>
            <p className="lead">
              Publicly, I have spent years shipping software, publishing technical writing, and
              collaborating deeply with teams. Privately, I keep returning to the same themes:
              attention, discipline, meaning, and the slow craft of becoming better.
            </p>

            <div className="hero-actions">
              <Link href="/blog" className="button-link">
                Read writing
              </Link>
              <Link href="/quotes" className="ghost-link">
                Quotes I love
              </Link>
            </div>
          </div>

          <div className="hero-aside">
            <div className="art-frame">
              <OrbitArtwork />
            </div>
          </div>
        </div>
      </section>

      <section className="surface-grid">
        <article className="surface-card">
          <span className="surface-label">A few beliefs</span>
          <h2 className="surface-emphasis">Build slowly, but build well.</h2>
          <p className="surface-text">
            I value thoughtfulness over noise and depth over performance.
          </p>
        </article>

        <article className="surface-card">
          <span className="surface-label">What stays important</span>
          <h2 className="surface-emphasis">Attention shapes everything.</h2>
          <p className="surface-text">
            What we repeat in ordinary hours eventually becomes the shape of a life.
          </p>
        </article>

        <article className="surface-card">
          <span className="surface-label">How I work</span>
          <h2 className="surface-emphasis">Collaborative, careful, steady.</h2>
          <p className="surface-text">
            The public story says engineer. The deeper story is care, curiosity, and craft.
          </p>
        </article>

        <article className="surface-card surface-card--wide">
          <span className="surface-label">A brief note</span>
          <h2 className="surface-emphasis">I want this site to feel like a room, not a resume.</h2>
          <p className="surface-text">
            So instead of project tiles and achievement counters, it holds writing, favorite lines,
            and a few ideas I keep returning to. It is less about proving and more about presence.
          </p>
        </article>
      </section>

      <section className="page-stack">
        <div className="section-head">
          <div>
            <span className="eyebrow">Writing</span>
            <h2 className="section-title">Notes on work, life, and inner clarity.</h2>
            <p className="section-description">
              Short essays on engineering, attention, faith, and the quieter disciplines that shape a life.
            </p>
          </div>
          <Link href="/blog" className="ghost-link">
            Visit the archive
          </Link>
        </div>

        <div className="article-grid">
          <article className="article-card">
            <span className="article-meta">Featured essay</span>
            <h3 className="article-card__title">{featuredPost.title}</h3>
            <p className="surface-text">{featuredPost.excerpt}</p>
            <div className="pill-row">
              <span className="meta-pill">{featuredPost.date}</span>
              <span className="meta-pill">{featuredPost.readTime}</span>
            </div>
            <div className="article-card__footer">
              <Link href={`/blog/${featuredPost.slug}`} className="button-link">
                Read essay
              </Link>
            </div>
          </article>

          <div className="detail-grid">
            {recentPosts.map((post) => (
              <article key={post.slug} className="article-card">
                <span className="article-meta">Recent</span>
                <h3 className="article-card__title">{post.title}</h3>
                <p className="surface-text">{post.excerpt}</p>
                <div className="pill-row">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="meta-pill">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="article-card__footer">
                  <Link href={`/blog/${post.slug}`} className="ghost-link">
                    Open note
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-stack">
        <div className="section-head">
          <div>
            <span className="eyebrow">Quotes</span>
            <h2 className="section-title">Lines that keep returning with me.</h2>
            <p className="section-description">
              Mostly about life, work, clarity, time, and the kind of interior steadiness worth keeping.
            </p>
          </div>
          <Link href="/quotes" className="ghost-link">
            View all quotes
          </Link>
        </div>

        <div className="quote-grid">
          {homeQuotes.map((quote) => (
            <article key={quote.id} className="quote-card">
              <p className="quote-text">&ldquo;{quote.text}&rdquo;</p>
              <div className="quote-card__footer">
                <strong className="quote-source">{quote.source}</strong>
                <p className="quote-note">{quote.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="reflection-card">
        <span className="eyebrow">Reflection</span>
        <h2 className="section-title">The work matters. The life around it matters too.</h2>
        <p className="surface-text">
          From GitHub, a person might look like pinned repositories and contribution graphs. From
          LinkedIn, a person might look like years of experience, recommendations, and a tidy
          professional summary. Both are useful, but neither is complete. I wanted this site to leave
          room for the quieter parts: what I admire, what I am trying to protect, and the lines I keep
          close when life gets loud.
        </p>
      </section>
    </div>
  );
}
