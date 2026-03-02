# CLAUDE.md

## Project Overview

ai26.net is a marketing/portfolio website built with Astro, React, Tailwind CSS, and Bun.

## Tech Stack

- **Framework**: Astro 5.x
- **UI**: React 18 + Tailwind CSS 3
- **Runtime**: Bun
- **TypeScript**: Yes

## Key Commands

```bash
# Start dev server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## Project Structure

```
src/
├── components/    # React components
├── layouts/       # Astro layouts
├── pages/         # Astro pages
├── config.ts      # Site configuration
└── utils/         # Utility functions
```

## Important Notes

- Uses `bun.lockb` for dependency management
- Tailwind is configured via `tailwind.config.mjs`
- Astro config is in `astro.config.mjs`
- Prettier is configured for formatting
