# skilloopz

**Learn. Practice. Get Placed.**

Skilloopz is a career-focused learning platform for learners building practical, job-ready skills. It combines a premium public programme experience with authenticated learning, role-based workspaces, course delivery, and progress tracking.

[Visit the live site](https://lmss-one.vercel.app) · [Browse programmes](https://lmss-one.vercel.app/courses) · [Start an application](https://lmss-one.vercel.app/apply)

## What is included

- A dark, responsive marketing site with programme discovery and detail pages.
- A filterable catalogue at `/courses`, with programme pages at `/programs/[slug]`.
- An application flow that collects learner details and creates a student account.
- Authentication, email verification, onboarding, learner dashboards, lessons, and learning worlds.
- Dedicated student, teacher, parent, school, and admin areas.
- Course, module, lesson, enrolment, and content-block management backed by Prisma.
- Analytics, optional Directus integration, and optional OpenAI-powered features.

## Programmes

The public catalogue currently includes:

- Full Stack Web Development
- AI & ML
- Data Science
- Data Analysis
- VLSI
- Medical Coding
- HEV — Hybrid Electric Vehicles
- Bio-Tech & Medical Program

Every programme has a course overview, learning outcomes, tools, delivery format, curriculum outline, and application route.

## Technology

| Area | Implementation |
| --- | --- |
| Web app | Next.js 16, React 19, TypeScript |
| UI | Tailwind CSS, Radix UI, Framer Motion, Lucide |
| Data | Prisma 7 with the LibSQL adapter |
| Client state | TanStack Query and Zustand |
| Forms and validation | React Hook Form and Zod |
| Payments | Stripe integration |
| Deployment | Vercel |

## Repository layout

```text
.
├── web/            # Main Next.js application
│   ├── prisma/     # Prisma schema and database migrations
│   ├── public/     # Programme images, logos, and static assets
│   └── src/        # Routes, components, features, and server logic
├── directus/       # Optional Directus configuration and extensions
├── flutter/        # Flutter client workspace
└── ASSIST/         # Supporting project material
```

## Run locally

### Prerequisites

- Node.js 20 or newer
- npm

### Setup

```powershell
git clone https://github.com/Z-A-R-R-O/lmss.git
cd lmss/web
Copy-Item .env.local.example .env.local
npm ci
npx prisma db push
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The default local configuration uses a LibSQL-compatible SQLite file. `npx prisma db push` creates the schema for that database before the app starts.

## Environment variables

Create `web/.env.local` from [`web/.env.local.example`](./web/.env.local.example).

| Variable | Required | Purpose |
| --- | --- | --- |
| `DATABASE_URL` | Yes | LibSQL or SQLite connection used by Prisma |
| `NEXT_PUBLIC_DIRECTUS_URL` | No | Directus endpoint when the integration is enabled |
| `OPENAI_API_KEY` | No | Enables the OpenAI-dependent features |

Keep credentials out of version control. For development, the example `DATABASE_URL=file:./dev.db` is sufficient.

## Useful commands

Run these from `web/`.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Generate Prisma client and create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript without emitting files |
| `npm run test` | Run type checking and Vitest |

## Deploy on Vercel

The Vercel project uses `web` as its root directory, `npm ci` to install dependencies, and `npm run build` to build the application.

For Preview and Production, set `DATABASE_URL` to a durable remote LibSQL database, such as Turso. A local `file:` database is suitable for development only because Vercel function storage is not persistent. Add optional integration variables only when those integrations are enabled.

More deployment detail is available in [`web/VERCEL_DEPLOYMENT.md`](./web/VERCEL_DEPLOYMENT.md).

## Project status

Skilloopz is actively evolving. The public experience, programme catalogue, and authenticated platform share one codebase so the learner journey can continue from discovery through application and learning.
