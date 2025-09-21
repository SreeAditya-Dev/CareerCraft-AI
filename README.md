# CareerCraft AI — AI Career Coach (Next.js)

An AI-powered career assistant that helps users get job-ready with:
- AI resume builder and improver
- AI cover letter generator
- Technical interview quiz with explanations + progress tracking
- Industry insights (salary ranges, top skills, market trends) auto-updated via scheduled jobs


## Features
- Resume: Structured builder with validation, save/update, AI improvement suggestions
- Cover Letters: Generate tailored letters from company, role, and JD; view history
- Interview: Auto-generated MCQ quizzes based on user industry/skills, score + feedback
- Insights Dashboard: Salary ranges, growth rate, top skills, market outlook, trends
- Onboarding: Select industry/specialization, experience, bio, skills
- Auth: Managed via Clerk (sign-in/sign-up flows)
- Theming + UI: Tailwind CSS + shadcn/ui, dark mode, toast notifications


## Tech Stack
- App: Next.js 15 (App Router), React 19
- Auth: Clerk
- UI: Tailwind CSS, shadcn/ui, Radix UI, lucide-react
- Forms & Validation: React Hook Form + Zod
- AI: Google Gemini 1.5 Flash via `@google/generative-ai`
- DB/ORM: PostgreSQL + Prisma
- Background Jobs: Inngest (scheduled weekly updates)


## Getting Started
1) Prerequisites
- Node.js 18+ and pnpm/npm
- A PostgreSQL database (Neon, Supabase, Railway, etc.)
- Clerk account and application
- Google AI Studio API key for Gemini

2) Install dependencies
```pwsh
npm install
```

3) Environment variables
Create a `.env` file in the project root:
```bash
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DB?sslmode=require

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

GEMINI_API_KEY=
```

4) Generate Prisma client
```pwsh
npm run postinstall
# or
npx prisma generate
```

5) Run database migrations
```pwsh
npx prisma migrate deploy
# For local development (if you have pending migrations):
# npx prisma migrate dev
```

6) Start the dev server
```pwsh
npm run dev
```
Visit http://localhost:3000


## Environment Notes
- Prisma uses PostgreSQL via `DATABASE_URL`.
- Gemini is accessed with `GEMINI_API_KEY` and is used across server actions.
- Clerk is required for authentication and route protection.


## Scripts
- `npm run dev` — Next dev with Turbopack
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — Lint with ESLint
- `postinstall` — `prisma generate`


## Database & Prisma
- Schema: `prisma/schema.prisma`
- Generate Client: `npx prisma generate`
- Apply Migrations: `npx prisma migrate deploy` (CI/prod) or `npx prisma migrate dev` (local)
- Studio (optional): `npx prisma studio`


## Background Jobs (Inngest)
- Weekly industry insights refresh via cron at Sunday midnight.
- Entry points:
	- Client: `lib/inngest/client.js`
	- Function: `lib/inngest/function.js` (uses Gemini to produce insights)
	- API route: `app/api/inngest/route.js`


## Project Structure
```
app/
	(auth)/            # Clerk sign-in/up routes
	(main)/            # Authenticated app
		dashboard/       # Insights dashboard
		resume/          # Resume builder + AI improvements
		ai-cover-letter/ # Cover letter generator, history, details
		interview/       # Quiz generation and results
		onboarding/      # First-time user profile setup
		careervault/     # Static resources
components/          # Shared UI components (shadcn/ui)
actions/             # Server actions (resume, cover-letter, interview, etc.)
lib/                 # Prisma, utils, Inngest client/functions
prisma/              # Prisma schema and migrations
public/              # Static assets
```


## Key Paths
- Auth Provider: `app/layout.js` (wraps app with `ClerkProvider` and theme)
- Server Actions: `actions/*.js`
- Prisma Client: `lib/prisma.js`
- AI Usage: `actions/*` and `lib/inngest/*` with `@google/generative-ai`


## Deployment Checklist
- Set all env vars in your hosting platform (Vercel, Netlify, etc.)
- Run `npx prisma migrate deploy` against your production DB
- Ensure `GEMINI_API_KEY` and Clerk keys are configured
- Expose `app/api/inngest/route` if using Inngest Cloud (configure accordingly)


## License
This project is for educational and hackathon purposes.