import Image from "next/image";
import { site } from "@/lib/site";
import { Reveal } from "./Reveal";

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=900&h=1100&fit=crop";

export function About() {
  return (
    <section
      id="nosotros"
      className="relative border-t border-white/5 bg-[var(--bg-card)] py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <Reveal className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 lg:aspect-[3/4]">
          <Image
            src={ABOUT_IMAGE}
            alt="Entrenamiento en Athletic Center"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
        </Reveal>
        <div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Por qué {site.name}
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ciencia aplicada, vibes de equipo.
            </h2>
            <p className="mt-6 text-[var(--muted)] leading-relaxed">
              Combinamos periodización de fuerza, tecnología de seguimiento y
              coaching humano. Nada de fórmulas genéricas: cada socio parte de
              una evaluación y un plan claro que se revisa cada mes.
            </p>
          </Reveal>
          <Reveal className="mt-10 grid gap-4 sm:grid-cols-2" delay={0.08}>
            {[
              {
                title: "Espacios zonificados",
                body: "Musculación, funcional, cardio y zona recovery con contrast bath.",
              },
              {
                title: "Comunidad real",
                body: "Eventos trimestrales, retos y seguimiento en app propia.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-[var(--bg-elevated)] p-5"
              >
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
