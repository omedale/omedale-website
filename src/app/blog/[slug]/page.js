import Link from "next/link";
import { notFound } from "next/navigation";
import ReadingProgress from "../../../components/site/ReadingProgress";
import { getPostBySlug, writingPosts } from "../../../data/writing";

export function generateStaticParams() {
  return writingPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: "Writing",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ["/opengraph-image"],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = writingPosts.filter((entry) => entry.slug !== post.slug).slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: `https://omedale.com/blog/${post.slug}`,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Oluwafemi Medale",
      url: "https://omedale.com/about",
    },
    publisher: {
      "@type": "Person",
      name: "Oluwafemi Medale",
      url: "https://omedale.com",
    },
    keywords: post.tags,
  };

  return (
    <div className="page-stack">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <ReadingProgress />
      <section className="page-stack">
        <div>
          <span className="eyebrow">Writing</span>
          <h1 className="article-title">{post.title}</h1>
          <p className="article-excerpt">{post.excerpt}</p>
          <div className="meta-row">
            <span className="meta-pill">{post.date}</span>
            <span className="meta-pill">{post.readTime}</span>
            {post.tags.map((tag) => (
              <span key={tag} className="meta-pill">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <article className="article-shell">
        <aside className="article-sidebar aside-card">
          <span className="small-caps">On this page</span>
          <ul className="toc-list">
            {post.sections.map((section) => {
              const sectionId = section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-");
              return (
                <li key={section.heading}>
                  <a className="toc-link" href={`#${sectionId}`}>
                    {section.heading}
                  </a>
                </li>
              );
            })}
          </ul>
        </aside>

        <div className="prose">
          <blockquote className="article-quote">
            <p>&ldquo;{post.quote.text}&rdquo;</p>
            <span>{post.quote.source}</span>
          </blockquote>

          {post.sections.map((section) => {
            const sectionId = section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-");

            return (
              <section key={section.heading} id={sectionId} className="article-section">
                <h2 className="article-section__title">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets ? (
                  <ul className="article-list">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
                {section.codeBlocks?.map((block) => (
                  <div key={`${section.heading}-${block.label}`} className="code-block">
                    <span className="small-caps">{block.label}</span>
                    <pre>
                      <code>{block.code}</code>
                    </pre>
                  </div>
                ))}
              </section>
            );
          })}

          {post.references?.length ? (
            <section className="article-section">
              <h2 className="article-section__title">References</h2>
              <ul className="publication-list">
                {post.references.map((reference) => (
                  <li key={reference.href}>
                    <a className="simple-link" href={reference.href} target="_blank" rel="noreferrer">
                      <strong className="publication-title">{reference.label}</strong>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
      </article>

      <section className="page-stack">
        <div className="section-head">
          <div>
            <span className="eyebrow">More to read</span>
            <h2 className="section-title">Continue with another note.</h2>
          </div>
          <Link href="/blog" className="ghost-link">
            Back to writing
          </Link>
        </div>

        <div className="detail-grid">
          {relatedPosts.map((entry) => (
            <article key={entry.slug} className="article-card">
              <span className="article-meta">Related</span>
              <h3 className="article-card__title">{entry.title}</h3>
              <p className="surface-text">{entry.excerpt}</p>
              <div className="article-card__footer">
                <Link href={`/blog/${entry.slug}`} className="ghost-link">
                  Read note
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
