# carbide.network

Marketing site / web frontend for the [Carbide Network](https://carbidenetwork.xyz) at `carbidenetwork.xyz`. Built with Next.js 15 (App Router) + Tailwind + Framer Motion.

## Tech stack

- **Framework**: Next.js 15 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + tailwindcss-animate
- **UI primitives**: Radix, lucide-react
- **Motion**: Framer Motion
- **Output**: Next standalone (`output: "standalone"` in `next.config.ts`) — works behind any Node runtime, packaged in the Dockerfile

## Running locally

```sh
npm install
cp .env.example .env.local   # if you need to override NEXT_PUBLIC_API_URL
npm run dev                  # next dev --turbopack — http://localhost:3000
```

Useful scripts:

```sh
npm run lint       # eslint
npm run build      # next build (production bundle in .next)
npm run start      # next start — serves the prod build locally
```

### Environment variables

| Variable | Default | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_API_URL` | `http://localhost` | Base URL the frontend uses for any backend calls (discovery service, etc.). Override per environment. |

## Running in production

The repo ships a multi-stage `Dockerfile` that produces a small Node 20 runtime image around the standalone output.

```sh
docker build \
  --build-arg NEXT_PUBLIC_API_URL=https://discovery.carbidenetwork.xyz \
  -t carbide-network-web .

docker run --rm -p 3000:3000 \
  -e NEXT_PUBLIC_API_URL=https://discovery.carbidenetwork.xyz \
  carbide-network-web
```

Any host that runs containers (Fly.io, Railway, Render, ECS, GKE, …) will work; just set `NEXT_PUBLIC_API_URL` at build time so the value is baked into the client bundle.

For platforms that build directly from the repo (Vercel, Netlify):

- **Build command**: `npm run build`
- **Output**: `.next/` (or use the standalone bundle)
- **Node version**: 20+
- Set `NEXT_PUBLIC_API_URL` in the project's environment settings before triggering a build.

## Project layout

```
src/
├── app/         # App Router pages and layouts
├── components/  # Reusable UI components
└── lib/         # Utilities, helpers, content loaders
public/          # Static assets
```
