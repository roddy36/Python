# Adamens Travel — Website

A responsive, single-page website for **Adamens Travel** — *Excellence in Traveling &amp;
Recruitment Services*. Built as a static site (HTML + CSS + a little JavaScript) using the
brand's navy &amp; orange colours.

## Files
| File | Purpose |
| --- | --- |
| `index.html` | Home page |
| `about.html` | About — story, mission &amp; vision, why choose us, stats |
| `services.html` | Services — visas, permits, travel &amp; consultancy |
| `solutions.html` | Solutions — Strategy / Execution / Advisory + process timeline |
| `contact.html` | Contact form, details, and FAQ |
| `styles.css` | Colours, layout, and responsive rules (shared) |
| `script.js` | Mobile nav, forms, FAQ accordion, footer year (shared) |

## View it
Open `index.html` in any web browser — no build step or server required. The pages link to
each other, so navigation works straight from the file system.
(A few photos load from [Unsplash](https://unsplash.com) over the internet; icons and the
logo are inline SVG and always render offline.)

## Pages &amp; sections
- **Home** — hero, destinations/explore, about teaser, services, solutions, testimonials, newsletter
- **About** — the story of Adamens (founded 2020), stats band, mission &amp; vision, why clients choose us
- **Services** — Visiting Visas, Study Permit, Recruitment &amp; Working Permit, Schengen Visa, Travel Arrangements, Educational Consultancy
- **Solutions** — Strategy, Execution, Study Abroad Advisory, and a step-by-step journey timeline
- **Contact** — consultation form, contact details, WhatsApp link, and an FAQ accordion
- Every page shares the same sticky header, footer, and contact details

> **Note on the shared header/footer:** because this is a plain static site (no build step or
> templating), the header and footer markup is duplicated in each page. If you edit navigation
> links, the logo, or footer details, apply the change to every `*.html` file.

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
