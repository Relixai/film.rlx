export type Project = {
  slug: string;
  index: string;
  title: string;
  category: string;
  client: string;
  year: string;
  runtime: string;
  summary: string;
  headline: string;
  challenge: string;
  approach: string;
  outcome: string;
  services: string[];
  artwork: "eclipse" | "orbit" | "afterimage";
  image?: string;
  imageAlt?: string;
};

export const projects: Project[] = [
  {
    slug: "eclipse",
    index: "01",
    title: "Eclipse",
    category: "Campaign Film",
    client: "Arc Atelier",
    year: "2026",
    runtime: "00:45",
    summary: "A fashion world shaped by light, distance, and desire.",
    headline: "A new season, revealed at the edge of the possible.",
    challenge: "Turn a minimal capsule collection into a global launch world—without relying on a traditional location shoot or familiar fashion-film language.",
    approach: "We built one visual rule: every garment belongs to a place that cannot exist. Generative worldbuilding, virtual cinematography, and live-action editorial instincts created a film with scale, continuity, and a deliberate human point of view.",
    outcome: "A hero film, six market cutdowns, and a modular library of launch assets delivered in four weeks.",
    services: ["Creative direction", "AI worldbuilding", "Virtual cinematography", "Edit + grade", "Cutdown system"],
    artwork: "eclipse",
    image: "/relix-hero.png",
    imageAlt: "A figure approaching a crimson monolith in a desert at dusk",
  },
  {
    slug: "new-orbit",
    index: "02",
    title: "New Orbit",
    category: "Product Film",
    client: "Aster Labs",
    year: "2026",
    runtime: "00:30",
    summary: "Skincare, reimagined beyond gravity.",
    headline: "Product truth, set free from the laws of production.",
    challenge: "Launch a science-led skincare range with the polish of a major beauty campaign and the flexibility to create new formats weekly.",
    approach: "We treated the bottle as architecture. A generative material study became a weightless product universe, then a repeatable motion system for every ingredient, claim, and launch beat.",
    outcome: "One master film became 38 platform-native assets across paid, organic, retail display, and product pages.",
    services: ["Concept development", "Product visualization", "Motion design", "Sound design", "Versioning"],
    artwork: "orbit",
  },
  {
    slug: "afterimage",
    index: "03",
    title: "Afterimage",
    category: "Brand Story",
    client: "Northstar Running",
    year: "2025",
    runtime: "01:05",
    summary: "Performance lives one second ahead.",
    headline: "A running film about the distance between now and next.",
    challenge: "Give an emerging performance brand a distinctive emotional platform without borrowing the visual codes of category leaders.",
    approach: "Instead of documenting effort, we visualized anticipation. Runners moved through delayed shadows, repeated horizons, and impossible light—an AI-native metaphor refined with sports-film pacing and sound.",
    outcome: "The launch film established a new brand language now used across seasonal campaigns, retail, and athlete stories.",
    services: ["Brand platform", "Film direction", "AI character pipeline", "Editorial", "Campaign toolkit"],
    artwork: "afterimage",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
