import Link from "next/link";
import type { Film } from "@/data/films";

type FilmGridProps = {
  films: Film[];
};

export function FilmGrid({ films }: FilmGridProps) {
  return (
    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {films.map((film) => (
        <Link key={film.slug} href={`/films/${film.slug}/`} className="group block">
          <div className="aspect-[16/10] overflow-hidden bg-line">
            <img
              src={film.thumbnail}
              alt={`${film.titleEn} thumbnail`}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025] group-hover:opacity-90"
            />
          </div>
          <div className="mt-3 flex items-baseline justify-between gap-4 text-sm">
            <h2 className="leading-snug text-ink">
              {film.titleEn}
              {film.titleKr ? <span className="block text-muted">{film.titleKr}</span> : null}
            </h2>
            <p className="shrink-0 text-muted">{film.duration}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
