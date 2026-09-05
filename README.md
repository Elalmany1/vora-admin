# VORA Admin

VORA's administration dashboard, maintained as an independent Vue 3 + TypeScript + Vite application.

## Local development

```bash
npm install
npm run dev
```

## Vercel deployment

Create a separate Vercel project connected to the admin repository with:

- Framework preset: Vite
- Root directory: `.`
- Build command: `npm run build`
- Output directory: `dist`

Set `VITE_API_BASE_URL` to the backend URL in the Vercel project environment variables.
