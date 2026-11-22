# Ephtech International — Website Strategy & Build Brief

Source: `Ephtech_International_Ltd_Company_Profile.pdf` (3 pages)
Prepared: 13 Nov 2026

---

## 1. What the document actually says

**Company:** Ephtech International Limited, RC 1216055.
**Footprint:** Lagos (Km 36 Lekki–Epe Expressway, Kajola Bus Stop, Ibeju-Lekki), Owerri (Suite 9, Graylite Plaza, Area L, World Bank), Aba (No. 8 Okigwe Road).
**Contact:** +234 803 251 9288 (WhatsApp), ephtechinternational@yahoo.com, ephraimin2008@yahoo.com.

**Two businesses under one roof:**

| Business | What it sells | Buyer | Sales cycle |
|---|---|---|---|
| **Ephtech Board** | Engineered boards + ceiling/partition systems | Architects, developers, contractors, distributors, homeowners | Days–weeks, repeat |
| **Construction services** | Contracting, civil/structural, QS, interiors, real estate | Developers, institutions, private clients | Weeks–months, tender/relationship |

Six service divisions: materials supply, interior finishing, general contracting, civil & structural, quantity surveying, real estate development.

**The strongest asset in the document** is not "premier" or "multi-disciplinary." It is:

> **Single-point accountability** — you buy the board *and* the team that installs it.

That is a genuine differentiator against both POP artisans and gypsum merchants. The website should be built around it.

**Brand observed:** deep green + amber, a stylised lowercase "e" mark. The logo is raster/low-resolution and must be redrawn as SVG. The palette is good — it reads agricultural/government at the moment because of the flat green; it needs to be pushed darker and more material.

**Immediate credibility problem:** `@yahoo.com` addresses. A company claiming to be "premier" cannot transact B2B from Yahoo. Fix the domain and email *before* launch.

---

## 2. Strategic read

### The wedge
Ephtech Board is the only scalable, repeatable, productised revenue line. Contracting is project-based and lumpy. The website's job is:

1. Make **Ephtech Board** feel like a real engineered system, not a commodity board.
2. Convert that attention into **quote requests** and **specifier downloads**.
3. Use the services division as proof of competence and a second revenue path.

### The positioning
Do not compete on "quality materials." Everyone says that. Compete on **outcome + accountability**:

- POP cracks. Gypsum fails in humidity. **Ephtech doesn't — and we install it.**
- "One supplier, one installer, one warranty."
- "Specified, supplied and installed by the same team."

### The audiences (in priority order)
1. **Contractors & developers** — need availability, price, delivery speed, credit terms.
2. **Architects / specifiers** — need dimensions, performance data, CAD/datasheet, system build-ups.
3. **Homeowners** — need inspiration, reassurance, a WhatsApp number, a price range.
4. **Distributors** — need wholesale terms and coverage.

The site must serve 1 and 2 properly. 3 and 4 are served by clear paths, not by diluting the message.

---

## 3. The commerce decision — the most important call

**Do not build a conventional checkout at launch.**

Reasons:
- Boards are bulky, low-value-per-kg, and delivery is quoted per site.
- Prices move with FX; a public price list becomes stale and creates disputes.
- B2B buyers purchase by quote, proforma invoice and purchase order — not by card.
- Most Nigerian building-material transactions close on WhatsApp.
- A half-working checkout damages trust more than no checkout.

### The commerce ladder

| Level | What it is | When |
|---|---|---|
| **L0** | Brochure + contact form | Not enough |
| **L1 — launch** | Catalogue + **quote cart** + WhatsApp handoff + downloadable datasheets | Now |
| **L2 — 4–8 weeks post-launch** | Proforma invoice PDF, deposit payment (Paystack), delivery-zone estimator | Once pricing policy is stable |
| **L3 — only if justified** | Full checkout, stock sync, distributor portal | Only with a real retail/warehouse operation |

**The quote cart is the ecommerce.** User adds products, sets quantities, adds project details, and the site compiles a structured message sent to email **and** opens WhatsApp pre-filled. That single feature delivers 90% of the ecommerce value with 10% of the risk.

**Price display:** default to "Request price" or "From ₦—" per product, with an admin toggle. Never publish a full price list you can't maintain.

