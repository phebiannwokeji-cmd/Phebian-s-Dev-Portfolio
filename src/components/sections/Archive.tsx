import Polaroid from "@/components/ui/Polaroid";
import Reveal from "@/components/ui/Reveal";
import { archive } from "@/data/content";

const rot = [-4, 3, -2.5, 4];

export default function Archive() {
  return (
    <section aria-labelledby="archive-title" className="on-dark bg-ink pb-24 text-paper-light">
      <div className="wrap">
        <Reveal>
          <h2 id="archive-title" className="display text-[clamp(2.4rem,10vw,5.5rem)]">
            Before
            <br />
            the code
          </h2>
          <p className="hand mt-2 text-[1.5rem] text-paper-light/65">tap one to flip it over</p>
        </Reveal>
        <ul className="mt-14 grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          {archive.map((a, i) => (
            <li key={a.title}>
              <Reveal delay={(i % 4) * 0.08}>
                <Polaroid {...a} rotate={rot[i]} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
