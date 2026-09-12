# Bichos em Movimento — site institucional

Single-page marketing site for Bichos em Movimento (fisioterapia, reabilitação
e acupuntura veterinária — Curitiba e Foz do Iguaçu), rebuilt in React from the
original Canva-hosted site.

**Stack:** React 18 · TypeScript (strict) · Vite 6 · CSS Modules. No UI
framework and no CSS framework — the design system is ~90 lines of custom
properties in [`src/styles/tokens.css`](src/styles/tokens.css).

## Running locally

Requires Node 20 or newer.

```bash
npm install
npm run dev        # http://localhost:5173
```

| Script              | What it does                                    |
| ------------------- | ----------------------------------------------- |
| `npm run dev`       | Dev server with hot reload                      |
| `npm run build`     | Typecheck, then build to `dist/`                |
| `npm run preview`   | Serve the built `dist/` locally                 |
| `npm run lint`      | ESLint (type-aware, plus jsx-a11y)              |
| `npm run typecheck` | `tsc --noEmit`                                  |
| `npm run format`    | Prettier over `src/`                            |

### Conventions

- **Copy never lives in components.** Edit `src/content/site.ts`; every section
  reads from it. The vets can change wording without touching JSX.
- **Styling is token-first.** Components reference `var(--…)`; raw values
  belong in `tokens.css`. To rebrand, edit that one file.
- **One CSS Module per component**, colocated. Nothing is global except the
  three files in `styles/`.
- **`@/` is an alias for `src/`** (configured in both `vite.config.ts` and
  `tsconfig.app.json`).

## Deploying to GitHub Pages

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds and
publishes on every push to `main`. It is inert until Pages is enabled:

> Settings → Pages → Build and deployment → Source: **GitHub Actions**

The workflow passes `BASE_PATH=/bichos-em-movimento-site/` so asset URLs resolve
under the project-site subpath. When the custom domain is pointed at Pages,
change that to `/` and add a `public/CNAME` file containing
`bichosemmovimento.com.br`.

