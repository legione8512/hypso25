/* =========================================================
   Hypso25 main JavaScript
   I keep the JavaScript simple and easy to understand.
   ========================================================= */


/* =========================================================
   1. Cookie banner
   I hide the cookie banner after the user clicks Accept.
   I save the choice in localStorage so the banner stays hidden.
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  const cookieBanner = document.getElementById("cookie-banner");
  const cookieAcceptButton = document.getElementById("cookie-accept-button");

  // I stop here if the cookie banner or button does not exist.
  if (!cookieBanner || !cookieAcceptButton) {
    return;
  }

  // I check if the user already accepted cookies before.
  const cookiesAccepted = localStorage.getItem("hypso25CookiesAccepted");

  // I hide the banner if the user already accepted cookies.
  if (cookiesAccepted === "true") {
    cookieBanner.classList.add("is-hidden");
    return;
  }

  // I save the choice and hide the banner when the user clicks Accept.
  cookieAcceptButton.addEventListener("click", function () {
    localStorage.setItem("hypso25CookiesAccepted", "true");
    cookieBanner.classList.add("is-hidden");
  });
});