import { schedule } from "@/lib/site";
import { Reveal } from "./Reveal";

const days = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"] as const;
const dayKeys = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"] as const;

export function Schedule() {
  return (
    <section id="horarios" className="relative border-t border-white/5 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Planifica tu semana
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Horario de clases
          </h2>
          <p className="mt-4 text-[var(--muted)] leading-relaxed">
            Calendario orientativo. Cupos limitados: reserva desde la app o en
            recepción para asegurar tu plaza.
          </p>
        </Reveal>

        <Reveal className="mt-12 overflow-x-auto rounded-2xl border border-white/10 bg-[var(--bg-card)]">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-[var(--bg-elevated)]">
                <th className="sticky left-0 z-10 bg-[var(--bg-elevated)] px-4 py-4 font-semibold text-[var(--accent)]">
                  Hora
                </th>
                {days.map((d) => (
                  <th
                    key={d}
                    className="px-3 py-4 font-semibold text-white whitespace-nowrap"
                  >
                    {d}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {schedule.map((row, ri) => (
                <tr
                  key={row.time}
                  className={
                    ri % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"
                  }
                >
                  <td className="sticky left-0 z-10 border-t border-white/5 bg-[var(--bg-card)] px-4 py-3 font-mono text-xs text-[var(--muted)]">
                    {row.time}
                  </td>
                  {dayKeys.map((key) => {
                    const cell = row[key];
                    const empty = cell === "—";
                    return (
                      <td
                        key={key}
                        className={`border-t border-white/5 px-3 py-3 ${empty ? "text-white/20" : "text-white"}`}
                      >
                        {empty ? "—" : cell}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}
