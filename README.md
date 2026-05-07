# RippleHouse — Marketing Site

Static marketing site for RippleHouse, built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/), deployed to [Netlify](https://www.netlify.com/).

## What's here

A single-page marketing site (`/`) plus a contact page (`/get-in-touch`) and form-success page (`/thank-you`). Content is hardcoded inside the components — no CMS.

Landing page sections, in order:

1. **Hero** — headline, tagline lockup, primary CTA
2. **About us** — operator-first manifesto (full-bleed yellow)
3. **What we do** — three service cards
4. **How it works** — elevator-pitch single sentence (full-bleed yellow)
5. **Operating model** — four-step process detail
6. **Team** — three member cards
7. **CTA banner** — closing call to action (full-bleed teal)

## Quick start

```bash
npm install
npm run dev          # dev server on http://localhost:4321
npm run build        # static build to ./dist
npm run preview      # preview the built site
```

Node 20+ recommended (matches `netlify.toml`).

## Brand

Sourced from `CLAUDE.md` and the official one-pager guide:

| Token              | Value                |
| ------------------ | -------------------- |
| Ripple Yellow      | `#FFF77E`            |
| Ripple Teal        | `#0AEBDC`            |
| Black              | `#000000`            |
| White              | `#FFFFFF`            |
| Display typeface   | Europa Bold          |
| Mono typeface      | Coordinates Regular  |

Color distribution across the page is roughly **50% white / 35% yellow / 15% teal**, per the brief.

### Fonts — important

Europa Bold and Coordinates Regular are commercial. Until web licenses are confirmed, the site falls through to **Manrope** and **JetBrains Mono** (free, via Google Fonts) as visually adjacent stand-ins. The `font-family` declarations already prefer the brand names — once the actual fonts are wired in, they take precedence automatically.

To enable the official typefaces:

1. **Europa**: provision an Adobe Fonts kit, then uncomment the `<link>` tag in `src/layouts/Base.astro`.
2. **Coordinates**: drop the licensed `.woff2` into `public/fonts/coordinates-regular.woff2`, then uncomment the `@font-face` block at the top of `src/styles/global.css`.

No further changes are needed.

## Editing content

All copy lives in `.astro` component files (no CMS):

| Section          | File                                       |
| ---------------- | ------------------------------------------ |
| Header / nav     | `src/components/Header.astro`              |
| Hero             | `src/components/Hero.astro`                |
| About            | `src/components/About.astro`               |
| What we do       | `src/components/WhatWeDo.astro`            |
| How it works     | `src/components/HowItWorks.astro`          |
| Operating model  | `src/components/OperatingModel.astro`      |
| Team             | `src/components/Team.astro`                |
| Closing CTA      | `src/components/CtaBanner.astro`           |
| Footer           | `src/components/Footer.astro`              |
| Contact page     | `src/pages/get-in-touch.astro`             |
| Thank-you page   | `src/pages/thank-you.astro`                |

The team and services sections each have a JS array at the top of the component — edit that to update content; the JSX renders from it automatically.

## Team photos

Currently rendering placeholder yellow squares with member initials and a subtle ripple-pattern overlay (final design, just waiting on assets). To swap in real headshots:

1. Drop images at `public/team/victor.jpg`, `public/team/thibaud.jpg`, `public/team/stephane.jpg` (any aspect ratio works — the wrapper is `aspect-[4/5]`).
2. Replace the initials block in `src/components/Team.astro` with `<img src={member.photo} alt={member.name} class="absolute inset-0 w-full h-full object-cover" />` and add a `photo` field to each entry in the `team` array.

## Contact form

Uses [Netlify Forms](https://docs.netlify.com/forms/setup/) — no third-party service needed. Submissions appear in the Netlify dashboard.

- The form is named `contact` (`name="contact"` on the `<form>` element).
- A honeypot field (`bot-field`) catches bot submissions silently.
- On success, the user is redirected to `/thank-you`.
- To set up email notifications, configure a notification in **Netlify → Site settings → Forms → Form notifications**.

## Deployment

Connect the repo to Netlify; the `netlify.toml` handles build settings. Set the custom domain to `ripplehouse.ca` in **Netlify → Domain settings**.

## Logo files

The eight original brand logo PNGs are under `public/logos/`. The four currently used by the site:

- `ripplehouse-logo.png` — header (color, light backgrounds)
- `ripplehouse-logo-white.png` — footer (white, dark backgrounds)
- `ripplehouse-icon.png` — favicon source
- `ripplehouse-logo-vertical.png` — available for future use

## Open content questions

See the **Open Questions** section at the bottom of `CLAUDE.md` for items that still need Victor's input — Europa weight licensing, real team headshots and titles, French translation if the site goes bilingual, etc.
