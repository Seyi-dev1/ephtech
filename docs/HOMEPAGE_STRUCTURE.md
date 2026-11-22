# Homepage reduction plan

Status: implemented as a trimmed single-page home plus four detail pages on 22 November 2026.
Updated 22 November 2026: split the long home into `/board`, `/services`, `/projects` and
`/contact`; the home keeps the hero, trust band and five chapters.
Source: `docs/PROJECT_BRIEF.md`, the company profile, and the current `src/app/page.tsx`.

## Current implementation

The long single-page home was split into a focused homepage plus four detail pages:

```
/          Hero, trust band, product & site-work rail, 01 problem,
           02 board overview, 03 completed cathedral feature + supporting
           interiors, 04 one-team summary, 05 short FAQ, 06 branches + map
           + quote, closing CTA, footer
/board     02 full board, media carousel, system components, applications,
           specification, full FAQ
/services  04 six divisions, five-step process, quote CTA
/projects  03 site-work gallery and application grid
/contact   06 branch map, addresses, contact channels, quote CTA
```

The header and footer now link to the routes. Applications and FAQ deep-link into
`/board#applications` and `/board#faq`. The legal pages remain as separate routes.

The previous single-page implementation kept every section on the home page. It was
split because the quote action was buried after roughly nine screens, and the
applications grid, services/process and contact blocks are reference material rather
than homepage persuasion.

The remaining trust prerequisites below still apply.

---

## 1. Original single-page audit (superseded)

After the hero, the current homepage runs:

1. Proof strip — one supplier / one installer / one warranty, with stats
2. The problem — POP cracks, gypsum swells, with three failure points
3. The board — flagship visual and three pillars
4. Interactive comparison — POP vs gypsum vs Ephtech
5. Room studies — the four-layer applications interaction
6. Systems — four product cards and a take-off CTA
7. Services — six divisions
8. Projects — three selected projects
9. Process — five steps
10. FAQ — seven questions
11. Locations — map and three branches
12. Lead magnet / closing CTA

Footer after that.

That is too many competing arguments. The page repeats proof in the strip, board, systems, services, projects and process. Section numbering jumps from 02 to 05, which makes the page feel assembled rather than edited. Most importantly, the quote action is buried after a very long read.

---

## 2. What the brief says the page must do

1. Make **Ephtech Board** feel like an engineered system, not a commodity board.
2. Convert attention into **quote requests** and **specifier downloads**.
3. Use the services division as proof of competence, not as a second homepage.
4. Lead with **single-point accountability**: specified, supplied and installed by one team.
5. Use **real projects and real numbers only**. No invented testimonials, logos, warranties or projects.
6. Light, technical, editorial. Restraint is the luxury.

The buyer is a contractor, developer or specifier. They need to know what it is, why it is different, that it works, who installs it, where to get it, and how to ask for a quote. Everything else belongs on a subpage.

---

## 3. Recommended structure

Seven blocks including the hero. Five numbered chapters after the hero.

### Hero
Video background, “Built for durability.”, the product summary, quote and WhatsApp, locations.
Keep as built.

### Trust strip — thin band, no number
**One supplier. One installer. One team.**

Verified facts only: **3 branches · 6 divisions · 3 cities · supply + install**. RC number if useful.

Do not use “01 warranty” until the warranty terms are confirmed in writing. Do not use “00 curing” as a headline stat; it belongs in the board section as a product benefit.

Purpose: immediate credibility before the visitor scrolls.

### 01 — The problem, solved
Merge the current **problem** and **comparison** sections.

- “POP cracks. Gypsum swells.”
- The three failure points, compressed to one row.
- The comparison table/slider: durability, moisture, speed, finish, lifecycle cost.
- One CTA: Request a quote.

Why: this is the most persuasive argument on the site. It should be one section, not two.

### 02 — The board, and where it goes
Merge the current **board** and **applications** sections.

- One flagship product visual.
- Three pillars: strength, moisture, speed.
- Four application cards with real photography: ceilings, walls, wet areas, joinery.
- Links: “Explore the board” → `/board`; “See the system” → `/products`.
- A single spec line, using one confirmed set of dimensions.

