# Ephtech pivot: company-first strategy

**Status:** first implementation pass built on 24 November 2026. Company home,
service hub, eight service pages, About, Products and Projects are live in the
codebase. The Ephtech Board remains at `/board` as a product page.

**Visual direction board:** [`pivot/visual-direction.jpg`](./pivot/visual-direction.jpg)

## 1. The shift

The current site is a product microsite for Ephtech Board. The client wants a
company site for **Ephtech International Limited**, with the board positioned as
one product the company sells.

The pivot is therefore about **narrative and structure**, not a full rebrand.
The existing visual identity is a strong asset: paper, forest, amber, Instrument
Serif/Sans, Plex Mono, restrained linework and an editorial grid. We keep that
DNA and change what leads the page.

### Positioning

> **One company. A full range of services.**
>
> Ephtech International plans, builds, finishes, supplies and develops — one
> accountable team across Lagos, Owerri and Aba. Clients can take one service
> or combine several.

The hero now leads with **“One team. From plan to place.”** — a concrete
statement of the company’s range and single-point accountability. The client’s
existing **“…Building a Better Tomorrow”** line can remain as a vision line in
company boilerplate if desired, but it no longer carries the hero.

## 2. Service architecture

The client supplied eight services. The site presents them directly, without
framing them as a mandatory sequence:

| Service | What it covers |
|---|---|
| Design and Building Projects | Concept, design coordination, building projects and delivery |
| Road Construction | Civil works, roads, drainage and external works |
| Ceiling & Wall Systems | Ceiling and wall systems, installation and finishes |
| Interior Finishing | Fit-out, feature walls, staircases, painting and detail work |
| Supply & Installation of Modern Building Materials | Materials supply, systems and installation support |
| Importation of Modern Building Materials | Sourcing and importation of modern materials |
| Real Estate | Property development and real-estate projects |
| Landscaping | External environments, planting and landscape works |

**Ephtech Board** sits inside the Supply/Finish capability as the flagship
product. It gets its own product page, not the homepage.


## 3. Information architecture

```text
/                         Company-led home
/about                    Company, branches, process, credentials
/services                 Eight services
/services/[slug]          Individual service pages
/projects                 Selected work across the company
/products                 Products and systems
/board                    Ephtech Board product page (current URL)
/contact                  Quote and contact
```

The board remains at `/board` for now; an alias at `/products/ephtech-board`
can be added at launch. The main nav becomes:

**Services · Projects · Products · About · Contact** + **Start a project**

## 4. Homepage concept

A company-level editorial page, not a product catalogue:

1. **Hero** — a company film or strong project still. Headline “One team. From
   plan to place.” Subline covering design, construction, interiors, property
   and materials. CTAs: “Explore our services” and “See our work.”
2. **Credibility strip** — RC 1216055 · Lagos, Owerri, Aba · one accountable
   team · eight services.
3. **What we do** — the eight services presented directly, with a note that
   clients can take one service or combine several.
4. **Selected work** — three or four project dossiers with service/sector tags
   and strong imagery.
5. **Products & materials** — a proper product shelf. Ephtech Board is featured
   as one product among other systems and materials.
6. **How we work** — design-to-handover process and one-team accountability.
7. **Company** — story, branches, scale, sectors, people.
8. **Closing CTA** — “Tell us what you’re building.”

## 5. Page templates

### Service page

- Hero media and one-line promise
- Who it is for / what it covers
- Capabilities and deliverables
- Process and materials
- 2–3 related projects
- Related services
- Quote CTA

### Project dossier

- Full-bleed lead image or short film
- Scope, location, sector, year, services used
- 5–10 images / clips, including process and detail
- Outcome and, where approved, client quote
- Next project / related service links

### Product page

- Product hero and product photography
- What it is, where it is used, system components
- Confirmed specifications only
- Installation and finish guidance
- Related project proof
- Quote / specification CTA

## 6. Design direction

**Built-environment editorial.** The confidence of an architectural monograph,
the texture of a site journal, and the clarity of a product catalogue.

### Keep

- Paper / forest / amber palette
- Instrument Serif for company statements and service titles
- Instrument Sans for interface and body
- IBM Plex Mono for project metadata
- Editorial grid, generous margins, grain and restrained linework
- Native scroll and quiet motion

### Evolve

- More full-bleed photography, fewer board diagrams on the homepage
- Larger serif statements; less technical annotation in brand sections
- Full-width image bands, asymmetric editorial grids and contact-sheet
  galleries
- Warm stone/greige as a secondary surface
- Project metadata and captions that make the work feel documented
- One hero film maximum; poster-first media everywhere else

### Avoid

- Generic construction-template imagery
- Using the client’s marketing flyers or social screenshots as site media
- Upscaling low-resolution WhatsApp images into full-bleed heroes
- Multiple autoplay videos on one page
- Scroll-jacking or heavy parallax, especially after removing Lenis

## 7. Media strategy

The library is documentary and mixed-quality. Treat it as evidence, not
decoration.

- **Tier A:** high-resolution images and original video for heroes and
  full-bleed moments.
- **Tier B:** 1080px-class images for cards, split layouts and project galleries.
- **Tier C:** detail crops, low-resolution process shots and material samples.
- **Source only:** flyers, screenshots and social graphics — use for information,
  not as site imagery.

Every media block should answer: **what service or project does this prove?**

See [`MEDIA_INVENTORY.md`](./MEDIA_INVENTORY.md) and the contact sheets in
[`docs/pivot`](./pivot/).

## 8. Content requirements

- Real project names, locations, dates and written client permission
- Verified service descriptions, not invented capabilities
- Confirmed product specifications
- Team/leadership information if available
- Certifications, memberships and HSE information if available
- Testimonials or client quotes only with approval
- Image and video credits, including owner-supplied assets

## 9. Phased plan

1. **Audit and brief** — media inventory, service map, open questions (this doc).
2. **Direction** — visual direction board, homepage wireframe, service-hub
   structure.
3. **Build foundation** — global design system, navigation, homepage, service hub.
4. **Content** — eight service pages, three to four project dossiers, about page.
5. **Products and polish** — product pages, media performance, SEO, accessibility,
   QA and launch.

## 10. Decisions needed

- Confirm the exact public service names. “Olavic” has been replaced with
  “Ceiling & Wall Systems” in the implementation.
- Confirm priority services and sectors.
- Provide real project names, locations and permissions.
- Decide whether Real Estate needs listings or a marketing page only.
- Confirm the board moves to `/products/ephtech-board`.
- Provide the best available originals for hero imagery and film.
