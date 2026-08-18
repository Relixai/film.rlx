import type { Project } from "../_data/projects";

export function ProjectArtwork({ project, priority = false }: { project: Project; priority?: boolean }) {
  if (project.artwork === "eclipse") {
    return (
      <div className="project-media project-eclipse">
        <img src={project.image!} alt={project.imageAlt!} width="1672" height="941" loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} />
        <span className="play" aria-hidden="true">▶</span><span className="runtime">{project.runtime}</span>
      </div>
    );
  }

  if (project.artwork === "orbit") {
    return (
      <div className="project-media project-orbit" role="img" aria-label="A surreal skincare bottle floating beside a planet">
        <div className="planet" /><div className="bottle">RELIX</div>
        <span className="play" aria-hidden="true">▶</span><span className="runtime">{project.runtime}</span>
      </div>
    );
  }

  return (
    <div className="project-media project-afterimage" role="img" aria-label="A runner silhouetted against an orange sun">
      <div className="sun" /><div className="runner"><i /><i /><i /></div>
      <span className="play" aria-hidden="true">▶</span><span className="runtime">{project.runtime}</span>
    </div>
  );
}
