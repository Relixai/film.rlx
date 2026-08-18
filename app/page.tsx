const services = [
  { number: "01", title: "AI Commercials", text: "Campaign films and paid social built for attention, iteration, and scale." },
  { number: "02", title: "Product Films", text: "Impossible product worlds with no sets, shipping, or production ceilings." },
  { number: "03", title: "Brand Stories", text: "Narrative-led films that make a new brand universe feel instantly real." },
  { number: "04", title: "Always-on Content", text: "A repeatable creative engine for the formats your audience lives in." },
];

const steps = [
  ["01", "Direction", "We find the idea, audience truth, and visual territory worth owning."],
  ["02", "Worldbuilding", "We design characters, environments, motion language, and a locked visual system."],
  ["03", "Production", "Our AI-native pipeline turns approved frames into polished moving image."],
  ["04", "Finish", "Editorial, sound, grade, titles, and every cutdown—delivered ready to launch."],
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Relix home">
            <span className="brand-mark">R</span><span>RELIX</span>
          </a>
          <div className="nav-links">
            <a href="#work">Work</a><a href="#services">Services</a><a href="#studio">Studio</a>
          </div>
          <a className="nav-cta" href="#contact">Start a project <span aria-hidden="true">↗</span></a>
        </nav>

        <img className="hero-image" src="/relix-hero.png" alt="A cinematic figure approaching a red monolith in a desert at dusk" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> AI video production studio</p>
          <h1>Impossible stories.<br /><em>Made visible.</em></h1>
          <p className="hero-lede">We combine generative AI, film craft, and bold creative direction to make video that moves at the speed of culture.</p>
          <a className="primary-cta" href="#work">View our work <span aria-hidden="true">↓</span></a>
        </div>
        <p className="hero-index">RELIX / 01 — 25</p>
      </section>

      <section className="manifesto" id="studio">
        <p className="section-tag">[ A new kind of production company ]</p>
        <p className="manifesto-copy">Big-screen imagination.<br /><span>Built for now.</span></p>
        <div className="manifesto-bottom">
          <p>We&apos;re a creative studio for the generative era. Directors, designers, and AI artists working as one team—from first thought to final frame.</p>
          <div className="signal"><span className="signal-dot" /><span>London · New York · Everywhere</span></div>
        </div>
      </section>

      <section className="work" id="work">
        <div className="section-head">
          <div><p className="section-tag">[ Selected work ]</p><h2>Films from<br />another reality.</h2></div>
          <p>Created for ambitious brands and artists who want to be remembered, not just seen.</p>
        </div>

        <article className="project project-large">
          <div className="project-media project-eclipse">
            <img src="/relix-hero.png" alt="Eclipse campaign film frame" />
            <span className="play" aria-hidden="true">▶</span>
            <span className="runtime">00:45</span>
          </div>
          <div className="project-meta"><div><span>01 / CAMPAIGN FILM</span><h3>Eclipse</h3></div><p>A fashion world shaped by light, distance, and desire.</p><span className="project-arrow" aria-hidden="true">↗</span></div>
        </article>

        <div className="project-grid">
          <article className="project">
            <div className="project-media project-orbit">
              <div className="planet" /><div className="bottle">RELIX</div>
              <span className="play" aria-hidden="true">▶</span><span className="runtime">00:30</span>
            </div>
            <div className="project-meta"><div><span>02 / PRODUCT FILM</span><h3>New Orbit</h3></div><p>Skincare, reimagined beyond gravity.</p><span className="project-arrow" aria-hidden="true">↗</span></div>
          </article>
          <article className="project project-offset">
            <div className="project-media project-afterimage">
              <div className="sun" /><div className="runner"><i /><i /><i /></div>
              <span className="play" aria-hidden="true">▶</span><span className="runtime">01:05</span>
            </div>
            <div className="project-meta"><div><span>03 / BRAND STORY</span><h3>Afterimage</h3></div><p>Performance lives one second ahead.</p><span className="project-arrow" aria-hidden="true">↗</span></div>
          </article>
        </div>
      </section>

      <section className="services" id="services">
        <div className="services-intro">
          <p className="section-tag section-tag-light">[ What we make ]</p>
          <h2>One studio.<br /><em>Every frame.</em></h2>
          <p>From a single launch film to an always-on content system, we build the right production around the idea—not the other way around.</p>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service" key={service.number}>
              <span>{service.number}</span><h3>{service.title}</h3><p>{service.text}</p><span className="service-plus" aria-hidden="true">+</span>
            </article>
          ))}
        </div>
      </section>

      <section className="process">
        <div className="process-head">
          <p className="section-tag">[ How it works ]</p>
          <h2>Human taste.<br /><span>Machine velocity.</span></h2>
          <p>AI makes production faster. Our people make the work worth watching. You collaborate with one senior team through a clear, proven process.</p>
        </div>
        <div className="steps">
          {steps.map(([n, title, text]) => <article className="step" key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="numbers" aria-label="Studio statistics">
        <div><strong>4×</strong><span>Faster to final</span></div>
        <div><strong>60%</strong><span>Leaner production</span></div>
        <div><strong>24</strong><span>Markets delivered</span></div>
        <p>More ambition in every budget. More versions from every idea. Less time between imagination and impact.</p>
      </section>

      <section className="quote">
        <p className="section-tag">[ From our collaborators ]</p>
        <blockquote>“Relix didn&apos;t just make the film we imagined. They found the version we didn&apos;t know was possible.”</blockquote>
        <div className="quote-credit"><span className="avatar">AM</span><p><strong>Alex Morgan</strong><br />Global Brand Director, Arc</p></div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-orbit" aria-hidden="true"><span>R</span></div>
        <p className="section-tag section-tag-light">[ Your next film starts here ]</p>
        <h2>Let&apos;s make<br /><em>something unreal.</em></h2>
        <a className="contact-link" href="mailto:hello@relix.ai">hello@relix.ai <span aria-hidden="true">↗</span></a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark">R</span><span>RELIX</span></a>
        <div><a href="#work">Work</a><a href="#services">Services</a><a href="#studio">Studio</a></div>
        <div><a href="https://www.instagram.com/relix.ai">Instagram</a><a href="https://x.com/relix_ai">X / Twitter</a><a href="https://www.linkedin.com/company/relix">LinkedIn</a></div>
        <p>© 2026 Relix AI<br />All rights reserved.</p>
      </footer>
    </main>
  );
}
