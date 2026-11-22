import type { ReactNode } from "react";
import { BURST } from "@/lib/tear";

type Props = {
  children: ReactNode;
  shape?: "burst" | "stamp" | "badge";
  tone?: "red" | "paper" | "ink";
  rotate?: number;
  className?: string;
};

const tones = {
  red: "bg-red text-white",
  paper: "bg-card text-ink",
  ink: "bg-ink text-paper-light",
};

export default function Sticker({ children, shape = "stamp", tone = "red", rotate = -8, className = "" }: Props) {
  const base = `${tones[tone]} font-black uppercase text-center leading-[1.02]`;
  const style = { transform: `rotate(${rotate}deg)` };
  if (shape === "burst") {
    return (
      <div
        className={`${base} flex h-28 w-28 items-center justify-center p-5 text-[.7rem] font-[800] ${className}`}
        style={{ ...style, clipPath: BURST }}
      >
        <span className="display text-[.72rem]! leading-none">{children}</span>
      </div>
    );
  }
  if (shape === "badge") {
    return (
      <div
        className={`${base} flex h-24 w-24 items-center justify-center rounded-full border-2 border-dashed border-current p-3 shadow-[3px_3px_0_var(--ink)] ${className}`}
        style={style}
      >
        <span className="mono-label text-[.62rem]! font-semibold">{children}</span>
      </div>
    );
  }
  return (
    <div
      className={`${base} inline-block border-2 border-ink px-3 py-2 shadow-[3px_3px_0_var(--ink)] ${className}`}
      style={style}
    >
      <span className="mono-label text-[.68rem]! font-semibold">{children}</span>
    </div>
  );
}
