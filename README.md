# DevFlows Landing

Public website for DevFlows (marketing + docs), built as a standalone React app.

This project is part of the DevFlows monorepo:
- `../devflows-fe`: authenticated product app
- `../devflows-be`: backend API
- `../devflows-deployment-action`: GitHub Action integration
- `../devflows-move-task-action`: GitHub Action for task column automation

## Overview

`devflows-landing` provides:
- marketing landing page at `/`
- public docs page at `/docs`
- light/dark theme toggle
- responsive navigation with section anchors

Main page sections:
- Hero
- Features
- How It Works
- Integrations (deployment webhooks)
- Task Automation (task move webhook)
- CTA
- Pricing

## Tech Stack

- React 19
- TypeScript
- Vite 7
- Tailwind CSS 4
- React Router 7
- Lucide React

## Routing

- `/` -> Landing page (`src/pages/Landing.tsx`)
- `/docs` -> Product docs overview (`src/pages/Docs.tsx`)

## Project Structure

```text
src/
├── App.tsx
├── main.tsx
├── index.css
├── config.ts
├── hooks/
│   └── useTheme.tsx
├── pages/
│   ├── Landing.tsx
│   └── Docs.tsx
└── components/
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── Features.tsx
    ├── HowItWorks.tsx
    ├── Integrations.tsx
    ├── TaskAutomation.tsx
    ├── CTA.tsx
    ├── Pricing.tsx
    └── Footer.tsx
```

## Getting Started

Prerequisites:
- Node.js LTS `>=24.13.1`
- npm `>=11.8.0`

Install and run:

```bash
cd devflows-landing
npm install
npm run dev
```

App URL:
- `http://localhost:5173` (default Vite port)

## Scripts

- `npm run dev` -> start dev server
- `npm run build` -> type-check + production build
- `npm run lint` -> lint sources
- `npm run preview` -> preview production build

## Notes

- CTA links are driven by `VITE_APP_URL` (`src/config.ts`). If not set, fallback is `#`.
- Public support/contact references are standardized to `support@devflows.dev`.
- The docs content in `/docs` mirrors the current platform capabilities and should be updated when backend/frontend contracts change.

## License

Private - All rights reserved.
