import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { journey } from "@/data/content";

export default function Journey() {
  return (
    <section aria-labelledby="journey-title" className="paper pb-28">
      <div className="wrap">
        <SectionLabel index="06" name="Journey" note="Still moving" />
        <Reveal>
          <h2 id="journey-title" className="display mt-8 text-[clamp(2.6rem,11vw,6.5rem)]">
            The long
            <br />
            way round
          </h2>
        </Reveal>
        <ol className="relative mt-12 max-w-[40rem] border-l-2 border-ink/25 pl-0">
          {journey.map((j, i) => (
            <li key={j.title} className="relative pb-12 pl-14 last:pb-0">
              <span
                className={`absolute -left-[1.45rem] top-0 grid h-11 w-11 place-items-center rounded-full font-mono text-[.8rem] ${
                  j.state === "now"
                    ? "animate-pulse-ring bg-red text-white"
                    : j.state === "next"
                      ? "border-2 border-dashed border-ink bg-paper"
                      : "border-2 border-ink bg-card"
                }`}
              >
                0{i + 1}
              </span>
              <Reveal y={16}>
                <p className={`mono-label ${j.state === "now" ? "text-red" : "text-ink/60"}`}>{j.when}</p>
                <h3 className="mt-1 text-[1.3rem] font-extrabold">{j.title}</h3>
                <p className="mt-1 max-w-[30rem] text-ink/75">{j.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
