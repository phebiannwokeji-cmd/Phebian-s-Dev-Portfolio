export type LinkItem = { label: string; href: string };

export const profile = {
  name: "Phebian Nwokeji",
  title: "Agentic software developer and AI product engineer",
  tagline: "building products with AI agents, and",
  taglineAccent: "checking their work",
  email: "phebiannwokeji@gmail.com",
  github: "https://github.com/phebiannwokeji-cmd",
  githubUser: "phebiannwokeji-cmd",
  linkedin: "https://www.linkedin.com/in/phebian-nwokeji",
  location: "Lagos, Nigeria",
  timeZone: "Africa/Lagos",
} as const;

export const navLinks: LinkItem[] = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Toolkit", href: "#toolkit" },
  { label: "Code", href: "#code" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  intro: "Hi, I'm Phebian.",
  paragraphs: [
    "Building is how I make sense of problems. I'm an agentic software developer and AI product engineer in Lagos, working across **frontend, backend, data and AI** to ship products that hold up when things go wrong.",
    "Right now I'm adding Flutterwave payments and a RAG assistant to **Kobo Watt**, and shipping apps like **HeadCount** and **Shopact**. Before software, I spent two years as a data analyst and admin manager at an NGO in Sagamu, and the habit of asking what the numbers actually say came with me.",
  ],
  education: {
    degree: "Higher National Diploma, Estate Management",
    school: "Lagos State Polytechnic, Ikorodu",
  },
  skills: [
    { label: "TypeScript", glyph: "TS", color: "#3b82f6" },
    { label: "Next.js", glyph: "N", color: "#e8e5de" },
    { label: "Python", glyph: "Py", color: "#facc15" },
    { label: "PostgreSQL", glyph: "Pg", color: "#60a5fa" },
    { label: "Supabase", glyph: "Sb", color: "#34d399" },
    { label: "Prisma", glyph: "Pr", color: "#a78bfa" },
    { label: "Antigravity", glyph: "AG", color: "#fb7185" },
    { label: "Figma", glyph: "Fg", color: "#c084fc" },
  ],
  experience: [
    {
      when: "NOW",
      title: "Product Engineer, Freelance Developer",
      note: "Apr 2022 to present. Full-stack apps with Next.js, TypeScript and PostgreSQL.",
    },
    {
      when: "2020 to 2022",
      title: "Data Analyst and Admin Manager",
      note: "Olanrewaju Omo George Foundation, Sagamu.",
    },
    {
      when: "2012 to 2018",
      title: "Project Supervisor",
      note: "Skilltex Paints, chemical and allied products.",
    },
  ],
};

export const desk = [
  { tag: "WRITE", tone: "paper", text: "Project rules live in AGENTS.md and agent skills, so every agent starts from the same context." },
  { tag: "DIRECT", tone: "red", text: "Antigravity is home base, with Codex, Claude agents and DeepSeek on scaffolding and debugging." },
  { tag: "REVIEW", tone: "ink", text: "I read the output, push product rules into the database, and document known limits." },
  { tag: "PAYMENTS", tone: "ink", text: "Adding Flutterwave to Kobo Watt." },
  { tag: "RAG", tone: "paper", text: "A retrieval assistant on the Gemini API. In progress." },
  { tag: "TOKENS", tone: "red", text: "Figma variables to CSS tokens with a Python pipeline." },
] as const;

export type Project = {
  index: string;
  kind: string;
  status?: string;
  name: string;
  subtitle: string;
  description: string;
  points: string[];
  stats: { value: string; label: string }[];
  stack: string[];
  cta: LinkItem;
  secondary?: LinkItem;
  caption: string;
  sticker: string;
  mock: "browser" | "phone" | "tokens";
};

export const projects: Project[] = [
  {
    index: "001",
    kind: "WEB / EVENTS",
    status: "LIVE APP",
    name: "HeadCount",
    subtitle: "RSVPs and check-in from one shared link",
    description:
      "An event RSVP and check-in app. Hosts share one link, guests respond without signing up, and hosts manage arrivals on the day.",
    points: [
      "One PostgreSQL function serializes requests per event, so two guests can't take the last seat",
      "Row Level Security: hosts see only their own events and guests",
      "Host dashboard with search and check-in, email sign-up (PKCE), five versioned migrations",
      "Built agent-first in Antigravity with an AGENTS.md file and agent skills",
    ],
    stats: [
      { value: "1", label: "shared link" },
      { value: "0", label: "guest accounts" },
      { value: "5", label: "migrations" },
    ],
    stack: ["Next.js", "TypeScript", "React", "Supabase", "PostgreSQL", "Vercel"],
    cta: { label: "Visit live app", href: "https://head-count-snowy.vercel.app/" },
    secondary: { label: "Source", href: "https://github.com/phebiannwokeji-cmd/HeadCount" },
    caption: "from problem statement to working product",
    sticker: "Full means full",
    mock: "browser",
  },
  {
    index: "002",
    kind: "WEB / WHATSAPP",
    name: "Shopact",
    subtitle: "WhatsApp record-keeping for small shops",
    description:
      "Record-keeping for Nigerian micro-retail shops. Staff log sales, purchases, expenses and customer credit in WhatsApp, an app they already use.",
    points: [
      "Seven fixed commands, including /sold, /bought, /owa and /paid",
      "Owner dashboard flags debts older than seven days, low stock and large expenses",
      "Money stored as integer kobo, webhooks verified with HMAC signatures",
      "Inactivity guard pauses recording after three months and keeps records intact",
    ],
    stats: [
      { value: "7", label: "commands" },
      { value: "6", label: "business categories" },
      { value: "7d", label: "debt flag" },
    ],
    stack: ["Next.js 14", "TypeScript", "Prisma", "PostgreSQL", "WhatsApp Cloud API"],
    cta: { label: "View source", href: "https://github.com/phebiannwokeji-cmd/Shopact" },
    caption: "from problem statement to working product",
    sticker: "/owa",
    mock: "phone",
  },
  {
    index: "003",
    kind: "WEB / DESIGN SYSTEM",
    status: "IN PROGRESS",
    name: "Kobo Watt",
    subtitle: "Solar rent-to-own, from design system to security",
    description:
      "A five-stage build for a fictional rent-to-own solar service in Lagos. Now adding Flutterwave payments and a RAG assistant on the Gemini API.",
    points: [
      "Python pipeline turns a Figma variables export into CSS custom properties",
      "Mobile-first prototype with a labelled help route for \"Access active, but no power\"",
      "Express and SQLite enquiry service with server-side validation and tested failure handling",
      "Known defects and limits documented for each stage instead of overstating results",
    ],
    stats: [
      { value: "120", label: "primitive colours" },
      { value: "56", label: "contrast pairs checked" },
      { value: "15", label: "type styles" },
    ],
    stack: ["Figma", "Python", "Node.js", "Express", "SQLite", "Antigravity"],
    cta: { label: "View source", href: "https://github.com/phebiannwokeji-cmd/kobo-watt" },
    caption: "from problem statement to working product",
    sticker: "56 pairs checked",
    mock: "tokens",
  },
];

