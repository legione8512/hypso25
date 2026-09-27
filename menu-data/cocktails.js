// Cocktails: menu/vcock.html
// After a change, run: node scripts/build-menu.js   (see menu-data/README.md)

module.exports = {
  page: "vcock.html",
  columns: [
    // Left column
    [
      {
        title: {
          en: "Cocktails With a Kick",
          ro: "Cocktailuri cu forță",
        },
        intro: {
          en: "<b>Strong, stylish, and full of flavour. Not for the faint of taste.</b>",
          ro: "<b>Puternice, elegante și pline de aromă. Nu sunt pentru gusturile timide.</b>",
        },
        look: { heading: "m-0 text-uppercase", intro: "" },
        items: [
          {
            name: "Old Fashioned", ml: 200, price: 35,
            photo: "Old_fashioned.webp", big: "Old_fashioned_big.webp",
            alt: {
              en: "Old Fashioned cocktail at Hypso25",
              ro: "Cocktail Old Fashioned la Hypso25",
            },
            ingredients: {
              en: "Jameson whiskey, sugar, water, Angostura bitters, orange peel, ice",
              ro: "whiskey Jameson, zahăr, apă, bitter Angostura, coajă de portocală, gheață",
            },
            nutrition: { kj: 686, kcal: 165, fat: 0, saturates: 0, carbs: 6.3, sugars: 6.3, protein: 0, salt: 0 },
          },
          {
            name: "Negroni", ml: 200, price: 35,
            photo: "Negroni_ico.webp", big: "Negroni_big.webp",
            alt: {
              en: "Negroni cocktail at Hypso25",
              ro: "Cocktail Negroni la Hypso25",
            },
            ingredients: {
              en: "Campari, Antica Formula red vermouth, Beefeater Blood Orange gin, orange peel, ice",
              ro: "Campari, vermut roșu Antica Formula, gin Beefeater Blood Orange, coajă de portocală, gheață",
            },
            nutrition: { kj: 751, kcal: 180, fat: 0, saturates: 0, carbs: 12, sugars: 12, protein: 0, salt: 0 },
            allergens: {
              en: "Sulphites",
              ro: "Sulfiți",
            },
          },
          {
            name: "Amaretto Sour", ml: 200, price: 35,
            photo: "Amaretto_sour_ico.webp", big: "Amaretto_sour_big.webp",
            alt: {
              en: "Amaretto Sour cocktail at Hypso25",
              ro: "Cocktail Amaretto Sour la Hypso25",
            },
            ingredients: {
              en: "Amaretto Disaronno liqueur, lemon juice, pasteurized egg white, ice",
              ro: "lichior Amaretto Disaronno, suc de lămâie, albuș de ou pasteurizat, gheață",
            },
            nutrition: { kj: 752, kcal: 179, fat: 0.1, saturates: 0, carbs: 20, sugars: 19, protein: 1.2, salt: 0.04 },
            allergens: {
              en: "Egg",
              ro: "Ou",
            },
          },
          {
            name: "Whiskey Sour", ml: 200, price: 35,
            photo: "Whiskey_sour_ico.webp", big: "Whiskey_sour_big.webp",
            alt: {
              en: "Whiskey Sour cocktail at Hypso25",
              ro: "Cocktail Whiskey Sour la Hypso25",
            },
            ingredients: {
              en: "Jameson whiskey, lemon juice, sugar, water, pasteurized egg white, ice",
              ro: "whiskey Jameson, suc de lămâie, zahăr, apă, albuș de ou pasteurizat, gheață",
            },
            nutrition: { kj: 835, kcal: 200, fat: 0.1, saturates: 0, carbs: 15, sugars: 14, protein: 1.2, salt: 0.04 },
            allergens: {
              en: "Egg",
              ro: "Ou",
            },
          },
          {
            name: "White Lady", ml: 200, price: 35,
            photo: "White_lady_ico.webp", big: "White_lady_big.webp",
            alt: {
              en: "White Lady cocktail at Hypso25",
              ro: "Cocktail White Lady la Hypso25",
            },
            ingredients: {
              en: "Beefeater Strawberry gin, lemon juice, elderflower syrup(sugar, water, acidifier: citric acid, lemon juice concentrate, natural flavour, natural grapefruit flavour, natural lychee flavour, elderflower extract), pasteurized egg white, ice",
              ro: "gin Beefeater Strawberry, suc de lămâie, sirop de soc (zahăr, apă, acidifiant: acid citric, suc concentrat de lămâie, aromă naturală, aromă naturală de grepfrut, aromă naturală de lychee, extract de flori de soc), albuș de ou pasteurizat, gheață",
            },
            nutrition: { kj: 796, kcal: 190, fat: 0.1, saturates: 0, carbs: 15, sugars: 14, protein: 1.2, salt: 0.05 },
            allergens: {
              en: "Egg",
              ro: "Ou",
            },
          },
          {
            name: "Paloma", ml: 200, price: 35,
            photo: "Paloma_ico.webp", big: "Paloma_big.webp",
            alt: {
              en: "Paloma cocktail at Hypso25",
              ro: "Cocktail Paloma la Hypso25",
            },
            ingredients: {
              en: "Olmeca Altos tequila, grapefruit juice, Franklin & Sons Grapefruit & Bergamot tonic water, ice",
              ro: "tequila Olmeca Altos, suc de grepfrut, apă tonică Franklin & Sons Grapefruit & Bergamot, gheață",
            },
            nutrition: { kj: 552, kcal: 132, fat: 0.1, saturates: 0, carbs: 12, sugars: 12, protein: 0, salt: 0 },
          },
          {
            name: "Bellini", ml: 200, price: 35,
            photo: "Bellini_ico.webp", big: "Bellini_big.webp",
            alt: {
              en: "Bellini cocktail at Hypso25",
              ro: "Cocktail Bellini la Hypso25",
            },
            ingredients: {
              en: "Prosecco, Peachtree peach liqueur, sea buckthorn puree(sea buckthorn , sugar), sugar, water, ice",
              ro: "Prosecco, lichior de piersici Peachtree, piure de cătină (cătină, zahăr), zahăr, apă, gheață",
            },
            nutrition: { kj: 822, kcal: 196, fat: 0.8, saturates: 0.2, carbs: 21, sugars: 21, protein: 0.2, salt: 0 },
            allergens: {
              en: "Sulphites",
              ro: "Sulfiți",
            },
          },
          {
            name: "Ruby Royale", ml: 200, price: 35,
            photo: "Ruby_royale_ico.webp", big: "Ruby_royale_big.webp",
            alt: {
              en: "Ruby Royale cocktail at Hypso25",
              ro: "Cocktail Ruby Royale la Hypso25",
            },
            ingredients: {
              en: "Prosecco, grenadine syrup(sugar, water, fruit juice concentrate, acidifier: citric acid, natural flavour, natural vanilla flavour with other natural flavours, colouring: E129), ice",
              ro: "Prosecco, sirop de grenadine (zahăr, apă, suc concentrat de fructe, acidifiant: acid citric, aromă naturală, aromă naturală de vanilie cu alte arome naturale, colorant: E129), gheață",
            },
            nutrition: { kj: 484, kcal: 116, fat: 0, saturates: 0, carbs: 6.3, sugars: 6.3, protein: 0, salt: 0 },
            allergens: {
              en: "Sulphites",
              ro: "Sulfiți",
            },
          },
        ],
      },
      {
        title: {
          en: "MOST WANTED",
          ro: "CELE MAI CĂUTATE",
        },
        intro: {
          en: "<b>The fan favorites — iconic, irresistible, and always in high demand. Sip the legends.</b>",
          ro: "<b>Preferatele publicului — iconice, irezistibile și mereu căutate. Savurează legendele.</b>",
        },
        items: [
          {
            name: "Cuba Libre", ml: 350, price: 35,
            photo: "Cuba_libre_ico.webp", big: "Cuba_libre_big.webp",
            alt: {
              en: "Cuba Libre cocktail at Hypso25",
              ro: "Cocktail Cuba Libre la Hypso25",
            },
            ingredients: {
              en: "Havana 7 rum, Coca-Cola, lime, ice",
              ro: "rom Havana 7, Coca-Cola, lime, gheață",
            },
            nutrition: { kj: 728, kcal: 174, fat: 0, saturates: 0, carbs: 16, sugars: 16, protein: 0, salt: 0 },
          },
          {
            name: "Mojito", ml: 350, price: 35,
            photo: "Mojito_ico.webp", big: "Mojito_big.webp",
            alt: {
              en: "Mojito cocktail at Hypso25",
              ro: "Cocktail Mojito la Hypso25",
            },
            ingredients: {
              en: "Havana 7 rum, sparkling water, fresh mint, lime, brown sugar, water, ice",
              ro: "rom Havana 7, apă carbogazoasă, mentă proaspătă, lime, zahăr brun, apă, gheață",
            },
            nutrition: { kj: 691, kcal: 165, fat: 0, saturates: 0, carbs: 19, sugars: 18, protein: 0.1, salt: 0 },
          },
          {
            name: "Gin Tonic", ml: 350, price: 35,
            photo: "Gin_Tonic_ico.webp", big: "Gin_Tonic_big.webp",
            alt: {
              en: "Gin Tonic cocktail at Hypso25",
              ro: "Cocktail Gin Tonic la Hypso25",
            },
            ingredients: {
              en: "Your choice of gin (Hendrick's, Tanqueray No. Ten, Monkey 47, Gin Mare, Beefeater 24), your choice of Fever-Tree tonic water (Mediterranean, Indian, Aromatic, Elderflower), ice",
              ro: "gin la alegere (Hendrick's, Tanqueray No. Ten, Monkey 47, Gin Mare, Beefeater 24), apă tonică Fever-Tree la alegere (Mediterranean, Indian, Aromatic, Elderflower), gheață",
            },
            nutrition: { kj: 613, kcal: 147, fat: 0, saturates: 0, carbs: 12, sugars: 12, protein: 0, salt: 0 },
            note: {
              en: "Values for an average gin of 45% vol; they vary by about 10 kcal with the gin chosen.",
              ro: "Valori pentru un gin mediu de 45% vol.; variază cu aproximativ 10 kcal în funcție de ginul ales.",
            },
          },
          {
            name: "Hugo", ml: 350, price: 35,
            photo: "Hugo_ico.webp", big: "Hugo_big.webp",
            alt: {
              en: "Hugo cocktail at Hypso25",
              ro: "Cocktail Hugo la Hypso25",
            },
            ingredients: {
              en: "Prosecco, elderflower liqueur, elderflower syrup(sugar, water, acidifier: citric acid, lemon juice concentrate, natural flavour, natural grapefruit flavour, natural lychee flavour, elderflower extract), fresh mint, lime juice, ice",
              ro: "Prosecco, lichior de soc, sirop de soc (zahăr, apă, acidifiant: acid citric, suc concentrat de lămâie, aromă naturală, aromă naturală de grepfrut, aromă naturală de lychee, extract de flori de soc), mentă proaspătă, suc de lime, gheață",
            },
            nutrition: { kj: 794, kcal: 189, fat: 0, saturates: 0, carbs: 24, sugars: 23, protein: 0, salt: 0 },
            allergens: {
              en: "Sulphites",
              ro: "Sulfiți",
            },
          },
          {
            name: "Aperol Spritz", ml: 350, price: 35,
            photo: "Aperol_spritz_ico.webp", big: "Aperol_spritz_big.webp",
            alt: {
              en: "Aperol Spritz cocktail at Hypso25",
              ro: "Cocktail Aperol Spritz la Hypso25",
            },
            ingredients: {
              en: "Aperol, Prosecco, Franklin & Sons Grapefruit & Bergamot tonic water, oranges, ice",
              ro: "Aperol, Prosecco, apă tonică Franklin & Sons Grapefruit & Bergamot, portocale, gheață",
            },
            nutrition: { kj: 889, kcal: 212, fat: 0, saturates: 0, carbs: 21, sugars: 21, protein: 0, salt: 0 },
            allergens: {
              en: "Sulphites",
              ro: "Sulfiți",
            },
          },
        ],
      },
    ],
    // Right column
    [
      {
        title: {
          en: "MOCKTAILS",
          ro: "MOCKTAILURI",
        },
        intro: {
          en: "<b>All the taste, none of the alcohol. Crafted with balance, care, and a splash of imagination.</b>",
          ro: "<b>Tot gustul, fără alcool. Preparate cu echilibru, grijă și un strop de imaginație.</b>",
        },
        items: [
          {
            name: "Porn Star Collins", ml: 200, price: 33,
            photo: "Porn_star_collins_ico.webp", big: "Porn_star_collins_big.webp",
            alt: {
              en: "Porn Star Collins cocktail at Hypso25",
              ro: "Cocktail Porn Star Collins la Hypso25",
            },
            ingredients: {
              en: "Franklin & Sons tonic water, fresh orange juice, passion fruit puree, lemon juice, vanilla sugar, water, ice",
              ro: "apă tonică Franklin & Sons, suc proaspăt de portocale, piure de fructul pasiunii, suc de lămâie, zahăr vanilat, apă, gheață",
            },
            nutrition: { kj: 633, kcal: 149, fat: 0.2, saturates: 0, carbs: 36, sugars: 34, protein: 0.7, salt: 0 },
          },
          {
            name: "Virgin Mojito", ml: 200, price: 33,
            photo: "Virgin_mojito_ico.webp", big: "Virgin_mojito_big.webp",
            alt: {
              en: "Virgin Mojito cocktail at Hypso25",
              ro: "Cocktail Virgin Mojito la Hypso25",
            },
            ingredients: {
              en: "Franklin & Sons ginger ale, passion fruit puree, lemon juice, brown sugar, water, ice",
              ro: "ginger ale Franklin & Sons, piure de fructul pasiunii, suc de lămâie, zahăr brun, apă, gheață",
            },
            nutrition: { kj: 414, kcal: 97, fat: 0.1, saturates: 0, carbs: 24, sugars: 23, protein: 0.4, salt: 0 },
          },
          {
            name: "Virgin Hugo", ml: 200, price: 33,
            photo: "Virgin_hugo_ico.webp", big: "Virgin_hugo_big.webp",
            alt: {
              en: "Virgin Hugo cocktail at Hypso25",
              ro: "Cocktail Virgin Hugo la Hypso25",
            },
            ingredients: {
              en: "Franklin & Sons Elderflower & Cucumber tonic water, elderflower syrup(sugar, water, acidifier: citric acid, lemon juice concentrate, natural flavour, natural grapefruit flavour, natural lychee flavour, elderflower extract), lemon juice, fresh mint, ice",
              ro: "apă tonică Franklin & Sons Elderflower & Cucumber, sirop de soc (zahăr, apă, acidifiant: acid citric, suc concentrat de lămâie, aromă naturală, aromă naturală de grepfrut, aromă naturală de lychee, extract de flori de soc), suc de lămâie, mentă proaspătă, gheață",
            },
            nutrition: { kj: 370, kcal: 87, fat: 0, saturates: 0, carbs: 22, sugars: 21, protein: 0, salt: 0 },
          },
          {
            name: "Virgin Gin Tonic", ml: 200, price: 33,
            photo: "Gin_Tonic_ico.webp", big: "Gin_Tonic_big.webp",
            alt: {
              en: "Virgin Gin Tonic cocktail at Hypso25",
              ro: "Cocktail Virgin Gin Tonic la Hypso25",
            },
            ingredients: {
              en: "Tanqueray 0.0% alcohol-free gin, Franklin & Sons tonic water, lime, ice",
              ro: "gin fără alcool Tanqueray 0.0%, apă tonică Franklin & Sons, lime, gheață",
            },
            nutrition: { kj: 279, kcal: 66, fat: 0, saturates: 0, carbs: 16, sugars: 16, protein: 0, salt: 0.04 },
            look: { name: "" },
          },
        ],
      },
      {
        title: {
          en: "BESPOKE COCKTAILS",
          ro: "COCKTAILURI DE AUTOR",
        },
        intro: {
          en: "<b>Our signature creations — handcrafted cocktails that showcase bold flavours, premium spirits, and a touch of artistry.</b>",
          ro: "<b>Creațiile noastre de autor — cocktailuri preparate manual, cu arome intense, spirtoase premium și o notă de artă.</b>",
        },
        items: [
          {
            name: "Porn Star Martini 25", ml: 250, price: 38,
            photo: "Porn_star_martini_ico.webp", big: "Porn_star_martini_big.webp",
            alt: {
              en: "Porn Star Martini cocktail at Hypso25",
              ro: "Cocktail Porn Star Martini la Hypso25",
            },
            ingredients: {
              en: "Absolut Vanilla Vodka, Passoa liqueur, Prosecco, passion fruit puree, sugar, water, lemon juice, pasteurized egg white",
              ro: "vodcă Absolut Vanilla, lichior Passoa, Prosecco, piure de fructul pasiunii, zahăr, apă, suc de lămâie, albuș de ou pasteurizat",
            },
            nutrition: { kj: 1222, kcal: 291, fat: 0.2, saturates: 0, carbs: 33, sugars: 32, protein: 1.6, salt: 0.04 },
            allergens: {
              en: "Sulphites, Egg",
              ro: "Sulfiți, ou",
            },
          },
          {
            name: "Coffeerum Treasure 25", ml: 250, price: 38,
            photo: "CoffeerumTreasure.webp", big: "CoffeerumTreasure.webp",
            alt: {
              en: "Coffeerum Treasure cocktail at Hypso25",
              ro: "Cocktail Coffeerum Treasure la Hypso25",
            },
            ingredients: {
              en: "Havana 7 rum, Cointreau liqueur, orange juice, coffee, water, salt, pepper, ice",
              ro: "rom Havana 7, lichior Cointreau, suc de portocale, cafea, apă, sare, piper, gheață",
            },
            nutrition: { kj: 716, kcal: 172, fat: 0.1, saturates: 0, carbs: 6.7, sugars: 5.9, protein: 0.2, salt: 0.5 },
          },
          {
            name: "Mules Verne 25", ml: 250, price: 38,
            photo: "Mules_verne_ico.webp", big: "Mules_verne_big.webp",
            alt: {
              en: "Mules Verne 25 cocktail at Hypso25",
              ro: "Cocktail Mules Verne 25 la Hypso25",
            },
            ingredients: {
              en: "Absolut vodka, Cointreau liqueur, fresh orange juice, fresh basil, honey syrup (honey, water), sparkling water, ice",
              ro: "vodcă Absolut, lichior Cointreau, suc proaspăt de portocale, busuioc proaspăt, sirop de miere (miere, apă), apă carbogazoasă, gheață",
            },
            nutrition: { kj: 798, kcal: 191, fat: 0.1, saturates: 0, carbs: 14, sugars: 13, protein: 0.4, salt: 0 },
          },
          {
            name: "Zombie 25", ml: 250, price: 38,
            photo: "Zombie.webp", big: "Zombie.webp",
            alt: {
              en: "Zombie 25 cocktail at Hypso25",
              ro: "Cocktail Zombie 25 la Hypso25",
            },
            ingredients: {
              en: "Havana 7 rum, Stroh 80, pineapple juice, grapefruit juice, orange juice, grenadine syrup(sugar, water, fruit juice concentrate, acidifier: citric acid, natural flavour, natural vanilla flavour, colouring: E129), lemon juice, vanilla sugar, ice",
              ro: "rom Havana 7, Stroh 80, suc de ananas, suc de grepfrut, suc de portocale, sirop de grenadine (zahăr, apă, suc concentrat de fructe, acidifiant: acid citric, aromă naturală, aromă naturală de vanilie, colorant: E129), suc de lămâie, zahăr vanilat, gheață",
            },
            nutrition: { kj: 1111, kcal: 266, fat: 0.1, saturates: 0, carbs: 22, sugars: 21, protein: 0.3, salt: 0 },
          },
        ],
      },
    ],
  ],
};
