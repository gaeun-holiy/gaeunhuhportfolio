import Link from "next/link";

const navItems = [
  { href: "/", label: "About" },
  { href: "/cv/", label: "CV" },
  { href: "/films/", label: "Films" }
];

export function Header() {
  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
      {/* Replace this name with your own name or studio identity. */}
      <Link href="/" className="text-sm font-medium uppercase tracking-[0.18em] text-ink">
        Your Name
      </Link>
      <nav aria-label="Primary navigation" className="flex items-center gap-4 text-sm text-muted sm:gap-6">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="transition-colors hover:text-ink">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
