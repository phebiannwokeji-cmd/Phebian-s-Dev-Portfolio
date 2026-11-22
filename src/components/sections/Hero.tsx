import Pill from "@/components/ui/Pill";
import { ArrowDown, ArrowUpRight } from "@/components/ui/Icons";
import { MascotFace } from "@/components/ui/Mascot";
import { profile } from "@/data/content";
import Reveal from "@/components/ui/Reveal";

function TradingCard({
  no,
  title,
  tone,
  x,
  y,
  r,
  z,
  delay,
  children,
}: {
  no: string;
  title: string;
  tone: "paper" | "ink" | "red";
  x: string;
  y: string;
  r: number;
  z: number;
  delay: string;
  children: React.ReactNode;
}) {
  const tones = {
    paper: "bg-card text-ink",
    ink: "bg-ink text-paper-light",
    red: "bg-red text-white",
  };
  return (
    <div
      className="absolute top-0 left-1/2"
      style={{ transform: `translateX(calc(-50% + ${x})) translateY(${y}) rotate(${r}deg)`, zIndex: z }}
    >
      <div
        className={`animate-float h-[14.5rem] w-[10.5rem] rounded-2xl border-2 border-ink p-3 shadow-[5px_5px_0_var(--ink)] md:h-[17rem] md:w-[12.5rem] ${tones[tone]}`}
        style={{ "--delay": delay, "--dur": "6s" } as React.CSSProperties}
      >
        <p className="mono-label flex justify-between text-[.58rem] opacity-80">
          <span>NO. {no}</span>
          <span>{title}</span>
        </p>
        <div className="mt-2 h-[calc(100%-1.4rem)]">{children}</div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="paper relative overflow-hidden pt-24 pb-6 md:pt-28">
      <div className="wrap relative">
        <h1 className="sr-only">
          {profile.name}, {profile.title.toLowerCase()}
        </h1>

        <div className="flex items-start justify-between" aria-hidden="true">
          <p className="display text-[clamp(1.1rem,4.2vw,2rem)] leading-[.95]">
            Welcome
            <br />
            to my
          </p>
          <div className="text-right">
            <p className="mono-label text-ink/70">Agentic dev / builder</p>
            <p className="display text-[clamp(1.5rem,5vw,2.5rem)]">2026</p>
          </div>
        </div>

        <div className="relative mt-3 md:mt-6" aria-hidden="true">
          <span className="absolute top-[-2%] bottom-[3%] left-[13%] w-[17%] bg-red md:left-[15%]" />
          <p className="display relative text-[clamp(4rem,22.4vw,18.5rem)] leading-[.78]">
            <span className="block">Port</span>
            <span className="block">
              F
              <span className="relative inline-block">
                O
                <MascotFace className="absolute top-1/2 left-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-[46%]" />
              </span>
              LIO
            </span>
          </p>
          <p className="hand absolute right-0 bottom-[-1.5rem] flex items-end gap-1 text-[clamp(1.1rem,3.4vw,1.7rem)] text-ink md:right-[6%]">
            <svg viewBox="0 0 40 30" className="h-7 w-9 -rotate-6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M36 26C26 24 14 18 8 6M8 6l-1 9M8 6l9 2" />
            </svg>
            that&apos;s my agent :)
          </p>
        </div>

        <div className="mt-14 text-center">
          <p className="serif-italic mx-auto max-w-[34rem] text-[clamp(1.35rem,4.4vw,2rem)] leading-[1.2] not-italic">
            <span className="not-italic">{profile.title}, </span>
            {profile.tagline}{" "}
            <em className="serif-italic text-red">{profile.taglineAccent}</em>.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <Pill href="#work" variant="red">
              See the work <ArrowDown className="h-3.5 w-3.5" />
            </Pill>
            <Pill href={`mailto:${profile.email}`} variant="white">
              Say hi <ArrowUpRight className="h-3.5 w-3.5" />
            </Pill>
          </div>
        </div>

        <Reveal className="relative mt-14">
          {/* rotating ring */}
          <svg
            viewBox="0 0 400 400"
            className="animate-spin-slow pointer-events-none absolute top-[2rem] left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 text-ink/70 md:h-[34rem] md:w-[34rem]"
            aria-hidden="true"
          >
            <defs>
              <path id="ring" d="M200 200m-170 0a170 170 0 1 1 340 0a170 170 0 1 1 -340 0" />
            </defs>
            <circle cx="200" cy="200" r="186" fill="none" stroke="currentColor" strokeDasharray="3 7" />
            <text fill="currentColor" fontFamily="var(--font-mono)" fontSize="15" letterSpacing="6">
              <textPath href="#ring">WRITE · DIRECT · REVIEW · SHIP · WRITE · DIRECT · REVIEW · SHIP ·</textPath>
            </text>
          </svg>

          <div className="relative mx-auto h-[19rem] max-w-[46rem] md:h-[22rem]" aria-hidden="true">
            <TradingCard no="01" title="HEADCOUNT" tone="paper" x="-9.5rem" y="3rem" r={-14} z={1} delay="0s">
              <div className="flex h-full flex-col justify-between">
                <div className="grid grid-cols-6 gap-1 pt-2">
                  {Array.from({ length: 18 }, (_, i) => (
                    <span key={i} className={`aspect-square rounded-[2px] border-2 ${i === 17 ? "border-red bg-red" : "border-ink bg-ink"}`} />
                  ))}
                </div>
                <p className="display text-[1.35rem]">Admit one</p>
              </div>
            </TradingCard>
            <TradingCard no="02" title="SHOPACT" tone="ink" x="9.5rem" y="2rem" r={12} z={2} delay="1.2s">
              <div className="flex h-full flex-col items-end justify-center gap-1.5">
                {["/sold", "/bought", "/owa", "/paid"].map((c) => (
                  <span key={c} className="rounded-2xl rounded-br-sm bg-paper-light px-3 py-1 font-mono text-[.8rem] text-ink">
                    {c}
                  </span>
                ))}
              </div>
            </TradingCard>
            <TradingCard no="03" title="AGENT" tone="red" x="0rem" y="0rem" r={-2} z={3} delay="0.6s">
              <div className="grid h-full place-items-center">
                <MascotFace className="h-28 w-28 md:h-32 md:w-32" />
              </div>
            </TradingCard>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
