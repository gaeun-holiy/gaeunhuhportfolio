import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { archiveProjects, getArchiveProjectBySlug } from "@/data/archive";

type ArchiveProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return archiveProjects.map((project) => ({
    slug: project.slug
  }));
}

export async function generateMetadata({ params }: ArchiveProjectPageProps) {
  const { slug } = await params;
  const project = getArchiveProjectBySlug(slug);

  if (!project) {
    return {
      title: "Archive project not found"
    };
  }

  return {
    title: `${project.title} | Gaeun Huh`,
    description: project.role
  };
}

export default async function ArchiveProjectPage({ params }: ArchiveProjectPageProps) {
  const { slug } = await params;
  const project = getArchiveProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#EDEBE6] text-[#141413]">
      <PageHeader title={project.title} />

      <section className="mx-auto w-full max-w-[960px] pt-[116px] leading-none">
        <div className="m-0 block p-0 leading-none">
          {project.images.map((image) => (
            <img
              key={image}
              src={encodeURI(image)}
              alt=""
              className="m-0 block h-auto w-full p-0"
            />
          ))}
        </div>

        <Link href="/archive/" className="font-en my-[33.6px] inline-block">
          &lt; Back to Archive
        </Link>
      </section>
    </main>
  );
}
