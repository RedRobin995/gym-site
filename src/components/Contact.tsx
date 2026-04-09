import Link from "next/link";
import { site } from "@/lib/site";
import { Reveal } from "./Reveal";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section
      id="contacto"
      className="relative border-t border-white/5 bg-[var(--bg-card)] py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                Contacto
              </p>
              <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Primera semana de prueba
              </h2>
              <p className="mt-4 text-[var(--muted)] leading-relaxed">
                Déjanos tu mensaje y te respondemos en menos de 24 h. También
                puedes escribirnos por WhatsApp para agendar visita guiada.
              </p>
            </Reveal>
            <Reveal className="mt-10 space-y-6" delay={0.06}>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  Teléfono
                </p>
                <Link
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="mt-1 block text-lg font-medium text-white hover:text-[var(--accent)]"
                >
                  {site.phone}
                </Link>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  Email
                </p>
                <Link
                  href={`mailto:${site.email}`}
                  className="mt-1 block text-lg font-medium text-white hover:text-[var(--accent)]"
                >
                  {site.email}
                </Link>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  Dirección
                </p>
                <Link
                  href={site.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-lg font-medium text-white hover:text-[var(--accent)]"
                >
                  {site.address.street}
                  <br />
                  {site.address.city}
                </Link>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  Horario recepción
                </p>
                <p className="mt-1 text-[var(--muted)]">{site.hours.weekday}</p>
                <p className="text-[var(--muted)]">{site.hours.weekend}</p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
