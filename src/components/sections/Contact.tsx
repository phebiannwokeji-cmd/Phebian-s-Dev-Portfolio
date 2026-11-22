"use client";

import { useState } from "react";
import { MascotFace } from "@/components/ui/Mascot";
import Tear from "@/components/ui/Tear";
import LagosClock from "@/components/ui/LagosClock";
import Reveal from "@/components/ui/Reveal";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { profile } from "@/data/content";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <footer id="contact" className="on-dark relative overflow-x-clip bg-ink pt-24 pb-10 text-paper-light">
      <Tear color="var(--ink)" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(227,32,42,.28),transparent)]" aria-hidden="true" />
      <div className="wrap relative">
        <Reveal>
          <h2 className="display text-[clamp(2.3rem,10.4vw,8.5rem)]">
            Let&apos;s build
            <br />
            something
            <br />
            that <span className="text-red">ships.</span>
          </h2>
          <p className="serif-italic mt-3 text-[1.5rem] text-paper-light/75">(reviewed by a human, promise.)</p>
        </Reveal>

        <div className="relative mt-4 flex justify-end pr-2">
          <div className="relative">
            <p className="hand absolute -top-4 right-24 w-[13rem] -rotate-3 rounded-2xl border-2 border-ink bg-card p-3 text-[1.25rem] text-ink shadow-[3px_3px_0_var(--red)] md:right-28">
              got a problem worth solving? say hi 👋
            </p>
            <MascotFace className="animate-float h-24 w-24 md:h-28 md:w-28" />
          </div>
        </div>

        <div className="mt-8 border-t border-paper-light/15 pt-8">
          <p className="mono-label text-paper-light/60">Drop a line</p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-3 block text-[clamp(1.25rem,6.2vw,2.6rem)] font-extrabold tracking-tight [overflow-wrap:anywhere] hover:text-red"
          >
            {profile.email}
          </a>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <button type="button" onClick={copy} className="pill pill-outline">
              {copied ? "Copied" : "Copy email"}
            </button>
            <span role="status" aria-live="polite" className="mono-label text-[.62rem]! text-red">
              {copied ? "Email copied to clipboard" : ""}
            </span>
          </div>
          <ul className="mt-6 flex gap-3">
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid h-12 w-12 place-items-center rounded-full border border-paper-light/40 transition hover:border-red hover:text-red"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-12 w-12 place-items-center rounded-full border border-paper-light/40 transition hover:border-red hover:text-red"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-16 border-t border-paper-light/15 pt-10 text-center">
          <p className="hand relative inline-block text-[clamp(3.2rem,16vw,7rem)] leading-none -rotate-3">
            Phebian <span className="text-red">Nwokeji</span>
            <svg viewBox="0 0 40 24" className="absolute -top-5 right-2 h-7 w-10 fill-red" aria-hidden="true">
              <path d="M2 22L5 6l9 8 6-12 6 12 9-8 3 16z" />
            </svg>
          </p>
          <p className="mono-label mt-8 text-[.6rem]! text-paper-light/50">
            {profile.location} / <LagosClock timeZone={profile.timeZone} /> / Set in Archivo, Instrument Serif, Caveat and Fira Code
          </p>
        </div>
      </div>
    </footer>
  );
}
