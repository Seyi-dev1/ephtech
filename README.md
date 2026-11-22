# Ephtech International — full-bleed hero variant

A high-fidelity, animated homepage prototype for Ephtech International Ltd (RC 1216055), built to test the visual direction and the WhatsApp enquiry flow before a full site build.

> **Hero variant.** This is a parallel copy of the homepage prototype with a full-bleed image hero. Everything below the hero is shared with the paper-editorial version in the main `ephtech` project. The hero is implemented in `src/components/hero-image.tsx`.

## Run

```bash
npm install
npm run dev -- -p 3001
```

Open [http://localhost:3001](http://localhost:3001). The separate port lets this variant run alongside the paper-hero project.

```bash
npm run build           # production build + type/lint check
npm run start -- -p 3001 # serve the production build
```

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4
- GSAP + ScrollTrigger for scroll motion
- Lenis for smooth scrolling (disabled for reduced-motion users)
- Fonts: Instrument Sans, Instrument Serif, IBM Plex Mono (via `next/font`)

## What is real

- Company name, RC number, addresses, phone number and the six service divisions come from the supplied company profile PDF (`docs/`).
- Ephtech Board positioning, system components and performance claims are drawn from the profile and the strategy brief, but should be **checked with the owner** before launch.

## What is placeholder

- **Photography** is stock imagery used for composition only. The gallery is labelled as illustrative in the UI. Real project and product photography is required before launch.
- **Project names/locations** have been removed from the homepage. Only real, client-approved projects should be added.
- **Email** uses the existing address, `ephtechinternational@yahoo.com`. A branded domain address can replace it at launch.
- **Quote requests** open WhatsApp directly with a prefilled message for the inventory team (`+234 803 251 9288`). There is no quote form, local storage, reference number or email API.
- Product dimensions and other unconfirmed specifications live in `src/lib/product.ts` with a `confirmed` flag. Unconfirmed values are not published in the UI or structured data.

## Structure

```
src/
  app/
    layout.tsx        fonts, metadata, header/footer chrome
    page.tsx          homepage argument and conversion path
    board/page.tsx    product detail, applications, specification, FAQ
    services/page.tsx six divisions and five-step process
    projects/page.tsx site-work gallery and application grid
    contact/page.tsx  branch map, addresses and contact channels
    globals.css       tokens, type scale, textures, motion boot states
  components/
    header.tsx        fixed nav, scroll capsule, full-screen menu
    page-intro.tsx    shared page header for detail routes
    hero-image.tsx    full-bleed image hero
    motion.tsx        Lenis + GSAP timelines and scroll triggers
    quote-button.tsx  WhatsApp quote link with a prefilled message
    system-components.tsx  system list with a WhatsApp enquiry link
    comparison.tsx    five-point material comparison
    work-rail.tsx     early product and site-work image rail
    nigeria-map.tsx   branch map (generated from GeoJSON)
    board-visual.tsx  technical cross-section illustration
  lib/data.ts         services, branches, process data
  lib/applications.ts uses and sectors
  lib/faqs.ts         full FAQ plus the home-page shortlist
  lib/systems.ts      system components for the supply list
  lib/product.ts      single source of truth for product specifications
  lib/whatsapp.ts     number and prefilled WhatsApp messages
  assets/images/      illustrative photography plus owner-supplied installation and office images
```

## Next steps

1. Replace illustrative photography and add real project references.
2. Redraw the logo as a proper vector (the current mark is a prototype).
3. Confirm product specifications and claims with the owner. Use
   `docs/CLAIMS_REGISTER.md` as the checklist.
4. Add `NEXT_PUBLIC_SITE_URL` to the deployment environment.
5. Add WhatsApp click analytics if you want to measure quote intent.
6. Add Paystack for proforma payments.
7. Add an About page from the company profile. The Board, Services, Projects and Contact pages now exist.
8. Move product/project content into a CMS (Sanity was the recommended option).
