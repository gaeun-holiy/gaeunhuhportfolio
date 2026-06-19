export type ArchiveProject = {
  slug: string;
  title: string;
  role: string;
  year: string;
  thumbnail: string;
  detailType?: "imageStack" | "erosVisualization";
  images?: string[];
};

const gochiImages = Array.from({ length: 12 }, (_, index) => `/images/a ${index + 1}.png`);

export const archiveProjects: ArchiveProject[] = [
  {
    slug: "gochi",
    title: "GOCHI S2",
    role: "Direction · Product Design\n· Lookbook Art Direction",
    year: "2025 ~ 2026",
    thumbnail: "/images/a 1.png",
    detailType: "imageStack",
    images: gochiImages
  },
  {
    slug: "eros",
    title: "EROS! — Anatomy of a Generation",
    role: "AI Filmmaking Data Visualization",
    year: "2026",
    thumbnail: "/images/eros_ascii.png",
    detailType: "erosVisualization"
  }
];

export function getArchiveProjectBySlug(slug: string) {
  return archiveProjects.find((project) => project.slug === slug);
}
