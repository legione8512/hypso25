document.addEventListener("DOMContentLoaded", function () {
  // Language picker (same as the main site). CSS opens the list on hover and keyboard focus;
  // a tap toggles .is-open too, because phones do not always hover or focus a tapped button.
  // aria-expanded tells screen readers whether the list is open.
  document.querySelectorAll(".language-picker").forEach(function (picker) {
    const pickerButton = picker.querySelector(".language-picker__button");

    if (!pickerButton) {
      return;
    }

    function updatePickerState() {
      const isOpen =
        picker.classList.contains("is-open") ||
        picker.matches(":hover") ||
        picker.contains(document.activeElement);
      pickerButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
    }

    pickerButton.addEventListener("click", function () {
      picker.classList.toggle("is-open");
      updatePickerState();
    });

    // A tap anywhere else closes it.
    document.addEventListener("click", function (event) {
      if (!picker.contains(event.target)) {
        picker.classList.remove("is-open");
        updatePickerState();
      }
    });

    picker.addEventListener("mouseenter", updatePickerState);
    picker.addEventListener("mouseleave", updatePickerState);
    picker.addEventListener("focusin", updatePickerState);
    // Focus has not moved yet during focusout, so I check a moment later.
    picker.addEventListener("focusout", function () {
      setTimeout(updatePickerState, 0);
    });
  });

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
