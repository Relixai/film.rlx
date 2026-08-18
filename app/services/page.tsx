import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteNav } from "../_components/SiteNav";

export const metadata: Metadata = {
  title: "Services",
  description: "AI commercials, product films, brand stories, and always-on video content from Relix.",
};

const offers = [
  { n: "01", title: "AI Commercials", intro: "High-concept advertising without the traditional production ceiling.", items: ["Campaign concept", "Direction + worldbuilding", "Hero film", "Social cutdowns", "Localization"] },
  { n: "02", title: "Product Films", intro: "Product stories that can bend matter, scale, and gravity around the idea.", items: ["Product visualization", "Launch films", "Feature stories", "Retail motion", "Version systems"] },
  { n: "03", title: "Brand Stories", intro: "Narrative films that turn positioning into a world people can feel.", items: ["Narrative platform", "Manifesto film", "Founder story", "Music + sound", "Brand toolkit"] },
  { n: "04", title: "Always-on Content", intro: "A dedicated creative pipeline that keeps quality high and content moving.", items: ["Monthly planning", "AI style system", "Platform formats", "Rapid iteration", "Performance learnings"] },
];

export default function ServicesPage() {
  return (
    <main>
      <SiteNav />
      <section className="page-hero page-hero-orange">
        <p className="section-tag section-tag-light">[ Capabilities ]</p>
        <h1>From first thought<br /><em>to every format.</em></h1>
        <p className="page-lede">One senior creative team, built around your challenge. Strategy, direction, AI production, edit, sound, and delivery under one roof.</p>
      </section>
      <section className="offer-grid">
        {offers.map((offer) => (
          <article className="offer" key={offer.n}>
            <div className="offer-title"><span>{offer.n}</span><h2>{offer.title}</h2></div>
            <p>{offer.intro}</p>
            <ul>{offer.items.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        ))}
      </section>
      <section className="engagements">
        <div><p className="section-tag">[ Ways to work ]</p><h2>The right shape<br /><em>for the brief.</em></h2></div>
        <div className="engagement-list">
          <article><span>PROJECT</span><h3>One clear outcome.</h3><p>Best for launches, campaigns, and hero moments. A focused team from creative development through final delivery.</p></article>
          <article><span>PARTNERSHIP</span><h3>An ongoing creative engine.</h3><p>Best for brands that need a steady flow of premium video with a consistent visual world and faster learning loops.</p></article>
          <article><span>SPRINT</span><h3>Find the idea fast.</h3><p>A short, senior-led exploration to prove a direction, prototype a visual system, or unlock a stuck brief.</p></article>
        </div>
      </section>
      <section className="next-cta next-cta-acid">
        <p className="section-tag">[ Start somewhere ]</p><h2>Bring us the brief.<br /><em>Or just the ambition.</em></h2>
        <Link href="/contact">Talk to the studio <span aria-hidden="true">↗</span></Link>
      </section>
      <SiteFooter />
    </main>
  );
}
