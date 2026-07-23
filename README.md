# Zyvora — Marketing Website

A static marketing site for Zyvora (Digital Growth Studio), built with React 19, TypeScript, Vite, and Tailwind CSS v4.

This is a fully static, client-side site — no backend, no API keys, no server required.

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or newer (v20+ recommended)
- npm (comes bundled with Node.js)

## Run locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Open the URL shown in the terminal (usually http://localhost:5173).

## Available scripts

| Command           | Purpose                                      |
|--------------------|-----------------------------------------------|
| `npm run dev`      | Start local dev server with hot reload        |
| `npm run build`    | Type-check and build for production → `dist/` |
| `npm run preview`  | Preview the production build locally          |
| `npm run lint`     | Run TypeScript checks only                    |

## Project structure

```
.
├── index.html          # HTML entry point
├── src/
│   ├── main.tsx         # React entry point
│   ├── App.tsx           # Page content/layout
│   └── index.css        # Global styles + Tailwind
├── vite.config.ts       # Vite build config
├── vercel.json           # Vercel SPA rewrite rule
└── package.json
```

## Deploying to Vercel

### Option A — via the Vercel dashboard (no CLI needed)

1. Push this project to a GitHub (or GitLab/Bitbucket) repository.
2. Go to https://vercel.com/new and import that repository.
3. Vercel auto-detects the Vite framework preset. Confirm these settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Click **Deploy**. You'll get a live `*.vercel.app` URL in about a minute.
5. To use a custom domain, go to your project → **Settings → Domains** and add it.

### Option B — via the Vercel CLI

1. Install the CLI (one-time):
   ```bash
   npm install -g vercel
   ```
2. From the project folder, run:
   ```bash
   vercel
   ```
   Follow the prompts (log in, link/create project). This deploys a preview.
3. To deploy to production:
   ```bash
   vercel --prod
   ```

The included `vercel.json` handles single-page-app routing (so anchor links / any client routes resolve correctly on refresh).

## Notes

This project was originally scaffolded by Google AI Studio and included some unused server-side/AI boilerplate (`@google/genai`, `express`, `dotenv`, `motion`, `lucide-react`). None of that is referenced by the actual site code, so it's been removed to keep the install lean and avoid confusion — this is a pure static frontend.
