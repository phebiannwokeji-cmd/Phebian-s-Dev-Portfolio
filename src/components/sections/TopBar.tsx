"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import LagosClock from "@/components/ui/LagosClock";
import { navLinks, profile } from "@/data/content";

export default function TopBar() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex items-start justify-between px-3 pt-3 md:px-6 md:pt-5">
        <a
          href="#top"
          className="flex items-center gap-2 rounded-full border-2 border-ink bg-card py-1.5 pr-5 pl-1.5 shadow-[3px_3px_0_var(--ink)]"
          onClick={() => setOpen(false)}
        >
          <span className="relative h-8 w-8 overflow-hidden rounded-full border border-ink/40">
            <Image
              src="/images/phebian.png"
              alt={profile.name}
              fill
              sizes="32px"
              className="object-cover"
              priority
            />
          </span>
          <span className="display text-[.8rem] [font-stretch:110%]">{profile.name}</span>
        </a>
        <button
          type="button"
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="relative grid h-12 w-12 place-items-center rounded-full border-2 border-ink bg-red shadow-[3px_3px_0_var(--ink)] transition active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
        >
          <span className="relative block h-4 w-6" aria-hidden="true">
            <span className={`absolute left-0 h-[3px] w-6 rounded bg-white transition-all ${open ? "top-[7px] rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-[7px] h-[3px] w-6 rounded bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 h-[3px] w-6 rounded bg-white transition-all ${open ? "top-[7px] -rotate-45" : "top-[14px]"}`} />
          </span>
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="site-menu"
            role="dialog"
            aria-label="Site menu"
            className="on-dark fixed inset-0 z-40 flex flex-col justify-between bg-ink px-6 pt-28 pb-8 text-paper-light"
            initial={reduce ? false : { opacity: 0, clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at calc(100% - 2.5rem) 2.5rem)" }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
            transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <nav aria-label="Primary">
              <ul className="space-y-2">
                {navLinks.map((link, i) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="display group flex items-baseline gap-4 text-[clamp(2.6rem,12vw,5.5rem)] transition-colors hover:text-red"
                    >
                      <span className="mono-label text-red">0{i + 1}</span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <p className="mono-label text-paper-light/60">
              {profile.location} / <LagosClock timeZone={profile.timeZone} />
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
