import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteNav } from "../_components/SiteNav";

export const metadata: Metadata = {
  title: "Services",
  description: "AI commercials, product films, brand stories, and always-on video content from Relix.",
};

const offers = [
  { title: "AI Commercials", intro: "High-concept advertising without the traditional production ceiling.", items: ["Campaign concept", "Direction + worldbuilding", "Hero film", "Social cutdowns", "Localization"] },
  { title: "Product Films", intro: "Product stories that can bend matter, scale, and gravity around the idea.", items: ["Product visualization", "Launch films", "Feature stories", "Retail motion", "Version systems"] },
  { title: "Brand Stories", intro: "Narrative films that turn positioning into a world people can feel.", items: ["Narrative platform", "Manifesto film", "Founder story", "Music + sound", "Brand toolkit"] },
  { title: "Always-on Content", intro: "A dedicated creative pipeline that keeps quality high and content moving.", items: ["Monthly planning", "AI style system", "Platform formats", "Rapid iteration", "Performance learnings"] },
];

export default function ServicesPage() {
  return (
    <main>
      <SiteNav />
      <section className="page-hero page-hero-orange">
        <h1>From first thought<br /><em>to every format.</em></h1>
        <p className="page-lede">One senior creative team, built around your challenge. Strategy, direction, AI production, edit, sound, and delivery under one roof.</p>
      </section>
      <section className="offer-grid">
        {offers.map((offer) => (
          <article className="offer" key={offer.title}>
            <div className="offer-title"><h2>{offer.title}</h2></div>
            <p>{offer.intro}</p>
            <ul>{offer.items.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        ))}
      </section>
      <section className="engagements">
        <div><h2>The right shape<br /><em>for the brief.</em></h2></div>
        <div className="engagement-list">
          <article><h3>One clear outcome.</h3><p>Best for launches, campaigns, and hero moments. A focused team from creative development through final delivery.</p></article>
          <article><h3>An ongoing creative engine.</h3><p>Best for brands that need a steady flow of premium video with a consistent visual world and faster learning loops.</p></article>
          <article><h3>Find the idea fast.</h3><p>A short, senior-led exploration to prove a direction, prototype a visual system, or unlock a stuck brief.</p></article>
        </div>
      </section>
      <section className="next-cta next-cta-acid">
        <h2>Bring us the brief.<br /><em>Or just the ambition.</em></h2>
        <Link href="/contact">Talk to the studio <span aria-hidden="true">↗</span></Link>
      </section>
      <SiteFooter />
    </main>
  );
}
