import Link from "next/link";
import Image from "next/image";
import { ProjectArtwork } from "./_components/ProjectArtwork";
import { SiteFooter } from "./_components/SiteFooter";
import { SiteNav } from "./_components/SiteNav";
import { projects } from "./_data/projects";

const services = [
  { title: "AI Commercials", text: "Campaign films and paid social built for attention, iteration, and scale." },
  { title: "Product Films", text: "Impossible product worlds with no sets, shipping, or production ceilings." },
  { title: "Brand Stories", text: "Narrative-led films that make a new brand universe feel instantly real." },
  { title: "Always-on Content", text: "A repeatable creative engine for the formats your audience lives in." },
];

const steps = [
  ["Direction", "We find the idea, audience truth, and visual territory worth owning."],
  ["Worldbuilding", "We design characters, environments, motion language, and a locked visual system."],
  ["Production", "Our AI-native pipeline turns approved frames into polished moving image."],
  ["Finish", "Editorial, sound, grade, titles, and every cutdown—delivered ready to launch."],
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <SiteNav overlay />

        <Image className="hero-image" src="/relix-hero.png" alt="A cinematic figure approaching a red monolith in a desert at dusk" fill priority sizes="100vw" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <h1>Impossible stories.<br /><em>Made visible.</em></h1>
          <p className="hero-lede">We combine generative AI, film craft, and bold creative direction to make video that moves at the speed of culture.</p>
          <Link className="primary-cta" href="/services">Explore our services <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="manifesto" id="studio">
        <p className="manifesto-copy">Big-screen imagination.<br /><span>Built for now.</span></p>
        <div className="manifesto-bottom">
          <p>We&apos;re a creative studio for the generative era. Directors, designers, and AI artists working as one team—from first thought to final frame.</p>
          <div className="signal"><span className="signal-dot" /><span>London · New York · Everywhere</span></div>
        </div>
      </section>

      <section className="work" id="work">
        <div className="section-head">
          <div><h2>Films from<br />another reality.</h2></div>
          <p>Created for ambitious brands and artists who want to be remembered, not just seen.</p>
        </div>

        <article className="project project-large">
          <ProjectArtwork project={projects[0]} />
          <div className="project-meta"><div><h3>{projects[0].title}</h3></div><p>{projects[0].summary}</p></div>
        </article>

        <div className="project-grid">
          {projects.slice(1).map((project, index) => (
            <article className={`project${index === 1 ? " project-offset" : ""}`} key={project.slug}>
              <ProjectArtwork project={project} />
              <div className="project-meta"><div><h3>{project.title}</h3></div><p>{project.summary}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="services" id="services">
        <div className="services-intro">
          <h2>One studio.<br /><em>Every frame.</em></h2>
          <p>From a single launch film to an always-on content system, we build the right production around the idea—not the other way around.</p>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service" key={service.title}>
              <h3>{service.title}</h3><p>{service.text}</p><span className="service-plus" aria-hidden="true">+</span>
            </article>
          ))}
        </div>
      </section>

      <section className="process">
        <div className="process-head">
          <h2>Human taste.<br /><span>Machine velocity.</span></h2>
          <p>AI makes production faster. Our people make the work worth watching. You collaborate with one senior team through a clear, proven process.</p>
        </div>
        <div className="steps">
          {steps.map(([title, text]) => <article className="step" key={title}><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="numbers" aria-label="Studio statistics">
        <div><strong>4×</strong><span>Faster to final</span></div>
        <div><strong>60%</strong><span>Leaner production</span></div>
        <div><strong>24</strong><span>Markets delivered</span></div>
        <p>More ambition in every budget. More versions from every idea. Less time between imagination and impact.</p>
      </section>

      <section className="quote">
        <blockquote>“Relix didn&apos;t just make the film we imagined. They found the version we didn&apos;t know was possible.”</blockquote>
        <div className="quote-credit"><span className="avatar">AM</span><p><strong>Alex Morgan</strong><br />Global Brand Director, Arc</p></div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-orbit" aria-hidden="true"><span>R</span></div>
        <h2>Let&apos;s make<br /><em>something unreal.</em></h2>
        <a className="contact-link" href="mailto:hello@relix.ai">hello@relix.ai <span aria-hidden="true">↗</span></a>
      </section>

      <SiteFooter />
    </main>
  );
}
