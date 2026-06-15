/* =========================================================
   Hypso25 main JavaScript
   I keep the JavaScript simple and easy to understand.
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  /* =========================================================
     1. Mobile menu
     I open and close the mobile menu on smaller screens.
     ========================================================= */

  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuClose = document.querySelector(".mobile-menu__close");
  const mobileMenuLinks = document.querySelectorAll(
    ".mobile-menu__nav-link, .mobile-menu__contact-button, .mobile-menu__logo",
  );
  const languageOpenButton = document.querySelector(
    "[data-open-language-menu]",
  );
  const languageBackButton = document.querySelector("[data-language-back]");

  const languageView = document.getElementById("mobile-language-view");

  function openMobileMenu() {
    if (!mobileMenu || !mobileMenuToggle) {
      return;
    }

    mobileMenu.classList.add("is-open");
    document.body.classList.add("no-scroll");

    mobileMenu.setAttribute("aria-hidden", "false");
    mobileMenuToggle.setAttribute("aria-expanded", "true");
    mobileMenuToggle.setAttribute("aria-label", "Close menu");
  }

  function closeMobileMenu() {
    if (!mobileMenu || !mobileMenuToggle) {
      return;
    }

    mobileMenu.classList.remove("is-open");
    document.body.classList.remove("no-scroll");

    mobileMenu.setAttribute("aria-hidden", "true");
    mobileMenuToggle.setAttribute("aria-expanded", "false");
    mobileMenuToggle.setAttribute("aria-label", "Open menu");
    mobileMenu.classList.remove("is-language-open");
  }

  function closeMobileMenuOnDesktop() {
    if (window.innerWidth > 1024) {
      closeMobileMenu();

      if (mobileMenu) {
        mobileMenu.classList.remove("is-language-open");
      }
    }
  }

  window.addEventListener("resize", closeMobileMenuOnDesktop);
  function openLanguageMenu() {
    if (!mobileMenu || !languageOpenButton || !languageView) {
      return;
    }

    mobileMenu.classList.add("is-language-open");
    languageView.setAttribute("aria-hidden", "false");
    languageOpenButton.setAttribute("aria-expanded", "true");
  }

  function closeLanguageMenu() {
    if (!mobileMenu || !languageOpenButton || !languageView) {
      return;
    }

    mobileMenu.classList.remove("is-language-open");
    languageView.setAttribute("aria-hidden", "true");
    languageOpenButton.setAttribute("aria-expanded", "false");
  }

  if (languageOpenButton) {
    languageOpenButton.addEventListener("click", openLanguageMenu);
  }

  if (languageBackButton) {
    languageBackButton.addEventListener("click", closeLanguageMenu);
  }

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener("click", function () {
      const menuIsOpen = mobileMenu.classList.contains("is-open");

      if (menuIsOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (mobileMenuClose) {
    mobileMenuClose.addEventListener("click", closeMobileMenu);
  }

  mobileMenuLinks.forEach(function (link) {
    link.addEventListener("click", closeMobileMenu);
  });

  document.addEventListener("keydown", function (event) {
    const galleryIsOpen =
      galleryLightbox && galleryLightbox.classList.contains("is-open");

    if (event.key === "Escape") {
      closeMobileMenu();
      closeGalleryLightbox();
    }

    if (galleryIsOpen && event.key === "ArrowLeft") {
      showPreviousGalleryImage();
    }

    if (galleryIsOpen && event.key === "ArrowRight") {
      showNextGalleryImage();
    }
  });
  /* =========================================================
     2. Gallery lightbox
     I open a larger version of a gallery image and allow next/previous navigation.
     ========================================================= */

  const galleryImages = Array.from(
    document.querySelectorAll(".gallery-grid__image"),
  );
  const galleryLightbox = document.getElementById("gallery-lightbox");
  const galleryLightboxImage = document.querySelector(
    "[data-gallery-lightbox-image]",
  );
  const galleryLightboxClose = document.querySelector(
    "[data-gallery-lightbox-close]",
  );
  const galleryLightboxPrev = document.querySelector(
    "[data-gallery-lightbox-prev]",
  );
  const galleryLightboxNext = document.querySelector(
    "[data-gallery-lightbox-next]",
  );

  let currentGalleryIndex = 0;

  function updateGalleryLightbox(index) {
    if (!galleryLightboxImage || galleryImages.length === 0) {
      return;
    }

    currentGalleryIndex = (index + galleryImages.length) % galleryImages.length;

    const currentImage = galleryImages[currentGalleryIndex];

    galleryLightboxImage.setAttribute("src", currentImage.getAttribute("src"));
    galleryLightboxImage.setAttribute(
      "alt",
      currentImage.getAttribute("alt") || "Selected gallery image at Hypso25",
    );
  }

  function openGalleryLightbox(index) {
    if (
      !galleryLightbox ||
      !galleryLightboxImage ||
      galleryImages.length === 0
    ) {
      return;
    }

    updateGalleryLightbox(index);

    galleryLightbox.classList.add("is-open");
    galleryLightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
  }

  function closeGalleryLightbox() {
    if (!galleryLightbox || !galleryLightboxImage) {
      return;
    }

    galleryLightbox.classList.remove("is-open");
    galleryLightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");

    galleryLightboxImage.setAttribute("src", "");
    galleryLightboxImage.setAttribute(
      "alt",
      "Selected gallery image at Hypso25",
    );
  }

  function showPreviousGalleryImage() {
    updateGalleryLightbox(currentGalleryIndex - 1);
  }

  function showNextGalleryImage() {
    updateGalleryLightbox(currentGalleryIndex + 1);
  }

  galleryImages.forEach(function (image, index) {
    const galleryItem = image.closest(".gallery-grid__item");

    if (!galleryItem) {
      return;
    }

    galleryItem.addEventListener("click", function () {
      openGalleryLightbox(index);
    });

    galleryItem.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openGalleryLightbox(index);
      }
    });
  });

  if (galleryLightboxClose) {
    galleryLightboxClose.addEventListener("click", closeGalleryLightbox);
  }

  if (galleryLightboxPrev) {
    galleryLightboxPrev.addEventListener("click", function (event) {
      event.stopPropagation();
      showPreviousGalleryImage();
    });
  }

  if (galleryLightboxNext) {
    galleryLightboxNext.addEventListener("click", function (event) {
      event.stopPropagation();
      showNextGalleryImage();
    });
  }

  if (galleryLightbox) {
    galleryLightbox.addEventListener("click", function (event) {
      if (event.target === galleryLightbox) {
        closeGalleryLightbox();
      }
    });
  }
  /* =========================================================
     3. Cookie banner
     I hide the cookie banner after the user clicks Accept.
     I save the choice in localStorage so the banner stays hidden.
     ========================================================= */

  const cookieBanner = document.getElementById("cookie-banner");
  const cookieAcceptButton = document.getElementById("cookie-accept-button");

  if (!cookieBanner || !cookieAcceptButton) {
    return;
  }

  const cookiesAccepted = localStorage.getItem("hypso25CookiesAccepted");

  if (cookiesAccepted === "true") {
    cookieBanner.classList.add("is-hidden");
    return;
  }

  cookieAcceptButton.addEventListener("click", function () {
    localStorage.setItem("hypso25CookiesAccepted", "true");
    cookieBanner.classList.add("is-hidden");
  });
});
