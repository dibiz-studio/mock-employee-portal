# HRMS / KPI Management Portal

Production-grade Employee Management, KPI Tracking, Leave Management, EOD Reporting, and Payroll Assistance platform.

## Tech Stack

- **Frontend:** Next.js 15, TypeScript, TailwindCSS, shadcn/ui
- **Backend:** Local mock services and in-memory data
- **State:** Zustand · **Forms:** React Hook Form + Zod · **Charts:** Recharts

## Quick Start

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Demo Accounts

See **[CREDENTIALS.md](./CREDENTIALS.md)** for full login details.

**Password for all accounts:** `Password123!`

| Role | Email |
|------|-------|
| Super Admin | `admin@company.dev` |
| HR | `hr@company.dev` |
| Manager | `manager1@company.dev` |
| Employee | `employee1@company.dev` |
| Intern | `intern1@company.dev` |

Google SSO is also available on the login page.

## Features

- Mock authentication with role-based access
- Role-specific dashboards (Admin, HR, Manager, Employee, Intern)
- Employee directory, departments, detail views
- KPI templates, assignment, analytics, leaderboards
- Leave management with configurable policies
- End-of-day reporting and manager review
- Payroll dashboard and employee payslips
- Reports with PDF preview
- Settings hub (company, departments, roles, policies)
- Notification center and audit logs
- Mobile-first responsive design with bottom navigation

## Project Structure

```
src/
├── app/           # Next.js App Router pages
├── features/      # Feature modules (auth, employees, kpi, leave, etc.)
└── shared/        # UI components, lib, stores, types
docs/              # Architecture & product documentation
data/              # Local mock data and reference notes
```

## Documentation

See the [`docs/`](./docs/) folder for:

- [Product Requirements](./docs/product-requirements.md)
- [Frontend Architecture](./docs/frontend-architecture.md)
- [Database Schema](./docs/database-schema.md)
- [RBAC](./docs/rbac.md)
- [Routes](./docs/routes.md)
- [Design System](./docs/design-system.md)
- [Mobile Design](./docs/mobile-design.md)
- [Implementation Plan](./docs/implementation-plan.md)

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Data Model

All app data is served from local mock collections for employees, leave, KPIs, payroll, and notifications.
