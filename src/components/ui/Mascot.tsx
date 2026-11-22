const INK = "#0a0a0a";
const RED = "#e3202a";
const CARD = "#faf8f3";

/** Original robot mascot. Swap for your own artwork whenever you like. */
export function MascotFace({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" role="presentation">
      <line x1="50" y1="15" x2="50" y2="5" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <circle cx="50" cy="5" r="4.5" fill={RED} stroke={INK} strokeWidth="2.5" />
      <rect x="4" y="42" width="11" height="24" rx="5" fill={RED} stroke={INK} strokeWidth="3.5" />
      <rect x="85" y="42" width="11" height="24" rx="5" fill={RED} stroke={INK} strokeWidth="3.5" />
      <rect x="12" y="16" width="76" height="70" rx="24" fill={CARD} stroke={INK} strokeWidth="4" />
      <rect x="23" y="34" width="54" height="28" rx="14" fill={INK} />
      <circle cx="39" cy="48" r="6.5" fill={RED} />
      <circle cx="61" cy="48" r="6.5" fill={RED} />
      <circle cx="37" cy="46" r="2" fill="#fff" />
      <circle cx="59" cy="46" r="2" fill="#fff" />
      <circle cx="24" cy="70" r="5" fill={RED} opacity="0.35" />
      <circle cx="76" cy="70" r="5" fill={RED} opacity="0.35" />
      <path d="M40 72q10 8 20 0" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function MascotFigure({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 240" className={className} aria-hidden="true" role="presentation">
      {/* hoodie */}
      <path d="M24 240c0-70 28-142 76-142s76 72 76 142z" fill={INK} />
      <path d="M100 128v112" stroke={RED} strokeWidth="5" />
      <circle cx="88" cy="168" r="3.5" fill={CARD} />
      <circle cx="112" cy="168" r="3.5" fill={CARD} />
      {/* laptop */}
      <rect x="62" y="196" width="76" height="44" rx="6" fill={CARD} stroke={INK} strokeWidth="4" />
      <path d="M92 214h16" stroke={RED} strokeWidth="5" strokeLinecap="round" />
      {/* head */}
      <g transform="translate(40 4) scale(1.2)">
        <line x1="50" y1="15" x2="50" y2="5" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <circle cx="50" cy="5" r="4.5" fill={RED} stroke={INK} strokeWidth="2.5" />
        <rect x="4" y="42" width="11" height="24" rx="5" fill={RED} stroke={INK} strokeWidth="3.5" />
        <rect x="85" y="42" width="11" height="24" rx="5" fill={RED} stroke={INK} strokeWidth="3.5" />
        <rect x="12" y="16" width="76" height="70" rx="24" fill={CARD} stroke={INK} strokeWidth="4" />
        <rect x="23" y="34" width="54" height="28" rx="14" fill={INK} />
        <circle cx="39" cy="48" r="6.5" fill={RED} />
        <circle cx="61" cy="48" r="6.5" fill={RED} />
        <circle cx="37" cy="46" r="2" fill="#fff" />
        <circle cx="59" cy="46" r="2" fill="#fff" />
        <circle cx="24" cy="70" r="5" fill={RED} opacity="0.35" />
        <circle cx="76" cy="70" r="5" fill={RED} opacity="0.35" />
        <path d="M40 72q10 8 20 0" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      </g>
    </svg>
  );
}
