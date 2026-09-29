// Coffee: menu/menu.html
// After a change, run: node scripts/build-menu.js   (see menu-data/README.md)

module.exports = {
  page: "menu.html",
  look: { price: "p-4" },
  columns: [
    // Left column
    [
      {
        title: {
          en: "BLACK",
          ro: "NEGRU",
        },
        intro: {
          en: "<b>The finest specialty coffee, perfect without any sugar or milk.</b>",
          ro: "<b>Cea mai bună cafea de specialitate, perfectă fără zahăr și fără lapte.</b>",
        },
        items: [
          {
            name: "Espresso", ml: 20, price: 12,
            photo: "Espresso.webp", big: "Espresso_big.webp",
            lines: [
              {
                en: "Brewed ristretto-style from freshly ground specialty beans — a bold, concentrated expression of our finest coffee",
                ro: "Preparat în stil ristretto din boabe de specialitate proaspăt măcinate — o expresie intensă și concentrată a celei mai bune cafele ale noastre",
              },
            ],
          },
          {
            name: "Double", ml: 40, price: 16,
            photo: "Double.webp", big: "Double_big.webp",
            alt: {
              en: "Double Espresso at Hypso25",
              ro: "Espresso dublu la Hypso25",
            },
            lines: [
              {
                en: "Twice the volume, same bold character — a double espresso brewed from our finest specialty beans.",
                ro: "Volum dublu, același caracter intens — un espresso dublu preparat din cele mai bune boabe de specialitate ale noastre.",
              },
            ],
          },
          {
            name: "Long Black", ml: 100, price: 16,
            photo: "Long_black.webp", big: "Long_Black_big.webp",
            lines: [
              {
                en: "A double espresso gently poured over hot water — smooth, strong, and aromatic, with a rich crema preserved.",
                ro: "Un espresso dublu turnat ușor peste apă fierbinte — fin, puternic și aromat, cu o cremă bogată păstrată intactă.",
              },
            ],
          },
          {
            name: "*Decaf", price: "+3",
            photo: "Decaf.webp", big: "Decaf_big.webp",
            alt: {
              en: "Decaf coffee at Hypso25",
              ro: "Cafea decofeinizată la Hypso25",
            },
            lines: [
              {
                en: "Same specialty beans, just without the caffeine. Available for any espresso-based drink.",
                ro: "Aceleași boabe de specialitate, doar fără cofeină. Disponibil pentru orice băutură pe bază de espresso.",
              },
            ],
          },
        ],
      },
      {
        title: {
          en: "WHITE",
          ro: "CU LAPTE",
        },
        intro: {
          en: "<b>The perfect balance - crafted with steamed perfection.</b>",
          ro: "<b>Echilibrul perfect - cu lapte spumat la perfecție.</b>",
        },
        items: [
          {
            name: "Cortado", ml: 70, price: 14,
            photo: "Cortado.webp", big: "Cortado_big.webp",
            ingredients: {
              en: "milk foam, espresso",
              ro: "spumă de lapte, espresso",
            },
            nutrition: { kj: 141, kcal: 34, fat: 1.8, saturates: 1.2, carbs: 2.7, sugars: 2.4, protein: 1.7, salt: 0.06 },
            allergens: {
              en: "Milk",
              ro: "Lapte",
            },
          },
          {
            name: "Cappuccino", ml: 150, price: 16,
            photo: "Cappuccino.webp", big: "Cappuccino_big.webp",
            ingredients: {
              en: "milk foam, espresso",
              ro: "spumă de lapte, espresso",
            },
            nutrition: { kj: 329, kcal: 79, fat: 4.2, saturates: 2.8, carbs: "6.0", sugars: 5.6, protein: "4.0", salt: 0.13 },
            allergens: {
              en: "Milk",
              ro: "Lapte",
            },
          },
          {
            name: "Flat White", ml: 200, price: 19,
            photo: "Flat_white.webp", big: "Flat_white_big.webp",
            ingredients: {
              en: "milk foam, espresso",
              ro: "spumă de lapte, espresso",
            },
            nutrition: { kj: 417, kcal: 100, fat: 5.3, saturates: 3.5, carbs: 7.7, sugars: 7.1, protein: "5.0", salt: 0.16 },
            allergens: {
              en: "Milk",
              ro: "Lapte",
            },
          },
          {
            name: "Latte", ml: 280, price: 20,
            photo: "Latte.webp", big: "Latte_big.webp",
            ingredients: {
              en: "milk foam, espresso",
              ro: "spumă de lapte, espresso",
            },
            nutrition: { kj: 650, kcal: 155, fat: 8.4, saturates: 5.5, carbs: 12, sugars: 11, protein: 7.9, salt: 0.25 },
            allergens: {
              en: "Milk",
              ro: "Lapte",
            },
          },
          {
            name: {
              en: "*Alternative Milk",
              ro: "*Lapte vegetal",
            },
            price: "+5",
            photo: "Lapte_vegetal.webp", big: "Lapte_vegetal_big.webp",
            alt: {
              en: "Alternative Milk at Hypso25",
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
          en: "FLAVOURS",
          ro: "AROME",
        },
        intro: {
          en: "<b>Customize your coffee with our selection of premium syrups.</b>",
          ro: "<b>Personalizează-ți cafeaua cu siropurile noastre premium.</b>",
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
              en: "<b></b>Raspberry, Orange Blossom, Blueberry, Frosted Mint.",
              ro: "Zmeură, floare de portocal, afine, mentă glacială.",
            },
          },
          {
            list: {
              en: "Seasonal:",
              ro: "De sezon:",
            },
            text: {
              en: "<b></b>Pumpkin Spice, Christmas Spice.",
              ro: "Dovleac condimentat, condimente de Crăciun.",
            },
          },
          {
            list: {
              en: "Creative:",
              ro: "Creative:",
            },
            text: {
              en: "<b></b>Bubble Gum, Butterscotch, Amaretto, Tiramisu, Creme Brulee, Gingerbread, Lavender, Frosted Mint, Salted Caramel.",
              ro: "Gumă de mestecat, butterscotch, amaretto, tiramisu, creme brulee, turtă dulce, lavandă, mentă glacială, caramel sărat.",
            },
          },
          {
            name: {
              en: "1 Flavour",
              ro: "1 aromă",
            },
            price: "+3",
            lines: [
              {
                en: "Enhance your drink with a single flavour — from classic to creative.",
                ro: "Adaugă o aromă băuturii tale — de la clasice la creative.",
                small: true,
              },
            ],
            look: { row: "row container", rowStyle: "padding-right: 0", priceColumn: "col-1 mt-3 mt-sm-2" },
          },
          {
            name: {
              en: "2 Flavours",
              ro: "2 arome",
            },
            price: "+5",
            lines: [
              {
                en: "Double the flavour, double the fun. Combine your favourites freely.",
                ro: "Aromă dublă, plăcere dublă. Combină-ți preferatele cum vrei.",
                small: true,
              },
            ],
            look: { row: "row pt-5 container", rowStyle: "padding-right: 0", priceColumn: "col-1 mt-3 mt-sm-2" },
          },
        ],
      },
    ],
    // Right column
    [
      {
        title: {
          en: "CREATIVE",
          ro: "CREATIVE",
        },
        intro: {
          en: "<b>Artisan coffee with a twist. Try our house-made creations.</b>",
          ro: "<b>Cafea artizanală cu o notă surprinzătoare. Încearcă creațiile casei.</b>",
        },
        look: { heading: "mb-0 pt-5 pt-lg-0" },
        items: [
          {
            name: "Tiramisu Cappuccino", ml: 150, price: 19,
            ingredients: {
              en: "milk, coffee, tiramisu syrup (sugar, water, natural flavoring, citric acid)",
              ro: "lapte, cafea, sirop de tiramisu (zahăr, apă, aromă naturală, acid citric)",
            },
            nutrition: { kj: 462, kcal: 110, fat: 4.2, saturates: 2.8, carbs: 14, sugars: 14, protein: 4, salt: 0.13 },
            allergens: {
              en: "Milk",
              ro: "Lapte",
            },
            look: { nutrition: "compact" },
          },
          {
            name: "Creme Brulee Cappuccino", ml: 150, price: 19,
            ingredients: {
              en: "milk, coffee, creme brulee syrup(sugar, water, natural flavoring, colouring E150a)",
              ro: "lapte, cafea, sirop de creme brulee (zahăr, apă, aromă naturală, colorant E150a)",
            },
            nutrition: { kj: 462, kcal: 110, fat: 4.2, saturates: 2.8, carbs: 14, sugars: 14, protein: 4, salt: 0.13 },
            allergens: {
              en: "Milk",
              ro: "Lapte",
            },
            look: { nutrition: "compact" },
          },
          {
            name: "Gingerbread Latte", ml: 280, price: 23,
            ingredients: {
              en: "milk, coffee, gingerbread syrup(sugar, water, natural flavoring, acidifier: citric acid, natural cinnamon flavoring and other natural flavours, colouring: E150a)",
              ro: "lapte, cafea, sirop de turtă dulce (zahăr, apă, aromă naturală, acidifiant: acid citric, aromă naturală de scorțișoară și alte arome naturale, colorant: E150a)",
            },
            nutrition: { kj: 917, kcal: 218, fat: 8.4, saturates: 5.5, carbs: 28, sugars: 27, protein: 7.9, salt: 0.25 },
            allergens: {
              en: "Milk",
              ro: "Lapte",
            },
            look: { nutrition: "compact" },
          },
          {
            name: "Lavender Vanilla Latte", ml: 280, price: 25,
            ingredients: {
              en: "milk, coffee, lavender syrup(sugar, water, lavender essential oil, natural flavours, colorants E129, E133 acidifier: citric acid), vanilla syrup(sugar, water, natural vanilla Flavour, acidifier: citric acid, preservative: E202)",
              ro: "lapte, cafea, sirop de lavandă (zahăr, apă, ulei esențial de lavandă, arome naturale, coloranți E129, E133, acidifiant: acid citric), sirop de vanilie (zahăr, apă, aromă naturală de vanilie, acidifiant: acid citric, conservant: E202)",
            },
            nutrition: { kj: 917, kcal: 218, fat: 8.4, saturates: 5.5, carbs: 28, sugars: 27, protein: 7.9, salt: 0.25 },
            allergens: {
              en: "Milk",
              ro: "Lapte",
            },
            look: { nutrition: "compact" },
          },
          {
            name: "Blueberry White Choc Mocha", ml: 280, price: 25,
            ingredients: {
              en: "milk, coffee, blueberry syrup(natural blueberry flavour and other natural flavours, lemon juice concentrate, natural flavour), chocolate syrup(natural cocoa flavour, colouring: E150a, acidifier: citric acid), white chocolate syrup(natural flavour), sugar, water.",
              ro: "lapte, cafea, sirop de afine (aromă naturală de afine și alte arome naturale, suc concentrat de lămâie, aromă naturală), sirop de ciocolată (aromă naturală de cacao, colorant: E150a, acidifiant: acid citric), sirop de ciocolată albă (aromă naturală), zahăr, apă.",
            },
            nutrition: { kj: 943, kcal: 225, fat: 8.8, saturates: 5.8, carbs: 28, sugars: 28, protein: 8.3, salt: 0.26 },
            allergens: {
              en: "Milk",
              ro: "Lapte",
            },
          },
          {
            name: "Salted Caramel Mocha", ml: 280, price: 25,
            ingredients: {
              en: "milk, coffee, salted caramel syrup(sugar, water, salt, natural flavour, colouring: E150a), chocolate syrup(sugar, water, natural cocoa flavour, colouring: E150a, acidifier: citric acid)",
              ro: "lapte, cafea, sirop de caramel sărat (zahăr, apă, sare, aromă naturală, colorant: E150a), sirop de ciocolată (zahăr, apă, aromă naturală de cacao, colorant: E150a, acidifiant: acid citric)",
            },
            nutrition: { kj: 863, kcal: 205, fat: 8.6, saturates: 5.7, carbs: 24, sugars: 24, protein: 8.1, salt: 0.35 },
            allergens: {
              en: "Milk",
              ro: "Lapte",
            },
          },
        ],
      },
      {
        title: {
          en: "TASTING MENU",
          ro: "MENIU DE DEGUSTARE",
        },
        intro: [
          {
            en: "<b>Can’t choose just one?</b>",
            ro: "<b>Nu te poți hotărî la una singură?</b>",
          },
          {
            en: "<b>Our tasting sets let you sample multiple specialty drinks and savour the full spectrum of flavour in one go.</b>",
            ro: "<b>Seturile noastre de degustare te lasă să guști mai multe băuturi de specialitate și să descoperi toată gama de arome dintr-odată.</b>",
          },
        ],
        items: [
          {
            name: "Classic", price: 25,
            photo: "ClassicCombo.webp", big: "ClassicCombo.webp",
            alt: {
              en: "Classic coffee combo at Hypso25",
              ro: "Setul de degustare Classic la Hypso25",
            },
            lines: [
              {
                en: "<b>Espresso + Cappuccino - 170ml</b>",
                ro: "<b>Espresso + Cappuccino - 170ml</b>",
                tight: true,
              },
              {
                en: "A duo of our signature drinks — a bold espresso followed by a smooth cappuccino.",
                ro: "Un duo din băuturile noastre de bază — un espresso intens, urmat de un cappuccino fin.",
              },
            ],
          },
          {
            name: "Combo", price: 45,
            photo: "Combo.webp", big: "Combo.webp",
            alt: {
              en: "Combo coffee tasting set at Hypso25",
              ro: "Setul de degustare Combo la Hypso25",
            },
            lines: [
              {
                en: "<b>Espresso + Cappuccino + V60 - 420ml</b>",
                ro: "<b>Espresso + Cappuccino + V60 - 420ml</b>",
                tight: true,
              },
              {
                en: "Experience the bold, the creamy, and the delicate in one curated tasting.",
                ro: "Intens, cremos și delicat, într-o singură degustare atent aleasă.",
              },
            ],
          },
        ],
      },
      {
        title: {
          en: "ALTERNATIVE TEA & COFFEE",
          ro: "CAFEA ALTERNATIVĂ ȘI CEAI",
        },
        intro: {
          en: "<b>From slow drips to vibrant infusions.</b>",
          ro: "<b>De la extracții lente la infuzii vibrante.</b>",
        },
        items: [
          {
            name: "V60", ml: 250, price: 20,
            photo: "V60.webp", big: "V60_big.webp",
            alt: {
              en: "V60 filter coffee at Hypso25",
              ro: "Cafea filtru V60 la Hypso25",
            },
            lines: [
              {
                en: "A handcrafted filter coffee made with the V60 method — smooth, clean, and full of subtle flavours.",
                ro: "O cafea filtru preparată manual prin metoda V60 — fină, curată și plină de arome subtile.",
                tight: true,
              },
            ],
          },
          {
            name: "Cold Brew", ml: 250, price: 20,
            photo: "Cold_brew_ico.webp", big: "Cold_brew_big.webp",
            alt: {
              en: "Cold brew coffee at Hypso25",
              ro: "Cold brew la Hypso25",
            },
            lines: [
              {
                en: "Brewed cold and slow for hours — smooth, mellow, and made to refresh.",
                ro: "Preparată la rece, lent, timp de mai multe ore — fină, blândă și răcoritoare.",
                tight: true,
              },
            ],
          },
          {
            name: "Syphon", ml: 250, price: 23,
            photo: "Syphon.webp", big: "Syphon.webp",
            alt: {
              en: "Syphon coffee at Hypso25",
              ro: "Cafea Syphon la Hypso25",
            },
            lines: [
              {
                en: "Brewed with a touch of science and a lot of flavour. The Syphon delivers a clean, vibrant coffee with a smooth finish.",
                ro: "Preparată cu un strop de știință și multă aromă. Syphonul oferă o cafea curată și vibrantă, cu un final fin.",
                tight: true,
              },
            ],
          },
          {
            name: {
              en: "Teas",
              ro: "Ceaiuri",
            },
            ml: 300, price: 20,
            photo: "tea.webp", big: "tea.webp",
            alt: {
              en: "Tea at Hypso25",
              ro: "Ceai la Hypso25",
            },
            lines: [
              {
                en: "<b>Botanical blends and modern infusions — each tea is brewed fresh to highlight natural flavours.</b>",
                ro: "<b>Amestecuri botanice și infuzii moderne — fiecare ceai e preparat pe loc, ca să-și păstreze aromele naturale.</b>",
              },
              {
                en: "<b>Choose from:</b> White Spirulina, Green Citronella, Black Studio 54, Applesin & Mint, Chamomile",
                ro: "<b>Alege dintre:</b> White Spirulina, Green Citronella, Black Studio 54, Applesin & Mint, mușețel",
                tight: true,
              },
            ],
          },
          {
            name: {
              en: "Hot Chocolate",
              ro: "Ciocolată caldă",
            },
            ml: 200, price: 18,
            photo: "Ciocolata_calda.webp", big: "Ciocolata_calda_big.webp",
            lines: [
              {
                en: "<b>Rich, velvety hot chocolate — available in dark or white.</b>",
                ro: "<b>Ciocolată caldă bogată și catifelată — neagră sau albă.</b>",
              },
            ],
            ingredients: {
              en: "milk; dark mix (sugar, fat-reduced cocoa powder 30%, corn starch, flavouring: vanillin) or white mix (sugar, corn starch, milk powder, thickener: guar gum, flavourings, vanillin, salt)",
              ro: "lapte; mix negru (zahăr, cacao pudră cu conținut redus de grăsime 30%, amidon de porumb, aromă: vanilină) sau mix alb (zahăr, amidon de porumb, lapte praf, agent de îngroșare: gumă guar, arome, vanilină, sare)",
            },
            nutrition: { kj: 914, kcal: 217, fat: 6.8, saturates: 4.4, carbs: 32, sugars: 21, protein: 6.8, salt: 0.17 },
            note: {
              en: "Values for dark hot chocolate. White: 796 / 189 kJ/kcal, fat 5.3 g (saturates 3.5 g), carbohydrates 30 g (sugars 24 g), protein 5.4 g, salt 0.26 g.",
              ro: "Valori pentru ciocolata caldă neagră. Albă: 796 / 189 kJ/kcal, grăsimi 5,3 g (acizi grași saturați 3,5 g), glucide 30 g (zaharuri 24 g), proteine 5,4 g, sare 0,26 g.",
            },
            allergens: {
              en: "Milk. The white mix may contain soy, nuts and sulphites.",
              ro: "Lapte. Mixul alb poate conține soia, fructe cu coajă lemnoasă și sulfiți.",
            },
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
