document.addEventListener("DOMContentLoaded", function () {
  const backToTop = document.querySelector(".back-to-top");

  if (!backToTop) {
    return;
  }

  function toggleBackToTopButton() {
    if (window.scrollY > 100) {
      backToTop.style.display = "inline-flex";
    } else {
      backToTop.style.display = "none";
    }
  }

  toggleBackToTopButton();

  window.addEventListener("scroll", toggleBackToTopButton);

  backToTop.addEventListener("click", function (event) {
    event.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
