# Fullstack Production App

A production-minded full-stack starter built for the deployment, performance, SEO, and responsive QA pass.

## Architecture

- **Frontend:** Vite + React, optimized for a small client bundle and responsive layouts.
- **Backend:** Node.js + Express REST API.
- **Deployment:** Frontend can deploy to Vercel/Netlify/GitHub Pages; backend can deploy to Render/Railway/Fly.io. `render.yaml` and `vercel.json` are included as deployment blueprints.
- **Configuration:** Frontend reads `VITE_API_URL`; backend reads `PORT`, `CLIENT_ORIGIN`, and `NODE_ENV`.

```text
Browser
  │
  ▼
React/Vite frontend ──────► Express API
  │                           │
  └── static assets            └── /api/health
```

## Local setup

Requirements: Node.js 20+ and npm.

```bash
# frontend
cd frontend
npm install
cp .env.example .env
npm run dev

# backend, in another terminal
cd backend
npm install
cp .env.example .env
npm run dev
```

Frontend: `http://localhost:5173`  
Backend: `http://localhost:4000`

## Production configuration

### Frontend

Set:

```text
VITE_API_URL=https://YOUR-BACKEND-DOMAIN.example.com
```

### Backend

Set:

```text
PORT=4000
NODE_ENV=production
CLIENT_ORIGIN=https://YOUR-FRONTEND-DOMAIN.example.com
```

Never commit real secrets. `.env` files are ignored.

## Deployment

### Frontend

```bash
cd frontend
npm install
npm run build
```

Deploy `frontend/dist` with a static host. `vercel.json` is included for Vercel.

### Backend

```bash
cd backend
npm install
npm start
```

`render.yaml` is included as a Render deployment blueprint.

## Performance / Lighthouse pass

The frontend is intentionally lightweight and includes several fixes for common Lighthouse findings:

1. **Render-blocking / unnecessary JavaScript:** the app uses Vite code splitting and no large UI framework beyond React.
2. **Image optimization:** the hero uses a lightweight inline SVG-style illustration and meaningful `alt` text rather than a large remote image.
3. **SEO:** semantic headings, a unique `<title>`, meta description, canonical URL, Open Graph metadata, and `robots.txt` are included.
4. **Layout stability:** fixed aspect-ratio illustration containers and reserved card space reduce layout shift.
5. **Accessibility:** labeled controls, visible focus states, sufficient semantic structure, and keyboard-friendly navigation are included.
6. **Caching:** static hosting configuration sets long-lived caching for hashed assets.

After the first public deployment, run Lighthouse/PageSpeed against the live URL and record the measured score in this README. A genuine live audit cannot be claimed until a hosting provider has been connected.

## Responsive QA checklist

- [ ] 360px mobile viewport
- [ ] 768px tablet viewport
- [ ] 1280px+ desktop viewport
- [ ] API health check succeeds from the deployed frontend
- [ ] Navigation remains keyboard accessible
- [ ] No horizontal scrolling

## Live URLs

Not deployed yet. Connect the repository to a frontend host and a backend host, then replace the placeholders above with the real URLs.

## Scripts

Frontend: `npm run dev`, `npm run build`, `npm run preview`  
Backend: `npm run dev`, `npm start`
