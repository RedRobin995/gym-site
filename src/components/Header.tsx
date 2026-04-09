"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";

const nav = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#horarios", label: "Horarios" },
  { href: "#precios", label: "Membresías" },
  { href: "#equipo", label: "Equipo" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[var(--bg-deep)]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#"
          className="font-display text-lg font-bold tracking-tight text-white"
        >
          {site.name}
          <span className="ml-1 text-[var(--accent)]">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--muted)] transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[var(--muted)] transition hover:text-white"
          >
            WhatsApp
          </Link>
          <Link
            href="#contacto"
            className="rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-semibold text-[var(--accent-foreground)] transition hover:brightness-110"
          >
            Prueba gratis
          </Link>
        </div>

        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 md:hidden"
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menú</span>
          <span
            className={`absolute block h-0.5 w-5 rounded-full bg-white transition ${open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-[11px] left-1/2 -translate-x-1/2"}`}
          />
          <span
            className={`absolute top-1/2 left-1/2 block h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition ${open ? "scale-x-0 opacity-0" : ""}`}
          />
          <span
            className={`absolute block h-0.5 w-5 rounded-full bg-white transition ${open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-[11px] left-1/2 -translate-x-1/2"}`}
          />
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/5 bg-[var(--bg-deep)] px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2 text-base font-medium text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 text-base text-[var(--muted)]"
              onClick={() => setOpen(false)}
            >
              WhatsApp
            </Link>
            <Link
              href="#contacto"
              className="mt-2 rounded-full bg-[var(--accent)] py-3 text-center text-sm font-semibold text-[var(--accent-foreground)]"
              onClick={() => setOpen(false)}
            >
              Prueba gratis
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
