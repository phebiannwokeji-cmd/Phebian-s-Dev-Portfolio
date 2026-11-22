import Pill from "@/components/ui/Pill";
import Reveal from "@/components/ui/Reveal";
import Parallax from "@/components/ui/Parallax";
import SectionLabel from "@/components/ui/SectionLabel";
import Sticker from "@/components/ui/Sticker";
import Tear from "@/components/ui/Tear";
import { ArrowUpRight } from "@/components/ui/Icons";
import { BrowserMock, PhoneMock, TokensMock } from "@/components/mocks/Mockups";
import { projects, type Project } from "@/data/content";

function Visual({ p }: { p: Project }) {
  if (p.mock === "browser") return <BrowserMock url="head-count-snowy.vercel.app" />;
  if (p.mock === "phone") return <PhoneMock />;
  return <TokensMock />;
}

function ProjectBlock({ p, flip }: { p: Project; flip: boolean }) {
  return (
    <article className="grid grid-cols-[minmax(0,1fr)] gap-8 py-14 md:grid-cols-2 md:items-center md:gap-16 md:py-20">
      <Reveal className={`mb-6 md:mb-0 ${flip ? "md:order-2" : ""}`}>
        <div className="relative">
          <Visual p={p} />
          <Parallax range={14} className="absolute -right-2 -bottom-8 z-10 md:-right-6">
            <Sticker shape="stamp" tone="red" rotate={flip ? -6 : 7}>
              {p.sticker}
            </Sticker>
          </Parallax>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <p className="mono-label flex flex-wrap items-center gap-x-3 gap-y-1 text-paper-light/70">
          <span>{p.index}</span>
          <span>{p.kind}</span>
          {p.status && (
            <span className="flex items-center gap-1.5 text-red">
              <span className="animate-pulse-ring h-1.5 w-1.5 rounded-full bg-red" />
              {p.status}
            </span>
          )}
        </p>
        <h3 className="display mt-3 text-[clamp(2.3rem,10vw,6rem)] text-paper-light md:text-[clamp(2.2rem,4.4vw,4rem)]">{p.name}</h3>
        <p className="serif-italic mt-2 text-[1.5rem] text-paper-light/70">{p.subtitle}</p>
        <p className="mt-5 max-w-[32rem] text-[1.02rem] text-paper-light/85">{p.description}</p>

        <ul className="diamond-list mt-5 max-w-[32rem] text-[.95rem] text-paper-light/90">
          {p.points.map((pt) => (
            <li key={pt}>{pt}</li>
          ))}
        </ul>

        <dl className="mt-6 grid max-w-[32rem] grid-cols-3 gap-4 border-t border-paper-light/25 pt-5">
          {p.stats.map((s) => (
            <div key={s.label}>
              <dt className="display text-[clamp(1.5rem,6vw,2.2rem)] text-red">{s.value}</dt>
              <dd className="mono-label mt-1 text-[.58rem]! text-paper-light/70">{s.label}</dd>
            </div>
          ))}
        </dl>

        <ul className="mt-6 flex max-w-[32rem] flex-wrap gap-2">
          {p.stack.map((t) => (
            <li key={t} className="tech-pill">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap items-center gap-4">
          <Pill href={p.cta.href} variant="red">
            {p.cta.label} <ArrowUpRight className="h-3.5 w-3.5" />
          </Pill>
          {p.secondary && (
            <Pill href={p.secondary.href} variant="black">
              {p.secondary.label} <ArrowUpRight className="h-3.5 w-3.5" />
            </Pill>
          )}
        </div>
        <p className="mono-label mt-4 text-[.6rem]! text-paper-light/55">{p.caption}</p>
      </Reveal>
    </article>
  );
}

export default function Work() {
  return (
    <section id="work" className="on-dark relative bg-ink pt-20 pb-10 text-paper-light">
      <Tear color="var(--ink)" alt />
      <div className="wrap">
        <SectionLabel index="02" name="Work" note={`Selected · (0${projects.length})`} dark />
        <Reveal>
          <h2 className="display mt-8 text-[clamp(3rem,13vw,8rem)]">
            Built
            <br />
            <span className="serif-italic font-normal normal-case text-paper-light/80 [font-stretch:100%]">&amp;</span>{" "}
            <span className="text-red">shipped</span>
          </h2>
          <p className="hand mt-3 text-[1.5rem] text-paper-light/70">known limits included →</p>
        </Reveal>
        <div className="divide-y divide-paper-light/15">
          {projects.map((p, i) => (
            <ProjectBlock key={p.name} p={p} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
