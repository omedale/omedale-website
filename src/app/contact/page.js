import { siteData } from "../../data/site";

export const metadata = {
  title: "Contact",
  description:
    "The best public places to reach Oluwafemi Medale, with a preference for thoughtful conversation over heavy contact workflows.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="page-stack">
      <section className="page-hero">
        <div>
          <span className="eyebrow">Contact</span>
          <h1 className="page-title">The easiest way to reach me is still the human way.</h1>
          <p className="page-intro">
            I am not adding a heavy contact workflow here. If something in the writing resonates, or
            you simply want to say hello, these are the best places to find me.
          </p>
        </div>

        <aside className="quote-banner quote-banner--offset">
          <p>Thoughtful attention still feels like one of the clearest forms of respect.</p>
          <span>If the writing resonates, a thoughtful message is always welcome.</span>
        </aside>
      </section>

      <section className="contact-grid">
        <article className="detail-card contact-panel">
          <span className="small-caps">Profiles</span>
          <a className="contact-item" href={siteData.linkedin} target="_blank" rel="noreferrer">
            <strong>LinkedIn</strong>
            <span>Professional profile, updates, and public background.</span>
          </a>
          <a className="contact-item" href={siteData.github} target="_blank" rel="noreferrer">
            <strong>GitHub</strong>
            <span>Open-source history, repositories, and technical traces.</span>
          </a>
        </article>

        <article className="detail-card">
          <span className="small-caps">A note</span>
          <h2 className="detail-title">I value thoughtful conversation.</h2>
          <p className="contact-copy">
            Whether the topic is software, writing, life, or something in between, I tend to prefer
            clarity over volume and substance over performance. If that sounds like your kind of
            conversation too, feel free to reach out.
          </p>
        </article>
      </section>
    </div>
  );
}
