# Documentary Portfolio

A minimal, static-export friendly portfolio for a documentary filmmaker / interaction designer. Built with Next.js App Router, TypeScript, and Tailwind CSS.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

To create the static export:

```bash
npm run build
```

The static site is generated in `out/`.

## Update Site Content

- Replace the name/logo in `components/Header.tsx`.
- Replace the short bio in `app/page.tsx`.
- Replace the CV content in `data/cv.ts`.
- Replace film entries in `data/films.ts`.

The film data model is:

```ts
{
  slug: string;
  title: string;
  titleEn?: string;
  year: string;
  thumbnail: string;
  videoUrl: string;
  poster: string;
  note: string;
  caption: string;
}
```

## Add A Film

1. Add thumbnail and poster images to `public/images/`.
2. Add an MP4 file to `public/videos/`, or use an external MP4 URL.
3. Add a new object to the `films` array in `data/films.ts`.
4. Use a unique `slug`, such as `my-new-film`.
5. Visit `/films/my-new-film/`.

Example:

```ts
{
  slug: "my-new-film",
  title: "나의 새 영화",
  titleEn: "My New Film",
  year: "2026",
  thumbnail: "/images/my-new-film-thumb.jpg",
  videoUrl: "/videos/my-new-film.mp4",
  poster: "/images/my-new-film-poster.jpg",
  note: "Director's statement or longer context.",
  caption: "Short documentary, 10 min. Directed by Your Name."
}
```

## Video Files

The detail page uses a native HTML5 `<video>` player with `controls`, `poster`, and `preload="metadata"`.

`videoUrl` can be either:

- A local path, such as `/videos/my-film.mp4`
- An external URL, such as `https://cdn.example.com/my-film.mp4`

For large MP4 files, external storage or a CDN is recommended. Static hosts often have file-size limits, and storing large video files outside the repository keeps deploys faster and more reliable.

## Deploy

Vercel works well for this project. Push the repository to GitHub, import it into Vercel, and use the default Next.js settings.

Because this project is configured with `output: "export"`, it can also be deployed to static hosts that serve the generated `out/` directory.
