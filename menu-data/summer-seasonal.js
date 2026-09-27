// Seasonal Sips, the summer page (not linked in winter): menu/seasonal.html
// After a change, run: node scripts/build-menu.js   (see menu-data/README.md)

module.exports = {
  page: "seasonal.html",
  look: { spaceAfterLast: true },
  columns: [
    // One column
    [
      {
        title: {
          en: "Heatwave Elixirs",
          ro: "Elixiruri de caniculă",
        },
        intro: {
          en: "<b>Refreshing. Delicious. Unique.</b>",
          ro: "<b>Răcoritoare. Delicioase. Unice.</b>",
        },
        look: { heading: "m-0 text-uppercase", intro: "" },
        items: [
          {
            name: "Frozen Mirage", ml: 250, price: 35,
            photo: "missing.webp",
            alt: {
              en: "Frozen Mirage cocktail at Hypso25",
              ro: "Cocktail Frozen Mirage la Hypso25",
            },
            ingredients: {
              en: "Havana 7 rum, frozen mango, pineapple juice, sugar syrup (sugar, water), lemon juice, fresh mint, ice",
              ro: "rom Havana 7, mango congelat, suc de ananas, sirop de zahăr (zahăr, apă), suc de lămâie, mentă proaspătă, gheață",
            },
            nutrition: { kj: 843, kcal: 201, fat: 0.2, saturates: 0, carbs: 21, sugars: 20, protein: 0.5, salt: 0.01 },
          },
          {
            name: "Crisp Whisper", ml: 250, price: 35,
            photo: "missing.webp",
            ingredients: {
              en: "Absolut vodka, white peach syrup, lemon juice, salt, mineral water, ice",
              ro: "vodcă Absolut, sirop de piersici albe, suc de lămâie, sare, apă minerală, gheață",
            },
            nutrition: { kj: 695, kcal: 166, fat: 0.1, saturates: 0, carbs: 14, sugars: 13, protein: 0.1, salt: 0.3 },
          },
          {
            name: "Spicy Sunset", ml: 250, price: 35,
            photo: "missing.webp",
            ingredients: {
              en: "Olmeca Altos tequila, fresh orange juice, pineapple juice, lemon juice, agave syrup, grenadine syrup, salt, ice",
              ro: "tequila Olmeca Altos, suc proaspăt de portocale, suc de ananas, suc de lămâie, sirop de agave, sirop de grenadine, sare, gheață",
            },
            nutrition: { kj: 879, kcal: 210, fat: 0.1, saturates: 0, carbs: 25, sugars: 24, protein: 0.4, salt: 0.31 },
          },
          {
            name: "Citrus Bloom", ml: 250, price: 35,
            photo: "missing.webp",
            ingredients: {
              en: "Beefeater Blood Orange gin, pineapple juice, lemon juice, sugar syrup (sugar, water), Angostura bitters, ice",
              ro: "gin Beefeater Blood Orange, suc de ananas, suc de lămâie, sirop de zahăr (zahăr, apă), bitter Angostura, gheață",
            },
            nutrition: { kj: 700, kcal: 167, fat: 0, saturates: 0, carbs: 15, sugars: 14, protein: 0.2, salt: 0 },
          },
          {
            name: "Berry Breeze", ml: 250, price: 35,
            photo: "missing.webp",
            ingredients: {
              en: "Absolut vodka, Visinata Bran sour cherry liqueur, frozen forest fruits, lemon juice, sugar syrup (sugar, water), Franklin & Sons Grapefruit & Bergamot tonic water, ice",
              ro: "vodcă Absolut, lichior de vișine Vișinată Bran, fructe de pădure congelate, suc de lămâie, sirop de zahăr (zahăr, apă), apă tonică Franklin & Sons Grapefruit & Bergamot, gheață",
            },
            nutrition: { kj: 893, kcal: 213, fat: 0.1, saturates: 0, carbs: 20, sugars: 19, protein: 0.3, salt: 0 },
          },
          {
            name: "Lavender Lemonade", ml: 250, price: 35,
            photo: "missing.webp",
            ingredients: {
              en: "Beefeater gin, lavender syrup, lemon juice, still water, Franklin & Sons Grapefruit & Bergamot tonic water, ice",
              ro: "gin Beefeater, sirop de lavandă, suc de lămâie, apă plată, apă tonică Franklin & Sons Grapefruit & Bergamot, gheață",
            },
            nutrition: { kj: 804, kcal: 192, fat: 0.1, saturates: 0, carbs: 20, sugars: 19, protein: 0.1, salt: 0 },
          },
        ],
      },
    ],
  ],
};
