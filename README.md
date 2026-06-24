# Learnitali 🇮🇹

![NestJS](https://img.shields.io/badge/NestJS-11-E0234E?logo=nestjs&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-336791?logo=postgresql&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-Cache-DC382D?logo=redis&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?logo=docker&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma&logoColor=white)

A full-stack Italian language learning platform for Persian-speaking users. Features structured lesson progression, vocabulary exercises, grammar explanations, listening comprehension, and an intelligent quiz engine — all delivered through a modern TypeScript monorepo.

---

## Architecture

```
learnitali/
├── frontend/          # Next.js 16 · TypeScript · Tailwind CSS
│   ├── app/           # App Router pages (lessons, quiz, flashcards)
│   ├── components/    # Reusable UI components
│   ├── stores/        # Zustand global state
│   └── lib/           # React Query hooks and API clients
├── backend/           # NestJS 11 · TypeScript · Prisma
│   ├── src/
│   │   ├── auth/      # JWT auth + refresh token rotation
│   │   ├── lessons/   # Lesson content and progress tracking
│   │   ├── quiz/      # Quiz engine with scoring
│   │   └── users/     # User management and profiles
│   └── prisma/        # Schema, migrations, seed data
├── docker-compose.yml          # Production compose
└── docker-compose.dev.yml      # Development compose (hot reload)
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 16 · TypeScript · Tailwind CSS |
| State | Zustand · React Query |
| Backend | NestJS 11 · TypeScript |
| ORM | Prisma |
| Database | PostgreSQL 16 |
| Cache | Redis |
| Storage | S3 / MinIO |
| Auth | JWT + Refresh Token Rotation |
| API Docs | Swagger (auto-generated) |
| Dev Infra | Docker Compose |

---

## Getting Started

### Prerequisites

- Node.js >= 18
- Docker & Docker Compose

### 1. Start Infrastructure

```bash
git clone https://github.com/sinaslmp/learnitali.git
cd learnitali
docker compose -f docker-compose.dev.yml up -d
# Starts: PostgreSQL, Redis, MinIO
```

### 2. Backend Setup

```bash
cd backend
cp .env.example .env        # fill in secrets
npm install
npx prisma migrate dev      # run migrations
npx prisma db seed          # seed lesson content
npm run start:dev           # http://localhost:4000
```

**Swagger API docs:** http://localhost:4000/api/docs

### 3. Frontend Setup

```bash
cd frontend
cp .env.example .env.local  # configure API base URL
npm install
npm run dev -- --port 3001  # http://localhost:3001
```

---

## API Overview

The NestJS backend exposes a fully documented REST API via Swagger at `/api/docs`.

**Core endpoints:**

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /auth/register | User registration |
| POST | /auth/login | Login, returns JWT + refresh token |
| POST | /auth/refresh | Rotate refresh token |
| GET | /lessons | List all lessons with progress |
| GET | /lessons/:id | Lesson detail (vocabulary, grammar, exercises) |
| POST | /quiz/start | Start a quiz session |
| POST | /quiz/submit | Submit answers and receive score |
| GET | /users/me | Authenticated user profile |

---

## Features

- **Structured curriculum**: Lessons 1–10 from Nuovo Espresso 1, covering vocabulary, grammar, reading, listening, speaking, and writing
- **Quiz engine**: Timed quizzes with per-lesson scoring and progress tracking
- **Flashcard system**: Spaced repetition for vocabulary retention
- **JWT authentication**: Stateless auth with refresh token rotation for security
- **Redis caching**: Session data and frequently accessed lesson content cached for performance
- **S3/MinIO storage**: Audio and media assets for listening exercises
- **Swagger docs**: Auto-generated, always up-to-date API documentation
- **Docker Compose**: One-command dev environment setup

---

## Authentication Flow

```
User → POST /auth/login
       ↓
   NestJS validates credentials
       ↓
   Returns: access_token (15min) + refresh_token (7d, stored in HttpOnly cookie)
       ↓
   Access token expires → POST /auth/refresh → new token pair
```

---

## License

Private — all rights reserved.
