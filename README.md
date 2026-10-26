This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy to Cloudflare Workers

This project runs on Cloudflare Workers through [vinext](https://vinext.dev). `next build` is still available for local use, but Cloudflare builds must use the Vite/vinext pipeline.

### Requirements

- Node.js **22.23.2** (pinned in `.node-version` and `.nvmrc`). Older 22.x releases cannot load `cloudflare.config.ts`, and `cf` does not support Node 24.21.0.
- npm **11.14.0** (pinned with the `packageManager` field, matching the version that wrote `package-lock.json`).

```bash
nvm use            # or: fnm use
npm ci
```

### Cloudflare Workers Builds (Git integration)

In the Worker's **Settings → Build → Build Configuration**, use:

| Setting | Value |
| --- | --- |
| Build command | `npm run build:vinext` |
| Deploy command | `npm run deploy:vinext:prebuilt` |

The default `npm run build` runs `next build`, and the default `npx wrangler deploy` cannot read vinext's Cloudflare Build Output, so neither can be used for this project.

Add these to **Settings → Build → Variables and Secrets**:

- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` — needed at build time and runtime.
- `RESEND_API_KEY` — runtime secret for the contact form.

### Local / CLI deployment

```bash
npx cf auth login            # or set CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID
npm run build:vinext
npm run deploy:vinext        # builds and deploys in one step
```

The Response Store cache runs in self-contained mode inside this Worker, so there is no separate cache Worker to deploy; `cf deploy` creates the `level-construction-response-store-cache-bodies` R2 bucket on first deployment.
