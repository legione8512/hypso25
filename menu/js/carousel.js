/* Photo carousel on the menu start page, in plain JavaScript.
   It replaces jQuery and Bootstrap's JavaScript, which were loaded only for this.
   It uses Bootstrap's carousel CSS classes, so the slide animation looks the same:
   a new photo every 5 seconds, arrows, keyboard arrow keys and swipe on phones.
   It pauses while the mouse or keyboard focus is on it, and it does not slide by
   itself for visitors who asked their device to reduce motion. */

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("blog-carousel");

  if (!carousel) {
    return;
  }

  const items = Array.from(carousel.querySelectorAll(".carousel-item"));

  if (items.length < 2) {
    return;
  }

  const interval = 5000; // Bootstrap's default
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  let current = Math.max(
    0,
    items.findIndex(function (item) {
      return item.classList.contains("active");
    }),
  );
  let sliding = false;
  let timer = null;
  let hovered = false;
  let focused = false;

  function transitionTime(element) {
    const style = getComputedStyle(element);
    return (
      (parseFloat(style.transitionDuration) + parseFloat(style.transitionDelay)) *
      1000
    );
  }

  // The same class steps as Bootstrap 4, so its CSS does the sliding.
  function slideTo(nextIndex, direction) {
    if (sliding || nextIndex === current) {
      return;
    }

    const active = items[current];
    const next = items[nextIndex];
    const order =
      direction === "next" ? "carousel-item-next" : "carousel-item-prev";
    const side =
      direction === "next" ? "carousel-item-left" : "carousel-item-right";
    let finished = false;

    function finish() {
      if (finished) {
        return;
      }
      finished = true;

      next.classList.remove(order, side);
      next.classList.add("active");
      active.classList.remove("active", side);
      current = nextIndex;
      sliding = false;
    }

    sliding = true;
    next.classList.add(order);
    next.offsetHeight; // I force a reflow so the new photo starts at the side.
    active.classList.add(side);
    next.classList.add(side);

    const time = transitionTime(active);

    if (time === 0) {
      finish();
    } else {
      active.addEventListener("transitionend", finish, { once: true });
      // In case transitionend never fires (for example in a background tab).
      setTimeout(finish, time + 100);
    }
  }

  function showNext() {
    slideTo((current + 1) % items.length, "next");
  }

  function showPrevious() {
    slideTo((current - 1 + items.length) % items.length, "prev");
  }

  function stop() {
    clearInterval(timer);
    timer = null;
  }

  function start() {
    stop();

    if (!hovered && !focused && !document.hidden && !reduceMotion.matches) {
      timer = setInterval(showNext, interval);
    }
  }

  carousel.querySelectorAll("[data-slide]").forEach(function (control) {
    control.addEventListener("click", function (event) {
      event.preventDefault();

      if (control.getAttribute("data-slide") === "prev") {
        showPrevious();
      } else {
        showNext();
      }
      start();
    });
  });

  carousel.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      showPrevious();
    } else if (event.key === "ArrowRight") {
      showNext();
    }
  });

  // Swipe on touch screens (40px, like Bootstrap).
  let touchStartX = null;

  carousel.addEventListener(
    "touchstart",
    function (event) {
      touchStartX = event.touches[0].clientX;
    },
    { passive: true },
  );

  carousel.addEventListener("touchend", function (event) {
    if (touchStartX === null) {
      return;
    }

    const distance = event.changedTouches[0].clientX - touchStartX;
    touchStartX = null;

    if (Math.abs(distance) > 40) {
      if (distance < 0) {
        showNext();
      } else {
        showPrevious();
      }
      start();
    }
  });

  carousel.addEventListener("mouseenter", function () {
    hovered = true;
    stop();
  });

  carousel.addEventListener("mouseleave", function () {
    hovered = false;
    start();
  });

  carousel.addEventListener("focusin", function () {
    focused = true;
    stop();
  });

  carousel.addEventListener("focusout", function (event) {
    if (!carousel.contains(event.relatedTarget)) {
      focused = false;
      start();
    }
  });

  document.addEventListener("visibilitychange", start);

  start();
});
