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

  // I take the button labels from the page, so Romanian pages keep Romanian labels.
  const openMenuLabel = mobileMenuToggle
    ? mobileMenuToggle.getAttribute("aria-label")
    : "";
  const closeMenuLabel = mobileMenuClose
    ? mobileMenuClose.getAttribute("aria-label")
    : openMenuLabel;

  function openMobileMenu() {
    if (!mobileMenu || !mobileMenuToggle) {
      return;
    }

    mobileMenu.classList.add("is-open");
    document.body.classList.add("no-scroll");

    mobileMenu.setAttribute("aria-hidden", "false");
    mobileMenuToggle.setAttribute("aria-expanded", "true");
    mobileMenuToggle.setAttribute("aria-label", closeMenuLabel);
  }

  function closeMobileMenu() {
    if (!mobileMenu || !mobileMenuToggle) {
      return;
    }

    mobileMenu.classList.remove("is-open");
    document.body.classList.remove("no-scroll");

    mobileMenu.setAttribute("aria-hidden", "true");
    mobileMenuToggle.setAttribute("aria-expanded", "false");
    mobileMenuToggle.setAttribute("aria-label", openMenuLabel);
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

    if (galleryIsOpen && event.key === "Tab") {
      keepFocusInGalleryLightbox(event);
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

  // I keep the page's own alt text (English or Romanian) as the fallback.
  const defaultGalleryLightboxAlt = galleryLightboxImage
    ? galleryLightboxImage.getAttribute("alt")
    : "";

  // I remember which photo opened the lightbox, so focus can go back to it.
  let galleryLightboxTrigger = null;

  function updateGalleryLightbox(index) {
    if (!galleryLightboxImage || galleryImages.length === 0) {
      return;
    }

    currentGalleryIndex = (index + galleryImages.length) % galleryImages.length;

    const currentImage = galleryImages[currentGalleryIndex];

    galleryLightboxImage.setAttribute("src", currentImage.getAttribute("src"));
    galleryLightboxImage.setAttribute(
      "alt",
      currentImage.getAttribute("alt") || defaultGalleryLightboxAlt,
    );
  }

  function openGalleryLightbox(index, trigger) {
    if (
      !galleryLightbox ||
      !galleryLightboxImage ||
      galleryImages.length === 0
    ) {
      return;
    }

    updateGalleryLightbox(index);

    galleryLightboxTrigger = trigger || document.activeElement;
    galleryLightbox.classList.add("is-open");
    galleryLightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");

    // I move keyboard focus into the lightbox so screen readers announce it.
    if (galleryLightboxClose) {
      galleryLightboxClose.focus();
    }
  }

  function closeGalleryLightbox() {
    if (
      !galleryLightbox ||
      !galleryLightboxImage ||
      !galleryLightbox.classList.contains("is-open")
    ) {
      return;
    }

    galleryLightbox.classList.remove("is-open");
    galleryLightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");

    galleryLightboxImage.setAttribute("src", "");
    galleryLightboxImage.setAttribute("alt", defaultGalleryLightboxAlt);

    // I return focus to the photo that opened the lightbox.
    if (galleryLightboxTrigger) {
      galleryLightboxTrigger.focus();
      galleryLightboxTrigger = null;
    }
  }

  // I keep Tab and Shift+Tab inside the lightbox buttons while it is open.
  function keepFocusInGalleryLightbox(event) {
    const focusable = [
      galleryLightboxClose,
      galleryLightboxPrev,
      galleryLightboxNext,
    ].filter(Boolean);

    if (focusable.length === 0) {
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const current = document.activeElement;

    if (!focusable.includes(current)) {
      event.preventDefault();
      first.focus();
    } else if (event.shiftKey && current === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && current === last) {
      event.preventDefault();
      first.focus();
    }
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
      openGalleryLightbox(index, galleryItem);
    });

    galleryItem.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openGalleryLightbox(index, galleryItem);
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
