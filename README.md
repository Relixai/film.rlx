# Relix Film Studio

Production-ready Next.js website for Relix, an AI video production agency.

## Local development

Requirements: Node.js 22.13 or newer.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm ci
npm run build
npm start
```

Set `NEXT_PUBLIC_SITE_URL` to the final public URL so social previews, robots, and sitemap entries use the correct domain.

## Deploy

### Vercel

Import this repository into Vercel. The framework preset, install command, build command, and output settings are detected automatically. Add `NEXT_PUBLIC_SITE_URL` in the project environment variables before the production deployment.

### Any Node host

Run `npm ci`, `npm run build`, and `npm start`. Set `PORT` and `NEXT_PUBLIC_SITE_URL` in the host environment as needed.

## Checks

```bash
npm run typecheck
npm run lint
npm run build
```
