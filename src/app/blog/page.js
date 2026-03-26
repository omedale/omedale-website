import Link from "next/link";
import { getFeaturedPost, writingPosts } from "../../data/writing";

export const metadata = {
  title: "Writing",
  description:
    "Essays and notes by Oluwafemi Medale on engineering, attention, faith, discipline, and the long work of becoming more grounded.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogIndexPage() {
  const featuredPost = getFeaturedPost();
  const otherPosts = writingPosts.filter((post) => post.slug !== featuredPost.slug);

  return (
    <div className="page-stack">
      <section className="page-hero">
        <div>
          <span className="eyebrow">Writing</span>
          <h1 className="page-title">Essays, notes, and reflections from work and life.</h1>
          <p className="page-intro">
            A small archive of thoughts on engineering, attention, discipline, clarity, and the work
            of becoming more grounded over time.
          </p>
        </div>

        <article className="article-card">
          <span className="article-meta">Featured essay</span>
          <h2 className="article-card__title">{featuredPost.title}</h2>
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
      </section>

      <section className="article-grid">
        {otherPosts.map((post) => (
          <article key={post.slug} className="article-card">
            <span className="article-meta">Essay</span>
            <h2 className="article-card__title">{post.title}</h2>
            <p className="surface-text">{post.excerpt}</p>
            <div className="pill-row">
              {post.tags.map((tag) => (
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
      </section>
    </div>
  );
}
