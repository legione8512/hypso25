// Matcha Bar: menu/matcha.html (the matcha side menu)
// After a change, run: node scripts/build-menu.js   (see menu-data/README.md)
// Values from the recipes in HYPSO25 - retetar2026.docx (MATCHA MENU); the optional flavour syrup is not counted.

module.exports = {
  page: "matcha.html",
  look: { price: "p-4" },
  columns: [
    // Left column
    [
      {
        title: {
          en: "CLASSIC",
          ro: "CLASIC",
        },
        intro: {
          en: "<b>Iced or hot.</b>",
          ro: "<b>Rece sau cald.</b>",
        },
        items: [
          {
            name: "Matcha Latte", ml: 280, price: 25,
            photo: "Matcha_Latte.webp", big: "Matcha_Latte_big.webp",
            ingredients: {
              en: "milk, water, matcha",
              ro: "lapte, apă, matcha",
            },
            nutrition: { kj: 686, kcal: 164, fat: 8.9, saturates: 5.8, carbs: 12, sugars: 12, protein: 8.9, salt: 0.25 },
            allergens: {
              en: "Milk",
              ro: "Lapte",
            },
          },
          {
            name: "Dirty Matcha Latte", ml: 280, price: 28,
            photo: "missing.webp",
            ingredients: {
              en: "milk, water, espresso, matcha",
              ro: "lapte, apă, espresso, matcha",
            },
            nutrition: { kj: 613, kcal: 147, fat: 7.8, saturates: 5.1, carbs: 11, sugars: 10, protein: 7.9, salt: 0.23 },
            allergens: {
              en: "Milk",
              ro: "Lapte",
            },
          },
          {
            name: {
              en: "*Plant-Based Milk",
              ro: "*Lapte vegetal",
            },
            price: "+5",
            photo: "Lapte_vegetal.webp", big: "Lapte_vegetal_big.webp",
            alt: {
              en: "Plant-based milk at Hypso25",
              ro: "Lapte vegetal la Hypso25",
            },
            lines: [
              {
                en: "Oat or pea milk — smooth, dairy-free, and perfect with any milk-based drink.",
                ro: "Lapte de ovăz sau de mazăre — fin, fără lactate și potrivit cu orice băutură cu lapte.",
                tight: true,
              },
            ],
            allergens: {
              en: "Oats (gluten), in oat milk",
              ro: "Ovăz (gluten), în laptele de ovăz",
            },
          },
        ],
      },
      {
        title: {
          en: "SIGNATURE COLOUR SERIES",
          ro: "SERIA COLORATĂ",
        },
        intro: {
          en: "<b>Iced or hot.</b>",
          ro: "<b>Rece sau cald.</b>",
        },
        items: [
          {
            name: "Ube Latte", ml: 280, price: 30,
            photo: "missing.webp",
            lines: [
              {
                en: "Creamy purple yam with subtle vanilla notes.",
                ro: "Ignamă violet cremoasă, cu note subtile de vanilie.",
                tight: true,
              },
              {
                en: "<b>Base:</b> matcha or coffee",
                ro: "<b>Bază:</b> matcha sau cafea",
              },
            ],
            ingredients: {
              en: "milk, water, ube (purple yam) powder, matcha or espresso",
              ro: "lapte, apă, pudră de ube (ignamă violet), matcha sau espresso",
            },
            nutrition: { kj: 715, kcal: 171, fat: 8.9, saturates: 5.8, carbs: 13, sugars: 12, protein: 8.9, salt: 0.25 },
            note: {
              en: "Values with the matcha base; with coffee they are almost the same.",
              ro: "Valori cu baza de matcha; cu cafea sunt aproape la fel.",
            },
            allergens: {
              en: "Milk",
              ro: "Lapte",
            },
          },
          {
            name: "Dragonfruit Latte", ml: 280, price: 29,
            photo: "missing.webp",
            lines: [
              {
                en: "Light tropical sweetness with vibrant pink colour.",
                ro: "Dulceață tropicală ușoară, într-o culoare roz vibrantă.",
                tight: true,
              },
              {
                en: "<b>Base:</b> matcha or coffee",
                ro: "<b>Bază:</b> matcha sau cafea",
              },
            ],
            ingredients: {
              en: "milk, water, dragon fruit powder, matcha or espresso",
              ro: "lapte, apă, pudră de fructul dragonului, matcha sau espresso",
            },
            nutrition: { kj: 715, kcal: 171, fat: 8.9, saturates: 5.8, carbs: 13, sugars: 13, protein: 8.9, salt: 0.25 },
            note: {
              en: "Values with the matcha base; with coffee they are almost the same.",
              ro: "Valori cu baza de matcha; cu cafea sunt aproape la fel.",
            },
            allergens: {
              en: "Milk",
              ro: "Lapte",
            },
          },
          {
            name: "Butterfly Pea Latte", ml: 280, price: 28,
            photo: "missing.webp",
            lines: [
              {
                en: "Floral blue tea with a smooth, delicate finish.",
                ro: "Ceai albastru floral, cu un final fin și delicat.",
                tight: true,
              },
              {
                en: "<b>Base:</b> matcha or coffee",
                ro: "<b>Bază:</b> matcha sau cafea",
              },
            ],
            ingredients: {
              en: "milk, water, butterfly pea flower powder, matcha or espresso",
              ro: "lapte, apă, pudră din flori de butterfly pea, matcha sau espresso",
            },
            nutrition: { kj: 714, kcal: 171, fat: 8.9, saturates: 5.8, carbs: 13, sugars: 12, protein: 9.3, salt: 0.25 },
            note: {
              en: "Values with the matcha base; with coffee they are almost the same.",
              ro: "Valori cu baza de matcha; cu cafea sunt aproape la fel.",
            },
            allergens: {
              en: "Milk",
              ro: "Lapte",
            },
          },
          {
            name: "Iced Mango Matcha Latte", ml: 280, price: 31,
            photo: "missing.webp",
            lines: [
              {
                en: "Sweet mango blended with coconut water, layered with matcha and milk.",
                ro: "Mango dulce mixat cu apă de cocos, în straturi cu matcha și lapte.",
              },
            ],
            ingredients: {
              en: "frozen mango, coconut water, milk, matcha, ice",
              ro: "mango congelat, apă de cocos, lapte, matcha, gheață",
            },
            nutrition: { kj: 424, kcal: 101, fat: 3.2, saturates: 1.9, carbs: 13, sugars: 12, protein: 4, salt: 0.21 },
            allergens: {
              en: "Milk",
              ro: "Lapte",
            },
          },
          {
            name: "Iced Berry Matcha Latte", ml: 280, price: 31,
            photo: "missing.webp",
            lines: [
              {
                en: "Blended berries with coconut water with a touch of blueberry, layered with matcha and milk.",
                ro: "Fructe de pădure mixate cu apă de cocos și o notă de afine, în straturi cu matcha și lapte.",
              },
            ],
            ingredients: {
              en: "frozen forest fruits, blueberry syrup, coconut water, milk, matcha, ice",
              ro: "fructe de pădure congelate, sirop de afine, apă de cocos, lapte, matcha, gheață",
            },
            nutrition: { kj: 593, kcal: 141, fat: 4.2, saturates: 2.5, carbs: 19, sugars: 18, protein: 5.1, salt: 0.24 },
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
          en: "MATCHA REFRESHERS",
          ro: "MATCHA RĂCORITOARE",
        },
        look: { heading: "mb-0 pt-5 pt-lg-0" },
        items: [
          {
            name: {
              en: "Matcha Lemonade",
              ro: "Limonadă cu matcha",
            },
            ml: 500, price: 29,
            photo: "missing.webp",
            lines: [
              {
                en: "<b>Choice of:</b> passionfruit, strawberry, mango, peach",
                ro: "<b>Alege dintre:</b> fructul pasiunii, căpșuni, mango, piersici",
              },
            ],
            ingredients: {
              en: "fruit of your choice, lemon juice, sugar syrup (sugar, water), water, matcha, ice",
              ro: "fructe la alegere, suc de lămâie, sirop de zahăr (zahăr, apă), apă, matcha, gheață",
            },
            nutrition: { kj: 674, kcal: 159, fat: 0.2, saturates: 0, carbs: 37, sugars: 35, protein: 1, salt: 0 },
            note: {
              en: "<b>Values above: peach.</b> Mango: 689 / 162 kJ/kcal, sugars 35 g.",
              ro: "<b>Valorile de mai sus: piersici.</b> Mango: 689 / 162 kJ/kcal, zaharuri 35 g.",
            },
          },
        ],
      },
      {
        title: {
          en: "THE EXPERIMENTAL SERIES",
          ro: "SERIA EXPERIMENTALĂ",
        },
        intro: {
          en: "<b>A collection of bold cocktails with matcha crafted to challenge the familiar and turn every sip into an experiment.</b>",
          ro: "<b>O colecție de cocktailuri îndrăznețe cu matcha, create să provoace obișnuitul și să transforme fiecare înghițitură într-un experiment.</b>",
        },
        items: [
          {
            name: "Green Voyager", ml: 400, price: 39,
            photo: "missing.webp",
            ingredients: {
              en: "tequila, passion fruit puree, sugar syrup (sugar, water), matcha, coconut water, ginger ale, ice",
              ro: "tequila, piure de fructul pasiunii, sirop de zahăr (zahăr, apă), matcha, apă de cocos, ginger ale, gheață",
            },
            nutrition: { kj: 1014, kcal: 242, fat: 0.3, saturates: 0, carbs: 32, sugars: 30, protein: 1.5, salt: 0.1 },
          },
          {
            name: "The Unshakeable", ml: 400, price: 39,
            photo: "missing.webp",
            ingredients: {
              en: "vodka, strawberry puree, matcha cream (heavy cream, sugar syrup, matcha), raspberry syrup, lemon juice, ice",
              ro: "vodcă, piure de căpșuni, cremă de matcha (smântână pentru frișcă, sirop de zahăr, matcha), sirop de zmeură, suc de lămâie, gheață",
            },
            nutrition: { kj: 1441, kcal: 346, fat: 13, saturates: 8.4, carbs: 27, sugars: 26, protein: 1.7, salt: 0.03 },
            allergens: {
              en: "Milk",
              ro: "Lapte",
            },
          },
          {
            name: "Peach Haze", ml: 400, price: 39,
            photo: "missing.webp",
            ingredients: {
              en: "vodka, peach liqueur, white peach syrup, matcha, sparkling water, lemon juice, ice",
              ro: "vodcă, lichior de piersici, sirop de piersici albe, matcha, apă carbogazoasă, suc de lămâie, gheață",
            },
            nutrition: { kj: 924, kcal: 220, fat: 0.2, saturates: 0, carbs: 26, sugars: 25, protein: 0.7, salt: 0 },
          },
          {
            name: "Blueberry Velvet", ml: 400, price: 39,
            photo: "missing.webp",
            ingredients: {
              en: "gin, matcha cream (heavy cream, sugar syrup, matcha), blueberry syrup, strawberry puree, lemon juice, ice",
              ro: "gin, cremă de matcha (smântână pentru frișcă, sirop de zahăr, matcha), sirop de afine, piure de căpșuni, suc de lămâie, gheață",
            },
            nutrition: { kj: 1496, kcal: 359, fat: 13, saturates: 8.4, carbs: 31, sugars: 29, protein: 1.7, salt: 0.04 },
            allergens: {
              en: "Milk",
              ro: "Lapte",
            },
          },
        ],
      },
      {
        title: {
          en: "TOUCH OF SWEETNESS",
          ro: "UN STROP DE DULCEAȚĂ",
        },
        intro: {
          en: "<b>Customize your matcha with our selection of premium syrups.</b>",
          ro: "<b>Personalizează-ți matcha cu siropurile noastre premium.</b>",
        },
        items: [
          {
            list: {
              en: "Classic:",
              ro: "Clasice:",
            },
            text: {
              en: "Vanilla, Dark/White Chocolate, Hazelnut.",
              ro: "Vanilie, ciocolată neagră/albă, alune de pădure.",
            },
            allergens: {
              en: "Hazelnut syrup contains nuts (hazelnuts).",
              ro: "Siropul de alune conține fructe cu coajă lemnoasă (alune de pădure).",
            },
          },
          {
            list: {
              en: "Fruity:",
              ro: "Fructate:",
            },
            text: {
              en: "Raspberry, Orange Blossom, Blueberry.",
              ro: "Zmeură, floare de portocal, afine.",
            },
          },
          {
            list: {
              en: "Seasonal:",
              ro: "De sezon:",
            },
            text: {
              en: "Pumpkin Spice, Christmas Spice.",
              ro: "Dovleac condimentat, condimente de Crăciun.",
            },
          },
          {
            list: {
              en: "Creative:",
              ro: "Creative:",
            },
            text: {
              en: "Bubble Gum, Butterscotch, Amaretto, Tiramisu, Creme Brulee, Gingerbread, Lavender, Frosted Mint, Salted Caramel.",
              ro: "Gumă de mestecat, butterscotch, amaretto, tiramisu, creme brulee, turtă dulce, lavandă, mentă glacială, caramel sărat.",
            },
          },
          {
            name: {
              en: "1 Flavour",
              ro: "1 aromă",
            },
            price: "+3",
          },
          {
            name: {
              en: "2 Flavours",
              ro: "2 arome",
            },
            price: "+5",
          },
        ],
      },
    ],
  ],
};
