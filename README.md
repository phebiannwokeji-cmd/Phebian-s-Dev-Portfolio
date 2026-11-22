# Phebian Nwokeji | Portfolio

Neo-brutalist scrapbook portfolio built with Next.js (App Router), TypeScript, Tailwind CSS v4 and Motion. Fonts are self-hosted through Fontsource (Archivo, Instrument Serif, Caveat, Fira Code), so the site makes no calls to Google Fonts.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run typecheck  # TypeScript check
```

## Deploy to Vercel

1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. In Vercel, choose **Add New > Project**, import the repository and click **Deploy**. Vercel detects Next.js automatically.

Every push to `main` redeploys the site.

### Optional: live GitHub contribution heatmap

The "Read the code" section always shows your public repositories (fetched from GitHub's public API and refreshed hourly). To also show the contribution heatmap and stats:

1. Create a GitHub personal access token (no scopes needed for public data).
2. In Vercel, add it under **Settings > Environment Variables** as `GITHUB_TOKEN`. For local development, copy `.env.example` to `.env.local` and fill it in.

If the GitHub API can't be reached, the section falls back to the repositories listed in `src/data/content.ts`.

## Project structure

```
src/
  app/
    layout.tsx           Metadata, font imports
    page.tsx             Page composition
    globals.css          Design tokens, Tailwind theme, component styles, keyframes
    icon.svg             Favicon
  components/
    sections/            TopBar (menu), Hero, MarqueeBand, About, Desk, Work,
                         Archive, Toolkit, CodeSection, Credentials, Journey, Contact
    mocks/Mockups.tsx    CSS-drawn browser, phone and design-token illustrations
    ui/                  Mascot, Pill, Reveal, Parallax, Tear, Sticker, Polaroid, ...
  data/content.ts        All text, links and numbers: edit content here
  lib/
    github.ts            GitHub data fetching (with fallback)
    tear.ts              Torn-paper and starburst shapes
```

## Customising

- **Content:** almost everything on the page lives in `src/data/content.ts`.
- **Colours:** the CSS variables at the top of `src/app/globals.css` (paper, ink, red, card).
- **Mascot and stickers:** the robot in `src/components/ui/Mascot.tsx` is original placeholder artwork. Swap it for your own illustration whenever you like.
- **Project visuals:** `src/components/mocks/Mockups.tsx` draws illustrative mockups in CSS. To use real screenshots, put images in `public/` and replace the `Visual` component in `src/components/sections/Work.tsx` with `next/image`.

## Notes

- Animations (scroll reveals, floating cards, parallax, polaroid flip, marquee) respect `prefers-reduced-motion`.
- Content stays visible if JavaScript is disabled.
- The page is designed mobile-first at 390px and scales up to wide desktop screens.
