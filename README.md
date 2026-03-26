# omedale-website

Personal website for Oluwafemi Medale.

This project is a static site built with Next.js App Router. It is designed as a calm, editorial personal website centered on writing, quotes, and a more reflective presentation than a traditional portfolio or CV site.

## Stack

- Next.js 16
- React 19
- pnpm

## Routes

- `/` - homepage
- `/about` - personal background and perspective
- `/blog` - writing index
- `/blog/[slug]` - static writing pages
- `/quotes` - favorite quotes and short notes
- `/contact` - contact links

## Project Structure

```txt
src/
  app/
    about/
    blog/
    contact/
    quotes/
    globals.css
    layout.js
    not-found.js
    page.js
  components/
    site/
  data/
    quotes.js
    site.js
    writing.js
```

## Getting Started

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

```bash
pnpm dev
pnpm lint
pnpm build
pnpm start
```

## Notes

- This repo now uses `pnpm` as the package manager.
- `package-lock.json` should not be used anymore.
- Content is currently stored in local data files under `src/data/`.
- The site is fully static and builds successfully with `pnpm build`.
