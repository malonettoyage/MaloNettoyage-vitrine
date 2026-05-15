# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Static marketing website for **Malo Nettoyage**, a Swiss cleaning company based in Payerne (Vaud). No build system, no dependencies, no package manager — pure HTML, CSS, and vanilla JavaScript deployed via GitHub Pages.

**Live site:** https://www.malonettoyage.ch (CNAME configured)

## Architecture

The site has two types of pages that share the same design system:

- **Root vitrine** (`index.html` + `style.css` + `scroll-fade.js`) — the main landing page covering all services.
- **Service landing pages** (`fin-de-bail/index.html`, etc.) — focused pages per service. They link to the shared CSS and JS with `../` relative paths (`../style.css`, `../scroll-fade.js`). They do NOT use their own local stylesheets.

### Shared assets (always relative from each page's location)

| Asset | Root page path | Subpage path |
|---|---|---|
| CSS | `style.css` | `../style.css` |
| JS | `scroll-fade.js` | `../scroll-fade.js` |
| Images | `img/...` | `../img/...` |
| Video | `video/nettoyage.mp4` | `../video/nettoyage.mp4` |
| Fonts | loaded via CSS `@font-face` from `./Fonts/` — this always resolves relative to `style.css`, so no change needed in subpages |
| Partner logos | `logo partenaire/...` | `../logo partenaire/...` |

### Fonts

Instrument Sans is self-hosted in `/Fonts/` (4 weights: Regular, Italic, Medium, Bold). The `@font-face` declarations are in `style.css` and use `./Fonts/` paths — since these resolve relative to the CSS file, subpages automatically get the correct font without any path change.

## Key files

- `style.css` — all styles for the entire site (vitrine + all service pages). Includes responsive breakpoints at 1024px and 768px.
- `scroll-fade.js` — handles: scroll-triggered `.section` reveal animation, FAQ accordion (`.faq-question` click → `.active` toggle), video play/pause (elements `#portrait-video` + `#video-toggle`), "voir plus d'avis" button (`#voir-plus-avis` reveals `.list-avis-2`, `.list-avis-3`).
- `merci.html` — form submission confirmation page. Form submissions redirect here via `window.location.href = "/merci.html"`.

## HTML structure conventions

Every page uses this section order (each wrapped in `.section` for scroll animation):

1. `.banner` — social proof bar (outside scroll animation)
2. `.hero.section` — logo, h1, hero image, CTA buttons, Google rating image
3. `.services.section` — service cards using `.list-column > .list-services > .info-services`
4. `.contact-section.section` — Formspree form (`action="https://formspree.io/f/xbdqdpry"`)
5. `.pourquoi-nous.section` — 4 reason cards using `.list-raison > .raison`
6. `.avant_apres.section` — before/after using `.list-avant_apres > .avant_apres-img`
7. `.temoignage.section` — reviews: first `.list-avis` always visible, `.list-avis-2` and `.list-avis-3` hidden until "voir plus" click
8. `.histoire.section` — founder story with `.resume-histoire`
9. `.video-section.section` — video player
10. `.faq-section.section` — FAQ using `<ul class="faq-list"> > <li class="faq-item">`
11. `<footer class="footer">` — logo, social links, legal link

Service landing pages adapt sections 2–4 with service-specific copy but keep the same classes and structure.

## Tracking & integrations

All pages must include both tracking snippets at the top of `<head>`:
- **Google Analytics:** `G-VC77M9NWHN` — events fired via `gtagSendEvent('contact_email')` and `gtagSendEvent('contact_tel')` on CTA links.
- **Meta Pixel:** `532778493168576` — `merci.html` additionally fires a `Lead` event on page load.

**Forms:** Formspree endpoint `https://formspree.io/f/xbdqdpry`. Submissions are handled via `fetch()` in a `<script>` block at the bottom of each page (not in `scroll-fade.js`). On success, redirects to `/merci.html`.

## Adding a new service landing page

1. Create a new subfolder (e.g., `nettoyage-vitres/`).
2. Copy the structure of `fin-de-bail/index.html`.
3. Update all `../img/`, `../video/`, `../style.css`, `../scroll-fade.js` paths.
4. Update meta tags, `<title>`, canonical URL, and OG tags.
5. Pre-select the relevant `<option>` in the contact form's `<select>`.
6. Add the new URL to `sitemap.xml`.

## Design tokens (from style.css)

- **Brand green:** `#1CBF73` (used for `.highlight`, CTA hover, `.tete-apres`, `.arrow`, borders)
- **Dark:** `#232323` (CTAs, body text)
- **Background:** `#FBFBFB`
- **Hero background:** `#E6F9F4`
- **Font:** Instrument Sans (self-hosted)
- **Body padding:** `200px` horizontal on desktop → `24px` tablet → `16px` mobile
