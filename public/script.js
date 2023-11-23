// "go back up" button
document.addEventListener("DOMContentLoaded", function() {
  var backToTopButton = document.querySelector("#backToTop");

  window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("visible");
    } else {
      backToTopButton.classList.remove("visible");
    }
  });

  backToTopButton.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// Smooth href scroll.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetElement = document.querySelector(this.getAttribute('href'));
      const scrollOptions = {
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
      };

      // Hard code the duration to be double as quick as the standard
      const defaultDuration = 1000; // You can adjust this value
      scrollOptions.duration = defaultDuration;

      targetElement.scrollIntoView(scrollOptions);
  });
});

// Header disappearing and appearing
document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector("header");
  var navHeight = header.offsetHeight;
  var scrollThreshold = window.innerHeight * 0.5; // Adjust the percentage as needed
  var isHovered = false;

  function updateHeaderVisibility() {
    var scrollPosition = window.scrollY;

    // Check if scrolled past the threshold or hovered at the top
    if ((isHovered || scrollPosition < scrollThreshold)) {
      header.classList.remove("header-hidden", "header-no-shadow");
    } else {
      header.classList.add("header-hidden", "header-no-shadow");
    }
  }

  window.addEventListener("scroll", updateHeaderVisibility);

  window.addEventListener("mousemove", function (event) {
    // Check if the mouse is near the top of the view window
    isHovered = event.clientY < 50; // Adjust the value as needed
    updateHeaderVisibility();
  });
});
