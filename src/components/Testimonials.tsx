import { testimonials } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Testimonials() {
  return (
    <section className="relative border-t border-white/5 bg-[var(--bg-card)] py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Opiniones
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Lo que dice la comunidad
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.author}
              delay={i * 0.06}
              className="flex flex-col rounded-2xl border border-white/10 bg-[var(--bg-deep)] p-6"
            >
              <p className="text-sm italic leading-relaxed text-[var(--muted)]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-semibold text-white">{t.author}</p>
                <p className="text-xs text-[var(--muted)]">{t.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
