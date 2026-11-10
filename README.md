# Moonflare Development

Portfolio website for **Victor Henrique Vituali** (Moonflare Development), built with Next.js, TypeScript, and Tailwind CSS, exported as a static site for Firebase Hosting.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Static export (`output: 'export'`) — no SSR, no server actions, no runtime API routes
- Firebase Hosting (`public: out`)

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Quality checks

```bash
npm run lint
npm run build
```

`npm run build` generates the static site in `out/`.

## Deploy (Firebase Hosting)

Prerequisites: a Firebase project and the Firebase CLI (`npm install -g firebase-tools`).

1. Authenticate and select the project:
   ```bash
   firebase login
   firebase use <your-firebase-project-id>
   ```
   Update `.firebaserc` with the real project ID (currently set to a placeholder `moonflare-dev`).

2. Build and deploy:
   ```bash
   npm run build
   firebase deploy --only hosting
   ```

## Custom domain

Target domain: **moonflare.com.br**.

- Configure the custom domain in Firebase Hosting (Console → Hosting → Add custom domain) and follow the DNS records Firebase provides.
- DNS is **not** assumed to be configured in this repo; complete it in your DNS provider.
- `metadataBase`, canonical URLs, sitemap, and robots are configured for `https://moonflare.com.br`.

## CI/CD

A GitHub Actions workflow (`.github/workflows/ci.yml`) runs install, lint, and static build on pushes/PRs to `main`. To enable automatic deploys, add a deploy step with a Firebase token or service account secret (do not commit credentials).

## Content & integrity

Project and profile content lives in `src/lib/content.ts`. Case studies are based on verified repositories/profile information; private/confidential details are intentionally omitted and unavailable evidence is disclosed.
