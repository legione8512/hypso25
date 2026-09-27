/* Large product photos open over the menu page instead of in a new tab, like the site's photo
   gallery: dark background, the photo, the product name under it and a close button.
   A tap anywhere, the close button or Escape closes it, and focus goes back to the photo.
   The link still points to the photo, so without JavaScript it opens as before, and
   Ctrl/Cmd-click or a middle click still open it in a new tab. */

document.addEventListener("DOMContentLoaded", function () {
  const links = Array.from(
    document.querySelectorAll('a[href*="img/big_watermarked/"]'),
  );

  if (links.length === 0 || typeof HTMLDialogElement !== "function") {
    return;
  }

  const isRomanian = document.documentElement.lang === "ro";

  const viewer = document.createElement("dialog");
  viewer.className = "photo-viewer";
  viewer.setAttribute("aria-labelledby", "photo-viewer-caption");

  const closeButton = document.createElement("button");
  closeButton.className = "photo-viewer__close";
  closeButton.type = "button";
  closeButton.setAttribute("aria-label", isRomanian ? "Închide poza" : "Close photo");
  closeButton.textContent = "×";

  const figure = document.createElement("figure");
  figure.className = "photo-viewer__figure";

  const image = document.createElement("img");
  image.className = "photo-viewer__image";
  image.decoding = "async";

  const caption = document.createElement("figcaption");
  caption.className = "photo-viewer__caption";
  caption.id = "photo-viewer-caption";

  figure.appendChild(image);
  figure.appendChild(caption);
  viewer.appendChild(closeButton);
  viewer.appendChild(figure);
  document.body.appendChild(viewer);

  let opener = null;

  // The photo stays hidden until it has loaded, so the previous one never shows.
  image.addEventListener("load", function () {
    image.classList.remove("is-loading");
  });

  function openViewer(link) {
    const thumbnail = link.querySelector("img");
    const row = link.closest(".row");
    const name = row ? row.querySelector("h4") : null;

    opener = link;
    image.classList.add("is-loading");
    image.src = link.href;
    image.alt = thumbnail ? thumbnail.alt : "";
    caption.textContent = name ? name.textContent.trim() : "";

    document.documentElement.classList.add("photo-viewer-open");
    viewer.showModal();
  }

  links.forEach(function (link) {
    link.setAttribute("aria-haspopup", "dialog");

    link.addEventListener("click", function (event) {
      if (
        event.button !== 0 ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      event.preventDefault();
      openViewer(link);
    });
  });

  // The page scrolls again as soon as the viewer closes; the "close" event comes a moment later.
  function afterClose() {
    document.documentElement.classList.remove("photo-viewer-open");

    if (opener && !viewer.open) {
      opener.focus();
    }
  }

  // A tap anywhere closes it: on the photo, around it or on the close button.
  viewer.addEventListener("click", function () {
    viewer.close();
    afterClose();
  });

  // Escape: the browser closes the dialog right after this event.
  viewer.addEventListener("cancel", function () {
    document.documentElement.classList.remove("photo-viewer-open");
  });

  viewer.addEventListener("close", afterClose);
});
