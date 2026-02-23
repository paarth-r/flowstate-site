# Flowstate Marketing Site

Production-ready marketing website for the Flowstate mobile app. Built with Next.js (App Router), TypeScript, and Tailwind CSS, designed for deployment on Vercel.

## Local development

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the dev server**

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

Optional: copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_APP_STORE_URL` so the Download button points to your App Store link during development.

## Deploy on Vercel

1. Push this project to a Git repository (GitHub, GitLab, or Bitbucket).

2. Go to [vercel.com](https://vercel.com), sign in, and click **Add New Project**. Import your repository.

3. Configure environment variables in the Vercel dashboard (optional):
   - `NEXT_PUBLIC_SITE_URL` — e.g. `https://flowstate.app` (for sitemap and OpenGraph).
   - `NEXT_PUBLIC_APP_STORE_URL` — your App Store link.
   - `NEXT_PUBLIC_ANALYTICS_ENABLED` — set to `true` only when you add analytics.

4. Deploy. Vercel will detect Next.js and run `next build`; no `vercel.json` is required for a standard Next app.

## Where to change App Store link

- **Build time:** Set in Vercel (or any host) as `NEXT_PUBLIC_APP_STORE_URL`.
- **Local:** Copy `.env.example` to `.env.local` and set the same variable.

The landing page, leaderboard page, and Download CTAs use this value. If unset, the button falls back to `#` (placeholder).

## Where to replace screenshots

1. Add your app screenshots to the `public` folder:
   - `public/screenshot-1.png`
   - `public/screenshot-2.png`
   - `public/screenshot-3.png`

2. Recommended size: **240×480** px (or same aspect ratio) so they fit the placeholder frames. The section “See it in action” on the homepage will show these images. If a file is missing, a “Screenshot N” placeholder is shown.

3. To use more or fewer screenshots, edit `app/page.tsx` and the `ScreenshotPlaceholder` usage in the “See it in action” section (and add or remove files in `public` accordingly).

## Project structure

- `app/` — App Router pages and layout
  - `page.tsx` — Landing page
  - `privacy/page.tsx` — Privacy Policy
  - `terms/page.tsx` — Terms (placeholder)
  - `support/page.tsx` — Support (contact + FAQ link)
  - `leaderboard/page.tsx` — Leaderboard marketing page
  - `layout.tsx` — Root layout, metadata, Navbar, Footer
  - `sitemap.ts` — Dynamic sitemap
  - `robots.ts` — Robots.txt
- `components/` — Reusable UI (Navbar, Footer, CTAButton, ScreenshotPlaceholder, AnalyticsPlaceholder)
- `public/` — Static assets: `logo.png` (navbar, footer, OG/Twitter, favicon), `screenshot-1.png`–`screenshot-6.png` (homepage)

## Analytics

Analytics are **off by default**. A placeholder component lives in `components/AnalyticsPlaceholder.tsx`. To enable it:

1. Set `NEXT_PUBLIC_ANALYTICS_ENABLED=true` in your environment.
2. Implement your analytics (e.g. Vercel Analytics, Plausible) inside `AnalyticsPlaceholder`. The component currently renders nothing; add your script or SDK there when ready.

## Tech stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **SEO:** metadata, OpenGraph, Twitter cards, sitemap, robots.txt

No backend is required for this marketing site.
