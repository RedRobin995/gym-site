import Link from "next/link";
import { plans } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Pricing() {
  return (
    <section
      id="precios"
      className="relative border-t border-white/5 bg-[var(--bg-card)] py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Membresías
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Elige tu ritmo
          </h2>
          <p className="mt-4 text-[var(--muted)] leading-relaxed">
            Sin permanencia en Starter. Descuentos trimestrales y anuales en
            recepción.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal
              key={plan.name}
              delay={i * 0.06}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                plan.highlight
                  ? "border-[var(--accent)]/50 bg-[var(--bg-elevated)] shadow-[0_0_60px_-20px_var(--glow)]"
                  : "border-white/10 bg-[var(--bg-deep)]"
              }`}
            >
              {plan.highlight ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--accent)] px-3 py-0.5 text-xs font-bold text-[var(--accent-foreground)]">
                  Más popular
                </span>
              ) : null}
              <h3 className="font-display text-xl font-bold text-white">
                {plan.name}
              </h3>
              <p className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-4xl font-bold text-white">
                  {plan.price}€
                </span>
                <span className="text-sm text-[var(--muted)]">
                  /{plan.period}
                </span>
              </p>
              <ul className="mt-8 flex-1 space-y-3 text-sm text-[var(--muted)]">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    <span className="leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#contacto"
                className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold transition ${
                  plan.highlight
                    ? "bg-[var(--accent)] text-[var(--accent-foreground)] hover:brightness-110"
                    : "border border-white/20 text-white hover:border-white/40 hover:bg-white/5"
                }`}
              >
                Hablar con un asesor
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
