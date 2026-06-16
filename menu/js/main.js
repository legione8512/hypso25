document.addEventListener("DOMContentLoaded", function () {
  const backToTop = document.querySelector(".back-to-top");

  if (!backToTop) {
    return;
  }

  function toggleBackToTopButton() {
    if (window.scrollY > 100) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  }

  function scrollToTopSlowly() {
    const startPosition = window.scrollY;
    const duration = 1000;
    const startTime = performance.now();

    function easeInOutQuad(progress) {
      if (progress < 0.5) {
        return 2 * progress * progress;
      }

      return 1 - Math.pow(-2 * progress + 2, 2) / 2;
    }

    function animateScroll(currentTime) {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easedProgress = easeInOutQuad(progress);

      window.scrollTo(0, startPosition * (1 - easedProgress));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    }

    requestAnimationFrame(animateScroll);
  }

  toggleBackToTopButton();

  window.addEventListener("scroll", toggleBackToTopButton);

  backToTop.addEventListener("click", function (event) {
    event.preventDefault();
    scrollToTopSlowly();
  });
});
