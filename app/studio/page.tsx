import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteNav } from "../_components/SiteNav";

export const metadata: Metadata = {
  title: "Studio",
  description: "Meet Relix, the creative production studio built for the generative era.",
};

const principles = [
  ["Taste before tools", "The model changes every week. A strong point of view is what makes the work last."],
  ["One idea, many outputs", "We design creative systems—not one-offs—so every film can travel further."],
  ["Human all the way through", "Directors, editors, designers, and sound artists shape every frame and decision."],
  ["Radical clarity", "Clear scopes, visible workflows, senior access, and no mystery between brief and delivery."],
];

export default function StudioPage() {
  return (
    <main>
      <SiteNav />
      <section className="page-hero page-hero-studio">
        <h1>Production changed.<br /><em>So did we.</em></h1>
        <p className="page-lede">Relix is an independent creative studio built to turn the newest image-making technology into work with an unmistakably human point of view.</p>
      </section>
      <section className="studio-manifesto">
        <p>AI doesn&apos;t make the idea.<br />It makes <em>more idea</em> possible.</p>
      </section>
      <section className="studio-split">
        <div className="studio-orbit" aria-hidden="true"><span>R</span></div>
        <div><h2>Small senior team.<br /><em>Expansive output.</em></h2></div>
        <div><p>Every project is led by a creative director and producer, then built with the right combination of AI artists, filmmakers, designers, editors, and sound talent.</p><p>That means fewer layers, faster decisions, and specialists who stay close to the work from first frame to final export.</p></div>
      </section>
      <section className="principles">
        <div className="principles-head"><h2>Principles,<br /><em>not process theater.</em></h2></div>
        <div className="principle-list">
          {principles.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>
      <section className="numbers" aria-label="Studio statistics">
        <div><strong>3</strong><span>Global time zones</span></div><div><strong>12</strong><span>Core collaborators</span></div><div><strong>1</strong><span>Senior team throughout</span></div>
        <p>Independent by design, distributed by default, and ready to build around the brief.</p>
      </section>
      <section className="next-cta"><h2>Good people.<br /><em>Unreal possibilities.</em></h2><Link href="/contact">Meet the studio <span aria-hidden="true">↗</span></Link></section>
      <SiteFooter />
    </main>
  );
}
