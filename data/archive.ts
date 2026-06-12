export type ArchiveProject = {
  slug: string;
  title: string;
  role: string;
  year: string;
  thumbnail: string;
  images: string[];
};

const gochiImages = Array.from({ length: 11 }, (_, index) => `/images/a ${index + 1}.png`);

export const archiveProjects: ArchiveProject[] = [
  {
    slug: "gochi",
    title: "GOCHI S2",
    role: "Direction · Product Design\n· Lookbook Art Direction",
    year: "2025 ~ 2026",
    thumbnail: "/images/a 1.png",
    images: gochiImages
  }
];

export function getArchiveProjectBySlug(slug: string) {
  return archiveProjects.find((project) => project.slug === slug);
}
