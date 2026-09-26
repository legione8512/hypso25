document.addEventListener("DOMContentLoaded", function () {
  const reviewsContainer = document.querySelector("[data-random-reviews]");

  if (!reviewsContainer || !window.hypsoReviews) {
    return;
  }

  const reviewLinks = window.hypsoReviewLinks || {};

  function shuffleReviews(reviews) {
    return reviews
      .map(function (review) {
        return {
          review: review,
          sort: Math.random(),
        };
      })
      .sort(function (first, second) {
        return first.sort - second.sort;
      })
      .map(function (item) {
        return item.review;
      });
  }

  // Google ratings show as stars. Tripadvisor asks partners to show a traveler's rating
  // as its green "bubbles" instead (Brand Guidelines for Partners), including half bubbles.
  function createRating(rating, source) {
    const safeRating = Math.max(1, Math.min(5, Math.round((Number(rating) || 5) * 2) / 2));
    const element = document.createElement("div");
    element.setAttribute("role", "img");

    if (source === "tripadvisor") {
      element.className = "qr-review-card__bubbles";
      element.setAttribute("aria-label", safeRating + " of 5 bubbles");

      for (let bubbleNumber = 1; bubbleNumber <= 5; bubbleNumber++) {
        const bubble = document.createElement("span");
        bubble.className = "qr-review-card__bubble";

        if (safeRating >= bubbleNumber) {
          bubble.classList.add("is-full");
        } else if (safeRating >= bubbleNumber - 0.5) {
          bubble.classList.add("is-half");
        }

        element.appendChild(bubble);
      }
    } else {
      const fullStars = Math.round(safeRating);
      element.className = "qr-review-card__stars";
      element.setAttribute("aria-label", "Rated " + safeRating + " out of 5");
      element.textContent = "★".repeat(fullStars) + "☆".repeat(5 - fullStars);
    }

    return element;
  }

  // Review text goes in quotation marks (Tripadvisor asks for this; Google cards match).
  function quote(text) {
    const plain = String(text || "").trim().replace(/^["“„']+|["”']+$/g, "");
    return "“" + plain + "”";
  }

  function createReviewCard(review, source) {
    const column = document.createElement("div");
    column.className = "col-12 col-md-6 col-xl-3 mb-4";

    const card = document.createElement("article");
    card.className = "qr-review-card";

    const logoWrapper = document.createElement("div");
    logoWrapper.className = "qr-review-card__logo";

    const logo = document.createElement("img");
    logo.src =
      source === "google"
        ? "img/review-logos/google-g.svg"
        : "img/review-logos/tripadvisor-ollie.svg";

    logo.alt = source === "google" ? "Google" : "Tripadvisor";

    logoWrapper.appendChild(logo);

    const badge = document.createElement("p");
    badge.className = "qr-review-card__badge";
    badge.textContent =
      source === "google" ? "Google Review" : "Tripadvisor Review";

    const stars = createRating(review.rating, source);

    let title = null;

    if (review.title) {
      title = document.createElement("h3");
      title.className = "qr-review-card__title";
      title.textContent = review.title;
    }

    const text = document.createElement("p");
    text.className = "qr-review-card__text";
    text.textContent = quote(review.text);

    const author = document.createElement("p");
    author.className = "qr-review-card__author";
    author.textContent = review.author || "Guest review";

    if (review.date) {
      const date = document.createElement("span");
      date.className = "qr-review-card__date";
      date.textContent = " • " + review.date;
      author.appendChild(date);
    }

    const link = document.createElement("a");
    link.className = "qr-review-card__link";
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    if (review.url) {
      link.href = review.url;
      link.textContent =
        source === "google" ? "Read on Google" : "Read on Tripadvisor";
    } else {
      link.href =
        source === "google"
          ? reviewLinks.googleMore || "#"
          : reviewLinks.tripadvisorMore || "#";

      link.textContent =
        source === "google"
          ? "View more on Google"
          : "View more on Tripadvisor";
    }

    card.appendChild(logoWrapper);
    card.appendChild(badge);

    if (title) {
      card.appendChild(title);
    }

    card.appendChild(stars);
    card.appendChild(text);
    card.appendChild(author);
    card.appendChild(link);

    column.appendChild(card);

    return column;
  }

  function createEmptyMessage() {
    const column = document.createElement("div");
    column.className = "col-12";

    const message = document.createElement("p");
    message.className = "qr-reviews__empty";
    message.textContent =
      "Reviews will appear here after real Google and Tripadvisor reviews are added.";

    column.appendChild(message);

    return column;
  }

  const googleReviews = shuffleReviews(window.hypsoReviews.google || []).slice(
    0,
    2,
  );
  const tripadvisorReviews = shuffleReviews(
    window.hypsoReviews.tripadvisor || [],
  ).slice(0, 2);

  const selectedReviews = [
    ...googleReviews.map(function (review) {
      return {
        source: "google",
        review: review,
      };
    }),
    ...tripadvisorReviews.map(function (review) {
      return {
        source: "tripadvisor",
        review: review,
      };
    }),
  ];

  reviewsContainer.innerHTML = "";

  if (selectedReviews.length === 0) {
    reviewsContainer.appendChild(createEmptyMessage());
    return;
  }

  selectedReviews.forEach(function (item) {
    reviewsContainer.appendChild(createReviewCard(item.review, item.source));
  });
});
