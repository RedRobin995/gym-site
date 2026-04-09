import Link from "next/link";
import { site } from "@/lib/site";

const footerNav = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#horarios", label: "Horarios" },
  { href: "#precios", label: "Membresías" },
  { href: "#contacto", label: "Contacto" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-[var(--bg-deep)] py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-xl font-bold text-white">
              {site.name}
              <span className="text-[var(--accent)]">.</span>
            </p>
            <p className="mt-3 max-w-xs text-sm text-[var(--muted)] leading-relaxed">
              {site.tagline}
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-2" aria-label="Pie">
            {footerNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[var(--muted)] transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="text-sm text-[var(--muted)]">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-white"
            >
              Instagram
            </a>
            <a
              href={site.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block hover:text-white"
            >
              YouTube
            </a>
          </div>
        </div>
        <p className="mt-12 border-t border-white/5 pt-8 text-center text-xs text-white/40">
          © {year} {site.name}. Plantilla comercial — sustituye textos y datos
          legales según el negocio final.
        </p>
      </div>
    </footer>
  );
}