---

## 4. Site architecture

```
/                       Home
/board                  Flagship product (the hero page)
/products               Catalogue (boards, grids, channels, studs, compounds, fasteners)
/products/[slug]        Product detail
/services               Six divisions (overview)
/services/[slug]        Optional detail pages (start with 3: interiors, contracting, civil)
/projects               Filterable portfolio
/projects/[slug]        Case study
/about                  Story, vision/mission, team, RC, certifications
/locations              Lagos / Owerri / Aba + maps + delivery zones
/quote                  Multi-step quote request (also a drawer globally)
/downloads              Datasheets, installation guide, BOQ template
/insights               Journal (SEO; launch with 3 posts)
/contact                Form + WhatsApp + phone
/privacy, /terms        NDPA 2023 compliance
```

Optional later: `/trade` (distributor programme), `/careers`, `/calculator`.

### Navigation
Minimal fixed bar: wordmark left; quote access + **Menu** pill right. The menu opens a
full-screen forest takeover — The Board, Systems, Services, Projects, Process, Contact,
plus phone, email, WhatsApp, branches and the quote CTA. On scroll the bar condenses
into a centred paper capsule. This variant starts with a light wordmark and a glass
Menu pill over the full-bleed hero photograph; the paper capsule takes over after
scroll. Mobile keeps the wordmark + Menu pill; quote stays available in the menu and
the bottom action bar.

---

## 5. Page blueprints

### Home (in order)
1. **Fixed navigation** — wordmark, quote access, hidden menu. RC number, branches and
   phone live in the menu footer/meta column.
2. **Hero** — full-bleed interior photograph with a forest wash that keeps the image legible under the type. Oversized two-line statement ("Built for *durability*.") in paper with an amber serif-italic accent, revealed by a diagonal slash wipe. Two glass value tags ("Moisture-resistant", "Dry install · 0 curing"), a one-line subhead, and the CTAs sit over the image. A technical glass plate on the right names the board, dimensions and the setting. The foot of the hero is a translucent spec facts bar (`12.5 mm · 1200 × 2400 · Moisture-resistant · 0 hrs`) and the slow capabilities marquee. Light wordmark and glass Menu pill at the top; cream capsule on scroll.
3. **Proof strip** — 3 branches, years active, m² supplied, projects delivered. Real numbers only. Count-up on view.
4. **The problem** — "POP cracks. Gypsum swells. Both cost you twice." Three short points with macro imagery. Editorial, lots of whitespace.
5. **Flagship intro** — Ephtech Board as a material study: edge profile, core, surface. Three pillars: strength, moisture, speed. Link to `/board`.
6. **Interactive comparison** — POP vs Gypsum vs Ephtech across durability, moisture, speed, finish, lifecycle cost. Tabs or drag slider. This is the most persuasive section on the site.
7. **Applications** — one axonometric room cutaway, **One room, four studies**, building up through four cumulative layers: suspended ceiling → partition → feature wall → turnkey fit-out. Numbered tabs (roving tabindex, arrow keys) drive the layer build, alongside a 4:3 photography plate and the study copy. The stage is a static drawing on an architectural grid — no rotation, no 3D viewer, no scroll-jacking. Ghost layers show what is still to come; reduced motion shows the complete stack at rest.
8. **Services** — six numbered divisions, accordion, each with 3 deliverables.
9. **Projects** — 3 featured case studies with sector + system tags.
10. **Process** — Specify → Quote → Supply → Install → Handover. Animated connecting line.
11. **Testimonial / client logos** — only when real.
12. **Locations** — stylised map, 3 nodes, addresses, delivery note.
13. **Lead magnet** — "Download the Ephtech Board spec sheet" (ungated for specifiers).
14. **Footer** — full NAP, RC, socials, privacy, credit.

### `/board` (the money page)
Sticky sub-nav: Overview · Performance · Applications · Systems · Specs · FAQ.
Sections: hero with key specs and dual CTA → material macro gallery → performance table → applications → **system builder** (choose ceiling/partition/cladding → recommended components) → installation in 5 steps → comparison → downloads → FAQ → related products → CTA band.

### `/products`
Filters: category, application, thickness, fire/moisture rating. Search. Grid/list toggle. Quick "add to quote." Stock status. No price by default.

