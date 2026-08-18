import Link from "next/link";

export function SiteFooter() {
  return (
    <footer>
      <Link className="brand footer-brand" href="/"><span className="brand-mark">R</span><span>RELIX</span></Link>
      <div><Link href="/services">Services</Link><Link href="/process">Process</Link><Link href="/studio">Studio</Link><Link href="/insights">Insights</Link><Link href="/contact">Contact</Link></div>
      <div><a href="https://www.instagram.com/relix.ai">Instagram</a><a href="https://x.com/relix_ai">X / Twitter</a><a href="https://www.linkedin.com/company/relix">LinkedIn</a></div>
      <p>© 2026 Relix AI<br />All rights reserved.</p>
    </footer>
  );
}
