import Link from "next/link";
import { SiteFooter } from "./_components/SiteFooter";
import { SiteNav } from "./_components/SiteNav";

export default function NotFound() {
  return (
    <main><SiteNav /><section className="not-found"><p className="section-tag section-tag-light">[ 404 / Scene missing ]</p><h1>Wrong reality.<br /><em>Right studio.</em></h1><Link href="/">Return home <span aria-hidden="true">↗</span></Link></section><SiteFooter /></main>
  );
}
