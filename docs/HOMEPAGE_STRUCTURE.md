# Company-first site structure

**Status:** first implementation pass, 24 November 2026.

The site has pivoted from an Ephtech Board microsite to a company-first website
for Ephtech International Limited. The board remains a product page.

## Routes

```text
/                         Company home
/about                    Company, process and branches
/services                 Services
/services/[slug]          Individual service pages
/projects                 Selected work across the company
/board                    Ephtech Board product page
/contact                  Contact and project enquiry
```

## Homepage

1. **Hero** — company-level film/still, “Success through Excellence”, services
   and work CTAs.
2. **Credibility band** — RC number, branches and one-team accountability.
3. **What we do** — the services presented directly, with a note that clients
   can take one service or combine several.
4. **Selected work** — four project cards spanning interiors, construction and
   real estate, labelled as completed work.
5. **Products & materials** — Ephtech Board featured as one product within the
   wider range.
6. **How we work** — four working principles and a full-width site-team image.
   No fixed sequence or mandatory package.
7. **Branches** — Nigeria map and the three branch addresses.
8. **Closing CTA** — start a project / download company profile.

## Services

- Design & Building Projects
- Road Construction
- Interior Finishing
- Supply & Installation of Building Materials
- Importation of Modern Building Materials
- Real Estate
- Landscaping

The site does not present these as a mandatory sequence. Clients can scope one
service or combine several.

## Media rules

- Client-supplied photography is labelled **Completed work** or **Client site**.
- Temporary stock images are labelled **Illustrative**.
- Marketing flyers and social screenshots are not used as site photography.
- No invented project names, clients or locations.
- Client media remains at `~/Desktop/ephtech-media/`; categorised copies live in
  `_sorted/` with a manifest. Production assets are copied into
  `src/assets/images/`.

## Motion rules

- Native scrolling; no Lenis or scroll-jacking.
- GSAP is limited to the loader, hero entrance, and one-time section reveals.
- The topnav only fades its milk background on scroll; no height or position
  movement.
- Reduced-motion users get static content.

## Pending

- Confirm the exact public service names.
- Replace illustrative hero / road / import / landscape media with client
  originals when available.
- Add project names and locations once written permission is supplied.
- Confirm whether Real Estate needs property listings.
- Finish the image-credit and claims review before launch.
