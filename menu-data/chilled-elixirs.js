// Chilled Elixirs: menu/celix.html
// After a change, run: node scripts/build-menu.js   (see menu-data/README.md)

module.exports = {
  page: "celix.html",
  columns: [
    // Left column
    [
      {
        title: {
          en: "FRESH, JUICES & SHAKES",
          ro: "FRESH-URI, SUCURI ȘI SHAKE-URI",
        },
        intro: {
          en: "<b>Tasty ingredients for the healthiest drinks.</b>",
          ro: "<b>Ingrediente gustoase pentru cele mai sănătoase băuturi.</b>",
        },
        items: [
          {
            name: {
              en: "Orange/<wbr>Grapefruit/<wbr>Mix Fresh",
              ro: "Fresh portocale/<wbr>grepfrut/<wbr>mix",
            },
            ml: 200, price: 18,
            photo: "Freshes_ico.webp", big: "Freshes_big.webp",
            alt: {
              en: "Fresh orange and grapefruit juice at Hypso25",
              ro: "Fresh de portocale și grepfrut la Hypso25",
            },
            lines: [
              {
                en: "Freshly squeezed cold citrus juice — vibrant, zesty, and packed with natural goodness. Choose orange, grapefruit, or a mix of both.",
                ro: "Suc rece de citrice, stors pe loc — vibrant, acrișor și plin de bunătate naturală. Alege portocale, grepfrut sau un mix din amândouă.",
              },
            ],
          },
          {
            name: "Green Juice", ml: 200, price: 23,
            photo: "GreenJuice.webp", big: "GreenJuice.webp",
            ingredients: {
              en: "pineapple compote (pineapple, water, sugar), honey syrup (honey, water), spinach, matcha green tea powder, ice",
              ro: "compot de ananas (ananas, apă, zahăr), sirop de miere (miere, apă), spanac, pudră de ceai verde matcha, gheață",
            },
            nutrition: { kj: 526, kcal: 124, fat: 0.3, saturates: 0, carbs: 28, sugars: 28, protein: 1.3, salt: 0.05 },
          },
          {
            name: "Orange Juice", ml: 200, price: 23,
            photo: "OrangeJuice.webp", big: "OrangeJuice.webp",
            alt: {
              en: "Fresh orange juice at Hypso25",
              ro: "Orange Juice la Hypso25",
            },
            ingredients: {
              en: "frozen mango, peach compote (peaches, water, sugar), lemon juice, honey syrup (honey, water), ice",
              ro: "mango congelat, compot de piersici (piersici, apă, zahăr), suc de lămâie, sirop de miere (miere, apă), gheață",
            },
            nutrition: { kj: 620, kcal: 146, fat: 0.3, saturates: 0, carbs: 35, sugars: 32, protein: 0.7, salt: 0 },
          },
          {
            name: "Red Juice", ml: 200, price: 23,
            photo: "RedJuice.webp", big: "RedJuice.webp",
            ingredients: {
              en: "apple juice, frozen forest fruits, honey syrup (honey, water), fresh spearmint, ice",
              ro: "suc de mere, fructe de pădure congelate, sirop de miere (miere, apă), mentă creață proaspătă, gheață",
            },
            nutrition: { kj: 514, kcal: 121, fat: 0.1, saturates: 0, carbs: 29, sugars: 26, protein: 0.5, salt: 0 },
          },
          {
            name: "Black Shake", ml: 200, price: 25,
            photo: "Black_shake_ico.webp", big: "Black_shake_big.webp",
            ingredients: {
              en: "espresso, milk, banana, brown sugar syrup, cocoa powder",
              ro: "espresso, lapte, banană, sirop de zahăr brun, cacao pudră",
            },
            nutrition: { kj: 503, kcal: 119, fat: 2.2, saturates: 1.4, carbs: 21, sugars: 16, protein: 2.6, salt: 0.06 },
            allergens: {
              en: "Milk",
              ro: "Lapte",
            },
          },
          {
            name: "Green/<wbr>Orange/<wbr>Red SHAKE", price: "+2",
            photo: "Banana-Milk.webp",
            alt: {
              en: "Banana Milk Shake at Hypso25",
              ro: "Shake cu banană și lapte la Hypso25",
            },
            lines: [
              {
                en: "<b>We add banana and milk to our juices.</b>",
                ro: "<b>Adăugăm banană și lapte în sucurile noastre.</b>",
              },
              {
                en: "The shake versions add 50 g banana and 50 ml milk: about +78 kcal, +2.2 g protein and +8.5 g sugars.",
                ro: "Variantele shake au în plus 50 g de banană și 50 ml de lapte: aproximativ +78 kcal, +2,2 g proteine și +8,5 g zaharuri.",
              },
            ],
            allergens: {
              en: "Milk",
              ro: "Lapte",
            },
          },
        ],
      },
    ],
    // Right column
    [
      {
        title: {
          en: "LEMONADES & SOFTS",
          ro: "LIMONADE ȘI RĂCORITOARE",
        },
        intro: {
          en: "<b>Sour, sweet, and bubbly. These drinks bring a splash of fun to your glass — no caffeine, just pure refreshment.</b>",
          ro: "<b>Acrișoare, dulci și acidulate. Aduc un strop de bună dispoziție în pahar — fără cofeină, doar răcoare.</b>",
        },
        items: [
          {
            name: {
              en: "Lemonade",
              ro: "Limonadă",
            },
            ml: 500, price: 25,
            photo: "LimonadaMenta.webp", big: "LimonadaMenta.webp",
            lines: [
              {
                en: "<b>Choose from:</b> Classic/Orange/Red/Green",
                ro: "<b>Alege dintre:</b> clasică/<wbr>portocale/<wbr>roșie/<wbr>verde",
              },
            ],
            ingredients: {
              en: "water, lemon juice, sugar, ice",
              ro: "apă, suc de lămâie, zahăr, gheață",
            },
            nutrition: { kj: 518, kcal: 122, fat: 0.1, saturates: 0, carbs: 30, sugars: 28, protein: 0.2, salt: 0 },
            note: {
              en: "<b>Values above: Classic and Green (fresh mint).</b> Orange (+ fresh orange juice): 616 / 145 kJ/kcal, sugars 32 g. Red (+ forest fruits): 621 / 146 kJ/kcal, sugars 31 g.",
              ro: "<b>Valorile de mai sus: clasică și verde (mentă proaspătă).</b> Portocale (+ suc proaspăt de portocale): 616 / 145 kJ/kcal, zaharuri 32 g. Roșie (+ fructe de pădure): 621 / 146 kJ/kcal, zaharuri 31 g.",
            },
          },
          {
            name: "Coca-Cola", ml: 330, price: 13,
            photo: "coca-cola-250-ml.webp", big: "coca-cola-250-ml.webp",
          },
          {
            name: {
              en: "Tonic Water FRANKLIN & SONS",
              ro: "Apă tonică FRANKLIN & SONS",
            },
            ml: 200, price: 18,
            photo: "Franklin_sons_big.webp", big: "Franklin_sons_big.webp",
            lines: [
              {
                en: "<b>Choose from:</b> Classic/Indian/Grapefruit & Bergamot/Rhubarb & Hibiscus/Ginger Ale/Elderflower & Cucumber",
                ro: "<b>Alege dintre:</b> Classic/Indian/Grapefruit & Bergamot/Rhubarb & Hibiscus/Ginger Ale/Elderflower & Cucumber",
              },
            ],
          },
          {
            name: {
              en: "Water",
              ro: "Apă",
            },
            ml: 330, price: 12,
            photo: "Mobile_AQUA_Carpatica-icon.webp", big: "Mobile_AQUA_Carpatica-big.webp",
            alt: {
              en: "Aqua Carpatica water at Hypso25",
              ro: "Apă Aqua Carpatica la Hypso25",
            },
            lines: [
              {
                en: "<b>Choose from:</b> Still or Sparkling",
                ro: "<b>Alege dintre:</b> plată sau minerală",
                tight: true,
              },
            ],
          },
        ],
      },
    ],
  ],
};
