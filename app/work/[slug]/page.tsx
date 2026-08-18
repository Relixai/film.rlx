import type { Metadata } from "next";
import Link from "next/link";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { ProjectArtwork } from "../../_components/ProjectArtwork";
import { SiteFooter } from "../../_components/SiteFooter";
import { SiteNav } from "../../_components/SiteNav";
import { getProject, projects } from "../../_data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

async function requestOrigin() {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "relix-ai-video-studio.xalebf.chatgpt.site";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  return `${protocol}://${host}`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: { absolute: "Project not found — Relix" } };

  const socialImage = project.image ? `${await requestOrigin()}${project.image}` : null;
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
        <p className="section-tag section-tag-light">[ {project.index} / {project.category} ]</p>
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
      </section>
      <section className="case-film"><ProjectArtwork project={project} priority /></section>
      <section className="case-overview">
        <div className="case-facts">
          <div><span>CLIENT</span><p>{project.client}</p></div><div><span>YEAR</span><p>{project.year}</p></div><div><span>FORMAT</span><p>{project.category}</p></div><div><span>RUNTIME</span><p>{project.runtime}</p></div>
        </div>
        <h2>{project.headline}</h2>
      </section>
      <section className="case-story">
        <article><span>01 / THE CHALLENGE</span><p>{project.challenge}</p></article>
        <article><span>02 / THE APPROACH</span><p>{project.approach}</p></article>
        <article><span>03 / THE OUTCOME</span><p>{project.outcome}</p></article>
      </section>
      <section className="case-services">
        <p className="section-tag">[ Scope ]</p><h2>What we did.</h2>
        <ul>{project.services.map((service) => <li key={service}>{service}</li>)}</ul>
      </section>
      <section className="next-project">
        <p className="section-tag section-tag-light">[ Next project ]</p>
        <Link href={`/work/${nextProject.slug}`}><span>{nextProject.category}</span><strong>{nextProject.title}</strong><i aria-hidden="true">↗</i></Link>
      </section>
      <SiteFooter />
    </main>
  );
}
