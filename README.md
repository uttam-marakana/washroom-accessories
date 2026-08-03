# Washroom Accessories

Production-ready React foundation for a washroom accessories storefront.
This is a clean, minimal setup — no pages or features are built yet, so new
features can be added incrementally on top of a solid base.

## Stack

- **Vite** + **React 19** (JavaScript)
- **React Router DOM** — declarative routing
- **React Helmet Async** — per-page head/metadata management
- **React Icons** — icon library
- **ESLint** + **Prettier** — linting and formatting

## Scripts

| Script              | Description                      |
| ------------------- | -------------------------------- |
| `yarn dev`          | Start the Vite dev server        |
| `yarn build`        | Build for production             |
| `yarn preview`      | Preview the production build     |
| `yarn lint`         | Run ESLint                       |
| `yarn lint:fix`     | Auto-fix lint issues             |
| `yarn format`       | Format all files with Prettier   |
| `yarn format:check` | Check formatting without writing |

## Project Structure

```
src/
├── assets/            # Static images & assets
├── components/
│   ├── layout/        # Header, Footer, MainLayout
│   └── ui/            # Reusable UI primitives (ScrollToTop, ...)
├── config/            # Site-wide configuration (site.js)
├── lib/               # Helper utilities (utils.js)
├── pages/             # Route-level pages (Home, NotFound, ...)
├── routes/            # Central route configuration (index.jsx)
├── styles/            # Global CSS architecture
│   ├── index.css      # Entry point (imports all partials)
│   ├── variables.css  # Design tokens (colors, spacing, type)
│   ├── base.css       # Reset & base element styles
│   ├── layout.css     # Layout primitives (header, footer, container)
│   └── utilities.css  # Utility classes
├── App.jsx            # App root (router + scroll-to-top)
└── main.jsx           # Entry point (HelmetProvider)
```

## Conventions

- **Path alias**: `@` resolves to `src` (e.g. `import X from '@/components/...'`).
- **Routing**: Add routes in `src/routes/index.jsx`. Routes are wrapped in
  `MainLayout`, which renders the shared `Header`/`Footer` around an `Outlet`.
- **Site config**: Centralize site metadata and nav links in
  `src/config/site.js`. The header nav renders from `siteConfig.nav`.
- **Per-page metadata**: Use `react-helmet-async`'s `<Helmet>` inside each page.
- **Styling**: Use the global CSS architecture in `src/styles/`. Store
  component-specific styles in `src/components/...` alongside components.
- **Utilities**: Small helpers live in `src/lib/utils.js` (e.g. `cn`).

## Adding a New Page

1. Create a page component in `src/pages/`.
2. Add a `<Route>` entry in `src/routes/index.jsx`.
3. Optionally add a nav link in `src/config/site.js`.
4. Set page metadata with `<Helmet>`.
