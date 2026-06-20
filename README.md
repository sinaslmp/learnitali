# Learnitali 🇮🇹

Italian learning platform for Persian-speaking users — built on Nuovo Espresso 1.

## Stack

| Layer | Tech |
|---|---|
| Frontend | Next.js 16 · TypeScript · Tailwind CSS · Zustand · React Query |
| Backend | NestJS 11 · TypeScript · Prisma · PostgreSQL |
| Cache | Redis |
| Storage | S3 / MinIO |
| Auth | JWT + Refresh Token Rotation |

## Quick Start

```bash
# 1. Start infrastructure (Postgres, Redis, MinIO)
docker compose -f docker-compose.dev.yml up -d

# 2. Backend
cd backend
cp .env.example .env   # fill in secrets
npm install
npx prisma migrate dev
npx prisma db seed
npm run start:dev      # → http://localhost:4000
                       # Swagger: http://localhost:4000/api/docs

# 3. Frontend
cd frontend
cp .env.example .env.local
npm install
npm run dev -- --port 3001   # → http://localhost:3001
```

## Lessons

Lessons 1–10 from Nuovo Espresso 1, each with:
- Vocabulary · Grammar · Reading · Listening · Speaking · Writing · Exercises · Quiz · Flashcards

## License

Private — all rights reserved.