### `/projects`
Filter by sector (residential, commercial, hospitality, institutional) and service. Each case study: brief, challenge, system used, scope, result, gallery. Link systems back to products — this is how content sells product.

### `/quote`
Three steps: items → project (type, location, stage, timeline) → contact. Progress indicator, saveable, WhatsApp fallback at every step. Confirmation screen with reference number.

---

## 6. Conversion system

**Primary CTA:** Request a quote.
**Secondary CTAs:** Download spec sheet · Talk to an engineer · Book a site visit · Become a distributor.

- Sticky mobile bottom bar: **Call · WhatsApp · Quote**.
- WhatsApp deep links with pre-filled context: `wa.me/2348032519288?text=...`
- Every product page has "Add to quote" and "Download datasheet."
- Forms: 3 fields max on first screen; progressive disclosure. Server-side validation, honeypot + Cloudflare Turnstile, rate limiting.
- Leads stored (Sanity/Supabase) + emailed via Resend. Never rely on `mailto:`.
- Response promise: "We reply within one business day." Then honour it.

---

## 7. Brand & art direction

### Palette (refined from the logo)
| Token | Hex | Use |
|---|---|---|
| Ink | `#101512` | Body text on light |
| Deep Forest | `#0B2B20` | Dark sections, hero overlay |
| Ephtech Green | `#1E7A45` | Primary brand, links, accents |
| Amber | `#E9A23B` | CTAs, highlights, active states |
| Paper | `#F7F4EC` | Page background |
| Stone | `#E6E0D2` | Cards, dividers |
| Line | `#D6CFBE` | Hairlines, technical grid |

Light-dominant with **two or three dark chapters** (hero, comparison, footer). Never dark everywhere.

### Typography
- **Display / UI:** Instrument Sans (free) or General Sans. Tight tracking (`-0.03em`), weights 500–600.
- **Body:** Inter, 16–18px, 1.6 line height.
- **Data / labels:** IBM Plex Mono — specs, dimensions, numbers, section labels. This is what makes it read *engineered* rather than *agency*.
- **Accent:** Instrument Serif italic, one pull-quote per page maximum.

Avoid: Poppins, Montserrat, generic geometric sans, gradient text.

### Graphic system
- Hairline rules and dimension lines borrowed from architectural drawings; no tiled grid overlays.
- Numbered sections (`01 — Materials`).
- Spec tables as a design element, not an afterthought.
- 2–3% film grain on dark sections; tonal scrims and gradients instead of blueprint grids.
- Generous margins. Whitespace is the luxury signal.

### Photography
Real projects only. No stock hardhat photos.
Grade: warm highlights, deep green shadows, slightly desaturated, consistent across the site.
Crops: 3:2 for editorial, 4:5 for cards, 1:1 for material macros.

---

## 8. Motion system

**Principle:** engineered, not entertaining. Motion should feel like precision machinery — short, eased, purposeful. If a visitor notices the animation before the content, it's wrong.

| Parameter | Value |
|---|---|
| Easing (entrance) | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Easing (mask) | `cubic-bezier(0.65, 0, 0.35, 1)` |
| Duration | 500–900ms |
| Stagger | 60–80ms, max 8 items |
| Trigger | `top 85%`, once for text |
| Parallax | max 8% translate, desktop only |
| Slash reveal | diagonal `clip-path` wipe on hero statement & spec bar |

**Included:**
- Intro loader: the wordmark rises in from below, one character at a time (masked `yPercent: 120 → 0`, stagger 0.05); after a beat the forest curtain collapses upward (`height: 100% → 0%`, 1.2s, `cubic-bezier(0.65, 0.05, 0, 1)`) revealing the page bottom-up while the nav fades in. Reduced motion skips it.
- Line-by-line headline mask reveal on load.
- Clip-path image reveals on scroll.
- Pinned product chapter: image swaps as copy scrolls (3 steps).
- Count-up stats, once.
- Line-draw for process/technical diagrams.
- Room studies: base geometry draws in on first view (`stroke-dashoffset`, 1.1s), dimensions fade at 0.55s, and the active layer draws over 0.7s with a 4–10px settle. Changing study ghosts future layers to 10–18% and draws the selected one. Reduced motion renders the complete stack at rest.
- Nav hide-on-scroll-down, show-on-scroll-up.
- Page transition: 250ms fade + 8px rise (View Transitions API where supported).
- Hover: image scale 1.03, caption slide, 300ms.

