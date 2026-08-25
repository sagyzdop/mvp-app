# MVP Boilerplate

This repository accompanies the blog post "MVP Boilerplate".

It shows how to set up a free, production-ready MVP stack with:

- TanStack Start (React + TypeScript)
- Cloudflare Workers (hosting/runtime)
- Better Auth (authentication)
- Google Sign-In (OAuth)
- Drizzle ORM + Cloudflare D1 (database)
- Tailwind CSS + shadcn/ui (UI)

## Who this is for

Hackathon projects, startup MVPs, and small products you want to ship quickly.

## Prerequisites

- Cloudflare account
- Google Cloud account
- Node.js and npm

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Component structure

```
src/components/
├── routes/                    ← mirrors src/routes/, one folder per route page
│   ├── login/index.tsx        ← Page for /login
│   ├── main/
│   │   ├── components/        ← page-exclusive components
│   │   │   └── stats.tsx
│   │   └── index.tsx          ← Page for /main
│   └── playground/index.tsx   ← Page for /playground
├── layouts/                   ← shared layout components
│   └── sidebar/
│       ├── app-sidebar.tsx
│       ├── nav-main.tsx
│       ├── nav-projects.tsx
│       ├── nav-secondary.tsx
│       └── nav-user.tsx
└── ui/                        ← shadcn components
```

Route pages go in `routes/` matching their route file names. Shared layout components (used across multiple routes) go in `layouts/`.
