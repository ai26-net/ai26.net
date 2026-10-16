# AI26 website

Static marketing site for licensing historical business data to AI research labs.

## Stack

- Astro 7 with its bundled Vite 8
- Tailwind CSS 4 via @tailwindcss/vite
- Self-hosted Open Runde (400–700) and Caveat (600) fonts
- Lucide SVG icons via @lucide/astro and components/Icon.astro
- Bun package manager; Node >=22.22 required by Astro

## Commands

- `bun install --frozen-lockfile`
- `bun run dev`
- `bun run check`
- `bun run build`
- `bun run preview`

## Structure

- `src/pages/index.astro`: landing page and content
- `src/pages/sell-your-data.astro`: embedded Tally seller intake form
- `src/components/`: shared navigation, footer, mark, and illustrative hero UI
- `src/layouts/Base.astro`: HTML and metadata
- `src/styles/global.css`: Tailwind import and responsive design

All hero mockups contain fictional content. Sell your data links lead to the Tally intake form on `/sell-your-data`. Tally manages submissions; see `docs/intake-form.md` for manifest mapping.
