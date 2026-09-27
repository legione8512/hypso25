// Cocktails: menu/vcock.html
// After a change, run: node scripts/build-menu.js   (see menu-data/README.md)

module.exports = {
  page: "vcock.html",
  columns: [
    // Left column
    [
      {
        title: "Cocktails With a Kick",
        intro: "<b>Strong, stylish, and full of flavour. Not for the faint of taste.</b>",
        look: { heading: "m-0 text-uppercase", intro: "" },
        items: [
          {
            name: "Old Fashioned", ml: 200, price: 35,
            photo: "Old_fashioned.webp", big: "Old_fashioned_big.webp",
            alt: "Old Fashioned cocktail at Hypso25",
            ingredients: "Jameson whiskey, sugar, water, Angostura bitters, orange peel, ice",
            nutrition: { kj: 686, kcal: 165, fat: 0, saturates: 0, carbs: 6.3, sugars: 6.3, protein: 0, salt: 0 },
          },
          {
            name: "Negroni", ml: 200, price: 35,
            photo: "Negroni_ico.webp", big: "Negroni_big.webp",
            alt: "Negroni cocktail at Hypso25",
            ingredients: "Campari, Antica Formula red vermouth, Beefeater Blood Orange gin, orange peel, ice",
            nutrition: { kj: 751, kcal: 180, fat: 0, saturates: 0, carbs: 12, sugars: 12, protein: 0, salt: 0 },
            allergens: "Sulphites",
          },
          {
            name: "Amaretto Sour", ml: 200, price: 35,
            photo: "Amaretto_sour_ico.webp", big: "Amaretto_sour_big.webp",
            alt: "Amaretto Sour cocktail at Hypso25",
            ingredients: "Amaretto Disaronno liqueur, lemon juice, pasteurized egg white, ice",
            nutrition: { kj: 752, kcal: 179, fat: 0.1, saturates: 0, carbs: 20, sugars: 19, protein: 1.2, salt: 0.04 },
            allergens: "Egg",
          },
          {
            name: "Whiskey Sour", ml: 200, price: 35,
            photo: "Whiskey_sour_ico.webp", big: "Whiskey_sour_big.webp",
            alt: "Whiskey Sour cocktail at Hypso25",
            ingredients: "Jameson whiskey, lemon juice, sugar, water, pasteurized egg white, ice",
            nutrition: { kj: 835, kcal: 200, fat: 0.1, saturates: 0, carbs: 15, sugars: 14, protein: 1.2, salt: 0.04 },
            allergens: "Egg",
          },
          {
            name: "White Lady", ml: 200, price: 35,
            photo: "White_lady_ico.webp", big: "White_lady_big.webp",
            alt: "White Lady cocktail at Hypso25",
            ingredients: "Beefeater Strawberry gin, lemon juice, elderflower syrup(sugar, water, acidifier: citric acid, lemon juice concentrate, natural flavour, natural grapefruit flavour, natural lychee flavour, elderflower extract), pasteurized egg white, ice",
            nutrition: { kj: 796, kcal: 190, fat: 0.1, saturates: 0, carbs: 15, sugars: 14, protein: 1.2, salt: 0.05 },
            allergens: "Egg",
          },
          {
            name: "Paloma", ml: 200, price: 35,
            photo: "Paloma_ico.webp", big: "Paloma_big.webp",
            alt: "Paloma cocktail at Hypso25",
            ingredients: "Olmeca Altos tequila, grapefruit juice, Franklin & Sons Grapefruit & Bergamot tonic water, ice",
            nutrition: { kj: 552, kcal: 132, fat: 0.1, saturates: 0, carbs: 12, sugars: 12, protein: 0, salt: 0 },
          },
          {
            name: "Bellini", ml: 200, price: 35,
            photo: "Bellini_ico.webp", big: "Bellini_big.webp",
            alt: "Bellini cocktail at Hypso25",
            ingredients: "Prosecco, Peachtree peach liqueur, sea buckthorn puree(sea buckthorn , sugar), sugar, water, ice",
            nutrition: { kj: 822, kcal: 196, fat: 0.8, saturates: 0.2, carbs: 21, sugars: 21, protein: 0.2, salt: 0 },
            allergens: "Sulphites",
          },
          {
            name: "Ruby Royale", ml: 200, price: 35,
            photo: "Ruby_royale_ico.webp", big: "Ruby_royale_big.webp",
            alt: "Ruby Royale cocktail at Hypso25",
            ingredients: "Prosecco, grenadine syrup(sugar, water, fruit juice concentrate, acidifier: citric acid, natural flavour, natural vanilla flavour with other natural flavours, colouring: E129), ice",
            nutrition: { kj: 484, kcal: 116, fat: 0, saturates: 0, carbs: 6.3, sugars: 6.3, protein: 0, salt: 0 },
            allergens: "Sulphites",
          },
        ],
      },
      {
        title: "MOST WANTED",
        intro: "<b>The fan favorites — iconic, irresistible, and always in high demand. Sip the legends.</b>",
        items: [
          {
            name: "Cuba Libre", ml: 350, price: 35,
            photo: "Cuba_libre_ico.webp", big: "Cuba_libre_big.webp",
            alt: "Cuba Libre cocktail at Hypso25",
            ingredients: "Havana 7 rum, Coca-Cola, lime, ice",
            nutrition: { kj: 728, kcal: 174, fat: 0, saturates: 0, carbs: 16, sugars: 16, protein: 0, salt: 0 },
          },
          {
            name: "Mojito", ml: 350, price: 35,
            photo: "Mojito_ico.webp", big: "Mojito_big.webp",
            alt: "Mojito cocktail at Hypso25",
            ingredients: "Havana 7 rum, sparkling water, fresh mint, lime, brown sugar, water, ice",
            nutrition: { kj: 691, kcal: 165, fat: 0, saturates: 0, carbs: 19, sugars: 18, protein: 0.1, salt: 0 },
          },
          {
            name: "Gin Tonic", ml: 350, price: 35,
            photo: "Gin_Tonic_ico.webp", big: "Gin_Tonic_big.webp",
            alt: "Gin Tonic cocktail at Hypso25",
            ingredients: "Your choice of gin (Hendrick's, Tanqueray No. Ten, Monkey 47, Gin Mare, Beefeater 24), your choice of Fever-Tree tonic water (Mediterranean, Indian, Aromatic, Elderflower), ice",
            nutrition: { kj: 613, kcal: 147, fat: 0, saturates: 0, carbs: 12, sugars: 12, protein: 0, salt: 0 },
            note: "Values for an average gin of 45% vol; they vary by about 10 kcal with the gin chosen.",
          },
          {
            name: "Hugo", ml: 350, price: 35,
            photo: "Hugo_ico.webp", big: "Hugo_big.webp",
            alt: "Hugo cocktail at Hypso25",
            ingredients: "Prosecco, elderflower liqueur, elderflower syrup(sugar, water, acidifier: citric acid, lemon juice concentrate, natural flavour, natural grapefruit flavour, natural lychee flavour, elderflower extract), fresh mint, lime juice, ice",
            nutrition: { kj: 794, kcal: 189, fat: 0, saturates: 0, carbs: 24, sugars: 23, protein: 0, salt: 0 },
            allergens: "Sulphites",
          },
          {
            name: "Aperol Spritz", ml: 350, price: 35,
            photo: "Aperol_spritz_ico.webp", big: "Aperol_spritz_big.webp",
            alt: "Aperol Spritz cocktail at Hypso25",
            ingredients: "Aperol, Prosecco, Franklin & Sons Grapefruit & Bergamot tonic water, oranges, ice",
            nutrition: { kj: 889, kcal: 212, fat: 0, saturates: 0, carbs: 21, sugars: 21, protein: 0, salt: 0 },
            allergens: "Sulphites",
          },
        ],
      },
    ],
    // Right column
    [
      {
        title: "MOCKTAILS",
        intro: "<b>All the taste, none of the alcohol. Crafted with balance, care, and a splash of imagination.</b>",
        items: [
          {
            name: "Porn Star Collins", ml: 200, price: 33,
            photo: "Porn_star_collins_ico.webp", big: "Porn_star_collins_big.webp",
            alt: "Porn Star Collins cocktail at Hypso25",
            ingredients: "Franklin & Sons tonic water, fresh orange juice, passion fruit puree, lemon juice, vanilla sugar, water, ice",
            nutrition: { kj: 633, kcal: 149, fat: 0.2, saturates: 0, carbs: 36, sugars: 34, protein: 0.7, salt: 0 },
          },
          {
            name: "Virgin Mojito", ml: 200, price: 33,
            photo: "Virgin_mojito_ico.webp", big: "Virgin_mojito_big.webp",
            alt: "Virgin Mojito cocktail at Hypso25",
            ingredients: "Franklin & Sons ginger ale, passion fruit puree, lemon juice, brown sugar, water, ice",
            nutrition: { kj: 414, kcal: 97, fat: 0.1, saturates: 0, carbs: 24, sugars: 23, protein: 0.4, salt: 0 },
          },
          {
            name: "Virgin Hugo", ml: 200, price: 33,
            photo: "Virgin_hugo_ico.webp", big: "Virgin_hugo_big.webp",
            alt: "Virgin Hugo cocktail at Hypso25",
            ingredients: "Franklin & Sons Elderflower & Cucumber tonic water, elderflower syrup(sugar, water, acidifier: citric acid, lemon juice concentrate, natural flavour, natural grapefruit flavour, natural lychee flavour, elderflower extract), lemon juice, fresh mint, ice",
            nutrition: { kj: 370, kcal: 87, fat: 0, saturates: 0, carbs: 22, sugars: 21, protein: 0, salt: 0 },
          },
          {
            name: "Virgin Gin Tonic", ml: 200, price: 33,
            photo: "Gin_Tonic_ico.webp", big: "Gin_Tonic_big.webp",
            alt: "Virgin Gin Tonic cocktail at Hypso25",
            ingredients: "Tanqueray 0.0% alcohol-free gin, Franklin & Sons tonic water, lime, ice",
            nutrition: { kj: 279, kcal: 66, fat: 0, saturates: 0, carbs: 16, sugars: 16, protein: 0, salt: 0.04 },
            look: { name: "" },
          },
        ],
      },
      {
        title: "BESPOKE COCKTAILS",
        intro: "<b>Our signature creations — handcrafted cocktails that showcase bold flavours, premium spirits, and a touch of artistry.</b>",
        items: [
          {
            name: "Porn Star Martini 25", ml: 250, price: 38,
            photo: "Porn_star_martini_ico.webp", big: "Porn_star_martini_big.webp",
            alt: "Porn Star Martini cocktail at Hypso25",
            ingredients: "Absolut Vanilla Vodka, Passoa liqueur, Prosecco, passion fruit puree, sugar, water, lemon juice, pasteurized egg white",
            nutrition: { kj: 1222, kcal: 291, fat: 0.2, saturates: 0, carbs: 33, sugars: 32, protein: 1.6, salt: 0.04 },
            allergens: "Sulphites, Egg",
          },
          {
            name: "Coffeerum Treasure 25", ml: 250, price: 38,
            photo: "CoffeerumTreasure.webp", big: "CoffeerumTreasure.webp",
            alt: "Coffeerum Treasure cocktail at Hypso25",
            ingredients: "Havana 7 rum, Cointreau liqueur, orange juice, coffee, water, salt, pepper, ice",
            nutrition: { kj: 716, kcal: 172, fat: 0.1, saturates: 0, carbs: 6.7, sugars: 5.9, protein: 0.2, salt: 0.5 },
          },
          {
            name: "Mules Verne 25", ml: 250, price: 38,
            photo: "Mules_verne_ico.webp", big: "Mules_verne_big.webp",
            alt: "Mules Verne 25 cocktail at Hypso25",
            ingredients: "Absolut vodka, Cointreau liqueur, fresh orange juice, fresh basil, honey syrup (honey, water), sparkling water, ice",
            nutrition: { kj: 798, kcal: 191, fat: 0.1, saturates: 0, carbs: 14, sugars: 13, protein: 0.4, salt: 0 },
          },
          {
            name: "Zombie 25", ml: 250, price: 38,
            photo: "Zombie.webp", big: "Zombie.webp",
            alt: "Zombie 25 cocktail at Hypso25",
            ingredients: "Havana 7 rum, Stroh 80, pineapple juice, grapefruit juice, orange juice, grenadine syrup(sugar, water, fruit juice concentrate, acidifier: citric acid, natural flavour, natural vanilla flavour, colouring: E129), lemon juice, vanilla sugar, ice",
            nutrition: { kj: 1111, kcal: 266, fat: 0.1, saturates: 0, carbs: 22, sugars: 21, protein: 0.3, salt: 0 },
          },
        ],
      },
    ],
  ],
};
