import Sticker from "@/components/ui/Sticker";
import { MascotFace } from "@/components/ui/Mascot";
import Tear from "@/components/ui/Tear";

const words = ["Direct the agents", "Review the work", "Document the limits", "Ship it"];

export default function MarqueeBand() {
  const row = [...words, ...words];
  return (
    <section aria-hidden="true" className="relative bg-ink py-14 text-paper-light md:py-20">
      <Tear color="var(--ink)" />
      <div className="overflow-hidden">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
          {[...row, ...row].map((w, i) => (
            <span key={i} className="display flex items-center gap-10 text-[clamp(3rem,11vw,7rem)]">
              <span className={i % 2 ? "text-red" : ""}>{w}</span>
              <span className="text-[.5em] text-red">✦</span>
            </span>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
        <div className="relative -rotate-6">
          <div className="grid h-36 w-36 place-items-center rounded-full border-[3px] border-ink bg-red shadow-[5px_5px_0_var(--paper-light)] md:h-44 md:w-44">
            <MascotFace className="h-24 w-24 md:h-32 md:w-32" />
          </div>
          <Sticker shape="stamp" tone="paper" rotate={6} className="absolute -right-10 -bottom-3">
            human-reviewed ✓
          </Sticker>
        </div>
      </div>
    </section>
  );
}
