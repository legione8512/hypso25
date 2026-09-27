// Specialty Drinks: menu/sdrinks.html
// After a change, run: node scripts/build-menu.js   (see menu-data/README.md)

module.exports = {
  page: "sdrinks.html",
  look: { price: "p-4" },
  columns: [
    // Left column
    [
      {
        title: {
          en: "TONIC-INFUSED",
          ro: "CU APĂ TONICĂ",
        },
        intro: {
          en: "<b>Bold coffee meets the crisp fizz of tonic — refreshing, bright, and full of character.</b>",
          ro: "<b>Cafeaua intensă întâlnește efervescența apei tonice — răcoritoare, luminoasă și plină de caracter.</b>",
        },
        items: [
          {
            name: "Endless Summer", ml: 200, price: 29,
            photo: "Cold_brew_tonic_ico.webp", big: "Cold_brew_tonic_big.webp",
            alt: {
              en: "Endless Summer specialty drink at Hypso25",
              ro: "Băutura de specialitate Endless Summer la Hypso25",
            },
            ingredients: {
              en: "coffee, water, tonic water, elderflower syrup(sugar, water, acidifier: citric acid, lemon juice concentrate, natural grapefruit and lychee flavour, elderflower extract), ice",
              ro: "cafea, apă, apă tonică, sirop de soc (zahăr, apă, acidifiant: acid citric, suc concentrat de lămâie, aromă naturală de grepfrut și lychee, extract de flori de soc), gheață",
            },
            nutrition: { kj: 233, kcal: 55, fat: 0, saturates: 0, carbs: 14, sugars: 13, protein: 0.1, salt: 0 },
          },
          {
            name: "Espresso Tonic", ml: 200, price: 29,
            photo: "Espresso_tonic_ico.webp", big: "espresso_tonic_big.webp",
            ingredients: {
              en: "coffee, water, tonic water, ice",
              ro: "cafea, apă, apă tonică, gheață",
            },
            nutrition: { kj: 182, kcal: 43, fat: 0, saturates: 0, carbs: 11, sugars: 10, protein: 0, salt: 0.01 },
          },
          {
            name: "Cold Brew Tonic", ml: 200, price: 29,
            photo: "Cold_brew_tonic_ico.webp", big: "Cold_brew_tonic_big.webp",
            ingredients: {
              en: "coffee, water, tonic water, ice",
              ro: "cafea, apă, apă tonică, gheață",
            },
            nutrition: { kj: 106, kcal: 25, fat: 0, saturates: 0, carbs: 6.1, sugars: 5.9, protein: 0.1, salt: 0 },
          },
          {
            name: {
              en: "Add-in Flavour",
              ro: "Aromă în plus",
            },
            price: "+3",
            lines: [
              {
                en: "Vanilla, Lavender, Blueberry, Raspberry, White Chocolate",
                ro: "Vanilie, lavandă, afine, zmeură, ciocolată albă",
                tight: true,
              },
            ],
            look: { name: "", row: "row container pr-0", priceColumn: "col-1 mt-4 mt-md-2" },
          },
        ],
      },
    ],
    // Right column
    [
      {
        title: {
          en: "COLD & SMOOTH",
          ro: "RECI ȘI CATIFELATE",
        },
        intro: {
          en: "<b>Cool down without giving up your coffee fix.</b>",
          ro: "<b>Răcorește-te fără să renunți la doza ta de cafea.</b>",
        },
        look: { heading: "mb-0 pt-5", intro: "mb-4" },
        items: [
          {
            name: "Cold Latte", ml: 200, price: 20,
            photo: "cold_latte_ico.webp", big: "Cold_latte_big.webp",
            ingredients: {
              en: "coffee, water, milk, ice",
              ro: "cafea, apă, lapte, gheață",
            },
            nutrition: { kj: 204, kcal: 49, fat: 2.6, saturates: 1.7, carbs: 3.8, sugars: 3.5, protein: 2.6, salt: 0.08 },
            allergens: {
              en: "Milk",
              ro: "Lapte",
            },
          },
          {
            name: "Inverted Flat White", ml: 200, price: 20,
            photo: "Inverted_flat_white_ico.webp", big: "Inverted_Flat_white_big.webp",
            ingredients: {
              en: "coffee, water, milk, sugar syrup (sugar, water), ice",
              ro: "cafea, apă, lapte, sirop de zahăr (zahăr, apă), gheață",
            },
            nutrition: { kj: 386, kcal: 92, fat: 3.6, saturates: 2.3, carbs: 12, sugars: 11, protein: 3.3, salt: 0.11 },
            allergens: {
              en: "Milk",
              ro: "Lapte",
            },
          },
          {
            name: "Café Frappe", ml: 400, price: 20,
            photo: "Cafe_frappe.webp", big: "Cafe_Frappe_big.webp",
            ingredients: {
              en: "coffee, water, milk, sugar, ice",
              ro: "cafea, apă, lapte, zahăr, gheață",
            },
            nutrition: { kj: 424, kcal: 101, fat: 3.5, saturates: 2.3, carbs: 14, sugars: 14, protein: 3.3, salt: 0.11 },
            allergens: {
              en: "Milk",
              ro: "Lapte",
            },
          },
        ],
      },
    ],
  ],
};