**Excluded:**
- Custom cursors.
- Scroll hijacking.
- Text scramble / glitch.
- Preloaders longer than ~2.5s.
- Auto-playing sound.
- Marquee everything.
- 3D for its own sake.

**Accessibility:** `prefers-reduced-motion` disables transforms, keeps opacity. No motion on elements under 14px. Nothing essential is revealed only by animation.

---

## 9. Signature interactions (the memorable five)

1. **Material comparison slider** — drag between POP and Ephtech; the POP side shows hairline cracks and damp staining. Immediate, visual, shareable.
2. **System builder** — pick "suspended ceiling" → get the full component list (board, grid, channel, fasteners, compound) → add all to quote with one click. Genuinely useful; no competitor has it.
3. **Pinned product story** — scroll through strength → moisture → speed while the image cross-fades.
4. **Branch map** — SVG Nigeria map, three nodes; hover reveals address and delivery radius.
5. **Quote drawer** — persists across pages, compiles a structured WhatsApp message. The ecommerce engine.

Optional sixth: project index with image-follow cursor (desktop only, disabled on touch).

---

## 10. Content requirements (blocking items)

**Must have before build:**
- Vector logo (SVG) + monochrome versions.
- 8–12 finished-project photos (ceilings, partitions, feature walls, receptions).
- 4–6 site/installation photos (crew, scaffolding, board stacks).
- 3–4 material macros (board edge, joint, surface).
- 2 environmental portraits (MD, lead engineer).
- Product specifications: dimensions, thickness, weight, coverage per piece, fire/moisture data.
- Warranty terms and installation lead times.
- Real project list with location, sector, year, scope.
- Confirmation of any certifications or test reports (do not invent).

**Recommended one-day shoot:**
Lagos or Owerri. Shot list above. Golden-hour exterior, midday interiors with lights on, macro lens for material. Budget is small relative to the lift in perceived quality.

**Copy direction:** short sentences, technical nouns, no "premier provider of world-class solutions." Lead with proof and specifics. The existing profile's comparison table is excellent raw material.

---

## 11. Tech stack

- **Framework:** Next.js (App Router) + TypeScript.
- **Styling:** Tailwind CSS + CSS variables for the design tokens.
- **Motion:** GSAP + ScrollTrigger; Lenis for smooth scroll (desktop only).
- **CMS:** Sanity — products, projects, services, branches, insights. Non-technical editing with locked layouts.
- **Forms/leads:** Server actions → Resend email + Sanity/Supabase record. Turnstile for spam.
- **Hosting:** Vercel.
- **Analytics:** Plausible or GA4 + Vercel Speed Insights.
- **Payments (phase 2):** Paystack.
- **Images:** `next/image`, AVIF/WebP, responsive sizes.

**Why not a page builder:** the motion and the spec builder need real code; a builder will fight you and hand off badly.

---

## 12. Nigeria-specific requirements

- **Mobile-first, data-light.** Most traffic is Android on 4G/3G. Performance is a revenue requirement, not a nicety.
- **WhatsApp is the conversion channel.** Click-to-chat everywhere, with context pre-filled.
- **Local SEO:** Google Business Profile for all three branches, consistent NAP, location pages, keywords like "POP ceiling alternative Lagos," "suspended ceiling contractor Owerri," "drywall partition Aba."
- **NDPA 2023:** privacy policy, consent on forms, cookie notice if tracking.
- **Domain + email:** register `ephtech.com` / `ephtech.ng` / `ephtechinternational.com`; move to Google Workspace or Zoho. Update the profile PDF and all collateral.
- **Naira formatting:** `₦` with thin spaces; no USD.
- **Delivery:** publish zones and lead times per branch. This kills a huge number of pre-sales questions.
- **B2B payment reality:** proforma invoice + bank transfer is the norm. Build the PDF, not just the checkout.
- **COREN numbers** for engineers, if registered — a real trust signal in Nigeria. Add to team bios.

