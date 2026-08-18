import type { Metadata } from "next";
import Link from "next/link";
import { ProjectArtwork } from "../_components/ProjectArtwork";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteNav } from "../_components/SiteNav";
import { projects } from "../_data/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected AI-generated campaign films, product stories, and brand worlds by Relix.",
};

export default function WorkPage() {
  return (
    <main>
      <SiteNav />
      <section className="page-hero page-hero-paper">
        <h1>Ideas that<br /><em>couldn&apos;t exist.</em></h1>
        <p className="page-lede">Film craft and generative production, combined to give ambitious ideas a world of their own.</p>
      </section>
      <section className="work work-index">
        {projects.map((project, index) => (
          <article className={`project${index === 0 ? " project-large" : ""}`} key={project.slug}>
            <Link className="project-link" href={`/work/${project.slug}`}>
              <ProjectArtwork project={project} priority={index === 0} />
              <div className="project-meta">
                <div><h2>{project.title}</h2></div>
                <p>{project.summary}</p><span className="project-arrow" aria-hidden="true">↗</span>
              </div>
            </Link>
          </article>
        ))}
      </section>
      <section className="next-cta">
        <h2>Let&apos;s make the next<br /><em>one together.</em></h2>
        <Link href="/contact">Start a project <span aria-hidden="true">↗</span></Link>
      </section>
      <SiteFooter />
    </main>
  );
}
