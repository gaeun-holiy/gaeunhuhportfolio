import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { films, getFilmBySlug } from "@/data/films";

type FilmPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return films.map((film) => ({
    slug: film.slug
  }));
}

export async function generateMetadata({ params }: FilmPageProps) {
  const { slug } = await params;
  const film = getFilmBySlug(slug);

  if (!film) {
    return {
      title: "Film not found"
    };
  }

  return {
    title: `${film.titleEn} | Gaeun Huh`,
    description: film.caption
  };
}

export default async function FilmDetailPage({ params }: FilmPageProps) {
  const { slug } = await params;
  const film = getFilmBySlug(slug);

  if (!film) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#EDEBE6] px-[23px] pb-[80px] pt-[116px] text-[#141413]">
      <PageHeader title={film.titleEn} />

      <section className="mx-auto w-[820px]">
        {film.youtubeId ? (
          <div style={{ position: "relative", width: "100%", aspectRatio: film.videoAspectRatio ?? "16/9" }}>
            <iframe
              src={`https://www.youtube.com/embed/${film.youtubeId}`}
              title={film.titleEn}
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : film.videoUrl ? (
          <>
            {/*
              If the .mov file does not play in the browser, mp4 변환 필요.
              Replace src in data/films.ts after converting the file.
            */}
            <video
              src={film.videoUrl}
              controls
              playsInline
              className="aspect-video w-full bg-[#B3B3B3] object-contain"
            />
          </>
        ) : (
          <div className="flex aspect-video w-full items-center justify-center bg-[#B3B3B3]">
            <p className="font-en text-white">Video placeholder</p>
          </div>
        )}

        <div className="mt-[18px] max-w-[620px]">
          <p className="caption-en">{film.titleEn}</p>
          {film.titleKr ? <p className="caption-ko">{film.titleKr}</p> : null}
          <div className="mt-[16.8px]">
            <p className="caption-en">{film.category}</p>
            <p className="runtime">{film.duration}</p>
          </div>
          <div className="mt-[16.8px] space-y-[16.8pt]">
            {film.captionKoBlocks
              ? film.captionKoBlocks.map((block) => (
                  <p key={`${block.heading ?? "body"}-${block.text.slice(0, 24)}`} className="caption-ko">
                    {block.heading ? <strong className="font-bold">{block.heading}</strong> : null}
                    {block.heading ? <br /> : null}
                    {block.text}
                  </p>
                ))
              : null}
            {film.captionKo && !film.captionKoBlocks ? <p className="caption-ko">{film.captionKo}</p> : null}
            {film.captionEn ? <p className="caption-en pt-[4px]">{film.captionEn}</p> : null}
          </div>
        </div>

        {film.characterDesign ? (
          <section className="mt-[50.4px] w-full">
            <h2 className="font-en text-[18px] leading-[16.8px]">{film.characterDesign.title}</h2>
            <p className="font-en mt-[8.4px] text-[14px] leading-[16.8px]">
              {film.characterDesign.subtitle}
            </p>
            <div className="mt-[16.8px] flex w-full max-w-[620px] flex-col gap-[16.8px]">
              {film.characterDesign.images.map((image) => (
                <img
                  key={image}
                  src={encodeURI(image)}
                  alt=""
                  className="block h-auto w-full bg-[#B3B3B3]"
                />
              ))}
            </div>
          </section>
        ) : null}

        <Link href="/films/" className="font-en mt-[33.6px] inline-block">
          &lt; Back to Films
        </Link>
      </section>
    </main>
  );
}
