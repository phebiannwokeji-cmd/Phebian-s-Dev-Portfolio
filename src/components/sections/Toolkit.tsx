import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import Tear from "@/components/ui/Tear";
import { toolkit } from "@/data/content";

const cubes = [
  { t: "TS", x: "8%", y: "-2.5rem", r: -12, s: "4.6rem", b: "1px", d: "0s" },
  { t: "SQL", x: "30%", y: "-1rem", r: 9, s: "3.6rem", b: "3px", d: ".8s" },
  { t: "Py", x: "62%", y: "-2rem", r: -6, s: "4rem", b: "2px", d: "1.6s" },
  { t: "AI", x: "84%", y: "-.5rem", r: 14, s: "4.4rem", b: "1px", d: "2.2s" },
];

export default function Toolkit() {
  return (
    <section id="toolkit" className="on-dark relative overflow-x-clip bg-red pt-24 pb-24 text-white">
      <Tear color="var(--red)" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-0" aria-hidden="true">
        {cubes.map((c) => (
          <div
            key={c.t}
            className="animate-float absolute"
            style={{ left: c.x, top: c.y, "--delay": c.d, "--dur": "7s" } as React.CSSProperties}
          >
            <div
              className="grid place-items-center rounded-2xl border-2 border-ink bg-card font-mono text-[1.3rem] font-bold text-ink shadow-[4px_4px_0_var(--ink)]"
              style={{ width: c.s, height: c.s, transform: `rotate(${c.r}deg)`, filter: `blur(${c.b})` }}
            >
              {c.t}
            </div>
          </div>
        ))}
      </div>

      <div className="wrap relative">
        <SectionLabel index="03" name="Toolkit" note="What I reach for" dark />
        <Reveal>
          <h2 className="display mt-8 text-[clamp(3rem,13vw,8rem)]">
            The toolkit <sup className="mono-label align-super text-[.9rem]! tracking-normal">({toolkit.length})</sup>
          </h2>
          <p className="serif-italic mt-4 max-w-[30rem] text-[1.5rem] leading-snug text-white/90">
            Languages, frameworks and agents I reach for, from SQL to Gemini.
          </p>
        </Reveal>

        <ol className="mt-12 grid gap-x-16 md:grid-cols-2">
          {toolkit.map((row, i) => (
            <li key={row.name} className="border-t border-white/40 py-5">
              <Reveal delay={(i % 2) * 0.06} y={16}>
                <div className="flex gap-6">
                  <span className="mono-label pt-1.5 text-white/70">0{i + 1}</span>
                  <div>
                    <h3 className="display text-[1.4rem] [font-stretch:115%]">{row.name}</h3>
                    <p className="mt-2 text-[.98rem] text-white/90">{row.items.join(" / ")}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
