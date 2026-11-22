import { fallbackRepos, profile } from "@/data/content";

export type Repo = {
  name: string;
  description: string | null;
  language: string | null;
  url: string;
  stars: number;
  forks: number;
};

export type GithubData = {
  live: boolean;
  publicRepos: number | null;
  repos: Repo[];
  languages: number | null;
  calendar: { date: string; count: number }[][] | null;
  totalContributions: number | null;
  bestStreak: number | null;
};

const fallback: GithubData = {
  live: false,
  publicRepos: null,
  repos: fallbackRepos.map((r) => ({ ...r, description: r.description, stars: 0, forks: 0 })),
  languages: null,
  calendar: null,
  totalContributions: null,
  bestStreak: null,
};

type ApiRepo = {
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
};

async function fetchContributions(token: string) {
  const query = `query($login:String!){user(login:$login){contributionsCollection{contributionCalendar{totalContributions weeks{contributionDays{date contributionCount}}}}}}`;
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables: { login: profile.githubUser } }),
    next: { revalidate: 3600 },
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) return null;
  const json = await res.json();
  const cal = json?.data?.user?.contributionsCollection?.contributionCalendar;
  if (!cal) return null;
  const weeks: { date: string; count: number }[][] = cal.weeks.map(
    (w: { contributionDays: { date: string; contributionCount: number }[] }) =>
      w.contributionDays.map((d) => ({ date: d.date, count: d.contributionCount })),
  );
  let best = 0;
  let run = 0;
  for (const day of weeks.flat()) {
    run = day.count > 0 ? run + 1 : 0;
    best = Math.max(best, run);
  }
  return { weeks, total: cal.totalContributions as number, best };
}

/** Public GitHub data. Works without a token; add GITHUB_TOKEN to unlock the contribution heatmap. */
export async function getGithubData(): Promise<GithubData> {
  try {
    const token = process.env.GITHUB_TOKEN;
    const headers: HeadersInit = {
      Accept: "application/vnd.github+json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };
    const opts = { headers, next: { revalidate: 3600 }, signal: AbortSignal.timeout(8000) };
    const [userRes, repoRes] = await Promise.all([
      fetch(`https://api.github.com/users/${profile.githubUser}`, opts),
      fetch(`https://api.github.com/users/${profile.githubUser}/repos?sort=pushed&per_page=30&type=owner`, opts),
    ]);
    if (!userRes.ok || !repoRes.ok) return fallback;

    const user = (await userRes.json()) as { public_repos: number };
    const all = ((await repoRes.json()) as ApiRepo[]).filter((r) => !r.fork);
    if (all.length === 0) return fallback;

    const contrib = token ? await fetchContributions(token) : null;
    return {
      live: true,
      publicRepos: user.public_repos,
      repos: all.slice(0, 4).map((r) => ({
        name: r.name,
        description: r.description,
        language: r.language,
        url: r.html_url,
        stars: r.stargazers_count,
        forks: r.forks_count,
      })),
      languages: new Set(all.map((r) => r.language).filter(Boolean)).size,
      calendar: contrib?.weeks ?? null,
      totalContributions: contrib?.total ?? null,
      bestStreak: contrib?.best ?? null,
    };
  } catch {
    return fallback;
  }
}
