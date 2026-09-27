// Wines & Beers: menu/wines.html
// After a change, run: node scripts/build-menu.js   (see menu-data/README.md)

module.exports = {
  page: "wines.html",
  look: { priceStyle: "padding: 28px", name: "" },
  columns: [
    // One column
    [
      {
        title: {
          en: "BERE NENEA IANCU",
          ro: "BERE NENEA IANCU",
        },
        intro: {
          en: "<b>Brewed with patience and purity — a meeting of Romanian roots and German precision.</b>",
          ro: "<b>Făcută cu răbdare și puritate — o întâlnire între rădăcinile românești și precizia germană.</b>",
        },
        look: { price: "p-4", priceStyle: null },
        items: [
          {
            name: {
              en: "Nenea Iancu Blonda Speciala 4.8% alc.",
              ro: "Nenea Iancu Blondă Specială 4,8% alc.",
            },
            ml: 500, price: 23,
            photo: "beer_wine/Nenea_Iancu_Blonda_Speciala.webp",
            alt: {
              en: "Nenea Iancu Blonda Speciala beer at Hypso25",
              ro: "Bere Nenea Iancu Blondă Specială la Hypso25",
            },
            lines: [
              {
                en: "A golden lager known for its dense, long-lasting foam and smooth malt flavor accented by subtle grains. It’s sweet yet lightly bitter, offering a velvety, finely carbonated mouthfeel .",
                ro: "Un lager auriu, cunoscut pentru spuma densă și persistentă și pentru gustul fin de malț, cu note subtile de cereale. Dulce, dar ușor amăruie, cu o textură catifelată și o carbonatare fină.",
              },
            ],
            allergens: {
              en: "Barley (gluten)",
              ro: "Orz (gluten)",
            },
          },
          {
            name: {
              en: "Nenea Iancu Alba Nefiltrata 5.5% alc.",
              ro: "Nenea Iancu Albă Nefiltrată 5,5% alc.",
            },
            ml: 500, price: 23,
            photo: "beer_wine/nenea_iancu_alba_nefiltrata.webp",
            alt: {
              en: "Nenea Iancu Alba Nefiltrata beer at Hypso25",
              ro: "Bere Nenea Iancu Albă Nefiltrată la Hypso25",
            },
            lines: [
              {
                en: "A traditional wheat beer—unfiltered with a hazy golden color. It opens gently with banana and clove notes, evolving into citrusy, spicy tart notes and a crisp, refreshing finish .",
                ro: "O bere tradițională de grâu, nefiltrată, cu o culoare aurie tulbure. Se deschide delicat cu note de banană și cuișoare, apoi evoluează spre note citrice, condimentate și acrișoare, cu un final proaspăt și răcoritor.",
              },
            ],
            allergens: {
              en: "Wheat, barley (gluten)",
              ro: "Grâu, orz (gluten)",
            },
          },
        ],
      },
      {
        title: {
          en: "WHITE WINES LIST",
          ro: "VINURI ALBE",
        },
        intro: {
          en: "<b>A curated selection of white wines, from crisp and dry with notes of citrus, green apple and oak to a sweet liqueur wine.</b>",
          ro: "<b>O selecție atentă de vinuri albe, de la cele seci și proaspete, cu note de citrice, măr verde și stejar, până la un vin licoros dulce.</b>",
        },
        look: { intro: "mb-4" },
        items: [
          {
            name: {
              en: "Sole, Chardonnay, Barrique, dry, RECAȘ 13.5%",
              ro: "Sole, Chardonnay, Barrique, sec, RECAȘ 13,5%",
            },
            ml: 750, price: 149,
            photo: "beer_wine/Sole_Chardonnay_Barrique.webp",
            alt: {
              en: "Sole, Chardonnay, Barrique, dry, RECAȘ wine at Hypso25",
              ro: "Vin Sole, Chardonnay, Barrique, sec, RECAȘ la Hypso25",
            },
            glass: { ml: 150, price: 32 },
          },
          {
            name: {
              en: "Busuioacă de Huși, Blanc de Rose, dry, DOMENIILE AVEREȘTI 13.5%",
              ro: "Busuioacă de Huși, Blanc de Rose, sec, DOMENIILE AVEREȘTI 13,5%",
            },
            ml: 750, price: 149,
            photo: "beer_wine/Busuioaca_de_Husi_Blanc_de_Rose_dry_DOMENIILE_AVERESTI.webp",
            alt: {
              en: "Busuioacă de Huși, Blanc de Rose, dry, DOMENIILE AVEREȘTI wine at Hypso25",
              ro: "Vin Busuioacă de Huși, Blanc de Rose, sec, DOMENIILE AVEREȘTI la Hypso25",
            },
            glass: { ml: 150, price: 32 },
          },
          {
            name: {
              en: "Bacanta, Șarbă, dry, GÎRBOIU 12.5%",
              ro: "Bacanta, Șarbă, sec, GÎRBOIU 12,5%",
            },
            ml: 750, price: 149,
            photo: "beer_wine/Bacanta_Sarba_dry_GIRBOIU.webp",
            alt: {
              en: "Bacanta, Șarbă, dry, GÎRBOIU wine at Hypso25",
              ro: "Vin Bacanta, Șarbă, sec, GÎRBOIU la Hypso25",
            },
            glass: { ml: 150, price: 32 },
          },
          {
            name: {
              en: "Ceva Nou, Crâmpoșie Aromată, dry, BAUER 11.5%",
              ro: "Ceva Nou, Crâmpoșie Aromată, sec, BAUER 11,5%",
            },
            ml: 750, price: 169,
            photo: "missing.webp",
            alt: {
              en: "Ceva Nou, Crâmpoșie Aromată, dry, BAUER wine at Hypso25",
              ro: "Vin Ceva Nou, Crâmpoșie Aromată, sec, BAUER la Hypso25",
            },
            glass: { ml: 150, price: 35 },
          },
          {
            name: {
              en: "Lacrima lui Ovidiu, liqueur wine, sweet, MURFATLAR 16%",
              ro: "Lacrima lui Ovidiu, vin licoros, dulce, MURFATLAR 16%",
            },
            ml: 750, price: 239,
            photo: "missing.webp",
            alt: {
              en: "Lacrima lui Ovidiu, liqueur wine, sweet, MURFATLAR wine at Hypso25",
              ro: "Vin Lacrima lui Ovidiu, vin licoros, dulce, MURFATLAR la Hypso25",
            },
            glass: { ml: 150, price: 49 },
          },
        ],
      },
      {
        title: {
          en: "ROSE WINES LIST",
          ro: "VINURI ROSE",
        },
        intro: {
          en: "<b>With hints of red fruit and a clean, dry finish, our rosé selection brings a taste of sunshine to your glass, all year round.</b>",
          ro: "<b>Cu note de fructe roșii și un final sec și curat, vinurile noastre rose aduc gustul soarelui în pahar, tot anul.</b>",
        },
        look: { intro: "mb-4" },
        items: [
          {
            name: {
              en: "Bacanta Special Edition, Fetească Neagră, dry, GÎRBOIU 12.5%",
              ro: "Bacanta Special Edition, Fetească Neagră, sec, GÎRBOIU 12,5%",
            },
            ml: 750, price: 149,
            photo: "beer_wine/Bacanta_Special_Edition_Feteasca_Neagra_dry_GIRBOIU.webp",
            alt: {
              en: "Bacanta Special Edition, Fetească Neagră, dry, GÎRBOIU wine at Hypso25",
              ro: "Vin Bacanta Special Edition, Fetească Neagră, sec, GÎRBOIU la Hypso25",
            },
            glass: { ml: 150, price: 32 },
          },
          {
            name: {
              en: "Freamăt, Merlot & Syrah & Cabernet Sauvignon, dry, CATLEYA 12%",
              ro: "Freamăt, Merlot & Syrah & Cabernet Sauvignon, sec, CATLEYA 12%",
            },
            ml: 750, price: 129,
            photo: "beer_wine/Freamat_Syrah_Cabernet_Franc_dry_CATLEYA.webp",
            alt: {
              en: "Freamăt, Merlot & Syrah & Cabernet Sauvignon, dry, CATLEYA wine at Hypso25",
              ro: "Vin Freamăt, Merlot & Syrah & Cabernet Sauvignon, sec, CATLEYA la Hypso25",
            },
            glass: { ml: 150, price: 28 },
          },
          {
            name: {
              en: "Arezan, Cabernet Sauvignon, dry, MURFATLAR 13%",
              ro: "Arezan, Cabernet Sauvignon, sec, MURFATLAR 13%",
            },
            ml: 750, price: 149,
            photo: "missing.webp",
            alt: {
              en: "Arezan, Cabernet Sauvignon, dry, MURFATLAR wine at Hypso25",
              ro: "Vin Arezan, Cabernet Sauvignon, sec, MURFATLAR la Hypso25",
            },
            glass: { ml: 150, price: 32 },
          },
        ],
      },
      {
        title: {
          en: "RED WINES LIST",
          ro: "VINURI ROȘII",
        },
        intro: {
          en: "<b>Explore Romania’s finest red varietals, crafted with passion — full-bodied, elegant, and rooted in centuries-old winemaking heritage.</b>",
          ro: "<b>Descoperă cele mai bune soiuri roșii ale României, făcute cu pasiune — corpolente, elegante și înrădăcinate într-o tradiție viticolă de secole.</b>",
        },
        look: { intro: "mb-4" },
        items: [
          {
            name: {
              en: "Bacanta, Fetească Neagră, dry, GÎRBOIU 15%",
              ro: "Bacanta, Fetească Neagră, sec, GÎRBOIU 15%",
            },
            ml: 750, price: 169,
            photo: "beer_wine/Bacanta_Feteasca_Neagra_dry_GIRBOIU.webp",
            alt: {
              en: "Bacanta, Fetească Neagră, dry, GÎRBOIU wine at Hypso25",
              ro: "Vin Bacanta, Fetească Neagră, sec, GÎRBOIU la Hypso25",
            },
            glass: { ml: 150, price: 35 },
          },
          {
            name: {
              en: "Urme, Pinot Noir, dry, DARABONT 12.5%",
              ro: "Urme, Pinot Noir, sec, DARABONT 12,5%",
            },
            ml: 750, price: 129,
            photo: "beer_wine/Urme_Pinot_Noir_dry_DARABONT.webp",
            alt: {
              en: "Urme, Pinot Noir, dry, DARABONT wine at Hypso25",
              ro: "Vin Urme, Pinot Noir, sec, DARABONT la Hypso25",
            },
            glass: { ml: 150, price: 28 },
          },
          {
            name: {
              en: "Arezan, Merlot, dry, MURFATLAR 13.5%",
              ro: "Arezan, Merlot, sec, MURFATLAR 13,5%",
            },
            ml: 750, price: 149,
            photo: "missing.webp",
            alt: {
              en: "Arezan, Merlot, dry, MURFATLAR wine at Hypso25",
              ro: "Vin Arezan, Merlot, sec, MURFATLAR la Hypso25",
            },
            glass: { ml: 150, price: 32 },
          },
        ],
      },
      {
        title: {
          en: "SPARKLING WINES",
          ro: "VINURI SPUMANTE",
        },
        intro: {
          en: "<b>A refined selection of sparkling wines — vibrant, balanced, and perfect for toasting life’s little luxuries.</b>",
          ro: "<b>O selecție rafinată de vinuri spumante — vibrante, echilibrate și perfecte pentru a sărbători micile bucurii ale vieții.</b>",
        },
        items: [
          {
            name: {
              en: "Bendis Rose, Pinot Noir, rose, dry, PETRO VASELO 12%",
              ro: "Bendis Rose, Pinot Noir, rose, sec, PETRO VASELO 12%",
            },
            ml: 750, price: 129,
            photo: "beer_wine/Bendis-Rose.webp",
            alt: {
              en: "Bendis Rose, Pinot Noir, rose, dry, PETRO VASELO wine at Hypso25",
              ro: "Vin Bendis Rose, Pinot Noir, rose, sec, PETRO VASELO la Hypso25",
            },
            glass: { ml: 150, price: 28 },
          },
          {
            name: {
              en: "Bendis Nadir, Chardonnay & Pinot Noir, white, dry, PETRO VASELO 11.5%",
              ro: "Bendis Nadir, Chardonnay & Pinot Noir, alb, sec, PETRO VASELO 11,5%",
            },
            ml: 750, price: 129,
            photo: "beer_wine/Bendis-Nadir.webp",
            alt: {
              en: "Bendis Nadir, Chardonnay & Pinot Noir, white, dry, PETRO VASELO wine at Hypso25",
              ro: "Vin Bendis Nadir, Chardonnay & Pinot Noir, alb, sec, PETRO VASELO la Hypso25",
            },
            glass: { ml: 150, price: 28 },
          },
          {
            name: {
              en: "Aerosoli, Prosecco DOC, white, dry, MURFATLAR 11%",
              ro: "Aerosoli, Prosecco DOC, alb, sec, MURFATLAR 11%",
            },
            ml: 750, price: 129,
            photo: "missing.webp",
            alt: {
              en: "Aerosoli, Prosecco DOC, white, dry, MURFATLAR wine at Hypso25",
              ro: "Vin Aerosoli, Prosecco DOC, alb, sec, MURFATLAR la Hypso25",
            },
            glass: { ml: 150, price: 28 },
          },
          {
            name: {
              en: "Aerosoli, Prosecco DOC, rose, dry, MURFATLAR 11%",
              ro: "Aerosoli, Prosecco DOC, rose, sec, MURFATLAR 11%",
            },
            ml: 750, price: 129,
            photo: "missing.webp",
            alt: {
              en: "Aerosoli, Prosecco DOC, rose, dry, MURFATLAR wine at Hypso25",
              ro: "Vin Aerosoli, Prosecco DOC, rose, sec, MURFATLAR la Hypso25",
            },
            glass: { ml: 150, price: 28 },
          },
        ],
      },
    ],
  ],
};
