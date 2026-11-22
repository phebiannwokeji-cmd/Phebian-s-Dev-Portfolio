import Reveal from "@/components/ui/Reveal";
import { desk } from "@/data/content";

const tones = {
  paper: "bg-card text-ink",
  red: "bg-red text-white",
  ink: "bg-ink text-paper-light",
};
const tilt = [-2.5, 2, 1.5, -2, -1.5, 2.5];

export default function Desk() {
  return (
    <section aria-labelledby="desk-title" className="paper pb-24">
      <div className="wrap">
        <Reveal>
          <h2 id="desk-title" className="display text-[clamp(2.2rem,9vw,5rem)]">
            On the desk
          </h2>
          <p className="hand mt-2 text-[1.5rem] text-red">— how I work, and what&apos;s on it</p>
        </Reveal>
        <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-7 md:grid-cols-3 md:gap-x-8 md:gap-y-10">
          {desk.map((n, i) => (
            <li key={n.tag} className={i % 2 === 1 ? "mt-6 md:mt-0" : ""}>
              <Reveal delay={(i % 3) * 0.08}>
                <div className={`note ${tones[n.tone]}`} style={{ transform: `rotate(${tilt[i]}deg)` }}>
                  <span className="tape" aria-hidden="true" />
                  <p className="mono-label text-[.62rem]! opacity-70">{n.tag}</p>
                  <p className="hand mt-2 text-[1.3rem] md:text-[1.5rem]">{n.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
