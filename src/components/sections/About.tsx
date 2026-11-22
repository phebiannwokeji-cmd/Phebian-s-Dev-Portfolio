import Reveal from "@/components/ui/Reveal";
import RichText from "@/components/ui/RichText";
import SectionLabel from "@/components/ui/SectionLabel";
import Tear from "@/components/ui/Tear";
import { MascotFigure } from "@/components/ui/Mascot";
import { about } from "@/data/content";

function Handle({ className }: { className: string }) {
  return <span className={`absolute h-3 w-3 border-[1.5px] border-red bg-white ${className}`} />;
}

export default function About() {
  return (
    <section id="about" className="paper relative pt-16 pb-20 md:pt-24">
      <Tear color="var(--paper)" paper />
      <div className="wrap">
        <SectionLabel index="01" name="About" note="The human behind the agents" />

        <div className="mt-8 grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
          <Reveal>
            <div className="relative mx-auto w-[min(17rem,80%)] md:w-[22rem]">
              <div className="relative border-[1.5px] border-red p-4">
                <Handle className="-top-1.5 -left-1.5" />
                <Handle className="-top-1.5 -right-1.5" />
                <Handle className="-bottom-1.5 -left-1.5" />
                <Handle className="-right-1.5 -bottom-1.5" />
                <Handle className="-top-1.5 left-1/2 -translate-x-1/2" />
                <Handle className="-bottom-1.5 left-1/2 -translate-x-1/2" />
                <MascotFigure className="mx-auto h-auto w-full" />
              </div>
              <span className="absolute -right-6 -bottom-8 flex items-center gap-1 rounded-sm bg-red px-2 py-1 text-[.72rem] font-semibold text-white md:-right-10">
                <svg viewBox="0 0 12 12" className="h-3 w-3 -translate-y-1.5 -translate-x-3 fill-red" aria-hidden="true">
                  <path d="M0 0l11 5-4.5 1.5L5 11z" />
                </svg>
                Phebian
              </span>
            </div>
            <p className="hand mt-12 text-center text-[1.35rem] text-ink/80">
              ↑ one of my agents, mid-review
              <br />
              (artist&apos;s impression)
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="display text-[clamp(3.5rem,17vw,9rem)] md:text-[clamp(3rem,8vw,6.5rem)]">Hello</h2>
            <p className="mt-6 text-[1.15rem] font-bold">{about.intro}</p>
            <div className="mt-3 max-w-[34rem] space-y-4 text-[1.05rem] text-ink/85">
              {about.paragraphs.map((p) => (
                <p key={p}>
                  <RichText text={p} />
                </p>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-14 md:grid-cols-2 md:gap-16">
          <Reveal>
            <h3 className="display text-[1.6rem]">Education</h3>
            <div className="mt-4 border-t-2 border-ink pt-4">
              <p className="text-[1.05rem] font-extrabold">{about.education.degree}</p>
              <p className="mt-1 text-ink/70">{about.education.school}</p>
            </div>
            <h3 className="display mt-12 text-[1.6rem]">Skills</h3>
            <ul className="mt-4 grid grid-cols-4 gap-2.5">
              {about.skills.map((s) => (
                <li
                  key={s.label}
                  className="flex aspect-square flex-col items-center justify-between rounded-xl border-2 bg-ink p-2 text-center"
                  style={{ borderColor: s.color }}
                >
                  <span className="mt-1 font-mono text-[1.15rem] font-bold" style={{ color: s.color }}>
                    {s.glyph}
                  </span>
                  <span className="mono-label text-[.5rem]! tracking-[.06em] text-paper-light/80">{s.label}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="display text-[1.6rem]">Experience</h3>
            <ul className="mt-4 border-t-2 border-ink">
              {about.experience.map((e) => (
                <li key={e.title} className="border-b border-ink/25 py-4">
                  <p className="mono-label text-red">{e.when}</p>
                  <p className="mt-1 text-[1.05rem] font-extrabold">{e.title}</p>
                  <p className="text-ink/70">{e.note}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
