import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer>
      <Link className="brand footer-brand" href="/" aria-label="Relix home"><Image className="brand-logo" src="/relix-logo.png" alt="" width={38} height={38} /><span>RELIX</span></Link>
      <div><Link href="/services">Services</Link><Link href="/process">Process</Link><Link href="/studio">Studio</Link><Link href="/insights">Insights</Link><Link href="/contact">Contact</Link><a href="https://relix.ai/terms-of-service">Terms</a><a href="https://relix.ai/privacy-policy">Privacy Policy</a></div>
      <div><a href="https://instagram.com/relix.ai">Instagram</a><a href="https://x.com/relix_ai">X / Twitter</a><a href="https://github.com/relixai">GitHub</a><a href="https://facebook.com">Facebook</a><a href="https://www.linkedin.com/company/relix">LinkedIn</a></div>
      <p>© 2026 Relix AI<br />All rights reserved.</p>
    </footer>
  );
}
