# Ephtech International — company-first website

A company-first website for Ephtech International Ltd (RC 1216055), a
multi-disciplinary construction, interiors, property and materials company
operating across Lagos, Owerri and Aba.

The site is no longer a single-product microsite. **Ephtech Board** is presented
as one product within a wider company and service offer.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm run start
```

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4
- GSAP + ScrollTrigger for restrained reveals and the loader
- Native scrolling; no scroll-smoothing library
- Fonts: Instrument Sans, Instrument Serif, IBM Plex Mono (via `next/font`)

## Pages

```text
/                         Company home
/about                    Company, process and branches
/services                 Services
/services/[slug]          Individual service pages
/projects                 Selected work across the company
/products                 Products, systems and materials
/board                    Ephtech Board product page
/contact                  Contact and project enquiry
```

## What is real

- Company name, RC number, addresses, phone number and service scope are based on
  the supplied company profile and the owner’s service list.
- Client-supplied photography is presented as completed work where appropriate.
- The services are: design and building projects, road construction, ceiling and
  wall systems, interior finishing, building materials supply, importation,
  real estate and landscaping. Clients can take one service or combine several.

## What is temporary

- The homepage hero is a temporary four-scene stock montage: engineers, a
  furnished apartment, a conference room and a Nigerian villa. It is labelled
  **Illustrative brand imagery** and is not presented as Ephtech project footage.
- The road-construction, importation and landscaping images are temporary stock
  and are labelled **Illustrative**.
- Client project names and locations are withheld pending approval.
- WhatsApp opens a prefilled enquiry for the project team; there is no quote form
  or backend.
- Product dimensions and unconfirmed specifications remain flagged in
  `src/lib/product.ts`.
- Client social graphics and flyers are treated as source information, not site
  photography.

## Documentation

- [`docs/PIVOT_STRATEGY.md`](docs/PIVOT_STRATEGY.md)
- [`docs/MEDIA_INVENTORY.md`](docs/MEDIA_INVENTORY.md)
- [`docs/IMAGE_CREDITS.md`](docs/IMAGE_CREDITS.md)
- [`docs/pivot/visual-direction.jpg`](docs/pivot/visual-direction.jpg)
