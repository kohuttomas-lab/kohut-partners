# kohút & partners — web

Production rebuild of the design handoff (`design_handoff_web.zip`) for the
**kohút & partners** law firm (advokátska kancelária, Zvolen). Bilingual
marketing site (SK primary / EN) plus a legal e-shop.

Built with **Next.js 16 (App Router) + TypeScript**, **next-intl** for i18n,
and CSS Modules over the handoff's design tokens. Self-hosted Poppins + Mulish.

## Getting started

```bash
npm run dev      # dev server (the project's launch.json uses port 3200)
npm run build    # production build (prerenders all routes for sk + en)
npm run start    # serve the production build
npm run lint     # eslint
```

Open http://localhost:3000 (or 3200 via the preview launch config).

## Internationalisation

- **Slovak is the default locale, served without a prefix** (`/`, `/sluzby`, …).
- **English is served under `/en`** (`/en`, `/en/services`, …).
- Routes use **localized pathnames** (`src/i18n/routing.ts`): the file-system
  routes are canonical (`/services`, `/shop`, …) and next-intl maps them to the
  Slovak/English slugs.
- `localeDetection` is **off** on purpose — Slovak URLs always serve Slovak and
  the language switcher controls the locale (the audience is primarily Slovak).
- Always navigate with `Link`/`useRouter` from `@/i18n/navigation`, never
  `next/link`, so localized pathnames resolve.

| File-system route | Slovak URL | English URL |
|---|---|---|
| `/` | `/` | `/en` |
| `/services` | `/sluzby` | `/en/services` |
| `/services/[id]` | `/sluzby/[id]` | `/en/services/[id]` |
| `/shop` | `/e-shop` | `/en/shop` |
| `/about` | `/o-kancelarii` | `/en/about` |
| `/blog`, `/blog/[id]` | `/blog`, `/blog/[id]` | `/en/blog`, … |
| `/contact` | `/kontakt` | `/en/contact` |

> Next.js 16 note: Middleware is now **Proxy** — the next-intl request handler
> lives in `src/proxy.ts` (not `middleware.ts`).

## Project structure

```
src/
├─ app/[locale]/        # pages: home, services(+[id]), shop, about, blog(+[id]), contact
├─ components/
│  ├─ ui/               # Button, Card, Input, Select, Checkbox, Badge, Avatar (token-based)
│  ├─ layout/           # Header, Footer, CTABand, Section (Container/Overline/SectionHead), PageHero, LanguageSwitch
│  ├─ sections/         # HomeHero, Stats, ServicesGrid/List, Process, TeamSection, ArticleCard, BlogPreview, FaqItem, ContactForm, ServiceIcon
│  ├─ booking/          # BookingProvider, BookingModal, BookingButton
│  └─ shop/             # CartProvider, CartBar, CheckoutModal, AddToCartButton, FixedPackages, Templates, SubscriptionPlans, References
├─ i18n/                # routing, navigation, request
├─ lib/                 # content.ts (all domain data), format.ts, cx.ts
└─ styles/tokens/       # colors, typography, spacing, fonts, base (from the handoff)

messages/               # sk.json, en.json (UI chrome strings)
public/                 # fonts, logo, team photos
```

Copy lives in two places (mirroring the handoff): UI chrome in `messages/*.json`,
structured domain content (services, team, blog, subscriptions, templates) in
`src/lib/content.ts`.

## What's implemented

- All 7 page types, fully bilingual, pixel-faithful to the handoff (navy/red,
  Poppins/Mulish, 4px grid, soft navy-tinted shadows, `prefers-reduced-motion`).
- E-shop UI with a working **cart** (localStorage-persisted) and a **checkout
  modal** — the payment step is a simulated flow (see below).
- **Booking modal** — 3-step flow (type → area + date/time → details), with the
  date picker generating upcoming business days. Simulated confirmation.
- Contact form with client-side validation and a simulated "sent" state.
- SEO metadata + per-page titles/descriptions; brand favicon (`src/app/icon.svg`).

## Not yet wired (pending accounts / API keys) — handoff §8

These are **simulated** in the UI and need real integrations + credentials:

| Area | Current | To wire |
|---|---|---|
| Booking | fake 3-step modal | **Cal.com** (online + in-person, €60 prepay) |
| Payments (e-shop, subscriptions) | fake checkout | **Stripe** (cards, Apple Pay, subscriptions) |
| Downloadable templates | fake | files behind a paywall (Stripe webhook → signed URL) |
| Contact form | `setSent(true)` | API route + **Resend** + anti-spam |
| Blog / team / services content | typed data in `content.ts` | **headless CMS** (Sanity / Payload) |
| Cookies / GDPR | — | consent banner + real legal documents |

## Still TODO (content/assets)

- **Legal pages** (Ochrana údajov / Obchodné podmienky / Cookies) exist as
  structured **working drafts** (bilingual, real firm identity) under
  `/ochrana-udajov`, `/obchodne-podmienky`, `/cookies` and are linked from the
  footer — the firm should review and finalize the wording before publishing.
- **Team photos** for everyone except Tomáš (others show monogram avatars).
- **Real client logos** for the references strip (placeholders now).
- `metadataBase` is set to `https://www.tkak.sk` — update to the final domain.

## Notes

- The blog author byline was corrected from the prototype's "Martin Kohút" to
  **Tomáš Kohút** (the verifiable principal per the handoff).
- Real contact data (address, phones, e-mail, IČO, SAK no. 3901) is in
  `src/lib/content.ts` and `messages/*.json`.
