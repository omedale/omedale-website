import SectionArtwork from "../../components/site/SectionArtwork";
import { siteData } from "../../data/site";

const publications = [
  {
    title: "Simple approach to Rails 5 API authentication with Json Web Token",
    href: "https://www.codementor.io/@omedale/simple-approach-to-rails-5-api-authentication-with-json-web-token-cpqbgrdo6",
    note: "An earlier technical article on JWT authentication with Rails APIs.",
  },
  {
    title: "Building a Customer-Centric Transformation for Next Generation e-Commerce",
    href: "http://www.jic.org.uk/jicvol12no4paper06.pdf",
    note: "A publication that reflects a long-running interest in technology shaped around people.",
  },
];

export const metadata = {
  title: "About",
  description:
    "A personal introduction to Oluwafemi Medale, his working style, values, and the quieter themes shaping life beyond a public profile.",
};

export default function AboutPage() {
  return (
    <div className="page-stack">
      <section className="page-hero">
        <div>
          <span className="eyebrow">About</span>
          <h1 className="page-title">A personal introduction, not a formal biography.</h1>
          <p className="page-intro">{siteData.aboutIntro}</p>
          <p className="page-intro">
            Publicly available details say Lagos, Nigeria, Federal University of Technology Akure,
            years of engineering experience, technical publications, and a reputation for being
            collaborative and thorough. I appreciate all of that, but what matters most to me is the
            kind of person I am becoming while doing the work.
          </p>
        </div>

        <div className="quote-aside">
          <div className="art-frame">
            <SectionArtwork />
          </div>
        </div>
      </section>

      <section className="detail-grid">
        <article className="detail-card">
          <span className="small-caps">What shapes me</span>
          <h2 className="detail-title">Clarity, discipline, and meaningful work.</h2>
          <p className="detail-text">
            I am drawn to things that last: reliable systems, clean abstractions, honest writing, and
            the kind of collaboration that makes a team stronger. I respect steadiness more than
            spectacle.
          </p>
        </article>

        <article className="detail-card">
          <span className="small-caps">How I am described</span>
          <h2 className="detail-title">Thoughtful, proactive, detailed.</h2>
          <p className="detail-text">
            The strongest signal from the public recommendations is not just competence. It is trust.
            A pattern of being helpful, solving difficult problems with others, and caring enough to
            improve both the code and the process around it.
          </p>
        </article>
      </section>

      <section className="reflection-card">
        <span className="eyebrow">Things that matter to me</span>
        <div className="pill-row">
          {[
            "Curiosity",
            "Faith",
            "Discipline",
            "Calm",
            "Craft",
            "Consistency",
            "Collaboration",
          ].map((item) => (
            <span key={item} className="value-pill">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="detail-grid">
        <article className="detail-card">
          <span className="small-caps">Earlier writing</span>
          <ul className="publication-list">
            {publications.map((publication) => (
              <li key={publication.title}>
                <a className="simple-link" href={publication.href} target="_blank" rel="noreferrer">
                  <strong className="publication-title">{publication.title}</strong>
                  <p className="publication-note">{publication.note}</p>
                </a>
              </li>
            ))}
          </ul>
        </article>

        <article className="detail-card">
          <span className="small-caps">A simple aim</span>
          <h2 className="detail-title">To do solid work without losing the human center.</h2>
          <p className="detail-text">
            I want to keep making software with care, thinking clearly in a noisy world, and living in
            a way that is not only productive, but also grounded. That is the thread underneath this
            whole website.
          </p>
        </article>
      </section>
    </div>
  );
}
