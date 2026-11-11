# Socia

Socia is an npm-workspaces monorepo containing a Next.js frontend and an Express API.

## Apps

- `apps/web` — Next.js 16 frontend, served at `http://localhost:3000`
- `apps/api` — Express API, served at `http://localhost:4000`

## Development

Install dependencies once from the repository root, then start both applications:

```bash
npm install
npm run dev
```

Useful focused commands:

```bash
npm run dev:web
npm run dev:api
npm run build
```

The initial API health check is available at `GET /api/health`.

## Environment

Copy `apps/api/.env.example` to `apps/api/.env` when API configuration is needed. The web app keeps its existing environment file at `apps/web/.env`.
