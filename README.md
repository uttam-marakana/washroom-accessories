# Washroom Accessories

A production-ready React website for a Washroom Accessories company. Built with
React, Vite, React Router DOM, and Core CSS. No heavy UI frameworks — just
clean, scalable, hand-crafted CSS.

## Features

- **9 pages**: Home, About Us, Products, Product Details, Gallery, Contact,
  Privacy Policy, Terms & Conditions, and 404.
- **SEO-ready**: Every page includes Helmet-managed title, description,
  keywords, canonical URL, Open Graph, Twitter Cards, and structured data.
- **Lazy-loaded routes** via `React.lazy` + `Suspense` for optimal performance.
- **Reusable, modular components** — single responsibility, no duplication.
- **Responsive design** tuned for breakpoints 1440, 1200, 992, 768, 576, 375, 320.
- **Accessibility-first** with semantic HTML, ARIA labels, focus states, and
  reduced-motion support.
- **Error boundary** and loading states for graceful failure handling.

## Tech Stack

- **React 19** + **Vite 8**
- **React Router DOM** — declarative routing
- **React Helmet Async** — per-page head/metadata management
- **React Icons** — icon library
- **Core CSS** — CSS variables, BEM naming, modular stylesheets
- **ESLint** + **Prettier** — code quality and formatting

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
├── assets/            # Logos, images (organized by type)
├── components/        # Reusable UI components (Button, Card, FAQ, ...)
│   ├── Button/
│   ├── ProductCard/
│   ├── ContactForm/
│   └── ...            # Each has its own .jsx + .css
├── constants/         # App-level constants (routes, colors, breakpoints)
├── context/           # React context providers (App, Theme, Product)
├── data/              # Static data (products, categories, testimonials, ...)
├── hooks/             # Custom hooks (useScrollTop, useMediaQuery, ...)
├── layouts/           # Layout components (Header, Footer, MainLayout, Sidebar)
├── pages/             # Route pages (Home, About, Products, ...)
│   ├── Home/
│   ├── Products/
│   └── ...
├── router/            # Route definitions
├── seo/               # SEO component + per-page config
├── services/          # Data access layer (products, contact, api)
├── styles/            # Global CSS architecture
│   ├── index.css      # Entry point (imports all partials)
│   ├── variables.css  # Design tokens (colors, spacing, type)
│   ├── reset.css      # Modern CSS reset
│   ├── typography.css # Base typography
│   ├── layout.css     # Layout primitives
│   ├── animations.css # Keyframe animations + reduced-motion support
│   ├── utilities.css  # Utility classes
│   ├── responsive.css # Global responsive adjustments
│   └── global.css     # App-wide layout styles
├── utils/             # Helper functions (helpers, formatters, validators, ...)
├── App.jsx            # App root (providers + router + error boundary)
└── main.jsx           # Entry point (HelmetProvider)
```

## Conventions

- **Path alias**: `@` resolves to `src` (e.g. `import X from '@/components/...'`).
- **Routing**: Add routes in `src/router/AppRoutes.jsx`. Pages are
  lazy-loaded and wrapped in `MainLayout`.
- **SEO**: Use the `SEO` component (from `src/seo/SEO.jsx`) in every page.
  Configure per-page metadata in `src/seo/seoConfig.js`.
- **Data**: Centralize static data in `src/data/`. Access via services in
  `src/services/` so component call sites stay decoupled from the source.
- **Styling**: Use the global CSS architecture in `src/styles/`. Colocate
  component-specific styles in each component's own `.css` file using BEM
  naming.
- **Constants**: Reference routes, colors, and breakpoints from
  `src/constants/` instead of hardcoding strings.

## Adding a New Page

1. Create a page component in `src/pages/<PageName>/`.
2. Add a lazy import and `<Route>` in `src/router/AppRoutes.jsx`.
3. Add the page to the sitemap (`public/sitemap.xml`) and nav config
   (`src/data/navigation.js`) if needed.
4. Configure SEO in `src/seo/seoConfig.js` and use the `SEO` component.

## Deployment

The project is ready to deploy to any static host (Netlify, Vercel, S3, etc.).
Update the site URL in `src/constants/appConfig.js` and the `.env.*` files, then
run `yarn build` and deploy the `dist/` folder. Ensure your host rewrites all
routes to `index.html` for client-side routing.
