import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteNav } from "../_components/SiteNav";

export const metadata: Metadata = {
  title: "Insights",
  description: "Notes from Relix on AI video direction, production systems, and building distinctive visual worlds.",
};

const insights = [
  { title: "The end of the impossible shot", text: "When anything can appear on screen, the creative question changes from ‘Can we make it?’ to ‘Why should it exist?’", tone: "acid" },
  { title: "Why AI video still needs a director", text: "Generation creates options. Direction creates meaning, continuity, performance, and a reason to keep watching.", tone: "ink" },
  { title: "One film, forty formats", text: "The best AI production plans treat the hero film as the center of a flexible content system—not the end of a pipeline.", tone: "orange" },
  { title: "Building a visual world that stays yours", text: "Distinctive work comes from rules, references, and judgment that survive beyond a single prompt or model.", tone: "paper" },
];

export default function InsightsPage() {
  return (
    <main>
      <SiteNav />
      <section className="page-hero insights-hero">
        <h1>Ideas for a<br /><em>moving medium.</em></h1>
        <p className="page-lede">Field notes on the craft, systems, and decisions behind AI video that earns attention instead of borrowing it.</p>
      </section>

      <section className="insights-index" aria-label="Latest insights">
        <div className="insights-index-head">
          <p>Observations from inside the work.</p>
        </div>
        <div className="insight-grid">
          {insights.map((insight) => (
            <article className={`insight-card insight-${insight.tone}`} key={insight.title}>
              <h2>{insight.title}</h2>
              <p>{insight.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="insights-note">
        <p>We believe the interesting future is neither fully synthetic nor stubbornly traditional. It&apos;s a new production language shaped by people who know what an image should make you feel.</p>
      </section>

      <section className="next-cta">
        <h2>Less theory.<br /><em>More first frames.</em></h2>
        <Link href="/contact">Bring us a brief <span aria-hidden="true">↗</span></Link>
      </section>
      <SiteFooter />
    </main>
  );
}
