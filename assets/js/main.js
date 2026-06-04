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
    if (event.key === "Escape") {
      closeMobileMenu();
    }
  });

  /* =========================================================
     2. Cookie banner
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
