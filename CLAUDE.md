# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal bilingual (Spanish/English) portfolio site for Rodrigo Mendoza. It started as a Figma Make export (the original design is at https://www.figma.com/design/IWH3aULnpw8KP1p8tRrrTs/Portfolio-Website-UI-Design), so some of the scaffolding is Figma-specific. Stack: React 18 + Vite 6 + Tailwind CSS v4 (via `@tailwindcss/vite`), `react-router` v7, `motion` for animations, `recharts` for decorative charts, and `lucide-react`/`react-icons` for icons.

## Commands

- `npm i`: install dependencies
- `npm run dev`: start the Vite dev server
- `npm run build`: production build to `dist/`

There is no lint, test, or typecheck script, and no `tsconfig.json`. Vite strips types without checking them, so type errors will not fail the build.

## Architecture

- **Entry / routing** (`src/main.tsx`): `LanguageProvider` wraps `BrowserRouter` with two routes: `/` renders `App` (the single-page portfolio, built from section components stacked in order) and `/allProjects` renders `AllProjects` (the full project archive).
- **Content lives in one place**: almost all user-facing text and data is in `src/app/portfolioData.ts`. It is shaped as `portfolioData.es` and `portfolioData.en`, and the two subtrees mirror each other. Section components read `portfolioData[language].<section>`. When you change content, update **both** `es` and `en` and keep the keys and array shapes in sync. Some small UI strings are still inlined as `language === 'es' ? … : …` inside components (for example `AllProjects.tsx`).
- **i18n** (`src/app/LanguageContext.tsx`): a React context holds `language: 'es' | 'en'` (default `'es'`) and `toggleLanguage()`. Read it with `useLanguage()`. `LanguageSwitch` is the toggle.
- **Projects**: `projectsSection.items` holds the featured projects shown on the home page (`ProjectsGrid`). `projectsSection.allProjects` is the full list for `/allProjects`. In `ProjectsGrid.tsx`, each featured card's illustration comes from the `projectVisuals` map keyed by project `id` (`telemetry`, `reactor`, `automation`, `b2b`). A new featured project needs a matching visual component there, or its card renders without an illustration. An empty `link` or `linkGitHub` string means "no link".
- **UI primitives**: `src/app/components/ui/` contains the stock shadcn/Radix components from the Figma template, and most are unused. The `cn()` helper is in `ui/utils.ts`. `components/figma/ImageWithFallback.tsx` is also template scaffolding.

## Styling conventions

- The dark theme is hardcoded with Tailwind arbitrary values rather than theme tokens: background `#121212`, accent green `#00D084`. Fonts are set inline: `font-['Space_Grotesk']` for headings and `font-['Inter']` for body text (loaded in `src/styles/fonts.css`).
- CSS entry is `src/styles/index.css`, which imports `fonts.css`, `tailwind.css` and `theme.css`. `default_shadcn_theme.css` at the repo root is a reference copy and is not imported.

## Vite config constraints (`vite.config.ts`)

- The React and Tailwind plugins are required by Figma Make. Do not remove them.
- The `@` alias points to `src/`.
- A custom resolver maps `figma:asset/<file>` imports to `src/assets/<file>`.
- Never add `.css`, `.ts` or `.tsx` to `assetsInclude`.

## Repo notes

- `development` is the main branch.
- Code comments are partly in Spanish.
