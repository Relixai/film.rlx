import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteNav } from "../_components/SiteNav";

export const metadata: Metadata = {
  title: "Relix AI",
  description: "An AI video production studio.",
  alternates: { canonical: "/process" },
};

const phases = [
  ["Align", "We sharpen the audience, message, ambition, and boundaries before a frame is made."],
  ["Prototype", "We test visual worlds, characters, motion, and model workflows while change is still cheap."],
  ["Build", "Approved language becomes a directed production system, shot by shot and sequence by sequence."],
  ["Finish", "Editors, designers, colorists, and sound artists bring every generated element into one film."],
  ["Multiply", "The campaign expands into cutdowns, formats, languages, and new scenes without losing its identity."],
];

export default function ProcessPage() {
  return (
    <main>
      <SiteNav />
      <section className="page-hero process-hero">
        <h1>Fast enough to explore.<br /><em>Rigorous enough to ship.</em></h1>
        <p className="page-lede">A visible, director-led process built for a medium that changes every week. You see the work early, make the important decisions sooner, and always know what happens next.</p>
      </section>
      <section className="page-image" aria-label="The Relix visual development process">
        <Image src="/editorial/process.jpg" alt="A sequence of transparent film panels evolving from sketches into a finished cinematic landscape" fill sizes="100vw" priority />
      </section>

      <section className="process-flow-section">
        <div className="process-flow-head">
          <p>Every engagement flexes around the idea, but the checkpoints stay clear.</p>
        </div>
        <div className="process-flow">
          {phases.map(([title, description]) => (
            <article key={title}>
              <h2>{title}</h2>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="process-balance">
        <div>
          <h2>Worlds. Versions.<br />Possibility.</h2>
          <p>We can explore more routes, create shots that once needed enormous crews, and adapt a strong idea across channels with uncommon speed.</p>
        </div>
        <div>
          <h2>Taste. Judgment.<br />Responsibility.</h2>
          <p>People still set the standard, direct the performance, protect the brand, clear the work, and decide when every frame is truly finished.</p>
        </div>
      </section>

      <section className="process-deliverables">
        <div>
          <h2>Clear gates.<br /><em>No black box.</em></h2>
        </div>
        <ul>
          <li>Named senior creative lead</li>
          <li>Visual proof before full production</li>
          <li>Shared review rhythm and decisions</li>
          <li>Rights-aware production planning</li>
          <li>Organized masters and delivery files</li>
        </ul>
      </section>

      <section className="next-cta next-cta-acid">
        <h2>Show us the challenge.<br /><em>We&apos;ll show you a way in.</em></h2>
        <Link href="/contact">Start a conversation <span aria-hidden="true">↗</span></Link>
      </section>
      <SiteFooter />
    </main>
  );
}
