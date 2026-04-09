import { services } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="servicios" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Qué hacemos
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Servicios para cada objetivo
          </h2>
          <p className="mt-4 text-[var(--muted)] leading-relaxed">
            Desde perder grasa hasta preparar competiciones. Cada área está
            liderada por especialistas con certificación y horas de práctica.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              className="group rounded-2xl border border-white/10 bg-[var(--bg-card)] p-6 transition hover:border-[var(--accent)]/35 hover:shadow-[0_0_48px_-16px_var(--glow)]"
              delay={i * 0.05}
            >
              <span className="font-display text-4xl font-bold text-white/10 transition group-hover:text-[var(--accent)]/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-xl font-bold text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed">
                {s.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
