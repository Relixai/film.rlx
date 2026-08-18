import Image from "next/image";
import type { Project } from "../_data/projects";

export function ProjectArtwork({ project, priority = false }: { project: Project; priority?: boolean }) {
  if (project.artwork === "eclipse") {
    return (
      <div className="project-media project-eclipse">
        <Image src={project.image!} alt={project.imageAlt!} fill priority={priority} sizes="(max-width: 720px) 100vw, 92vw" />
        <span className="play" aria-hidden="true">▶</span>
      </div>
    );
  }

  if (project.artwork === "orbit") {
    return (
      <div className="project-media project-orbit" role="img" aria-label="A surreal skincare bottle floating beside a planet">
        <div className="planet" /><div className="bottle">RELIX</div>
        <span className="play" aria-hidden="true">▶</span>
      </div>
    );
  }

  return (
    <div className="project-media project-afterimage" role="img" aria-label="A runner silhouetted against an orange sun">
      <div className="sun" /><div className="runner"><i /><i /><i /></div>
      <span className="play" aria-hidden="true">▶</span>
    </div>
  );
}
