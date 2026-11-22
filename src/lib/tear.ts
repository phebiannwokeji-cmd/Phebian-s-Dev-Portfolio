/** Deterministic torn-paper edges, identical on server and client. */
function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function build(seed: number, amp = 15, steps = 80) {
  const rand = mulberry32(seed);
  const front: string[] = [];
  const back: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const x = ((i / steps) * 100).toFixed(2);
    const y = Math.round(4 + rand() * amp);
    front.push(`${x}% ${y}px`);
    back.push(`${x}% ${Math.max(0, y - 5)}px`);
  }
  const close = ["100% 100%", "0% 100%"];
  return {
    front: `polygon(${[...front, ...close].join(",")})`,
    back: `polygon(${[...back, ...close].join(",")})`,
  };
}

export const TEAR = build(11);
export const TEAR_ALT = build(37);

/** 16-point starburst polygon (percent coordinates). */
export const BURST = (() => {
  const pts: string[] = [];
  const n = 16;
  for (let i = 0; i < n * 2; i++) {
    const r = i % 2 === 0 ? 50 : 40;
    const a = (Math.PI * i) / n - Math.PI / 2;
    pts.push(`${(50 + r * Math.cos(a)).toFixed(2)}% ${(50 + r * Math.sin(a)).toFixed(2)}%`);
  }
  return `polygon(${pts.join(",")})`;
})();
