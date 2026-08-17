# Adamens Travel — Website

A responsive, single-page website for **Adamens Travel** — *Excellence in Traveling &amp;
Recruitment Services*. Built as a static site (HTML + CSS + a little JavaScript) using the
brand's navy &amp; orange colours.

## Files
| File | Purpose |
| --- | --- |
| `index.html` | Page markup — all sections + inline SVG logo/icons |
| `styles.css` | Colours, layout, and responsive rules |
| `script.js` | Mobile nav, newsletter form, footer year |

## View it
Open `index.html` in any web browser — no build step or server required.
(A few photos load from [Unsplash](https://unsplash.com) over the internet; icons and the
logo are inline SVG and always render offline.)

## Sections
1. Sticky header / navigation
2. Hero — *Excellence in Traveling &amp; Recruitment Services*
3. Explore — destinations (Africa, Asia, Australia, Canada, USA, Europe, Middle East) + study/work
4. About — The Story of Adamens (founded 2020)
5. Our Services — Visiting Visas, Study Permit, Recruitment &amp; Working Permit; plus Schengen Visa, Travel Arrangements, Educational Consultancy
6. Our Solutions — Strategy, Execution, Study Abroad Advisory
7. Testimonials — client stories (Jonathan, Ama, Gifty)
8. Newsletter / call-to-action band
9. Footer — contact details, links, socials

## Business details in the site
- **Address:** Dome Pillar 2 – Aunty Mary, Accra, Ghana
- **Phone:** 054 102 2934 / 027 816 2668
- **Email:** info@adamenstravel.com

## Customizing
- **Logo:** currently a recreated inline SVG (the `#logo` symbol at the top of `index.html`).
  To use the official artwork, drop the image file into this folder and replace the two
  `<svg class="brand-logo"><use href="#logo"/></svg>` tags with `<img src="logo.png" …>`.
- **Text / services / testimonials:** edit directly in `index.html`.
- **Photos:** hero and Solutions backgrounds are Unsplash URLs in `styles.css`; the About
  photo is in `index.html`. Swap the URLs or point to local image files.
- **Brand colours:** change the CSS variables at the top of `styles.css`
  (`--navy`, `--orange`, `--light`, …).
- **Newsletter:** the form is front-end only (no backend). Wire it to your email provider or
  a form service in `script.js` when ready.