---

## 13. Performance & accessibility budgets

| Metric | Target |
|---|---|
| LCP (p75, mobile 4G) | < 2.5s |
| CLS | < 0.1 |
| INP | < 200ms |
| Initial JS | < 200KB gzipped |
| Hero image | < 250KB AVIF |
| Total initial payload | < 1.2MB |
| Fonts | 2 families, latin subset, preloaded |
| Contrast | WCAG AA |
| Keyboard | Full nav, menu, quote drawer, forms |

---

## 14. Measurement

**Primary:** quote requests per week, WhatsApp clicks, datasheet downloads, phone taps.
**Secondary:** form completion rate, product page → quote rate, organic impressions for non-brand keywords, p75 LCP.

Track events: `quote_submit`, `whatsapp_click`, `call_click`, `datasheet_download`, `add_to_quote`, `system_builder_complete`.

---

## 15. Build phases

| Phase | Work | Duration |
|---|---|---|
| 0 | Discovery call, asset collection, confirm commerce level | 2–3 days |
| 1 | IA, sitemap, copy skeleton, wireframes | 3 days |
| 2 | Art direction, 2 style frames, motion prototype | 3 days |
| 3 | Design system + key pages (home, board, catalogue, quote) | 5–7 days |
| 4 | Build foundation + home | 4–5 days |
| 5 | Product, catalogue, quote cart, system builder | 5–7 days |
| 6 | Services, projects, about, locations, contact | 4 days |
| 7 | CMS, SEO, analytics, accessibility, performance QA | 4 days |
| 8 | Launch, handover, Loom walkthroughs | 2 days |

**Realistic: 5–6 weeks** if assets arrive on time. Content is the critical path, not code.

---

## 16. Risks

| Risk | Impact | Mitigation |
|---|---|---|
| No real photography | Site looks generic; trust collapses | Commission one shoot; use material macros + typography until then |
| Scope drifts to full ecommerce | Delays, wasted build | Lock the commerce ladder in writing before design |
| Price volatility | Stale prices, disputes | Price-on-request default; admin toggle |
| Yahoo email at launch | Credibility damage | Domain + Workspace set up in week 1 |
| Client edits break design | Visual drift | Constrained CMS fields; locked layouts |
| Logo is low-res | Looks amateur everywhere | Redraw as SVG in week 1 |
| Unverified claims | Legal/reputation risk | Only publish certifications they can produce |
| Spam form submissions | Noise | Turnstile + honeypot + rate limit |

---

## 17. Beyond the website (worth telling the owner)

- Register the **Ephtech Board** trademark.
- Get an independent lab test for fire rating and moisture absorption. Publish the results. This is the single biggest differentiator available and almost no local competitor has it.
- Publish a proper technical datasheet and installation manual — specifiers need them to write Ephtech into a BOQ.
- Set up Google Business Profiles for all three branches with photos.
- Move to domain email.
- Consider a simple distributor programme page once volume justifies it.

---

## 18. Decisions needed before design starts

1. **Commerce level:** L1 at launch (recommended) vs L2 immediately.
2. **Art direction:** A) light, technical, editorial — B) dark, cinematic, material. *Recommendation: A with a dark hero and two dark chapters.*
3. **Photography:** who shoots, when, budget.
4. **Domain + email:** who registers, which name.
5. **Price display policy:** request / from / public.
6. **CMS owner:** who edits products and projects after handover.

---

## 19. Questions for the owner

1. Which line makes more money today — board sales or contracting?
2. Which geography matters most in the next 12 months?
3. Who are the three competitors you lose deals to, and why?
4. What is the current lead time from order to delivery in each city?
5. Do you offer credit terms to contractors? What are they?
6. Do you have test reports, warranties, or certifications?
7. What are the top five questions customers ask before buying?
8. Do you have a project list with photos we can publish?
9. Is there a dealer/distributor network today?
10. What does a "win" look like six months after launch?

---

## 20. Design principle to hold the line on

> This should feel like a company that **engineers buildings**, not one that **sells boards**.

Restraint is the luxury. Real photography, precise typography, honest numbers, and five excellent interactions will beat twenty flashy ones — and it will still look like it belongs on Awwwards, because craft reads as confidence.
