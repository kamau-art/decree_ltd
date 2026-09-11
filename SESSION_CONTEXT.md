# Decree Ltd — Session Context (saved Sep 11)

## Project
Next.js 16 + Turbopack, Tailwind v4, Prisma 6, NextAuth, React 19. Marketing site for water/power/tank services in Nairobi. Not a git repo.

## Running
- Dev server: `nohup npx next dev -p 3001 > /tmp/decree_dev.log 2>&1 &` → http://localhost:3001
- Port 3000 belongs to another project (`okapi_two`) — don't touch.
- DB (Postgres 16, docker-compose, port 5434): `postgresql://admin:decree_ltd_pass@localhost:5434/decree_ltd`

## Current state (all verified: tsc clean, lint clean, all public routes 200)
- Full modern design pass done: lucide icons replacing emojis, hero polish (gradient text, grid overlay, entrance animation, floating stat card), scroll-reveal (`components/Reveal.tsx`), animated counters (`components/CountUp.tsx`), eyebrow section labels, consistent rounded-2xl/lift-on-hover cards, refined `globals.css` (bg-grid, text-gradient, keyframes).
- **Dark mode fully removed** (was asked to go bright-only): ThemeToggle deleted, theme script removed from layout, all `dark:` classes stripped, `@custom-variant dark` + `.dark body` removed from globals.css.
- **Docker image done + verified**: `docker build --network=host -t decree-ltd:test .` builds (319MB), container boots against local Postgres (`db push` → "already in sync", `next start` ready), all public routes 200, `/admin` 307→login, `/api/auth/providers` 200. Fixes that made it work: `ENV NODE_OPTIONS=--dns-result-order=ipv4first` (host IPv6 route is dead; container got AAAA records and Node stalled — this was the recurring npm ci exit-146), entrypoint COPYed to `/entrypoint.sh` (was landing in /app while CMD pointed at /), and `node_modules` copied from `builder` stage not `deps` (deps never ran `prisma generate`, so @prisma/client was uninitialized at runtime).
- **DB seeded**: admin/partners/services present; added 4 sample testimonials to `prisma/seed.ts` (Margaret Njeru, Stephen Kamau, Amina Hassan, David Ochieng) — homepage now renders them.
- Logo: `public/decree_logo.png` = original navy (transparent bg, header), `public/decree_logo_light.png` = lightened (footer, dark navy bg). Large: header logo h-20 in h-24 bar. Original `public/decree_logo.jpeg` still on disk as source (unreferenced).
- Font: self-hosted `@fontsource-variable/inter` (fonts.gstatic.com is unreachable from this network — never use next/font/google).
- Footer: dark navy (always dark by design), grid texture, gold accents.

## DB note
- Schema is in sync on the running DB (port 5434). `npm run db:push` reports no drift. `npm run db:seed` is idempotent (admin + partners + services upsert, testimonials skip if present).

## Pending / known issues
1. Admin pages untouched by redesign (internal tooling, fine as-is).
2. `app/about/page.tsx` still has placeholder team names (John Doe etc.).
3. Testimonials now seeded with 4 samples — replace with real client data via admin later.
4. Stray `decree.jpeg` at project root — unreferenced, maybe delete.
5. README may mention "placeholder" certifications — now DB-driven.
6. Consider `git init`.
7. `Dockerfile` npm ci flags (`--mount=type=cache`, fetch retries, `--network-concurrency=4`) tuned for flaky local WiFi; on Render's clean network they're harmless. Local builds may need `--network=host` if npm ci fails (dead IPv6 route).
8. Render env vars to set: `DATABASE_URL`, `NEXTAUTH_URL`, `NEXTAUTH_SECRET`, optional `RUN_SEED=true`, `ADMIN_EMAIL`/`ADMIN_PASSWORD`.

## Useful files
- `app/globals.css` — theme tokens + utilities
- `app/page.tsx`, `app/services/page.tsx`, `app/services/[slug]/page.tsx`, `app/portfolio/page.tsx`, `app/about/page.tsx`, `app/certifications/page.tsx`, `app/partnerships/page.tsx`, `app/contact/page.tsx`
- `components/Header.tsx`, `components/Footer.tsx`, `components/ContactForm.tsx`, `components/ServicePage.tsx`, `components/Reveal.tsx`, `components/CountUp.tsx`
- `prisma/schema.prisma`, `prisma/seed.ts`, `lib/actions.ts`, `lib/services-content.ts`