The interactive room studies move to `/board`. They are excellent, but they are a deep product experience, not a homepage requirement.

Why: the visitor learns what the product is and where it is used in one section.

### 03 — Built on site
Replace the current **projects** section with real site evidence.

- Three real installation or finished-project photographs.
- Captions with application and, where confirmed, project or city.
- No invented case-study names, no stock “project” claims.
- If real case studies exist: “See projects” → `/projects`.

If there are not yet three real photographs, use two and remove the section until the content exists. A weak projects section damages trust more than no projects section.

Why: proof, not a portfolio. Real work is the strongest trust signal this business has.

### 04 — One team, start to finish
Merge the current **services** and **process** sections.

- “One team from specification to handover.”
- Six divisions as a compact grid or line: materials, interiors, contracting, civil and structural, quantity surveying, real estate.
- The five steps as a single horizontal strip: specify → quote → supply → install → handover.
- Link: “See services” → `/services`.

This is where single-point accountability is proved, not just claimed.

### 05 — Three branches. One standard.
Merge the current **locations**, **lead magnet**, and closing CTA.

- The branch map and three addresses.
- One sentence on nationwide delivery.
- Quote CTA and WhatsApp.
- Spec sheet download if a real PDF exists.
- A small link to the FAQ or contact page.

This is the closing section. It should not be split across three separate blocks.

### Footer
Keep. Full NAP, RC, privacy, terms, email, socials when real.

---

## 4. Keep / merge / move / cut

| Current block | Decision | Where it goes |
|---|---|---|
| Proof strip | Keep, simplify | Thin trust band; verified facts only |
| Problem | Merge | Into 01 with comparison |
| Board | Merge | Into 02 with applications |
| Comparison | Merge | Into 01 |
| Room studies | Move | `/board` |
| Systems / product cards | Move | `/products`; one-line system link in 02 |
| Services | Merge | Into 04 as six compact divisions; full detail at `/services` |
| Projects | Replace | 03 “Built on site”; full case studies at `/projects` |
| Process | Merge | Into 04 as a five-step strip |
| FAQ | Move | `/board` or `/contact`; link from 05 |
| Locations | Merge | Into 05 |
| Lead magnet / CTA | Merge | Into 05 |
| Testimonial / logos | Not built | Only when real names and permissions exist |

The page goes from 12 blocks after the hero to 6 after the hero — 13 blocks to 7 including the hero. The quote action appears after the comparison, after the board, and at the close instead of being buried at the end of a long page.

---

## 5. What must be true before this works

These are trust prerequisites, not design preferences.

1. **One specification set.** The site currently mixes `12.5 mm / 1200 × 2400 mm` with `1.22 × 2.44 m / 595 × 595 mm`. Pick one confirmed set and apply it everywhere: hero, board, systems, room studies, structured data.
2. **Verified claims only.** Fire, waterproof, antiseptic and soundproof wording needs the test reports. Until then, use the evidence-based wording already agreed.
3. **Real photography.** The brief forbids stock hardhat photos and fake projects. Use the real installation images, or wait until a shoot exists.
4. **Warranty terms.** Do not use “one warranty” as a stat until the terms are confirmed.
5. **No invented social proof.** No logo wall, no testimonial, no case study without a real client.
6. **A working quote path.** The primary CTA must open the WhatsApp handoff with a prefilled quote message; no dead links.

---

## 6. Proposed final order

```
Hero
Trust strip
01 — The problem, solved
02 — The board, and where it goes
03 — Built on site
04 — One team, start to finish
05 — Three branches. One standard.
Footer
```

The five numbered chapters are the whole argument. Everything else is a subpage or a download.

---

## 7. Next step

Approve the seven-block structure and the moves to `/board`, `/products`, `/services`, `/projects` and `/contact`. Then implement it in that order, using only confirmed copy and real images. If any of the moved sections must stay on the home, name it now and we will find a compact place for it.
