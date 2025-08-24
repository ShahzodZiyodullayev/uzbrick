# UzBrick Frontend

A modern single-page application built with React 19, TypeScript, Vite 7, and Mantine UI. The project implements a
modular, scalable architecture (inspired by feature‑sliced / layered approaches) with clear separation between app
shell, pages, widgets, features, entities, shared utilities, and assets. It includes internationalization (Uzbek /
Russian), an API layer with Axios, code splitting via React.lazy + React Router, theming with Mantine, PostCSS + CSS
Modules (.pcss), and performance-oriented best practices.

## Table of Contents

- Overview
- Tech Stack
- Features
- Project Structure
- Architecture Concepts
- Getting Started
- Available Scripts
- Environment Variables
- Internationalization (i18n)
- Styling & Theming
- API Layer
- Routing & Code Splitting
- Image Loading Provider
- Conventions & Guidelines
- Potential Improvements / Roadmap
- License

## Overview

This repository hosts the frontend for the UzBrick website / platform (branding assets inside `public/` and
`src/shared/assets/`). The goal is to deliver a fast, maintainable, and easily extensible UI with a clean modular
separation and predictable data flow.

## Tech Stack

Core:

- React 19 + TypeScript
- Vite (dev server + build)
- React Router v7 (createBrowserRouter)
- Mantine v8 (core, hooks, forms, modals, notifications, carousel)
- Emotion (Mantine emotion integration / styles transform)
- PostCSS (with `postcss-preset-mantine` & custom plugins) + CSS Modules (`*.module.pcss`)
- React Query (@tanstack/react-query) for server state (currently foundation present via dependency; queries folder
  prepared)
- Axios (API client + interceptors)
- i18next + react-i18next + language detector + HTTP backend

Tooling & Quality:

- ESLint 9 + TypeScript ESLint + React plugins
- Prettier
- TypeScript project references (`tsconfig.app.json`, `tsconfig.node.json`)
- Path aliases via `vite-tsconfig-paths`
- Rollup visualizer (bundle stats via `stats.html`)

## Features

- Lazy loaded routes & layout composition
- Theme customization (custom Mantine theme + component extensions)
- Central provider composition (`withProviders` using functional composition)
- Image loading context/provider (`ImageLoadProvider`)
- API abstraction with global request/response interceptors
- Automatic GET request timeout abortion (AbortController) for improved UX
- Multilingual support (runtime language detection & resource loading)
- Modular widget-based homepage sections (hero, products, logistics, clients, partnership, about, stats, footer, etc.)
- Strong typing and isolated domain layers (`entities`, `features`, `widgets`)

## Project Structure

```
root
├─ public/                # Static assets (served as-is) + locales/
├─ src/
│  ├─ app/                # App shell (Root, layouts, routing, providers)
│  │  ├─ layouts/         # Base layout(s)
│  │  ├─ providers/       # HOCs that compose context providers
│  │  └─ routing/         # Router factory
│  ├─ pages/              # Route-level entry points
│  ├─ widgets/            # Page sections (composite UI blocks)
│  ├─ features/           # User-facing isolated feature logic (CTAs, forms, etc.)
│  ├─ entities/           # Domain entities (API queries, models)
│  ├─ shared/             # Reusable low-level building blocks
│  │  ├─ api/             # Axios instance & API helpers
│  │  ├─ assets/          # Images, logos
│  │  └─ lib/             # Generic libs (image loader, etc.)
│  ├─ i18n.ts             # i18next initialization
│  ├─ main.tsx            # Client bootstrap (hydrate Root)
│  └─ index.css           # Global styles & CSS variables
└─ README.md
```

## Architecture Concepts

- app: Composition root; no business logic.
- pages: Route-level orchestrators; assemble widgets/features.
- widgets: Larger composite UI blocks (hero, footer, etc.).
- features: User interactions (e.g., phone input) encapsulating logic + UI.
- entities: Data-centric domain logic (models, queries). Each entity folder groups its data fetching & typing.
- shared: Pure, reusable primitives (UI-agnostic libs, assets, API clients).

Benefits:

- Clear dependency flow: shared → entities → features → widgets → pages → app.
- Easier refactoring & scaling.
- Improved testability and code locality.

## Getting Started

Prerequisites:

- Node.js 18+ (recommend LTS)
- pnpm / npm / yarn (examples use npm)

Install dependencies:

```
npm install
```

Run dev server:

```
npm run dev
```

Open: http://localhost:5173 (default Vite port)

Type check + build production bundle:

