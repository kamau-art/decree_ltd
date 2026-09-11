# Decree Ltd — Water, Power & Tank Solutions Website

A marketing website with an admin panel for a company providing water drilling, power
installation, tank construction, solar pumps, and piping services.

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Styling**: Tailwind CSS v4
- **Database**: PostgreSQL 16 (self-hosted via Docker Compose)
- **ORM**: Prisma 6
- **Auth**: NextAuth.js (Credentials + JWT)
- **Icons**: Lucide React

## Project Structure

```
app/
├── page.tsx                  # Homepage (hero, services, testimonials, trust, CTA)
├── services/                 # Services index (DB-driven) + 5 rich detail pages + [slug] fallback
│   ├── water-drilling/
│   ├── power-installation/
│   ├── tank-construction/
│   ├── solar-solutions/
│   └── piping-services/
├── about/                    # Company story, values, team
├── portfolio/                # Project gallery
├── certifications/           # Certifications & licenses (admin-managed)
├── partnerships/             # Partner organizations
├── contact/                  # Contact form + info
├── admin/
│   ├── login/                # Admin sign-in
│   └── (dashboard)/          # Protected admin panel (services, testimonials,
│                             # portfolio, certifications, partners, messages)
└── api/
    ├── auth/[...nextauth]/   # NextAuth route handler
    └── contact/              # Contact form submission API
components/
├── Header.tsx / Footer.tsx   # Site chrome
├── ServicePage.tsx           # Reusable service-page layout (O'Keefe structure)
└── ContactForm.tsx           # Contact form (client component)
lib/
├── prisma.ts                 # Prisma client singleton
├── auth.ts                   # NextAuth config
├── actions.ts                # Server actions (admin CRUD)
├── utils.ts                  # cn() helper
└── services-content.ts       # All service page content
prisma/
├── schema.prisma             # Database schema
└── seed.ts                   # Creates the admin user
docker/docker-compose.yml     # PostgreSQL 16 container
```

## Getting Started

### 1. Start PostgreSQL

```bash
docker compose -f docker/docker-compose.yml up -d
```

The database runs on host port **5434** (5432 may be used by other projects).

### 2. Configure environment

```bash
cp .env.example .env
```

Edit `.env` and set a strong `NEXTAUTH_SECRET` and your admin credentials if desired.

### 3. Install dependencies & sync the database

```bash
npm install
npm run db:push        # create tables
npm run db:seed        # create the admin user (admin@decree-ltd.com / admin123)
```

### 4. Run the app

```bash
npm run dev            # http://localhost:3000
```

> If port 3000 is already in use by another project, run `PORT=3001 npm run dev`.

## Admin Panel

Sign in at **/admin/login** with the seeded admin account
(`admin@decree-ltd.com` / `admin123` — change this after first login).

From the dashboard you can:

- Add / hide / delete **Services**
- Add / hide / delete **Testimonials**
- Add / delete **Portfolio** projects
- Add / delete **Certifications**
- Add / delete **Partners**
- Review and manage **contact form messages** (pending → contacted → resolved)

## Useful Commands

| Command               | Description                          |
| --------------------- | ------------------------------------ |
| `npm run dev`         | Start development server             |
| `npm run build`       | Production build                     |
| `npm run start`       | Start production server              |
| `npm run db:push`     | Sync Prisma schema to the database   |
| `npm run db:migrate`  | Create & apply a migration           |
| `npm run db:seed`     | Create the admin user                |
| `npm run db:studio`   | Open Prisma Studio (browse the DB)   |
| `npm run lint`        | Run ESLint                           |

## Customizing Content

- **Service pages**: the services list is managed via the admin panel. The 5 rich detail
  pages (capabilities, FAQs, audiences, related services) are authored in
  `lib/services-content.ts`; additional services added in the admin render a generic
  detail page from their DB record.
- **Homepage testimonials**: manage via the admin panel (they render from the database).
- **Portfolio / certifications / partners**: manage via the admin panel.
- **Brand colors**: edit the `@theme` block in `app/globals.css`
  (`--color-brand`, `--color-gold`, etc.).

## Deployment

The site builds to static + dynamic routes that work on any Node host (Vercel, Railway,
a VPS). The self-hosted PostgreSQL instance just needs to be reachable from the app and
`DATABASE_URL`, `NEXTAUTH_SECRET`, and `NEXTAUTH_URL` must be set in production.

## Security Notes

- Change `ADMIN_PASSWORD` (or set `ADMIN_EMAIL`/`ADMIN_PASSWORD` in `.env`) before going live.
- Use a strong random `NEXTAUTH_SECRET` in production.
- `.env` is gitignored; use `.env.example` as a template.
