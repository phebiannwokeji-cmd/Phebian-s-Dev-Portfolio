"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type Props = { children: ReactNode; delay?: number; y?: number; className?: string };

/** Fades content up once when it scrolls into view. */
export default function Reveal({ children, delay = 0, y = 28, className }: Props) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
