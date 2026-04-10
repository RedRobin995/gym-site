"use client";

import { useState } from "react";
import { validateContactPayload } from "@/lib/contactValidation";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    const form = e.currentTarget;
    const data = {
      nombre: (form.elements.namedItem("nombre") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      telefono: (form.elements.namedItem("telefono") as HTMLInputElement)
        .value,
      interes: (form.elements.namedItem("interes") as HTMLSelectElement)
        .value,
      mensaje: (form.elements.namedItem("mensaje") as HTMLTextAreaElement)
        .value,
    };

    const err = validateContactPayload(data);
    if (err) {
      setStatus("error");
      setMessage(err);
      return;
    }
    setStatus("success");
    setMessage("¡Gracias! Te contactamos muy pronto.");
    form.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/10 bg-[var(--bg-deep)] p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="sm:col-span-2">
          <span className="text-xs font-medium text-[var(--muted)]">
            Nombre completo
          </span>
          <input
            name="nombre"
            required
            autoComplete="name"
            className="mt-2 w-full rounded-xl border border-white/10 bg-[var(--bg-elevated)] px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-[var(--accent)]/50 focus:ring-1 focus:ring-[var(--accent)]/30"
            placeholder="Tu nombre"
          />
        </label>
        <label>
          <span className="text-xs font-medium text-[var(--muted)]">Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 w-full rounded-xl border border-white/10 bg-[var(--bg-elevated)] px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-[var(--accent)]/50 focus:ring-1 focus:ring-[var(--accent)]/30"
            placeholder="correo@ejemplo.com"
          />
        </label>
        <label>
          <span className="text-xs font-medium text-[var(--muted)]">
            Teléfono
          </span>
          <input
            name="telefono"
            type="tel"
            autoComplete="tel"
            className="mt-2 w-full rounded-xl border border-white/10 bg-[var(--bg-elevated)] px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-[var(--accent)]/50 focus:ring-1 focus:ring-[var(--accent)]/30"
            placeholder="+34 ..."
          />
        </label>
        <label className="sm:col-span-2">
          <span className="text-xs font-medium text-[var(--muted)]">
            Me interesa
          </span>
          <select
            name="interes"
            required
            className="mt-2 w-full rounded-xl border border-white/10 bg-[var(--bg-elevated)] px-4 py-3 text-white outline-none transition focus:border-[var(--accent)]/50 focus:ring-1 focus:ring-[var(--accent)]/30"
            defaultValue=""
          >
            <option value="" disabled>
              Selecciona una opción
            </option>
            <option value="prueba">Prueba gratuita</option>
            <option value="starter">Plan Starter</option>
            <option value="pro">Plan Pro</option>
            <option value="elite">Plan Elite</option>
            <option value="empresa">Convenio empresas</option>
            <option value="otro">Otro</option>
          </select>
        </label>
        <label className="sm:col-span-2">
          <span className="text-xs font-medium text-[var(--muted)]">
            Mensaje
          </span>
          <textarea
            name="mensaje"
            required
            rows={4}
            className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-[var(--bg-elevated)] px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-[var(--accent)]/50 focus:ring-1 focus:ring-[var(--accent)]/30"
            placeholder="Horarios preferidos, objetivos, lesiones previas..."
          />
        </label>
      </div>
      {message ? (
        <p
          className={`mt-4 text-sm ${status === "success" ? "text-[var(--accent)]" : "text-red-400"}`}
          role="status"
        >
          {message}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 w-full rounded-full bg-[var(--accent)] py-3.5 text-sm font-semibold text-[var(--accent-foreground)] transition hover:brightness-110 disabled:opacity-60"
      >
        {status === "loading" ? "Enviando..." : "Enviar solicitud"}
      </button>
    </form>
  );
}
