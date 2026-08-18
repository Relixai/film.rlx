import Image from "next/image";
import Link from "next/link";

export function SiteNav({ overlay = false }: { overlay?: boolean }) {
  return (
    <nav className={`nav${overlay ? "" : " nav-solid"}`} aria-label="Main navigation">
      <Link className="brand" href="/" aria-label="Relix home">
        <Image className="brand-logo" src="/relix-logo.png" alt="" width={38} height={38} priority /><span>RELIX</span>
      </Link>
      <div className="nav-links">
        <Link href="/services">Services</Link><Link href="/process">Process</Link><Link href="/studio">Studio</Link><Link href="/insights">Insights</Link>
      </div>
      <Link className="nav-cta" href="/contact">Start a project <span aria-hidden="true">↗</span></Link>
    </nav>
  );
}
