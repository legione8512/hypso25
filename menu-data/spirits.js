// Spirits: menu/spirits.html
// After a change, run: node scripts/build-menu.js   (see menu-data/README.md)

module.exports = {
  page: "spirits.html",
  look: { name: "", emptyLine: "m-0" },
  columns: [
    // Left column
    [
      {
        title: "TOP SHELF SPIRITS",
        intro: "<b>A curated selection of rare, aged, and ultra-premium spirits crafted for the discerning palate.</b>",
        items: [
          {
            name: "Aberlour 18y whiskey", ml: 40, price: 65,
            photo: "spirits/Aberlour18.webp",
            look: { emptyLine: "" },
          },
          {
            name: "The Glenlivet 18y whiskey", ml: 40, price: 65,
            photo: "spirits/The_Glenlivet_18.webp",
          },
          {
            name: "Chivas Regal 18y whiskey", ml: 40, price: 50,
            photo: "spirits/Chivas18.webp",
            look: { emptyLine: "" },
          },
          {
            name: "Chopin vodka", ml: 40, price: 50,
            photo: "spirits/Chopin_Vodka.webp",
          },
          {
            name: "Belvedere vodka", ml: 40, price: 50,
            photo: "spirits/Belvedere_vodka.webp",
          },
          {
            name: "Don Julio tequila", ml: 40, price: 50,
            photo: "spirits/Don_Julio.webp",
          },
          {
            name: "Bumbu XO rum", ml: 40, price: 50,
            photo: "spirits/Bumbuxo.webp",
          },
          {
            name: "Martell VSOP cognac", ml: 40, price: 50,
            photo: "spirits/Martell_VSOP.webp",
          },
        ],
      },
      {
        title: "PREMIUM SELECTION",
        intro: "<b>Crafted to deliver taste and balance, this collection features spirits that are a cut above the ordinary — ideal for sipping or mixing with class.</b>",
        items: [
          {
            name: "The Glenlivet 15y whiskey", ml: 40, price: 40,
            photo: "spirits/The_Glenlivet_15y.webp",
            look: { emptyLine: "" },
          },
          {
            name: "Chivas Regal XV whiskey", ml: 40, price: 40,
            photo: "spirits/ChivasXV.webp",
            look: { emptyLine: "" },
          },
          {
            name: "The Glenlivet 12y whiskey", ml: 40, price: 40,
            photo: "spirits/The_Glenlivet_12.webp",
          },
          {
            name: "Aberlour 12y", ml: 40, price: 40,
            photo: "spirits/Aberlour_12.webp",
            alt: "Aberlour 12y whiskey at Hypso25",
          },
          {
            name: "Grey Goose vodka", ml: 40, price: 40,
            photo: "spirits/Grey_Goose_vodka.webp",
            look: { emptyLine: "" },
          },
          {
            name: "Ostoya vodka", ml: 40, price: 40,
            photo: "spirits/Ostoya_vodka.webp",
            look: { emptyLine: "" },
          },
          {
            name: "Absolut Elyx vodka", ml: 40, price: 40,
            photo: "spirits/Absolut_Elyx_vodka.webp",
          },
          {
            name: "Tanqueray 10 gin", ml: 40, price: 40,
            photo: "spirits/Tanqueray10.webp",
            look: { emptyLine: "" },
          },
          {
            name: "Hendrick's gin", ml: 40, price: 40,
            photo: "spirits/Hendricks-gin.webp",
            look: { emptyLine: "" },
          },
          {
            name: "Monkey 47 gin", ml: 40, price: 40,
            photo: "spirits/Monkey_47_gin.webp",
            look: { emptyLine: "" },
          },
          {
            name: "Ki No Bi gin", ml: 40, price: 40,
            photo: "spirits/Ki_No_Bi_gin.webp",
            look: { emptyLine: "" },
          },
          {
            name: "Malfy ORIGINALE/<wbr>Limone/<wbr>Arancia Rosa gin", ml: 40, price: 40,
            photo: "spirits/Malfy_ORIGINALE_Limone_Arancia_Rosa_gin.webp",
            look: { emptyLine: "" },
          },
          {
            name: "Havana Maestros rum", ml: 40, price: 40,
            photo: "spirits/Havana_Maestros.webp",
            look: { emptyLine: "" },
          },
          {
            name: "Olmeca Reposado tequila", ml: 40, price: 40,
            photo: "spirits/Olmeca_Reposado.webp",
            look: { emptyLine: "" },
          },
          {
            name: "Martell VS cognac", ml: 40, price: 40,
            photo: "spirits/Martell_VS.webp",
            look: { emptyLine: "" },
          },
          {
            name: "Mamaia Aperitiv", ml: 40, price: 40,
            photo: "missing.webp",
            allergens: "Sulphites",
          },
          {
            name: "Mamaia Vermut", ml: 40, price: 40,
            photo: "missing.webp",
            allergens: "Sulphites",
          },
        ],
      },
      {
        title: "ROMANIAN SPIRITS",
        intro: "<b>A celebration of Romanian distilling traditions — strong, aromatic, and deeply rooted in our local culture.</b>",
        look: { heading: "pt-4 mb-0" },
        items: [
          {
            name: "Tuica Bran", ml: 40, price: 30,
            photo: "spirits/Tuica_bran_ico.webp",
          },
          {
            name: "Visinata Bran", ml: 40, price: 30,
            photo: "spirits/Visinata_Bran.webp",
          },
          {
            name: "Afinata Bran", ml: 40, price: 30,
            photo: "spirits/Afinata_Bran.webp",
          },
          {
            name: "Capsunata Bran", ml: 40, price: 30,
            photo: "spirits/Capsunata_Bran.webp",
          },
          {
            name: "Caisata Bran", ml: 40, price: 30,
            photo: "spirits/Caisata_Bran.webp",
          },
          {
            name: "Samaro Bran", ml: 40, price: 30,
            photo: "spirits/Samaro_Bran.webp",
          },
        ],
      },
    ],
    // Right column
    [
      {
        title: "STANDARD PICKS",
        intro: "<b>A selection of well-known, go-to spirits that offer comfort, familiarity, and crowd-pleasing character at a great value.</b>",
        items: [
          {
            name: "Jack Daniel's Tennessee whiskey", ml: 40, price: 25,
            photo: "spirits/Jack_Daniels.webp",
          },
          {
            name: "Johnnie Walker Red Label whiskey", ml: 40, price: 25,
            photo: "spirits/Johnnie_Walker_Red_Label.webp",
          },
          {
            name: "Jameson Irish Stout whiskey", ml: 40, price: 25,
            photo: "spirits/Jameson_Irish_Stout.webp",
          },
          {
            name: "Jameson Black Barrel whiskey", ml: 40, price: 25,
            photo: "spirits/Jameson_Black_Barrel.webp",
            look: { emptyLine: "" },
          },
          {
            name: "Absolut vodka", ml: 40, price: 25,
            photo: "spirits/Absolut.webp",
            look: { emptyLine: "" },
          },
          {
            name: "Havana Club 7y", ml: 40, price: 25,
            photo: "spirits/Havana_Club_7.webp",
            alt: "Havana Club 7y rum at Hypso25",
          },
          {
            name: "Beefeater Blood Orange gin", ml: 40, price: 25,
            photo: "spirits/Beefeater_Blood_Orange_gin.webp",
          },
          {
            name: "Beefeater 24 gin", ml: 40, price: 25,
            photo: "spirits/Beefeater_24_gin.webp",
          },
          {
            name: "Beefeater Pink gin", ml: 40, price: 25,
            photo: "spirits/Beefeater_Pink_gin.webp",
          },
          {
            name: "Grappa", ml: 40, price: 25,
            photo: "spirits/Grappa.webp",
            alt: "Grappa - 40ml at Hypso25",
          },
        ],
      },
      {
        title: "LIQUEURS & DIGESTIFS",
        intro: "<b>A curated selection of refined liqueurs and digestifs — perfect to sip, savour, and settle the palate after a meal.</b>",
        look: { heading: "pt-4 mb-0" },
        items: [
          {
            name: "Ramazzotti Amaro", ml: 40, price: 25,
            photo: "spirits/Ramazzotti_Amaro.webp",
            alt: "Ramazzotti Amaro - 40ml at Hypso25",
          },
          {
            name: "Sambuca", ml: 40, price: 25,
            photo: "spirits/Sambuca_Molinari.webp",
            alt: "Sambuca - 40ml at Hypso25",
          },
          {
            name: "Jägermeister", ml: 40, price: 25,
            photo: "spirits/Jagermeister.webp",
            alt: "Jägermeister - 40ml at Hypso25",
          },
          {
            name: "Disaronno Amaretto", ml: 40, price: 25,
            photo: "spirits/Disaronno_Amaretto.webp",
            alt: "Disaronno Amaretto - 40ml at Hypso25",
          },
          {
            name: "Cointreau liqueur", ml: 40, price: 25,
            photo: "spirits/Cointreau_liqueur.webp",
            alt: "Cointreau liqueur - 40ml at Hypso25",
          },
          {
            name: "Antica Formula Vermouth", ml: 40, price: 25,
            photo: "spirits/Antica_Formula.webp",
            alt: "Antica Formula Vermouth - 40ml at Hypso25",
            allergens: "Sulphites",
          },
          {
            name: "Aperol", ml: 40, price: 25,
            photo: "spirits/Aperol.webp",
            alt: "Aperol - 40ml at Hypso25",
          },
          {
            name: "Frangelico liqueur", ml: 40, price: 25,
            photo: "spirits/Frangelico.webp",
            alt: "Frangelico liqueur - 40ml at Hypso25",
          },
          {
            name: "Luxardo", ml: 40, price: 25,
            photo: "spirits/Luxardo.webp",
            alt: "Luxardo - 40ml at Hypso25",
          },
          {
            name: "Peachtree liqueur", ml: 40, price: 25,
            photo: "spirits/Peachtree.webp",
            alt: "Peachtree liqueur - 40ml at Hypso25",
          },
          {
            name: "Kahlua", ml: 40, price: 25,
            photo: "spirits/Kahlua.webp",
            alt: "Kahlua - 40ml at Hypso25",
          },
          {
            name: "Baileys Irish Cream liqueur", ml: 40, price: 25,
            photo: "spirits/Baileys_Irish_Cream.webp",
            alt: "Baileys Irish Cream liqueur - 40ml at Hypso25",
            allergens: "Milk",
          },
          {
            name: "Campari", ml: 40, price: 25,
            photo: "spirits/Campari.webp",
            alt: "Campari - 40ml at Hypso25",
          },
          {
            name: "Grand Marnier", ml: 40, price: 25,
            photo: "spirits/Grand_Marnier.webp",
            alt: "Grand Marnier - 40ml at Hypso25",
          },
        ],
      },
    ],
  ],
};
