import { TEAR, TEAR_ALT } from "@/lib/tear";

type Props = { color: string; paper?: boolean; alt?: boolean };

/** Torn-paper edge that sits on top of a section and overlaps the one above it. */
export default function Tear({ color, paper = false, alt = false }: Props) {
  const shape = alt ? TEAR_ALT : TEAR;
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-6 z-10 h-6">
      <div className="absolute inset-0" style={{ background: "#f4f2ec", clipPath: shape.back }} />
      <div
        className={`absolute inset-0 ${paper ? "paper" : ""}`}
        style={{ background: paper ? undefined : color, clipPath: shape.front }}
      />
    </div>
  );
}
