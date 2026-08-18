import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteNav } from "../_components/SiteNav";

export const metadata: Metadata = {
  title: "Process",
  description: "See how Relix takes AI video from brief and visual prototype through production, finish, and rollout.",
};

const phases = [
  ["01", "Align", "We sharpen the audience, message, ambition, and boundaries before a frame is made.", "Creative brief"],
  ["02", "Prototype", "We test visual worlds, characters, motion, and model workflows while change is still cheap.", "Style frames + motion tests"],
  ["03", "Build", "Approved language becomes a directed production system, shot by shot and sequence by sequence.", "Working film"],
  ["04", "Finish", "Editors, designers, colorists, and sound artists bring every generated element into one film.", "Master film"],
  ["05", "Multiply", "The campaign expands into cutdowns, formats, languages, and new scenes without losing its identity.", "Delivery suite"],
];

export default function ProcessPage() {
  return (
    <main>
      <SiteNav />
      <section className="page-hero process-hero">
        <p className="section-tag">[ The Relix method ]</p>
        <h1>Fast enough to explore.<br /><em>Rigorous enough to ship.</em></h1>
        <p className="page-lede">A visible, director-led process built for a medium that changes every week. You see the work early, make the important decisions sooner, and always know what happens next.</p>
      </section>

      <section className="process-flow-section">
        <div className="process-flow-head">
          <p className="section-tag">[ From brief to rollout ]</p>
          <p>Every engagement flexes around the idea, but the checkpoints stay clear.</p>
        </div>
        <div className="process-flow">
          {phases.map(([number, title, description, output]) => (
            <article key={number}>
              <span>{number}</span>
              <h2>{title}</h2>
              <p>{description}</p>
              <small>Output — {output}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="process-balance">
        <div>
          <p className="section-tag section-tag-light">[ What moves faster ]</p>
          <h2>Worlds. Versions.<br />Possibility.</h2>
          <p>We can explore more routes, create shots that once needed enormous crews, and adapt a strong idea across channels with uncommon speed.</p>
        </div>
        <div>
          <p className="section-tag section-tag-light">[ What never gets automated ]</p>
          <h2>Taste. Judgment.<br />Responsibility.</h2>
          <p>People still set the standard, direct the performance, protect the brand, clear the work, and decide when every frame is truly finished.</p>
        </div>
      </section>

      <section className="process-deliverables">
        <div>
          <p className="section-tag">[ Built into every project ]</p>
          <h2>Clear gates.<br /><em>No black box.</em></h2>
        </div>
        <ul>
          <li><span>01</span>Named senior creative lead</li>
          <li><span>02</span>Visual proof before full production</li>
          <li><span>03</span>Shared review rhythm and decisions</li>
          <li><span>04</span>Rights-aware production planning</li>
          <li><span>05</span>Organized masters and delivery files</li>
        </ul>
      </section>

      <section className="next-cta next-cta-acid">
        <p className="section-tag">[ Your first step ]</p>
        <h2>Show us the challenge.<br /><em>We&apos;ll show you a way in.</em></h2>
        <Link href="/contact">Start a conversation <span aria-hidden="true">↗</span></Link>
      </section>
      <SiteFooter />
    </main>
  );
}
