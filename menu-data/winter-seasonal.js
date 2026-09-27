// Winter Infusions, the winter page: menu/winter.html
// After a change, run: node scripts/build-menu.js   (see menu-data/README.md)

module.exports = {
  page: "winter.html",
  look: { spaceAfterLast: true },
  columns: [
    // One column
    [
      {
        title: {
          en: "Winter Spirit Infusions",
          ro: "Infuzii de iarnă cu alcool",
        },
        intro: {
          en: "<b>Every drink contains alcohol.</b>",
          ro: "<b>Toate băuturile conțin alcool.</b>",
        },
        look: { heading: "m-0 text-uppercase", intro: "" },
        items: [
          {
            name: "Mexican Tea", ml: 300, price: 33,
            photo: "missing.webp",
            ingredients: {
              en: "chamomile tea, Olmeca Altos tequila, agave syrup, lemon juice",
              ro: "ceai de mușețel, tequila Olmeca Altos, sirop de agave, suc de lămâie",
            },
            nutrition: { kj: 585, kcal: 140, fat: 0, saturates: 0, carbs: 14, sugars: 13, protein: 0, salt: 0 },
          },
          {
            name: "Kentucky Spiced Tea", ml: 300, price: 33,
            photo: "missing.webp",
            ingredients: {
              en: "Applesin & Mint tea, Jack Daniel's whiskey, honey syrup (honey, water), lemon juice, cinnamon sticks",
              ro: "ceai Applesin & Mint, whiskey Jack Daniel's, sirop de miere (miere, apă), suc de lămâie, batoane de scorțișoară",
            },
            nutrition: { kj: 611, kcal: 146, fat: 0, saturates: 0, carbs: 14, sugars: 13, protein: 0.1, salt: 0 },
          },
          {
            name: "White Spirulina Glow Tea", ml: 300, price: 33,
            photo: "missing.webp",
            ingredients: {
              en: "White Spirulina tea, Absolut vodka, honey syrup (honey, water), lemon juice, oat drink (water, oats, rapeseed oil, dipotassium phosphate, calcium carbonate, salt, vitamins)",
              ro: "ceai White Spirulina, vodcă Absolut, sirop de miere (miere, apă), suc de lămâie, băutură din ovăz (apă, ovăz, ulei de rapiță, fosfat dipotasic, carbonat de calciu, sare, vitamine)",
            },
            nutrition: { kj: 646, kcal: 155, fat: 1.2, saturates: 0.1, carbs: 13, sugars: 11, protein: 0.4, salt: 0.04 },
            allergens: {
              en: "Oats (gluten)",
              ro: "Ovăz (gluten)",
            },
          },
          {
            name: "Citrus Breeze Tea", ml: 300, price: 33,
            photo: "missing.webp",
            ingredients: {
              en: "chamomile tea, Havana Club 7 rum, honey syrup (honey, water), mint syrup, lemon juice",
              ro: "ceai de mușețel, rom Havana Club 7, sirop de miere (miere, apă), sirop de mentă, suc de lămâie",
            },
            nutrition: { kj: 605, kcal: 145, fat: 0, saturates: 0, carbs: 14, sugars: 13, protein: 0.1, salt: 0 },
          },
          {
            name: "Spiced Apple Tea", ml: 300, price: 33,
            photo: "missing.webp",
            ingredients: {
              en: "Applesin & Mint tea, Martell VS cognac, honey syrup (honey, water), lemon juice, winter spice syrup, cinnamon sticks",
              ro: "ceai Applesin & Mint, coniac Martell VS, sirop de miere (miere, apă), suc de lămâie, sirop de condimente de iarnă, batoane de scorțișoară",
            },
            nutrition: { kj: 605, kcal: 145, fat: 0, saturates: 0, carbs: 14, sugars: 13, protein: 0.1, salt: 0 },
          },
          {
            name: "Peppermint Delight Tea", ml: 300, price: 33,
            photo: "missing.webp",
            ingredients: {
              en: "Green Citronella green tea, Grand Marnier liqueur, mint syrup, lemon juice, honey syrup (honey, water)",
              ro: "ceai verde Green Citronella, lichior Grand Marnier, sirop de mentă, suc de lămâie, sirop de miere (miere, apă)",
            },
            nutrition: { kj: 750, kcal: 179, fat: 0, saturates: 0, carbs: 22, sugars: 21, protein: 0.1, salt: 0 },
          },
          {
            name: {
              en: "Mulled Wine",
              ro: "Vin fiert",
            },
            ml: 250, price: 27,
            photo: "missing.webp",
            ingredients: {
              en: "red wine, mulled wine spice syrup (sugar, water, orange and lemon peel, cinnamon, star anise, cardamom, ginger), fresh orange juice, dried lemon slice",
              ro: "vin roșu, sirop de condimente pentru vin fiert (zahăr, apă, coajă de portocală și de lămâie, scorțișoară, anason stelat, cardamom, ghimbir), suc proaspăt de portocale, felie de lămâie uscată",
            },
            nutrition: { kj: 968, kcal: 231, fat: 0, saturates: 0, carbs: 22, sugars: 21, protein: 0.1, salt: 0 },
            allergens: {
              en: "Sulphites",
              ro: "Sulfiți",
            },
          },
        ],
      },
    ],
  ],
};
