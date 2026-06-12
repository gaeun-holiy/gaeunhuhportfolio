import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { archiveProjects } from "@/data/archive";

export const metadata = {
  title: "Archive | Gaeun Huh"
};

export default function ArchivePage() {
  return (
    <main className="min-h-screen bg-[#EDEBE6] pb-[90px] text-[#141413]">
      <PageHeader title="Archive" />

      <section className="flex flex-wrap items-start gap-x-[44px] gap-y-[78px] px-0 pt-[446px]">
        {archiveProjects.map((project) => (
          <article key={project.slug} className="flex items-start">
            <Link
              href={`/archive/${project.slug}/`}
              className="block h-[162px] w-[287px] overflow-hidden bg-[#B3B3B3]"
            >
              <img src={encodeURI(project.thumbnail)} alt="" className="h-full w-full object-cover" />
            </Link>

            <div className="ml-[6px] w-[120px] pt-[1px] text-[#141413]">
              <p className="font-en">{project.title}</p>
              <p className="font-en whitespace-pre-line text-[11pt] leading-[16.8px]">{project.role}</p>
              <p className="runtime mt-[16.8px]">{project.year}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
