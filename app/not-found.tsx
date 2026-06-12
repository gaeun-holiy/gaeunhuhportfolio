import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 pb-24 pt-20 sm:px-8 lg:px-12">
      <p className="text-xs uppercase tracking-[0.2em] text-muted">404</p>
      <h1 className="mt-5 text-4xl font-normal text-ink sm:text-6xl">Page not found</h1>
      <Link href="/films/" className="mt-10 inline-block border-b border-ink pb-1 text-sm text-ink transition-opacity hover:opacity-60">
        Back to films
      </Link>
    </main>
  );
}
