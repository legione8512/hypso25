# Hypso25 Website

A static website for **Hypso25**, a specialty coffee shop, cocktail bar and wine bar with an industrial steampunk identity, located in the old town of Constanţa, Romania.

The project contains the main Hypso25 website, bilingual Romanian/English pages, a photo gallery with lightbox functionality, contact pages, and an existing standalone menu website integrated inside the `/menu` folder.

## Live Website

[www.hypso25.ro](https://www.hypso25.ro)

## Project Overview

This website was built as a static front-end project using HTML, CSS and JavaScript. It does not require a build step, package manager, database or server-side framework.

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
- Standalone menu integrated under `/menu`
- Photo gallery page
- Gallery lightbox with previous and next controls
- Contact page with Google Maps embed
- Shared favicon across the main website and menu
- Optimised image structure for the main website
- Cookie banner with local browser storage

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
menu/seasonal.html      Seasonal drinks
```

## Project Structure

```text
hypso25/
├── index.html
├── ro.html
├── our-story.html
├── our-story-ro.html
├── contact.html
├── contact-ro.html
├── photo-gallery.html
├── photo-gallery-ro.html
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   ├── our-story.css
│   │   ├── contact.css
│   │   └── gallery.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       ├── favicon.ico
│       ├── logo.webp
│       ├── hero-bar.webp
│       ├── bar-interior.webp
│       ├── coffee.webp
│       ├── coffee-a.webp
│       ├── gb.svg
│       └── ro.svg
└── menu/
    ├── index.html
    ├── menu.html
    ├── sdrinks.html
    ├── vcock.html
    ├── celix.html
    ├── spirits.html
    ├── wines.html
    ├── seasonal.html
    ├── css/
    │   └── style.min.css
    ├── js/
    │   └── main.js
    └── img/
```

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Google Fonts
- SVG icons
- WebP images
- Google Maps embed

The integrated menu keeps its own CSS and JavaScript inside the `/menu` folder so it can remain visually and functionally separate from the main website while still being connected through the main navigation.

## Running the Project Locally

No installation is required.

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

Because this is a static website, it can be deployed to any static hosting provider, including:

- GitHub Pages
- Cloudflare Pages
- Netlify
- Vercel
- standard web hosting with FTP / cPanel

For deployment, upload the HTML files, the `assets/` folder and the `menu/` folder.

Do not upload development-only folders such as:

```text
.git/
_unused-assets-backup/
```

## Notes for Maintenance

- Main website styling is controlled from `assets/css/style.css`.
- Page-specific styles are separated into `our-story.css`, `contact.css` and `gallery.css`.
- Main website JavaScript is controlled from `assets/js/main.js`.
- The menu website keeps its own styling and scripts inside `menu/`.
- The menu is connected from the main website through `menu/menu.html`.
- The shared favicon is stored at `assets/images/favicon.ico`.

### Checklist when changing header, footer or shared layout

The main website is static, so the header, mobile menu, language picker, footer and cookie banner are repeated manually across the main HTML pages.

When changing the main navigation, header actions, mobile menu, language switcher, footer or cookie banner, update and test these files:

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
- create a Romanian version of the menu;
- add a lightbox experience for menu product images;
- further optimise image sizes for faster loading;
- add SEO metadata for each page;
- add structured data for the business location and opening hours;
- add accessibility improvements for the old menu pages.

## Author

Website project created and maintained for **Hypso25**.
