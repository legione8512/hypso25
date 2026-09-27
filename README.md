# Hypso25 Website

A static website for **Hypso25**, a specialty coffee shop, cocktail bar and wine bar with an industrial steampunk identity, located in the old town of Constanța, Romania.

The project contains the main Hypso25 website, bilingual Romanian/English pages, a photo gallery with lightbox functionality, contact pages, privacy policy pages, and an existing standalone menu website integrated inside the `/menu` folder.

## Live Website

[www.hypso25.ro](https://www.hypso25.ro)

## Project Overview

This website was built as a static front-end project using HTML, CSS and JavaScript. It does not require a package manager, database or server-side framework. The only build step is for the menu: its product lists are written from the data files in `menu-data/` by a small Node.js script (see [Editing the menu](#editing-the-menu)).

Main goals of the project:

- rebuild the Hypso25 website as a clean static website;
- keep the visual identity premium, dark, industrial and steampunk-inspired;
- support English and Romanian pages;
- integrate the existing Hypso25 menu as part of the same website;
- keep the website lightweight and simple to deploy.

## Main Features

- Responsive homepage layout
- English and Romanian versions
- Desktop navigation and mobile burger menu
- Language switcher for EN / RO pages
- Standalone menu integrated under `/menu`, in English and Romanian, with the same fonts, logo and language switcher as the main website
- Random Google and Tripadvisor reviews on the menu start page
- Menu product lists, prices and nutrition values generated from data files
- Photo gallery page
- Gallery lightbox with previous and next controls
- Contact page with a map that loads from Google Maps only after a click
- Responsive photos: each large photo comes in four sizes and the browser picks the right one
- Self-hosted fonts, no cookies and no third-party requests when a page loads
- Structured data for search engines and a share image for link previews
- Shared favicon across the main website and menu

## Pages

Main website pages:

```text
index.html              English homepage
ro.html                 Romanian homepage
our-story.html          English Our Story page
our-story-ro.html       Romanian Our Story page
contact.html            English Contact page
contact-ro.html         Romanian Contact page
photo-gallery.html      English Photo Gallery page
photo-gallery-ro.html   Romanian Photo Gallery page
privacy.html            English Privacy Policy
privacy-ro.html         Romanian Privacy Policy
```

Integrated menu pages:

```text
menu/index.html         Menu landing page
menu/menu.html          Coffee menu
menu/sdrinks.html       Specialty drinks
menu/vcock.html         Cocktails
menu/celix.html         Chilled elixirs
menu/spirits.html       Spirits
menu/wines.html         Wines and beer
menu/winter.html        Winter seasonal drinks (Winter Spirit Infusions)
menu/seasonal.html      Summer seasonal drinks (Heatwave Elixirs)
```

Each menu page has a Romanian version: `menu/ro.html` (landing page), `menu/menu-ro.html`, `menu/sdrinks-ro.html`, `menu/vcock-ro.html`, `menu/celix-ro.html`, `menu/spirits-ro.html`, `menu/wines-ro.html`, `menu/winter-ro.html` and `menu/seasonal-ro.html`. The Romanian pages of the main website link to the Romanian menu.

## Project Structure

```text
hypso25/
├── index.html, ro.html, our-story*.html, contact*.html, photo-gallery*.html, privacy*.html
├── sitemap.xml
├── robots.txt
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   ├── fonts.css            self-hosted fonts, shared with the menu
│   │   ├── our-story.css
│   │   ├── contact.css
│   │   └── gallery.css
│   ├── fonts/                   Cormorant Garamond and Source Sans 3 (WOFF2) with their OFL licences
│   ├── js/
│   │   └── main.js
│   └── images/
│       ├── favicon.ico
│       ├── logo.webp
│       ├── share.jpg            1200×630 image for link previews
│       ├── contact-map.webp     OpenStreetMap placeholder for the contact map
│       ├── hero-bar-800.webp … hero-bar-2048.webp
│       │                        four sizes of each photo (also coffee, coffee-a, bar-interior)
│       ├── gb.svg
│       └── ro.svg
├── menu/
│   ├── index.html, ro.html
│   ├── menu.html, sdrinks.html, vcock.html, celix.html, spirits.html, wines.html, seasonal.html, winter.html
│   ├── menu-ro.html, sdrinks-ro.html, … (the Romanian version of each page)
│   ├── css/
│   │   ├── style.min.css        Bootstrap 4 (only the rules the menu uses) and the menu styles
│   │   └── qr-index.css         menu start page
│   ├── js/
│   │   ├── main.js
│   │   ├── carousel.js
│   │   ├── reviews-data.js
│   │   └── reviews-random.js
│   └── img/
├── menu-data/                   menu products, one file per menu page (see menu-data/README.md)
└── scripts/
    ├── build-menu.js            writes the menu product lists from menu-data/
    └── check_links.py           checks local links
```

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Self-hosted web fonts (Cormorant Garamond, Source Sans 3)
- SVG icons
- WebP images
- Google Maps, loaded only when the visitor clicks "Show map"
- Node.js, only to build the menu product lists

The integrated menu keeps its own CSS and JavaScript inside the `/menu` folder so it can remain visually and functionally separate from the main website while still being connected through the main navigation.

## Running the Project Locally

No installation is required to view the website. Node.js is needed only to rebuild the menu after a change in `menu-data/`.

Open the project folder and run it with a local server. For example, in VS Code you can use the **Live Server** extension.

Alternatively, from the terminal you can run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deployment

The website is published with GitHub Pages from the `main` branch. Because it is a static website, it can also be deployed to any other static hosting provider, including:

- Cloudflare Pages
- Netlify
- Vercel
- standard web hosting with FTP / cPanel

For deployment, upload the HTML files, `sitemap.xml`, `robots.txt`, the `assets/` folder and the `menu/` folder. The `menu-data/` and `scripts/` folders are only used to build the menu; the website does not load them.

Do not upload development-only folders such as:

```text
.git/
```

## Notes for Maintenance

- Main website styling is controlled from `assets/css/style.css`.
- Page-specific styles are separated into `our-story.css`, `contact.css` and `gallery.css`.
- The fonts are declared once in `assets/css/fonts.css`, which the main website and the menu both load.
- Main website JavaScript is controlled from `assets/js/main.js`.
- The menu website keeps its own styling and scripts inside `menu/`.
- The menu is connected from the main website through `menu/menu.html`.
- The shared favicon is stored at `assets/images/favicon.ico`.
- The site footer has the same look as the menu footer and uses the menu's coffee-bean photo (`menu/img/bg.jpg`), so both share one cached file. Its torn-paper top edge is `assets/images/footer-edge.png`; the homepage footers use `site-footer--straight`, without the edge, because they follow a photo.
- The website sets no cookies and loads nothing from other servers until the visitor asks for it (the contact map). A new embed or tracking script also needs a change to the privacy policy (`privacy.html`, `privacy-ro.html`).

### Editing the menu

Prices, products, ingredients, nutrition values and allergens are kept in `menu-data/`, one file per menu page. After a change, run:

```bash
node scripts/build-menu.js
```

Every text has an English and a Romanian version. The script rewrites the product lists of the English and Romanian menu pages and the coffee prices on the homepage (`index.html`, `ro.html`). Do not edit the product lists in the HTML directly. The fields are described in `menu-data/README.md`.

### Switching the seasonal menu

The menu has one seasonal page at a time:

- winter: `menu/winter.html` (Winter Spirit Infusions), linked as `WINTER INFUSIONS`;
- summer: `menu/seasonal.html` (Heatwave Elixirs), linked as `SEASONAL SIPS`.

To switch season, change the seasonal link in the page header of all menu category pages (`menu.html`, `sdrinks.html`, `vcock.html`, `celix.html`, `spirits.html`, `wines.html` and the seasonal page that becomes active), and the same in their Romanian versions (`menu-ro.html` and the others link to `winter-ro.html` or `seasonal-ro.html`, labelled `INFUZII DE IARNĂ` or `BĂUTURI DE SEZON`). Then replace both seasonal page URLs (English and Romanian) in `sitemap.xml`.

### Check local links

To check if local HTML links and image/script sources point to existing files, run:

```bash
python scripts/check_links.py
```

### Checklist when changing header, footer or shared layout

The main website is static, so the header, mobile menu, language picker and footer are repeated manually across the main HTML pages. The privacy pages have no header or footer, by design.

When changing the main navigation, header actions, mobile menu, language switcher or footer, update and test these files:

```text
index.html
ro.html
our-story.html
our-story-ro.html
contact.html
contact-ro.html
photo-gallery.html
photo-gallery-ro.html
```

## Future Improvements

Possible future improvements:

- consider a simple static build script for shared header and footer partials;
- add a lightbox experience for menu product images;
- use the four photo sizes on the contact page too.

## Author

Website project created and maintained for **Hypso25**.
