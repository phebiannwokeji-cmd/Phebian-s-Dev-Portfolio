import { siGithub } from "simple-icons";

export function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d={siGithub.path} />
    </svg>
  );
}

export function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <circle cx="6.6" cy="6.8" r="1.9" />
      <rect x="4.9" y="9.8" width="3.4" height="9.4" />
      <path d="M10.4 9.8h3.2v1.3c.5-.9 1.6-1.6 3.1-1.6 3 0 3.8 1.9 3.8 4.6v5.1h-3.4v-4.5c0-1.2-.2-2.2-1.5-2.2-1.4 0-1.8 1-1.8 2.3v4.4h-3.4z" />
    </svg>
  );
}

export function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12L12 4M5.5 4H12v6.5" />
    </svg>
  );
}

export function ArrowDown({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 3v10M3.5 8.5L8 13l4.5-4.5" />
    </svg>
  );
}
