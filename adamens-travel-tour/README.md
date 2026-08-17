# Adamens Travel &amp; Tour — Website

A responsive, single-page marketing website for **Adamens Travel &amp; Tour**, built as a
static site (HTML + CSS + a little JavaScript). It reproduces the provided landing-page
design, rebranded to Adamens.

## Files
| File | Purpose |
| --- | --- |
| `index.html` | Page markup — all sections |
| `styles.css` | Colors, layout, and responsive rules |
| `script.js` | Mobile nav toggle, footer year |

## View it
Just open `index.html` in any web browser — no build step or server required.
(Photos load from [Unsplash](https://unsplash.com) over the internet, so you'll need a
connection the first time you view it.)

## Sections
1. Sticky header / navigation
2. Hero — "Time for your next adventure"
3. Travel made easy (about)
4. Summer Deals Promo — Nature Escape / Romantic Getaway / Family Vacation
5. We'll handle your trip for you — Flight Booking, Tours &amp; Activities, Airport Transfers, Hotel Bookings
6. Our favorite travelers (testimonials)
7. Footer — Address, Contact, Office Hours

## Customizing
- **Text / prices / deals:** edit directly in `index.html`.
- **Photos:** each image is referenced by an Unsplash URL in `index.html` (and two
  background images — hero and testimonials — in `styles.css`). Swap the `src` /
  `background-image` URL, or drop your own image files into this folder and point to them.
- **Brand colors:** change the CSS variables at the top of `styles.css`
  (`--cream`, `--brown`, `--orange`, …).
- **Contact details:** currently placeholder values in the footer of `index.html` — replace
  the address, phone, and email with the real Adamens details.
