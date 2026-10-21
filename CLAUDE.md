# Working on this repo

Portfolio for Nayeeb Rahman. Next.js 16 + TypeScript, deployed on Vercel. See README.md for structure.

## Rules (from the owner)
- Keep everything that already works exactly as it is. Change only what is asked.
- Never invent facts, numbers, clients or dates. Missing content is marked "To add".
- No franchise characters, outfits, symbols or marks in any artwork.
- Mobile-first. Check every change at 375/390 px and 1440 px: no horizontal overflow, no overlapping text.
- Respect `prefers-reduced-motion` (show stills, no scroll-scrubbing).
- Pictures should move: layered fg/bg plus canvas LIVE effects (`data-live` slots, `LIVE` registry in lib/runtime/site.js).
- Record every user-provided asset in USER-ASSETS.md and never overwrite locked placements.
- Design quality bar: Emil Kowalski's design-engineering skills, impeccable, and taste-skill.
- Never commit secrets. API keys live only in environment variables (.env.local / Vercel).

## Architecture notes
- All page sections render on `/`; the runtime (`lib/runtime/site.js`) routes on the URL hash and runs the chapter-wipe transition. Page DOM lives in `components/pages/*.tsx`.
- The runtime is imperative DOM code ported from the original static site. React renders the markup once; the runtime owns behaviour after hydration. Don't add React state to nodes the runtime mutates.
- Hero/section videos are drawn from frame sheets in `public/*frames/` (12 sheets x 10 frames) on desktop; phones play the mp4 once; reduced motion shows the still.
- Contact form posts to `app/api/contact/route.ts` (Resend). Falls back to copy / open-in-email if not configured.
