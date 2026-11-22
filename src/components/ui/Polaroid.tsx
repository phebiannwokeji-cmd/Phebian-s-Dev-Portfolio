"use client";

import { useState } from "react";

type Art = "bars" | "dots" | "line" | "grid";

function ArtSvg({ art }: { art: Art }) {
  const common = { viewBox: "0 0 200 140", className: "h-full w-full", "aria-hidden": true } as const;
  if (art === "bars")
    return (
      <svg {...common}>
        {[40, 70, 55, 95, 30, 110].map((h, i) => (
          <rect key={i} x={14 + i * 30} y={130 - h} width="20" height={h} fill={i === 4 ? "#e3202a" : "#f4f2ec"} />
        ))}
      </svg>
    );
  if (art === "dots")
    return (
      <svg {...common}>
        {Array.from({ length: 40 }, (_, i) => {
          const x = 20 + ((i * 37) % 170);
          const y = 18 + ((i * 53) % 105);
          const hot = i % 9 === 0;
          return <circle key={i} cx={x} cy={y} r={hot ? 9 : 4} fill={hot ? "#e3202a" : "#f4f2ec"} opacity={hot ? 1 : 0.7} />;
        })}
      </svg>
    );
  if (art === "line")
    return (
      <svg {...common}>
        <polyline points="10,110 45,90 80,98 115,60 150,70 190,28" fill="none" stroke="#f4f2ec" strokeWidth="4" strokeLinejoin="round" />
        <circle cx="190" cy="28" r="7" fill="#e3202a" />
        <line x1="10" y1="128" x2="190" y2="128" stroke="#f4f2ec" strokeOpacity=".35" />
      </svg>
    );
  return (
    <svg {...common}>
      {Array.from({ length: 24 }, (_, i) => (
        <rect
          key={i}
          x={14 + (i % 6) * 30}
          y={14 + Math.floor(i / 6) * 30}
          width="24"
          height="24"
          fill={i === 10 ? "#e3202a" : "none"}
          stroke="#f4f2ec"
          strokeWidth="2"
        />
      ))}
    </svg>
  );
}

type Props = {
  tag: string;
  title: string;
  meta: string;
  back: string;
  art: Art;
  stamp: string;
  rotate: number;
};

export default function Polaroid({ tag, title, meta, back, art, stamp, rotate }: Props) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div style={{ transform: `rotate(${rotate}deg)` }} className="relative mx-auto w-[min(17rem,78vw)] transition-transform hover:rotate-0">
      <span className="absolute -top-3 left-1/2 z-20 h-5 w-5 -translate-x-1/2 rounded-full border-2 border-ink bg-red shadow-[2px_3px_0_rgba(0,0,0,.5)]" aria-hidden="true" />
      <button
        type="button"
        aria-pressed={flipped}
        aria-label={`${title}. ${flipped ? "Showing details, press to flip back" : "Press to flip and read details"}`}
        onClick={() => setFlipped((v) => !v)}
        className="flip block w-full cursor-pointer text-left"
        data-flipped={flipped}
      >
        <span className="flip-inner block">
          <span className="flip-face block bg-card p-3 pb-4 shadow-[0_18px_30px_-14px_rgba(0,0,0,.8)]">
            <span className="relative block aspect-[10/7] overflow-hidden bg-[#141414]">
              <ArtSvg art={art} />
              <span className="mono-label absolute top-3 right-2 rotate-[8deg] border-2 border-red px-2 py-0.5 text-[.62rem]! font-bold text-red">
                {stamp}
              </span>
            </span>
            <span className="mt-3 flex items-end justify-between gap-2">
              <span className="hand text-[1.9rem] leading-none text-ink">{title}</span>
              <span className="mono-label text-[.56rem]! text-ink/60">{tag}</span>
            </span>
          </span>
          <span className="flip-face flip-back flex flex-col justify-between bg-card p-4 text-ink shadow-[0_18px_30px_-14px_rgba(0,0,0,.8)]">
            <span>
              <span className="mono-label block text-red">{tag}</span>
              <span className="hand mt-2 block text-[1.8rem]">{title}</span>
              <span className="mt-3 block text-[.92rem] leading-snug">{back}</span>
            </span>
            <span className="mono-label text-[.58rem]! text-ink/60">{meta}</span>
          </span>
        </span>
      </button>
    </div>
  );
}
