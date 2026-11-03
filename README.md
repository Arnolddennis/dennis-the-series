# Dennis — The Series

Dennis David’s cinematic portfolio, adapted from [Portfolio_series](https://github.com/abishekvr0910/Portfolio_series). Retains its opening sequence, profile chooser, Framer Motion transitions, Lenis smooth scrolling, horizontal project rail, and responsive layouts.

Content comes from Dennis’s existing portfolio and the three linked public Azure project READMEs. Portrait and CV are preserved from the original Site. AWS is described as foundational exposure. Project highlights describe implementations rather than live production measurements.

Live portfolio: [Dennis — The Series](https://dennis-david-cloud-portfolio.dennisdavid.chatgpt.site/)

## Development

Install Node.js 22+ and run `npm ci`, then `npm run dev`. Run `npm run images` after replacing `public/assets/dennis-david.png`. Run `npm run build` for a TypeScript check and production build into `dist/`.

Edit `src/data/portfolio.ts` for personal content. Contact links open the visitor’s email client or the linked profiles; the site collects no form data.

## Vercel

Import `Arnolddennis/dennis-the-series` with the repository root as the Root Directory. `vercel.json` declares the Vite preset, `npm ci` installation, `npm run build`, and `dist` output. No environment variables are required. Use `main` as the production branch.
