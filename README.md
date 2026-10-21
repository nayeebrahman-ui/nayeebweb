# nayeebweb

Nayeeb Rahman's portfolio: an anime-story, motion-heavy site for hiring, consulting and project partnerships.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Node.js API routes · GSAP + ScrollTrigger · Lenis · Resend (email) · Zod (validation). Hosted on Vercel.

## Run it

```bash
npm install
cp .env.example .env.local   # optional: add RESEND_API_KEY to make the contact form send email
npm run dev                  # http://localhost:3000
npm run build && npm start   # production build
```

## How it's put together

```
app/
  layout.tsx            <html>, metadata / social preview, fonts, global CSS
  page.tsx              the whole site: header, all page sections, footer
  api/contact/route.ts  POST /api/contact - validates and emails contact-form messages
  icon.svg              favicon
components/
  chrome/               SvgDefs (icon sprite), SiteHeader (nav, mobile sheet, wipe), SiteFooter
  pages/                HomePage, WorkPage, CasePage, HirePage, ConsultingPage,
                        PartnerPage, AboutPage, ContactPage, LostPage (404)
  SiteRuntime.tsx       client component that boots the motion runtime after hydration
lib/
  runtime/site.js       motion + interaction runtime (router, chapter wipe, hero frames,
                        LIVE canvas effects, smooth scroll, case-study data and rendering)
  server/contact.ts     contact schema, email template, rate limit
styles/                 global CSS, imported in the original cascade order
public/                 images, videos and scroll-frame sheets
scripts/convert-markup.mjs  one-time helper used to move the old static markup into TSX
```

**Pages are hash routes** (`/#hire`, `/#case-apple-gadgets` ...). All sections are server-rendered in one document and the runtime shows one at a time with the chapter-wipe transition, exactly like the original site.

## Contact form back end

`POST /api/contact` with `{ intent, fields: { name, email, msg, company?, role?, budget?, start? } }`.

- Validates with Zod, drops bot submissions (hidden `company_site` field), rate-limits per IP.
- Sends the message to `CONTACT_TO_EMAIL` through Resend, with Reply-To set to the visitor.
- Without `RESEND_API_KEY` it returns `503 not_configured` and the page falls back to "copy message / open in email", so no message is lost.

Environment variables are listed in `.env.example`. Set them in Vercel under Project > Settings > Environment Variables.

## Content rules

- Never invent facts. Anything missing is shown as "To add".
- Every user-supplied image is logged in `USER-ASSETS.md`; locked placements are not overwritten.
- Mobile-first, respects reduced motion, no text overlap, checked at 390 px and 1440 px.
