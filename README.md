# IYAPPAN S. — Cinematic Developer Portfolio

React + Vite + TypeScript + Tailwind CSS v4, Framer Motion, GSAP, Lucide React.

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
```

## Deploy to Vercel
Import this folder in Vercel (framework preset: Vite). No environment variables required.

## Resume download
Place the real resume PDF at `public/resume.pdf` — every Download Resume button links to `/resume.pdf`. See `public/RESUME-README.txt`.

## Contact form
The form composes a pre-filled email via `mailto:` to iyappan0638@gmail.com (no fake success state). To switch to a hosted form backend (Formspree / Resend / your own API), replace the `submit` handler in `src/components/Contact.tsx`.
