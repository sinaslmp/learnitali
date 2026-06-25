# Learnitali — Backend

NestJS 11 API server for the Learnitali Italian learning platform.

> For full project documentation, architecture, and setup instructions see the [root README](../README.md).

## Stack

- **Framework**: NestJS 11 (TypeScript)
- **ORM**: Prisma
- **Database**: PostgreSQL 16
- **Cache**: Redis
- **Storage**: S3 / MinIO (audio and media assets)
- **Auth**: JWT + Refresh Token Rotation (HTTP-only cookies)
- **API Docs**: Swagger (auto-generated at `/api/docs`)

## Getting Started

### Prerequisites

- Node.js >= 18
- Docker & Docker Compose (for PostgreSQL, Redis, MinIO)

### Setup

```bash
# From repo root, start infrastructure:
docker compose -f docker-compose.dev.yml up -d

# Then:
cd backend
cp .env.example .env   # fill in secrets
npm install
npx prisma migrate dev
npx prisma db seed
npm run start:dev
```

API runs at **http://localhost:4000**
Swagger docs at **http://localhost:4000/api/docs**

## Project Structure

```
backend/
├── prisma/
│   ├── schema.prisma         # Database schema
│   ├── migrations/           # Migration history
│   └── seed.ts               # Lesson seed data
└── src/
    ├── auth/                 # JWT auth + refresh token rotation
    ├── lessons/              # Lesson content and progress tracking
    ├── quiz/                 # Quiz engine with scoring
    ├── users/                # User management and profiles
    ├── common/               # Shared guards, interceptors, pipes
    ├── config/               # Environment configuration
    ├── app.module.ts         # Root NestJS module
    └── main.ts               # Application entry point
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string |
| `REDIS_URL` | Redis connection string |
| `JWT_SECRET` | JWT signing secret |
| `JWT_REFRESH_SECRET` | Refresh token signing secret |
| `S3_ENDPOINT` | MinIO/S3 endpoint URL |
| `S3_BUCKET` | S3 bucket name for media assets |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run start:dev` | Start with hot reload |
| `npm run build` | Compile TypeScript |
| `npm run start:prod` | Start compiled build |
| `npm run lint` | Run ESLint |
| `npx prisma studio` | Open Prisma Studio (DB GUI) |
