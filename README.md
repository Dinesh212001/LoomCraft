# Handloom Store

```
handloom-v2/
├── web/        Next.js (customer site + /admin)   -> :3000
├── backend/    Node.js + Express + PostgreSQL     -> :5000   (Routes > Controller > Service > Model)
├── docs/       HOW_IT_WORKS.md (read first), ROUTES.md
└── docker-compose.yml   (PostgreSQL)
```

**Starter status:** Home (backend + frontend), Admin layout, ALL routes (placeholders) and the 17 tables are ready.
Everything else is built by the team, module by module.

## Setup

```bash
docker compose up -d                       # PostgreSQL (or use local Postgres)

cd backend
cp .env.example .env                       # Windows: copy .env.example .env
npm install
npm run db:init                            # 17 tables
npm run seed:admin                         # admin + 6 categories
npm run seed:sample                        # 7 sample sarees (so Home shows something)
npm run dev                                # http://localhost:5000

cd ../web
cp .env.example .env.local
npm install
npm run dev                                # http://localhost:3000
```

- API health: http://localhost:5000/api/health
- Home API (working): http://localhost:5000/api/home
- Website Home: http://localhost:3000
- Admin: http://localhost:3000/admin (dashboard) , http://localhost:3000/admin/login
- Any other API route answers `501 Not built yet` (placeholder)

## Read first
1. `docs/HOW_IT_WORKS.md` - structure + how to build a route (with Home as example)
2. `docs/ROUTES.md` - every route, owner, status

## Rules
1. Branch per feature: `feature/<name>`. No direct push to `main`.
2. Layer order: Routes -> Controller -> Service -> Model. SQL only in Model, logic only in Service.
3. Do not commit `.env` / `.env.local`.
4. DB change = migration file in `backend/database/migrations/`, commit it and tell the team.
