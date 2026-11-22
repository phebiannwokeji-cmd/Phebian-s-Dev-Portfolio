import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import Sticker from "@/components/ui/Sticker";
import { credentials } from "@/data/content";

export default function Credentials() {
  return (
    <section aria-labelledby="paper-title" className="paper pb-24">
      <div className="wrap">
        <SectionLabel index="05" name="Credentials" note="Courses completed" />
        <Reveal>
          <h2 id="paper-title" className="display mt-8 text-[clamp(3rem,13vw,8rem)]">
            The paper
            <br />
            trail
          </h2>
          <p className="serif-italic mt-4 max-w-[28rem] text-[1.5rem] leading-snug">
            Certificates in AI, conversational AI and data analytics.
          </p>
        </Reveal>

        <ul className="mt-12 grid grid-cols-[minmax(0,1fr)] gap-8 md:grid-cols-2">
          {credentials.map((c, i) => {
            const dark = c.tone === "ink";
            return (
              <li key={c.no} className={i % 2 ? "md:mt-10" : ""}>
                <Reveal delay={(i % 2) * 0.08}>
                  <div
                    className={`relative grid grid-cols-[minmax(0,1fr)_6rem] overflow-visible rounded-2xl border-2 border-ink shadow-[5px_5px_0_var(--ink)] ${dark ? "bg-ink text-paper-light" : "bg-card text-ink"}`}
                    style={{ transform: `rotate(${i % 2 ? 1.6 : -1.6}deg)` }}
                  >
                    <div className="p-5">
                      <p className="mono-label text-[.6rem]! opacity-70">NO. {c.no}</p>
                      <p className="display mt-3 text-[clamp(1rem,4.6vw,1.45rem)] leading-[.98] [font-stretch:115%] [overflow-wrap:anywhere]">{c.title}</p>
                      <p className="serif-italic mt-3 text-[1.15rem] opacity-80">{c.issuer}</p>
                    </div>
                    <div className={`relative flex flex-col items-end justify-between border-l-2 border-dashed p-4 ${dark ? "border-paper-light/60" : "border-ink/60"}`}>
                      <span className="absolute -top-[13px] -left-[13px] h-6 w-6 rounded-full border-2 border-ink bg-paper" aria-hidden="true" />
                      <span className="absolute -bottom-[13px] -left-[13px] h-6 w-6 rounded-full border-2 border-ink bg-paper" aria-hidden="true" />
                      <p className="mono-label text-right text-[.58rem]! opacity-70">{c.year || "Certified"}</p>
                      <div className="barcode h-14 w-full" aria-hidden="true" />
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
        <div className="mt-10 flex justify-end pr-4">
          <Sticker shape="burst" tone="red" rotate={10}>
            still learning
          </Sticker>
        </div>
      </div>
    </section>
  );
}
