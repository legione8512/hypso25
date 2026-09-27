// Chilled Elixirs: menu/celix.html
// After a change, run: node scripts/build-menu.js   (see menu-data/README.md)

module.exports = {
  page: "celix.html",
  columns: [
    // Left column
    [
      {
        title: "FRESH, JUICES & SHAKES",
        intro: "<b>Tasty ingredients for the healthiest drinks.</b>",
        items: [
          {
            name: "Orange/<wbr>Grapefruit/<wbr>Mix Fresh", ml: 200, price: 18,
            photo: "Freshes_ico.webp", big: "Freshes_big.webp",
            alt: "Fresh orange and grapefruit juice at Hypso25",
            lines: ["Freshly squeezed cold citrus juice — vibrant, zesty, and packed with natural goodness. Choose orange, grapefruit, or a mix of both."],
          },
          {
            name: "Green Juice", ml: 200, price: 23,
            photo: "GreenJuice.webp", big: "GreenJuice.webp",
            ingredients: "pineapple compote (pineapple, water, sugar), honey syrup (honey, water), spinach, matcha green tea powder, ice",
            nutrition: { kj: 526, kcal: 124, fat: 0.3, saturates: 0, carbs: 28, sugars: 28, protein: 1.3, salt: 0.05 },
          },
          {
            name: "Orange Juice", ml: 200, price: 23,
            photo: "OrangeJuice.webp", big: "OrangeJuice.webp",
            alt: "Fresh orange juice at Hypso25",
            ingredients: "frozen mango, peach compote (peaches, water, sugar), lemon juice, honey syrup (honey, water), ice",
            nutrition: { kj: 620, kcal: 146, fat: 0.3, saturates: 0, carbs: 35, sugars: 32, protein: 0.7, salt: 0 },
          },
          {
            name: "Red Juice", ml: 200, price: 23,
            photo: "RedJuice.webp", big: "RedJuice.webp",
            ingredients: "apple juice, frozen forest fruits, honey syrup (honey, water), fresh spearmint, ice",
            nutrition: { kj: 514, kcal: 121, fat: 0.1, saturates: 0, carbs: 29, sugars: 26, protein: 0.5, salt: 0 },
          },
          {
            name: "Black Shake", ml: 200, price: 25,
            photo: "Black_shake_ico.webp", big: "Black_shake_big.webp",
            ingredients: "espresso, milk, banana, brown sugar syrup, cocoa powder",
            nutrition: { kj: 503, kcal: 119, fat: 2.2, saturates: 1.4, carbs: 21, sugars: 16, protein: 2.6, salt: 0.06 },
            allergens: "Milk",
          },
          {
            name: "Green/<wbr>Orange/<wbr>Red SHAKE", price: "+2",
            photo: "Banana-Milk.webp",
            alt: "Banana Milk Shake at Hypso25",
            lines: [
              "<b>We add banana and milk to our juices.</b>",
              "The shake versions add 50 g banana and 50 ml milk: about +78 kcal, +2.2 g protein and +8.5 g sugars.",
            ],
            allergens: "Milk",
          },
        ],
      },
    ],
    // Right column
    [
      {
        title: "LEMONADES & SOFTS",
        intro: "<b>Sour, sweet, and bubbly. These drinks bring a splash of fun to your glass — no caffeine, just pure refreshment.</b>",
        items: [
          {
            name: "Lemonade", ml: 500, price: 25,
            photo: "LimonadaMenta.webp", big: "LimonadaMenta.webp",
            lines: ["<b>Choose from:</b> Classic/Orange/Red/Green"],
            ingredients: "water, lemon juice, sugar, ice",
            nutrition: { kj: 518, kcal: 122, fat: 0.1, saturates: 0, carbs: 30, sugars: 28, protein: 0.2, salt: 0 },
            note: "<b>Values above: Classic and Green (fresh mint).</b> Orange (+ fresh orange juice): 616 / 145 kJ/kcal, sugars 32 g. Red (+ forest fruits): 621 / 146 kJ/kcal, sugars 31 g.",
          },
          {
            name: "Coca-Cola", ml: 330, price: 13,
            photo: "coca-cola-250-ml.webp", big: "coca-cola-250-ml.webp",
          },
          {
            name: "Tonic Water FRANKLIN & SONS", ml: 200, price: 18,
            photo: "Franklin_sons_big.webp", big: "Franklin_sons_big.webp",
            lines: ["<b>Choose from:</b> Classic/Indian/Grapefruit & Bergamot/Rhubarb & Hibiscus/Ginger Ale/Elderflower & Cucumber"],
          },
          {
            name: "Water", ml: 330, price: 12,
            photo: "Mobile_AQUA_Carpatica-icon.webp", big: "Mobile_AQUA_Carpatica-big.webp",
            alt: "Aqua Carpatica water at Hypso25",
            lines: [{ tight: "<b>Choose from:</b> Still or Sparkling" }],
          },
        ],
      },
    ],
  ],
};
