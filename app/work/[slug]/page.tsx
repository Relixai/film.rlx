import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectArtwork } from "../../_components/ProjectArtwork";
import { SiteFooter } from "../../_components/SiteFooter";
import { SiteNav } from "../../_components/SiteNav";
import { getProject, projects } from "../../_data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: { absolute: "Project not found — Relix" } };

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://film.relix.ai";
  const socialImage = project.image ? new URL(project.image, siteUrl).toString() : null;
  const title = `${project.title} — Relix`;
  const images = socialImage ? [{ url: socialImage, alt: project.imageAlt }] : [];

  return {
    title: { absolute: title },
    description: project.summary,
    openGraph: { title, description: project.summary, images },
    twitter: { card: "summary_large_image", title, description: project.summary, images: socialImage ? [socialImage] : [] },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main>
      <SiteNav />
      <section className="case-hero">
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
      </section>
      <section className="case-film"><ProjectArtwork project={project} priority /></section>
      <section className="case-overview">
        <div className="case-facts">
          <p>{project.client}</p><p>{project.year}</p><p>{project.category}</p>
        </div>
        <h2>{project.headline}</h2>
      </section>
      <section className="case-story">
        <article><h3>The challenge</h3><p>{project.challenge}</p></article>
        <article><h3>The approach</h3><p>{project.approach}</p></article>
        <article><h3>The outcome</h3><p>{project.outcome}</p></article>
      </section>
      <section className="case-services">
        <h2>What we did.</h2>
        <ul>{project.services.map((service) => <li key={service}>{service}</li>)}</ul>
      </section>
      <section className="next-project">
        <Link href={`/work/${nextProject.slug}`}><strong>{nextProject.title}</strong><i aria-hidden="true">↗</i></Link>
      </section>
      <SiteFooter />
    </main>
  );
}
