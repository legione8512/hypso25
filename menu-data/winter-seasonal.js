// Winter Infusions, the winter page: menu/winter.html
// After a change, run: node scripts/build-menu.js   (see menu-data/README.md)

module.exports = {
  page: "winter.html",
  look: { spaceAfterLast: true },
  columns: [
    // One column
    [
      {
        title: "Winter Spirit Infusions",
        intro: "<b>Every drink contains alcohol.</b>",
        look: { heading: "m-0 text-uppercase", intro: "" },
        items: [
          {
            name: "Mexican Tea", ml: 300, price: 33,
            photo: "missing.webp",
            ingredients: "chamomile tea, Olmeca Altos tequila, agave syrup, lemon juice",
            nutrition: { kj: 585, kcal: 140, fat: 0, saturates: 0, carbs: 14, sugars: 13, protein: 0, salt: 0 },
          },
          {
            name: "Kentucky Spiced Tea", ml: 300, price: 33,
            photo: "missing.webp",
            ingredients: "Applesin & Mint tea, Jack Daniel's whiskey, honey syrup (honey, water), lemon juice, cinnamon sticks",
            nutrition: { kj: 611, kcal: 146, fat: 0, saturates: 0, carbs: 14, sugars: 13, protein: 0.1, salt: 0 },
          },
          {
            name: "White Spirulina Glow Tea", ml: 300, price: 33,
            photo: "missing.webp",
            ingredients: "White Spirulina tea, Absolut vodka, honey syrup (honey, water), lemon juice, oat drink (water, oats, rapeseed oil, dipotassium phosphate, calcium carbonate, salt, vitamins)",
            nutrition: { kj: 646, kcal: 155, fat: 1.2, saturates: 0.1, carbs: 13, sugars: 11, protein: 0.4, salt: 0.04 },
            allergens: "Oats (gluten)",
          },
          {
            name: "Citrus Breeze Tea", ml: 300, price: 33,
            photo: "missing.webp",
            ingredients: "chamomile tea, Havana Club 7 rum, honey syrup (honey, water), mint syrup, lemon juice",
            nutrition: { kj: 605, kcal: 145, fat: 0, saturates: 0, carbs: 14, sugars: 13, protein: 0.1, salt: 0 },
          },
          {
            name: "Spiced Apple Tea", ml: 300, price: 33,
            photo: "missing.webp",
            ingredients: "Applesin & Mint tea, Martell VS cognac, honey syrup (honey, water), lemon juice, winter spice syrup, cinnamon sticks",
            nutrition: { kj: 605, kcal: 145, fat: 0, saturates: 0, carbs: 14, sugars: 13, protein: 0.1, salt: 0 },
          },
          {
            name: "Peppermint Delight Tea", ml: 300, price: 33,
            photo: "missing.webp",
            ingredients: "Green Citronella green tea, Grand Marnier liqueur, mint syrup, lemon juice, honey syrup (honey, water)",
            nutrition: { kj: 750, kcal: 179, fat: 0, saturates: 0, carbs: 22, sugars: 21, protein: 0.1, salt: 0 },
          },
          {
            name: "Mulled Wine", ml: 250, price: 27,
            photo: "missing.webp",
            ingredients: "red wine, mulled wine spice syrup (sugar, water, orange and lemon peel, cinnamon, star anise, cardamom, ginger), fresh orange juice, dried lemon slice",
            nutrition: { kj: 968, kcal: 231, fat: 0, saturates: 0, carbs: 22, sugars: 21, protein: 0.1, salt: 0 },
            allergens: "Sulphites",
          },
        ],
      },
    ],
  ],
};
