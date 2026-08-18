import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteNav } from "../_components/SiteNav";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start an AI video production project with Relix.",
};

export default function ContactPage() {
  return (
    <main>
      <SiteNav />
      <section className="contact-page">
        <div className="contact-orbit contact-page-orbit" aria-hidden="true"><span>R</span></div>
        <p className="section-tag section-tag-light">[ New business / collaborations ]</p>
        <h1>What should<br /><em>we make real?</em></h1>
        <a className="contact-page-email" href="mailto:hello@relix.ai?subject=New%20project%20for%20Relix">hello@relix.ai <span aria-hidden="true">↗</span></a>
      </section>
      <section className="brief-guide">
        <div><p className="section-tag">[ A useful first note ]</p><h2>Tell us what<br /><em>you&apos;re imagining.</em></h2></div>
        <ol>
          <li><span>01</span><div><h3>The ambition</h3><p>What are you launching, changing, or trying to make people feel?</p></div></li>
          <li><span>02</span><div><h3>The shape</h3><p>A hero film, campaign system, product story—or something we haven&apos;t named yet.</p></div></li>
          <li><span>03</span><div><h3>The realities</h3><p>Timing, formats, markets, and a useful budget range if you have one.</p></div></li>
        </ol>
      </section>
      <section className="contact-details">
        <div><span>GENERAL</span><a href="mailto:hello@relix.ai">hello@relix.ai</a></div>
        <div><span>NEW BUSINESS</span><a href="mailto:projects@relix.ai">projects@relix.ai</a></div>
        <div><span>TIME ZONES</span><p>London · New York · Los Angeles</p></div>
        <div><span>FOLLOW</span><p><a href="https://www.instagram.com/relix.ai">Instagram</a> · <a href="https://www.linkedin.com/company/relix">LinkedIn</a></p></div>
      </section>
      <section className="contact-return"><Link href="/work">See what we&apos;ve made <span aria-hidden="true">→</span></Link></section>
      <SiteFooter />
    </main>
  );
}