```
npm run build
```

Preview production build locally:

```
npm run preview
```

Lint:

```
npm run lint
```

Auto-fix + format:

```
npm run lint:fix
npm run format
```

## Available Scripts (package.json)

- dev: Start Vite dev server
- build: Type-check (tsc -b) then bundle with Vite
- preview: Preview built dist
- lint / lint:fix: Run ESLint (optionally with --fix)
- format: Prettier formatting

## Environment Variables

Create a `.env` (and/or `.env.local`) file at project root.

Example:

```
VITE_BASE_URL=https://api.example.com
```

All variables must be prefixed with `VITE_` to be exposed to the client (Vite convention).

Usage example: `api` instance (src/shared/api/base.ts) uses `import.meta.env.VITE_BASE_URL`.

## Internationalization (i18n)

Configured in `src/i18n.ts`:

- Backend: i18next-http-backend (loads `/locales/{lng}/{ns}.json`)
- Detection: localStorage, cookie, navigator, html tag
- Supported languages: `uz`, `ru` (fallback: `ru`)

Adding a translation key:

1. Add key to `public/locales/uz/translation.json` and `public/locales/ru/translation.json`.
2. Use in components: `const { t } = useTranslation();` then `<span>{t('your.key')}</span>`.

## Styling & Theming

- Mantine core components with a custom theme (font family, component defaultProps & styles overrides) in
  `with-mantine.tsx`.
- CSS Modules with `.module.pcss` extension for local scoping.
- PostCSS pipeline (see `postcss.config.cjs`) including Mantine preset variables and optional custom variables.
- Emotion integration (`MantineEmotionProvider`) + `emotionTransform` enables zero-runtime styling synergy with Mantine.

## API Layer

Defined in `src/shared/api/base.ts`:

- Axios instance with base URL from env
- Request interceptor: sets cache-control headers, attaches abort signal for GET (timeout 10s)
- Response interceptor: unwraps `response.data` and funnels errors via `handleError`
- Error strategy: throws meaningful string or first message from array; reserved logic for auth (commented placeholder)

Add new domain-specific API logic under `src/shared/api/` or entity-specific queries under `src/entities/<entity>/`.

## Routing & Code Splitting

`src/app/routing/app-router.tsx` creates the router using `createBrowserRouter`.

- Each route component is lazy-loaded with `React.lazy` for code splitting.
- Base layout is nested for the root path.
- 404 fallback route (`*`) renders NotFound page.

Add a new page:

1. Create folder `src/pages/your-page` with `index.ts` (re-export) & UI component.
2. Add lazy import & route entry in `app-router.tsx`.

## Image Loading Provider

`ImageLoadProvider` (in `src/shared/lib/image`) wraps the app via provider composition (`withProviders`). Use it for
deferred image handling / placeholders / progressive loading (implementation can be expanded).

## Conventions & Guidelines

Imports / Aliases:

- Path aliases resolved by `vite-tsconfig-paths`. Use `@/` as prefix for src root.

File Naming:

- Components: `component-name.tsx` (kebab within folders) or `index.ts` to re-export.
- Styles: `component-name.module.pcss` colocated under `ui/` where relevant.

Providers:

- Compose new global providers in `src/app/providers/index.tsx` via `compose` for a clean Root.

Error Handling:

- Prefer throwing `Error` objects in API/data layers; catch at boundary components (future improvement: toast
  notifications with Mantine Notifications).

State Management:

- Redux Toolkit dependency present (future store integration). Server state (React Query) recommended for data fetching;
  caching patterns can be added under `entities/*` queries.

Testing (Not Yet Included):

- Suggested stack: Vitest + React Testing Library for components; MSW for API mocks.

## Potential Improvements / Roadmap

- Implement global store (Redux Toolkit) if needed for auth/session.
- Introduce React Query provider + example queries usage in UI.
- Add error boundary & suspense fallbacks (skeleton loaders) per route.
- Add dark theme toggle with Mantine color scheme storage.
- Add automated accessibility checks (axe / eslint-plugin-jsx-a11y).
- Add Vitest test suite + CI workflow.
- Optimize images (responsive sources / WebP) & add dynamic import analysis.
- Add form examples using `@mantine/form` and validation.

## License

MIT © 2025 Shakhzod Ziyodullayev

## Contact / Attribution

Author: Shakhzod Ziyodullayev
Feel free to open issues or submit PRs for enhancements.

---
Generated README tailored to the current codebase (dependencies, architecture, and files observed in the repository).
