# Learnitali — Frontend

Next.js 16 frontend for the Learnitali Italian learning platform.

> For full project documentation, architecture, and setup instructions see the [root README](../README.md).

## Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS
- **State**: Zustand
- **Data Fetching**: React Query (TanStack Query)
- **Auth**: JWT with refresh token rotation (handled via HTTP-only cookies)

## Getting Started

### Prerequisites

- Node.js >= 18
- Backend running on `http://localhost:4000` (see [backend setup](../backend/README.md))

### Setup

```bash
# From repo root, start infrastructure first:
docker compose -f docker-compose.dev.yml up -d

# Then:
cd frontend
cp .env.example .env.local   # set NEXT_PUBLIC_API_URL=http://localhost:4000
npm install
npm run dev -- --port 3001
```

App runs at **http://localhost:3001**

## Project Structure

```
frontend/
├── app/                  # Next.js 16 App Router
│   ├── (auth)/           # Auth pages (login, register)
│   ├── lessons/          # Lesson browser and detail pages
│   ├── quiz/             # Quiz flow pages
│   └── layout.tsx        # Root layout with providers
├── components/
│   ├── ui/               # Reusable UI primitives
│   ├── lessons/          # Lesson-specific components
│   └── quiz/             # Quiz components
├── stores/               # Zustand state stores (auth, progress)
├── lib/
│   ├── api.ts            # Typed Axios instance + interceptors
│   └── query-client.ts   # React Query configuration
├── types/                # TypeScript type definitions
├── .env.example
└── next.config.ts
```

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_API_URL` | Backend API base URL | `http://localhost:4000` |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
