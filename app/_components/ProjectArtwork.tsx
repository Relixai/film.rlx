import type { Project } from "../_data/projects";

export function ProjectArtwork({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <div className="project-media project-video" style={{ backgroundImage: `url("${project.image}")` }}>
      <video autoPlay muted loop playsInline poster={project.image} preload={priority ? "auto" : "metadata"} aria-hidden="true">
        <source src={project.video} type="video/mp4" />
      </video>
    </div>
  );
}
