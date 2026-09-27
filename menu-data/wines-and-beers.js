// Wines & Beers: menu/wines.html
// After a change, run: node scripts/build-menu.js   (see menu-data/README.md)

module.exports = {
  page: "wines.html",
  look: { priceStyle: "padding: 28px", name: "" },
  columns: [
    // One column
    [
      {
        title: "BERE NENEA IANCU",
        intro: "<b>Brewed with patience and purity — a meeting of Romanian roots and German precision.</b>",
        look: { price: "p-4", priceStyle: null },
        items: [
          {
            name: "Nenea Iancu Blonda Speciala 4.8% alc.", ml: 500, price: 23,
            photo: "beer_wine/Nenea_Iancu_Blonda_Speciala.webp",
            alt: "Nenea Iancu Blonda Speciala beer at Hypso25",
            lines: ["A golden lager known for its dense, long-lasting foam and smooth malt flavor accented by subtle grains. It’s sweet yet lightly bitter, offering a velvety, finely carbonated mouthfeel ."],
            allergens: "Barley (gluten)",
          },
          {
            name: "Nenea Iancu Alba Nefiltrata 5.5% alc.", ml: 500, price: 23,
            photo: "beer_wine/nenea_iancu_alba_nefiltrata.webp",
            alt: "Nenea Iancu Alba Nefiltrata beer at Hypso25",
            lines: ["A traditional wheat beer—unfiltered with a hazy golden color. It opens gently with banana and clove notes, evolving into citrusy, spicy tart notes and a crisp, refreshing finish ."],
            allergens: "Wheat, barley (gluten)",
          },
        ],
      },
      {
        title: "WHITE WINES LIST",
        intro: "<b>A curated selection of white wines, from crisp and dry with notes of citrus, green apple and oak to a sweet liqueur wine.</b>",
        look: { intro: "mb-4" },
        items: [
          {
            name: "Sole, Chardonnay, Barrique, dry, RECAȘ 13.5%", ml: 750, price: 149,
            photo: "beer_wine/Sole_Chardonnay_Barrique.webp",
            alt: "Sole, Chardonnay, Barrique, dry, RECAȘ wine at Hypso25",
            glass: { ml: 150, price: 32 },
          },
          {
            name: "Busuioacă de Huși, Blanc de Rose, dry, DOMENIILE AVEREȘTI 13.5%", ml: 750, price: 149,
            photo: "beer_wine/Busuioaca_de_Husi_Blanc_de_Rose_dry_DOMENIILE_AVERESTI.webp",
            alt: "Busuioacă de Huși, Blanc de Rose, dry, DOMENIILE AVEREȘTI wine at Hypso25",
            glass: { ml: 150, price: 32 },
          },
          {
            name: "Bacanta, Șarbă, dry, GÎRBOIU 12.5%", ml: 750, price: 149,
            photo: "beer_wine/Bacanta_Sarba_dry_GIRBOIU.webp",
            alt: "Bacanta, Șarbă, dry, GÎRBOIU wine at Hypso25",
            glass: { ml: 150, price: 32 },
          },
          {
            name: "Ceva Nou, Crâmpoșie Aromată, dry, BAUER 11.5%", ml: 750, price: 169,
            photo: "missing.webp",
            alt: "Ceva Nou, Crâmpoșie Aromată, dry, BAUER wine at Hypso25",
            glass: { ml: 150, price: 35 },
          },
          {
            name: "Lacrima lui Ovidiu, liqueur wine, sweet, MURFATLAR 16%", ml: 750, price: 239,
            photo: "missing.webp",
            alt: "Lacrima lui Ovidiu, liqueur wine, sweet, MURFATLAR wine at Hypso25",
            glass: { ml: 150, price: 49 },
          },
        ],
      },
      {
        title: "ROSE WINES LIST",
        intro: "<b>With hints of red fruit and a clean, dry finish, our rosé selection brings a taste of sunshine to your glass, all year round.</b>",
        look: { intro: "mb-4" },
        items: [
          {
            name: "Bacanta Special Edition, Fetească Neagră, dry, GÎRBOIU 12.5%", ml: 750, price: 149,
            photo: "beer_wine/Bacanta_Special_Edition_Feteasca_Neagra_dry_GIRBOIU.webp",
            alt: "Bacanta Special Edition, Fetească Neagră, dry, GÎRBOIU wine at Hypso25",
            glass: { ml: 150, price: 32 },
          },
          {
            name: "Freamăt, Merlot & Syrah & Cabernet Sauvignon, dry, CATLEYA 12%", ml: 750, price: 129,
            photo: "beer_wine/Freamat_Syrah_Cabernet_Franc_dry_CATLEYA.webp",
            alt: "Freamăt, Merlot & Syrah & Cabernet Sauvignon, dry, CATLEYA wine at Hypso25",
            glass: { ml: 150, price: 28 },
          },
          {
            name: "Arezan, Cabernet Sauvignon, dry, MURFATLAR 13%", ml: 750, price: 149,
            photo: "missing.webp",
            alt: "Arezan, Cabernet Sauvignon, dry, MURFATLAR wine at Hypso25",
            glass: { ml: 150, price: 32 },
          },
        ],
      },
      {
        title: "RED WINES LIST",
        intro: "<b>Explore Romania’s finest red varietals, crafted with passion — full-bodied, elegant, and rooted in centuries-old winemaking heritage.</b>",
        look: { intro: "mb-4" },
        items: [
          {
            name: "Bacanta, Fetească Neagră, dry, GÎRBOIU 15%", ml: 750, price: 169,
            photo: "beer_wine/Bacanta_Feteasca_Neagra_dry_GIRBOIU.webp",
            alt: "Bacanta, Fetească Neagră, dry, GÎRBOIU wine at Hypso25",
            glass: { ml: 150, price: 35 },
          },
          {
            name: "Urme, Pinot Noir, dry, DARABONT 12.5%", ml: 750, price: 129,
            photo: "beer_wine/Urme_Pinot_Noir_dry_DARABONT.webp",
            alt: "Urme, Pinot Noir, dry, DARABONT wine at Hypso25",
            glass: { ml: 150, price: 28 },
          },
          {
            name: "Arezan, Merlot, dry, MURFATLAR 13.5%", ml: 750, price: 149,
            photo: "missing.webp",
            alt: "Arezan, Merlot, dry, MURFATLAR wine at Hypso25",
            glass: { ml: 150, price: 32 },
          },
        ],
      },
      {
        title: "SPARKLING WINES",
        intro: "<b>A refined selection of sparkling wines — vibrant, balanced, and perfect for toasting life’s little luxuries.</b>",
        items: [
          {
            name: "Bendis Rose, Pinot Noir, rose, dry, PETRO VASELO 12%", ml: 750, price: 129,
            photo: "beer_wine/Bendis-Rose.webp",
            alt: "Bendis Rose, Pinot Noir, rose, dry, PETRO VASELO wine at Hypso25",
            glass: { ml: 150, price: 28 },
          },
          {
            name: "Bendis Nadir, Chardonnay & Pinot Noir, white, dry, PETRO VASELO 11.5%", ml: 750, price: 129,
            photo: "beer_wine/Bendis-Nadir.webp",
            alt: "Bendis Nadir, Chardonnay & Pinot Noir, white, dry, PETRO VASELO wine at Hypso25",
            glass: { ml: 150, price: 28 },
          },
          {
            name: "Aerosoli, Prosecco DOC, white, dry, MURFATLAR 11%", ml: 750, price: 129,
            photo: "missing.webp",
            alt: "Aerosoli, Prosecco DOC, white, dry, MURFATLAR wine at Hypso25",
            glass: { ml: 150, price: 28 },
          },
          {
            name: "Aerosoli, Prosecco DOC, rose, dry, MURFATLAR 11%", ml: 750, price: 129,
            photo: "missing.webp",
            alt: "Aerosoli, Prosecco DOC, rose, dry, MURFATLAR wine at Hypso25",
            glass: { ml: 150, price: 28 },
          },
        ],
      },
    ],
  ],
};