export const archive = [
  {
    tag: "001 / DATA",
    title: "Donation analysis",
    meta: "NGO, freelance",
    back: "Analyzed donation data and identified the root cause of low funding for an NGO, giving leadership a clear basis for action.",
    art: "bars",
    stamp: "ROOT CAUSE",
  },
  {
    tag: "002 / DATA",
    title: "Beneficiary map",
    meta: "Foundation, 2020 to 2022",
    back: "Analyzed beneficiary data to show decision makers where in Sagamu the foundation's help was most needed.",
    art: "dots",
    stamp: "WHERE",
  },
  {
    tag: "003 / DATA",
    title: "Impact dashboards",
    meta: "Foundation, 2020 to 2022",
    back: "Produced quarterly dashboards showing growth and impact of the foundation's humanitarian services.",
    art: "line",
    stamp: "QUARTERLY",
  },
  {
    tag: "004 / SYSTEMS",
    title: "Resource system",
    meta: "Foundation, 2020 to 2022",
    back: "Developed and implemented an information management system for allocating and controlling resources efficiently.",
    art: "grid",
    stamp: "SHIPPED",
  },
] as const;

export const toolkit = [
  { name: "Frontend", items: ["Next.js (App Router)", "React", "TypeScript", "HTML", "CSS"] },
  { name: "Backend", items: ["Node.js", "Express", "Supabase", "Prisma"] },
  { name: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL"] },
  { name: "Database", items: ["PostgreSQL", "SQLite", "Row Level Security"] },
  { name: "Agents and AI", items: ["Antigravity", "Codex", "Claude agents", "DeepSeek", "Gemini API", "RAG"] },
  { name: "Integrations", items: ["WhatsApp Cloud API", "Flutterwave"] },
  { name: "Data", items: ["Pandas", "NumPy", "Power BI", "Tableau", "Excel"] },
  { name: "Design", items: ["Figma", "Design tokens", "Accessibility checks"] },
];

export const fallbackRepos = [
  { name: "HeadCount", description: "Event RSVP and guest check-in app.", language: "TypeScript", url: "https://github.com/phebiannwokeji-cmd/HeadCount" },
  { name: "Shopact", description: "WhatsApp record-keeping for Nigerian micro-retail shops.", language: "TypeScript", url: "https://github.com/phebiannwokeji-cmd/Shopact" },
  { name: "kobo-watt", description: "Five-stage design-to-security build for a solar rent-to-own service.", language: "JavaScript", url: "https://github.com/phebiannwokeji-cmd/kobo-watt" },
];

export const credentials = [
  { no: "001", title: "Artificial Intelligence", issuer: "Data Lead Africa", year: "", tone: "ink" },
  { no: "002", title: "Conversational AI Essentials", issuer: "Coven Works", year: "", tone: "paper" },
  { no: "003", title: "Data Analytics II (SQL and Tableau)", issuer: "EntryLevel", year: "2022", tone: "ink" },
  { no: "004", title: "Data Analytics (Excel and Power BI)", issuer: "LinkedIn Learning", year: "2022", tone: "paper" },
] as const;

export const journey = [
  { when: "2012 to 2018", title: "Project Supervisor", text: "Skilltex Paints. Learned to run work on a schedule.", state: "done" },
  { when: "2020 to 2022", title: "Data Analyst and Admin Manager", text: "Dashboards, reports and a resource system for a foundation in Sagamu.", state: "done" },
  { when: "NOW", title: "Product Engineer", text: "Building HeadCount, Shopact and Kobo Watt with AI agents, and documenting where they fall short.", state: "now" },
  { when: "NEXT", title: "Agentic engineering role", text: "Open to agentic software and AI product engineering roles. Got a problem worth solving? Let's talk.", state: "next" },
] as const;
