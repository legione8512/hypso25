# Menu data

The product lists of the menu pages, in English and in Romanian, are written from the files in this folder. There is one file per page:

| File | English page | Romanian page |
| --- | --- | --- |
| `coffee.js` | `menu/menu.html` | `menu/menu-ro.html` |
| `specialty-drinks.js` | `menu/sdrinks.html` | `menu/sdrinks-ro.html` |
| `cocktails.js` | `menu/vcock.html` | `menu/vcock-ro.html` |
| `chilled-elixirs.js` | `menu/celix.html` | `menu/celix-ro.html` |
| `spirits.js` | `menu/spirits.html` | `menu/spirits-ro.html` |
| `wines-and-beers.js` | `menu/wines.html` | `menu/wines-ro.html` |
| `summer-seasonal.js` | `menu/seasonal.html` | `menu/seasonal-ro.html` |
| `winter-seasonal.js` | `menu/winter.html` | `menu/winter-ro.html` |

`coffee.js` also sets the coffee prices on the homepage (`index.html` and `ro.html`). The menu start pages (`menu/index.html` and `menu/ro.html`) have no product list.

## Changing a price, a product or a recipe

1. Edit the data file.
2. Run, from the project folder:

   ```bash
   node scripts/build-menu.js
   ```

   It rewrites the product list in both pages (between the two `Products: generated` comments) and the homepage coffee prices. It needs Node.js only. It also lists any text that has no Romanian version yet: the Romanian page then shows the English text.
3. Check the pages in the browser, then commit the data file and the pages together.

`node scripts/build-menu.js --check` only reports the pages that no longer match the data, without changing anything.

Do not edit the product lists in the HTML pages directly: the next build overwrites them. The rest of each page (header, the page title and text under the logo, footer) is still edited in the HTML, in both languages.

## A product

```js
{
  name: "Cortado", ml: 70, price: 14,
  photo: "Cortado.webp", big: "Cortado_big.webp",
  ingredients: {
    en: "milk foam, espresso",
    ro: "spumă de lapte, espresso",
  },
  nutrition: { kj: 141, kcal: 34, fat: 1.8, saturates: 1.2, carbs: 2.7, sugars: 2.4, protein: 1.7, salt: 0.06 },
  allergens: {
    en: "Milk",
    ro: "Lapte",
  },
},
```

Every text has an English and a Romanian version, `{ en: "…", ro: "…" }`. A plain text, like `name: "Cortado"`, is the same in both languages; that is how most product names are written. Prices, photos and nutrition values are written once, for both pages.

| Field | Shown as |
| --- | --- |
| `name` | The title. `ml` adds " - 150ml" after it. |
| `price` | The price bubble. A number, or text such as `"+3"` for an extra. |
| `photo` | The round photo, from `menu/img/icons_watermarked/webp/`. Without `photo`, the row shows only the price bubble. `missing.webp` is the placeholder. |
| `big` | The large photo that opens on tap, from `menu/img/big_watermarked/webp/`. |
| `alt` | The photo description for screen readers. Without it: the name + " at Hypso25" / " la Hypso25". |
| `lines` | Text under the title, in order. Each line is a normal paragraph; add `tight: true` for no space below it, or `small: true` for the small print. |
| `glass` | `{ ml: 150, price: 32 }` shows "Glass 150ml: 32 ron" / "Pahar 150ml: 32 ron". |
| `ingredients` | "Ingredients: …" / "Ingrediente: …" |
| `nutrition` | The nutrition lines, per product. The Romanian page writes decimals with a comma. Write a value as text (`"6.0"`) to show the `.0`. |
| `note` | A small line after the nutrition values, such as the values of another version. |
| `allergens` | "Allergens: …" / "Alergeni: …" |

A line in `lines`, for example:

```js
lines: [
  {
    en: "Oat or pea milk — smooth, dairy-free, and perfect with any milk-based drink.",
    ro: "Lapte de ovăz sau de mazăre — fin, fără lactate și potrivit cu orice băutură cu lapte.",
    tight: true,
  },
],
```

Text may contain HTML: `<b>bold</b>`, and `<wbr>` for a place where a long word or name may break on a phone. A plain `&` is fine.

The labels ("Ingredients:", "Valoare energetică (kJ/kcal):" and the others) are in `scripts/build-menu.js`, in `LANGUAGES`.

A section has a `title`, an `intro` (one text, or a list of texts) and its `items`. An item with `list` instead of `name` is a line without a price, like the syrup flavours on the coffee page.

## look: layout exceptions

`look` records small layout differences that the pages already had, so the pages look exactly as before the move to data files. It can be set for the whole page, a section or one product:

| Key | Meaning |
| --- | --- |
| `price`, `priceStyle` | Space inside the price bubble (`"p-4"`, or a style such as `"padding: 28px"`). |
| `name` | Space under the title: `""` for the normal space, instead of none. |
| `emptyLine` | An empty paragraph after products without text (`"m-0"` or `""`), as on the spirits page. |
| `nutrition` | `"compact"` puts the nutrition values on two lines instead of four. |
| `space` | `false` removes the space under one product. The last product of a page has none, unless the page sets `spaceAfterLast: true`. |
| `heading`, `intro` | Classes of a section title and of its last intro line. |
| `row`, `rowStyle`, `priceColumn` | Exact layout of a few price-only rows. |

New products do not need `look`: leave it out and they follow the rest of their page.
