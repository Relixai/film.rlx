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
        <h1>What should<br /><em>we make real?</em></h1>
        <a className="contact-page-email" href="mailto:hello@relix.ai?subject=New%20project%20for%20Relix">hello@relix.ai <span aria-hidden="true">↗</span></a>
      </section>
      <section className="brief-guide">
        <div><h2>Tell us what<br /><em>you&apos;re imagining.</em></h2></div>
        <ol>
          <li><div><h3>The ambition</h3><p>What are you launching, changing, or trying to make people feel?</p></div></li>
          <li><div><h3>The shape</h3><p>A hero film, campaign system, product story—or something we haven&apos;t named yet.</p></div></li>
          <li><div><h3>The realities</h3><p>Timing, formats, markets, and a useful budget range if you have one.</p></div></li>
        </ol>
      </section>
      <section className="contact-details">
        <div><a href="mailto:hello@relix.ai">hello@relix.ai</a></div>
        <div><a href="mailto:projects@relix.ai">projects@relix.ai</a></div>
        <div><p>London · New York · Los Angeles</p></div>
        <div><p><a href="https://www.instagram.com/relix.ai">Instagram</a> · <a href="https://www.linkedin.com/company/relix">LinkedIn</a></p></div>
      </section>
      <section className="contact-return"><Link href="/services">Explore our services <span aria-hidden="true">→</span></Link></section>
      <SiteFooter />
    </main>
  );
}
