import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { RedMarquee } from "@/components/RedMarquee";
import { films } from "@/data/films";

export const metadata = {
  title: "Films | Gaeun Huh"
};

export default function FilmsPage() {
  return (
    <main className="min-h-screen bg-[#EDEBE6] pb-[90px] text-[#141413]">
      <PageHeader title="Films" />

      <section className="flex flex-wrap items-start gap-x-[44px] gap-y-[78px] px-0 pt-[446px]">
        {films.map((film) => (
          <article key={film.slug} className="flex items-start">
            <Link href={`/films/${film.slug}/`} className="block h-[162px] w-[287px] overflow-hidden bg-[#B3B3B3]">
              <img src={film.thumbnail} alt="" className="h-full w-full object-cover" />
            </Link>

            <div className="ml-[6px] w-[120px] pt-[1px] text-[#141413]">
              <p className="font-en">{film.titleEn}</p>
              {film.titleKr ? <p className="font-kr">{film.titleKr}</p> : null}

              <div className="mt-[16.8px]">
                <p className="font-en">{film.category}</p>
                <p className="runtime">{film.duration}</p>
              </div>
            </div>
          </article>
        ))}
      </section>

      <RedMarquee />
    </main>
  );
}
