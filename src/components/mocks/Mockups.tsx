/** CSS-drawn illustrations. Replace with real screenshots by editing ProjectShowcase. */

export function BrowserMock({ url }: { url: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-paper-light/25 bg-card text-ink shadow-[0_30px_60px_-30px_rgba(227,32,42,.55)]">
      <div className="flex items-center gap-2 border-b border-ink/15 bg-paper px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="mx-auto rounded bg-card px-4 py-0.5 font-mono text-[.62rem] text-ink/60">{url}</span>
      </div>
      <div className="grid gap-4 p-4 sm:grid-cols-[1.1fr_1fr]">
        <div className="space-y-3">
          <p className="display text-[1.4rem] leading-none">RSVP</p>
          <div className="h-7 rounded border-2 border-ink/80 bg-card" />
          <div className="h-7 rounded border-2 border-ink/80 bg-card" />
          <div className="h-7 w-2/3 rounded border-2 border-ink/80 bg-card" />
          <div className="h-8 w-28 rounded-full border-2 border-ink bg-red shadow-[3px_3px_0_var(--ink)]" />
        </div>
        <div className="rounded-lg bg-ink p-3 text-paper-light">
          <p className="mono-label text-[.55rem]! opacity-70">Capacity</p>
          <div className="mt-2 grid grid-cols-6 gap-1">
            {Array.from({ length: 24 }, (_, i) => (
              <span key={i} className={`aspect-square rounded-[2px] ${i < 17 ? "bg-paper-light" : i === 17 ? "bg-red" : "border border-paper-light/40"}`} />
            ))}
          </div>
          <div className="mt-3 space-y-1.5">
            {[70, 55, 40].map((w) => (
              <div key={w} className="h-1.5 rounded bg-paper-light/25" style={{ width: `${w}%` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function PhoneMock() {
  return (
    <div className="mx-auto w-[15.5rem] rounded-[2rem] border-[3px] border-paper-light/80 bg-ink p-2 shadow-[0_30px_60px_-30px_rgba(227,32,42,.55)]">
      <div className="overflow-hidden rounded-[1.5rem] bg-card text-ink">
        <div className="flex items-center gap-2 bg-ink px-4 py-3 text-paper-light">
          <span className="h-6 w-6 rounded-full bg-red" />
          <span className="mono-label text-[.6rem]!">Shop chat</span>
        </div>
        <div className="flex min-h-[15rem] flex-col items-end justify-center gap-2 bg-paper p-4">
          {["/sold", "/bought", "/owa", "/paid"].map((c) => (
            <span key={c} className="rounded-2xl rounded-br-sm border-2 border-ink bg-card px-3 py-1.5 font-mono text-[.85rem] shadow-[2px_2px_0_var(--ink)]">
              {c}
            </span>
          ))}
          <span className="mt-1 flex gap-1 self-start rounded-2xl rounded-bl-sm bg-ink px-3 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-paper-light/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-paper-light/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-paper-light/70" />
          </span>
        </div>
      </div>
    </div>
  );
}

export function TokensMock() {
  return (
    <div className="overflow-hidden rounded-xl border border-paper-light/25 bg-[#0b1020] p-4 text-paper-light shadow-[0_30px_60px_-30px_rgba(227,32,42,.55)]">
      <p className="mono-label text-[.58rem]! opacity-70">Design tokens</p>
      <div className="mt-3 grid grid-cols-8 gap-1.5">
        {Array.from({ length: 24 }, (_, i) => {
          const t = i / 23;
          return (
            <span
              key={i}
              className="aspect-square rounded-[3px]"
              style={{ background: `hsl(${Math.round(225 - t * 185)} 80% ${Math.round(22 + t * 48)}%)` }}
            />
          );
        })}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3 border-t border-paper-light/20 pt-3">
        {[
          ["120", "primitives"],
          ["100", "roles"],
          ["15", "type styles"],
        ].map(([v, l]) => (
          <div key={l}>
            <p className="display text-[1.5rem] text-[#ffc440]">{v}</p>
            <p className="mono-label text-[.52rem]! opacity-70">{l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
