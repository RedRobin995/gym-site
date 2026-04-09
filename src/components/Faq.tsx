"use client";

import { useState } from "react";
import { faqs } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            FAQ
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Preguntas frecuentes
          </h2>
        </Reveal>
        <div className="mt-12 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 0.04}>
                <div className="rounded-xl border border-white/10 bg-[var(--bg-card)]">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="font-medium text-white">{item.q}</span>
                    <span
                      className={`text-[var(--accent)] transition ${isOpen ? "rotate-45" : ""}`}
                    >
                      +
                    </span>
                  </button>
                  {isOpen ? (
                    <div className="border-t border-white/5 px-5 pb-4 pt-0">
                      <p className="pt-3 text-sm leading-relaxed text-[var(--muted)]">
                        {item.a}
                      </p>
                    </div>
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
