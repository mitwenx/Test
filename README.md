# CycleIndia

CycleIndia is an open-source frontend web application to discover cycling events across India. It includes modern event discovery UX, rich client-side filters, bookmarking, mock submission flow, and scalable architecture to plug in backend APIs later.

## Tech Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Reusable UI components inspired by ShadCN patterns
- React Hook Form + Zod for form validation
- Zustand (localStorage-backed bookmarks)
- Lucide React icons

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Available Scripts

- `npm run dev` — start development server
- `npm run build` — production build
- `npm run start` — run production server
- `npm run lint` — linting
- `npm run typecheck` — TypeScript checks

## Project Structure

```text
/app
/components
/features/events
/data
/lib
/types
```

## Frontend Features

- Homepage with hero, featured events, and upcoming events
- Event listing with:
  - Grid/list toggle
  - Search
  - Advanced filters (status, price, type, state/city, date range)
  - Sorting and pagination
  - Mobile filter bottom sheet
- Event detail page with dynamic SEO metadata and full event information
- Submit Event form with frontend validation + success toast
- Bookmark events with localStorage persistence
- "Near me" UI (mock geolocation behavior)

## Mock Data

`/data/events.ts` contains realistic multi-state India cycling event data and utilities for filtering, searching, sorting, and status calculations.


## GitHub Pages Deployment

This project is configured for GitHub Pages via `.github/workflows/deploy-pages.yml`.

1. Push to the `main` branch.
2. In GitHub repo settings, set **Pages → Source** to **GitHub Actions**.
3. The workflow builds a static export (`out/`) and deploys automatically.

For project repositories (for example `username/cycleindia`), base paths are configured automatically in CI.

## Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Run lint and type checks.
4. Submit a pull request with clear scope and screenshots for visual changes.

## License

MIT (recommended for open-source projects; add `LICENSE` file if needed).
