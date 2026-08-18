export type Project = {
  slug: string;
  title: string;
  category: string;
  client: string;
  year: string;
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
    slug: "worlds-in-motion",
    title: "Worlds in Motion",
    category: "Studio Reel",
    client: "Relix",
    year: "2026",
    summary: "A cinematic reel of impossible worlds, intimate characters, and images built to move.",
    headline: "A year of experiments, commissions, and cinematic worldbuilding in one film.",
    challenge: "Create a studio reel that could show the full range of AI-native filmmaking without feeling like a disconnected montage of techniques.",
    approach: "We grouped the work around movement, scale, and human presence, then built a new editorial spine that lets each world hand naturally into the next. Original sound design and a restrained grade hold the changing visual languages together.",
    outcome: "A flagship studio reel for 2026, delivered as a cinematic master with shorter edits for social, presentations, and new-business conversations.",
    services: ["Creative direction", "AI worldbuilding", "Virtual cinematography", "Editorial", "Sound design"],
    artwork: "eclipse",
    image: "/relix-hero.png",
    imageAlt: "A figure approaching a crimson monolith in a desert at dusk",
  },
  {
    slug: "objects-of-desire",
    title: "Objects of Desire",
    category: "Product Reel",
    client: "Relix",
    year: "2026",
    summary: "Beauty, material, and product stories shaped beyond the limits of a physical studio.",
    headline: "A product reel where light, texture, and gravity do the selling.",
    challenge: "Show how one flexible production approach can move from luxury beauty to abstract product visualization while keeping every frame tactile and premium.",
    approach: "We treated each object as a character, designing its material behavior, environment, camera language, and rhythm before building the final sequences into one fluid visual study.",
    outcome: "A focused category reel and a library of loopable product moments ready for social, pitch decks, launch films, and retail screens.",
    services: ["Product visualization", "Material studies", "Motion design", "Editorial", "Sound design"],
    artwork: "orbit",
  },
  {
    slug: "human-velocity",
    title: "Human Velocity",
    category: "Sports Reel",
    client: "Relix",
    year: "2026",
    summary: "Bodies in motion, impossible environments, and performance seen from a new angle.",
    headline: "A sports reel about the feeling before the finish line.",
    challenge: "Build a performance film with physical energy and human tension without falling back on the familiar visual language of category advertising.",
    approach: "We combined expressive character motion with repeated horizons, delayed shadows, and changing light. Sports-film pacing keeps the imagery grounded even as the environments become impossible.",
    outcome: "A high-energy master reel with modular sequences that can open campaign treatments, social edits, and sports-focused creative presentations.",
    services: ["Film direction", "AI character development", "Motion studies", "Editorial", "Sound design"],
    artwork: "afterimage",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
