import Image from "next/image";
import { trainers } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Trainers() {
  return (
    <section id="equipo" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Equipo
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Coaches que entrenan contigo
          </h2>
          <p className="mt-4 text-[var(--muted)] leading-relaxed">
            Formación continua y feedback semanal. Estamos en el box, no
            escondidos en un despacho.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {trainers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <div className="group overflow-hidden rounded-2xl border border-white/10 bg-[var(--bg-card)]">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 640px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-deep)] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-white">
                    {t.name}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--accent)]">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
