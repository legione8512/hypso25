// Coffee: menu/menu.html
// After a change, run: node scripts/build-menu.js   (see menu-data/README.md)

module.exports = {
  page: "menu.html",
  look: { price: "p-4" },
  columns: [
    // Left column
    [
      {
        title: "BLACK",
        intro: "<b>The finest specialty coffee, perfect without any sugar or milk.</b>",
        items: [
          {
            name: "Espresso", ml: 20, price: 12,
            photo: "Espresso.webp", big: "Espresso_big.webp",
            lines: ["Brewed ristretto-style from freshly ground specialty beans — a bold, concentrated expression of our finest coffee"],
          },
          {
            name: "Double", ml: 40, price: 16,
            photo: "Double.webp", big: "Double_big.webp",
            alt: "Double Espresso at Hypso25",
            lines: ["Twice the volume, same bold character — a double espresso brewed from our finest specialty beans."],
          },
          {
            name: "Long Black", ml: 100, price: 16,
            photo: "Long_black.webp", big: "Long_Black_big.webp",
            lines: ["A double espresso gently poured over hot water — smooth, strong, and aromatic, with a rich crema preserved."],
          },
          {
            name: "*Decaf", price: "+3",
            photo: "Decaf.webp", big: "Decaf_big.webp",
            alt: "Decaf coffee at Hypso25",
            lines: ["Same specialty beans, just without the caffeine. Available for any espresso-based drink."],
          },
        ],
      },
      {
        title: "WHITE",
        intro: "<b>The perfect balance - crafted with steamed perfection.</b>",
        items: [
          {
            name: "Cortado", ml: 70, price: 14,
            photo: "Cortado.webp", big: "Cortado_big.webp",
            ingredients: "milk foam, espresso",
            nutrition: { kj: 141, kcal: 34, fat: 1.8, saturates: 1.2, carbs: 2.7, sugars: 2.4, protein: 1.7, salt: 0.06 },
            allergens: "Milk",
          },
          {
            name: "Cappuccino", ml: 150, price: 16,
            photo: "Cappuccino.webp", big: "Cappuccino_big.webp",
            ingredients: "milk foam, espresso",
            nutrition: { kj: 329, kcal: 79, fat: 4.2, saturates: 2.8, carbs: "6.0", sugars: 5.6, protein: "4.0", salt: 0.13 },
            allergens: "Milk",
          },
          {
            name: "Flat White", ml: 200, price: 19,
            photo: "Flat_white.webp", big: "Flat_white_big.webp",
            ingredients: "milk foam, espresso",
            nutrition: { kj: 417, kcal: 100, fat: 5.3, saturates: 3.5, carbs: 7.7, sugars: 7.1, protein: "5.0", salt: 0.16 },
            allergens: "Milk",
          },
          {
            name: "Latte", ml: 280, price: 20,
            photo: "Latte.webp", big: "Latte_big.webp",
            ingredients: "milk foam, espresso",
            nutrition: { kj: 650, kcal: 155, fat: 8.4, saturates: 5.5, carbs: 12, sugars: 11, protein: 7.9, salt: 0.25 },
            allergens: "Milk",
          },
          {
            name: "*Alternative Milk", price: "+5",
            photo: "Lapte_vegetal.webp", big: "Lapte_vegetal_big.webp",
            alt: "Alternative Milk at Hypso25",
            lines: [{ tight: "Oat or pea milk — smooth, dairy-free, and perfect with any milk-based drink." }],
            allergens: "Oats (gluten), in oat milk",
          },
        ],
      },
      {
        title: "FLAVOURS",
        intro: "<b>Customize your coffee with our selection of premium syrups.</b>",
        items: [
          {
            list: "Classic:",
            text: "Vanilla, Dark/White Chocolate, Hazelnut.",
            allergens: "Hazelnut syrup contains nuts (hazelnuts).",
          },
          {
            list: "Fruity:",
            text: "<b></b>Raspberry, Orange Blossom, Blueberry, Frosted Mint.",
          },
          {
            list: "Seasonal:",
            text: "<b></b>Pumpkin Spice, Christmas Spice.",
          },
          {
            list: "Creative:",
            text: "<b></b>Bubble Gum, Butterscotch, Amaretto, Tiramisu, Creme Brulee, Gingerbread, Lavender, Frosted Mint, Salted Caramel.",
          },
          {
            name: "1 Flavour", price: "+3",
            lines: [{ small: "Enhance your drink with a single flavour — from classic to creative." }],
            look: { row: "row container", rowStyle: "padding-right: 0", priceColumn: "col-1 mt-3 mt-sm-2" },
          },
          {
            name: "2 Flavours", price: "+5",
            lines: [{ small: "Double the flavour, double the fun. Combine your favourites freely." }],
            look: { row: "row pt-5 container", rowStyle: "padding-right: 0", priceColumn: "col-1 mt-3 mt-sm-2" },
          },
        ],
      },
    ],
    // Right column
    [
      {
        title: "CREATIVE",
        intro: "<b>Artisan coffee with a twist. Try our house-made creations.</b>",
        look: { heading: "mb-0 pt-5 pt-lg-0" },
        items: [
          {
            name: "Tiramisu Cappuccino", ml: 150, price: 19,
            ingredients: "milk, coffee, tiramisu syrup (sugar, water, natural flavoring, citric acid)",
            nutrition: { kj: 462, kcal: 110, fat: 4.2, saturates: 2.8, carbs: 14, sugars: 14, protein: 4, salt: 0.13 },
            allergens: "Milk",
            look: { nutrition: "compact" },
          },
          {
            name: "Creme Brulee Cappuccino", ml: 150, price: 19,
            ingredients: "milk, coffee, creme brulee syrup(sugar, water, natural flavoring, colouring E150a)",
            nutrition: { kj: 462, kcal: 110, fat: 4.2, saturates: 2.8, carbs: 14, sugars: 14, protein: 4, salt: 0.13 },
            allergens: "Milk",
            look: { nutrition: "compact" },
          },
          {
            name: "Gingerbread Latte", ml: 280, price: 23,
            ingredients: "milk, coffee, gingerbread syrup(sugar, water, natural flavoring, acidifier: citric acid, natural cinnamon flavoring and other natural flavours, colouring: E150a)",
            nutrition: { kj: 917, kcal: 218, fat: 8.4, saturates: 5.5, carbs: 28, sugars: 27, protein: 7.9, salt: 0.25 },
            allergens: "Milk",
            look: { nutrition: "compact" },
          },
          {
            name: "Lavender Vanilla Latte", ml: 280, price: 25,
            ingredients: "milk, coffee, lavender syrup(sugar, water, lavender essential oil, natural flavours, colorants E129, E133 acidifier: citric acid), vanilla syrup(sugar, water, natural vanilla Flavour, acidifier: citric acid, preservative: E202)",
            nutrition: { kj: 917, kcal: 218, fat: 8.4, saturates: 5.5, carbs: 28, sugars: 27, protein: 7.9, salt: 0.25 },
            allergens: "Milk",
            look: { nutrition: "compact" },
          },
          {
            name: "Blueberry White Choc Mocha", ml: 280, price: 25,
            ingredients: "milk, coffee, blueberry syrup(natural blueberry flavour and other natural flavours, lemon juice concentrate, natural flavour), chocolate syrup(natural cocoa flavour, colouring: E150a, acidifier: citric acid), white chocolate syrup(natural flavour), sugar, water.",
            nutrition: { kj: 943, kcal: 225, fat: 8.8, saturates: 5.8, carbs: 28, sugars: 28, protein: 8.3, salt: 0.26 },
            allergens: "Milk",
          },
          {
            name: "Salted Caramel Mocha", ml: 280, price: 25,
            ingredients: "milk, coffee, salted caramel syrup(sugar, water, salt, natural flavour, colouring: E150a), chocolate syrup(sugar, water, natural cocoa flavour, colouring: E150a, acidifier: citric acid)",
            nutrition: { kj: 863, kcal: 205, fat: 8.6, saturates: 5.7, carbs: 24, sugars: 24, protein: 8.1, salt: 0.35 },
            allergens: "Milk",
          },
        ],
      },
      {
        title: "TASTING MENU",
        intro: [
          "<b>Can’t choose just one?</b>",
          "<b>Our tasting sets let you sample multiple specialty drinks and savour the full spectrum of flavour in one go.</b>",
        ],
        items: [
          {
            name: "Classic", price: 25,
            photo: "ClassicCombo.webp", big: "ClassicCombo.webp",
            alt: "Classic coffee combo at Hypso25",
            lines: [
              { tight: "<b>Espresso + Cappuccino - 170ml</b>" },
              "A duo of our signature drinks — a bold espresso followed by a smooth cappuccino.",
            ],
          },
          {
            name: "Combo", price: 45,
            photo: "Combo.webp", big: "Combo.webp",
            alt: "Classic coffee combo at Hypso25",
            lines: [
              { tight: "<b>Espresso + Cappuccino + V60 - 420ml</b>" },
              "Experience the bold, the creamy, and the delicate in one curated tasting.",
            ],
          },
        ],
      },
      {
        title: "ALTERNATIVE TEA & COFFEE",
        intro: "<b>From slow drips to vibrant infusions.</b>",
        items: [
          {
            name: "V60", ml: 250, price: 20,
            photo: "V60.webp", big: "V60_big.webp",
            alt: "Coffee combo at Hypso25",
            lines: [{ tight: "A handcrafted filter coffee made with the V60 method — smooth, clean, and full of subtle flavours." }],
          },
          {
            name: "Cold Brew", ml: 250, price: 20,
            photo: "Cold_brew_ico.webp", big: "Cold_brew_big.webp",
            alt: "V60 filter coffee at Hypso25",
            lines: [{ tight: "Brewed cold and slow for hours — smooth, mellow, and made to refresh." }],
          },
          {
            name: "Syphon", ml: 250, price: 23,
            photo: "Syphon.webp", big: "Syphon.webp",
            alt: "Syphon coffee at Hypso25",
            lines: [{ tight: "Brewed with a touch of science and a lot of flavour. The Syphon delivers a clean, vibrant coffee with a smooth finish." }],
          },
          {
            name: "Teas", ml: 300, price: 20,
            photo: "tea.webp", big: "tea.webp",
            alt: "Tea at Hypso25",
            lines: [
              "<b>Botanical blends and modern infusions — each tea is brewed fresh to highlight natural flavours.</b>",
              { tight: "<b>Choose from:</b> White Spirulina, Green Citronella, Black Studio 54, Applesin & Mint, Chamomile" },
            ],
          },
          {
            name: "Hot Chocolate", ml: 200, price: 18,
            photo: "Ciocolata_calda.webp", big: "Ciocolata_calda_big.webp",
            lines: ["<b>Rich, velvety hot chocolate — available in dark or white.</b>"],
            ingredients: "milk; dark mix (sugar, fat-reduced cocoa powder 30%, corn starch, flavouring: vanillin) or white mix (sugar, corn starch, milk powder, thickener: guar gum, flavourings, vanillin, salt)",
            nutrition: { kj: 914, kcal: 217, fat: 6.8, saturates: 4.4, carbs: 32, sugars: 21, protein: 6.8, salt: 0.17 },
            note: "Values for dark hot chocolate. White: 796 / 189 kJ/kcal, fat 5.3 g (saturates 3.5 g), carbohydrates 30 g (sugars 24 g), protein 5.4 g, salt 0.26 g.",
            allergens: "Milk. The white mix may contain soy, nuts and sulphites.",
          },
        ],
      },
    ],
  ],

  // Coffee prices on the homepage (index.html and ro.html): each one is the sum of these menu products.
  homepage: {
    Espresso: ["Espresso"],
    Double: ["Double"],
    Decaf: ["Espresso", "*Decaf"],
    "Decaf Double": ["Double", "*Decaf"],
    "Long Black": ["Long Black"],
    Cortado: ["Cortado"],
    Cappuccino: ["Cappuccino"],
    "Flat White": ["Flat White"],
    Latte: ["Latte"],
    "Espresso & Cappuccino": ["Classic"],
    "Espresso, Cappuccino, V60": ["Combo"],
  },
};
