# Lyft x SpaceXAI

Password-protected GTM leave-behind for Lyft. The page shows three illustrative partnership workflows, a named agent fleet, interactive Grok Bot demos, and sourced public testimonials.

## Run locally

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The default password is `land2expand`. Set `SITE_PASSWORD` to override it.

## Demo clips

Download the clips into `private/media/krista-clips/`. The app serves them through the password-protected `/api/media/...` route.

```bash
gh release download krista-gtm-clips-720p-2026-08-26 \
  --repo Speediing/grok-bot-quotes \
  --dir private/media/krista-clips
```

## Lyft wordmark

The lockup uses the current 2025 Lyft wordmark from Lyft's official media kit. The local transparent PNG was extracted from a server-rendered copy of the exact SVG below because this environment could not complete a direct TLS connection to Lyft or Wikimedia.

`https://upload.wikimedia.org/wikipedia/commons/6/63/Lyft_logo_2025.svg`

The file metadata credits Lyft, Inc. and `lyft.com`. Do not replace it with the old connected `f` and `t` mark or an icon-library version.

## Deploy

Use the customer slug `lyft`. Deploy to the Vercel project `lyft-grokbot` at [lyft-grokbot.vercel.app](https://lyft-grokbot.vercel.app). Set `SITE_PASSWORD=land2expand`.
