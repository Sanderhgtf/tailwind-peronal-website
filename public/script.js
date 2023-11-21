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

// navbar disapear on scroll
  document.addEventListener('DOMContentLoaded', function () {
    // Get the header element
    var header = document.querySelector('header');

    // Get the height of the header
    var headerHeight = header.clientHeight;

    // Calculate the scroll position for hiding/showing the header
    var scrollThreshold = 0.3 * document.documentElement.scrollHeight;

    // Add an event listener for scroll events
    window.addEventListener('scroll', function () {
      // Get the current scroll position
      var scrollPosition = window.scrollY;

      // Check if the scroll position is beyond the threshold
      if (scrollPosition > scrollThreshold) {
        // If beyond the threshold, add a class to hide the header
        header.classList.add('hidden');
      } else {
        // If before the threshold, remove the class to show the header
        header.classList.remove('hidden');
      }
    });
  });

