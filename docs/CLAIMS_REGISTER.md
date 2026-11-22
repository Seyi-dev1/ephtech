# Claims register

Every public claim should be traceable to the company profile PDF, a written
owner confirmation, or a test report. If a claim is not verified, it should be
removed or clearly labelled as indicative.

Status values:

- **Verified** — supported by the PDF or written owner confirmation.
- **Indicative** — directionally true, but not a tested or contractual figure.
- **Unconfirmed** — presented as fact on the site, but no source exists yet.
- **Removed** — taken off the site until evidence is available.

## Company facts

| Claim | Source | Status | Where it appears |
|---|---|---|---|
| Company name: Ephtech International Ltd | PDF p1, p2, p3 | Verified | Site-wide |
| RC 1216055 | PDF p1, p2, p3 | Verified | Footer, menu, structured data |
| Lagos address | PDF p3 | Verified | Contact, structured data |
| Owerri address | PDF p3 | Verified | Contact, structured data |
| Aba address | PDF p3 | Verified | Contact, structured data |
| Phone / WhatsApp +234 803 251 9288 | PDF p3 | Verified | Hero, menu, contact, quote |
| Email ephtechinternational@yahoo.com | PDF p3 | Verified | Footer, menu, legal pages |
| Email ephraimin2008@yahoo.com | PDF p3 | Not published | Decide before launch |
| Opening hours | None | Removed | Previously `Mon–Sat 8:00–18:00` |
| Website `ephtech.ng` | Not in PDF | Unconfirmed | `metadataBase` and JSON-LD fallback; set `NEXT_PUBLIC_SITE_URL` to the live domain |
| Six service divisions | PDF p2–p3 | Verified | Services section |
| Lagos = South-West; Owerri/Aba = South-East | PDF p3 | Verified | Trust band, contact |

## Product and performance claims

| Claim | Source | Status | Where it appears |
|---|---|---|---|
| Engineered alternative to POP, plasterboard and gypsum | PDF p1 | Verified | Comparison, board copy |
| High impact resistance / structural stability | PDF p2 | Verified | Comparison, pillars |
| Moisture resistance / humidity resilience | PDF p2 | Verified (qualitative) | Comparison, pillars |
| "No swelling, staining or fungal damage" | PDF says "minimizing" | Removed | Replaced with "resists" |
| Fire resistance | None | Removed | Previously board paragraph |
| Dry installation / zero curing downtime | PDF p2 | Verified | Hero, comparison, pillars |
| Factory-smooth / factory-calibrated finish | PDF p2 | Verified | Comparison, pillars |
| Lifecycle cost advantage | PDF p2 | Verified (qualitative) | Comparison |
| 12.5 mm thickness | None | Unconfirmed | Hidden behind `product.ts` until confirmed |
| 1200 × 2400 mm panel size | None | Unconfirmed | Hidden behind `product.ts` until confirmed |
| 595 × 595 mm ceiling module | None | Removed from application title | Replaced with "lay-in suspended ceilings" |
| Cement board composition | None | Removed | Removed from structured data |
| Acoustic performance rating (NRC/STC) | None | Not claimed | Only "acoustic options" as a system capability |
| Warranty terms | Not in PDF | Contractual | Generic wording only |

## Project and photography claims

| Claim | Source | Status | Where it appears |
|---|---|---|---|
| "Photographed on current Ephtech sites" | Pexels stock credits | Removed | Replaced with "Photography is illustrative" |
| "Photography from Ephtech installations" | Pexels stock credits | Removed | Replaced with "Illustrative interiors" |
| Alt text "during an Ephtech installation" | Pexels stock credits | Removed | Replaced with neutral descriptions |
| Named projects (Lekki Residence, etc.) | None | Removed | Not on the current homepage |
| Client logos / testimonials | None | Not published | Only when real |

## Before launch

1. Confirm thickness, panel size, weight, coverage and edge profile, or keep
   dimensions out of the public specification.
2. Obtain fire and moisture test data before publishing fire or absorption
   ratings.
3. Confirm opening hours and the contact email policy.
4. Confirm whether `ephtech.ng` is registered and live.
5. Replace illustrative photography with real project photography, or keep the
   illustrative label visible.
6. Confirm delivery zones and lead times per branch before publishing them.
