# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the dev server at http://localhost:3000
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint (`next lint`)

There is no test runner configured in this project.

## Architecture

Single-page personal portfolio built with the **Next.js 13 App Router** (`app/`), TypeScript, Tailwind CSS, and Framer Motion. The entire site renders from one route: [app/page.tsx](app/page.tsx) stacks section components (`Intro`, `About`, `Projects`, `Skills`, `Experience`, `Contact`) into a vertical scroll. [app/layout.tsx](app/layout.tsx) wraps everything in the global providers, `Header`, `Footer`, `ThemeSwitch`, and the toast `Toaster`.

### Content is data-driven
All page content (nav links, projects, skills, experience timeline) lives in [lib/data.ts](lib/data.ts) as exported `as const` arrays — edit content there, not in the components. The nav `links` array is the single source of truth: [lib/types.ts](lib/types.ts) derives `SectionName` from it, so adding/renaming a nav section flows through the type system. Project images are imported from `public/` and referenced in `data.ts`.

### Active-section tracking
Scroll-spy navigation is coordinated by two pieces:
- [context/active-section-context.tsx](context/active-section-context.tsx) — holds `activeSection` and `timeOfLastClick` state.
- [lib/hooks.ts](lib/hooks.ts) `useSectionInView(sectionName, threshold)` — each section component calls this; it uses `react-intersection-observer` to set the active section when scrolled into view, but suppresses updates for 1s after a nav click (`timeOfLastClick`) so clicking a nav link doesn't get overridden mid-scroll. New sections must call this hook with their name to participate in nav highlighting.

### Theming
[context/theme-context.tsx](context/theme-context.tsx) manages light/dark mode by toggling the `dark` class on `document.documentElement` and persisting to `localStorage`. Tailwind is configured with `darkMode: "class"`. Use `dark:` variants for dark styling.

### Contact form (server action + email)
[actions/sendEmail.ts](actions/sendEmail.ts) is a `"use server"` action invoked by the contact form. It validates input via `validateString` from [lib/utils.ts](lib/utils.ts), then sends mail through **Resend** using the [email/contact-form-email.tsx](email/contact-form-email.tsx) React Email template. Requires the `RESEND_API_KEY` environment variable.

## Conventions

- Import alias `@/*` maps to the repo root (configured in `tsconfig.json`), e.g. `@/lib/data`, `@/components/header`.
- Client components must start with `"use client"` (any component using hooks, context, or Framer Motion). Section components are client components; the `page.tsx`/`layout.tsx` shells are server components.
- Prettier with `prettier-plugin-tailwindcss` is configured — Tailwind class ordering is auto-sorted.
