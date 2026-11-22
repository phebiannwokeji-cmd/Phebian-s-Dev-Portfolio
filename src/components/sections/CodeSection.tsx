import Pill from "@/components/ui/Pill";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import Tear from "@/components/ui/Tear";
import { ArrowUpRight } from "@/components/ui/Icons";
import { profile } from "@/data/content";
import { getGithubData } from "@/lib/github";

function levelClass(count: number, max: number) {
  if (count === 0) return "bg-[#1d1d1d]";
  const r = count / max;
  if (r > 0.66) return "bg-red";
  if (r > 0.33) return "bg-red/70";
  return "bg-red/40";
}

export default async function CodeSection() {
  const gh = await getGithubData();
  const weeks = gh.calendar ? gh.calendar.slice(-30) : null;
  const max = weeks ? Math.max(1, ...weeks.flat().map((d) => d.count)) : 1;

  const stats: { value: string; label: string }[] = [];
  if (gh.totalContributions != null) stats.push({ value: gh.totalContributions.toLocaleString(), label: "contributions this year" });
  if (gh.bestStreak != null) stats.push({ value: String(gh.bestStreak), label: "day best streak" });
  if (gh.publicRepos != null) stats.push({ value: String(gh.publicRepos), label: "public repos" });
  if (stats.length < 3 && gh.languages != null) stats.push({ value: String(gh.languages), label: "languages used" });

  return (
    <section id="code" className="paper relative pt-24 pb-24">
      <Tear color="var(--paper)" paper alt />
      <div className="wrap">
        <SectionLabel index="04" name="Code" note={gh.live ? "Synced from GitHub" : "On GitHub"} />
        <Reveal>
          <h2 className="display mt-8 text-[clamp(3rem,13vw,8rem)]">
            Read the
            <br />
            code
          </h2>
          <p className="hand mt-3 text-[1.5rem] text-red">(it&apos;s public)</p>
        </Reveal>

        {stats.length > 0 && (
          <dl className="mt-10 grid max-w-[40rem] grid-cols-3 gap-4">
            {stats.slice(0, 3).map((s) => (
              <div key={s.label}>
                <dt className="display text-[clamp(1.6rem,6vw,2.6rem)]">{s.value}</dt>
                <dd className="mono-label mt-1 text-[.58rem]! text-ink/65">{s.label}</dd>
              </div>
            ))}
          </dl>
        )}

        {weeks && (
          <Reveal className="mt-10">
            <div className="max-w-[44rem] rounded-3xl bg-ink p-5 text-paper-light shadow-[8px_8px_0_var(--red)]">
              <p className="mono-label flex items-center gap-2 text-[.62rem]!">
                <span className="animate-pulse-ring h-2 w-2 rounded-full bg-red" />
                Last 30 weeks
              </p>
              <div className="no-scrollbar mt-4 overflow-x-auto">
                <div className="flex w-max gap-[3px]">
                  {weeks.map((w, wi) => (
                    <div key={wi} className="flex flex-col gap-[3px]">
                      {w.map((d) => (
                        <span key={d.date} title={`${d.count} on ${d.date}`} className={`h-3 w-3 rounded-[2px] ${levelClass(d.count, max)}`} />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        )}

        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {gh.repos.map((r, i) => (
            <li key={r.name}>
              <Reveal delay={(i % 2) * 0.08}>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hard-card group block p-5 transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_var(--red)]"
                >
                  <p className="mono-label text-[.62rem]! text-red">{r.language ?? "Code"}</p>
                  <p className="mt-1 flex items-center justify-between gap-3 text-[1.2rem] font-extrabold">
                    {r.name}
                    <ArrowUpRight className="h-4 w-4 shrink-0" />
                  </p>
                  <p className="mt-1 text-[.95rem] text-ink/70">{r.description ?? "No description. The code speaks for itself."}</p>
                  <p className="mono-label mt-3 text-[.6rem]! text-ink/55">
                    ★ {r.stars} · ⑂ {r.forks}
                  </p>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <Pill href={profile.github} variant="black">
            GitHub profile <ArrowUpRight className="h-3.5 w-3.5" />
          </Pill>
        </div>
      </div>
    </section>
  );
}
