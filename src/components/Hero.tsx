"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/lib/site";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_IMAGE}
          alt="Interior de gimnasio moderno con equipamiento"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[var(--bg-deep)] via-[var(--bg-deep)]/88 to-[var(--bg-deep)]/40"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[var(--bg-deep)] via-transparent to-transparent"
          aria-hidden
        />
      </div>

      <div className="bg-grid pointer-events-none absolute inset-0 z-[1] opacity-60" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-4rem)] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]"
        >
          Madrid · Entrenamiento integral
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="font-display max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.02]"
        >
          Menos excusas.{" "}
          <span className="gradient-text">{site.tagline}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)]"
        >
          {site.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <Link
            href="#contacto"
            className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-8 py-3.5 text-base font-semibold text-[var(--accent-foreground)] shadow-[0_0_40px_-8px_var(--glow)] transition hover:brightness-110"
          >
            Reservar visita
          </Link>
          <Link
            href="#horarios"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:border-white/35 hover:bg-white/10"
          >
            Ver horarios
          </Link>
        </motion.div>
        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 sm:grid-cols-4"
        >
          {[
            ["4.9", "Valoración media"],
            ["32", "Clases / semana"],
            ["1200 m²", "Zonas de entreno"],
            ["+40", "Profesionales"],
          ].map(([stat, label]) => (
            <div key={label}>
              <dt className="font-display text-2xl font-bold text-white sm:text-3xl">
                {stat}
              </dt>
              <dd className="mt-1 text-sm text-[var(--muted)]">{label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
